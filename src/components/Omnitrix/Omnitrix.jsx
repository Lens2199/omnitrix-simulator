import { useState } from "react";
// Import the AlienDial component so we can use it inside Omnitrix
import AlienDial from "./AlienDial";
import AlienInfoCard from "../AlienInfoCard/AlienInfoCard";
// Omnitrix is a parent component
// It receives an array of aliens as a prop



function Omnitrix({ aliens  }) {

const [selectedAlien, setSelectedAlien] = useState(null);

function handleAlienSelect(alien) {
    console.log("Selected:", alien.name);
    setSelectedAlien(alien);
}

  return (
    // Wrapper div for the Omnitrix UI
    <div>

      {/*
        We pass the `aliens` prop down to AlienDial
        This is called "props drilling" (parent → child)
      */}
      <AlienDial 
      aliens={aliens} 
      onAlienSelect={handleAlienSelect} />
       {!selectedAlien && <p>No alien selected.</p>}
       {selectedAlien && <p>Selected alien: {selectedAlien.name}</p>}

       
        {selectedAlien && <AlienInfoCard alien={selectedAlien} />}
    </div>
  );
}

// Export so Omnitrix can be used in App or other components
export default Omnitrix;
