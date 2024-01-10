import React, { useState } from 'react'
import { FaStar } from "react-icons/fa";
import './style.css'

function Rating({ noOfStar = 5 }) {
    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(0)

    function handleClick(currentidx) {
        setRating(currentidx)
    }
    function handleMouseOver(currentidx) {
        setHover(currentidx)
    }
    function handleMouseLeave() {
        setHover(rating)
    }
    return (
        <>
            <div className="star-rating">
                {
                    [...Array(noOfStar)].map((_, index) => {
                        index += 1
                        return <FaStar
                            key={index}
                            className={index <= (hover || rating) ? 'active' : 'inactive'}
                            onClick={() => handleClick(index)}
                            onMouseMove={() => handleMouseOver(index)}
                            onMouseLeave={() => handleMouseLeave()}
                            size={40}
                        />
                    })
                }
            </div>
        </>
    )
}

export default Rating