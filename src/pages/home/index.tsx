import { BsCartPlus } from "react-icons/bs";
import { api } from "../../services/api";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";

interface ProductProps {
  id: string;
  title: string;
  description: string;
  price: number;
  cover: string;
}

export function Home() {
  const [products, setProducts] = useState<ProductProps[]>([]);

  useEffect(() => {
    async function getProducts() {
      const response = await api.get("/products");
      console.log(response.data);
      setProducts(response.data);
    }
    getProducts();
  }, []);

  return (
    <div>
      <main className="w-full max-w-7xl px-5 mx-auto font-inter">
        <h1 className="text-3xl font-bold mt-8 mb-10">Produtos em Destaque</h1>
        {products.length > 0 && (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">
            {products.map((product) => (
              <section className="w-full rounded-md shadow-b-cinza-borda shadow-md">
                <img
                  className="w-full rounded-t-md max-h-70 min-h-34 mb-2"
                  src={product.cover}
                  alt="Logo do produto"
                />
                <h3 className="font-medium text-sm mt-1 px-3">
                  {product.title}
                </h3>
                <div className="flex gap-2 flex-col w-57 px-3 py-3">
                  <strong className="text-azul-texto-e-bg">
                    {product.price.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </strong>
                  <button className="hover:scale-101 transition duration-300 ease-in-out bg-laranja-carrinho-icone-bg p-1 rounded flex justify-center items-center cursor-pointer">
                    <BsCartPlus />
                    <p className="mx-1">Adicionar ao Carrinho</p>
                  </button>
                </div>
              </section>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
