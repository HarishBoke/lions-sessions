const container = document.getElementById('container')
const level = "easy"
let firstCard , secondCard
let firstID, secondID
// const level = "hard"
 
// select first card keep value active for 3000ms
// select second card keep value for 1500ms
// both value match then cardMatched else not 
// if only firstCardOpen and no action for 3000Ms remove .show and value from holding variables i.e firstCard + firstID
// If both actions performed under 3000MS and cards Matched then show both cards open
// Once MVP starts working , Randomize cards rendering 
// show max 2 tiles at a time
// Message on game completion


// easy level will have 8 tiles : Object, good time to see image
// Beginner level will have 12 tiles: scenery, good time to see image
// Advance level will have 16 tiles: abstract pattern, good time to see image

const matchCards = (firstCard, secondCard, firstID, secondID) => {
    if(firstID != secondID && firstCard == secondCard) return true 
    return false
}

const showTile = (id, dataID) => {
    let hasCardsMatched = false
    // show only 2 at a time
    if(!(firstCard && secondCard)) document.getElementById(id).classList.add('show')
    
    if(!(firstCard && firstID)) {
        const currentElem = document.getElementById(id)
        firstCard = dataID 
        firstID = id        
            setTimeout(() => {
                console.log('currentElem.dataset.matched', currentElem.dataset.matched)
                if(!currentElem.dataset.matched) currentElem.classList.remove('show')
                firstCard = null;
                firstID= null;
           }, 3000)             

        return 
    }

    // Fill second only if firstID is present
    if(firstCard && firstID && !secondCard && !secondID ) {
        secondCard = dataID
        secondID = id

        hasCardsMatched = matchCards(firstCard, secondCard, firstID, secondID)

        if(hasCardsMatched) {
            document.getElementById(firstID).setAttribute('data-matched', true)
            document.getElementById(secondID).setAttribute('data-matched', true)
            setTimeout(() => {
                hasCardsMatched = false  
                firstCard = null; secondCard = null;
                firstID= null; secondID = null;   
           }, 1500)          
        }  
        else {
            setTimeout(() => {
                if(firstID) document.getElementById(firstID).classList.remove('show');
                if(secondID)  document.getElementById(secondID).classList.remove('show');  
                firstCard = null; secondCard = null;
                firstID= null; secondID = null;                          
            }, 2500)         
        }         
    }
}

const _randomId = (max) => {
    var min = 1;
    const randomizedArr = []
    var random = Math.floor(Math.random() * (+max - +min)) + +min; 
    for(let i = 0; i < max; i++) {
        // (i == 0) && randomizedArr.push(i) 
        // if (!randomizedArr.includes(item)) {    
        //     randomizedArr.push(i) 
        // } 
        // else {
        //     i--
        // }
    }
    return random
}
// define  levels based on speed and tile
// more than 2 tiles should not open at a time
// if matched then do not hide tile

const createTile = (id, src, dataID) => {
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
   // img.setAttribute('class', 'card-img-top')
    // 
    tile.setAttribute('id', id)
    tile.setAttribute('data-tile', dataID)
    tile.setAttribute("class", "card");
    tile.appendChild(front)
    tile.appendChild(back)
    tile.addEventListener('click', showTile.bind(null, id, dataID), true)
    return tile
}

const renderTiles = (imagePath, tilesCount) => {
    let count = 0;
    let halfTilesCount = tilesCount / 2
    for(let i = 1; i <= tilesCount; i++) {
        count++;
       if(i > halfTilesCount) i =  i - halfTilesCount
       // console.log('i', i)
      //  console.log('_randomId', _randomId(i))
        container.appendChild(createTile(`tile_${count}`, `${imagePath}${i}.jpg`, `data-${i}`))
        if(count >= tilesCount) break;
    }
}

function init(level){
    const imagePath = `./images/${level}/`
    // _randomId(8)

    // generic count for tiles bases on levels
    const tilesCount = 8;
    tiles = new Array(tilesCount)
    // console.log('tiles', tiles)
    renderTiles(imagePath, tilesCount)
}
init(level)

