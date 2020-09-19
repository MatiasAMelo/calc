let sum = (a,b)=>{
    console.log('a+b=',a+b) 
    return 
}
let minus = (a,b)=>{
    console.log('a-b=',a-b) 
    return 
}
let product = (a,b)=>{
     console.log('a.b=',a*b)   
     return
}
let divide = (a,b)=>{
    
     if ( b != 0) {
     console.log(' a/b = ', a/b)
     } else {
     console.log('Donkey XD'.red)
     }
 }
 let squad = (a,b)=>{

console.log('a.a=',a*a); 
 return
 }
 let cube = (a,b)=>{
console.log('a.a.a=',a*a*a)
return

 } 
 











module.exports = {
    sum,
    minus,
    product,
    divide,   
    squad,
    cube
}
