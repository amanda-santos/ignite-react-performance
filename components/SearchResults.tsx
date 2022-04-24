import { useCallback, useMemo } from "react";
import { List, ListRowRenderer } from "react-virtualized";
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

  const rowRenderer: ListRowRenderer = ({ index, key, style }) => {
    return (
      <div key={key} style={style}>
        <ProductItem
          product={results[index]}
          onAddToWishlist={onAddToWishlist}
        />
      </div>
    );
  };

  return (
    <div>
      <h1>Search Results</h1>
      <h2>{totalPrice}</h2>

      <List
        height={300}
        rowHeight={30}
        width={900}
        overscanRowCount={5}
        rowCount={results.length}
        rowRenderer={rowRenderer}
      />

      {/* {results.map((product) => (
        <ProductItem
          key={product.id}
          product={product}
          onAddToWishlist={onAddToWishlist}
        />
      ))} */}
    </div>
  );
};
