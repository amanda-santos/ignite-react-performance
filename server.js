module.exports = () => {
  const data = {
    products: [],
  };

  for (let i = 0; i < 1000; i++) {
    data.products.push({
      id: i,
      title: `T-Shirt ${i}`,
      price: i * 100,
    });
  }

  return data;
};
