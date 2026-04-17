export const ModeSelector = ({ onModeSelect, onBack }) => {
    const modes = [
        {
            id: 'translation',
            title: 'Traducción',
            description: 'Elige el significado del kanji',
            icon: '📖'
        },
        {
            id: 'onyomi',
            title: 'Onyomi',
            description: 'Elige la lectura en katakana',
            icon: '🔤'
        },
        {
            id: 'kunyomi',
            title: 'Kunyomi',
            description: 'Elige la lectura en hiragana',
            icon: '✍️'
        }
    ];

    const questionCounts = [
        { id: 10, label: '10 preguntas' },
        { id: 20, label: '20 preguntas' },
        { id: 'all', label: 'Todos' }
    ];

    return (
        <div className="mode-screen">
            <div className="mode-content">
                <h2 className="mode-title">Selecciona el modo</h2>
                <div className="mode-options">
                    {modes.map((mode) => (
                        <button
                            key={mode.id}
                            className="mode-card"
                            onClick={() => onModeSelect(mode.id)}
                        >
                            <span className="mode-icon">{mode.icon}</span>
                            <span className="mode-name">{mode.title}</span>
                            <span className="mode-desc">{mode.description}</span>
                        </button>
                    ))}
                </div>
                <button className="menu-btn-back" onClick={onBack}>
                    Volver
                </button>
            </div>
        </div>
    );
};