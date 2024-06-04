import React from 'react';

function Leaderboard({ topScorers }) {
    return (
        <div className="container">
            <h1>Leaderboard</h1>
            <ol>
                {topScorers.map((scorer, index) => (
                    <li key={index}>{scorer.name}: {scorer.score}</li>
                ))}
            </ol>
        </div>
    );
}

export default Leaderboard;
