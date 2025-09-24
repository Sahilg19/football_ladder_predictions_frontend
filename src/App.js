// src/App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import OfficialStandings from './OfficialStandings';
import PredictionsTable from './PredictionsTable';
import Leaderboard from "./Leaderboard"; // Import the new component

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Replace with your Flask backend URL if it's different
    const API_URL = process.env.REACT_APP_API_URL;

    fetch(API_URL)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Could not fetch data:", error);
        setError(error);
        setLoading(false);
      });
  }, []); 

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="App">
      <header className="App-header">
      <nav className="navbar">
        <div className="navbar-brand"> Premier League Predictions</div>
        <div className="navbar-links">
          {/* You can add links or buttons here later */}
        </div>
      </nav>
      </header>
      <main>
        {data && (
          <>
            <Leaderboard scores={data.scores} />  {/* 👈 NEW leaderboard */}
            <div className="tables-container">
              <div className="standings">
                <h2>Current Standings</h2>
                <div>
                  <OfficialStandings standings={data.standings.table} />
                </div>
              </div>
              <div className="predictions">
                <h2>User Predictions</h2>
                <PredictionsTable predictions={data.predictions} />
              </div>
            </div>
          </>
        )}
      </main>
    </div>
  );
}

export default App;