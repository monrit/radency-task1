export const getNiceDate = () => {
    const options = {
        month: "short",
        day: "numeric",
        year: "numeric",
    };
    const date = new Date();

    return date.toLocaleDateString("en-US", options);
};

export const getDates = (text) => {
    const regEx = /\b\d{2}\/\d{2}\/\d{4}\b/g;
    
    return text.match(regEx);
};