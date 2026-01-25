/**
 * AlienInfoCard
 * Purpose: Displays details for a single alien (presentational component).
 */
import './AlienInfoCard.css'
function AlienInfoCard({ alien }) {
  return (
    <div className="alien-info-card">
      <h2>{alien.name}</h2>

      <p>Species: {alien.species}</p>
      <p>Home Planet: {alien.homeWorld}</p>
      <p>Description: {alien.description}</p>

      <p>Abilities:</p>
      <ul>
        {alien.abilities.map((ability, index) => (   // Map abilities array to list items
          <li key={index}>{ability}</li>
        ))}
      </ul>

      <p>Stats:</p>
      <ul>
        {Object.entries(alien.stats).map(([stat, value]) => (   // Loop over object key/value pairs
          <li key={stat}>
            {stat}: {value}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default AlienInfoCard



