export const isEmpty = (obj) => {
    if (typeof obj === 'object' && obj !== null) {
        return Object.keys(obj).length === 0;
    }
};