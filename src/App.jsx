import { BackgroundDecoration } from "./components/components_background-decoration";
import Navbar from "./components/Navbar";
import Components from "./pages/Components";
import Home from "./pages/Home";

function App() {
  return (
    <>
    <BackgroundDecoration />
      <Navbar />
      <div className="max-w-7xl mx-auto">

      <Home />
      <Components />
      </div>
    </>
  );
}

export default App;
