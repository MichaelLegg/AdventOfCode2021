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

// returns (hChange, dChange)
func partAEvalCommand(command string) (int, int) {
	commandParts := s.Split(command, " ")

	direction := commandParts[0]
	pi, _ := strconv.ParseInt(commandParts[1], 0, 64)
	distance := int(pi)

	hChange, dChange := 0, 0

	switch direction {
	case "forward":
		hChange = distance
	case "down":
		dChange = distance
	case "up":
		dChange = -distance
	}

	return hChange, dChange
}

// returns (hChange, dChange, aimChange)
func partBEvalCommand(command string, currentAim int) (int, int, int) {
	commandParts := s.Split(command, " ")

	direction := commandParts[0]
	pi, _ := strconv.ParseInt(commandParts[1], 0, 64)
	distance := int(pi)

	hChange, dChange, aimChange := 0, 0, 0

	switch direction {
	case "forward":
		hChange = distance
		dChange = currentAim * distance
	case "down":
		aimChange = distance
	case "up":
		aimChange = -distance
	}

	return hChange, dChange, aimChange
}

type timeable func()

func execAndEvalTime(title string, fn timeable) {
	start := time.Now()

	fn()

	diff := time.Since(start).Seconds()

	fmt.Println(title, "took", diff, "seconds")
}

func runDay2A() {
	hPos, depth := 0, 0

	input := readInput("./input.txt")

	for _, v := range input {
		hChange, dChange := partAEvalCommand(v)

		hPos = hPos + hChange
		depth = depth + dChange
	}

	fmt.Println("The sub is at horizontal", hPos, "and depth", depth)
	fmt.Println("Multiplied is", hPos*depth)
}

func runDay2B() {
	hPos, depth, aim := 0, 0, 0

	input := readInput("./input.txt")

	for _, v := range input {
		hChange, dChange, aimChange := partBEvalCommand(v, aim)

		hPos = hPos + hChange
		depth = depth + dChange
		aim = aim + aimChange
	}

	fmt.Println("The sub is at horizontal", hPos, "and depth", depth)
	fmt.Println("Multiplied is", hPos*depth)
}

func main() {
	execAndEvalTime("Part A", runDay2A)
	execAndEvalTime("Part B", runDay2B)
}
