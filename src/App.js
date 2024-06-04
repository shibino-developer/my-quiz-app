import React, { useState } from 'react';
import Quiz from './Quiz';
import Leaderboard from './Leaderboard';
import quizData from './quizData.json';
import './App.css';

const sampleTopScorers = [
    { name: 'Alice', score: 5 },
    { name: 'Bob', score: 4 },
    { name: 'Charlie', score: 3 },
];

function App() {
    const [showLeaderboard, setShowLeaderboard] = useState(false);
    const [topScorers, setTopScorers] = useState(sampleTopScorers);
    const [currentUserScore, setCurrentUserScore] = useState(null);

    const handleQuizCompletion = (score) => {
        alert(`Quiz completed! Your score: ${score}`);

        const newTopScorers = [...topScorers, { name: 'You', score }];
        newTopScorers.sort((a, b) => b.score - a.score);

        setTopScorers(newTopScorers);
        setCurrentUserScore(score);
        setShowLeaderboard(true);
    };

    return (
        <div id="root">
            <h1>Welcome to the Quiz App</h1>
            {!showLeaderboard ? (
                <Quiz quizData={quizData} onQuizComplete={handleQuizCompletion} />
            ) : (
                <Leaderboard topScorers={topScorers} />
            )}
            <footer>
                &copy; 2024 Quiz App | Developed by Shibino Abraham. All rights reserved.
            </footer>
        </div>
    );
}

export default App;
