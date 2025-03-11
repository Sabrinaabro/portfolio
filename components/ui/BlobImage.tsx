// BlobImage.tsx
import Image from "next/image";
import styled from "styled-components";

// Define types for the props
interface BlobImageProps {
  imageSrc: string;
}

// Styled components
const BlobContainer = styled.div`
  position: relative;
  width: 350px;
  height: 350px;
  background: #fdebc9; /* Outer background shade */
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  overflow: hidden; /* Ensure image doesn't overflow */
`;

// Blob Image with mask
const BlobShape = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  mask-image: url("/blob.svg"); /* Use local SVG for mask */
  mask-size: cover;
  -webkit-mask-image: url("/blob.svg");
  -webkit-mask-size: cover;
`;

const BlobImage: React.FC<BlobImageProps> = ({ imageSrc }) => {
  return (
    <BlobContainer>
      <BlobShape>
        <Image
          src={imageSrc}
          alt="Blob Image"
          fill
          style={{ objectFit: "cover" }}
          quality={90}
        />
      </BlobShape>
    </BlobContainer>
  );
};

export default BlobImage;
