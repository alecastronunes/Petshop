import { Link, useParams, useNavigate } from "react-router";
import { FiArrowLeft } from "react-icons/fi";
import { BsCartPlus } from "react-icons/bs";
import { api } from "../../services/api";
import { useState, useEffect, useContext } from "react";
import { type ProductProps } from "../home";
import { type CartProps } from "../../context/CartContext";
import { CartContext } from "../../context/CartContext";
import toast from "react-hot-toast";

export function Product() {
  const [product, setProduct] = useState<ProductProps | any>();
  const { id } = useParams();
  const { addItemCart } = useContext(CartContext);
  const navigate = useNavigate();

  useEffect(() => {
    async function getProduct() {
      const response = await api.get(`/db.json`);
      const productSelected = response.data.products.find(
        (item: ProductProps) => {
          return item.id === Number(id);
        },
      );
      setProduct(productSelected);
      console.log(productSelected);
    }
    getProduct();
  }, []);

  function handleItemCart(product: CartProps) {
    toast.success("O produto foi adicionado ao carrinho!", {
      style: {
        borderRadius: 10,
        backgroundColor: "#2baf2b",
        color: "#FFF",
      },
    });
    addItemCart(product);
    navigate("/cart");
  }

  return (
    <div>
      {product && (
        <main className="w-full max-w-7xl px-5 mx-auto font-inter">
          <div className="flex mt-2.5 mb-6">
            <FiArrowLeft size={24} color="#2563EB" />
            <Link className=" text-azul-texto-e-bg font-semibold" to="/">
              Voltar para Home
            </Link>
          </div>
          <div className="flex max-md:flex-col max-md:gap-4">
            <div className="md:shrink-0 max-md:px-2">
              <img
                className="w-full rounded-xl object-cover md:w-2xl md:h-auto"
                src={product.cover}
                alt={product.title}
              />
            </div>
            <div className="ml-5 w-full max-md:ml-0 max-md:px-2 max-md:mt-4">
              <h1 className="text-3xl font-semibold max-md:text-2xl">
                {product.title}
              </h1>
              <p className="my-5 text-2xl font-semibold max-md:my-3 max-md:text-xl">
                {product.price.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </p>
              <p className="text-cinza-text-body font-medium sm:text-left max-md:text-sm">
                {product.description}
              </p>
              <hr className="text-cinza-text-carrinho my-5 max-md:my-4" />
              <div className="max-md:px-0">
                <button
                  className="flex w-full items-center justify-center bg-laranja-carrinho-icone-bg p-2.5 rounded-md cursor-pointer hover:bg-amber-600 delay-100"
                  onClick={() => handleItemCart(product)}
                >
                  <BsCartPlus />
                  <p className="ml-1">Adicionar ao Carrinho</p>{" "}
                </button>
              </div>
            </div>
          </div>
        </main>
      )}
    </div>
  );
}
