let foodItems = {
    'Non-veg': 4,
    'Rice': 6,
    'Paratha': 5,
    'Roti': 3,
    'Kathi Roll': 4,
    'Pure Veg': 18
};

const itemarray = Object.entries(foodItems).map(function (ele) {
    let [key, value] = ele;
    return (`${key} (${value})`);
});

let foodlist = document.getElementById("category");

// Use a forEach loop to iterate over itemarray
itemarray.forEach((item, index) => {
    const li = document.createElement('li');
    li.textContent = item;
    if (index === 0){
        li.classList = "active";
    }
    li.addEventListener("click", function(){
        foodlist.querySelectorAll('li').forEach(element => {
            if (element.classList.contains("active")){
                element.classList.remove("active");
            };
        });
        this.classList = "active";
    })
    foodlist.appendChild(li);

    // Add a line break after each list item, except for the last one
    if (index < itemarray.length - 1) {
        foodlist.appendChild(document.createElement('br'));
    }
});

