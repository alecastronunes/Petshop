import { FiTrash2 } from "react-icons/fi";

export function Cart() {
  return (
    <div className="w-full max-w-7xl px-5 mx-auto font-inter">
      <h1 className="text-3xl font-bold mt-12">Seu carrinho</h1>
      <p className="text-cinza-text-body">
        Revise seus itens antes de finalizar a compra.
      </p>
      <div className="flex items-start gap-5">
        <section className="flex w-3xl mt-5 px-2.5 py-2.5 rounded-md outline-1 outline-offset-2 outline-cinza-borda">
          <img
            className="w-38 h-24 rounded-md mr-2.5"
            src="https://imgs.search.brave.com/-gyEQ5nyr7LC6t0vixWeXA2_QyFxmRQJ5UaICO32jfg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9ndWlh/Y2FzYS5jb20uYnIv/d3AtY29udGVudC91/cGxvYWRzLzIwMjIv/MTEvUmFjYW8tcGFy/YS1DYWNob3Jyby1G/aWxob3Rlcy0yLWEt/MTgtTWVzZXMtUGVk/aWdyZWUuanBn"
            alt="Logo do produto"
          />
          <div>
            <h4 className="font-semibold mb-1.5">
              Ração Premium para Cães Adultos 15kg
            </h4>
            <strong className="text-azul-texto-e-bg">R$ 189,90</strong>
          </div>
          <div className="ml-auto mr-3 flex items-center gap-3">
            <button
              className="text-xl outline-1 h-7 w-7 outline-cinza-borda hover:bg-cinza-borda delay-75 cursor-pointer"
              type="button"
              aria-label="Diminuir quantidade"
            >
              -
            </button>
            <span>2</span>
            <button
              className="outline-1 h-7 w-7 outline-cinza-borda hover:bg-cinza-borda delay-75 cursor-pointer"
              type="button"
              aria-label="Aumentar quantidade"
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

        <section className=" mt-5 h-60 w-80 rounded-md outline-1 outline-offset-2 outline-cinza-borda">
          <div className="p-5">
            <h1 className="text-2xl font-semibold">Resumo do Pedido</h1>
            <div className="my-3 flex justify-between">
              <span className="text-cinza-text-body text-base font-medium">
                Subtotal (1)
              </span>
              <span className="text-cinza-text-body text-base font-medium">
                R$ 189,90
              </span>
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
    </div>
  );
}
