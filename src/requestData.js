import data from '../src/data/Books.json';

export const requestData = () => {
    return new Promise((resolve, reject) => {
        resolve(data);
    });
};
