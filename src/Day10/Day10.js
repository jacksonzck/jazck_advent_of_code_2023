import './Day10.css'
import { useState } from 'react'
export default function Day10() {
    let [part1Sum, setpart1Sum] = useState(0)
    let [part2Sum, setpart2Sum] = useState(0)

    /**
     * 
     * @param {String} content 
     */
    function part1(content) {
        let diagram = []
        let x = -1;
        let y = -1;
        let startX = 0;
        let startY = 0;
        for (const line of content.split("\n")) {
            if (line === "") continue;
            y++
            const ergo = []
            for(const character of line) {
                x++
                ergo.push(character)
                if (character === "S") {
                    startX = x
                    startY = y;
                }
            }
            diagram.push(ergo)
            x = -1
        }
        let width = diagram[0].length
        let height = y
        /**
         * Outline:
         * Test the loop for each direction
         * If loop is impossible, discard and go to the next
         */
        // Up
        x = startX
        y = startY - 1
        let steps = 0
        let direction = "up"
        while(x !== startX || y !== startY) {
            if (y < 0 || y > height || x > width || x < 0) break
            const pipe = diagram[y][x]
            steps++
            if (direction === "up") {
                if (pipe === "|") {
                    y--
                } else if (pipe === "7") {
                    direction = "left"
                    x--
                } else if (pipe === "F") {
                    direction = "right"
                    x++
                } else {
                    break
                }
            } else if (direction === "right") {
                if (pipe === "-") {
                    x++
                } else if (pipe === "J") {
                    direction = "up"
                    y--
                } else if (pipe === "7") {
                    direction = "down"
                    y++
                } else {
                    break
                }
            } else if (direction === "down") {
                if (pipe === "|") {
                    y++
                } else if (pipe === "L") {
                    direction = "right"
                    x++
                } else if (pipe === "J") {
                    direction = "left"
                    x--
                } else {
                    break
                }
            } else if (direction === "left") {
                if (pipe === "-") {
                    x--
                } else if (pipe === "L") {
                    direction = "up"
                    y--
                } else if (pipe === "F") {
                    direction = "down"
                    y++
                } else {
                    break
                }
            }
        }
        if (!(y < 0 || y > height || x > width || x < 0) && diagram[y][x] === "S") return setpart1Sum((steps + 1) / 2)
        //console.log(diagram[y][x])
        // Right
        x = startX + 1
        y = startY 
        steps = 0
        direction = "right"
        while(x !== startX || y !== startY) {
            //console.log("be")
            if (y < 0 || y > height || x > width || x < 0) break
            //console.log("af")
            const pipe = diagram[y][x]
            console.log(pipe)
            steps++
            if (direction === "up") {
                if (pipe === "|") {
                    y--
                } else if (pipe === "7") {
                    direction = "left"
                    x--
                } else if (pipe === "F") {
                    direction = "right"
                    x++
                } else {
                    break
                }
            } else if (direction === "right") {
                if (pipe === "-") {
                    x++
                } else if (pipe === "J") {
                    direction = "up"
                    y--
                } else if (pipe === "7") {
                    direction = "down"
                    y++
                } else {
                    break
                }
            } else if (direction === "down") {
                if (pipe === "|") {
                    y++
                } else if (pipe === "L") {
                    direction = "right"
                    x++
                } else if (pipe === "J") {
                    direction = "left"
                    x--
                } else {
                    break
                }
            } else if (direction === "left") {
                if (pipe === "-") {
                    x--
                } else if (pipe === "L") {
                    direction = "up"
                    y--
                } else if (pipe === "F") {
                    direction = "down"
                    y++
                } else {
                    break
                }
            }
        }
        if (!(y < 0 || y > height || x > width || x < 0) && diagram[y][x] === "S") return setpart1Sum((steps + 1) / 2)
        //console.log(diagram[y][x])
        //console.log(y)
        //console.log(x)
        // Down
        x = startX
        y = startY + 1
        steps = 0
        direction = "down"
        while(x !== startX || y !== startY) {
            if (y < 0 || y > height || x > width || x < 0) break
            const pipe = diagram[y][x]
            steps++
            if (direction === "up") {
                if (pipe === "|") {
                    y--
                } else if (pipe === "7") {
                    direction = "left"
                    x--
                } else if (pipe === "F") {
                    direction = "right"
                    x++
                } else {
                    break
                }
            } else if (direction === "right") {
                if (pipe === "-") {
                    x++
                } else if (pipe === "J") {
                    direction = "up"
                    y--
                } else if (pipe === "7") {
                    direction = "down"
                    y++
                } else {
                    break
                }
            } else if (direction === "down") {
                if (pipe === "|") {
                    y++
                } else if (pipe === "L") {
                    direction = "right"
                    x++
                } else if (pipe === "J") {
                    direction = "left"
                    x--
                } else {
                    break
                }
            } else if (direction === "left") {
                if (pipe === "-") {
                    x--
                } else if (pipe === "L") {
                    direction = "up"
                    y--
                } else if (pipe === "F") {
                    direction = "down"
                    y++
                } else {
                    break
                }
            }
        }
        if (diagram[y][x] === "S") return setpart1Sum((steps + 1) / 2)
        //console.log(diagram[y][x])
        // No need for left - think about it
        setpart1Sum(-1)
    }

    function pipe_solver(content) {
        let diagram = []
        let d1 = []
        let d2 = []
        let d3 = []
        let x = -1;
        let y = -1;
        let startX = 0;
        let startY = 0;
        for (const line of content.split("\n")) {
            if (line === "") continue;
            y++
            const ergo = []
            const l1 = []
            const l2 = []
            const l3 = []
            for(const character of line) {
                x++
                ergo.push(character)
                l1.push(".")
                l2.push(".")
                l3.push(".")
                if (character === "S") {
                    startX = x
                    startY = y;
                }
            }
            diagram.push(ergo)
            d1.push(l1)
            d2.push(l2)
            d3.push(l3)
            x = -1
        }
        d1[startY][startX] = "S"
        d2[startY][startX] = "S"
        d3[startY][startX] = "S"
        let width = diagram[0].length
        let height = y
        /**
         * Outline:
         * Test the loop for each direction
         * If loop is impossible, discard and go to the next
         */
        // Up
        x = startX
        y = startY - 1
        let steps = 0
        let direction = "up"
        while(x !== startX || y !== startY) {
            if (y < 0 || y > height || x > width || x < 0) break
            const pipe = diagram[y][x]
            d1[y][x] = pipe
            steps++
            if (direction === "up") {
                if (pipe === "|") {
                    y--
                } else if (pipe === "7") {
                    direction = "left"
                    x--
                } else if (pipe === "F") {
                    direction = "right"
                    x++
                } else {
                    break
                }
            } else if (direction === "right") {
                if (pipe === "-") {
                    x++
                } else if (pipe === "J") {
                    direction = "up"
                    y--
                } else if (pipe === "7") {
                    direction = "down"
                    y++
                } else {
                    break
                }
            } else if (direction === "down") {
                if (pipe === "|") {
                    y++
                } else if (pipe === "L") {
                    direction = "right"
                    x++
                } else if (pipe === "J") {
                    direction = "left"
                    x--
                } else {
                    break
                }
            } else if (direction === "left") {
                if (pipe === "-") {
                    x--
                } else if (pipe === "L") {
                    direction = "up"
                    y--
                } else if (pipe === "F") {
                    direction = "down"
                    y++
                } else {
                    break
                }
            }
        }
        if (!(y < 0 || y > height || x > width || x < 0) && diagram[y][x] === "S") return d1
        //console.log(diagram[y][x])
        // Right
        x = startX + 1
        y = startY 
        steps = 0
        direction = "right"
        while(x !== startX || y !== startY) {
            //console.log("be")
            if (y < 0 || y > height || x > width || x < 0) break
            //console.log("af")
            const pipe = diagram[y][x]
            d2[y][x] = pipe
            steps++
            if (direction === "up") {
                if (pipe === "|") {
                    y--
                } else if (pipe === "7") {
                    direction = "left"
                    x--
                } else if (pipe === "F") {
                    direction = "right"
                    x++
                } else {
                    break
                }
            } else if (direction === "right") {
                if (pipe === "-") {
                    x++
                } else if (pipe === "J") {
                    direction = "up"
                    y--
                } else if (pipe === "7") {
                    direction = "down"
                    y++
                } else {
                    break
                }
            } else if (direction === "down") {
                if (pipe === "|") {
                    y++
                } else if (pipe === "L") {
                    direction = "right"
                    x++
                } else if (pipe === "J") {
                    direction = "left"
                    x--
                } else {
                    break
                }
            } else if (direction === "left") {
                if (pipe === "-") {
                    x--
                } else if (pipe === "L") {
                    direction = "up"
                    y--
                } else if (pipe === "F") {
                    direction = "down"
                    y++
                } else {
                    break
                }
            }
        }
        if (!(y < 0 || y > height || x > width || x < 0) && diagram[y][x] === "S") return d2
        //console.log(diagram[y][x])
        //console.log(y)
        //console.log(x)
        // Down
        x = startX
        y = startY + 1
        steps = 0
        direction = "down"
        while(x !== startX || y !== startY) {
            if (y < 0 || y > height || x > width || x < 0) break
            const pipe = diagram[y][x]
            d3[y][x] = pipe
            steps++
            if (direction === "up") {
                if (pipe === "|") {
                    y--
                } else if (pipe === "7") {
                    direction = "left"
                    x--
                } else if (pipe === "F") {
                    direction = "right"
                    x++
                } else {
                    break
                }
            } else if (direction === "right") {
                if (pipe === "-") {
                    x++
                } else if (pipe === "J") {
                    direction = "up"
                    y--
                } else if (pipe === "7") {
                    direction = "down"
                    y++
                } else {
                    break
                }
            } else if (direction === "down") {
                if (pipe === "|") {
                    y++
                } else if (pipe === "L") {
                    direction = "right"
                    x++
                } else if (pipe === "J") {
                    direction = "left"
                    x--
                } else {
                    break
                }
            } else if (direction === "left") {
                if (pipe === "-") {
                    x--
                } else if (pipe === "L") {
                    direction = "up"
                    y--
                } else if (pipe === "F") {
                    direction = "down"
                    y++
                } else {
                    break
                }
            }
        }
        if (diagram[y][x] === "S") return d3
        return steps
    }

    function part2(content) {
        let insiders = 0
        let d = pipe_solver(content)
        //console.table(d)
        let y = -1
        for (const line of d) {
            y++
            let x = -1
            let inside = false
            let open = null
            for (let character of line) {
                x++
                if (character === "S") {
                    if (d[y + 1][x] === "J" || d[y + 1][x] === "L" || d[y + 1][x] === "|") {
                        if(d[y - 1][x] === "F" || d[y - 1][x] === "|" || d[y - 1][x] === "7") character = "|"
                        else if (d[y][x-1] === "L" || d[y][x-1] === "-" || d[y][x-1] === "F") character = "7"
                        else character = "F"
                    } else if(d[y - 1][x] === "F" || d[y - 1][x] === "|" || d[y - 1][x] === "7") {
                        if(d[y][x+1] === "7" || d[y][x+1] === "-" || d[y][x+1] === "J") character = "L"
                        else character = "J"
                    } else character = "-"
                }
                if (open === "L" && character === "7") {
                    inside = !inside
                    open = null
                } else if (open === "L" && character === "J") {
                    open = null
                } else if (open === "F" && character === "J") {
                    inside = !inside
                    open = null
                } else if (open === "F" && character === "7") {
                    open = null
                } else if (open !== null) {
                    continue;
                } else if (character === "F" || character === "L") {
                    open = character
                } else if (character === "|") {
                    inside = !inside
                } else if (character === "." && inside) {
                    //console.log("%d, %d", y, x)
                    d[y][x] = "N"
                    insiders++
                } else if (character === ".") {
                    d[y][x] = "O"
                }
            }
        }
        console.table(d)
        setpart2Sum(insiders)
    }

    return <div className='column-flexer'>
        <h3>Star 10</h3>
        <h4>Part 1</h4>
        <textarea onChange={(e) => part1(e.target.value)}/>
        <p>The sum is {part1Sum}.</p>
        <h4>Part 2</h4>
        <textarea onChange={(e) => part2(e.target.value)}/>
        <p>The sum is {part2Sum}.</p>
    </div>
}