import './Day9.css'
import { useState } from 'react'
export default function Day9() {
    let [part1Sum, setpart1Sum] = useState(0)
    let [part2Sum, setpart2Sum] = useState(0)

    /**
     * 
     * @param {Array} sequence 
     * @returns 
     */
    function next(sequence) {
        let allZero = true
        sequence.forEach(e => {if(e !== 0) allZero = false})
        if (allZero) return 0
        let next_sequence = []
        for (let i = 0; i < sequence.length - 1; i++) {
            next_sequence.push(sequence[i + 1] - sequence[i])
        }
        return sequence.at(-1) + next(next_sequence)
    }


    function last(sequence) {
        let allZero = true
        sequence.forEach(e => {if(e !== 0) allZero = false})
        if (allZero) return 0
        let next_sequence = []
        for (let i = 0; i < sequence.length - 1; i++) {
            next_sequence.push(sequence[i + 1] - sequence[i])
        }
        return sequence.at(0) - last(next_sequence)
    }
    /**
     * 
     * @param {String} content 
     */
    function part1(content) {
        let sum = 0
        for (const line of content.split("\n")) {
            if (line.match(/-?[0-9]+/g) !== null) sum += next(line.match(/-?[0-9]+/g).map(e => { return Number(e) }))
        }
        setpart1Sum(sum)
    }

    function part2(content) {
        let sum = 0
        for (const line of content.split("\n")) {
            if (line.match(/-?[0-9]+/g) !== null) sum += last(line.match(/-?[0-9]+/g).map(e => { return Number(e) }))
        }
        setpart2Sum(sum)
    }

    return <div className='column-flexer'>
        <h3>Star 9</h3>
        <h4>Part 1</h4>
        <textarea onChange={(e) => part1(e.target.value)} />
        <p>The sum is {part1Sum}.</p>
        <h4>Part 2</h4>
        <textarea onChange={(e) => part2(e.target.value)} />
        <p>The sum is {part2Sum}.</p>
    </div>
}