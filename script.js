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
        },
        {
            'name': "Nihari",
            'img': "https://dukaan.b-cdn.net/200x200/webp/2179916/541a1ca8-cd5f-450b-a3e2-0e3e29ca0828/1607338424023.png",
            'price': "70"
        },
        {'name': "Korma",
            'img': "https://dukaan.b-cdn.net/200x200/webp/2179916/541a1ca8-cd5f-450b-a3e2-0e3e29ca0828/1607338379345.png",
            'price': "70"
    }
    ],
    'Rice': [
        {
            'name': "Paneer Pulav",
            'img': "https://dukaan.b-cdn.net/200x200/webp/2179916/541a1ca8-cd5f-450b-a3e2-0e3e29ca0828/1607338223304.png",
            'price': "100"
        },
        {
            'name': "Matar Chawal",
            'img': "https://dukaan.b-cdn.net/200x200/webp/2179916/541a1ca8-cd5f-450b-a3e2-0e3e29ca0828/1607338171309.png",
            'price': "80"
        },
        {
            'name': "Cholle Chawal",
            'img': "https://dukaan.b-cdn.net/200x200/webp/2179916/541a1ca8-cd5f-450b-a3e2-0e3e29ca0828/1607338132033.png",
            'price': "60"
        },
        {
            'name': "Plain Rice",
            'img': "https://dukaan.b-cdn.net/200x200/webp/2179916/541a1ca8-cd5f-450b-a3e2-0e3e29ca0828/1607338086068.png",
            'price': "30"
        },
        {
            'name': "Jeera Chawal",
            'img': "https://dukaan.b-cdn.net/200x200/webp/2179916/541a1ca8-cd5f-450b-a3e2-0e3e29ca0828/1607338038273.png",
            'price': "60"
        },
        {
            'name': "Kadhi Chawal",
            'img': "https://dukaan.b-cdn.net/200x200/webp/2179916/541a1ca8-cd5f-450b-a3e2-0e3e29ca0828/1607337983547.png",
            'price': "60"
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

    let menuContainer = document.getElementById('food');
    let mainDiv = document.createElement('div');
    let heading = document.createElement('h1');
    let newButton = document.createElement('button');

    heading.textContent = cat;
    newButton.textContent = foodCatelog[cat].length;
    newButton.classList.add("blue-button");
    mainDiv.classList.add("food-head");

    mainDiv.appendChild(heading);
    mainDiv.appendChild(newButton);

    menuContainer.append(mainDiv);

    for (let j = 0; j < foodCatelog[cat].length; j++) {
        let item = foodCatelog[cat][j];
        let details = Object.values(item).map(function (ele) {
            return ele;
        });

        let mainDiv2 = document.createElement('div');
        mainDiv2.classList.add("food-item");
        let childDiv = document.createElement('div');
        childDiv.classList.add("image-wrap");
        let childDiv2 = document.createElement('div');
        childDiv2.classList.add("wrapper");

        let imgTag = document.createElement('img');
        imgTag.src = details[1];

        childDiv2.appendChild(imgTag);
        childDiv.appendChild(childDiv2);

        mainDiv2.appendChild(childDiv);

        let mainDiv3 = document.createElement('div');
        mainDiv3.classList.add("detailscont");

        let childDiv3 = document.createElement('div');
        childDiv3.classList.add("title");
        let heading1 = document.createElement('h1');
        heading1.textContent = details[0];
        childDiv3.appendChild(heading1);

        mainDiv3.appendChild(childDiv3);

        let childDiv4 = document.createElement('div');
        childDiv4.classList.add("detailing");
        let paragraph = document.createElement('p');
        paragraph.textContent = details[2] + "rs";

        let myButton = document.createElement('button');
        myButton.textContent = "Add +";

        childDiv4.appendChild(paragraph);
        childDiv4.appendChild(myButton);

        mainDiv3.appendChild(childDiv4);

        mainDiv2.appendChild(mainDiv3);

        menuContainer.appendChild(mainDiv2);
    };
};

