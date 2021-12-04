// Day 3

import * as fs from 'fs';

let print = console.log

const data = fs.readFileSync('./d3/input.txt', 'utf-8')
  .split("\n");

function p1(data) {
  let data_width = data[0].length
  let gamma = 0;
  let epsilon = 0;

  for (let col = 0; col < data_width; col++) {
    let num_0 = 0
    let num_1 = 0

    // Build gamma from MSB to LSB, so shift left each bit
    gamma *= 2 

    // Count number of 0s in column
    for (let line of data) {
      num_0 += +(line[col] == 0);
    }
    // Number of 1s = number of columns - number of 0s
    num_1 = data.length - num_0

    // Gamma is 1 if num(1) > num(0) else 0
    let gamma_bit = +(num_0 > num_1);

    // Set LSB to this columns gamme bit
    gamma += gamma_bit;
  }

  // epsilon = not gamma
  epsilon = ~gamma & ((1 << data_width)-1)

  print("gamma: %d", gamma);
  print("epsilon: %d", epsilon);

  return gamma * epsilon
}

function p2(data) {
  let data_width = data[0].length

  let rating_o2  = 0;
  let rating_co2 = 0;

  function analyse(data, filter_01) {
    let remain_data = data

    let col = 0;
    while (remain_data.length > 1) {

      let num_0 = 0
      let num_1 = 0

      // Count number of 0s in column
      for (let line of remain_data) {
        num_0 += +(line[col] == 0);
      }
      // Number of 1s = number of columns - number of 0s
      num_1 = remain_data.length - num_0

      // Gamma is 1 if num(1) > num(0) else 0
      let most_common_bit = 0;
      if (num_0 == num_1) {
        most_common_bit = filter_01
      } else {
        if (filter_01 == 1) {
          most_common_bit = +(num_1 > num_0);
        } else {
          most_common_bit = +(num_0 > num_1);
        }
      }

      // Keep only data with bit[col] = most common bit
      remain_data = remain_data.filter((line) => line[col] == most_common_bit)
      
      // Move onto next column
      col += 1
    }
    return parseInt(remain_data[0], 2)
  }

  // o2 rating is the last remaining element
  rating_o2 = analyse(data, 1);
  rating_co2 = analyse(data, 0);

  print("O2  rating: %d", rating_o2);
  print("CO2 rating: %d", rating_co2);
  print(rating_co2);

  return rating_o2 * rating_co2;
}

print(p1(data))
print(p2(data))
