/* eslint-disable no-undef */
import './Day3.css'
import { useState } from 'react'
//let count = 0
let pyodide = await loadPyodide();
export default function Day3() {
    //count++
    let [part1Sum, setpart1Sum] = useState(0)

    function part1(e) {
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

    return (
        <div className='Day1'>
            <h3>Star 3</h3>
            <textarea onChange={part1}/>
            <p>The sum of the part numbers is {part1Sum}.</p>
        </div>
    )
}
