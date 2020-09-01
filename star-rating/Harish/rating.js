const ratingContainer = document.getElementById('ratingContainer');
const ratingTooltip = document.getElementById('ratingTooltip');
const starEntity = "&#9734;"
const starEntityActive = "&#9733;"
const starLength = 5;

const activateStar = (e) => {
    e.classList.add('active');
}
const deactivateStar = (e) => {
    if(e.classList.contains('active')) {
        e.classList.remove('active');
    }
}

const showRatingText = rating => {
    const ratingTooltipChild = ratingTooltip.firstElementChild
    console.log('rating', rating)
    switch (rating) {
        case "4": 
            ratingTooltipChild.innerHTML = "Excellent"
        break;
        case "3": 
             ratingTooltipChild.innerHTML = "Very good"
        break;
        case "2": 
             ratingTooltipChild.innerHTML = "Average"
        break;
        case "1": 
            ratingTooltipChild.innerHTML = "Poor"
        break;
        case "0": 
            ratingTooltipChild.innerHTML = "Terrible"
        break;
        default:
            ratingTooltipChild.innerHTML = "Unknown"
        break;
    }
}
const actionOnStar = (e) => {
    const count = e.target.parentNode.id.split('_')[1];
    for(let i = 0; i < starLength; i++){
        document.getElementById(`star_${i}`).firstElementChild.innerHTML = starEntity;
        deactivateStar(document.getElementById(`star_${i}`))
    }
    // case reset rating
    if(count == '0' && e.target.classList.contains('active')) {
        deactivateStar(document.getElementById(`star_0`))
        document.getElementById(`star_0`).firstElementChild.innerHTML = starEntity;
        showRatingText(-9)
        return
    } 
    for(let i = count; i >= 0 ; i--){
        activateStar(e.target)
        document.getElementById(`star_${i}`).firstElementChild.innerHTML = starEntityActive;
    }
    showRatingText(count)
  
}
// Should return Star HTML, Match Snapshot
const createStarElm = (action) => {
    const star = document.createElement('div')
    star.classList.add('col-sm')
    const starSpan = document.createElement('span')
    starSpan.classList.add('star-span')
    starSpan.innerHTML = starEntity
    starSpan.addEventListener(action, actionOnStar)
    star.append(starSpan)
    return star
}
// Should render and assign actions as per input
// @number of start, action on start
const generateStarUI = (action,id) => {
    const star = createStarElm(action)
    star.setAttribute("id", `star_${id}`);
    return ratingContainer.appendChild(star)
}
// Should render on UI number of times as per input 
const renderRatingComponent = (starLength, ratingEventType) => {
    for(let i = 0; i < starLength; i++){
        generateStarUI(ratingEventType, i)
    }
}
function init() {  
    const ratingEventType = 'click';
    renderRatingComponent(starLength, ratingEventType)
}
init()