// Array of items to render
const items = [
  {
    id: 1,
    title: "Sweet Item",
    rate: 5,
    category: "sweet",
  },
  {
    id: 2,
    title: "Cupcake Item",
    rate: 5,
    category: "cupcake",
  },
  {
    id: 3,
    title: "Cake Item",
    rate: 5,
    category: "cake",
  },
  {
    id: 4,
    title: "Doughnut Item",
    rate: 5,
    category: "doughnut",
  },
  {
    id: 5,
    title: "Sweet Item",
    rate: 10,
    category: "sweet",
  },
  {
    id: 6,
    title: "Cupcake Item",
    rate: 10,
    category: "cupcake",
  },
  {
    id: 7,
    title: "Cake Item",
    rate: 10,
    category: "cake",
  },
  {
    id: 8,
    title: "Doughnut Item",
    rate: 10,
    category: "doughnut",
  },
  {
    id: 9,
    title: "Sweet Item",
    rate: 15,
    category: "sweet",
  },
  {
    id: 10,
    title: "Cupcake Item",
    rate: 15,
    category: "cupcake",
  },
  {
    id: 11,
    title: "Cake Item",
    rate: 15,
    category: "cake",
  },
  {
    id: 12,
    title: "Doughnut Item",
    rate: 15,
    category: "doughnut",
  },
];

//function to render items
const renderItems = (items) => {
  var itemsToRender = "";
  items.map((item) => {
    itemsToRender += `<div class="max-w-sm rounded-lg overflow-hidden shadow bg-white">
        <img
        class="w-full"
        src="https://romeojeremiah.github.io/Filter-Project/img/cupcake-1.jpeg"
        alt="Sunset in the mountains"
        />
        <div class="px-6 py-4 flex justify-between">
        <h2 class="font-bold text-xl mb-2">${item.title}</h2>
        <div class="font-bold text-xl mb-2">₹${item.rate}</div>
        </div>
        </div>`;
  });
  document.querySelector("#itemsContainer").innerHTML = itemsToRender;
};
//initial render
renderItems(items);

//to filter items by query provided by user
const filterByText = (e) => {
  const filterQuery = document
    .querySelector("#filterInput")
    .value.toLowerCase();
  const filteredArray = items.filter((item) => {
    return item.title.toLowerCase().includes(filterQuery);
  });
  renderItems(filteredArray);
};

//to filter items by category selected by user
const filterByType = (type) => {
  const filterButtons = Array.from(document.querySelectorAll(".filter-button"));
  const filteredArray = items.filter((item) => {
    return item.category == type;
  });
  const itemsToRender = type == "all" ? items : filteredArray;
  renderItems(itemsToRender);
};
