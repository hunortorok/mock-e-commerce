import { Container } from '@mui/material';
import { Paper } from '@mui/material';
import PDPDetails from '@/app/components/PDP/PDPDetails';
import PDPImage from '@/app/components/PDP/PDPImage';

const getProduct = async (productId) => {
  const response = await fetch(
    `https://fakestoreapi.com/products/${productId}`
  );
  const data = await response.json();

  return data;
};
export default async function Products({ params }) {
  const productData = await getProduct(params?.productId);
  return (
    <Container>
      <Paper className="flex flex-row justify-center">
        <PDPImage src={productData?.image} alt={productData?.title} />
        <PDPDetails
          title={productData?.title}
          description={productData?.description}
          price={productData?.price}
          category={productData?.category}
          ratingData={productData?.rating}
        />
      </Paper>
    </Container>
  );
}
