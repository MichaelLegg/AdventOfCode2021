import Fs from "fs"

export default function Solution(): number{
    const input = Fs.readFileSync(`src/2/data.txt`).toString().split('\r\n');  
    let hp = 0;
    let depth = 0;

    input.forEach((row) => {
        const directionAndAmount = row.split(" ");
        switch(directionAndAmount[0]){
            case "forward":
                hp += parseInt(directionAndAmount[1]);
                break;
            case "down":
                depth += parseInt(directionAndAmount[1]);
                break;
            case "up":
                depth -= parseInt(directionAndAmount[1]);
                break;
        } 
    })
    return hp * depth;
}
