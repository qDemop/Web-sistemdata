import React, { useEffect, useState } from "react";
import BarsChart from "./BarsChart.jsx";
import BarsChart2 from "./BarsChart2.jsx";
import BarsChart3 from "./BarsChart3.jsx";
import TablaChart from "./TablaChart.jsx";

function App() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        setIsDarkMode(darkModeMediaQuery.matches);

        const listener = (e) => setIsDarkMode(e.matches);
        darkModeMediaQuery.addEventListener("change", listener);

        return () => darkModeMediaQuery.removeEventListener("change", listener);
    }, []);

    const colors = {
        background: isDarkMode ? "#111827" : "#ffffff",
        chartBox: isDarkMode ? "#1f2937" : "#f0f0f0",
        border: isDarkMode ? "#4b5563" : "#cccccc",
        text: isDarkMode ? "#f3f4f6" : "#1f2937",
        titleBg: "#059669",
        titleText: "#ffffff",
        separator: isDarkMode ? "#6b7280" : "#999999",
    };

    const chartBoxStyle = {
        backgroundColor: colors.chartBox,
        margin: "20px auto",
        padding: "20px",
        border: `2px solid ${colors.border}`,
        borderRadius: "10px",
        width: "1200px",
        height: "930px",
        color: colors.text,
        boxSizing: "border-box",
    };

    const tablaBoxStyle = {
        ...chartBoxStyle,
        width: "850px",
        height: "1750px",
    };

    const tituloStyle = {
        backgroundColor: colors.titleBg,
        color: colors.titleText,
        textAlign: "center",
        fontFamily: "monospace",
        fontWeight: "bold",
        padding: "15px",
        fontSize: "24px",
        borderRadius: "10px",
    };

    const subtituloStyle = {
        marginBottom: "10px",
        fontWeight: "600",
        color: colors.text,
    };

    const separadorStyle = {
        margin: "40px auto",
        border: `1px solid ${colors.separator}`,
        width: "80%",
    };

    const appContainerStyle = {
        padding: "20px",
        backgroundColor: colors.background,
        minHeight: "100vh",
    };

    return (
        <div style={appContainerStyle}>
            <h1 style={tituloStyle}>Visualización de Datos Ambientales</h1>

            <div style={{ marginTop: "40px" }}>
                <p style={subtituloStyle}>Gráfico de barras: Paneles solares y ambiente</p>
                <div style={chartBoxStyle}>
                    <BarsChart />
                </div>
            </div>

            <div style={{ marginTop: "40px" }}>
                <p style={subtituloStyle}>Comparación de tensiones</p>
                <div style={chartBoxStyle}>
                    <BarsChart2 />
                </div>
            </div>

            <div style={{ marginTop: "40px" }}>
                <p style={subtituloStyle}>Comparación de corrientes</p>
                <div style={chartBoxStyle}>
                    <BarsChart3 />
                </div>
            </div>

            <hr style={separadorStyle} />

            <div style={{ marginTop: "40px" }}>
                <p style={subtituloStyle}>Tabla de datos recogidos</p>
                <div style={tablaBoxStyle}>
                    <TablaChart />
                </div>
            </div>
        </div>
    );
}

export default App;
