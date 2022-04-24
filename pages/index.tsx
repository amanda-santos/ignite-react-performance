import type { NextPage } from "next";
import Head from "next/head";
import { FormEvent, useState } from "react";
import { SearchResults } from "../components/SearchResults";
import styles from "../styles/Home.module.css";

type Product = {
  id: number;
  title: string;
  price: number;
  priceFormatted: string;
};

type Results = {
  totalPrice: number;
  data: Product[];
};

const Home: NextPage = () => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState<Results>({
    totalPrice: 0,
    data: [],
  });

  const handleSearch = async (event: FormEvent) => {
    event?.preventDefault();

    if (!search.trim()) {
      return;
    }

    const response = await fetch(`http://localhost:3333/products?q=${search}`);
    const data = await response.json();

    const formatter = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

    const products = data.map((product: Product) => ({
      ...product,
      priceFormatted: formatter.format(product.price),
    }));

    const totalPrice = data.reduce((total: any, product: { price: any }) => {
      return total + product.price;
    }, 0);

    setResults({ totalPrice, data: products });
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Performance with React</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Search</h1>

        <form onSubmit={handleSearch}>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>

        <SearchResults results={results.data} totalPrice={results.totalPrice} />
      </main>
    </div>
  );
};

export default Home;
