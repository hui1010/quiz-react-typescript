// logic for tetching data from API 

import { shuffleArray } from "./utils"

export type Question = {
    category: string;
    correct_answer: string;
    difficulty: string;
    incorrrect_answers: string[];
    question: string;
    type: string;
}

// use the type of Qustion and add one more property to it
export type QuestionState = Question & {
    answers: string[]
}

export enum Difficulty {
    EASY = "EASY", MEDIUM = "MEDIUM", HARD = "HARD"
}

export const fetchQuizQuestions = async (amount: number, difficulty: Difficulty) => {
    const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`
    // await for fetch, then await for converting it to json
    const data = await (await fetch(endpoint)).json()
    // console.log(data)
    return data.results.map((question: Question) => (
        {
            ...question,
           answers: shuffleArray([...question.incorrrect_answers, question.correct_answer])
        }
    ))
}