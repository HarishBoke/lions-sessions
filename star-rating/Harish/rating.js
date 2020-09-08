
const starRating  = (function rating(){
    let ratingContainer = document.getElementById('ratingContainer');
    let ratingTooltip = document.getElementById('ratingTooltip');
    let starEntity = "&#9734;"
    let starEntityActive = "&#9733;"
    let starLength = 5;
    let ratingEventType = 'click';

    const activateStar = (e) => {
        e.classList.add('active');
    }
    const deactivateStar = (e) => {
        if(e.classList.contains('active')) {
            e.classList.remove('active');
        }
    }   
    const showRatingText = (rating, domElements) => {

       const toolTipContainer = (domElements && document.getElementById(domElements.textContainer)) || document.getElementById('ratingTooltip');
       console.log('domElements', domElements)
        const ratingTooltipChild = toolTipContainer.firstElementChild
        switch (rating) {            
            case "4": 
                ratingTooltipChild.innerHTML = "Excellent!"
            break;
            case "3": 
                 ratingTooltipChild.innerHTML = "Very good!"
            break;
            case "2": 
                 ratingTooltipChild.innerHTML = "Average!"
            break;
            case "1": 
                ratingTooltipChild.innerHTML = "Poor!"
            break;
            case "0": 
                ratingTooltipChild.innerHTML = "Terrible!"
            break;
            default:
                ratingTooltipChild.innerHTML = "Not Defined!"
            break;
        }
    }
    const actionOnStar = (e, entitySpec, domElements, starLength) => {
        const splitId = e.parentNode.id.split('_')
        const count = splitId[1];
        const id_prefix = splitId[0];
        for(let i = 0; i < starLength; i++){
            document.getElementById(`${id_prefix}_${i}`).firstElementChild.innerHTML = entitySpec && entitySpec.entity || starEntity;
            deactivateStar(document.getElementById(`${id_prefix}_${i}`))
        }
        // case reset rating
        if(count == '0' && e.classList.contains('active')) {
            deactivateStar(document.getElementById(`${id_prefix}_0`))
            document.getElementById(`${id_prefix}_0`).firstElementChild.innerHTML = entitySpec && entitySpec.entity || starEntity;
            showRatingText(-9, domElements)
            return
        } 
        for(let i = count; i >= 0 ; i--){        
            activateStar(e)
            document.getElementById(`${id_prefix}_${i}`).firstElementChild.innerHTML = entitySpec && entitySpec.entityActive || starEntityActive;
        }
        showRatingText(count, domElements)
    }
    // Should return Star HTML, Match Snapshot
    const createStarElm = (action, entitySpec, domElements, starLength) => {
        const entityColor = entitySpec && entitySpec.color || "#ffc000";

        const star = document.createElement('div')
        // star.classList.add('col-sm')
        const starSpan = document.createElement('span')
        starSpan.classList.add('star-span')
        starSpan.style.color = entityColor
        starSpan.innerHTML = entitySpec && entitySpec.entity || starEntity
        starSpan.addEventListener(action, actionOnStar.bind(null, starSpan, entitySpec, domElements, starLength))
        star.append(starSpan)
        return star
    }
    // Should render and assign actions as per input
    // @number of start, action on start
    const generateStarUI = (action,id, entitySpec, domElements, starLength) => {
        let id_prefix = domElements && domElements.container || "star"
        const star = createStarElm(action, entitySpec, domElements, starLength)
        star.setAttribute("id", `${id_prefix}_${id}`);
        return ratingContainer.appendChild(star)
    }
    // Should render on UI number of times as per input 
    const renderRatingComponent = (starLength, ratingEventType, entitySpec, domElements) => {
        for(let i = 0; i < starLength; i++){
            generateStarUI(ratingEventType, i, entitySpec, domElements, starLength)
        }
    }
    function init(len, event, entitySpec, domElements) {  
        starLength = len;
        ratingEventType = event;
        ratingContainer = domElements && document.getElementById(domElements.container) || document.getElementById('ratingContainer');
        ratingTooltip = domElements && document.getElementById(domElements.textContainer) || document.getElementById('ratingTooltip');
        renderRatingComponent(starLength, ratingEventType, entitySpec, domElements)
    }
    return {
        init: init
    }
})();
/* 1.  @length, 
2. @event, 
3. @entityIcon / HTMLEntity { normal and active, color} 
4. HTML / DOM element
*/
starRating.init(15, 'mouseover' )
starRating.init(5, 'click', { entity: '&#9825;', entityActive: '&#9829;', color: '#0088ff' }, { container: 'ratingContainer1' , textContainer: 'ratingTooltip1'} )
starRating.init(5, 'click', { entity: '&#9872;', entityActive: '&#9873;', color: '#ff9a00' }, { container: 'ratingContainer2' , textContainer: 'ratingTooltip2'} )
