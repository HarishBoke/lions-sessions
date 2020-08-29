const singleItem = document.getElementById('storeItems');
const msg = document.getElementById('msg');

const storeItem1 =  [
    {
        category: "sweet",
        item:[
            {
                image : "sweets-1.jpeg",
                name: "sweet item",
                price: 5
            },
            {
                image: "sweets-2.jpeg",
                name: "sweet item",
                price: 10
            },
            {
                image: "sweets-3.jpeg",
                name: "sweet item",
                price: 15
            }
        ]
    },
    {
        category: "cupcake",
        item:[
            {
                image: "cupcake-1.jpeg",
                name: "cupcake item",
                price: 5
            },
            {
                image: "cupcake-2.jpeg",
                name: "cupcake item",
                price: 10
            },
            {
                image: "cupcake-3.jpeg",
                name: "cupcake item",
                price: 15
            }
        ]
    },
    {
        category: "cake",
        item:[
            {
                image: "cake-1.jpeg",
                name: "cake item",
                price: 5
            },
            {
                image: "cake-2.jpeg",
                name: "cake item",
                price: 10
            },
            {
                image: "cake-3.jpeg",
                name: "cake item",
                price: 15
            }
        ]
    },
    {
        category: "doughnut",
        item:[
            {
                image: "doughnut-1.jpeg",
                name: "dougnut item",
                price: 5
            },
            
            {
                image: "doughnut-2.jpeg",
                name: "dougnut item",
                price: 10
            },
            
            {
                image: "doughnut-3.jpeg",
                name: "dougnut item",
                price: 15
            }
        ]
    }
];

/*
    Function :  setAttributes()
    Purpose: this helper is used to set attribute which is needed to create dynamic html
*/
let setAttributes = (element,attribute) => {
    for(let key in attribute) {
        element.setAttribute(key, attribute[key]);
    }
}

/*
    Function :  generateButtonUI()
    Purpose: It will create dynamic button
*/
let generateButtonUI = (category) => {
    let filterBtn = document.createElement('a');
    setAttributes(filterBtn, {"class": "btn btn-outline-secondary btn-black text-uppercase filter-btn m-2","href":"#", "onclick" :"getFilteredProduct(\'" + category + "\')"});
    let btnText = document.createTextNode(category);
    filterBtn.appendChild(btnText);
    document.getElementById('filterBtn').appendChild(filterBtn);
}

/*
    Function :  singleStoreItem()
    Purpose: It will create dynamic UI(Product List which is displayed in index page)
*/
const singleStoreItem = (productObj) =>{
    
    let mainWrapper = document.createElement('div');
    setAttributes(mainWrapper,{'class':'col-10 col-sm-6 col-lg-4 mx-auto my-3 storeItem'});

    let card = document.createElement('div');
    setAttributes(card,{'class':'card'});

    let imgContainer = document.createElement('div');
    setAttributes(imgContainer,{'class':'img-container'});

    let itemImg = document.createElement('img');
    setAttributes(itemImg,{'src': 'img/' + productObj.image, 'alt': 'Cart Item Image','class': 'card-img-top store-img'});

    let storeIconWrap = document.createElement('span');
    setAttributes(storeIconWrap,{'class':'store-item-icon'});

    let storeIcon = document.createElement('i');
    setAttributes(storeIcon,{'class':'fa fa-shopping-cart', 'onclick': 'addIntoCartItem(\'' + productObj.image + '\',\'' + productObj.name + '\',' + productObj.price + ')'});

    let cardBody = document.createElement('div');
    setAttributes(cardBody,{'class':'card-body'});

    let cardBodyInnerWrap = document.createElement('div');
    setAttributes(cardBodyInnerWrap,{'class':'card-text d-flex justify-content-between text-capitalize'});

    let itemName = document.createElement('h5');
    setAttributes(itemName,{'id':'store-item-name'});

    let itemNameValue = document.createTextNode(productObj.name);

    let itemPriceWrap = document.createElement('h5');
    setAttributes(itemPriceWrap,{'class':'store-item-value'});
    
    let priceSymb = document.createTextNode('$');

    let itemPrice = document.createElement('strong');
    setAttributes(itemPrice,{'class':'font-weight-bold', 'id':'store-item-price'});

    let itemPriceValue = document.createTextNode(productObj.price);


    mainWrapper.appendChild(card);
    card.appendChild(imgContainer);
    imgContainer.appendChild(itemImg);
    imgContainer.appendChild(storeIconWrap);
    storeIconWrap.appendChild(storeIcon);
    document.body.appendChild(mainWrapper);
    card.appendChild(cardBody);
    cardBody.appendChild(cardBodyInnerWrap);
    cardBodyInnerWrap.appendChild(itemName);
    itemName.appendChild(itemNameValue);
    cardBodyInnerWrap.appendChild(itemPriceWrap);
    itemPriceWrap.appendChild(priceSymb);
    itemPriceWrap.appendChild(itemPrice);
    itemPrice.appendChild(itemPriceValue);

    singleItem.appendChild(mainWrapper);  
}


let filterArray = [];

let getFilteredProduct = (cat) => {
    filterArray = [];
    if(cat == "all"){
        let productList = storeItem1.map(function(data,index){
            data.item.map(function(data1,index1){
                filterArray.unshift(data1);
            });
        });
    }else{
        for(let i=0;i<storeItem1.length;i++){
            if(storeItem1[i].category == cat){
                let productList = storeItem1[i].item.map(function(data,index){
                    filterArray.unshift(data);
                });
                break;
            }
        }
    }
    displayProductList(filterArray);
}

let displayProductList = (filterProductArray) => {
    document.getElementById("storeItems").innerHTML = "";
    filterProductArray.map(function(data,index){
        singleStoreItem(data)
    });
}



/*
    Function :  displayBtn()
    Purpose: It will used to Display Button
*/
let categoryArray = [];
let displayBtn = (product) => {
    generateButtonUI('all')
    product.map(function(data,index){
        generateButtonUI(data.category,product);
    });


}


searchResult = [];
const filter = () => {
    searchResult = [];
    let getInputValue = document.querySelector('#searchItem').value;
        getInputValue = getInputValue.toLowerCase();
    let itemsList = document.querySelectorAll('.storeItem');
    for(let i=0;i<filterArray.length;i++){
        if(filterArray[i].name.indexOf(getInputValue) != -1){
            searchResult.unshift(filterArray[i]);
        }
    }
        displayProductList(searchResult);
}

var debounce = (func, delay) => {
    let Timer
    return function() {
       clearTimeout(Timer)
       Timer= setTimeout(() =>
       filter(), 300)
    }
 }

var myEfficientFn = debounce(filter,300);

getFilteredProduct("all");

displayBtn(storeItem1);


