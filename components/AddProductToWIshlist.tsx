export type AddProductToWishlistProps = {
  onAddToWishlist: () => void;
  onRequestClose: () => void;
};

export const AddProductToWishlist = ({
  onAddToWishlist,
  onRequestClose,
}: AddProductToWishlistProps) => {
  return (
    <span>
      Do you wish to add the product to your favorites?
      <button onClick={onAddToWishlist}>Yes</button>
      <button onClick={onRequestClose}>No</button>
    </span>
  );
};
