$(document).ready(function(){

  var inputs = [""];  //Store the user input
  var totalString; //to turn inputs into a string
  var a = document.getElementById("display"); //display section
  var operation = ["+", "-", "*", "/"]; //ALL operations
  var operation2 = ["+", "*", "/"]; //operations, WITHOUT the negative.
  var dec = ["."];
  
  //regular expression to find any pattern with a number following a decimal
  var regex = /.\d/g;
  //regular expression for all operators
  var regOp = /[\+\-\*\/]/g;
  
  //Buttons!
 $("input").on("click", function(){
   //equals button
   if(this.id === "equals"){
     totalString = inputs.join(""); //turn inputs into a string
     a.value = eval(totalString); //evaluate string and update display
    // ("input").on("click", function(){ }) 
   //clear button
   } else if(this.id ==="clear"){
     inputs=[""]; //need this to actually reset the value
     a.value = inputs;
   } else{ //following FIVE if/else statements under this umbrella
        //#1 can't have 2 decimals BEFORE an operator
        if(this.value ==="." && totalString.match(regex) && totalString.match(regOp)===null){
          a.value = reset;
        }
        //#2 don't allow operator OR decimal to follow an operator
        else if(dec.includes(inputs[inputs.length-1])===true && (this.value === "." || this.value === "+" || this.value === "-" || this.value === "*" || this.value === "/")){ 
          a.value = reset;}
       //#3 don't allow 2 operators in a row. Decimals CAN follow operators
        else if(operation.includes(inputs[inputs.length-1])===true && (this.value === "+" || this.value === "-" || this.value === "*" || this.value === "/")){
         a.value = reset;}
        //#4 don't start equation with +, *, or /... minus and decimal ok!
        else if(inputs.length===1 && operation2.includes(this.value)){
          a.value = reset;}
        //#5 for numbers and operators correctly entered by user
        else{
          inputs.push(this.value);
          totalString = inputs.join(""); 
          a.value = totalString;}
 };
 });
  });
