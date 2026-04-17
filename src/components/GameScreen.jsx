import { useState } from 'react';
import confetti from 'canvas-confetti';

import { QuestionOption } from './QuestionOption';
import { WinnerModal } from './WinnerModal';

import { fillBoard } from '../utils/board'

import { MODE, questions } from "../data/questions.json";

export const GameScreen = ({ mode, onExit }) => {

    const [indexQuestion, setIndexQuestion] = useState(0);
    const [board, setBoard] = useState(fillBoard(0, mode));
    const [finished, setFinished] = useState(false);
    const [completed, setCompleted] = useState(false);

    const getModeIndex = () => {
        switch (mode) {
            case 'onyomi': return MODE.ONYOMI;
            case 'kunyomi': return MODE.KUNYOMI;
            default: return MODE.TRADUCTION;
        }
    };

    const resetGame = () => {
        setFinished(false);
        setCompleted(false);
        setIndexQuestion(0);
        setBoard(fillBoard(0, mode));
    };

    const updateBoard = (e, index) => {
        const modeIndex = getModeIndex();

        if (board[index] !== questions[indexQuestion].result[modeIndex]) {
            setFinished(true);
            return;
        }

        const newIndexQuestion = indexQuestion + 1;

        if (newIndexQuestion >= questions.length) {
            setFinished(true);
            setCompleted(true);
            confetti();
        } else {
            setIndexQuestion(newIndexQuestion);
            setBoard(fillBoard(newIndexQuestion, mode));
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.4 }
            });
        }
    };

    const modeIndex = getModeIndex();
    const currentQuestion = questions[indexQuestion];

    return (
        <main className='gq-board'>
            <header className="game-header">
                <button className="exit-btn" onClick={onExit}>✕</button>
                <span className="question-counter">{indexQuestion + 1} / {questions.length}</span>
            </header>
            <section className='gq-game'>
                <header className='gq-game-header'>
                    <span className='gq-game-question'>{currentQuestion.value}</span>
                </header>
                <div className='gq-game-responses'>
                    {board.map((_, index) => (
                        <QuestionOption
                            key={index}
                            index={index}
                            updateBoard={updateBoard}
                        >
                            {board[index]}
                        </QuestionOption>
                    ))}
                </div>
            </section>
            <section className='gq-footer'>
                <span>Correcto: {indexQuestion + 1}</span>
            </section>
            {finished && (
                <WinnerModal
                    completed={completed}
                    value={currentQuestion.value}
                    result={currentQuestion.result[modeIndex]}
                    record={indexQuestion + 1}
                    resetGame={resetGame}
                />
            )}
        </main>
    );
};