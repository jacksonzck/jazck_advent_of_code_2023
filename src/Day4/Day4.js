import './Day4.css'
import { useState } from 'react'
export default function Day4() {
    let [part1Sum, setpart1Sum] = useState(0)
    let [part2Sum, setpart2Sum] = useState(0)

    function part1(content) {
        let points = 0
        for (const element of content.split('\n')) {
            const matched = element.match(/Card +[0-9]*: (.*)\|(.*)/)
            if(matched === null) continue;
            let wins = 0
            for (const winner of matched[1].match(/[0-9]+ /g)) {
                for (const ourNum of matched[2].match(/ [0-9]+/g)) {
                    if(Number(ourNum) === Number(winner)) {
                        wins++;
                        console.log(ourNum + "   " + winner)
                    } 
                }
            }
            console.log("Wins is " + wins)
            if(wins !== 0) points += Math.pow(2, wins - 1)
        }
        setpart1Sum(points)
    }

    function part2(content) {
        let points = []
        let amounts = []
        for (const element of content.split('\n')) {
            const matched = element.match(/Card +[0-9]*: (.*)\|(.*)/)
            if(matched === null) continue;
            let wins = 0
            for (const winner of matched[1].match(/[0-9]+ /g)) {
                for (const ourNum of matched[2].match(/ [0-9]+/g)) {
                    if(Number(ourNum) === Number(winner)) {
                        wins++;
                    } 
                }
            }
            points.push(Number(wins))
            amounts.push(Number(1))
        }
        for (const sindex in amounts) {
            const index = Number(sindex)
            if(points[index] === 0) continue;
            for(let i = 1; i < points[index] + 1; i++) {
                amounts[index + i] = Number(amounts[index + i]) + Number(amounts[index])
            }
        }
        let sum = 0
        for (const sindex in amounts) {
            sum = sum + Number(amounts[Number(sindex)])
        }
        setpart2Sum(sum)
    }

    return <div className='column-flexer'>
        <h3>Star 4</h3>
        <h4>Part 1</h4>
        <textarea onChange={(e) => part1(e.target.value)}/>
        <p>The sum is {part1Sum}.</p>
        <h4>Part 2</h4>
        <textarea onChange={(e) => part2(e.target.value)}/>
        <p>The sum is {part2Sum}.</p>
    </div>
}