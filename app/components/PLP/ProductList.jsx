import ProductCard from './ProductCard';
import { Grid } from '@mui/material';

const getProducts = async () => {
  const response = await fetch('https://fakestoreapi.com/products');
  const data = await response.json();

  return data;
};

const ProductList = async () => {
  const products = await getProducts();
  return (
    <Grid container spacing={1}>
      {products.map((product) => (
        <ProductCard
          key={product?.id}
          id={product?.id}
          imageSrc={product?.image}
          title={product?.title}
          price={product?.price}
          ratingValue={product?.rating?.rate}
          totalRatings={product?.rating?.count}
        />
      ))}
    </Grid>
  );
};

export default ProductList;
