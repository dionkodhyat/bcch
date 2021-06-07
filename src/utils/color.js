import axios from 'axios'
const URL = 'https://pokeapi.co/api/v2/pokemon-species'

export const getColor = (species) => {
    try {
        return axios.get(`${URL}/${species.name}`);
    } catch (err) {
        return "default"
    }
}

export const theme = {
    black : "Black",
    blue : "LightSkyBlue",
    brown : "SandyBrown",
    gray : "LightGray",
    green : "MediumSpringGreen",
    pink : "HotPink",
    purple : "MediumPurple",
    red : "OrangeRed",
    white : "Silver",
    yellow : "Gold"
}