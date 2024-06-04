import React, { useState } from 'react';
import './App.css';

function Quiz({ quizData, onQuizComplete }) {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [userAnswers, setUserAnswers] = useState({});
    const [score, setScore] = useState(0);

    const handleAnswer = (answer) => {
        const isCorrect = quizData[currentQuestion].correctAnswer === answer;
        const nextQuestion = currentQuestion + 1;

        setUserAnswers({ ...userAnswers, [currentQuestion]: answer });
        setScore(score + (isCorrect ? 1 : 0));

        if (nextQuestion < quizData.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            onQuizComplete(score + (isCorrect ? 1 : 0));
        }
    };

    return (
        <div className="container">
            <h1>{quizData[currentQuestion].question}</h1>
            <ul>
                {quizData[currentQuestion].options.map((option, index) => (
                    <li
                        key={index}
                        onClick={() => handleAnswer(option)}
                        className={userAnswers[currentQuestion] === option ? 'selected' : ''}
                    >
                        {option}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Quiz;
