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

func readInput(fileName string) []int {
	dat, err := os.ReadFile(fileName)
	check(err)

	stringInput := s.Split(s.Replace(string(dat), " ", "", -1), "\n")
	intOutput := make([]int, len(stringInput))
	for i, v := range stringInput {
		pi, _ := strconv.ParseInt(v, 0, 64)
		intOutput[i] = int(pi)
	}

	return intOutput
}

func countLarger(input []int) int {
	count := 0

	for i, v := range input {
		if i == 0 {
			continue
		}

		vLast := input[i-1]

		if vLast < v {
			count = count + 1
		}
	}

	return count
}

type timeable func()

func execAndEvalTime(title string, fn timeable) {
	start := time.Now()

	fn()

	diff := time.Since(start).Seconds()

	fmt.Println(title, "took", diff, "seconds")
}

func runDay1A() {
	input := readInput("./input.txt")

	count := countLarger(input)

	fmt.Println("There were", count, "measurements larger than the previous measurement")
}

func runDay1B() {
	input := readInput("./input.txt")

	slidingSums := make([]int, len(input))

	for i, v := range input {
		switch i {
		case 0, len(input) - 1:
			slidingSums[i] = v
		case 1:
			vLast := input[i-1]
			slidingSums[i] = vLast + v
		case len(input) - 2:
			vNext := input[i+1]
			slidingSums[i] = vNext + v
		default:
			vLast := input[i-1]
			vNext := input[i+1]
			slidingSums[i] = vLast + v + vNext
		}
	}

	count := countLarger(slidingSums)

	fmt.Println("There were", count, "measurements larger than the previous measurement")
}

func main() {
	execAndEvalTime("Part A", runDay1A)
	execAndEvalTime("Part B", runDay1B)
}
