// This component renders a list of buttons for each alien
// It receives an array of alien objects as a prop called `aliens`
function AlienDial({ aliens , onAlienSelect }) {

  return (
    // Wrapper div for all alien buttons
    <div>

      {/*
        We use .map() to loop through the aliens array
        For each alien, we create a button
      */}
      {aliens.map((alien) => (

        // Each button needs a unique `key` so React can track list items efficiently
        // We use alien.id because it should be unique
        <button key={alien.id} onClick={() => onAlienSelect(alien)}>

          {/* Display the alien's name on the button */}
          {alien.name}

        </button>
      ))}

    </div>
  );
}

// Export the component so it can be used in other files
export default AlienDial;
