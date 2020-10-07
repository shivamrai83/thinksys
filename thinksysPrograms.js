//Write a program that prints a multiplication table for numbers up to 12.
function table(n){
if(n==1){
return 1;
}
table(n-1);
for(let i=1;i<=10;i++){
console.log(`${n} * ${i} = ${n*i}`);
}

}
table(12);


//Write a program that asks the user for a number n and prints the sum of the numbers 1 to n
function sum(n){
    if(n==0){
    return 0;
    }
    return n+sum(n-1);
    }
    sum(15);

//Modify the previous program such that only multiples of three or five are considered in the sum, e.g. 3, 5, 6, 9, 10, 12, 15 for n=17
function fivth(n){
    if(n==3){
    return 3;
    }
    else if(n%3==0 ||n%5==0){
    return n+fivth(n-1);
    }
    else{
    return fivth(n-1);
    }
    
    }
    fivth(5);

//Write a program that prints all prime numbers. 
function primeNo(n){
    let c=0;
    if(n==2){
    return 2;
    }
    for(let i=2;i<n;i++){
    if(n%i==0){
    c++;
    break;
    }
    }
    if(c==0){
    console.log(n);
    }
    return primeNo(n-1);
    }
    primeNo(5);

//Write a function that returns the largest element in a array.
let arr=[1,2,3,4,5,6,7,8,8,66,4,4,3,3];

function maxi(ar){
return Math.max(...ar);
}
maxi(arr); //66

//Write function that reverses a array, preferably in place.
let arr=[1,2,3,4,5,6,7,8,8,66,4,4,3,3];

function reverse(ar){
    return ar.reverse();
    }
    reverse(arr);

//Write a function that checks whether an element occurs in a array.
let arr=[1,2,3,4,5,6,7,8,8,66,4,4,3,3];

function exist(ar,a){
    return (ar.indexOf(a)!=-1)?true:false;   
    }
    exist(arr,60) //false

//Write a function that returns the elements on odd positions in a array.
function oddPosition(ar){
    return ar.filter((val,index)=>index%2!=0);
}
let a=oddPosition(arr);

//Write three functions that compute the sum of the numbers in a array: using a for-loop, a while-loop and recursion.
function red(ar){
    return ar.reduce((acc,val,index)=>acc+=val,0);
   }
   red(arr); //124

//Write a function that concatenates two arrays. [a,b,c], [1,2,3] → [a,b,c,1,2,3]
let ar1=['a','b','c'];
let ar2=[1,2,3];
function conca(ar1,ar2){
return ar1.concat(ar2);
}
conca(ar1,ar2);

//Write a function that combines two arrays by alternatingly taking elements, e.g. [a,b,c], [1,2,3] → [a,1,b,2,c,3].
let ar1=['a','b','c',4,5];
let ar2=[1,2,3];
let result=[];
for (let i = 0; i < 3; i++) {
    result.push(ar1[i], ar2[i]);
}
result

//Write a function that merges two sorted arrays into a new sorted array. [1,4,6],[2,3,5] → [1,2,3,4,5,6]
let ar1=[1,4,6];
let ar2=[2,3,5];
function armerge(arr1,arr2){

    return [...arr1,...arr2].sort();
    }
    armerge(ar1,ar2);

    
// strArr=["1,2,5,6,7","2,5,7,8,15"];
function arrduo(arr){
    let ar1=arr[0].split(",");
    let ar2=arr[1].split(",");
    return String(ar1.filter((val)=>ar2.includes(val)));
    }
    arrduo(strArr);

//write a function that returns multiply mult(a)(b) and gives multiply of both

function mult(a){
    return function b(b){
    return a*b;    
}
}
mult(5)(4);

//arrow function 
let mult=a=>b=>a*b;

//write a function that return a promise after milliseconds passed
function hey(ms){
    return new Promise((resolve,reject)=>{
    setTimeout(() => resolve("lo"),ms);
    }).then((rej)=>console.log(rej));
}

//write a function that return a array that removes false values
let arr=[null,undefined,1,2,3,4,""];
function removeFalse(ar){
    return ar.filter((val=>val));
    }
    removeFalse(arr);

//write a program that capitalise the first letter of each word
let s="hi i am shivam rai";
function capitalise(st){
    let str =st.split(" ");
    let strin=" ";
    for(let i=0;i<str.length;i++){
        strin+=str[i].charAt(0).toUpperCase()+str[i].slice(1)+" ";
    }
    return strin;

}
capitalise(s);