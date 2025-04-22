import React, { useEffect, useState } from "react";
import { supabase } from "./supabaseClient";
import DataTable from "react-data-table-component";

const VARIABLE_LABELS = {
    T_P_SIN_POLVO: "Temperatura panel policristalino sin polvo",
    T_M_SIN_POLVO: "Temperatura panel monocristalino sin polvo",
    T_M_CON_POLVO: "Temperatura panel monocristalino con polvo",
    T_P_CON_POLVO: "Temperatura panel policristalino con polvo",
    T_AMBIENTE: "Temperatura ambiente",
    V_P_SIN_POLVO: "Tensión panel policristalino sin polvo",
    V_P_CON_POLVO: "Tensión panel policristalino con polvo",
    V_M_SIN_POLVO: "Tensión panel monocristalino sin polvo",
    V_M_CON_POLVO: "Tensión panel monocristalino con polvo",
    I_P_SIN_POLVO: "Corriente panel policristalino sin polvo",
    I_P_CON_POLVO: "Corriente panel policristalino con polvo",
    I_M_SIN_POLVO: "Corriente panel monocristalino sin polvo",
    I_M_CON_POLVO: "Corriente panel monocristalino con polvo",
    Irradiancia: "Irradiancia (W/m2)",
};

const VARIABLES = Object.keys(VARIABLE_LABELS);
const PAGE_SIZE = 1000;

const MESES = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
];

const obtenerDiasDelMes = (mes, anio = 2021) => {
    if (!mes) return 31;
    return new Date(anio, parseInt(mes), 0).getDate();
};

const TemperaturasTable = () => {
    const [temperaturas, setTemperaturas] = useState([]);
    const [loading, setLoading] = useState(false);
    const [filtroMes, setFiltroMes] = useState("");
    const [filtroDia, setFiltroDia] = useState("");
    const [filtroHora, setFiltroHora] = useState("");
    const [errorMensaje, setErrorMensaje] = useState("");
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
        setDarkMode(mediaQuery.matches);
        const handleChange = (e) => setDarkMode(e.matches);
        mediaQuery.addEventListener("change", handleChange);
        return () => mediaQuery.removeEventListener("change", handleChange);
    }, []);

    const calcularFechasFiltro = () => {
        const year = 2021;
        const mes = filtroMes ? parseInt(filtroMes) : null;
        const dia = filtroDia ? parseInt(filtroDia) : null;
        const hora = filtroHora ? parseInt(filtroHora) : null;

        if (!mes) return null;

        const fechaInicio = new Date(year, mes - 1, dia || 1, hora || 0, 0, 0);
        let fechaFin;

        if (mes && dia && hora !== null) {
            fechaFin = new Date(year, mes - 1, dia, hora + 1);
        } else if (mes && dia) {
            fechaFin = new Date(year, mes - 1, dia + 1);
        } else {
            fechaFin = new Date(year, mes, 1);
        }

        return { from: fechaInicio.toISOString(), to: fechaFin.toISOString() };
    };

    const fetchTemperaturas = async () => {
        setLoading(true);
        setTemperaturas([]);
        setErrorMensaje("");

        const rangoFechas = calcularFechasFiltro();
        let page = 0;
        let allData = [];
        let finished = false;

        while (!finished) {
            let query = supabase
                .from("Temperaturas")
                .select([...VARIABLES, "Fecha"].join(", "))
                .order("Fecha", { ascending: true })
                .range(page * PAGE_SIZE, (page + 1) * PAGE_SIZE - 1);

            if (rangoFechas) {
                query = query.gte("Fecha", rangoFechas.from).lt("Fecha", rangoFechas.to);
            }

            const { data, error } = await query;

            if (error) {
                console.error("Error al obtener datos:", error);
                setErrorMensaje("Error al obtener datos desde Supabase.");
                break;
            }

            if (data.length < PAGE_SIZE) finished = true;

            allData = [...allData, ...data];
            page++;
        }

        setTemperaturas(allData);
        setLoading(false);
    };

    const resetFiltros = () => {
        setFiltroMes("");
        setFiltroDia("");
        setFiltroHora("");
        setErrorMensaje("");
        setTemperaturas([]);
    };

    const columnas = [
        {
            name: "Fecha y Hora",
            selector: (row) => new Date(row.Fecha).toLocaleString(),
            sortable: true,
            wrap: true,
        },
        ...VARIABLES.map((variable) => ({
            name: VARIABLE_LABELS[variable],
            selector: (row) => row[variable],
            sortable: true,
            wrap: true,
        })),
    ];

    const customStyles = {
        headCells: {
            style: {
                backgroundColor: "#f3f4f6",
                color: "#111827",
                fontWeight: "bold",
                fontSize: "13px",
                textAlign: "center",
                justifyContent: "center",
                minHeight: "72px",
                whiteSpace: "normal",
                lineHeight: "1.3",
                paddingLeft: "8px",
                paddingRight: "8px",
            },
        },
        cells: {
            style: {
                justifyContent: "center",
                textAlign: "center",
                fontSize: "13px",
                paddingTop: "8px",
                paddingBottom: "8px",
            },
        },
    };

    return (
        <div className={`p-4 ${darkMode ? "bg-gray-900 text-white" : "bg-white text-black"}`}>
            <h2 className="text-xl font-bold mb-4">Tabla de sensores</h2>

            <div className="mb-4 flex flex-wrap gap-2 items-center">
                <select
                    value={filtroMes}
                    onChange={(e) => {
                        setFiltroMes(e.target.value);
                        setFiltroDia(""); // reiniciar día al cambiar mes
                    }}
                    className="border px-2 py-1"
                >
                    <option value="">Mes</option>
                    {MESES.map((nombre, index) => (
                        <option key={index} value={String(index + 1).padStart(2, "0")}>
                            {nombre}
                        </option>
                    ))}
                </select>

                <select
                    value={filtroDia}
                    onChange={(e) => setFiltroDia(e.target.value)}
                    className="border px-2 py-1"
                >
                    <option value="">Día</option>
                    {[...Array(obtenerDiasDelMes(filtroMes))].map((_, i) => (
                        <option key={i} value={String(i + 1).padStart(2, "0")}>
                            {i + 1}
                        </option>
                    ))}
                </select>

                <select value={filtroHora} onChange={(e) => setFiltroHora(e.target.value)} className="border px-2 py-1">
                    <option value="">Hora</option>
                    {[...Array(24)].map((_, i) => (
                        <option key={i} value={String(i).padStart(2, "0")}>
                            {i}:00
                        </option>
                    ))}
                </select>

                <button onClick={fetchTemperaturas} className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600">
                    Buscar
                </button>
                <button onClick={resetFiltros} className="bg-gray-500 text-white px-4 py-1 rounded hover:bg-gray-600">
                    Reiniciar filtros
                </button>
            </div>

            {errorMensaje && (
                <div className="mb-4 text-red-600 font-semibold transition-opacity duration-500">
                    ⚠️ {errorMensaje}
                </div>
            )}

            {loading ? (
                <p>Cargando datos...</p>
            ) : (
                <DataTable
                    columns={columnas}
                    data={temperaturas}
                    pagination
                    highlightOnHover
                    customStyles={customStyles}
                    paginationComponentOptions={{
                        rowsPerPageText: "Cantidad a mostrar por página",
                        rangeSeparatorText: "de",
                    }}
                    noDataComponent="No hay datos para mostrar"
                    theme={darkMode ? "dark" : "light"}
                />
            )}
        </div>
    );
};

export default TemperaturasTable;
