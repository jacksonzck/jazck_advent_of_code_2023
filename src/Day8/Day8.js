import './Day8.css'
import { useState } from 'react'
import 'math.js'
export default function Day8() {
    let [part1Sum, setpart1Sum] = useState(0)
    let [part2Sum, setpart2Sum] = useState(0)

    /**
     * 
     * @param {String} content 
     */
    function part1(content) {
        let node = "AAA"
        let step_count = 0
        try {
            while (true) for (const direction of content.match(/[RL]+/)[0]) {
                step_count++
                node = content.match(new RegExp(node + " = \\(([A-Z]+), ([A-Z]+)\\)"))[(direction === "R") + 1]
                if (node === "ZZZ") return setpart1Sum(step_count)
            }
        } catch (error) {
            return setpart1Sum(-1)
        }
    }

    /**
     * 
     * @param {String} content 
     * @returns 
     */
    function part2(content) {
        /**
         * 
         * Too slow :(
         * 
        let nodes = content.match(/[A-Z0-9][0-9A-Z]A =/g).map(e => {return e.slice(0, 3)})
        console.log(nodes)
        let step_count = 0
        try {
            while (true) for (const direction of content.match(/[RL]+/)[0]) {
                    step_count++
                    nodes = nodes.map(node => {return content.match(new RegExp(node + " = \\(([0-9A-Z]+), ([0-9A-Z]+)\\)"))[(direction === "R") + 1]})
                    if (!nodes.some(e => {return e[2] !== "Z"})) return setpart2Sum(step_count)
                }
        } catch (error) {
            return setpart2Sum(-1)
        }
        */
        try {
            const ruleString = content.match(/... = ...., ..../g)
            console.log(ruleString)
            let rules = []
            let ruleIndex = []
            let ends = []
            //onst directions = [...content.match(/[RL]+/)[0]].map(e => { return 0 + Number(e === "R") })
            for (const rule in ruleString) {
                const left = ruleString[rule].match(/\(([0-9A-Z]+)/)[1]
                const right = ruleString[rule].match(/([0-9A-Z]+)\)/)[1]
                rules.push([left, right])
                ruleIndex.push(ruleString[rule].slice(0, 3))
                ends.push(ruleString[rule][2] === "Z")
            }
            rules = rules.map(rule => {
                return [ruleIndex.indexOf(rule[0]), ruleIndex.indexOf(rule[1])]
            })
            //let step_count = 0
            let nodes = content.match(/[A-Z0-9][0-9A-Z][0-9A-Z] =/g).map(e => { return e.slice(0, 3) }).map(node => {return ruleIndex.indexOf(node)})
            let endNodes = content.match(/[A-Z0-9][0-9A-Z][0-9A-Z] =/g).map(e => { return e.slice(0, 3) }).map(node => {return ruleIndex.indexOf(node)})
            console.log(nodes.length)
            console.log(endNodes.length)
            /*
            while (true) for (const direction of directions) {
                step_count++;
                nodes = nodes.map(node => {return rules[node][direction]})
                if (!nodes.some(e => {return !ends[e]})) return setpart2Sum(step_count)
            }*/
        } catch (error) {
            return setpart2Sum(-1)
        }
    }

    return <div className='column-flexer'>
        <h3>Star 8</h3>
        <h4>Part 1</h4>
        <textarea onChange={(e) => part1(e.target.value)} />
        <p>The sum is {part1Sum}.</p>
        <h4>Part 2</h4>
        <textarea onChange={(e) => part2(e.target.value)} />
        <p>The sum is {part2Sum}.</p>
    </div>
}