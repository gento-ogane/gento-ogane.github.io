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

const ProductCard: React.FC<Props> = ({image,title,detail}) => {
  return (
    <Card style={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component='img'
          alt='Contemplative Reptile'
          height='220'
          src={image}
          title='Contemplative Reptile'
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='h2'>
            {title}
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            {detail}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ProductCard;
