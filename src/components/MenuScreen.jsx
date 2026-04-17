export const MenuScreen = ({ onStart }) => {
    return (
        <div className="menu-screen">
            <div className="menu-content">
                <h1 className="menu-title">Kanji Quiz</h1>
                <p className="menu-subtitle">JLPT N5</p>
                <div className="menu-buttons">
                    <button className="menu-btn menu-btn-primary" onClick={onStart}>
                        Jugar
                    </button>
                    <button className="menu-btn">
                        Cómo jugar
                    </button>
                    <button className="menu-btn">
                        Acerca de
                    </button>
                </div>
            </div>
        </div>
    );
};