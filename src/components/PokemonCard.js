import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import icons from '../utils/typesImg'
import { DataContext } from '../utils/context'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '12.5%',
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
  content : {
      fontSize: 13.5,
      width: 1300,
      height: "auto",
  },
}));

export default function RecipeReviewCard(props) {
  const classes = useStyles();
  const { name, imgSrc, types } = props;
  const { data } = useContext(DataContext);
  

  return (
    <>
    {
        name && (
            <div className={classes.container}>
                <Card className={classes.root}>
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
                        <div>
                        {types && types.map((type, i) => <img key={i} className="typeIcons" src={icons[type]} alt={type}></img>)}
                        </div>
                    </CardContent>
                </Card>
            </div>
            )
    }
    </>
  );
}
