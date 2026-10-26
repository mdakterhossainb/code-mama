//1. question
// console.log("Hello, "+input+"! Nice to meet you.")
//orrrrrrrrr
// console.log(`Hello, ${input}"! Nice to meet you."`);
//2 . question
//  const line=input.split(" ")
//     const a=parseInt(line[0])
//     const b=parseInt(line[1])
//     const remainder=a%b;
//     console.log(remainder)
//3 . question
// const line = input.split(" ");
// const a = parseInt(line[0]);
// const b = parseInt(line[1]);
// const Quotient = Math.floor(a / b);
// console.log(Quotient);
//4. question
// const line = input.split(" ");
// const a = parseInt(line[0]);
// const b = parseInt(line[1]);
// const Quotient = Math.floor(a / b);
// console.log(Quotient);
//5. question
// const line=input.split(" ")
// const originalprize=parseInt(line[0])
// const discountprize=parseInt(line[1])
// const discountamount=originalprize*discountprize/100
// const finalprize=originalprize-discountamount
// console.log(`Price: ${finalprize.toFixed(2)}`)
// 11.  module q. 1
// const reverse=parseInt(input.split('').reverse().join(''))
//     console.log(reverse)

// 11.  module q. 4
//     const reverse=input.split(" ").reverse().join("")
// if(reverse===input){
//     console.log(`${input} is a palindrome number`)
// }else{
//     console.log(`${input} is not a palindrome number`)

// }
//q 4 module 11
// let left = 0;
// let right = input.length - 1;
// while (left < right) {
//     if (input[left] !== input[right]) {
//         console.log(`${input} is not a palindrome number`);
//         return;
//     }
//     left++;
//     right--;
// }
// console.log(`${input} is a palindrome number`);
// q3 module 11
//   const num=parseInt(input)
//     let result=1
//     for(let i=2;i<=num;i++){
//         result *=i
//     }
//     console.log(result)

ans: 1  module 13
function main (input) {
    /**
     * Write JavaScript code from here
    */
    // ইনপুট থেকে ভূমি এবং উচ্চতা আলাদা করা
    const lines = input.trim().split(/\s+/);
    const base = parseInt(lines[0], 10);
    const height = parseInt(lines[1], 10);
    
    // ক্ষেত্রফল নির্ণয় (integer এ রূপান্তর করতে Math.floor ব্যবহার করা হয়েছে)
    const area = Math.floor((base * height) / 2);
    
    // ফলাফল প্রিন্ট
    console.log(area);
}

ans: 2  module 13
function main (input) {
  const values = input.trim().split(/\s+/);
    const celsius = parseFloat(values[0]); // প্রথম ফ্লোট সংখ্যাটি সেলসিয়াস হিসেবে নেওয়া
    
    const fahrenheit = (celsius * 9 / 5) + 32;
    console.log(`The temperature in Fahrenheit is: ${fahrenheit.toFixed(2)}`);
}

