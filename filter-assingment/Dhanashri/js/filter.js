
function filterBtn() {
    let btnEle = document.querySelector('#filterButton');
    var buttonData = ['all', 'Cakes', 'Cupcakes', 'Sweets', 'Doughnuts'];

    buttonData.forEach(item => {
        btnEle.innerHTML += `<a href="#" class="btn btn-outline-secondary btn-black text-uppercase filter-btn m-2" id="${item}" onclick="filterButton()">${item}</a>`;
    });
}

filterBtn();


function ImageData(){
    
    const rowEle = document.querySelector('#storeItems');

    let galleryData = [{
        title: 'sweet item',
        image: 'img/sweets-1.jpeg',
        price: '5',
        category: 'Sweets'
    },{
        title: 'cupcake item',
        image: 'img/cupcake-1.jpeg',
        price: '5',
        category: 'Cupcakes'
    },{
        title: 'cake item',
        image: 'img/cake-1.jpeg',
        price: '5',
        category: 'Cakes'
    },{
        title: 'doughnut item',
        image: 'img/doughnut-1.jpeg',
        price: '5',
        category: 'Doughnuts'
    },{
        title: 'sweet item',
        image: 'img/sweets-2.jpeg',
        price: '10',
        category: 'Sweets'
    },{
        title: 'cupcake item',
        image: 'img/cupcake-2.jpeg',
        price: '10',
        category: 'Cupcakes'
    },{
        title: 'cake item',
        image: 'img/cake-2.jpeg',
        price: '10',
        category: 'Cakes'
    },{
        title: 'doughnut item',
        image: 'img/doughnut-2.jpeg',
        price: '10',
        category: 'Doughnuts'
    },{
        title: 'sweet item',
        image: 'img/sweets-3.jpeg',
        price: '15',
        category: 'Sweets'
    },{
        title: 'cupcake item',
        image: 'img/cupcake-3.jpeg',
        price: '15',
        category: 'Cupcakes'
    },{
        title: 'cake item',
        image: 'img/cake-3.jpeg',
        price: '15',
        category: 'Cakes'
    },{
        title: 'doughnut item',
        image: 'img/doughnut-3.jpeg',
        price: '15',
        category: 'Doughnuts'
    }];

    galleryData.forEach(item => {
        rowEle.innerHTML += `<div class="col-10 col-sm-6 col-lg-4 mx-auto my-3 filterEle ${item.category}" id="${item.category}">
                <div class="card" >
                <div class="img-container">
                    <img src="${item.image}" class="card-img-top store-img" alt="">
                    <span class="store-item-icon">
                    <i class="fas fa-shopping-cart"></i>
                    </span>
                </div>

                <div class="card-body">
                    <div class="card-text d-flex justify-content-between text-capitalize">
                    <h5 id="store-item-name">${item.title}</h5>
                    <h5 class="store-item-value">$ <strong id="store-item-price" class="font-weight-bold">${item.price}</strong></h5>
                    </div>
                </div>

                </div>
            </div>`;
        });
    }

    ImageData();

 const storeItems = document.querySelectorAll('.filterEle');

 function filterButton() {

    let data = event.target.id;

        storeItems.forEach((item)=> {
            if (data === 'all'){
                item.style.display = 'block';
            } else {
                if (item.id == data){
                    item.style.display = 'block';
                }
            }
        })
    }

function hideAllEle(){
    storeItems.forEach(function(item){
        item.style.display = 'none';
    });
}
    
function searchEle(){
    let inputTxt = document.querySelector('#searchItem').value;

    storeItems.forEach((item) => {
        if (item.textContent.includes(inputTxt)){
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    }); 

}
