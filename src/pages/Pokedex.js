import React from 'react'
import { refactor } from '../utils/refactor'

const Pokedex = () => {
    const [ query, setQuery ] = React.useState(''); 
    


    const handleSubmit = (e) => {
        e.preventDefault();
        axios
          .get(`${URL}/${query.toLocaleLowerCase()}`)
          .then(res => {
            const result = refactorData(res.data);
            setResult({ name : result.name,
                        id : result.id, 
                        imgSrc : result.imgSrc, 
                        types : result.types,
                        stats : result.stats,
                        abilities : result.abilities, 
                        height : result.height, 
                        weight : result.weight });
            setData({ name : result.name, types : result.types, imgSrc : result.imgSrc})
          })
          .catch(err => {
            console.log(err);
          })
      }

    return (
        <div>
            <form onSubmit={e => handleSubmit(e)}>
                <input type="text" value={query} onChange={e => setQuery(e.target.value())}></input>
                <button type="submit">Search</button>
            </form>
            
        </div>
    )
}

export default Pokedex
