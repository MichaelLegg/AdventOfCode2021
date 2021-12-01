// // this is the worst
// export default function Solution(input: number[]){
//     input = input.filter(x=> x < 2020).sort((a, b) => a - b);
//     for(let i = 0; i < input.length; i++){
//         for(let j = input.length-1; j > 0; j--){
//             for(let q = 0; q < input.length; q++){
//                 if(input[i] + input[j] + input[q] === 2020){
//                     return input[i] * input[j] * input[q];
//                 }
//             }
//         }
//     }
// }
