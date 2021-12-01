import Fs from "fs"

export default function Solution(): number{
    const input = Fs.readFileSync(`src/1/data.txt`).toString().split('\r\n').map(x => Number(x));    
    let ans = input.filter((current, index, array) => array[index] > array[index-1]).length
    return ans
}
