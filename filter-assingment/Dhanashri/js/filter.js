
    function ImageData(){
    
    const rowEle = document.querySelector('#storeItems');

    let galleryData = [{
        title: 'sweet item',
        image: 'img/sweets-1.jpeg',
        price: '5',
        category: 'sweets'
    },{
        title: 'cupcake item',
        image: 'img/cupcake-1.jpeg',
        price: '5',
        category: 'cupcakes'
    },{
        title: 'cake item',
        image: 'img/cake-1.jpeg',
        price: '5',
        category: 'cakes'
    },{
        title: 'doughnut item',
        image: 'img/doughnut-1.jpeg',
        price: '5',
        category: 'doughnuts'
    },{
        title: 'sweet item',
        image: 'img/sweets-2.jpeg',
        price: '10',
        category: 'sweets'
    },{
        title: 'cupcake item',
        image: 'img/cupcake-2.jpeg',
        price: '10',
        category: 'cupcakes'
    },{
        title: 'cake item',
        image: 'img/cake-2.jpeg',
        price: '10',
        category: 'cakes'
    },{
        title: 'doughnut item',
        image: 'img/doughnut-2.jpeg',
        price: '10',
        category: 'doughnuts'
    },{
        title: 'sweet item',
        image: 'img/sweets-3.jpeg',
        price: '15',
        category: 'sweets'
    },{
        title: 'cupcake item',
        image: 'img/cupcake-3.jpeg',
        price: '15',
        category: 'cupcakes'
    },{
        title: 'cake item',
        image: 'img/cake-3.jpeg',
        price: '15',
        category: 'cakes'
    },{
        title: 'doughnut item',
        image: 'img/doughnut-3.jpeg',
        price: '15',
        category: 'doughnuts'
    }];

    for(let data of galleryData){
        rowEle.innerHTML += `<div class="col-10 col-sm-6 col-lg-4 mx-auto my-3 filterEle ${data.category}" id="${data.category}">
                <div class="card" >
                <div class="img-container">
                    <img src="${data.image}" class="card-img-top store-img" alt="">
                    <span class="store-item-icon">
                    <i class="fas fa-shopping-cart"></i>
                    </span>
                </div>

                <div class="card-body">
                    <div class="card-text d-flex justify-content-between text-capitalize">
                    <h5 id="store-item-name">${data.title}</h5>
                    <h5 class="store-item-value">$ <strong id="store-item-price" class="font-weight-bold">${data.price}</strong></h5>
                    </div>
                </div>

                </div>
            </div>`;
        }
    }

    ImageData();
    
    function filterBtn(data){
    const filterEle = document.querySelectorAll('.filterEle');
    hideAllEle();
    if(data === 'all'){
        filterEle.forEach(function(item){
            if (item.id){
                    item.style.display = 'block';
                } 
        }) ;  
        }else if (data === 'cakes'){
            filterEle.forEach(function(item){
                if (item.id === 'cakes'){
                    item.style.display = 'block';
                }
            });
        }else if (data === 'cupcakes'){
            filterEle.forEach(function(item){
                if (item.id === 'cupcakes'){
                    item.style.display = 'block';
                }
            });
        }else if (data === 'sweets'){
            filterEle.forEach(function(item){
                if (item.id === 'sweets'){
                    item.style.display = 'block';
                }
            });
        }else if (data === 'doughnuts'){
            filterEle.forEach(function(item){
                if (item.id === 'doughnuts')){
                    item.style.display = 'block';
                }
            });
        }
    }


    function hideAllEle(){
        let storeItems = document.querySelectorAll('.filterEle');

        storeItems.forEach(function(item){
            item.style.display = 'none';
        });
    }

    function searchEle(){
        const inputTxt = document.querySelector('#search-item').value;
        const storeItems = document.querySelectorAll('.filterEle');


        storeItems.forEach((item) => {
            if(item.id === inputTxt){
                item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });  

    }
