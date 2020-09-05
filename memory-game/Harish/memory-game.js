const container = document.getElementById('container')

const showTile = (id) => {
    console.log('id', id)
    alert('Clicked ID', id)
}

const createTile = (id, src) => {
    const tile = document.createElement('div')
    const img = document.createElement('img')
    const front = document.createElement('div')
    const back = document.createElement('div')
    const num = id.split("_")[1]
    const tileInfo = document.createElement('span');
    tileInfo.classList.add('tileInfo')
    tileInfo.innerHTML = `Open Tile ${num}`

    front.setAttribute('class', 'side front')
    front.appendChild(tileInfo)
    back.setAttribute('class', 'side back')
    back.appendChild(img)
    
    // 
    img.src = src
    img.setAttribute('class', 'card-img-top')
    // 
    tile.setAttribute('id', id)
    tile.setAttribute("class", "card");
    tile.appendChild(front)
    tile.appendChild(back)
    tile.addEventListener('click', showTile.bind(null, id), true)
    return tile
}
const renderTiles = () => {
    
    for(let i = 0; i < 12; i++) {
        container.appendChild(createTile(`tile_${i}`, 'https://pbs.twimg.com/profile_images/378800000017423279/1a6d6f295da9f97bb576ff486ed81389_400x400.png'))
    }
    
}

function init(){
    renderTiles()
}
init()