import confetti from 'canvas-confetti';

import { QuestionOption } from './components/QuestionOption';
import { WinnerModal } from './components/WinnerModal';

import { fillBoard } from './utils/board'

import { useState } from 'react';

import './App.css'


import { MODE, questions } from "./data/questions.json";


export default function App() {

    const [indexQuestion, setIndexQuestion] = useState(() => {
        const lastId = parseInt(window.localStorage.getItem('idQuestion'));

        return lastId ? lastId : 0;
    });

    const [board, setBoard] = useState(fillBoard(indexQuestion));

    const [finished, setFinished] = useState(false);
    const [completed, setCompleted] = useState(false);
    
    const resetGame = () => {
        setFinished(false);
        setCompleted(false);
        setIndexQuestion(0);
        setBoard(fillBoard(0));
        window.localStorage.setItem('idQuestion', 0);
    }

    const updateBoard = (e, index) => {

        if (board[index] !== questions[indexQuestion].result[MODE.TRADUCTION]) {
            setFinished(true);
            return;
        }

        const newIndexQuestion = indexQuestion + 1
        console.log("NEXT", newIndexQuestion);

        if (newIndexQuestion >= questions.length) {
            // WIN
            console.log("WIN");
            setFinished(true);
            setCompleted(true);

            confetti()
        } else {
            window.localStorage.setItem('idQuestion', newIndexQuestion);
            setIndexQuestion(newIndexQuestion);
            setBoard(fillBoard(newIndexQuestion));

            confetti({
                particleCount: 100,
                spread: 70,
                origin: {
                    y: 0.4  
                }
            });
        }

    }

    return (
        <main className='gq-board'>
            <h1>Simple Quiz Game</h1>
            <section className='gq-game'>
                <header className='gq-game-header'>
                    <span className='gq-game-question'>{questions[indexQuestion].value}</span>
                </header>
                <div className='gq-game-responses'>
                    {
                        board.map((_, index) => {
                            return (
                                <QuestionOption
                                    key={index}
                                    index={index}
                                    updateBoard={updateBoard}
                                >
                                    {board[index]}
                                </QuestionOption>
                            )
                        })
                    }
                </div>
            </section>
            <section className='gq-footer'>
                <span>Correct combo x{indexQuestion + 1}</span>
                <button className='gq-game-button' onClick={resetGame}>Reset Game</button>
            </section>
            {
                finished && (
                    <WinnerModal
                        completed={completed}
                        value={questions[indexQuestion].value}
                        result={questions[indexQuestion].result[MODE.TRADUCTION]}
                        record={indexQuestion + 1}
                        resetGame={resetGame}
                    >
                    </WinnerModal>
                )
            }
        </main>
    )
}