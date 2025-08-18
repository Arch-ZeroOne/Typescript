//Created our custom types for the Pizza Object

type Pizza = {
  id?: number;
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

//* Added the order type here to specify that this should be in the type pizza

let cashInRegister = 100;
let nextOrderId = 1;
let pizzaId = 1;

const menu: Pizza[] = [
  { id: pizzaId++, name: "Margherita", price: 8 },
  { id: pizzaId++, name: "Pepperoni", price: 10 },
  { id: pizzaId++, name: "Hawaiian", price: 10 },
  { id: pizzaId++, name: "Veggie", price: 9 },
];

//Says orderQue implicitly has any type
//! Solving the issue
//*  We solved the issue by explicitly saying that orderQue will expect an array of Order as value
//Before: const orderQueue = [];
const orderQueue: Order[] = [];

//Says pizzaObj implicitly has any
//!Solving the issue
//* We solved the issue in here by specifying that pizzaObj has the shape of Pizza
function addNewPizza(pizzaObj: Pizza): void {
  if ("id" in pizzaObj) {
    menu.push(pizzaObj);
  } else {
    const newPizza = {
      id: pizzaId++,
      name: pizzaObj.name,
      price: pizzaObj.price,
    };
    menu.push(newPizza);
  }
}

//Says pizzaName implicitly has an
//! Solving the issue
//* We also specify the type of pizza name here to string
//from -> pizzaName
//to ->  pizzaName:string
function placeOrder(pizzaName: string): Order | undefined {
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
function completeOrder(orderId: number): Order | undefined {
  //Says orderQueue implicitly has any type property
  const order = orderQueue.find((order) => order.id === orderId);
  // Defensive coding for possibly null value of status
  if (order) order.status = "completed";
  return order;
}

//Type narrowing the details of getDetails
//Here we explicitly specify the possible cases
//This function may only return a pizza object or undefined
//! Be explicit as much as you can
function getPizzaDetail(identifier: string | number): Pizza | undefined {
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
addNewPizza({ id: pizzaId++, name: "Chicken Bacon Ranch", price: 12 });
addNewPizza({ id: pizzaId++, name: "BBQ Chicken", price: 12 });
addNewPizza({ id: pizzaId++, name: "Spicy Sausage", price: 11 });
addNewPizza({ id: pizzaId++, name: "Coconut Pizza", price: 100 });
addNewPizza({ id: pizzaId++, name: "Red Horse Pizza", price: 100 });
addNewPizza({ id: pizzaId++, name: "Jellian Pizza", price: 20 });

// placeOrder("Chicken Bacon Ranch");
// completeOrder(1);

console.log("Menu:", menu);
console.log("Cash in register:", cashInRegister);
//Says orderQueue implicitly has any type property
console.log("Order queue:", orderQueue);
