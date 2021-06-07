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

export const refactorData = (data) => {
    let { id, name, sprites, height, weight, types, abilities, stats} = data;
    if (!{ name, sprites, height, weight, types, abilities, stats}) return null;
    const imgSrc = sprites.front_default;
    const refactoredTypes = refactorTypes(types);
    const refactoredAbilities = refactorAbilities(abilities);
    const refactoredStats = refactorStats(stats)
    return { id, name, imgSrc, types : refactoredTypes, abilities : refactoredAbilities, stats : refactoredStats, height, weight};
}