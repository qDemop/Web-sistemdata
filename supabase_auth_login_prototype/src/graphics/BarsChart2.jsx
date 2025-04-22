import React, { useState, useRef, useEffect } from "react";
import { Bar, Line } from "react-chartjs-2";
import { supabase } from "./supabaseClient.jsx";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import zoomPlugin from "chartjs-plugin-zoom";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    zoomPlugin
);

const VARIABLES = {
    V_P_SIN_POLVO: "Tensión panel policristalino sin polvo",
    V_P_CON_POLVO: "Tensión panel policristalino con polvo",
    V_M_SIN_POLVO: "Tensión panel monocristalino sin polvo",
    V_M_CON_POLVO: "Tensión panel monocristalino con polvo",
    I_P_SIN_POLVO: "Corriente panel policristalino sin polvo",
    I_P_CON_POLVO: "Corriente panel policristalino con polvo",
    I_M_SIN_POLVO: "Corriente panel monocristalino sin polvo",
    I_M_CON_POLVO: "Corriente panel monocristalino con polvo",
};

const meses = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
];

const generarDiasDelMes = (mes, anio = 2021) => {
    if (!mes) return [];
    const ultimoDia = new Date(anio, mes, 0).getDate();
    return Array.from({ length: ultimoDia }, (_, i) => i + 1);
};

