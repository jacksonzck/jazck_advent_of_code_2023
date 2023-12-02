import './Day1.css'
import { useState } from 'react'

export default function Day1() {
    let [part1Sum, setpart1Sum] = useState(0)
    let [part2Sum, setpart2Sum] = useState(0)
    /**
     * 
     * @param {Event} e 
     */
    function star1part1(e) {
        e.preventDefault()
        const form = e.target;
        const formData = new FormData(form);
        let ourpart1Sum = 0
        for(const element of formData.get("Day1Part1Text").split('\n')) {
            const matched = element.match(/[0-9]/g)
            if (matched !== null) {
                ourpart1Sum = ourpart1Sum + Number(matched[0] + matched.at(-1))
            }
        }
        setpart1Sum(ourpart1Sum)
    }

    /**
     * 
     * @param {Event} e 
     */
    function star1part2(e) {
        e.preventDefault()
        const form = e.target;
        const formData = new FormData(form);
        let ourpart2Sum = 0
        function numberParser(toParse) {
            if(toParse === "one") return "1"
            if(toParse === "two") return "2"
            if(toParse === "three") return "3"
            if(toParse === "four") return "4"
            if(toParse === "five") return "5"
            if(toParse === "six") return "6"
            if(toParse === "seven") return "7"
            if(toParse === "eight") return "8"
            if(toParse === "nine") return "9"
            return "" + toParse
        }
        for(const element of formData.get("Day1Part2Text").split('\n')) {
            const firstMatch = element.match(/one|two|three|four|five|six|seven|eight|nine|[0-9]/)
            let lastMatch = null
            for (let i = 1; i < element.length + 1; i++) {
                lastMatch = element.slice(element.length - i, element.length).match(/one|two|three|four|five|six|seven|eight|nine|[0-9]/)
                if(lastMatch !== null) break;
            }
            if (firstMatch !== null) {
                console.log(firstMatch)
                console.log(lastMatch)
                ourpart2Sum = Number(ourpart2Sum) + Number(numberParser(firstMatch[0]) + numberParser(lastMatch[0]))
            }
        }
        setpart2Sum(ourpart2Sum)
    }


    return (
        <div className='Day1'>
            <h3>Star 1</h3>
            <h4>Part 1</h4>
            <form onSubmit={star1part1}>
                <textarea name="Day1Part1Text"/>
                <button type="submit"> Submit </button>
            </form>
            <p>Sum of all calibration values is {part1Sum}.</p>
            <h4>Part 2</h4>
            <form onSubmit={star1part2}>
                <textarea name="Day1Part2Text"/>
                <button type="submit"> Submit </button>
            </form>
            <p>Sum of all calibration values is {part2Sum}.</p>
        </div>
    )
}
