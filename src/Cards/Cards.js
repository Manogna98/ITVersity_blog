import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import classes from './Cards.css'


function myFunc(bloglnk){
  window.location.href=bloglnk;
}


function ImgMediaCard(props) {
  return (
    <Card className={classes.card}>
      
        <CardMedia
          component="img"
          //alt="Contemplative Reptile"
          className={classes.media}
          
          image={props.imglink}
          title={props.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.title}
          </Typography>
          <Typography component="p">
            {props.desc}
          </Typography>
        </CardContent>
      
      <CardActions>
        <br></br>
        <Button variant="outlined" size="small" onClick={()=>{myFunc(props.bloglink)}}>
          Continue Reading
        </Button>
      </CardActions>
    </Card>
  );
}


export default ImgMediaCard;
