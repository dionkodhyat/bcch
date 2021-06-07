/**
 * This module is for refactoring the data that is retrieved from 
 * the fetch
 */

const refactorTypes = (types) => {
    const refactoredTypes = types.map(item => item.type.name);
    return refactoredTypes;
}

const refactorAbilities = (abilities) => {
    const refactoredAbilities = abilities.map(item => item.ability.name)
    return refactoredAbilities;
}

const refactorStats = (stats) => {
    const refactoredStats = stats.map(item => {
        const name = item.stat.name;
        const number = item.base_stat;
        return { name, number }
    });
    return refactoredStats;
}

/* Convert from decimetres to cm */
const convertHeight = (height) => {
    return parseFloat(height * 10.0);
}

const convertWeight = (weight) => {
    return parseFloat(weight / 10.0);
}

const refactorImg = (sprites) => {
    const { front_default, back_default, front_shiny, back_shiny } = sprites;
    const imgURLList = [front_default, back_default, front_shiny, back_shiny];
    return imgURLList
}

export const refactorData = (data) => {
    let { id, name, species, sprites, height, weight, types, abilities, stats} = data;
    if (!{ name, sprites, height, weight, types, abilities, stats}) return null;
    const imgSrc = refactorImg(sprites);
    const refactoredTypes = refactorTypes(types);
    const refactoredAbilities = refactorAbilities(abilities);
    const refactoredStats = refactorStats(stats)
    const convertedHeight = convertHeight(height);
    const convertedWeight = convertWeight(weight)
    return { id, name, imgSrc, species,  types : refactoredTypes, abilities : refactoredAbilities, stats : refactoredStats, height : convertedHeight, weight : convertedWeight};
}

