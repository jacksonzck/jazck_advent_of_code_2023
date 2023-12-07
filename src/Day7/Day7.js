import './Day7.css'
import { useState } from 'react'
export default function Day7() {
    let [part1Sum, setpart1Sum] = useState(0)
    let [part2Sum, setpart2Sum] = useState(0)

    /**
     * 
     * @param {String} card 
     */
    function typeStrength_p1(card) {
        let joe = [...card].sort((a, b) => {return card_strength_p1(a) - card_strength_p1(b)}).toString().replace(/,/g, "")
        // Five of a kind
        if (joe.match(/([AKQJT98765432])\1\1\1\1/) !== null) {
            return 6
        }
        // Four of a kind
        if (joe.match(/([AKQJT98765432])\1\1\1[AKQJT98765432]/) !== null || joe.match(/[AKQJT98765432]([AKQJT98765432])\1\1\1/) !== null )  {
            return 5
        }
        // Full house
        let poMatches = [
            /([AKQJT98765432])\1([AKQJT98765432])\2\2/,
            /([AKQJT98765432])\1\1([AKQJT98765432])\2/
        ]
        for (const reg of poMatches) {
            if (joe.match(reg) !== null) return 4
        }
        // Three of a kind
        poMatches = [
            /([AKQJT98765432])\1\1([AKQJT98765432])([AKQJT98765432])/,
            /([AKQJT98765432])([AKQJT98765432])\2\2([AKQJT98765432])/,
            /([AKQJT98765432])([AKQJT98765432])([AKQJT98765432])\3\3/
        ]
        for (const reg of poMatches) {
            if (joe.match(reg) !== null) return 3
        }
        // Two pair
        poMatches = [
            /([AKQJT98765432])\1([AKQJT98765432])\2([AKQJT98765432])/,
            /([AKQJT98765432])([AKQJT98765432])\2([AKQJT98765432])\3/,
            /([AKQJT98765432])\1([AKQJT98765432])([AKQJT98765432])\3/
        ]
        for (const reg of poMatches) {
            if (joe.match(reg) !== null) return 2
        }
        // One pair
        poMatches = [
            /([AKQJT98765432])\1([AKQJT98765432])([AKQJT98765432])([AKQJT98765432])/,
            /([AKQJT98765432])([AKQJT98765432])\2([AKQJT98765432])([AKQJT98765432])/,
            /([AKQJT98765432])([AKQJT98765432])([AKQJT98765432])\3([AKQJT98765432])/,
            /([AKQJT98765432])([AKQJT98765432])([AKQJT98765432])([AKQJT98765432])\4/
        ]
        for (const reg of poMatches) {
            if (joe.match(reg) !== null) return 1
        }
        // Should always be at least high card
        return 0
    }

    function super_match(regexes, hand) {
        for(const reg of regexes) {
            if (hand.match(reg) !== null) return true
        }
        return false
    }
    /**
     * 
     * @param {String} card 
     */
    function typeStrength_p2(card) {
        let joe = [...card].sort((a, b) => {return card_strength_p2(a) - card_strength_p2(b)}).toString().replace(/,/g, "")
        // Five of a kind
        let regexes = [
            /JJJJJ/,
            /JJJJ([AKQJT98765432])/,
            /JJJ([AKQJT98765432])\1/,
            /JJ([AKQJT98765432])\1\1/,
            /J([AKQJT98765432])\1\1\1/,
            /([AKQJT98765432])\1\1\1\1/
        ]
        if (super_match(regexes, joe)) return 6
        // Four of a kind
        regexes = [
            /JJJ[AKQJT98765432][AKQJT98765432]/,
            /JJ([AKQJT98765432])\1([AKQJT98765432])/,
            /JJ([AKQJT98765432])([AKQJT98765432])\2/,
            /J([AKQJT98765432])\1\1([AKQJT98765432])/,
            /J([AKQJT98765432])([AKQJT98765432])\2\2/,
            /([AKQJT98765432])\1\1\1([AKQJT98765432])/,
            /([AKQJT98765432])([AKQJT98765432])\2\2\2/
        ]
        if (super_match(regexes, joe)) return 5
        // Full house
        regexes = [
            /J([AKQJT98765432])\1([AKQJT98765432])\2/,
            /([AKQJT98765432])\1([AKQJT98765432])\2\2/,
            /([AKQJT98765432])\1\1([AKQJT98765432])\2/
        ]
        if (super_match(regexes, joe)) return 4
        // Three of a kind
        regexes = [
            /JJ([AKQJT98765432])([AKQJT98765432])([AKQJT98765432])/,
            /J([AKQJT98765432])\1([AKQJT98765432])([AKQJT98765432])/,
            /J([AKQJT98765432])([AKQJT98765432])\2([AKQJT98765432])/,
            /J([AKQJT98765432])([AKQJT98765432])([AKQJT98765432])\3/,
            /([AKQJT98765432])\1\1([AKQJT98765432])([AKQJT98765432])/,
            /([AKQJT98765432])([AKQJT98765432])\2\2([AKQJT98765432])/,
            /([AKQJT98765432])([AKQJT98765432])([AKQJT98765432])\3\3/
        ]
        if (super_match(regexes, joe)) return 3
        // Two pair 
        regexes = [
            /([AKQJT98765432])\1([AKQJT98765432])\2([AKQJT98765432])/,
            /([AKQJT98765432])([AKQJT98765432])\2([AKQJT98765432])\3/,
            /([AKQJT98765432])\1([AKQJT98765432])([AKQJT98765432])\3/
        ]
        if (super_match(regexes, joe)) return 2
        // One pair
        regexes = [
            /J([AKQJT98765432])([AKQJT98765432])([AKQJT98765432])([AKQJT98765432])/,
            /([AKQJT98765432])\1([AKQJT98765432])([AKQJT98765432])([AKQJT98765432])/,
            /([AKQJT98765432])([AKQJT98765432])\2([AKQJT98765432])([AKQJT98765432])/,
            /([AKQJT98765432])([AKQJT98765432])([AKQJT98765432])\3([AKQJT98765432])/,
            /([AKQJT98765432])([AKQJT98765432])([AKQJT98765432])([AKQJT98765432])\4/
        ]
        if (super_match(regexes, joe)) return 1
        // Should always be at least high card
        return 0
    }

    function card_strength_p1(card) {
        if(card === "A") return 14
        if(card === "K") return 13
        if(card === "Q") return 12
        if(card === "J") return 11
        if(card === "T") return 10
        return Number(card)
    }

    function card_strength_p2(card) {
        if(card === "A") return 14
        if(card === "K") return 13
        if(card === "Q") return 12
        if(card === "J") return 1
        if(card === "T") return 10
        return Number(card)
    }

    function evaluate_hand_p1(hand) {
        let strength = typeStrength_p1(hand)
        for (const character of hand) {
            strength = strength * 15 + card_strength_p1(character)
        }
        return strength
    }

    function evaluate_hand_p2(hand) {
        let strength = typeStrength_p2(hand)
        for (const character of hand) {
            strength = strength * 15 + card_strength_p2(character)
        }
        return strength
    }

    function part1(content) {
        let hands = []
        for(const line of content.split("\n")) {
            if(line.match(/([AKQJT98765432])([AKQJT98765432])([AKQJT98765432])([AKQJT98765432])([AKQJT98765432]) [0-9]+/) !== null) {
                hands.push([evaluate_hand_p1(line.slice(0, 5)), Number(line.slice(6))])
            }
        }
        hands.sort((a, b) => {
            return a[0] - b[0]
        })
        let winnings = 0
        for (const i in hands) {
            winnings = winnings + (hands[i][1] * (Number(i) + 1))
        }
        setpart1Sum(winnings)
        console.log(hands)
    }

    function part2(content) {
        let hands = []
        for(const line of content.split("\n")) {
            if(line.match(/([AKQJT98765432])([AKQJT98765432])([AKQJT98765432])([AKQJT98765432])([AKQJT98765432]) [0-9]+/) !== null) {
                hands.push([evaluate_hand_p2(line.slice(0, 5)), Number(line.slice(6)), line.slice(0, 5), typeStrength_p2(line.slice(0, 5))])
            }
        }
        hands.sort((a, b) => {
            return a[0] - b[0]
        })
        let winnings = 0
        for (const i in hands) {
            winnings = winnings + (hands[i][1] * (Number(i) + 1))
        }
        console.log(hands)
        setpart2Sum(winnings)
    }

    return <div className='column-flexer'>
        <h3>Star 7</h3>
        <h4>Part 1</h4>
        <textarea onChange={(e) => part1(e.target.value)}/>
        <p>The sum is {part1Sum}.</p>
        <h4>Part 2</h4>
        <textarea onChange={(e) => part2(e.target.value)}/>
        <p>The sum is {part2Sum}.</p>
    </div>
}