const express = require('express')
const app = express()
const PORT = 5000
const fs = require('fs')

let rawdata = fs.readFileSync('questionStore.json');
let questions = JSON.parse(rawdata); // Array of question Objects
// console.log(questions);

// const easyQuestions = questions.filter(question => question.difficulty = 'Easy')
// const mediumQuestions = questions.filter(question => question.difficulty = 'Medium')
// const hardQuestions = questions.filter(question => question.difficulty = 'Hard')

let totalMarks = 100
let easyMarks = 20
let mediumMarks = 50
let hardMarks = 30

// console.log(questionPaper);

app.get('/' , (req , res) =>{
    res.json('Reelo Internship Assignment : Question Paper Generator')
})

app.get('/createQuestionPaper' , (req , res) => {
    try {
        let questionPaper = []
    while (totalMarks > 0) {
    if (easyMarks < 5 && mediumMarks < 10 && hardMarks < 15) {
        console.log("Not enough questions or marks to continue!");
        break;
    }

    const randomIndex = Math.floor(Math.random() * questions.length);
    const ques = questions[randomIndex];

    if (ques.difficulty === 'Easy' && easyMarks >= 5) {
        totalMarks -= 5;
        easyMarks -= 5;
    } else if (ques.difficulty === 'Medium' && mediumMarks >= 10) {
        totalMarks -= 10;
        mediumMarks -= 10;
    } else if (ques.difficulty === 'Hard' && hardMarks >= 15) {
        totalMarks -= 15;
        hardMarks -= 15;
    }
    questionPaper.push(ques)
}
// console.log(questionPaper)
res.send(questionPaper)
    } catch (error) {
        return res.status(400).json({
            'error' : error.message
        })
    }
})

app.listen(PORT , () => {
    console.log(`Server is Listening on Port : ${PORT}`)
})
