import axios from 'axios';

export const getCards = (name, multiverseid) => {
    const url =`/cards/${name}, ${multiverseid}`;
    return axios.get(url);
}