export const convertToVND = (x) => {
    x = x.toLocaleString("it-IT", { style: "currency", currency: "VND" });
    return x;
};
export const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
};
