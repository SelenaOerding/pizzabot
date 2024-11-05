// Modeling the menu
const vegetarian = "Vegetarian Pizza";
const hawaiian = "Hawaiian Pizza";
const pepperoni = "Pepperoni Pizza";
const pizzaPrice = 80;

// Greeting the customer
alert(
  `Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian}, and ${pepperoni}.`
);

// Ask user which pizza
const orderName = promt("Enter the name of the pizza you want to order today:");

// Check if pizza is on the menu
function checkOrderName(orderName) {
  if (
    orderName === vegetarian ||
    orderName === hawaiian ||
    orderName === pepperoni
  ) {
    return true;
  } else {
    return false;
  }
}

// How many pizzas?
if (!checkOrderName(orderName)) {
  alert("Sorry, that pizza is not on our menu!");
} else {
  const orderQuantity = prompt(`How many of ${orderName} do you want?`);
}

// Calculate how many pizzas.
function totalCost(orderQuantity) {
  return orderQuantity * pizzaPrice;
}

const cost = totalCost(orderQuantity);

// Calculate cooking time.
function cookingTime(orderQuantity) {
  if (orderQuantity >= 6) {
    return 20;
  } else if (orderQuantity >= 3) {
    return 15;
  } else {
    return 10;
  }
}

const time = cookingTime(orderQuantity);

// Final message
alert(
  `Great, I'll get started on your ${orderName} right away, it will cost ${cost} kr. The pizzas will take ${time} minutes. `
);
