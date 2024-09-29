
// 1. Function to return an array of doubled numbers using map method()

const arrayNumbers = [2,4,6,8,];

 const doubleNum = () => {
   result = arrayNumbers.map( (numbers) => {
      return numbers*2})
       console.log(result)
   } 

   doubleNum()
   
   
   //The map method works like a loop or forEach method, it allows certain action to be performed on items of an array by mapping through the array.

   
//2.  Function to store username in localStorage and retrieves it to be printed on console


const results = () =>{

   localStorage.setItem("userName",JSON.stringify({firstName:"Opera",lastName:"faboyinde"}));
   
   let retriveData = JSON.parse(localStorage.getItem("userName"));
   
  return  console.log(`${retriveData.firstName} ${retriveData.lastName}`)

}

results()

   // Web API is used to store and retrieve data (in object format) and it works in 2ways depending on storage capacity/period.
   //local storage allows data to be saved on the local storage of the web browser, and such data is retained reagrdelss of browsing session.
   //Session storage allows data to be saved and used only within the session. Data saved to session storage expires after the session end  


//3. Create a car class with properties as maker, model, color and year

class Car {
   constructor(maker,model,color,year){
     this.maker = maker,
      this.model = model,
      this.color = color,
      this.year = year

   }

   properties(){
       return console.log(`This car is a ${this.maker} ${this.model} in color ${this.color} and produced in the year ${this.year} `)
   }
}


const car1 = new Car("BMW","X8","black","2020")
console.log(car1)

const car2 = new Car("Mercedes Benz","G-Wagon","black","2022")
console.log(car2.properties())

const car3 = new Car("Lexus","LX450","black","2023")
console.log(car3.properties())

const car4 = new Car("Toyota","Camry","black","2024")
console.log(car4.properties())


//4.  Function to increase salary by 10% using map method

//original array containing, original info 
const employees = [
   { name :"Fatai", salary : 30000},

   {name :"Tunde",salary : 40000},

   {name : "Fred",salary : 50000},

  {name : "John",salary : 60000},

   {name : "Ahmed",salary : 70000},
]


//10% interest function on salary for each employee
   const interestUpdate=(employees)=>{
      
     return  employees.map(employee=> {

         return {
            name:employee.name,
            salary: employee.salary+employee.salary*0.10
         }
      })}
 
   const newArray= interestUpdate(employees);
   console.log(newArray)

//5. Function using forEach to print customer name

//original array of customers

customers= [
   {customer:"Opera", 
      items: ["laptop","mouse","keyboard"]
   },

   {customer:"OG",
      items: ["monitor","headphones"] 
   },

   {customer:"Rodiyah",
      items: ["phone","charger","case"] 
   },

   {customer:"Chapo",
      items: ["tablet"] 
   }
]


   // forEach function to loop through each customers and customer 
const newCustArray =(customers )=>{ 
   customers.forEach(customer => {
     console.log (`customer:${customer.customer}`)  
     console.log (`items:${customer.items}`)  
      
   });

}
 const answer = newCustArray(customers)
 console.log(answer)

// DNAMIC CONTENT GENERATION

 //to add new input 
document.getElementById("addIn").addEventListener("click", function(){
   const newInput = document.createElement("input");
   newInput.type= "text";
   document.getElementById("inputCon").appendChild(newInput);
});

//submit form

document.getElementById("submit").addEventListener("click",function(){
   const inputs =document.querySelectorAll("#inputCon input");
   let newRow = document.createElement("tr");
   let newCell = document.createElement("td");
   let values = [];

   inputFields.forEach(input=>{
      values.push(input.value);
   });

   newCell.textContent = values.join(",");
   newRow.appendChild(newCell);
   document.getElementById("tableBody").appendChild(newRow);
});


 //c. Random quote

 const quotes =[
   "Everything passes.",
   "The key to have a better better mind,the door is to experience life in itself.",
   "The joy of motherhood."
 ]

 //generate and didsplay random quote

 document.getElementById("generate_quote").addEventListener("click", function(){
   const randomIndex = Math.floor(Math.random()*quotes.length);
   const randomQuote = quotes[randomIndex];
   document.getElementById("quote_display").textContent=randomQuote;
 });
   

 




 






// forEach function to print each customer's name and items they ordered
