import { MODE, questions } from "../data/questions.json";

const getRandomInt = (max, avoidIds = []) => {
    let int = null;
    do {
        int = Math.floor(Math.random() * max);
    } while (avoidIds.includes(int));
    return int;
};

const getModeIndex = (mode) => {
    switch (mode) {
        case 'onyomi': return MODE.ONYOMI;
        case 'kunyomi': return MODE.KUNYOMI;
        default: return MODE.TRADUCTION;
    }
};

const getValidQuestions = (modeIndex) => {
    return questions.filter(q => q.result[modeIndex] && q.result[modeIndex].trim() !== '');
};

export const fillBoard = (idQuestion, mode = 'translation') => {
    const modeIndex = getModeIndex(mode);
    const validQuestions = getValidQuestions(modeIndex);
    
    if (validQuestions.length === 0) {
        return Array(4).fill('Sin opciones');
    }

    const correctQuestion = validQuestions.find(q => q === questions[idQuestion]) || questions[idQuestion];
    const correctAnswer = correctQuestion.result[modeIndex];

    const newBoard = Array(4).fill(null);
    const usedIds = [idQuestion];

    let placedCorrect = false;
    const randomPos = Math.floor(Math.random() * 4);

    for (let index = 0; index < 4; index++) {
        let validOpts = validQuestions.filter(q => !usedIds.includes(questions.indexOf(q)));
        
        if (validOpts.length === 0) break;
        
        let int = Math.floor(Math.random() * validOpts.length);
        let selected = validOpts[int];
        let selectedIdx = questions.indexOf(selected);
        
        if (index === randomPos && !placedCorrect) {
            newBoard[index] = correctAnswer;
            placedCorrect = true;
        } else {
            newBoard[index] = selected.result[modeIndex];
            usedIds.push(selectedIdx);
        }
    }

    if (!placedCorrect) {
        newBoard[randomPos] = correctAnswer;
    }

    return newBoard;
};