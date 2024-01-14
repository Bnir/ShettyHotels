let foodCatelog = {
    'Non-veg': [
        {
            'name': "Keema",
            'img': "https://dukaan.b-cdn.net/200x200/webp/2179916/541a1ca8-cd5f-450b-a3e2-0e3e29ca0828/1607338795253.png",
            'price': "70"
        },
        {
            'name': "Stew",
            'img': "https://dukaan.b-cdn.net/200x200/webp/2179916/541a1ca8-cd5f-450b-a3e2-0e3e29ca0828/1607338563390.png",
            'price': "70"
        }
    ]
};

let foodItems = {
    'Non-veg': 4,
    'Rice': 6,
    'Paratha': 5,
    'Roti': 3,
    'Biriyani': 4,
    'Kathi Roll': 4,
    'Pure Veg': 18
};

const itemarray = Object.entries(foodCatelog).map(function (ele) {
    let [key, value] = ele;
    return (`${key} (${value.length})`);
});

let foodlist = document.getElementById("category");

// Use a forEach loop to iterate over itemarray
itemarray.forEach((item, index) => {
    const li = document.createElement('li');
    li.textContent = item;
    if (index === 0) {
        li.classList = "active";
    }
    li.addEventListener("click", function () {
        foodlist.querySelectorAll('li').forEach(element => {
            if (element.classList.contains("active")) {
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

// const foodCat = Object.entries(foodCatelog).map(function(item){
//     let [key, value] = item;
//     return [];
// });

for (let i = 0; i < Object.keys(foodCatelog).length; i++) {
    let cat = Object.keys(foodCatelog)[i];
    for (let j = 0; j < foodCatelog[cat].length; j++) {
        let item = foodCatelog[cat][j];
        let details = Object.values(item).map(function (ele) {
            return ele;
        });
        for (x of details) {
            console.log(x);
        };
    };
};