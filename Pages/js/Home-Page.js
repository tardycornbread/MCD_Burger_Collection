
const burgers = [
    { id: "bm", name: "Big Mac", ingredients: ["beef-patty", "lettuce", "big_mac_sauce", "pickles", "onions", "american-cheese", "bun"] },
    { id: "double-BM", name: "Double Big Mac", ingredients: ["beef-patty", "lettuce", "big_mac_sauce", "pickles", "onions", "american-cheese", "bun"] },
    { id: "bqc", name: "Quarter Pounder with Cheese Bacon", ingredients: ["beef-patty", "american-cheese", "onions", "pickles", "bun", "ketchup", "mustard"] },
    { id: "cb", name: "Cheeseburger", ingredients: ["beef-patty", "american-cheese", "onions", "pickles", "bun","ketchup", "mustard"] },
    {id:"dcb", name: "Double Cheeseburger", ingredients: ["beef-patty", "american-cheese", "onions", "pickles", "bun","ketchup", "mustard"]},
    { id:"dqpc", name: "Double Quarter Pounder with Cheese", ingredients: ["beef-patty", "american-cheese", "onions", "pickles", "bun","ketchup", "mustard"]},
    { id:"hb", name: "Hamburger", ingredients: ["beef-patty", "onions", "pickles", "bun","ketchup", "mustard"]},
    { id:"md", name: "McDouble", ingredients: ["beef-patty", "american-cheese", "onions", "pickles", "bun","ketchup", "mustard"]},
    { id:"qpc", name: "Quarter Pounder with Cheese", ingredients: ["beef-patty", "american-cheese", "onions", "pickles", "bun","ketchup", "mustard"]},
    { id: "qpcd", name: "Quarter Pounder with Cheese Deluxe", ingredients: ["beef-patty", "american-cheese", "onions", "pickles", "bun","ketchup", "mustard", "tomato", "lettuce", "mayo"]},
    { id: "MCNIFICA" , name: "McNifica", ingredients: ["beef-patty", "american-cheese", "onions", "pickles", "bun","ketchup", "mustard", "tomato", "lettuce", "mayo"]},
    { id: "tcb" , name: "Triple with Bacon", ingredients: ["beef-patty", "american-cheese", "bun","ketchup", "mustard", "bacon"]},
    { id: "premium_cbo", name:"Premium CBO", ingredients: ["beef-patty", "swiss-cheese", "onions","bun", "mustard", "tomato", "lettuce", "mayo"]},
    { id: "Big_Tasty_Beef", name: "Big Tasty Beef", ingredients: ["beef-patty", "swiss-cheese", "onions","bun", "mustard", "tomato", "lettuce", "mayo"]},
    { id: "Grand Tasty BBQ Double", name: "Grand Tasty BBQ Double", ingredients: ["beef-patty", "swiss-cheese", "onions","bun",  "tomato", "bacon", "bbq_sauce", "lettuce", "mayo"]},
    { id: "BBQ Crispy Onion", name: "BBQ Crispy Onion", ingredients: ["beef-patty", "swiss-cheese", "onions","bun",  "bacon", "bbq_sauce", ]},
    { id: "Club House", name: "Club House", ingredients: ["beef-patty", "tomato", "swiss-cheese", "lettuce", "bacon", "big_mac_sauce", "mayo", "bun"]},

    
];


function filterBurgersByIngredients(selectedIngredients) {
    return burgers.filter(burger => selectedIngredients.every(ingredient => burger.ingredients.includes(ingredient)));
}

document.querySelectorAll("#ingredientFilters .ingredient-checkbox").forEach(input => {
    input.addEventListener('change', function () {
        if(this.checked) {
            this.parentNode.classList.add("checked");
        } else {
            this.parentNode.classList.remove("checked");
        }
        const selectedIngredients = Array.from(document.querySelectorAll("#ingredientFilters .ingredient-checkbox:checked")).map(input => input.value);
        const filteredBurgers = filterBurgersByIngredients(selectedIngredients);
        displayBurgers(filteredBurgers);
    });
});

function displayBurgers(burgers) {
    const burgerContainer = document.querySelector(".burger-wrapper");
    burgerContainer.innerHTML = ""; 
    burgers.forEach(burger => {
       
        const link = document.createElement("a");
        
        link.href = `${burger.id}.html`;

       
        const img = document.createElement("img");
        img.src = `../img/burgers/${burger.id}.png`;
        img.alt = burger.name; 

      
        link.appendChild(img);
        
        burgerContainer.appendChild(link);
    });
}

