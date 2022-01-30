const renderPokemonImg = (pokemon) => {
    const urlPokemonImage = pokemon.sprites.other['official-artwork']['front_default']

    const pikachuImage = document.querySelector('.pikachu-img')
    pikachuImage.setAttribute('src', urlPokemonImage)
   
}

const renderPokemonInfo = (pokemon) => {
    const pokemonIdObj = pokemon.id
    const pokemonId = document.querySelector('.pikachu-id')
    pokemonId.innerHTML = pokemonIdObj

    const pokemonHeightObj = pokemon.height
    const pokemonHeight = document.querySelector('.pikachu-height')
    pokemonHeight.innerHTML = pokemonHeightObj

    const pokemonWeightObj = pokemon.weight
    const pokemonWeight = document.querySelector('.pikachu-weight')
    pokemonWeight.innerHTML = pokemonWeightObj

    const pokemonAbilitiesObj = getAbilities(pokemon)
    const pokemonAbilities = document.querySelector('.pikachu-abilities')
    pokemonAbilities.innerHTML = pokemonAbilitiesObj

    const pokemonTypesObj = pokemon['types'].map(t => t.type.name)
    const pokemonTypes = document.querySelector('.pikachu-type')
    pokemonTypes.innerHTML = pokemonTypesObj

    const pokemonFormsObj = pokemon.forms.map(f => f.name)
    const pokemonForms = document.querySelector('.pikachu-forms')
    pokemonForms.innerHTML = pokemonFormsObj
}

const renderPokemonStats = () => {}

 const renderPokemonPreview = (pokemon) => {
    renderPokemonInfo(pokemon);
    renderPokemonImg(pokemon);
   // renderPokemonStats(pokemon);
}
renderPokemonPreview(pikachu)


//this function will call the require function to populate the pokemon template pages
 const fillPokemonPage = (pokemon) => {
    renderPokemonPreview(pokemon);
}



 function getAbilities (pokemon) {
    const abilities = pokemon['abilities'].map( n => n.ability.name)
    console.log(abilities)
    return abilities
}

console.log(getAbilities(pikachu))