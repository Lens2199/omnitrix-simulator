import './AlienDial.css'

/**
 * AlienDial
 * Purpose: Renders buttons for each alien and reports selection to parent.
 */
function AlienDial({ aliens, onAlienSelect, selectedAlien }) {
  return (
    <div className="alien-dial">
      {aliens.map((alien) => (     
                    // Map aliens to buttons
        <button
          key={alien.id}  // Unique key for React list
           className={alien.id === selectedAlien?.id ? "selected" : ""}     // Highlight selected alien               
          onClick={() => onAlienSelect(alien)} // Child → parent callback
        >
          {alien.name}
        </button>
      ))}
    </div>
  )
}

export default AlienDial
