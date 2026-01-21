// This component displays detailed information about a single alien
// It receives an `alien` object as a prop
function AlienInfoCard({ alien }) {

  return (
    // Main container for the alien card
    <div className="alien-info-card">

      {/* Display the alien's name */}
      <h2>{alien.name}</h2>

      {/* Basic alien details */}
      <p>Species: {alien.species}</p>
      <p>Home Planet: {alien.homeWorld}</p>
      <p>Description: {alien.description}</p>

      {/* Section title for abilities */}
      <p>Abilities:</p>

      {/* List of alien abilities */}
      <ul>
        {/* 
          We map over the abilities array to render each ability
          `index` is used as the key because abilities are simple strings
        */}
        {alien.abilities.map((ability, index) => (
          <li key={index}>{ability}</li>
        ))}
      </ul>

      {/* Section title for stats */}
      <p>Stats:</p>

      {/* List of alien stats */}
      <ul>
        {/*
          Object.entries converts the stats object into an array of
          [key, value] pairs so we can loop through them
          Example: { strength: 10 } → ["strength", 10]
        */}
        {Object.entries(alien.stats).map(([statName, statValue]) => (
          <li key={statName}>
            {statName}: {statValue}
          </li>
        ))}
      </ul>

    </div>
  );
}

// Export the component so it can be used in other files
export default AlienInfoCard;