const TemperaturasChart = () => {
    const [datosFiltrados, setDatosFiltrados] = useState([]);
    const [loading, setLoading] = useState(false);
    const [filtroMes, setFiltroMes] = useState("");
    const [filtroDia, setFiltroDia] = useState("");
    const [filtroHora, setFiltroHora] = useState("");
    const [variableSeleccionada, setVariableSeleccionada] = useState("V_P_SIN_POLVO");
    const [tipoGrafico, setTipoGrafico] = useState("bar");
    const [darkMode, setDarkMode] = useState(false);
    const [mensaje, setMensaje] = useState("");
    const chartRef = useRef(null);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
        setDarkMode(mediaQuery.matches);
        const listener = (e) => setDarkMode(e.matches);
        mediaQuery.addEventListener("change", listener);
        return () => mediaQuery.removeEventListener("change", listener);
    }, []);

    const getGradient = (ctx, chartArea) => {
        const gradient = ctx.createLinearGradient(chartArea.left, 0, chartArea.right, 0);
        gradient.addColorStop(0, "#C9EF26");
        gradient.addColorStop(0.5, "#00B5BB");
        gradient.addColorStop(1, "#072C51");
        return gradient;
    };

    const fetchDatosFiltrados = async () => {
        setLoading(true);
        setMensaje("");
        setDatosFiltrados([]);

        const year = 2021;
        let desde = new Date(`${year}-01-01T00:00:00`);
        let hasta = new Date(`${year}-12-31T23:59:59`);

        if (filtroMes) {
            const mesNum = filtroMes.padStart(2, "0");
            desde = new Date(`${year}-${mesNum}-01T00:00:00`);
            hasta = new Date(year, parseInt(filtroMes), 0, 23, 59, 59);
        }

        if (filtroDia) {
            desde.setDate(parseInt(filtroDia));
            hasta = new Date(desde);
            hasta.setHours(23, 59, 59);
        }

        if (filtroHora) {
            desde.setHours(parseInt(filtroHora), 0, 0);
            hasta = new Date(desde);
            hasta.setHours(parseInt(filtroHora), 59, 59);
        }

        let allData = [];
        let page = 0;
        const pageSize = 1000;
        let finished = false;

        while (!finished) {
            const { data, error } = await supabase
                .from("Temperaturas")
                .select(`Fecha, ${variableSeleccionada}`)
                .gte("Fecha", desde.toISOString())
                .lte("Fecha", hasta.toISOString())
                .order("Fecha", { ascending: true })
                .range(page * pageSize, (page + 1) * pageSize - 1);

            if (error) {
                console.error("Error al obtener datos:", error);
                setMensaje("Error al consultar la base de datos.");
                break;
            }

            if (data.length === 0) {
                finished = true;
            } else {
                allData = [...allData, ...data];
                page++;
                if (data.length < pageSize) finished = true;
            }
        }

        if (allData.length === 0) {
            setMensaje("No se encontraron datos.");
        }

        setDatosFiltrados(allData);
        setLoading(false);
    };

    const limpiarFiltros = () => {
        setFiltroMes("");
        setFiltroDia("");
        setFiltroHora("");
        setDatosFiltrados([]);
        setMensaje("");
    };

    const labels = datosFiltrados.map((d) => new Date(d.Fecha).toLocaleString());
    const dataValues = datosFiltrados.map((d) => d[variableSeleccionada]);

    const data = {
        labels,
        datasets: [
            {
                label: VARIABLES[variableSeleccionada],
                data: dataValues,
                fill: tipoGrafico === "line",
                backgroundColor: (context) => {
                    const { chart } = context;
                    if (!chart.chartArea) return null;
                    return getGradient(chart.ctx, chart.chartArea);
                },
                borderColor: (context) => {
                    const { chart } = context;
                    if (!chart.chartArea) return null;
                    return getGradient(chart.ctx, chart.chartArea);
                },
                tension: 0.3,
                pointBackgroundColor: darkMode ? "#90caf9" : "#2e7d32",
            },
        ],
    };

    const options = {
        responsive: true,
        devicePixelRatio: 2,
        plugins: {
            legend: {
                labels: {
                    color: darkMode ? "#ffffff" : "#000000",
                },
            },
            tooltip: {
                backgroundColor: darkMode ? "#333" : "#fff",
                titleColor: darkMode ? "#fff" : "#000",
                bodyColor: darkMode ? "#ccc" : "#333",
            },
            zoom: {
                pan: { enabled: true, mode: "x" },
                zoom: {
                    wheel: { enabled: true },
                    pinch: { enabled: true },
                    mode: "x",
                },
            },
        },
        scales: {
            y: {
                ticks: { color: darkMode ? "#ffffff" : "#000000" },
                grid: { color: darkMode ? "#444" : "#ccc" },
            },
            x: {
                ticks: { color: darkMode ? "#ffffff" : "#000000" },
                grid: { color: darkMode ? "#444" : "#ccc" },
            },
        },
    };

    const ChartComponent = tipoGrafico === "bar" ? Bar : Line;

    const baseStyle = {
        padding: "16px",
        backgroundColor: darkMode ? "#1a1a1a" : "#ffffff",
        color: darkMode ? "#ffffff" : "#000000",
        minHeight: "100vh",
        fontFamily: "sans-serif",
    };

    const selectStyle = {
        border: "1px solid #ccc",
        padding: "5px 10px",
        marginRight: "10px",
    };

    const buttonStyle = {
        padding: "5px 12px",
        marginRight: "10px",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
    };

    return (
        <div style={baseStyle}>
            <h2 style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "16px" }}>
                Gráfico de tensión y corriente en paneles con y sin polvo
            </h2>

            <div style={{ marginBottom: "16px", display: "flex", flexWrap: "wrap", gap: "10px" }}>
                <select style={selectStyle} value={filtroMes} onChange={(e) => { setFiltroMes(e.target.value); setFiltroDia(""); }}>
                    <option value="">Mes</option>
                    {meses.map((mes, idx) => (
                        <option key={idx} value={String(idx + 1)}>{mes}</option>
                    ))}
                </select>

                <select style={selectStyle} value={filtroDia} onChange={(e) => setFiltroDia(e.target.value)}>
                    <option value="">Día</option>
                    {generarDiasDelMes(filtroMes).map((d) => (
                        <option key={d} value={d}>{d}</option>
                    ))}
                </select>

                <select style={selectStyle} value={filtroHora} onChange={(e) => setFiltroHora(e.target.value)}>
                    <option value="">Hora</option>
                    {Array.from({ length: 24 }, (_, h) => (
                        <option key={h} value={h}>{`${h}:00`}</option>
                    ))}
                </select>

                <select style={selectStyle} value={variableSeleccionada} onChange={(e) => setVariableSeleccionada(e.target.value)}>
                    {Object.keys(VARIABLES).map((key) => (
                        <option key={key} value={key}>{VARIABLES[key]}</option>
                    ))}
                </select>

                <select style={selectStyle} value={tipoGrafico} onChange={(e) => setTipoGrafico(e.target.value)}>
                    <option value="bar">Barras</option>
                    <option value="line">Líneas</option>
                </select>

                <button onClick={fetchDatosFiltrados} style={{ ...buttonStyle, backgroundColor: "#007bff", color: "#fff" }}>
                    Mostrar gráfico
                </button>

                <button onClick={limpiarFiltros} style={{ ...buttonStyle, backgroundColor: "#6c757d", color: "#fff" }}>
                    Limpiar filtros
                </button>
            </div>

            {loading && <p>Cargando datos...</p>}
            {mensaje && <p style={{ color: "red" }}>{mensaje}</p>}
            {!loading && datosFiltrados.length > 0 && (
                <ChartComponent ref={chartRef} data={data} options={options} />
            )}
        </div>
    );
};

export default TemperaturasChart;
