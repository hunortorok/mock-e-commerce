'use client';
import { Typography } from '@mui/material';
import { Card } from '@mui/material';
import { CardHeader } from '@mui/material';
import { CardContent } from '@mui/material';
import { CardActions } from '@mui/material';
import { Button } from '@mui/material';
import { useAtomValue } from 'jotai';

const PDPDetails = ({ title, description, price, category, ratingData }) => {
  const test = useAtomValue(testNavbarAtom);
  console.log(test);
  return (
    <Card>
      <CardHeader title={title} subheader={category} />
      <CardContent>
        <Typography variant="subtitle2">{description}</Typography>
        <Typography variant="subtitle2">{`$${price}`}</Typography>
        <Typography variant="subtitle2">{`${ratingData.rate} (${ratingData.count})`}</Typography>
      </CardContent>
      <CardActions>
        <Button
          size="medium"
          onClick={() => {
            window.alert('Added to cart!');
          }}
        >
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default PDPDetails;
