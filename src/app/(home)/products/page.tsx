import {data} from "@/data/dummy";

const ProductList = () => {
  return (
    <div>
      {data.map((product, index) => (
        <div className="" key={product.id || index}>
          <div>
            {product.name}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;