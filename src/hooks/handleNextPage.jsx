import { useState } from "react";

const handleNextPage = (list) => {
    const [startIndex, setStartIndex] = useState(0);
    const endIndex = startIndex + 5;
    const displayedUsers = list.slice(0).reverse().slice(startIndex, endIndex);

    const handleNext = () => {
        if (endIndex < list.length) {
            setStartIndex(endIndex);
        }
    };

    const handlePrevious = () => {
        if (startIndex > 0) {
            setStartIndex(startIndex - 5);
        }
    };
    
    return { displayedUsers, handleNext, handlePrevious };
};

export default handleNextPage;