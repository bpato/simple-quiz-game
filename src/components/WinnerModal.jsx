export const WinnerModal = ({completed, value, result, record, resetGame}) => {

    const handleClick = () => {
        resetGame();
    }

    return (
        <section className='gq-winner-modal'>
            <div className='gq-winner-modal-text'>
                <h2>
                    {
                        completed ? "Congratulations! " : "You lost! "
                    }
                    Record: {record}
                </h2>
                {
                    ! completed && (
                        <header className='gq-game-header'>
                            <span className='gq-game-question'>{value}</span>
                            <span className='gq-game-result'>{result}</span>
                        </header>
                    )
                }
                <footer>
                    <button className='gq-game-button' onClick={handleClick}>New Game</button>
                </footer>
            </div>
        </section>
    );
}