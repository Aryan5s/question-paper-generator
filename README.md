# Question-paper-generator
## Problem Statement :
Design and implement a Question Paper Generator application

The application must store a number of questions in a Question Store. A question can have the following attributes:
```
{“What is the speed of light”, “Physics”, “Waves”, “Easy”, 5}
```
Example : 
Assume the below requirement for a question paper:
```
(100 marks, Difficulty, {20% Easy, 50% Medium, 30% Hard })
```
The problem statement here is that you need to generate a question paper of 100 marks total of which 20% (ie, 20 marks) worth of questions should have the: Difficulty=Easy, 50% having Difficulty=Medium and 30% having Difficulty=Hard

## Running the Code Locally :
- Clone the Project :
```
https://github.com/Aryan5s/question-paper-generator.git
```
- Install Dependencies :
```
npm install
```
- Run The Server :
```
node index.js
```
The server will be running on localhost:5000
## Tech Stack : 
- NodeJs , ExpressJS
- Testing - Postman

## Testing the Response :
Follow the below steps:

Install Postman: If you haven't installed Postman, you can download and install it from the official website.

## Create a GET Request in Postman :
- Open Postman
- Create a new request by clicking on the "New" button and then selecting "Request."
- Give your request a name (e.g., "Get The Question Paper"). Select the HTTP method as "GET" Enter the URL for your local server, which is http://localhost:5000/createQuestionPaper.
- Send the Request: Click the "Send" button to send the request to your server.
