const productListElm = document.getElementById('productList');
const productCategoriesElm = document.getElementById('productFilters');
const searchProductInputElm = document.getElementById('searchProductInput');
let currencySymbol = '&#8377'

const getBakeryData = () => (
     {
        "currency": "USD",
        "data": [
            {                
                "category": "sweet",
                "description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                "id": 0,
                "price": 12,
                "name": "Sweet Item",
                "img": "",
            },
            {
                "category": "cake",
                "description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                "id": 1,         
                "img": "",      
                "name": "Cupcake Item",         
                "price": 15,
            },
            {
                "category": "cake",
                "description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                "id": 2,         
                "img": "",      
                "name": "Cake Item",         
                "price": 10,
            },
            {
                "category": "sweet",
                "description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                "id": 3,         
                "img": "",      
                "name": "Sweet Item",         
                "price": 13,
            },
            {
                "category": "doughnut",
                "description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                "id": 4,         
                "img": "",      
                "name": "Doughnut Item",         
                "price": 30,
            },
            {
                "category": "sweet",
                "description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                "id": 6,
                "price": 12,
                "name": "Sweet Item1",
                "img": "",
            },
            {
                "category": "cake",
                "description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                "id": 7,         
                "img": "",      
                "name": "Cupcake Item1",         
                "price": 15,
            },
            {
                "category": "cake",
                "description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                "id": 8,         
                "img": "",      
                "name": "Cake Item1",         
                "price": 10,
            },
            {
                "category": "sweet",
                "description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                "id": 9,         
                "img": "",      
                "name": "Sweet Item1",         
                "price": 13,
            },
            {
                "category": "doughnut",
                "description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                "id": 10,         
                "img": "",      
                "name": "Doughnut Item1",         
                "price": 30,
            },
        ]
})

const getCurrencySymbol = cur => {    
    switch (cur) {
        case 'USD': 
            currencySymbol = '&#36;'
        break;
        case 'INR': 
            currencySymbol = '&#8377'
        break;
        case 'GBP':
            currencySymbol = '&#xa3'
        break;
        default: return '&#8377'
    }
}

const createProductItemDOM = product => {
    return (
    `<div class="col-md-4 mb-3">
    <div class="card md-4" name="${product.category}">
        <svg name="${product.name}" class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail">
            <title>${product.name}</title>
            <rect width="100%" height="100%" fill="#55595c"></rect>
            <text x="20%" y="50%" fill="#eceeef" dy=".3em" class="font-weight-lighter">${product.name}</text>
        </svg>
        <div class="card-body">
            <h5 class="card-title">${product.name}</h5>
            ${!!product.description && (`<p class="card-text">${product.description}</p>`)}
            <p class="card-text text-muted">${currencySymbol} ${product.price}</p>
        </div>        
    </div>
    </div>`)
}

const createCategoryItemDOM = category => {
    let createId = category.trim();
    return (`<a href="#" id="${createId}" class="badge badge-info mr-2 ">${category}</a>`)
}

const createProductsDOM =  res => {
    let formedData = [];
    if(res.length > 0) {
        res.forEach(product => {
            formedData += createProductItemDOM(product)
        });
    }
    productListElm.innerHTML = (res.length > 0) ? formedData : "No Products found!"
}

const createProductListDOM = () => {
    const getProductsData = getBakeryData();
    getCurrencySymbol(getProductsData.currency);
    createProductsDOM(getProductsData.data)
}

const createProductCategoriesDOM = () => {
    const getProductsData = getBakeryData(); // we can return once called data from this func if available rather than calling API 
    // filter duplicate categories 
    let categories = ['all']
    const createCategoryItemAll = createCategoryItemDOM('all')
    let productCategories = createCategoryItemAll;

    getProductsData.data.forEach(item => { 
        if(!categories.includes(item.category)) {
            categories.push(item.category) 
            productCategories += createCategoryItemDOM(item.category)
        }
    })
    return productCategories;
} 

const onSearchProducts = value => {
    const getProductsData = getBakeryData();    
    const filteredProducts = getProductsData.data.filter(product => product.name.toLowerCase().includes(value.toLowerCase()))
    createProductsDOM(filteredProducts)
}

const sortByCategory = category => { 
    const getProductsData = getBakeryData();
    if(category !== 'productFilters' && category !== 'all') {
     const filteredProducts = getProductsData.data.filter(product => product.category.toLowerCase().includes(category.toLowerCase()))
     createProductsDOM(filteredProducts)
    }
    if(category === 'all') {
        createProductsDOM(getProductsData.data)
    }

}

const registerCategoryClickEvent = () => {
    productCategoriesElm.addEventListener('click', e => {
        sortByCategory(e.target.id)       
    })
}

const registerProductSearchEvent = () => {
    searchProductInputElm.addEventListener('keyup', e => {
        //TODO: debounce or throttle
        onSearchProducts(e.target.value)
    })
}

const renderDOM = () => {
    productCategoriesElm.innerHTML = createProductCategoriesDOM();
    createProductListDOM()
}

const init = () => {
    renderDOM()
    registerCategoryClickEvent()
    registerProductSearchEvent()
}

init()