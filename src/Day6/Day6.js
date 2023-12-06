import './Day6.css'
import { useState } from 'react'
export default function DayTemplate() {
    let [part1Sum, setpart1Sum] = useState(0)
    let [part2Sum, setpart2Sum] = useState(0)

    function part1(content) {
        let times = []
        let matched = content.match(/Time:( +[0-9]+)*/)
        if (matched === null) return
        for (const time of matched[0].match(/[0-9]+/g)) {
            times.push(Number(time))
        }
        let distances = []
        matched = content.match(/Distance:( +[0-9]+)*/)
        if (matched === null) return
        for (const distance of matched[0].match(/[0-9]+/g)) {
            distances.push(Number(distance))
        }
        if (distances.length !== times.length) return
        let products = 1
        for (const n in times) {
            let ways = 0
            for(let i = 1; i < times[n]; i++) {
                if(i * (times[n] - i) > distances[n]) {
                    ways++;
                    //console.log("i" + i)
                }
            }
            //console.log(ways)
            products = products * ways;
        }
        setpart1Sum(products)
    }

    function part2(content) {
        let matched = content.match(/Time:( +[0-9]+)*/)[0].match(/( *[0-9]+)+/g)[0].replace(/\s/g, "")
        let time = Number(matched)
        matched = content.match(/Distance:( +[0-9]+)*/)[0].match(/( *[0-9]+)+/g)[0].replace(/\s/g, "")
        let distance = Number(matched)
        let low_bound
        for(let i = 1; i < time; i++) {
            if(i * (time - i) > distance) {
                low_bound = i
                break
            }
        }
        let high_bound = time - low_bound
        setpart2Sum(high_bound - low_bound + 1)
    }

    return <div className='column-flexer'>
        <h3>Star 6</h3>
        <h4>Part 1</h4>
        <textarea onChange={(e) => part1(e.target.value)}/>
        <p>The sum is {part1Sum}.</p>
        <h4>Part 2</h4>
        <textarea onChange={(e) => part2(e.target.value)}/>
        <p>The sum is {part2Sum}.</p>
    </div>
}