import AlienInfoCard from './components/AlienInfoCard/AlienInfoCard'
import aliens from './data/aliens.json'

function App() {
  return (

    <div>
      <h1>Omnitrix Simulator</h1>
       <AlienInfoCard alien={aliens.aliens[0]} />
    </div>
  )
}

export default App