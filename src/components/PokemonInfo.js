import React from 'react'
import icons from '../utils/typesImg'
import Stats from './Stats'
import '../style/style.css'
import Bio from './Bio'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Carousel from 'react-material-ui-carousel'

/**
 * This component contains the full overview of a pokemon. It's the parent component of two child components that have
 * the information about the pokemon divided into
 */

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },
    container: {
        display: "flex",
        justifyContent: "center"
    },
    a: {
        textDecoration: "None"
    },
    header : {
        textAlign: 'center'
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
  }));
  


const PokemonInfo = (props) => {
    const { name, id, imgSrc, types, stats, height, weight, abilities, color} = props
    const classes = useStyles();
    return (

            <Card className={classes.root}>
                <div className={classes.header}><h2>{name && name.toUpperCase()}</h2></div>
                <Carousel>
                {imgSrc && imgSrc.map(img => <CardMedia
                                                className={classes.media}
                                                image={img}
                                                title="Portrait"
                    />)
                }
                </Carousel>
               
                <div><Bio id={id} types={types} height={height} weight={weight} abilities={abilities}/></div>
                <Stats stats={stats} color={color}/>
            </Card>

    )
}

export default PokemonInfo
