import React from "react";

function PokemonGrid(props) {
  const { pokemons } = props;
  return (
    <div className="pokemon-grid">
      {/* 
                INSTRUCTION: 
                if pokemons data is available, display the pokemons in a 3-columns grid. 
                You may use the css class "pokemon-card" to style each pokemon card.
                if not, display a "No pokemons found." message 
            */}
      {pokemons.length === 0 ? (
        <h3>No pokemons found.</h3>
      ) : (
        pokemons.map((p) => (
          <div className="pokemon-card">
            <h3>{p.name}</h3>
            <div>Type: {p.type}</div>
            <div>Level: {p.level}</div>
          </div>
        ))
      )}
    </div>
  );
}

export default PokemonGrid;
