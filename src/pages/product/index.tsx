import { Link } from "react-router";
import { FiArrowLeft } from "react-icons/fi";
import { BsCartPlus } from "react-icons/bs";

export function Product() {
  return (
    <div>
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
              src="/pexels-pixabay-163036.jpg"
              alt="Foto do produto"
            />
          </div>
          <div className="ml-5 w-full max-md:ml-0 max-md:px-2 max-md:mt-4">
            <h1 className="text-3xl font-semibold max-md:text-2xl">
              Ração Premium para Cães Adultos - Frango e Arroz
            </h1>
            <p className="my-5 text-2xl font-semibold max-md:my-3 max-md:text-xl">
              R$120,00
            </p>
            <p className="text-cinza-text-body font-medium sm:text-left max-md:text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
              officiis ea pariatur qui, accusantium fugit est voluptas quo,
              possimus nihil commodi? Aut quidem in eum sapiente dolores! Id,
              vitae aspernatur?
            </p>
            <hr className="text-cinza-text-carrinho my-5 max-md:my-4" />
            <div className="max-md:px-0">
              <button className="flex w-full items-center justify-center bg-laranja-carrinho-icone-bg p-2.5 rounded-md cursor-pointer hover:bg-amber-600 delay-100">
                <BsCartPlus />
                <p className="ml-1">Adicionar ao Carrinho</p>{" "}
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
