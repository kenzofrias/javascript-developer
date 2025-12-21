const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')

const modalOverlay = document.getElementById('modalOverlay')
const closeModal = document.getElementById('closeModal')
const modalPrincipal = document.getElementById('modalPrincipal')

const maxRecords = 251;
const limit = 10;
let offset = 0;

function loadPokemonItens(offset, limit){
    pokeAPI.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml  = pokemons.map((pokemon) => `
        <li class="pokemon ${pokemon.type}" onclick="showModal('${pokemon.url}')">
            <span class="number">#${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>

            <div class="detail">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                </ol>

                <img src="${pokemon.photo}" alt="${pokemon.name}">
            </div>

        </li>
        `).join('')
        pokemonList.innerHTML += newHtml
    })
}

async function showModal(url){
    modalOverlay.style.display = 'flex'
    modalPrincipal.innerHTML = '<p>Carregando...</p>'

    try{
        const pokemon = await pokeAPI.getPokemonDetail({url})

        modalPrincipal.innerHTML = `
                <div id="modalBodyEspecification">
                    <div class="detail-container">
                        <div class="detail-info">
                            <h2 class="name">${pokemon.name}</h2>
                            <ol class="types">
                                ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                            </ol>
                        </div>
                        <span class="number">#${pokemon.number}</span>
                    </div>
                    <img src="${pokemon.photo}" alt="${pokemon.name}">
                </div>
                <div class="detail-stats">
                    <div class="stat-row">
                        <strong>Altura:</strong> <span>${pokemon.height/10}m</span>
                    </div>
                    <div class="stat-row">
                        <strong>Peso:</strong> <span>${pokemon.weight/10}kg</span>
                    </div>
                    <div class="stat-row">
                        <strong>Habilidades:</strong> <span class="abilities">${pokemon.abilities.map((ability) => ability.ability.name).join(', ')}</span>
                    </div>
                </div>
        `

        const modalContent = modalPrincipal.closest('.modal-content');
        if (modalContent) {
            modalContent.className = `modal-content ${pokemon.type}`;
        }

        const closeBtn = document.querySelector('.close-btn');
        if (closeBtn) {
            closeBtn.className = `close-btn ${pokemon.type}`;
        }

    }catch (error){
        modalPrincipal.innerHTML = '<p>Erro ao carregar detalhes do Pokemon</p>'
    }
}

loadPokemonItens(offset, limit)

loadMoreButton.addEventListener('click', () => {
    offset += limit

    const qntRecodeNextPage = offset + limit

    if(qntRecodeNextPage >= maxRecords){
        const newLimit = maxRecords - offset
        loadPokemonItens(offset, newLimit)

        loadMoreButton.parentElement.removeChild(loadMoreButton)
    }else{
        loadPokemonItens(offset, limit)
    }

})

closeModal.addEventListener('click', ()=>{
    modalOverlay.style.display = 'none'
})
window.onclick = (event) => {
    if(event.target == modalOverlay){
        modalOverlay.style.display = 'none'
    }
}