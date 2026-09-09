import { FiTrash2 } from "react-icons/fi";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router";
import toast from "react-hot-toast";

export function Cart() {
  const {
    cart,
    addItemCart,
    removeItemCart,
    total,
    removeProduct,
    cartAmount,
  } = useContext(CartContext);

  function handlePay() {
    toast.success("Compra finalizada com sucesso!!!", {
      style: {
        borderRadius: 10,
        backgroundColor: "#2baf2b",
        color: "#FFF",
      },
    });
  }

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
                className="flex w-full flex-col gap-3 rounded-md border border-cinza-text-carrinho px-2.5 py-2.5 sm:flex-row sm:items-center"
              >
                <div className="flex min-w-0 flex-1 items-center gap-3">
                  <img
                    className="h-24 w-24 rounded-md object-cover object-center sm:h-28 sm:w-28"
                    src={product.cover}
                    alt={product.title}
                  />
                  <div className="min-w-0 flex-1">
                    <h4 className="mb-1.5 font-semibold">{product.title}</h4>
                    <strong className="text-azul-texto-e-bg">
                      {product.price.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </strong>
                  </div>
                </div>

                <div className="flex w-full items-center justify-center gap-3 sm:ml-auto sm:w-auto sm:justify-end">
                  <div className="flex items-center gap-2">
                    <button
                      className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-md border border-cinza-borda text-xl hover:bg-cinza-borda"
                      onClick={() => removeItemCart(product)}
                    >
                      -
                    </button>
                    <span className="min-w-5 text-center">
                      {product.amount}
                    </span>
                    <button
                      className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-md border border-cinza-borda hover:bg-cinza-borda"
                      onClick={() => addItemCart(product)}
                    >
                      +
                    </button>
                  </div>

                  <button
                    type="button"
                    className="flex items-center justify-center gap-1 whitespace-nowrap text-red-600 transition hover:text-red-700"
                    onClick={() => removeProduct(product)}
                  >
                    <FiTrash2 className="text-base" />
                    <span className="cursor-pointer">Remover</span>
                  </button>
                </div>
              </section>
            ))}
          </div>

          <section className="h-60 w-full rounded-md outline-2 outline-offset-2 outline-cinza-text-carrinho">
            <div className="p-5">
              <h1 className="text-2xl font-semibold">Resumo do Pedido</h1>
              <div className="my-3 flex justify-between">
                <span className="text-cinza-text-body text-base font-medium">
                  Subtotal ({cartAmount})
                </span>
                <span className="text-cinza-text-body text-base font-medium">
                  {total}
                </span>
              </div>
              <hr className="text-cinza-borda" />
              <div className="my-6 flex justify-between">
                <span className="font-semibold text-base">Total</span>
                <strong className="text-azul-texto-e-bg text-xl font-semibold">
                  {total}
                </strong>
              </div>
              <div className="flex justify-center">
                <button
                  onClick={() => handlePay()}
                  className="bg-laranja-carrinho-icone-bg w-full py-2 rounded-md text-amber-50 font-medium cursor-pointer shadow shadow-cinza-text-carrinho hover:scale-101 transition duration-200 ease-in-out"
                >
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
