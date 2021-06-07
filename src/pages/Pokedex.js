import React from 'react'

const Pokedex = () => {
    const [ query, setQuery ] = React.useState(''); 

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
          .get(`${URL}/${query.toLocaleLowerCase()}`)
          .then(res => {
            const result = res.data
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
