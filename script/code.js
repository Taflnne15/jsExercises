//definitions//
// 1. Variable: Containers where u can store data 
// 2. Value: a value is given to a variable, which can be manipulated
// 3. Data type: an attribute that tells the commputer to how interpret a value
// 4. Initialization: according to googles translation "the preparation of a computer or similar device for operation, in which diagnostic tests are run and the operating system is loaded."
// 5. Tell me the difference between let, var, and const: let variables are only available inside the block , var allows the variableto be used throughout the function and const means that the value cannot be ,manipulate.
// 6. What is a variable scope: according to google "in simple terms, scope of a variable is its lifetime in the program. "
// 7. When can you decide when to use a for or while, forEach and do while loop: when there are conditions or loops that u need to have within your WritableStreamDefaultWriter.
// 8. Define hoisting and variable scoping: according to google "n simple terms, scope of a variable is its lifetime in the program. " and if the variables are set within a specefic function such as setup or draw they may only be used in these functions.

//how to make your name appear in the console//
// function fullName(name){
//     console.log(name);
// } fullName('Taflynne Petersen')






// Q2
// let personalDetail = {
//     firstName: 'Taflynne',
//     lastName: 'Petersen',
//     age: '18',
//     subjects: 'Tourism,Life Sciences,Music, Math lit, Afrikaans, English,',
//     adress: '22 Jump Street',
//    city: 'Gotham City',
//    } 
//    console.log(personalDetail);


//Q3//
// function calculate(){
//     let number_1 = parseInt(document.querySelector('.input1').value);
//     let operator = document.querySelector('.operator').value;
//     let number_2 = parseInt(document.querySelector('.input2').value);
    
    
    // console.log(number_1);
    // console.log(operator);
    // console.log(number_2);
// let output = document.querySelector('.output').innerHTML = number_1


// if (operator === '+'){
//     document.querySelector('.output').innerHTML= number_1 + number_2;
// } else if (operator === '-'){
//     document.querySelector('.output').innerHTML= number_1 - number_2;
// }
   
//     else if (operator === '*'){
//         document.querySelector('.output').innerHTML= number_1 * number_2;
//     }
    
//     else if (operator === '/'){
//         document.querySelector('.output').innerHTML= number_1 / number_2 ;
//     }
    
// }

Q4
function reverseString(){
    let subject ='programming';

    if(subject ==  'programming'){
        console.log('gnimmargorp');
        
    }   
}
reverseString()

    
 //Q5
 let person = [{
name: 'Mish-Al',
dob: '2020-05-31'
}]


let todaysDate = new Date()
let thatDate = new Date(person[0].dob)
console.log(thatDate)
console.log(todaysDate)



console.log(thatDate.getDate())
console.log(todaysDate.getDate())
console.log(thatDate.getDate() - todaysDate.getDate() + " days left until his birthday")







 
    






    