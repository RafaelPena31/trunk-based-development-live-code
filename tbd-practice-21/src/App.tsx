import GameContainer from "modules/game/game-container";

function App() {
  const gamerFlag = true;
  return <div className="app">{gamerFlag && <GameContainer />}</div>;
}

export default App;
