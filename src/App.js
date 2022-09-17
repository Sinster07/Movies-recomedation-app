import {useState} from 'react';
import './App.css';
import {database} from './Database.js';

var databaseArray = Object.keys(database);

export default function App() {

  const [selectedGame , setSelectedGame] = useState("Marvel");
  function onclickHandler(game){
    setSelectedGame(game);
    console.log(selectedGame);
  }

  return (
    <div className="App">
      <header>
        <h1>MOVIES COLLECTION</h1>
      </header>

      <section>
        <ul>
          {
            databaseArray.map(function(game,index){
              return <li key = {index} onClick = {() => onclickHandler(game)}>{game}</li>
            })
          }
        </ul>
        
        {
          database[selectedGame].map((game) => {
            return(
              <div className = "info-card">
                <img className = "left-card" src = {game.poster} alt = "poster" />

                <div className="right-card">
                  <div className = "game-name"> {game.name}</div>
                  <div className = "game-date">Released On : {game.releaseDate}</div>
                  <div className = "game-rating">IMDb Rating : {game.ratingIMDb}</div>
                  <div className = "game-director">Directed by : {game.director}</div>
                </div>
              </div>
            );
          }) 
        } 
      </section>
    </div>
  );
}

