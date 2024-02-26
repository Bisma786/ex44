// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.

function makeSandwich(...items:string[]): void{
    console.log("Sandwich Summary:");
    if(items.length===0){
        console.log("     -You ordered an empty sandwich.Please add some items.");
    }else{items.forEach((item,index)=>{
        console.log(`     ${index+1}. ${item}`);
    }
        )};
}
console.log("\n");

makeSandwich("Fish", "Onions","Ketchup","Cheese")
makeSandwich("Chicken", "Tomatoes","Mushrooms","Mayo")
makeSandwich("Beef", "cabbage","Ketchup","Cheese")