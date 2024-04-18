document.addEventListener("DOMContentLoaded", function () {
    const curtainContainer = document.getElementById("curtain-container");

    curtainContainer.addEventListener("click", function () {
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
    ],
    'Juices': [
        {
            'name': "Mango Milkshake",
            'img': "https://th.bing.com/th/id/OIP.t2CjpRCWB8E-oQ_wJCtDmAHaFj?w=203&h=152&c=7&r=0&o=5&dpr=1.1&pid=1.7",
            'price': "80"
        },
        {
            'name': "Cold Coffee",
            'img': "https://1.bp.blogspot.com/-x9vOBWEnChE/YOC9J7acsxI/AAAAAAAA4Po/l1GSDEpp_ZQw8UhBNfFLROkjJOjZ-aaiACLcBGAsYHQ/s1080/Untitled%2Bdesign.png",
            'price': "40"
        }
    ]

};

cartItems = {};
let cartItems1 = {}; // Object to store cart items and their quantities

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
    let carter = document.getElementById('food-cart-cont');
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
        // myButton.onclick = (ele) => {
        //     let newItem = ele.target.closest('.cart-buttons');
        //     let itemId = newItem.dataset.myAttribute;
        //     if (cartItems[itemId] === 1) {
        //         myButton.style.cursor = "not-allowed";
        //         myButton.style.backgroundColor = "rgba(128, 128, 128, 0.18)";
        //         myButton.style.color = "#146eb4";
        //         cartItems[itemId]--
        //     }
        //     else if (cartItems[itemId] === 0) {
        //         return;
        //     }
        //     else if (cartItems[itemId] === undefined) {
        //         return;
        //     }
        //     else {
        //         cartItems[itemId]--
        //     }

        //     update_buttons(itemId);
        // };

        myButton.onclick = (ele) => {
            let newItem = ele.target.closest('.cart-buttons');
            let itemId = newItem.dataset.myAttribute;
            if (cartItems[itemId] === 1) {
                myButton.style.cursor = "not-allowed";
                myButton.style.backgroundColor = "rgba(128, 128, 128, 0.18)";
                myButton.style.color = "#146eb4";
                cartItems[itemId]--;
                // Remove the item from cartItems if quantity becomes 0
            }
            else if (cartItems[itemId] === 0) {
                return;

            }
            else if (cartItems[itemId] === undefined) {
                return;
            }
            else {
                cartItems[itemId]--;
            }
            update_buttons(itemId); // Update the buttons in the food item
            updateCart(); // Update the cart section
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

        // myButton2.onclick = (ele) => {
        //     let newItem = ele.target.closest('.cart-buttons');
        //     let itemId = newItem.dataset.myAttribute;
        //     myButton.style.cursor = "pointer";
        //     myButton.style.backgroundColor = "#146eb4";
        //     myButton.style.color = "aliceblue";
        //     if (cartItems[itemId] === undefined) {
        //         cartItems[itemId] = 1;
        //     }
        //     else {
        //         cartItems[itemId]++
        //     };
        //     update_buttons(itemId);
        //     // console.log(cartItems);
        //     // newItem.querySelectorAll('.add').textContent = cartItems[itemId];
        // };
        myButton2.onclick = (ele) => {
            let newItem = ele.target.closest('.cart-buttons');
            let itemId = newItem.dataset.myAttribute;
            myButton.style.cursor = "pointer";
            myButton.style.backgroundColor = "#146eb4";
            myButton.style.color = "aliceblue";
            if (cartItems[itemId] === undefined) {
                cartItems[itemId] = 1;
            } else {
                cartItems[itemId]++;
            }
            update_buttons(itemId); // Update the buttons in the food item
            updateCart(); // Update the cart section
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

// function updateCart(itemName, quantity) {
//     let cartContainer = document.getElementById('food-cart-cont');
//     let cartItem = document.createElement('div');
//     cartItem.classList.add('cart-fooditem');
//     cartItem.innerHTML = `<div class="cart-food"><p>${itemName} (${quantity})</p></div>`;
//     cartContainer.appendChild(cartItem);
// }

let cartContainer = document.getElementById('food-cart-cont');

function updateCart() {
    cartContainer.innerHTML = ''; // Clear the cart container before updating
    let totalPrice = 0; // Variable to store the total price of all items

    for (let item in cartItems) {
        if (cartItems[item] > 0) {
            let itemPrice = getItemPrice(item); // Get the price of the item
            let itemTotalPrice = calculateItemTotalPrice(item, cartItems[item]); // Calculate total price
            totalPrice += itemTotalPrice; // Add item's total price to the overall total
            let cartItem = document.createElement('div');
            cartItem.classList.add('cart-fooditem');
            cartItem.innerHTML = `<div class="cart-food">
                                    <p>${item} (${cartItems[item]})</p>
                                    <p>Item Price: ${itemTotalPrice}rs<br><br></p>
                                  </div>`;
            cartContainer.appendChild(cartItem);
        } else {
            delete cartItems[item]; // Remove the item from cartItems if quantity is 0
        }
    }
    // Display the total price of all items in the cart
    let totalContainer = document.createElement('div');
    totalContainer.classList.add('total-price');
    totalContainer.innerHTML = `<p>Total Price: ${totalPrice}rs</p>`;
    cartContainer.appendChild(totalContainer);

    let cont3 = document.createElement('div');
    cont3.classList.add('pro-button');
    var proceed = document.createElement('button');
    proceed.innerHTML = 'Generate QR';
    proceed.id = 'generate-qr';
    proceed.style.cursor = 'pointer';

    proceed.addEventListener('click', generateQR);


    cont3.appendChild(proceed);
    cartContainer.appendChild(cont3);
}
updateCart();

function pricer(item1) {
    for (let i = 0; i < Object.keys(foodCatelog).length; i++) {
        let cat = Object.keys(foodCatelog)[i];

        for (let j = 0; j < foodCatelog[cat].length; j++) {
            let item = foodCatelog[cat][j];
            let details = Object.values(item).map(function (ele) {
                return ele;
            });
            if (details[0] == item1) {
                return details[2];
            }
        }
    }
}

// Function to get the price of an item from the foodCatelog
function getItemPrice(itemName) {
    for (let category in foodCatelog) {
        for (let item of foodCatelog[category]) {
            if (item.name === itemName) {
                return item.price;
            }
        }
    }
    return 0; // Return 0 if item not found (this shouldn't happen)
}

// Function to calculate the total price for an item
function calculateItemTotalPrice(itemName, quantity) {
    let itemPrice = getItemPrice(itemName);
    return itemPrice * quantity;
}
function generateQR() {
    let qrText = ''; // Initialize an empty string to store the QR text

    let count2 = 0;

    // Iterate through all items in the cartItems object
    for (let item in cartItems) {
        if (cartItems[item] > 0) {
            count2++;
            let itemPrice = getItemPrice(item); // Get the price of the item
            let itemTotalPrice = calculateItemTotalPrice(item, cartItems[item]); // Calculate total price
            qrText += `${item} (${cartItems[item]}) - ${itemTotalPrice}rs\n`; // Append item info to the QR text
        }
    }

    qrText += `Total Price: ${calculateTotalPrice()}rs`; // Add total price to the QR text
    document.getElementById("qrcode").innerHTML = "";
    if (count2 == 0) {
        qrText = "No Items were in cart";
    }
    // Create a QR code instance
    let qrCode = new QRCode(document.getElementById("qrcode"), {
        text: qrText, // Set the QR text
        width: 256, // Set the width of the QR code
        height: 256, // Set the height of the QR code
        colorDark: "#000000", // Set the dark color of the QR code
        colorLight: "#ffffff", // Set the light color of the QR code
        correctLevel: QRCode.CorrectLevel.H // Set the error correction level of the QR code
    });

    // Optionally, you can add styling to the QR code container
    let qrcodeContainer = document.getElementById("qrcode");
    qrcodeContainer.style.margin = "auto"; // Center the QR code
    qrcodeContainer.style.display = "block"; // Display as a block element
    openPopup();
}

// Event listener for the Generate QR button
document.getElementById('generate-qr').addEventListener('click', generateQR);

function calculateTotalPrice() {
    let totalPrice = 0;

    for (let item in cartItems) {
        if (cartItems[item] > 0) {
            let itemPrice = getItemPrice(item);
            totalPrice += itemPrice * cartItems[item]; // Add the total price of each item to the totalPrice
        }
    }

    return totalPrice;
}


// Function to open the popup
function openPopup() {
    document.getElementById("qr-popup").style.display = "block";
}

// Function to close the popup
function closePopup() {
    document.getElementById("qr-popup").style.display = "none";
}

