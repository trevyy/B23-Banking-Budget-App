import { useState } from "react";

const handleNextPage = (list) => {
    const [startIndex, setStartIndex] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;
    const totalPages = Math.ceil(list.length / itemsPerPage);
    const endIndex = startIndex + itemsPerPage;

    const displayedUsers = list && list.slice(0).reverse().slice(startIndex, endIndex);

    const handleNext = () => {
        if (list && startIndex + itemsPerPage < list.length) {
            setStartIndex(endIndex);
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevious = () => {
        if (startIndex > 0) {
            setStartIndex(startIndex - 5);
            setCurrentPage(currentPage - 1);
        }
    };
    
    return { displayedUsers, handleNext, handlePrevious, currentPage, totalPages };
};

export default handleNextPage;