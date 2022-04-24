import dynamic from "next/dynamic";
import { memo, useState } from "react";
import { AddProductToWishlistProps } from "./AddProductToWIshlist";
// import { AddProductToWishlist } from "./AddProductToWIshlist";

const AddProductToWishlist = dynamic<AddProductToWishlistProps>(
  () => {
    return import("./AddProductToWIshlist").then(
      (mod) => mod.AddProductToWishlist
    );
  },
  {
    loading: () => <span>Loading...</span>,
  }
);

type ProductItemProps = {
  product: {
    id: number;
    title: string;
    price: number;
    priceFormatted: string;
  };
  onAddToWishlist: (id: number) => void;
};

const ProductItemComponent = ({
  product,
  onAddToWishlist,
}: ProductItemProps) => {
  const [isAddingToWishlist, setIsAddingToWishlist] = useState(false);

  return (
    <div>
      <h1>Product Item - {product.id}</h1>
      <p>{product.title}</p>
      <p>{product.priceFormatted}</p>

      <button onClick={() => setIsAddingToWishlist(true)}>
        Add to favorites
      </button>

      {isAddingToWishlist && (
        <>
          <br />
          <AddProductToWishlist
            onAddToWishlist={() => onAddToWishlist(product.id)}
            onRequestClose={() => setIsAddingToWishlist(false)}
          />
        </>
      )}
    </div>
  );
};

export const ProductItem = memo(
  ProductItemComponent,
  (prevProps, nextProps) => {
    return Object.is(prevProps.product, nextProps.product);
  }
);
