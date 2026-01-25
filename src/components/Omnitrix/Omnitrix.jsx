import { useState } from "react"
import AlienDial from "./AlienDial"
import AlienInfoCard from "../AlienInfoCard/AlienInfoCard"
import './Omnitrix.css'
/**
 * Omnitrix
 * Purpose: Controller component — owns state and coordinates UI.
 */
function Omnitrix({ aliens }) {
  const [selectedAlien, setSelectedAlien] = useState(null)       // Dialed-in alien
  const [transformedAlien, setTransformedAlien] = useState(null) // Confirmed transformation

  function handleAlienSelect(alien) {
    setSelectedAlien(alien)   // Update selected alien from AlienDial
  }

  function handleTransform() {
    setTransformedAlien(selectedAlien)   // Lock in transformation
  }

  return (
  <div className="omnitrix">
    <AlienDial
      aliens={aliens}
      onAlienSelect={handleAlienSelect}
      selectedAlien={selectedAlien}
    />

    {/* Render message when no alien is selected */}
    {!selectedAlien && <p className="display-screen">No alien selected.</p>}

    {/* Show currently selected alien */}
    {selectedAlien && <p className="display-screen">Selected alien: {selectedAlien.name}</p>}

    {/* Show alien details only after transformation */}
    {transformedAlien && <AlienInfoCard alien={transformedAlien} />}

    {/* Disable button until an alien is selected */}
    <button
       className="transform-btn"
      onClick={handleTransform}
      disabled={!selectedAlien}
    >
      Transform!
    </button>
  </div>
)
}
export default Omnitrix
