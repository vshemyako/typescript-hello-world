function printMessage(message) {
    console.log(`${message.headline} ${message.body}`);
}
let newsArticle = {
    newspaper: "Sunshine times",
    headline: "Johnnie strikes again!",
    body: "Once upon a time..."
};
// even though newsArticle does not strictly conform to the required type - it's legal
printMessage(newsArticle);
let human = { firstName: "Sanches", lastName: "Shem" };
human.firstName = "Sasha"; // cannot assign - readonly property
