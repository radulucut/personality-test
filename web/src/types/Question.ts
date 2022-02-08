export interface Question {
    text: string;
    answers: Answer[];
}

export interface Answer {
    text: string;
    value: number;
}