function AlienDial({ aliens }) {
    return(
        <div>
            {aliens.map((alien) => (
                <button key={alien.id}>{alien.name}</button>
            ))}
        </div>
    )
}

export default AlienDial;