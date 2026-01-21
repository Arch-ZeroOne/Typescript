export type Fish = {
  type: "fish";
  name: string;
  swimmingSpeed: number;
};

export type Bird = {
  type: "bird";
  name: string;
  flyingSpeed: number;
};

export type Animal = Fish | Bird;

const Eagle: Bird = {
  type: "bird",
  name: "Philippine Eagle",
  flyingSpeed: 100,
};

const Tuna: Fish = {
  type: "fish",
  name: "Yellow Fin Tuna",
  swimmingSpeed: 200,
};

function isBird(animal: Animal): animal is Bird {
  return animal.type === "bird";
}

function isFish(animal: Animal): animal is Fish {
  return animal.type === "fish";
}

//Narrowing using Predicates

function logAnimal(animal: Animal) {
  let speed: number = 0;

  //Getting the flying speed or swimming speed if animal is fish or bird
  if (isBird(animal)) {
    console.log(
      `Name:${animal.name} Type:${animal.type} Flying Speed:${animal.flyingSpeed}`,
    );
  }

  if (isFish(animal)) {
    console.log(
      `Name:${animal.name} Type:${animal.type} Swimming Speed:${animal.swimmingSpeed}`,
    );
  }
}
