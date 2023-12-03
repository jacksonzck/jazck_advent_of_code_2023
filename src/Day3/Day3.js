/* eslint-disable no-undef */
import './Day3.css'
import { useState } from 'react'
//let count = 0
export default function Day3() {
    //count++
    let [part1Sum, setpart1Sum] = useState(0)
    let [part2Sum, setPart2Sum] = useState(0)
    async function part1(e) {
        let pyodide = await loadPyodide();
        let content = e.target.value
        let thisIsAGoodIdea = pyodide.runPython(`
        # Python is really performant for loops, making it a great choice for targeting across language
def part1(content: str):
    goodIndex = set()
    for lineindex, line in enumerate(content.split()):
        for index, character in enumerate(line):
            if character != '.' and not character.isdigit():
                goodIndex.add((lineindex - 1, index - 1))
                goodIndex.add((lineindex - 1, index))
                goodIndex.add((lineindex - 1, index + 1))
                goodIndex.add((lineindex, index - 1))
                goodIndex.add((lineindex, index + 1))
                goodIndex.add((lineindex + 1, index - 1))
                goodIndex.add((lineindex + 1, index))
                goodIndex.add((lineindex + 1, index + 1))
    sum = 0
    for lineindex, line in enumerate(content.split()):
        potential_number = ""
        valid_number = False
        for index, character in enumerate(line):
            if valid_number and not character.isdigit():
                sum = sum + int(potential_number)
                potential_number = ""
            if not valid_number and (lineindex, index) in goodIndex:
                valid_number = True
            if not character.isdigit():
                valid_number = False
                potential_number = ""
            else:
                potential_number = potential_number + character
        if valid_number and potential_number != "":
            sum = sum + int(potential_number)
    return sum

part1
        `);
        setpart1Sum(thisIsAGoodIdea(content))
    }

    async function part2(e) {
        let pyodide = await loadPyodide();
        let content = e.target.value
        let thisIsAGoodIdea = pyodide.runPython(`
    def part2(content: str):
        numbers = dict()
        sum = 0
        for lineindex, line in enumerate(content.split()):
            coolindex = list()
            potential_number = ""
            for index, character in enumerate(line):
                if character.isdigit():
                    potential_number = potential_number + character
                    coolindex.append((lineindex, index))
                elif potential_number != "":
                    for coolestindex in coolindex:
                        numbers[coolestindex] = potential_number + "l" + str(lineindex % 10) + "l" + str(index % 10)
                        # This can break if a number is more than like, 6 digits long under rare circumstances
                    potential_number = ""
                    coolindex = list()
            if potential_number != "":
                for coolestindex in coolindex:
                    numbers[coolestindex] = potential_number + "l" + str(lineindex % 10) + "l" + str(index % 10)
        for lineindex, line in enumerate(content.split()):
            for index, character in enumerate(line):
                if character == "*":
                    adjacent_numbers = list()
                    #print(f"found * at {lineindex}, {index}")
                    for key in [(lineindex - 1, index - 1), (lineindex - 1, index), (lineindex - 1, index + 1), (lineindex, index - 1), (lineindex, index + 1), (lineindex + 1, index - 1), (lineindex + 1, index), (lineindex + 1, index + 1)]:
                        if key in numbers and numbers[key] not in adjacent_numbers:
                            adjacent_numbers.append(numbers[key])
                    #print(adjacent_numbers)
                    if len(adjacent_numbers) == 2:
                        sum = sum + (int(adjacent_numbers[0][:-4]) * int(adjacent_numbers[1][:-4]))
        return sum
    part2
        `);
        setPart2Sum(thisIsAGoodIdea(content))
    }

    return (
        <div className='Day1'>
            <h3>Star 3</h3>
            <h4>Part 1</h4>
            <textarea onChange={part1}/>
            <p>The sum of the part numbers is {part1Sum}.</p>
            <h4>Part 2</h4>
            <textarea onChange={part2}/>
            <p>The sum of the gear ratios is {part2Sum}.</p>
        </div>
    )
}
