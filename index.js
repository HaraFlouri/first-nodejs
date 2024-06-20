const PizzaShop = require("./pizza-shop.js")

const pizzaShop = new PizzaShop()

pizzaShop.on("order", (size, topping) => {
   console.log(`Order received! Baking a ${size} pizza with ${topping}`);
});

pizzaShop.order("large", "mushroom")
pizzaShop.displayOrderNumber()


// const EventEmitter = require("events");

// const emitter = new EventEmitter();
// //In that eample we register two listeners. We can register as many as we want
// emitter.on("order-pizza", (size, topping) => {
//   console.log(`Order received! Baking a ${size} pizza with ${topping}`);
// });

// emitter.on("order-pizza", (size) => {
//     if (size === "large") {
//         console.log(`Serving drinks`);
//     }
//   });
  

// emitter.emit("order-pizza", "large", "mushroom");
