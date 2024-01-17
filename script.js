document.addEventListener("DOMContentLoaded", function() {
    const curtainContainer = document.getElementById("curtain-container");

    curtainContainer.addEventListener("click", function() {
        curtainContainer.style.animation = "revealAnimation 0.8s ease forwards"
        curtainContainer.style.transform = "translateY(-100%)";
    });
});



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
        {
            'name': "Korma",
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

cartItems = {};

let sums = 0;
for (let i = 0; i < Object.keys(foodCatelog).length; i++) {
    let cat = Object.keys(foodCatelog)[i];

    for (let j = 0; j < foodCatelog[cat].length; j++) {
        sums = sums + 1;
    };
};
// let foodItems = {
//     'Non-veg': 4,
//     'Rice': 6,
//     'Paratha': 5,
//     'Roti': 3,
//     'Biriyani': 4,
//     'Kathi Roll': 4,
//     'Pure Veg': 18
// };

const itemarray = Object.entries(foodCatelog).map(function (ele) {
    let [key, value] = ele;
    return (`${key} (${value.length})`);
});

// let updater = document.getElementById('cart-buttons2');
function update_buttons(item) {
    let updater1 = document.getElementById(item);
    updater1.textContent = cartItems[item];
    // updater.querySelectorAll('.add').forEach(ele => {
    //     if (ele.name === item) {
    //         ele.innerText("1")
    //     };
    // });
};

let foodlist = document.getElementById("category");


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
    let newCat = document.createElement('div');
    newCat.id = i;

    heading.textContent = cat;
    newButton.textContent = foodCatelog[cat].length;
    newButton.classList.add("blue-button");
    mainDiv.classList.add("food-head");

    mainDiv.appendChild(heading);
    mainDiv.appendChild(newButton);
    newCat.appendChild(mainDiv)


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

        let childDiv5 = document.createElement('div');
        childDiv5.classList.add("cart-buttons");
        childDiv5.dataset.myAttribute = details[0];

        let myButton = document.createElement('button');
        myButton.textContent = "-";
        myButton.onclick =  (ele) => {
            let newItem = ele.target.closest('.cart-buttons');
            let itemId = newItem.dataset.myAttribute;
            if (cartItems[itemId] === 1){
                myButton.style.cursor = "not-allowed";
                myButton.style.backgroundColor = "rgba(128, 128, 128, 0.18)";
                myButton.style.color = "#146eb4";
                cartItems[itemId]--
            }
            else if (cartItems[itemId] === 0){
                return;
            }
            else if (cartItems[itemId] === undefined){
                return;
            }
            else{
                cartItems[itemId]--
            }

            update_buttons(itemId);
        };
        myButton.id = "minus"

        let myButton1 = document.createElement('button');
        myButton1.textContent = "0";
        myButton1.id = details[0];

        // myButton1.onclick = function (ele1) {
        //     console.log(ele1);
        // };

        let myButton2 = document.createElement('button');
        myButton2.textContent = "+";
        myButton2.classList.add("add");

        myButton2.onclick = (ele) => {
            let newItem = ele.target.closest('.cart-buttons');
            let itemId = newItem.dataset.myAttribute;
            myButton.style.cursor = "pointer";
            myButton.style.backgroundColor = "#146eb4";
            myButton.style.color = "aliceblue";
            if (cartItems[itemId] === undefined) {
                cartItems[itemId] = 1;
            }
            else {
                cartItems[itemId]++
            };
            update_buttons(itemId);
            // console.log(cartItems);
            // newItem.querySelectorAll('.add').textContent = cartItems[itemId];
        };

        myButton2.name = details[0];
        // myButton2.classList.add(details[0].replace(/\s/g, ''));
        myButton2.id = "plus";

        childDiv5.appendChild(myButton);
        childDiv5.appendChild(myButton1);
        childDiv5.appendChild(myButton2);


        childDiv4.appendChild(paragraph);
        childDiv4.appendChild(childDiv5);

        mainDiv3.appendChild(childDiv4);

        mainDiv2.appendChild(mainDiv3);

        newCat.appendChild(mainDiv2);

        menuContainer.appendChild(newCat);
    };
};



let foodContainer = document.getElementById('food');
const li = document.createElement('li');
li.textContent = `All (${sums.toString()})`;
li.id = "all";
li.classList.add("active");
li.addEventListener("click", function () {
    foodlist.querySelectorAll('li').forEach(element => {
        if (element.classList.contains("active")) {
            element.classList.remove("active");
        };
        for (let i = 0; i < Object.keys(foodCatelog).length; i++) {
            let test = document.getElementById(i);
            test.style.display = "block";
        }
        console.log(element);
    });
    this.classList = "active";
})
li.style.marginBottom = "10px"
foodlist.appendChild(li);



itemarray.forEach((item, index) => {
    const li = document.createElement('li');
    li.textContent = item;
    li.id = Object.keys(foodCatelog)[index];
    li.addEventListener("click", function () {
        foodlist.querySelectorAll('li').forEach(element => {
            if (element.classList.contains("active")) {
                element.classList.remove("active");
            };
            console.log(element);
        });

        for (let i = 0; i < Object.keys(foodCatelog).length; i++) {
            let test = document.getElementById(i);
            test.style.display = "None";
        }
        let ind = Object.keys(foodCatelog).indexOf(this.id);
        let tester = document.getElementById(ind);

        tester.style.display = "block";

        this.classList = "active";

    })
    foodlist.appendChild(li);

    if (index < itemarray.length - 1) {
        foodlist.appendChild(document.createElement('br'));
    }
});


