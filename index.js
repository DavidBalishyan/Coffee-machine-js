const root = document.getElementById("root");
const Latte = document.getElementById("Latte");
const black = document.getElementById("black");
const espresso = document.getElementById("espresso");
const Americano = document.getElementById("Americano");
const Cappuccino = document.getElementById("Cappuccino");
let sugar = prompt("How much sugar do you want(0 to 5)?")

  
function addSugar(count) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(count + " sugar added");
    }, parseInt(Math.random() * 500 * count));
  });
}

function addWater(count) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Water added");
    }, parseInt(Math.random() * 500 * count));
  });
}

function addcoffee(count) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("coffee added");
    }, parseInt(Math.random() * 500 * count));
  });
}

function addMilk(count) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Milk added");
    }, parseInt(Math.random() * 500 * count))
  })
}

function fire() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("on fire...");
    }, parseInt(Math.random() * 3000));
  });
}

function ready() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Your coffee is READY!");
    },parseInt(Math.random() * 3000) );
  });
}

async function makeNoSugarCoffee(count) {
  let d1 = await addMilk(count)
  root.innerHTML = d1
  let d2 = await addWater(count);
  root.innerHTML = d2
  let d3 = await addcoffee(count);
  root.innerHTML = d3
  let d4 = await fire();
  root.innerHTML = d4
  let d5 = await ready()
  root.innerHTML = d5
}



async function makeCoffee(count) {
  let d1 = await addSugar(sugar);
  root.innerHTML = d1
  let d2 = await addWater(count);
  root.innerHTML = d2
  let d3 = await addcoffee(count);
  root.innerHTML = d3
  let d4 = await fire();
  root.innerHTML = d4
  let d5 = await ready()
  root.innerHTML = d5
}

async function makeMilkCoffee(count) {  
  let d1 = await addSugar(sugar);
  root.innerHTML = d1
  let d2 = await addWater(count);
  root.innerHTML = d2
  let d3 = await addcoffee(count);
  root.innerHTML = d3
  let d4 = await addMilk(count);
  root.innerHTML = d4
  let d5 = await fire();
  root.innerHTML = d5
  let d6 = await ready()
  root.innerHTML = d6
}

Latte.addEventListener("click", () => {
    if (sugar == 0) {
      makeNoSugarCoffee(1)
    }else{
      makeMilkCoffee(1);
    }
})

black.addEventListener("click", () => {
    if (sugar == 0) {
      makeNoSugarCoffee(1)
    }else{
      makeCoffee(1)
    }
})

espresso.addEventListener("click", () => {
  if (sugar == 0) {
    makeNoSugarCoffee(1)
  }else{
    makeCoffee(1)
  }
})

Americano.addEventListener("click", () => {
  if (sugar == 0) {
    makeNoSugarCoffee(1)
  }else{
    makeMilkCoffee(1)
  }
})

Cappuccino.addEventListener("click", () => {
  if (sugar == 0) {
    makeNoSugarCoffee(1)
  }else{
    makeMilkCoffee(1)
  }
})