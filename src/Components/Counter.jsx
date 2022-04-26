import { useState } from 'react'
import './styles/counter.css'


export const Counter = () => {

    const [counter, setCounter] = useState(1)
    const [max, setMax] = useState('');
 
    const handleChange = (e) => {
        let input = Number(e.target.value);
        setCounter(input)
    }

    const handleInc = () => {
        let num = Math.min(counter + 1, max || 1000);
        setCounter(num)
    }

    const handleDec = () => {
        let num = Math.max(1, counter - 1);
        setCounter(num)
    }

    const handlemax = (e) => {
        let maxval = Number(e.target.value)
        setMax(maxval)
    }

    return (
        <div>
            <div className="counter">
                <button onClick={handleDec} className='dec-btn'>-</button>
                <input className='counter-input' value={counter} onChange={handleChange} type="text"></input>
                <button onClick={handleInc} className='add-btn'>+</button>
            </div>
            <div className='initial'>
                END:
                <input type='text' onChange={handlemax} className="limit-input" value={max} /><br />
            </div>
        </div>
    )
}