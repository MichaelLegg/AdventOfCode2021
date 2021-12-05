package main

import (
	"fmt"
	"os"
	"strconv"
	s "strings"
	"time"
)

func check(e error) {
	if e != nil {
		panic(e)
	}
}

func readInput(fileName string) []string {
	dat, err := os.ReadFile(fileName)
	check(err)

	stringInput := s.Split(string(dat), "\n")

	return stringInput
}

func MapStringToIntArray(vs []string, f func(string) []int) [][]int {
	vsm := make([][]int, len(vs))
	for i, v := range vs {
		vsm[i] = f(v)
	}
	return vsm
}

func StringToIntArray(v string) []int {
	vs := s.Split(v, "")

	vsm := make([]int, len(vs))
	for i, v := range vs {
		parsedInt, _ := strconv.ParseInt(v, 0, 64)
		vsm[i] = int(parsedInt)
	}

	return vsm
}

func FindMostCommonBits(input []string) []int {
	totalNumbers := len(input)
	numberLength := len(input[0])

	output := MapStringToIntArray(input, StringToIntArray)

	mostCommonBits := make([]int, numberLength)
	for i := 0; i < numberLength; i++ {
		rowVal := 0
		for j := 0; j < totalNumbers; j++ {
			v := output[j][i]
			switch v {
			case 0:
				rowVal = rowVal - 1
			case 1:
				rowVal = rowVal + 1
			}
		}

		if rowVal > 0 {
			mostCommonBits[i] = 1
		} else {
			mostCommonBits[i] = 0
		}

	}

	return mostCommonBits
}

func InvertBits(input []int) []int {
	output := make([]int, len(input))

	for i, v := range input {
		switch v {
		case 0:
			output[i] = 1
		case 1:
			output[i] = 0
		}
	}

	return output
}

func BitsToDecimal(input []int) int {
	asString := ""

	for _, v := range input {
		asString = fmt.Sprint(asString, v)
	}

	output, _ := strconv.ParseInt(asString, 2, 64)

	return int(output)
}

func EvalPartA() {
	input := readInput("./input.txt")

	gammaArray := FindMostCommonBits(input)
	epsilonArray := InvertBits(gammaArray)

	gamma := BitsToDecimal(gammaArray)
	epsilon := BitsToDecimal(epsilonArray)

	powerConsumption := gamma * epsilon

	fmt.Println("The power consumption is", powerConsumption)
}

func FilterByBits(input [][]int, bitPosition int, isOxygen bool) [][]int {
	filtered := make([][]int, len(input))

	// first work out most common bit for position
	mostCommonBit := 0
	for _, v := range input {
		switch v[bitPosition] {
		case 0:
			mostCommonBit = mostCommonBit - 1
		case 1:
			mostCommonBit = mostCommonBit + 1
		}
	}

	if mostCommonBit >= 0 {
		mostCommonBit = 1
	} else {
		mostCommonBit = 0
	}

	if !isOxygen {
		switch mostCommonBit {
		case 0:
			mostCommonBit = 1
		case 1:
			mostCommonBit = 0
		}
	}

	// then filter
	filteredCount := 0
	for _, v := range input {
		if v[bitPosition] == mostCommonBit {
			filtered[filteredCount] = v
			filteredCount++
		}
	}

	// and finally resize the arrays
	filteredOutput := make([][]int, filteredCount)

	for i := 0; i < filteredCount; i++ {
		filteredOutput[i] = filtered[i]
	}

	return filteredOutput
}

func EvalPartB() {
	input := MapStringToIntArray(readInput("./input.txt"), StringToIntArray)

	numberLength := len(input[0])

	oxyState := input

	for i := 0; i < numberLength && len(oxyState) > 1; i++ {
		oxyState = FilterByBits(oxyState, i, true)
	}

	co2State := input

	for i := 0; i < numberLength && len(co2State) > 1; i++ {
		co2State = FilterByBits(co2State, i, false)
	}

	oxyVal := BitsToDecimal(oxyState[0])
	co2Val := BitsToDecimal(co2State[0])
	lifeSupportRating := oxyVal * co2Val

	fmt.Println("Oxy", oxyVal, "Co2", co2Val, "Life Support Rating", lifeSupportRating)
}

type timeable func()

func execAndEvalTime(title string, fn timeable) {
	start := time.Now()

	fn()

	diff := time.Since(start).Seconds()

	fmt.Println(title, "took", diff, "seconds")
}

func main() {
	execAndEvalTime("Part A", EvalPartA)
	execAndEvalTime("Part B", EvalPartB)
}
