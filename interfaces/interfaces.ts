// Typescript type checking is about duck typing
import {Human} from "../source-code/human";

function printMessage(message: { headline: string, body: string }): void {
    console.log(`${message.headline} ${message.body}`);
}

let newsArticle = {
    newspaper: "Sunshine times",
    headline: "Johnnie strikes again!",
    body: "Once upon a time..."
};

// even though newsArticle does not strictly conform to the required type - it's legal
printMessage(newsArticle);

// names are given only once
interface HumanInterface {
    readonly firstName: string,
    readonly lastName: string
}

let human: HumanInterface = {firstName: "Sanches", lastName: "Shem"};
// human.firstName = "Sasha"; // cannot assign - readonly property