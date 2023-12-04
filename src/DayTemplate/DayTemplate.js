import './DayTemplate.css'
import { useState } from 'react'
export default function DayTemplate() {
    let [part1Sum, setpart1Sum] = useState(0)
    let [part2Sum, setpart2Sum] = useState(0)

    function part1(content) {
        setpart1Sum(1)
    }

    function part2(content) {
        setpart2Sum(1)
    }

    return <div className='column-flexer'>
        <h3>Star N</h3>
        <h4>Part 1</h4>
        <textarea onChange={(e) => part1(e.target.value)}/>
        <p>The sum is {part1Sum}.</p>
        <h4>Part 2</h4>
        <textarea onChange={(e) => part2(e.target.value)}/>
        <p>The sum is {part2Sum}.</p>
    </div>
}