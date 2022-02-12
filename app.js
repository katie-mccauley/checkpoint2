let cheese = 0

let clickUpgrades = {
  pickaxes: {
    price: 2,
    quantity: 0,
    multiplier: 2
  },
  astronaunt: {
    price: 3,
    quantity: 0,
    multiplier: 3
  }
};

let automaticUpgrades = {
  rovers: {
    price: 2,
    quantity: 0,
    multiplier: 3
  },
  astriod: {
    price: 3,
    quantity: 0,
    multiplier: 4
  }
};
// this is every time I click the image the cheese increases and when I purchase an axe or astronaunt, the cheese is mulptpued by quanity + mulitplier.  //
function mine() {
  cheese += 2

  for (let key in clickUpgrades) {
    let click = clickUpgrades[key]
    if (click.quantity > 0) {
      cheese += (click.multiplier * click.quantity)
    }
  }
  update()

}

//This is adding the cheese to the auto quanity, once you buy somehting the interval will pick it up and calc//
function autoMine() {
  for (let key in automaticUpgrades) {
    let click = automaticUpgrades[key]
    if (click.quantity > 0) {
      cheese += (click.multiplier * click.quantity)
    }
  }
  update()
}

// the DOM effect for the numbers on the screen and //
function update() {
  document.getElementById("cheese").innerText = cheese
  document.getElementById("pickaxes").innerText = clickUpgrades.pickaxes.quantity
  document.getElementById("astronaunt").innerText = clickUpgrades.astronaunt.quantity
  document.getElementById("rovers").innerText = automaticUpgrades.rovers.quantity
  document.getElementById("astriod").innerText = automaticUpgrades.astriod.quantity
  document.getElementById("axeprice").innerText = clickUpgrades.pickaxes.price
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


/*every time I purchase an axe or astronuant the chesse is subtracted by the price and the quanity increases becuase you bought either a astronaunt or an axe. 1. the click is a variable that is getting the object clickUpgrades and then acessing the object inside of it by using the bracket notation. 2 then you create an if statment that says "if the cheese is greater than or equal to the price of the item you want to purchase?then you subtract the difference between the cheese and the price of the item, then since you bought an item, then you can increment the quantity. Also everytime you purchase an item, you want to increase the price of the item by 2 3. if you don't have enough cheese to buy the item, then alert the person that you cannot buy the item*/
function buyClickUpgrade(itemname) {
  let click = clickUpgrades[itemname]
  if (cheese >= click.price) {
    cheese -= click.price
    click.quantity++
    click.price += 2
  } else {
    alert("can't buy this")
  }
  update()
}



//this is the autoupgrades for the rovers, this is when you purchase the rover 


function buyAutoUpgrade(itemname) {

  let click = automaticUpgrades[itemname]
  if (cheese >= click.price) {
    cheese -= click.price
    click.quantity++
    click.price += 3
  } else {
    alert("can't buy this")
  }
  update()
}


let autoInterval = setInterval(autoMine, 3000)