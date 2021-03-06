const renderPokemonImg = (pokemon) => {
    const urlPokemonImage = pokemon.sprites.other['official-artwork']['front_default']

    const pikachuImage = document.querySelector('.pokemon-img')
    pikachuImage.setAttribute('src', urlPokemonImage)
}

const renderPokemonInfo = (pokemon) => {
    const pokemonIdObj = pokemon.id
    const pokemonId = document.querySelector('.pokemon-id')
    pokemonId.innerHTML = pokemonIdObj

    const pokemonHeightObj = pokemon.height
    const pokemonHeight = document.querySelector('.pokemon-height')
    pokemonHeight.innerHTML = pokemonHeightObj

    const pokemonWeightObj = pokemon.weight
    const pokemonWeight = document.querySelector('.pokemon-weight')
    pokemonWeight.innerHTML = pokemonWeightObj

    const pokemonAbilitiesObj = getAbilities(pokemon)
    const pokemonAbilities = document.querySelector('.pokemon-abilities')
    pokemonAbilities.innerHTML = pokemonAbilitiesObj

    const pokemonTypesObj = pokemon['types'].map(t => t.type.name)
    const pokemonTypes = document.querySelector('.pokemon-type')
    pokemonTypes.innerHTML = pokemonTypesObj

    const pokemonFormsObj = pokemon.forms.map(f => f.name)
    const pokemonForms = document.querySelector('.pokemon-forms')
    pokemonForms.innerHTML = pokemonFormsObj
}

const renderPokemonStats = (pokemon) => {
    const pokemonHpOjb = getStatValue(pokemon, 'hp')
    const pokemonHp = document.querySelector('.pokemon-hp')
    pokemonHp.innerHTML = pokemonHpOjb;

    const pokemonAttackObj = getStatValue(pokemon, 'attack')
    const pokemonAttack = document.querySelector('.pokemon-attack')
    pokemonAttack.innerHTML = pokemonAttackObj;

    const pokemonDefenseObj = getStatValue(pokemon, 'defense')
    const pokemonDefense = document.querySelector('.pokemon-defense')
    pokemonDefense.innerHTML = pokemonDefenseObj;

    const pokemonSpAttackObj = getStatValue(pokemon, 'special-attack')
    const pokemonSpAttack = document.querySelector('.pokemon-sp-attack')
    pokemonSpAttack.innerHTML = pokemonSpAttackObj;

    const pokemonSpDefenseObj = getStatValue(pokemon, 'special-defense')
    const pokemonSpDefense = document.querySelector('.pokemon-sp-defense')
    pokemonSpDefense.innerHTML = pokemonSpDefenseObj;

    const pokemonSpeedObj = getStatValue(pokemon, 'speed')
    const pokemonSpeed = document.querySelector('.pokemon-speed')
    pokemonSpeed.innerHTML = pokemonSpeedObj;

    const pokemonTotalObj = pokemon.stats.map(s => s.base_stat).reduce((acc, prev) => acc + prev)
    const pokemonTotal = document.querySelector('.pokemon-total')
    pokemonTotal.innerHTML = pokemonTotalObj
}

const renderPokemonMoves = (pokemon) => {
    let pokemonMoves = []
    pokemon.moves.forEach((m, i) => {
        if (i <= 10) {
            pokemonMoves.push([`${m.move.name.toUpperCase().replaceAll('-', ' ')}`, `${m['version_group_details'][0].move_learn_method.name}`])
        }
    })
    pokemonMoves.forEach(m => {
        let pokemonTable = document.querySelector('.pokemon-moves-table')
        let moveAndMethodHtml = `<tr>
            <td class="pokemon-move">${m[0]}</td>
            <td class="pokemon-method">${m[1]}</td>
            </tr>
            `
        pokemonTable.insertAdjacentHTML('beforeend', moveAndMethodHtml)
    })
}

const renderPokemonPreview = (pokemon) => {
    renderPokemonInfo(pokemon);
    renderPokemonImg(pokemon);
    renderPokemonStats(pokemon);
    renderPokemonMoves(pokemon)
}
renderPokemonPreview(pikachu)


//this function will call the require function to populate the pokemon template page
const fillPokemonPage = (pokemon) => {
    renderPokemonPreview(pokemon);
}

function getAbilities(pokemon) {
    const abilities = pokemon['abilities'].map(n => n.ability.name.toUpperCase())
    console.log(abilities)
    return abilities
}

function getStatValue(pokemon, statName) {
    return pokemon.stats.find(s => s.stat.name === statName).base_stat
}