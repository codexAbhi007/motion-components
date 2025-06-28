import { notFound } from "next/navigation";

interface ProductDetailsProps {
  params: Promise<{ productId: string }>;
}

//* Params ki?
//* params is a promise which resolves to give an object containing the key value as productId as key and the value which is a string

const ProductDetails = async ({ params }: ProductDetailsProps) => {
    const productId = (await params).productId
    console.log(productId)


    if(parseInt(productId) > 1000 ){
        notFound()
    }


  return <div>ProductDetails</div>;
};
export default ProductDetails;
