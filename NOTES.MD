# Fixing Basic Errors in TS

## Constant or Readonly property error

**From**

<pre>
<code> 
const cashInRegister = 100;
</code>
 </pre>

**To**

<pre>
<code> 
let cashInRegister = 100;
</code>
 </pre>

## Defensive coding to rprevent undefined error

**From**

<pre>
<code> 
 cashInRegister += selectedPizza.price;
</code>
 </pre>

**To**

<pre>
<code> 
  if (selectedPizza) cashInRegister += selectedPizza.price;
</code>
 </pre>

**Assigning the type manually in TS (Obligatory Types)**

<pre>
<code> 
     let myName: string = "Bob";
     let numberOfWheels: number = 4
     let isStudent: boolean = false

</code>
 </pre>

**Adding Custom Types In Typescript**

<pre>
<code>
type Person = {
  name: string;
  age: number;
  isStudent: boolean;
};

let person: Person = {
  name: "Joe",
  age: 42,
  isStudent: true,
};

</code>
</pre>
