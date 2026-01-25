// Import the Omnitrix component, which handles the alien selection UI
import Omnitrix from './components/Omnitrix/Omnitrix'

// Import the component that displays detailed information about an alien
import AlienInfoCard from './components/AlienInfoCard/AlienInfoCard'

// Import alien data from a JSON file
import aliens from './data/aliens.json'

function App() {
  return (

    // Main container for the application
    <div>

      {/* Title of the application */}
      <h1>Omnitrix Simulator</h1>

      {/*
        Render the Omnitrix component
        This component is responsible for displaying the alien dial
      */}
      <Omnitrix aliens={aliens.aliens} />

      {/*
        Render the AlienInfoCard component
        We pass a single alien object as a prop
        In this case, we are using the first alien in the array
      */}

    </div>
  )
}

// Export the App component so it can be rendered by React
export default App
