import Link from 'next/link';
import { Grid } from '@mui/material';
import { Card } from '@mui/material';
import { CardMedia } from '@mui/material';
import { CardContent } from '@mui/material';
import { Typography } from '@mui/material';

const ProductCard = ({
  id,
  imageSrc,
  title,
  price,
  ratingValue,
  totalRatings,
}) => {
  return (
    <Grid item xs={6} sm={4} md={3} lg={2}>
      <Link href={`/products/${id}`}>
        <Card>
          <CardMedia
            // sx={{ height: 150, objectFit: 'contain' }}
            className="h-40 object-contain mt-4"
            component="img"
            image={imageSrc}
            title={title}
          />
          <CardContent>
            <Typography noWrap variant="subtitle1">
              {title}
            </Typography>
            <Typography variant="subtitle2">{`$${price}`}</Typography>
            <Typography variant="subtitle2">{`Rating: ${ratingValue} (${totalRatings})`}</Typography>
          </CardContent>
        </Card>
      </Link>
    </Grid>
  );
};

export default ProductCard;
