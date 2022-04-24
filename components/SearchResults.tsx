import { useCallback, useMemo } from "react";
import { ProductItem } from "./ProductItem";

type SearchResultsProps = {
  results: Array<{
    id: number;
    price: number;
    title: string;
    priceFormatted: string;
  }>;
  totalPrice: number;
};

export const SearchResults = ({ results, totalPrice }: SearchResultsProps) => {
  const onAddToWishlist = useCallback(async (id: number) => {
    console.log("Wishlist ", id);
  }, []);

  return (
    <div>
      <h1>Search Results</h1>
      <h2>{totalPrice}</h2>

      {results.map((product) => (
        <ProductItem
          key={product.id}
          product={product}
          onAddToWishlist={onAddToWishlist}
        />
      ))}
    </div>
  );
};
