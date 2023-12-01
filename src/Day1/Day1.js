import './Day1.css'
import { useState } from 'react'

export default function Day1() {
    let [sum, setSum] = useState(0)
    
    /**
     * 
     * @param {Event} e 
     */
    function star1(e) {
        e.preventDefault()
        const form = e.target;
        const formData = new FormData(form);
        let ourSum = 0
        for(const element of formData.get("Day1Text").split('\n')) {
            const matched = element.match(/[0-9]/g)
            console.log(matched)
            if (matched !== null) {
                console.log(matched[0] + matched.at(-1))
                ourSum = ourSum + Number(matched[0] + matched.at(-1))
            }
        }
        
        setSum(ourSum)
    }
    return (
        <div className='Day1'>
            <p> Star 1. </p>
            <form onSubmit={star1}>
                <textarea name="Day1Text"/>
                <button type="submit"> Submit </button>
            </form>
            <p> Sum of all calibration values is {sum}.</p>
        </div>
    )
}
