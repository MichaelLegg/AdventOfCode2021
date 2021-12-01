// import Fs from "fs"

// export default function Solution(): number{
//     let input = new Map<number, number>();
//     Fs.readFileSync(`src/1/data.txt`).toString().split('\r\n').filter(x => x.length > 0).forEach(x => input.set(Number(x), Number(x)))
//     var ans = 0;
//     input.forEach((val) => {
//         let foundValue = input.get(2020-val) || 0;
//         if(val + foundValue === 2020)
//             ans = val * foundValue;
//     })
//     return ans 
// }
