import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Button,
  CardActions,
} from '@material-ui/core';

interface Props {
  image: string;
  title: string;
  detail: string;
}

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});
const ProductCard: React.FC<Props> = props => {
  return (
    <Card> 
      <CardActionArea>
        <CardMedia
          component='img'
          alt='Contemplative Reptile'
          height='220'
          src={props.image}
          title='Contemplative Reptile'
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='h2'>
            {props.title}
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            {props.detail}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size='small' color='primary'>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
