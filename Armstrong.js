
"user strict"

const arm=require("prompt-sync")
const prompt=arm();

let n=prompt("Enter a number");
let sum=0,rem;
let temp=n;
while(n>0){

    rem=n%10;
    sum=sum+(rem*rem*rem);
    n=parseInt(n/10);
}
if(sum==temp){
    console.log("It is an Armstrong Number")

}else{
    console.log("It is Not Armstrong Number")
}

