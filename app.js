let cheese = 0

let clickUpgrades = {
  pickaxes: {
    price: 1,
    quantity: 0,
    multiplier: 1
  },
  astronaunt: {
    price: 1,
    quantity: 0,
    multiplier: 1
  }
};

let automaticUpgrades = {
  rovers: {
    price: 1,
    quantity: 0,
    multiplier: 1
  },
  astriod: {
    price: 1,
    quantity: 0,
    multiplier: 1
  }
};
//this is every time I click the image the cheese increases and when I purchase an axe, the cheese is mulptpued by quanity + mulitplier//
function mine() {
  cheese += 1

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

// the DOM effect //
function update() {
  document.getElementById("cheese").innerText = cheese
  document.getElementById("pickaxes").innerText = clickUpgrades.pickaxes.quantity
  document.getElementById("astronaunt").innerText = clickUpgrades.astronaunt.quantity
  document.getElementById("rovers").innerText = automaticUpgrades.rovers.quantity
  document.getElementById("astriod").innerText = automaticUpgrades.astriod.quantity
}

//every time I purchase an axe the chesse is subtracted by the price and the quanity increases 
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