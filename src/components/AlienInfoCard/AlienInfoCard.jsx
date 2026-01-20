function AlienInfoCard({ alien }) {
  return (
    <div className="alien-info-card">
      <h2>{alien.name}</h2>
      <p>Species: {alien.species}</p>
      <p>Home Planet: {alien.homeWorld}</p>
      <p>Description: {alien.description}</p>

      <p>Abilities:</p>
      <ul>
        {alien.abilities.map((ability, index) => (
          <li key={index}>{ability}</li>
        ))}
      </ul>
      <p>Stats:</p>
      <ul>
        {Object.entries(alien.stats).map(([statName, statValue]) => (
          <li key={statName}>
            {statName}: {statValue}
          </li>
        ))}
      </ul>

    </div>
  );
}

export default AlienInfoCard;
