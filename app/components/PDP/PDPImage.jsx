import { Card } from '@mui/material';
import { CardMedia } from '@mui/material';

const PDPImage = ({ src = '', alt = '' }) => {
  return (
    <Card className="min-w-[500px] min-h-[500px]">
      <CardMedia
        className="object-contain"
        component="img"
        image={src}
        title={alt}
      />
    </Card>
  );
};

export default PDPImage;
