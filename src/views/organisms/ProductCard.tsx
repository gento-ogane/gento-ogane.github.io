import * as React from 'react';
import {
  Card as OriginalCard,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Box
} from '@material-ui/core';
import styled from 'styled-components';

interface Props {
  image: string;
  title: string;
  detail: string;
}

const ProductCard: React.FC<Props> = ({ image, title, detail }) => {
  return (
    <Box m={5}>
      <Card>
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
    </Box>
  );
};

export const Card = styled(OriginalCard)`
  width: calc(100vw / 4);
`;

export default ProductCard;
