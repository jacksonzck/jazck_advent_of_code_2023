import './Day2.css'
import { useState } from 'react'

let count = 0

export default function Day2() {
    const myCount = count++
    const [part1Sum, setPart1Sum] = useState(0)
    const [part2Sum, setPart2Sum] = useState(0)
    const [allowedGreens, setAllowedGreens] = useState(0)
    const [allowedReds, setAllowedReds] = useState(0)
    const [allowedBlues, setAllowedBlues] = useState(0)

    function part1(e) {
        let sum = 0;
        for (const element of e.target.value.split('\n')) {
            let allowed = true
            const regex = element.match(/Game ([0-9]+)+(.*)/)
            if (regex === null) continue;
            const gameId = Number(regex[1])
            for (const round of regex[2].split(';')) {
                const blueRegex = round.match(/([0-9]+) blue/)
                if (blueRegex !== null && Number(blueRegex[1]) > allowedBlues) allowed = false;
                const redRegex = round.match(/([0-9]+) red/)
                if (redRegex !== null && Number(redRegex[1]) > allowedReds) allowed = false;
                const greenRegex = round.match(/([0-9]+) green/)
                if (greenRegex !== null && Number(greenRegex[1]) > allowedGreens) allowed = false;
            }
            if (allowed) sum += gameId;
        }
        setPart1Sum(sum)
    }

    function part2(e) {
        let sum = 0;
        for (const element of e.target.value.split('\n')) {
            const regex = element.match(/Game ([0-9]+)+(.*)/)
            if (regex === null) continue;
            let minGreens = 0;
            let minReds = 0;
            let minBlues = 0;
            for (const round of regex[2].split(';')) {
                const blueRegex = round.match(/([0-9]+) blue/)
                if (blueRegex !== null) minBlues = Math.max(minBlues, Number(blueRegex[1]))
                const redRegex = round.match(/([0-9]+) red/)
                if (redRegex !== null) minReds = Math.max(minReds, Number(redRegex[1]))
                const greenRegex = round.match(/([0-9]+) green/)
                if (greenRegex !== null) minGreens = Math.max(minGreens, Number(greenRegex[1]))
            }
            const power = minBlues * minGreens * minReds
            sum += power
        }
        setPart2Sum(sum)
    }

    return (<div className='column-flexer'>
        <h3>Star 2</h3>
        <div label="Day2Part1">
            <div className="Cubes">
                <label htmlFor={"Day2Green" + myCount}>Green Cubes </label>
                <input id={"Day2Green" + myCount} type="number" value={allowedGreens} onChange={e => setAllowedGreens(e.target.value)} />
                <label htmlFor={"Day2Red" + myCount}> Red Cubes </label>
                <input id={"Day2Red" + myCount} type="number" value={allowedReds} onChange={e => setAllowedReds(e.target.value)} />
                <label htmlFor={"Day2Blue" + myCount}> Blue Cubes </label>
                <input id={"Day2Blue" + myCount} type="number" value={allowedBlues} onChange={e => setAllowedBlues(e.target.value)} />
            </div>
            <h4>Part 1</h4>
            <textarea onChange={part1} />
            <p>The sum of all of the ids of possible games is {part1Sum}.</p>
        </div>
        <div>
            <h4>Part 2</h4>
            <textarea onChange={part2} />
            <p>The sum of the powers of all the games is {part2Sum}.</p>
        </div>
    </div>)
}