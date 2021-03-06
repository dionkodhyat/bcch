import React, { useState } from 'react';
import PokemonInfo from '../components/PokemonInfo'
import PokemonCard from '../components/PokemonCard'
import NavBar from '../components/NavBar'
import { DataContext } from '../utils/context'

import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

/*
  The component is a parent component of the two other main pokemon components. It has the PokemonCard which contains a brief summary about the Pokemon and when clicked will
  launch a modal that contains the full information about the Pokemon
*/

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: "15%"

    },
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
    
    },
  }));
  


const Pokemon = (props) => {

    const { data, setData } = React.useContext(DataContext)
    const value = React.useMemo(() => ({ data: props, setData }), [props, setData]);
 
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
  
    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    return (
        <div className={classes.root}>
            <a onClick={handleOpen}>
                <PokemonCard name={props.name} imgSrc={props.imgSrc} types={props.types} />
            </a>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
            timeout: 500,
            }}>
            <Fade in={open}>
                <PokemonInfo name={props.name}
                                    id={props.id} 
                                    imgSrc={props.imgSrc} 
                                    types={props.types} 
                                    height={props.height} 
                                    weight={props.weight} 
                                    abilities={props.abilities}
                                    color={props.color}
                                    stats={props.stats}/>
            </Fade>
            </Modal>
        </div>
    )
}

export default Pokemon
