import React, { useState, useContext, useEffect } from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import SearchIcon from '@material-ui/icons/Search';
import { DataContext } from '../utils/context'
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import { refactorData } from '../utils/refactor'
import { getColor } from '../utils/color'
import axios from 'axios';

const URL = 'https://pokeapi.co/api/v2/pokemon';


const useStyles = makeStyles((theme) => ({ 
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(1),
    },
    title: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  
  }));
  


const NavBar = () => {
    const classes = useStyles();
    const [ query, setQuery ] = useState('');
    const { data, setData } = useContext(DataContext)



    const handleSubmit =  (e) => {
      e.preventDefault();
      axios
      .get(`${URL}/${query.toLocaleLowerCase()}`)
      .then(async (res) => {
        const result = refactorData(res.data);
        const colorResult = await getColor(result.species);
        setData([{ name : result.name,
                    id : result.id, 
                    imgSrc : result.imgSrc, 
                    types : result.types,
                    stats : result.stats,
                    abilities : result.abilities, 
                    height : result.height, 
                    weight : result.weight,
                    color : colorResult.data.color.name
                  }]);
      })
      .catch(err => {
        setData([])
      })
    }



    return (
      <div className={classes.grow}>
        <AppBar position="static" color='default'>
          <Toolbar>
                <Typography className={classes.title} variant="h6" noWrap>
                    Pokedex
                </Typography>
                <div className={classes.search}>
                      <form onSubmit={handleSubmit}>
                        <Input
                            type="text"
                            id="input-with-icon-adornment"
                            startAdornment={
                            <InputAdornment position="start">
                                <SearchIcon />
                            </InputAdornment>
                            }
                            placeholder="Search Pokemon"
                            value={query}
                            onChange={event => setQuery(event.target.value)}
                            required={true}
                        />
                        </form>  
                </div>
                <div className={classes.grow} />
          </Toolbar>
        </AppBar>
      </div>
    )}

export default NavBar
