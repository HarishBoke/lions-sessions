const starWrapper = document.querySelector(".rating-ele");
const starEle = document.querySelector(".rating-ele").children;
const startCount = 5;
const ratingValue = document.querySelector("#ratingValue");
const massage = ['Terrible', 'Poor', 'Average', 'Very Good', 'Excellent'];


let setAttributes = (element,attribute) => {
    for(let key in attribute) {
        element.setAttribute(key, attribute[key]);
    }
}

const generateStarUI = () => {
    
        for (let i = 0; i < startCount; i++){
			let starEle = document.createElement('span');
			setAttributes(starEle,{'class':'fa fa-star','id':i,'onclick':'getText(\'' + massage[i] + '\',\'' + i + '\')'});
            starWrapper.appendChild(starEle);
        } 
} 

let allPreviousActive = [];

// Get Previous Rating 
let getPreviousRating = () => {
    allPreviousActive = [];
    for (let i = 0; i < starEle.length; i++) {     
        if (starEle[i].classList.contains("active")) {
            allPreviousActive.push(starEle[i]);
        }        
    } 
    return allPreviousActive;
}

// Remove Rating 
let removeRating = (totalLength) => {
    for(let i=0; i<totalLength; i++){
        starEle[i].classList.remove("active");
    }
}

let  getText = (msg,ratingId) => {
    
    // Get Previous Active
    let allPreviousActive = getPreviousRating();
    
    let relength = parseInt(ratingId)+parseInt(1);

    if(allPreviousActive.length == relength){
        removeRating(relength);
        ratingValue.innerHTML = "";
    }else{
        removeRating(starEle.length);

        for(let k=0;k<=ratingId;k++){
            let element = document.getElementById(k);
            element.classList.add("active");
        }
        ratingValue.innerHTML = msg;
    }
    
}

const init = () => {

generateStarUI();
}
init();






