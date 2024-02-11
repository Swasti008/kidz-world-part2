let cart = document.getElementById("cartValue");
let addButton = document.getElementsByClassName("book");
let popuptext = document.getElementById("popup");
let books = document.getElementsByClassName("book");

let items = [
  {
    Itemname: "This was our pact",
    quantity: 0,
    dollars: 7,
    cents: 49,
    src: "./assets/book1.png",
  },
  {
    Itemname: "The famous five",
    quantity: 0,
    dollars: 4,
    cents: 59,
    src: "./assets/book2.png",
  },
  {
    Itemname: "Matilda",
    quantity: 0,
    dollars: 4,
    cents: 59,
    src: "./assets/book3.png",
  },
  {
    Itemname: "Harry Potter",
    quantity: 0,
    dollars: 6,
    cents: 80,
    src: "./assets/book4.png",
  },
  {
    Itemname: "For Young Readers",
    quantity: 0,
    dollars: 7,
    cents: 29,
    src: "./assets/book5.png",
  },
  {
    Itemname: "Wimpy kid - DIY",
    quantity: 0,
    dollars: 4,
    cents: 99,
    src: "./assets/book6.png",
  },
  {
    Itemname: "DART Board",
    quantity: 0,
    dollars: 17,
    cents: 49,
    src: "./assets/dart-board.png",
  },
  {
    Itemname: "Connect Four",
    quantity: 0,
    dollars: 19,
    cents: 99,
    src: "./assets/connect-four.png",
  },
  {
    Itemname: "Jenga",
    quantity: 0,
    dollars: 20,
    cents: 99,
    src: "./assets/jenga.png",
  },
  {
    Itemname: "Monopoly",
    quantity: 0,
    dollars: 19,
    cents: 49,
    src: "./assets/monopoly.png",
  },
  {
    Itemname: "Bookmarks",
    quantity: 0,
    dollars: 12,
    cents: 49,
    src: "./assets/bookmarks.png",
  },
  {
    Itemname: "Birthday Card",
    quantity: 0,
    dollars: 12,
    cents: 49,
    src: "./assets/birthday-card.png",
  },
  {
    Itemname: "Stuffed toys",
    quantity: 0,
    dollars: 15,
    cents: 99,
    src: "./assets/stuffed-toy.png",
  },
  {
    Itemname: "Dream catcher drawing",
    quantity: 0,
    dollars: 18,
    cents: 49,
    src: "./assets/dream-catcher.png",
  },
];
// FOR UPDATING THE CART
function update() {
  price();
  let sum = 0;
  for (let index = 0; index < items.length; index++) {
    sum = sum + items[index].quantity;
  }
  cart.innerText = sum;
}
let cartItems = [];
for (let i = 0; i < addButton.length; i++) {
  addButton[i].onclick = (e) => {
    items[i].quantity++;
    cartItems.push(items[i]);
    update();
    show();
  };
}

// FOR ADDING THE AMOUNT
var Dollars = 0;
var Cents = 0;
function price() {
  let totalAmount = 0;
  for (let m = 0; m < items.length; m++) {
    totalAmount =
      totalAmount +
      items[m].quantity * (100 * items[m].dollars + items[m].cents);
  }

  Dollars = Math.floor(totalAmount / 100);
  console.log("TotalDollars:", Dollars);

  Cents = totalAmount % 100;
  console.log("TotalCents:", Cents);

  for (let index = 0; index < items.length; index++) {
    if (items[index].quantity != 0) {
      console.log(
        "Item name: " +
          items[index].Itemname +
          " - Quantity: " +
          items[index].quantity
      );
    }
  }

  console.log("The total amount is " + Dollars + "$ and " + Cents + " cents");
}

// FOR POPUP
let click = 0;
function popup() {
  updateWhatsappLink();
  window.open(link, "_blank");
  if (click % 2 == 0) {
    popuptext.style.display = "block";

    click++;
  } else {
    popuptext.style.display = "none";
    click++;
  }
}

console.log(cartItems);
function show() {
  popuptext.innerHTML = "";
  cartItems.forEach((el) => {
    popuptext.innerHTML += `<span><img src="${el.src}" height="300px" width="200px" alt=""><span>
    
    <p><h5>${el.Itemname}</h5><p>
    Qty:<span>${el.quantity}</span>
    Price:<span>${el.dollars}</span>
    Price:<span>${el.cents}</span>
    `;
  });
}

let link =
  "https://api.whatsapp.com/send?phone=8295057353&text=Order%20details";

function updateWhatsappLink() {
  for (let index = 0; index < items.length; index++) {
    if (items[index].quantity != 0) {
      link += "%0A" + items[index].Itemname + "%20" + items[index].quantity;
    }
  }

  link += "%0A" + "Total %20 A price %20A" + Dollars + "%20" + Cents + "cents";
}
