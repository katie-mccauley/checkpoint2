let cheese = 0

let clickUpgrades = {
  pickaxes: {
    price: 10,
    quantity: 0,
    multiplier: 5,
    inflation: 2
  },
  astronaunt: {
    price: 12,
    quantity: 0,
    multiplier: 4,
    inflation: 5
  }
};

let automaticUpgrades = {
  rovers: {
    price: 13,
    quantity: 0,
    multiplier: 6
  },
  astriod: {
    price: 15,
    quantity: 0,
    multiplier: 3
  }
};


// for (let key in automaticUpgrades) {
//   let upgrade = automaticUpgrades[key]
//   document.getElementById(key) = upgrade.quantity
//   doucment.getElementById(key+"-price") upgrade.price
//   if (upgrade.price <= cheese) {
//     document.getElementById(key + "-button").disabled = false
//   } else {
//     document.getElementById(key + "-button").disabled = true
//   }
// }
// for (let key in clickUpgrades) {
//   let upgrade = clickUpgrades[key]
//   document.getElementById(key) = upgrade.quantity
//   doucment.getElementById(key+"-price") upgrade.price
//   if (upgrade.price <= cheese) {
//     document.getElementById(key + "-button").disabled = false
//   } else {
//     document.getElementById(key + "-button").disabled = true
//   }
// }
function buttons() {
  if (clickUpgrades.pickaxes.price <= cheese) {
    document.getElementById("btnP").disabled = false
  } else {
    document.getElementById("btnP").disabled = true
  }
  if (clickUpgrades.astronaunt.price <= cheese) {
    document.getElementById("btnAstro").disabled = false
  } else {
    document.getElementById("btnAstro").disabled = true
  }
  if (automaticUpgrades.rovers.price <= cheese) {
    document.getElementById("btnR").disabled = false
  } else {
    document.getElementById("btnR").disabled = true
  }
  if (automaticUpgrades.astriod.price <= cheese) {
    document.getElementById("btnAstriod").disabled = false
  } else {
    document.getElementById("btnAstriod").disabled = true
  }
}


/*  this is every time I click the image the cheese increases and when I purchase an axe or astronaunt, the cheese is mulptpued by quanity + mulitplier. NOTE everytime I click the image, the cheese count is going to increase by two. the reason why the clickmine goes here is becuase the function is invoked when you click, the clickMine updates the multipler in cheese because everytime you purchase an item in click, it is going to multiply the cheese which effects the screen right after the purchase */
function mine() {
  cheese += 2
  clickMine()
  update()

}

/*NOTE this is the logic of what happens when my quantity is over 0 for the click upgrades, which leads to the price to increase by mulitplying the multplier and the quanity togther, and this function is invoked in the mine() is because it is effected by the number of clicks, dont want the auto to update in the mine() because you want to repeat the function in a time interval */
function clickMine() {
  for (let key in clickUpgrades) {
    let click = clickUpgrades[key]
    if (click.quantity > 0) {
      console.log(click.quantity * click.multiplier)
      cheese += (click.multiplier * click.quantity)
      console.log(cheese);

    }
  }
  buttons()
}

/*NOTE This is adding the cheese to the auto quanity, once you buy somehting the interval will pick it up and calc. 1. this interiates over the automaticUpgrades object. 2. the click is a variable that is acessing the key inside the object. 3. if the quantity of the item is greater than 0, then mulitply the mulpliter and the quantity and add it to the cheese. When you purchase an item, then your cheese is going to increase in the time interval by increasing the cheese by multiplyiong the mulitpler and the quantity together and add it to the current cheese number */
function autoMine() {
  for (let key in automaticUpgrades) {
    let click = automaticUpgrades[key]
    if (click.quantity > 0) {
      cheese += (click.multiplier * click.quantity)
      console.log(cheese);
    }
  }
  update()
  buttons()
}

