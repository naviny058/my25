import React, { useEffect, useState } from 'react'
import './style.css';

const RandomColor = () => {
    const [color, setColor] = useState('#665544')
    const [colorType, setColorType] = useState('hex')

    function RanHexColor() {
        let val = '123456789ABCDEF'
        let hex = '#'

        for (let i = 0; i < 6; i++) {
            let random = Math.floor(Math.random() * val.length)
            hex += val.charAt(random)
        }
        setColor(hex)
    }
    function RanRGBColor() {
        let r = Math.floor(Math.random() * 255)
        let g = Math.floor(Math.random() * 255)
        let b = Math.floor(Math.random() * 255)

        let rgb = `rgb(${r},${g},${b})`
        setColor(rgb)
    }
    useEffect(() => {
        if (colorType === 'hex') {
            RanHexColor()
        }
        else {
            RanRGBColor()
        }
    }, [colorType])
    return (
        <>
            <div className="full" style={{ backgroundColor: color }}>
                <div className="btn">
                    <button onClick={() => setColorType('hex')}>Hex Color</button>
                    <button onClick={() => setColorType('rgb')}>RGB Color</button>
                    <button onClick={colorType === 'hex' ? RanHexColor : RanRGBColor}>Random Color</button>
                </div>
                <h3>{color}</h3>
                <h1>hii</h1>
            </div>
        </>
    )
}

export default RandomColor