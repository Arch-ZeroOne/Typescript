var menu = [
    { name: "Margherita", price: 8 },
    { name: "Pepperoni", price: 10 },
    { name: "Hawaiian", price: 10 },
    { name: "Veggie", price: 9 },
];
var cashInRegister = 100;
var nextOrderId = 1;
//Says orderQue implicitly has any type
var orderQueue = [];
//Says pizzaObj implicitly has an
function addNewPizza(pizzaObj) {
    menu.push(pizzaObj);
}
//Says pizzaName implicitly has an
function placeOrder(pizzaName) {
    var selectedPizza = menu.find(function (pizzaObj) { return pizzaObj.name === pizzaName; });
    //Says cashInRegister is a constant or readOnly property (Solved by switching from const to let)
    //=========================================================================
    //? Says selectedPizza.price is possibly undefined (It says it because when we search for an item in selected pizza we might get an undefined item which can cause errors)
    //!Solving this issue - Here we are using defensive coding
    //   cashInRegister += selectedPizza.price;
    if (selectedPizza)
        cashInRegister += selectedPizza.price;
    //=========================================================================
    //Says nextOrderId  is a constant or readOnly property
    var newOrder = {
        id: nextOrderId++,
        pizza: selectedPizza,
        status: "ordered",
    };
    //Says orderQueue implicitly has any type property
    orderQueue.push(newOrder);
    return newOrder;
}
//? Says orderId implicitly has any type property (it says this because typescript doesnt know what exact type orderId is)
//! Solving the issue:
// from : orderId
// to : orderId:number
// We also need to change the completeOrder call into a number
function completeOrder(orderId) {
    //Says orderQueue implicitly has any type property
    var order = orderQueue.find(function (order) { return order.id === orderId; });
    order.status = "completed";
    return order;
}
addNewPizza({ name: "Chicken Bacon Ranch", cost: 12 });
addNewPizza({ name: "BBQ Chicken", cost: 12 });
addNewPizza({ name: "Spicy Sausage", cost: 11 });
placeOrder("Chicken Bacon Ranch");
completeOrder(1);
console.log("Menu:", menu);
console.log("Cash in register:", cashInRegister);
//Says orderQueue implicitly has any type property
console.log("Order queue:", orderQueue);
