import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { DataContext } from '../utils/context'
import { theme } from '../utils/color'
import { makeStyles, withStyles } from "@material-ui/styles";
import '../style/style.css'

const useStyles = makeStyles(theme => ({
  stat : {
    marginTop: "1%"
  }
}));


const ColouredCircularProgress = withStyles({
  root: {
    height: 10,
    borderRadius: 5,
  },
  circle : {
    color : (props) => theme[props.color]
  }
})(CircularProgress);


const CircularProgressWithLabel = (props) => {
    const { data } = useContext(DataContext);
    const classes = useStyles();

    
    return (
      <Box position="relative" display="inline-flex" className={classes.root}>
        <ColouredCircularProgress color={props.color} variant="determinate" {...props} className={classes.circle}/>
        <Box
          top={0}
          left={0}
          bottom={0}
          right={0}
          position="absolute"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Typography variant="caption" component="div" color="textSecondary">{Math.round(props.value)}</Typography>
        </Box>
        
      </Box>
      
    );
  }

CircularProgressWithLabel.propTypes = {
    /**
     * The value of the progress indicator for the determinate variant.
     * Value between 0 and 100.
     */
    value: PropTypes.number.isRequired,
};
  

const Stats = (props) => {
    const { stats } = props;
    const { data } = useContext(DataContext);
    const classes = useStyles();

    return (
        <div className="statsContainer">
            {stats && stats.map((stat, i) => {
                    return (<div key={i} className='stat'>
                                <div><CircularProgressWithLabel color={props.color} value={Number(stat.number)}/></div>
                                <div>{stat.name}</div>
                            </div>)
                })
            }
        </div>
    )
}

export default Stats
