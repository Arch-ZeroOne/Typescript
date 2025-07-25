//Created our custom types for the Pizza Object

type Pizza = {
  name: string;
  price: number;
};

const menu = [
  { name: "Margherita", price: 8 },
  { name: "Pepperoni", price: 10 },
  { name: "Hawaiian", price: 10 },
  { name: "Veggie", price: 9 },
];

let cashInRegister = 100;
let nextOrderId = 1;
//Says orderQue implicitly has any type
const orderQueue = [];

//Says pizzaObj implicitly has an
//!Solving the issue
//* We solved the issue in here by specifying that pizzaObj has the shape of Pizza
function addNewPizza(pizzaObj: Pizza) {
  menu.push(pizzaObj);
}

//Says pizzaName implicitly has an
//! Solving the issue
//* We also specify the type of pizza name here to string
//from -> pizzaName
//to ->  pizzaName:string
function placeOrder(pizzaName: string) {
  const selectedPizza = menu.find((pizzaObj) => pizzaObj.name === pizzaName);
  //Says cashInRegister is a constant or readOnly property (Solved by switching from const to let)

  //=========================================================================
  //? Says selectedPizza.price is possibly undefined (It says it because when we search for an item in selected pizza we might get an undefined item which can cause errors)
  //!Solving this issue - Here we are using defensive coding
  //   cashInRegister += selectedPizza.price;
  if (selectedPizza) cashInRegister += selectedPizza.price;
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
function completeOrder(orderId: number) {
  //Says orderQueue implicitly has any type property
  const order = orderQueue.find((order) => order.id === orderId);
  order.status = "completed";
  return order;
}

//* We will also change the adding of object here since the Type pizza has price instead of cost
addNewPizza({ name: "Chicken Bacon Ranch", price: 12 });
addNewPizza({ name: "BBQ Chicken", price: 12 });
addNewPizza({ name: "Spicy Sausage", price: 11 });

placeOrder("Chicken Bacon Ranch");
completeOrder(1);

console.log("Menu:", menu);
console.log("Cash in register:", cashInRegister);
//Says orderQueue implicitly has any type property
console.log("Order queue:", orderQueue);
