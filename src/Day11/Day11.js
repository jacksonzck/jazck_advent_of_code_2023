import './Day11.css'
import { useState } from 'react'
export default function Day11() {
    let [part1Sum, setpart1Sum] = useState(0)
    let [part2Sum, setpart2Sum] = useState(0)

    function part1(content) {
        const galaxy_x = []
        const galaxy_y = []
        let y = 0
        let x = 0
        for (const line of content.split("\n")) {
            if(line === "") continue
            x = 0
            for (const character of line) {
                if (character === "#") {
                    galaxy_x.push(x)
                    galaxy_y.push(y)
                }
                x++
            }
            y++
        }
        console.log(x)
        let new_galaxy_x = structuredClone(galaxy_x)
        for (let i = 0; i < x; i++) {
            console.log(i)
            if (!galaxy_x.includes(i)) {
                console.log("Adding additional column %d", i)
                galaxy_x.forEach((value, index) => {
                    if (value > i) {
                        new_galaxy_x[index] = new_galaxy_x[index] + 1
                    }
                })
            }
        }
        console.log("X DONE")
        let new_galaxy_y = structuredClone(galaxy_y)
        for (let i = 0; i < y; i++) {
            if (!galaxy_y.includes(i)) {
                console.log("Adding additional row %d", i)
                galaxy_y.forEach((value, index) => {
                    if (value > i) {
                        new_galaxy_y[index] = new_galaxy_y[index] + 1
                    }
                })
            }
        }
        let sum = 0;
        for(let i = 0; i < new_galaxy_x.length - 1; i++) {
            for(let j = i + 1; j < new_galaxy_x.length; j++) {
                sum += Math.abs(new_galaxy_x[i] - new_galaxy_x[j]) + Math.abs(new_galaxy_y[i] - new_galaxy_y[j])
            }
        }
        console.log(galaxy_x)
        console.log(galaxy_y)
        console.log(new_galaxy_x)
        console.log(new_galaxy_y)
        setpart1Sum(sum)
    }

    function part2(content) {
        
        const galaxy_x = []
        const galaxy_y = []
        let y = 0
        let x = 0
        for (const line of content.split("\n")) {
            if(line === "") continue
            x = 0
            for (const character of line) {
                if (character === "#") {
                    galaxy_x.push(x)
                    galaxy_y.push(y)
                }
                x++
            }
            y++
        }
        console.log(x)
        let new_galaxy_x = structuredClone(galaxy_x)
        for (let i = 0; i < x; i++) {
            console.log(i)
            if (!galaxy_x.includes(i)) {
                console.log("Adding additional column %d", i)
                galaxy_x.forEach((value, index) => {
                    if (value > i) {
                        new_galaxy_x[index] = new_galaxy_x[index] + 1000000 - 1
                    }
                })
            }
        }
        console.log("X DONE")
        let new_galaxy_y = structuredClone(galaxy_y)
        for (let i = 0; i < y; i++) {
            if (!galaxy_y.includes(i)) {
                console.log("Adding additional row %d", i)
                galaxy_y.forEach((value, index) => {
                    if (value > i) {
                        new_galaxy_y[index] = new_galaxy_y[index] + 1000000 - 1
                    }
                })
            }
        }
        let sum = 0;
        for(let i = 0; i < new_galaxy_x.length - 1; i++) {
            for(let j = i + 1; j < new_galaxy_x.length; j++) {
                sum += Math.abs(new_galaxy_x[i] - new_galaxy_x[j]) + Math.abs(new_galaxy_y[i] - new_galaxy_y[j])
            }
        }
        console.log(galaxy_x)
        console.log(galaxy_y)
        console.log(new_galaxy_x)
        console.log(new_galaxy_y)
        setpart2Sum(sum)
    }

    return <div className='column-flexer'>
        <h3>Star 11</h3>
        <h4>Part 1</h4>
        <textarea onChange={(e) => part1(e.target.value)} />
        <p>The sum is {part1Sum}.</p>
        <h4>Part 2</h4>
        <textarea onChange={(e) => part2(e.target.value)} />
        <p>The sum is {part2Sum}.</p>
    </div>
}