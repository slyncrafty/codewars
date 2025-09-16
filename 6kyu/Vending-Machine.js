/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/586e6d4cb98de09e3800014f
/* ========== ========== ========== ========== ========== ==========*/
/*
Vending Machine

Description:
Introduction

A vending machine is a machine that dispenses items such as snacks and beverages to customers automatically, after the customer inserts currency or credit into the machine. The first modern vending machines were developed in England in the early 19th century and dispensed postcards. (Source Wikipedia)

Vending Machine
Task

In this simple Kata aimed at beginners your task is to recreate a vending machine. You will have to make a class called VendingMachine with at least one method called vend. On creation of a new instance of VendingMachine the items Array and Initial vending machine money is passed. The vend method should take two arguments 1. Selection code of the item (not case sensitive) and 2. Amount of money the user inserts into the machine.

An example call of the vend method

machine.vend("A01", 0.90)

where the selected item is A01 and the money given to the machine is 90p

An example of the items Array is below

var items = [{name:"Smarties", code:"A01", quantity:10, price:0.60},
             {name:"Caramac Bar", code:"A02", quantity:5, price:0.60},
             {name:"Dairy Milk", code:"A03", quantity:1, price:0.65},
             {name:"Freddo", code:"A04", quantity:1, price:0.25}];

Rules

1. If the money given to the machine is less than the item cost return "Not enough money!"

2. If the quantity is 0 for an item return "Item Name: Out of stock!". Where "Item Name" is the name of the item selected.

3. If an item is correctly selected return "Vending Item Name with 9.40 change.". Where "Item Name" is the name of the item and change if any given.

4. If an item is correctly selected and there is no change needed then return "Vending Item Name". Where "Item Name" is the name of the item.

5. If an invalid item is selected return "Invalid selection! : Money in vending machine = 11.20". Where 11.20 is the machines money float.

6. If a selection is successful then the quantity should be updated.

7. The vending machine never runs out of money for simplicity however you will need to keep track of the amount of money in the machine at anytime (this is not tested in any of the test cases)

8. Change is always given to 2 decimal places ie 7.00


*/



// Solution
function VendingMachine(items, money) {
    this.items = items.slice();
    this.money = money;
    this.codeToName = new Map(
      this.items.map(item => [String(item.code).toUpperCase(), item])
    );
  
};

VendingMachine.prototype.vend = function (selection, itemMoney){
    code = selection.toUpperCase();
    const item = this.codeToName.get(code);
    if(!item) return (`Invalid selection! : Money in vending machine = ${this.money.toFixed(2)}`)
    if(itemMoney < item.price) return ('Not enough money!');
    if(item.quantity <= 0) return (`${item.name}: Out of stock!`);
    
    item.quantity-=1;
    const change = (itemMoney - item.price).toFixed(2);
    this.money = (this.money + item.price);
    if(change > 0) return(`Vending ${item.name} with ${change} change.`);
    return `Vending ${item.name}`
  
};



// Test Codes
const test_items = [
        {name:"Smarties", code:"A01", quantity:10, price:0.60},
        {name:"Caramac Bar", code:"A02", quantity:5, price:0.60},
        {name:"Dairy Milk", code:"A03", quantity:1, price:0.65},
        {name:"Freddo", code:"A04", quantity:1, price:0.25},
        {name:"Crunchie", code:"A05", quantity:10, price:0.70},
        {name:"Starbar", code:"A06", quantity:1, price:0.99},
        {name:"Snickers", code:"A07", quantity:7, price:0.89},
        {name:"Yorkie", code:"A08", quantity:20, price:0.87},
        {name:"Toblerone", code:"A09", quantity:1, price:1.99},
        {name:"Flake", code:"A10", quantity:10, price:0.27},
        {name:"Ready Salted Crisps", code:"B01", quantity:7, price:0.55},
        {name:"Sweet Chilli Crisps", code:"B02", quantity:12, price:1.20},
        {name:"Smoky Barbecue Crisps", code:"B03", quantity:10, price:0.65},
        {name:"Salt and Vinegar Crisps",code:"B04", quantity:5, price:0.60},
        {name:"Roast Chicken Crisps", code:"B05", quantity:10, price:0.59},
        {name:"Cheese and Onion Crisps", code:"B06", quantity:0, price:0.67},
        {name:"Prawn Cocktail Crisps", code:"B07", quantity:10, price:0.77},
        {name:"Thai Sweet Chicken Crisps", code:"B08", quantity:10, price:0.88},
        {name:"Flamed Steak Crisps", code:"B09", quantity:10, price:0.43},
        {name:"Coke", code:"C02", quantity:50, price:0.75},
        {name:"Diet Coke", code:"C03", quantity:50, price:0.75},
        {name:"Coke Zero", code:"C04", quantity:0, price:0.75},
        {name:"Dandelion and Burdock", code:"C05", quantity:10, price:0.68},
        {name:"Cream Soda", code:"C06", quantity:5, price:0.69},
        {name:"Irn Bru", code:"C07", quantity:3, price:0.79},
        {name:"Cherry Coke", code:"C08", quantity:1, price:0.75},
        {name:"Orange Soda", code:"C09", quantity:10, price:0.79},
        {name:"Parma Violets", code:"D01", quantity:10, price:1.27},
        {name:"Refresher Chews", code:"D02", quantity:10, price:4.27},
        {name:"Mini Love Hearts", code:"D03", quantity:10, price:2.02},
        {name:"Popping Candy", code:"D04", quantity:10, price:1.01},
        {name:"Drumstick Lollies", code:"D05", quantity:10, price:5.12},
        {name:"Double Candy Lollies", code:"D06", quantity:10, price:10.00},
        {name:"Wham Bars", code:"D07", quantity:10, price:50.00},
        {name:"Double Dip", code:"D08", quantity:10, price:1.04},
        {name:"Candy Sticks", code:"D09", quantity:10, price:2.14},
        {name:"Jelly Cubes", code:"D10", quantity:10, price:1.18}
    ];

const machine = new VendingMachine(test_items, 10.00);

const assertEquals = (actual, expected, msg) => {
    if(actual === expected) console.log('Correct!');
    else console.error(`Incorrect! ${msg}`);
}

assertEquals(machine.vend("A01",0.60), "Vending Smarties", "Should return 'Vending Smarties'");
assertEquals(machine.vend("A01",10.0), "Vending Smarties with 9.40 change.","Should return 'Vending Smarties with 9.40 change.'");
assertEquals(machine.vend("Z01",0.41), "Invalid selection! : Money in vending machine = 11.20", "Should return 'Invalid selection! : Money in vending machine = 11.20'");
assertEquals(machine.vend("A02",0.40), "Not enough money!", "Should return 'Not enough money!'");
assertEquals(machine.vend("B06",4.60), "Cheese and Onion Crisps: Out of stock!", "Should return 'Cheese and Onion Crisps: Out of stock!'");