/*NOTE the DOM effect for the numbers on the screen. 1. effects the cheese number when you click image with mine(). 2. the id calls back to the inventory section in pick axe section to change the number displayed when the number changes. This happens when you click the button with the onclick buyClickUpgrade('pickaxes'). 3. the id 'astronaunt' calls back to the inventory section in the astronaunt section in the inventory to chnage the number displayed when the number changes  */
function update() {
  document.getElementById("cheese").innerText = cheese
  document.getElementById("pickaxes").innerText = clickUpgrades.pickaxes.quantity
  document.getElementById("astronaunt").innerText = clickUpgrades.astronaunt.quantity
  document.getElementById("rovers").innerText = automaticUpgrades.rovers.quantity
  document.getElementById("astriod").innerText = automaticUpgrades.astriod.quantity
  document.getElementById("axeprice").innerText = clickUpgrades.pickaxes.price
  document.getElementById("astroprice").innerText = clickUpgrades.astronaunt.price
  document.getElementById("roverprice").innerText = automaticUpgrades.rovers.price
  document.getElementById("astriodprice").innerText = automaticUpgrades.astriod.price
  // document.getElementById("cps").innerHTML = automaticUpgrades.astriod.multiplier += automaticUpgrades.rovers.multiplier//
}

/* This updates the cheese per click in the stats section, this tests and sees if the quantity is 0(like after an item is purchased) then it updates the multiplier TCM */

let start = 2
function updateClick() {
  if (clickUpgrades.astronaunt.quantity > 0 || clickUpgrades.pickaxes.quantity > 0) {
    let click = start + (clickUpgrades.pickaxes.quantity * clickUpgrades.pickaxes.multiplier) + (clickUpgrades.astronaunt.quantity * clickUpgrades.astronaunt.multiplier)
    document.getElementById("tcm").innerText = click
  }
}

// This updates the cheese per three seconds and displays on the screen what the amount is //

function updateAuto() {
  if (automaticUpgrades.astriod.quantity > 0 || automaticUpgrades.rovers.quantity > 0) {
    let auto = (automaticUpgrades.rovers.quantity * automaticUpgrades.rovers.multiplier) + (automaticUpgrades.astriod.quantity * automaticUpgrades.astriod.multiplier)
    document.getElementById("cps").innerText = auto
  }
}


function buyPickaxe() {
  let click = clickUpgrades.pickaxes
  if (cheese >= click.price) {
    cheese -= click.price
    click.quantity++

  } else {
    alert("can not buy this item")
  }

  console.log(cheese)
  update()
}


/*NOTE every time I purchase an axe or astronuant the chesse is subtracted by the price and the quanity increases becuase you bought either a astronaunt or an axe. 1. the click is a variable that is getting the object clickUpgrades and then acessing the object inside of it by using the bracket notation. 2 then you create an if statment that says "if the cheese is greater than or equal to the price of the item you want to purchase?then you subtract the difference between the cheese and the price of the item, then since you bought an item, then you can increment the quantity. Also everytime you purchase an item, you want to increase the price of the item by 2 3. if you don't have enough cheese to buy the item, then alert the person that you cannot buy the item*/
function buyClickUpgrade(itemname) {
  let click = clickUpgrades[itemname]
  if (cheese >= click.price) {
    cheese -= click.price
    click.quantity++
    if (itemname == "pickaxes") {
      click.price += 2
    }
    if (itemname == "astronaunt") {
      click.price += 5
    }
    updateClick()
  } else {
    alert("can't buy this")
  }
  update()
  buttons()
}



/*NOTE this is the autoupgrades for the rovers, this is when you purchase the rover. 1. The click the variable that accesses the object which is automaticUpgrades, then accesses a key that is a string, so you need to use the bracket notation to acess the object. 2. then you create an if statement that states "if the cheese is greater than or equal to the price of the item you want to purchase? then the cheese needs to subtract from the price of the item because you are purchasing the item. 3. Since, you bought an item, the quantity of that item is going to increase by 1, so you increment the quantity of the item. 4. Since you bought the item, you want to increase the price becuase the demand of that product is icnreasing " */

function buyAutoUpgrade(itemname) {

  let click = automaticUpgrades[itemname]
  if (cheese >= click.price) {
    cheese -= click.price
    click.quantity++
    if (itemname == "rovers") {
      click.price += 3
    }
    if (itemname == "astriod") {
      click.price += 4
    }
    updateAuto()
  } else {
    alert("can't buy this")
  }
  update()
  buttons()
}


let autoInterval = setInterval(autoMine, 3000)
