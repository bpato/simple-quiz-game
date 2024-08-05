import { MODE, questions } from "../data/questions.json";

const getRandomInt = (max, avoidIds = []) => {
    let int = null;
    do {
        int = Math.floor(Math.random() * max);
    } while (avoidIds.includes(int));

    return int;
}

export const fillBoard = (idQuestion) => {
    const newBoard = Array(4).fill(null);
    
    const usedIds = [idQuestion];

    for (let index = 0; index < newBoard.length; index++) {
        let int = getRandomInt(questions.length, usedIds);
        newBoard[index] = questions[int].result[MODE.TRADUCTION];
        usedIds.push(int);
    }

    newBoard[Math.floor(Math.random() * newBoard.length)] = questions[idQuestion].result[MODE.TRADUCTION];

    return newBoard;
};