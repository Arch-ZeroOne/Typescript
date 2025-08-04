//Created our custom types for the Pizza Object

type Pizza = {
  id: number;
  name: string;
  price: number;
};

//Type for order
type Order = {
  id: number;
  pizza: Pizza;
  //We did this to implement Union and Literals concepts limiting the value of status to "order" or "completed" only
  status: "ordered" | "completed";
};

//Added the order type here to specify that this should be in the type pizza
const menu: Pizza[] = [
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
const orderQueue: Order[] = [];

//Says pizzaObj implicitly has any
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
  if (!selectedPizza) {
    return;
  }

  cashInRegister += selectedPizza.price;
  //=========================================================================

  //Says nextOrderId  is a constant or readOnly property

  const newOrder: Order = {
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
  // Defensive coding for possibly null value of status
  if (order) order.status = "completed";
  return order;
}

//TODO Currently learning type narrowing
//Type narrowing the details of getDetails
//Here we explicitly specify the possible cases
//! Be explicit as much as you can
function getDetails(identifier: string | number) {
  if (typeof identifier === "string") {
    return menu.find(
      (data) => data.name.toLowerCase() === identifier.toLowerCase()
    );

    //Once we copied the old code from the filtering of identifier that expects string it will expect a number , since typescript can predict the next type based on how we handle the case in filtering the identifier
  } else if (typeof identifier === "number") {
    return menu.find((data) => data.id === identifier);
  } else {
    throw new TypeError(
      "Parameter Identifier must be either a string or a number"
    );
  }
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
