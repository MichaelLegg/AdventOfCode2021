
let print = console.log

import * as fs from 'fs';

const data = fs.readFileSync('./d2/input.txt', 'utf-8')
  .split("\n");

function p1(data) {
  let pos_h = 0;
  let pos_d = 0;

  for (let line of data) {
    let line_parts = line.split(' ');
    let cmd = line_parts[0]
    let val = Number(line_parts[1])

    switch (cmd) {
      case 'forward': 
        pos_h += val;
        break;
      case 'down': 
        pos_d += val;
        break;
      case 'up': 
        pos_d -= val;
        break;
    }
  }

  return pos_h * pos_d
}

function p2(data) {
  let pos_h = 0;
  let pos_d = 0;
  let aim = 0;

  for (let line of data) {
    let line_parts = line.split(' ');
    let cmd = line_parts[0]
    let val = Number(line_parts[1])

    switch (cmd) {
      case 'forward': 
        pos_h += val;
        pos_d += aim * val;
        break;
      case 'down': 
        aim += val;
        break;
      case 'up': 
        aim -= val;
        break;
    }
  }

  return pos_h * pos_d
}


print(p1(data))
print(p2(data))
