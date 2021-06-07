import React, { useContext } from 'react';
import { makeStyles, fade } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import icons from '../utils/typesImg'
import { DataContext } from '../utils/context'
import Paper from '@material-ui/core/Paper';
import { Autorenew, CenterFocusStrong } from '@material-ui/icons';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 180,
    flex: "1 0 33.33333%",
    marginTop: "10%",
    paddingBottom: "5"
  },
  container : {
    display : "flex",
    justifyContent : "center"
  },
  a: {
      textDecoration: "None"
  },
  header : {
      textAlign: 'center'
  },
  media: {
    height: 0,
    paddingTop: '64.25%', // 16:9
  },
  content : {
      fontSize: 13.5,
      width: 200, 
      height: "auto",
      maxWidth: 1000,
      objectFit : "contain",

  },
  type : {
    maxWidth: 1000,
    objectFit : "contain",
  }
}));

export default function RecipeReviewCard(props) {
  const classes = useStyles();
  const { name, imgSrc, types } = props;
  const { data } = useContext(DataContext);
  

  return (
    <div >
    {
        name && (
                <Card className={classes.root}>
                  <div classname={classes.container}>
           
                  <InfoOutlinedIcon/>
           
                  </div>
                    <CardHeader
                        className={classes.header}
                        title={name.charAt(0).toUpperCase() + name.slice(1)}
                    />
                    <CardMedia
                        className={classes.media}
                        image={imgSrc[0]}
                        title="Portrait"
                    />
                    <CardContent className={classes.content}>
                        <div >
                        <div className={classes.type}>
                        {types && types.map((type, i) => <img className={classes.types} key={i} className="typeIcons" src={icons[type]} alt={type}></img>)}
                        </div>
                        </div>
                    </CardContent>
                </Card>

            )
    }
    </div>
  );
}
