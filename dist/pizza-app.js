"use strict";
//Created our custom types for the Pizza Object
Object.defineProperty(exports, "__esModule", { value: true });
const menu = [
    { id: 1, name: "Margherita", price: 8 },
    { id: 2, name: "Pepperoni", price: 10 },
    { id: 3, name: "Hawaiian", price: 10 },
    { id: 4, name: "Veggie", price: 9 },
];
let cashInRegister = 100;
let nextOrderId = 1;
//Says orderQue implicitly has any type
//! Solving the issue
//*  We solved the issue by explicitly saying that orderQue will expect an array of Order as value
//Before: const orderQueue = [];
const orderQueue = [];
//Says pizzaObj implicitly has any
//!Solving the issue
//* We solved the issue in here by specifying that pizzaObj has the shape of Pizza
function addNewPizza(pizzaObj) {
    menu.push(pizzaObj);
}
//Says pizzaName implicitly has an
//! Solving the issue
//* We also specify the type of pizza name here to string
//from -> pizzaName
//to ->  pizzaName:string
function placeOrder(pizzaName) {
    const selectedPizza = menu.find((pizzaObj) => pizzaObj.name === pizzaName);
    //Says cashInRegister is a constant or readOnly property (Solved by switching from const to let)
    //=========================================================================
    //? Says selectedPizza.price is possibly undefined (It says it because when we search for an item in selected pizza we might get an undefined item which can cause errors)
    //!Solving this issue - Here we are using defensive coding
    //   cashInRegister += selectedPizza.price;
    if (!selectedPizza) {
        return;
    }
    cashInRegister += selectedPizza.price;
    //=========================================================================
    //Says nextOrderId  is a constant or readOnly property
    const newOrder = {
        id: nextOrderId++,
        pizza: selectedPizza,
        status: "ordered",
    };
    //Says orderQueue implicitly has any type property
    orderQueue.push(newOrder);
    return newOrder;
}
// ========================================================================
//? Says orderId implicitly has any type property (it says this because typescript doesnt know what exact type orderId is)
//! Solving the issue:
//* from : orderId
//* to : orderId:number
// We also need to change the completeOrder call into a number
// ========================================================================
function completeOrder(orderId) {
    //Says orderQueue implicitly has any type property
    const order = orderQueue.find((order) => order.id === orderId);
    // Defensive coding for possibly null value of status
    if (order)
        order.status = "completed";
    return order;
}
//* We will also change the adding of object here since the Type pizza has price instead of cost
addNewPizza({ id: 4, name: "Chicken Bacon Ranch", price: 12 });
addNewPizza({ id: 5, name: "BBQ Chicken", price: 12 });
addNewPizza({ id: 6, name: "Spicy Sausage", price: 11 });
placeOrder("Chicken Bacon Ranch");
completeOrder(1);
console.log("Menu:", menu);
console.log("Cash in register:", cashInRegister);
//Says orderQueue implicitly has any type property
console.log("Order queue:", orderQueue);
//# sourceMappingURL=pizza-app.js.map