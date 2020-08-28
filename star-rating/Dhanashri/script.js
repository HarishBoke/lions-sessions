const starWrapper = document.querySelector(".rating-ele");
const starEle = document.querySelector(".rating-ele").children;
const sratCount = 5;
const ratingValue = document.querySelector("#ratingValue");
const massage = ['Terrible', 'Poor', 'Average', 'Very Good', 'Excellent'];
 
const generateStarUI = () => {
    
        for (let i = 0; i < sratCount; i++){
            let starEle = document.createElement('span');
            starEle.setAttribute('class', "fa fa-star-o");
            starWrapper.appendChild(starEle);
        } 
}  

const activeStar = () => {
	
	const eleAction = 'click';
  
	for(let i = 0; i < starEle.length; i++){
		
	
		starEle[i].addEventListener(eleAction, function(){
			
			for(let j = 0; j < starEle.length; j++){
				starEle[j].classList.remove("fa-star");		 	
				starEle[j].classList.add("fa-star-o");		 	
			}
			
			for(let j = 0; j <= i; j++){
				starEle[j].classList.remove("fa-star-o");		 	
				starEle[j].classList.add("fa-star");		 	
			}
			
			ratingValue.innerHTML = massage[i];
		})
		
		
	}
}

const init = () => {

generateStarUI();
activeStar();
}
init();






