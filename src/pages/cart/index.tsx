import { FiTrash2 } from "react-icons/fi";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router";

export function Cart() {
  const { cart, addItemCart, removeItemCart } = useContext(CartContext);

  return (
    <div className="w-full max-w-7xl px-5 mx-auto font-inter">
      <h1 className="text-3xl font-bold mt-12">Seu carrinho</h1>
      <p className="text-cinza-text-body">
        Revise seus itens antes de finalizar a compra.
      </p>
      {cart.length > 0 && (
        <div className="mt-5 grid items-start gap-5 lg:grid-cols-[minmax(0,1fr)_20rem]">
          <div className="space-y-5">
            {cart.map((product) => (
              <section
                key={product.id}
                className="flex w-full rounded-md outline-2 outline-offset-2 outline-cinza-text-carrinho px-2.5 py-2.5"
              >
                <img
                  className="h-24 rounded-md mr-2.5 bg-cover"
                  src={product.cover}
                  alt={product.title}
                />
                <div>
                  <h4 className="font-semibold mb-1.5">{product.title}</h4>
                  <strong className="text-azul-texto-e-bg">
                    {product.price.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </strong>
                </div>
                <div className="ml-auto mr-3 flex items-center gap-3">
                  <button
                    className="text-xl outline-1 h-7 w-7 outline-cinza-borda hover:bg-cinza-borda delay-75 cursor-pointer"
                    onClick={() => removeItemCart(product)}
                  >
                    -
                  </button>
                  {product.amount}
                  <button
                    className="outline-1 h-7 w-7 outline-cinza-borda hover:bg-cinza-borda delay-75 cursor-pointer"
                    onClick={() => addItemCart(product)}
                  >
                    +
                  </button>
                  <div className="flex text-red-600">
                    <span className="flex items-center mx-auto">
                      <FiTrash2 className="ml-2.5" />
                      <p className="ml-1 cursor-pointer">Remover</p>
                    </span>
                  </div>
                </div>
              </section>
            ))}
          </div>

          <section className="h-60 w-full rounded-md outline-2 outline-offset-2 outline-cinza-text-carrinho">
            <div className="p-5">
              <h1 className="text-2xl font-semibold">Resumo do Pedido</h1>
              <div className="my-3 flex justify-between">
                <span className="text-cinza-text-body text-base font-medium">
                  Subtotal ()
                </span>
                {/* <span className="text-cinza-text-body text-base font-medium">
                  {.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </span> */}
              </div>
              <hr className="text-cinza-borda" />
              <div className="my-6 flex justify-between">
                <span className="font-semibold text-base">Total</span>
                <strong className="text-azul-texto-e-bg text-xl font-semibold">
                  R$ 189,90
                </strong>
              </div>
              <div className="flex justify-center">
                <button className="bg-laranja-carrinho-icone-bg w-full py-2 rounded-md text-amber-50 font-medium cursor-pointer shadow shadow-cinza-text-carrinho hover:scale-101 transition duration-200 ease-in-out">
                  Finalizar Compra
                </button>
              </div>
            </div>
          </section>
        </div>
      )}
      {cart.length === 0 && (
        <h1 className="flex text-3xl justify-center items-center flex-col mt-30">
          Ops... Seu carrinho está vazio!!!
          <Link to="/" className="text-2xl text-azul-texto-e-bg font-semibold">
            Acessar produtos
          </Link>
        </h1>
      )}
    </div>
  );
}
