import { BsCartPlus } from "react-icons/bs";



export function Home() {
  return (
    <div>
      <main className="w-full max-w-7xl px-5 mx-auto font-inter">
        <h1 className="text-3xl font-bold mt-12 mb-4 ">Produtos em Destaque</h1>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">
          <section className="w-full rounded-md shadow-b-cinza-borda shadow-md">
            <img
              className="w-full rounded-t-md max-h-70 min-h-34 mb-2"
              src="https://imgs.search.brave.com/-gyEQ5nyr7LC6t0vixWeXA2_QyFxmRQJ5UaICO32jfg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9ndWlh/Y2FzYS5jb20uYnIv/d3AtY29udGVudC91/cGxvYWRzLzIwMjIv/MTEvUmFjYW8tcGFy/YS1DYWNob3Jyby1G/aWxob3Rlcy0yLWEt/MTgtTWVzZXMtUGVk/aWdyZWUuanBn"
              alt="Logo do produto"
            />
            <h3 className="font-medium mt-1 px-3">
              Ração Premium para Cães Adultos 15kg
            </h3>
            <div className="flex gap-2 flex-col w-57 px-3 py-3">
              <strong className="text-azul-texto-e-bg">R$ 189,90</strong>
              <button className="hover:scale-101 transition duration-300 ease-in-out bg-laranja-carrinho-icone-bg p-1 rounded flex justify-center items-center cursor-pointer">
                <BsCartPlus />
                <p className="mx-1">Adicionar ao Carrinho</p>
              </button>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
