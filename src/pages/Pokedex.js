import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar'
import { DataContext } from '../utils/context'
import Pokemon from '../components/Pokemon'
import { makeStyles } from '@material-ui/core/styles';
import '../style/style.css'
import { refactorData } from '../utils/refactor'
import { getColor } from '../utils/color'

import axios from 'axios';

const URL = 'https://pokeapi.co/api/v2/pokemon';


/**
 * This is the main hub of the app. It contains the search bar and where the query results are displayed.
 * Additionally in the beginning of the app, there is a function that retrieves pokemons to
 * display
 */


const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
  
  },
  container: {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
    flexDirection: "row"
  }
}));




const Pokedex = () => {

   const [ data, setData ] = useState([]);
   const value = { data, setData }
   const [ initialVal, setInitialVal ] = useState('');
   const classes = useStyles();

   

   useEffect(() => {
     const promises = new Array(8)
                                  .fill()
                                  .map((value) => { 
                                    const randomIndex = Math.floor(Math.random() * 1000) + 1;
                                    return axios.get(`${URL}/${randomIndex}`)
                                  });

    Promise.all(promises)
                        .then(async (responseList) => {
                          const dataList = responseList.map(res => res.data)
                          const dataArray = []
                          let refactorDataList = dataList.map(async (data) => {
                              const result = refactorData(data);
                              const colorResult = await getColor(data.species)
                              return ( { name : result.name,
                                id : result.id, 
                                imgSrc : result.imgSrc, 
                                types : result.types,
                                stats : result.stats,
                                abilities : result.abilities, 
                                height : result.height, 
                                weight : result.weight,
                                color : colorResult.data.color.name
                              })
                          })
                          const result = await Promise.all(refactorDataList.map(async (item) => {
                            await item
                            return item;
                          }))
                          console.log(result)
                          setData(result);

                        })

   }, [])

   useState(() => {
     console.log(`pokemon array after ${initialVal}`)
     setData(initialVal)
    setData(initialVal)
   }, [initialVal])


    return (
      <DataContext.Provider value={value}>
        <div>
          <NavBar/>
          <div className={classes.container}>
          {data && data.map(value => <Pokemon name={value.name}
                                              id={value.id} 
                                              imgSrc={value.imgSrc} 
                                              types={value.types} 
                                              height={value.height} 
                                              weight={value.weight} 
                                              abilities={value.abilities}
                                              color={value.color}
                                              stats={value.stats}/>)}
        </div>
        </div>
        </DataContext.Provider>
    )
}

export default Pokedex
