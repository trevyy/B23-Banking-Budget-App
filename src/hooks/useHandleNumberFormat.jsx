const handleNumberFormat = (num) => {
    return Intl.NumberFormat("en-US", { maximumFractionDigits: 2 }).format(num);
}

export default handleNumberFormat;