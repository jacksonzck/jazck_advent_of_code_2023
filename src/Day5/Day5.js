/* eslint-disable no-undef */
import { useState } from 'react'

function next_one(to_convert, map) {
    let convertees = []
    let convert_index = []
    for(const line of map) {
        const matched = line.match(/ *([0-9]+) ([0-9]+) ([0-9]+)/)
        if (matched === null) continue;
        for(const i in to_convert) {
            if(to_convert[i] >= Number(matched[2]) && to_convert[i] < Number(matched[2]) + Number(matched[3])) {
                convertees.push(Number(matched[1]) + (Number(to_convert[i]) - Number(matched[2])))
                convert_index.push(i)
            }
        }
    }
    for(const i in to_convert) {
        if(!convert_index.includes(i)) convertees.push(to_convert[i])
    }
    console.log(convertees)
    return convertees
}

function go_first(convertee, maps) {
    let now_convert = convertee
    //console.log(now_convert)
    for(const mapping of maps) {

        for(const rule of mapping) {
            if(now_convert >= rule[0] && now_convert < rule[1]) {
                now_convert = now_convert + rule[2]
                break
            }
        }
        //console.log(now_convert)

    }
    return now_convert
}

function good_map(badMap) {
    let rules = []
    for(const line of badMap) {
        const matched = line.match(/ *([0-9]+) ([0-9]+) ([0-9]+)/)
        if (matched === null) continue;
        rules.push([Number(matched[1]), Number(matched[1]) + Number(matched[3]), Number(matched[2]) - Number(matched[1])])
    }
    return rules
}

export default function Day5() {
    let [part1lowest, setpart1lowest] = useState(0)
    let [part2lowest, setpart2lowest] = useState(0)

    function part1(content) {
        const seeds = content.match(/seeds:( [0-9]+)*/g)[0].match(/[0-9]+/g).map(element => {
            return Number(element)
        });
        function mapMaker(mapLabel) {
            //console.log(content.match(new RegExp(`${mapLabel} map:\n([0-9]* [0-9]* [0-9]*\n)*`, 'g')))
            return content.match(new RegExp(`${mapLabel} map:\n([0-9]+ [0-9]+ [0-9]+\n)*`, 'g'))[0].split('\n').slice(1)
        }
        const soil = next_one(seeds, mapMaker("seed-to-soil"))
        const fertilizer = next_one(soil, mapMaker("soil-to-fertilizer"))
        const water = next_one(fertilizer, mapMaker("fertilizer-to-water"))
        const light = next_one(water, mapMaker("water-to-light"))
        const temperature = next_one(light, mapMaker("light-to-temperature"))
        const humidity = next_one(temperature, mapMaker("temperature-to-humidity"))
        const location = next_one(humidity, mapMaker("humidity-to-location"))
        setpart1lowest(Math.min(...location))
    }
    
    function part2(content) {
        function mapMaker(mapLabel) {
            //console.log(content.match(new RegExp(`${mapLabel} map:\n([0-9]* [0-9]* [0-9]*\n)*`, 'g')))
            return content.match(new RegExp(`${mapLabel} map:\n([0-9]+ [0-9]+ [0-9]+\n)*`, 'g'))[0].split('\n').slice(1)
        }
        let maps = [
            good_map(mapMaker("humidity-to-location")),
            good_map(mapMaker("temperature-to-humidity")),
            good_map(mapMaker("light-to-temperature")),
            good_map(mapMaker("water-to-light")),
            good_map(mapMaker("fertilizer-to-water")),
            good_map(mapMaker("soil-to-fertilizer")),
            good_map(mapMaker("seed-to-soil"))
        ]
        let seedrules = []
        const stuff = content.match(/seeds:( [0-9]+)*/g)[0].match(/[0-9]+/g)
        for(let i = 0; i < stuff.length; i += 2) {
            seedrules.push([Number(stuff[i]), Number(stuff[i]) + Number(stuff[i+1])])
        }
        for(let i = 1; i < 100000000; i++) {
            // Just, like, give it some time
            // Might not work.
            const seed = go_first(i, maps)
            for(const rule of seedrules) {
                if(seed >= rule[0] && seed < rule[1]) {
                    setpart2lowest(i)
                    return
                }
            }
        }
        setpart2lowest(-1)
    }

    return (
        <div>
            <h3>Star 5</h3>
            <h4>Part 1</h4>
            <textarea onChange={e => part1(e.target.value)}/>
            <p>Lowest location is {part1lowest}</p>
            <h4>Part 2</h4>
            <textarea onChange={e => part2(e.target.value)}/>
            <p>Lowest location is {part2lowest}</p>
        </div>
    )

}