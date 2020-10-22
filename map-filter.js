// const number= [ 2, 3, 4, 5];
// const output = [];
// for(let i= 0; i < number.length; i++){

//     const element = number[i];
//     const result = element * element;
//     output.push(result);

// }
// console.log(output)

// const square = element => element * element;
// const square = x => x * x;

const number= [ 2, 3, 4, 5];

// number.map( function(element, index){
//     console.log(element, index);
// // })

// const result = number.map (element => element * element);
// console.log( result)

const qube = number . map ( x =>  x * x * x);
console.log( qube)

const bigger = number.filter(x => x<5);
console.log(bigger)

const isThere = number.find( x => x<5);
console.log(isThere)