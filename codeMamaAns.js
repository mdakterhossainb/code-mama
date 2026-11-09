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
ans: 1  module 14
function main (input) {
   const [height, weight] = input.trim().split(" ").map(Number);
  const BMI = weight / (height * height);
console.log("BMI: " + BMI.toFixed(2))
  if (BMI < 18.5) {
    console.log("Underweight");
  } else if (BMI >= 18.5 && BMI < 25.0) {
    console.log("Normal weight");
  } else if (BMI >= 25.0 && BMI < 30.0) {
    console.log("Overweight");
  } else {
    console.log("Obese");
  }
}


ans: 2  module 14
function main (input) {
      const n = parseInt(input.trim());
  function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 == 0 || num % 3 == 0) return false;
    for (let i = 5; i * i <= num; i = i + 6) {
      if (num % i == 0 || num % (i + 2) == 0) return false;
    }
    return true;
  }

  if (isPrime(n)) {
    console.log(n + " is a prime number.");
  } else {
    console.log(n + " is not a prime number.");
  }
}



ans: 1  module 16
function main (input) {
    let result = "";
    
    for (let i = 0; i < input.length; i++) {
        // ইনডেক্স ২, ৫, ৮... অর্থাৎ প্রতি ৩য় ক্যারেক্টারের ক্ষেত্রে (0-based indexing এ 2, 5, 8...)
        if ((i + 1) % 3 === 0) {
            result += input[i].toUpperCase();
        } else {
            result += input[i];
        }
    }
    
    console.log(result);
}






ans: 2  module 16
function main (input) {
    let set = new Set();
    let left = 0;
    let maxLength = 0;
    
    for (let right = 0; right < input.length; right++) {
        // যদি ক্যারেক্টারটি ইতিমধ্যে সেটে থাকে, তবে ডুপ্লিকেট সরানোর জন্য 'left' পয়েন্টার ডানে সরাব
        while (set.has(input[right])) {
            set.delete(input[left]);
            left++;
        }
        
        set.add(input[right]);
        maxLength = Math.max(maxLength, right - left + 1);
    }
    
    console.log(maxLength);
}










ans: 1  module 17
function main(input) {
    const lines = input.trim().split(/\r?\n/);
    if (lines.length < 2) return;
    
    const N = parseInt(lines[0].trim());
    const A = lines[1].trim().split(/\s+/).map(Number);
    
    let count = 0;

    // O(N^3) পদ্ধতি যেহেতু N <= 10^3, সরাসরি লুপ চালিয়েও করা সম্ভব, 
    // তবে O(N^2) লজিক ব্যবহার করলে আরও দ্রুত কাজ করবে।
    for (let i = 0; i < N; i++) {
        for (let j = i + 1; j < N; j++) {
            for (let k = j + 1; k < N; k++) {
                if (A[i] + A[j] + A[k] === 0) {
                    count++;
                }
            }
        }
    }

    console.log(count);
}



ans: 2  module 17
function main (input) {
    let s = input.trim();
    let result = "";
    
    for (let i = 0; i < s.length; i++) {
        // যদি ক্যারেক্টারটি ইতিমধ্যেই result-এ না থাকে, তবে যোগ করব
        if (result.indexOf(s[i]) === -1) {
            result += s[i];
        }
    }
    
    console.log(result);
}




