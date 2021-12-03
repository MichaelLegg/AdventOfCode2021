import Fs from "fs"

export default function Solution(): Number {
    const input = Fs.readFileSync(`src/3/data.txt`).toString().split('\r\n').map(x => x.split(''));  
    let gamma = "";
    let epsilon ="";

    for(let i = 0; i < input[0].length; i++){
        let zeroCount = 0;
        let oneCount = 0;

        input.forEach(row => {
            if(row[i] === "0") zeroCount++
            else oneCount ++;
        })
        
        gamma += zeroCount > oneCount ? "0" : "1";
        epsilon += zeroCount < oneCount ? "0" : "1";
    }

    return parseInt(gamma, 2) * parseInt(epsilon, 2)    
}
