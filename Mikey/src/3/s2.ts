import Fs from "fs"

export default function Solution(): Number {
    let input = Fs.readFileSync(`src/3/data.txt`).toString().split('\r\n').map(x => x.split(''));  

    const getRating = (type: "oxygen" | "co2") => {
        let inputCopy = [...input];
        for(let i = 0; i < input[0].length; i++){
            let zeroCount = 0;
            let oneCount = 0;
            
            inputCopy.forEach(row => {
                if(row[i] === "0") zeroCount++;
                else oneCount ++;
            })

            if (type === "oxygen")
                inputCopy = inputCopy.filter(x => x[i] === (oneCount >= zeroCount ? "1" : "0"));
            else
                inputCopy = inputCopy.filter(x => x[i] === (zeroCount <= oneCount ? "0" : "1"));

            if (inputCopy.length === 1)
                break;
        }
        return parseInt(inputCopy[0].toString().replace(/,/g, ''), 2)
    }    
    return getRating("oxygen") * getRating("co2");  

}
