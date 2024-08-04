export const QuestionOption = ({ children, updateBoard, index }) => {

    const handleClick = (e) => {
        updateBoard(e, index);
    }

    return (
        <div className='gq-game-cell' key={index} onClick={handleClick}>
            {children}
        </div>
    )
};