import React, { useContext } from 'react'
import icons from '../utils/typesImg2'
import { DataContext } from '../utils/context'
import '../style/style.css'
import { makeStyles } from '@material-ui/core'

/** 
 * This component is specifically for Pokemon's attributes and bio
 * **/

const useStyles = makeStyles(() => ({
    root : {
        display : "flex",
        flexDirection : "row",
        justifyContent : "center"
    },
    label : {
        flexBasis: '100%',
        textAlign: "right"
    },
    value : {
        flexBasis: '100%'
    },
    img : {
        height: 15,
        width: 70
    }
}))

const Bio = (props) => {
    const { data } = useContext(DataContext)
    const {id, types, height, weight, abilities} = props
    const labels = ['ID', 'Type', 'Height', 'Weight', 'Abilities'];
    const classes = useStyles();

    const labelsInDiv = labels.map((label, i) => {
        return <div key={i}><b>{label}</b></div>
    })

    const colonDivs = new Array(5).fill(' ').map(colon => <div><b>{' '}{' : '}{' '}</b></div>)
  


    return (
        <>
        {
        data &&
        <div className={classes.root}>
            <div className={classes.label}>
                {labelsInDiv}
            </div>
            <divs>
                {colonDivs}
            </divs>
            <div className={classes.value}>
                {id && <div>#{' ', id}</div>}
                {types && types.map(type => <><img className={classes.img} src={icons[type]}/></>)}
                {height && <div> {height}cm</div>}
                {weight && <div> {weight}kg</div>}
                {abilities && <div> {abilities.join(', ')}</div> }  
            </div>
        </div>
        }
        </>
    )
}

export default Bio
