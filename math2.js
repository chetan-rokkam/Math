//Greatest common factor

function getGCD(a, b) {
  
    a = Math.abs(a);
    b = Math.abs(b);
    
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

console.log(getGCD(48, 18)); 

//////////////////////////////////////

//Highest common factor 

const getHCF = (a, b) => {
    a = Math.abs(a);
    b = Math.abs(b);
    while (b) {
        a %= b;
        [a, b] = [b, a]; 
    }
    return a;
};

console.log(getHCF(48, 18)); 

///////////////////////////////////////

//Armstrong number

function isArmstrong(num) {
    const numStr = num.toString();
    const n = numStr.length;
    let sum = 0;
    let temp = num;

    while (temp > 0) {
        let digit = temp % 10;
        sum += Math.pow(digit, n);
        temp = Math.floor(temp / 10);
    }
    return sum === num;
}
console.log(isArmstrong(153)); 

///////////////////////////////////////

//Print divisors

function printDivisors(n) {
    let divisors = [];
   
    for (let i = 1; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            divisors.push(i); 
            
            if (i !== n / i) {
                divisors.push(n / i);
            }
        }
    }
    console.log(divisors.sort((a, b) => a - b).join(", "));
}
printDivisors(); 



