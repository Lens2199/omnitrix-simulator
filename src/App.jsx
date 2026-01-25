import Omnitrix from "./components/Omnitrix/Omnitrix"   // Main feature component
import aliens from "./data/aliens.json"                // Alien data source

/**
 * App
 * Purpose: Root component — loads data and renders Omnitrix.
 */
function App() {
  return (
    <div>
      <h1>Omnitrix Simulator</h1>

        {/* Pass alien array to Omnitrix */}
      <Omnitrix aliens={aliens.aliens} />  
    </div>
  )
}

export default App
