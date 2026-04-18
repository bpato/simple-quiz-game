export const HelpScreen = ({ onBack }) => {
    return (
        <div className="help-screen">
            <div className="help-content">
                <h1 className="help-title">Cómo jugar</h1>
                <div className="help-steps">
                    <div className="help-step">
                        <span className="help-step-number">1</span>
                        <p className="help-step-text">
                            <strong>Elige un modo</strong><br/>
                            Traducción, Onyomi o Kunyomi
                        </p>
                    </div>
                    <div className="help-step">
                        <span className="help-step-number">2</span>
                        <p className="help-step-text">
                            <strong>Selecciona la respuesta</strong><br/>
                            Elige entre las 4 opciones
                        </p>
                    </div>
                    <div className="help-step">
                        <span className="help-step-number">3</span>
                        <p className="help-step-text">
                            <strong>Avanza</strong><br/>
                            Cada respuesta correcta avanza a la siguiente pregunta
                        </p>
                    </div>
                    <div className="help-step">
                        <span className="help-step-number">4</span>
                        <p className="help-step-text">
                            <strong>Gana</strong><br/>
                            Completa todas las preguntas para ganar
                        </p>
                    </div>
                </div>
                <div className="help-modes">
                    <h2 className="help-modes-title">Modos de juego</h2>
                    <div className="help-mode-item">
                        <span className="help-mode-name">Traducción</span>
                        <span className="help-mode-desc">Elige el significado del kanji</span>
                    </div>
                    <div className="help-mode-item">
                        <span className="help-mode-name">Onyomi</span>
                        <span className="help-mode-desc">Elige la lectura en katakana</span>
                    </div>
                    <div className="help-mode-item">
                        <span className="help-mode-name">Kunyomi</span>
                        <span className="help-mode-desc">Elige la lectura en hiragana</span>
                    </div>
                </div>
                <button className="menu-btn-back" onClick={onBack}>
                    Volver
                </button>
            </div>
        </div>
    );
};