import { useEffect, useState } from "react";
import { Product } from "../../types";

const useProductsFetch = () => {
  const [products, setProducts] = useState<Product[]>([]);
	const [loading, setLoading] = useState<boolean>(true);

	useEffect(() => {
		fetch('https://fakestoreapi.com/products')
			.then((res) => res.json())
			.then((res) => setProducts(res))
			.catch((err) => console.warn(err))
			.finally(() => setLoading(!loading));
	}, []);

  return {products, loading}
}

export default useProductsFetch