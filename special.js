
"user strict"

const arm=require("prompt-sync")
const prompt=arm();

let n=prompt("Enter a number");
let sum=0,rem;
let temp=n;
while(n>0){

    rem=n%10;
    sum=sum+(factorial(rem));
    n=parseInt(n/10);
}
if(sum==temp){
    console.log("It is a special Number")

}else{
    console.log("It is not a special Number")
}

function factorial(n){
    let fact=1;
    for(let i=1;i<=n;i++){
        fact=fact*i;
    }
    return fact;
    
}
