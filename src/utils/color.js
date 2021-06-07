import axios from 'axios'
const URL = 'https://pokeapi.co/api/v2/pokemon-species'

/**
 * This module contains the colors that I've chosen for each pokemon as well as a function
 * that makes an API call to retreive the colour of the pokemon based on their species
 */

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