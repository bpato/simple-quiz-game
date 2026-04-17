import { useState } from 'react';

import { MenuScreen } from './components/MenuScreen';
import { ModeSelector } from './components/ModeSelector';
import { QuestionOption } from './components/QuestionOption';
import { WinnerModal } from './components/WinnerModal';

import { fillBoard } from './utils/board'

import confetti from 'canvas-confetti';

import './App.css'

import { MODE, questions } from "./data/questions.json";

const SCREENS = {
    MENU: 'menu',
    MODE: 'mode',
    GAME: 'game'
};

export default function App() {
    const [currentScreen, setCurrentScreen] = useState(SCREENS.MENU);
    const [gameMode, setGameMode] = useState('translation');

    const [indexQuestion, setIndexQuestion] = useState(() => {
        const lastId = parseInt(window.localStorage.getItem('idQuestion'));
        return lastId ? lastId : 0;
    });

    const [board, setBoard] = useState(fillBoard(indexQuestion, gameMode));

    const [finished, setFinished] = useState(false);
    const [completed, setCompleted] = useState(false);

    const getModeIndex = () => {
        switch (gameMode) {
            case 'onyomi': return MODE.ONYOMI;
            case 'kunyomi': return MODE.KUNYOMI;
            default: return MODE.TRADUCTION;
        }
    };

    const resetGame = () => {
        setFinished(false);
        setCompleted(false);
        setIndexQuestion(0);
        setBoard(fillBoard(0, gameMode));
        window.localStorage.setItem('idQuestion', 0);
    }

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
            confetti()
        } else {
            window.localStorage.setItem('idQuestion', newIndexQuestion);
            setIndexQuestion(newIndexQuestion);
            setBoard(fillBoard(newIndexQuestion, gameMode));

            confetti({
                particleCount: 100,
                spread: 70,
                origin: {
                    y: 0.4
                }
            });
        }
    }

    const handleStart = () => {
        setCurrentScreen(SCREENS.MODE);
    };

    const handleModeSelect = (mode) => {
        setGameMode(mode);
        setIndexQuestion(0);
        setBoard(fillBoard(0, mode));
        setFinished(false);
        setCompleted(false);
        window.localStorage.setItem('idQuestion', 0);
        setCurrentScreen(SCREENS.GAME);
    };

    const handleExit = () => {
        setCurrentScreen(SCREENS.MENU);
    };

    const handleBack = () => {
        setCurrentScreen(SCREENS.MENU);
    };

    if (currentScreen === SCREENS.MENU) {
        return (
            <div className="app">
                <MenuScreen onStart={handleStart} />
            </div>
        );
    }

    if (currentScreen === SCREENS.MODE) {
        return (
            <div className="app">
                <ModeSelector onModeSelect={handleModeSelect} onBack={handleBack} />
            </div>
        );
    }

    const modeIndex = getModeIndex();

    return (
        <div className="app">
            <main className='gq-board'>
                <header className="game-header">
                    <button className="exit-btn" onClick={handleExit}>✕</button>
                    <span className="question-counter">{indexQuestion + 1} / {questions.length}</span>
                </header>
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
                            result={questions[indexQuestion].result[modeIndex]}
                            record={indexQuestion + 1}
                            resetGame={resetGame}
                        >
                        </WinnerModal>
                    )
                }
            </main>
        </div>
    )
}