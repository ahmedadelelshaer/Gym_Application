import React, { useState } from 'react';
import image from 'E:/Fitness_app_React/src/assets/body-part.png';

const HorizontalScrollBar = ({ data }) => {
    const [startIndex, setStartIndex] = useState(0);
    const itemsPerPage = 3;

    const handlePrev = () => {
        if (startIndex > 0) {
            setStartIndex(startIndex - itemsPerPage);
        }
    };

    const handleNext = () => {
        if (startIndex + itemsPerPage < data.length) {
            setStartIndex(startIndex + itemsPerPage);
        }
    };

    const displayedItems = data.slice(startIndex, startIndex + itemsPerPage);

    return (
        <div className="horizontal-scroll-container">
            <button onClick={handlePrev} disabled={startIndex === 0}>
                &lt; Prev
            </button>
            <div className="horizontal-scrollbar">
                {displayedItems.map((item, index) => (
                    <div className="bodylist" key={index}>
                        <img src={image} alt="body part" />
                        <h7 className="bodylist-title">{item}</h7>
                    </div>
                ))}
            </div>
            <button onClick={handleNext} disabled={startIndex + itemsPerPage >= data.length}>
                Next &gt;
            </button>
        </div>
    );
};

export default HorizontalScrollBar;
