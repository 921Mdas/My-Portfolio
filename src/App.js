import Navbar from "./Components/Navbar/Navbar";
import Greet from "./Components/Greet/Greet";
import Network from "./Components/Network/Network";
import Sdx from "./Components/sideEffect/Sdx";

function App() {
  return (
    <div className="Main">
      <Navbar />
      <Greet />
      <Network />
      <Sdx />
    </div>
  );
}

export default App;
