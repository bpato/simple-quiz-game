export const AboutScreen = ({ onBack }) => {
    return (
        <div className="about-screen">
            <div className="about-content">
                <h1 className="about-title">Acerca de</h1>
                <div className="about-description">
                    <p className="about-text">
                        <strong>Kanji Quiz</strong> es una aplicación web diseñada para 
                        ayudarte a aprender los kanjis del nivel JLPT N5.
                    </p>
                    <p className="about-text">
                        El objetivo es mejorar tu reconocimiento de kanjis a través 
                        de un juego rápido y divertido.
                    </p>
                </div>
                <div className="about-info">
                    <div className="about-item">
                        <span className="about-label">Versión</span>
                        <span className="about-value">1.1.0</span>
                    </div>
                    <div className="about-item">
                        <span className="about-label">Kanjis incluidos</span>
                        <span className="about-value">162</span>
                    </div>
                    <div className="about-item">
                        <span className="about-label">Nivel</span>
                        <span className="about-value">JLPT N5</span>
                    </div>
                </div>
                <div className="about-tech">
                    <h2 className="about-tech-title">Tecnologías</h2>
                    <div className="about-tags">
                        <span className="about-tag">React</span>
                        <span className="about-tag">Vite</span>
                        <span className="about-tag">JavaScript</span>
                    </div>
                </div>
                <button className="menu-btn-back" onClick={onBack}>
                    Volver
                </button>
            </div>
        </div>
    );
};