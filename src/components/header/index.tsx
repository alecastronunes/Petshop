import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router";

export function Header() {
  return (
    <header className="w-full px-1 border-b-2 border-cinza-borda">
      <nav className="flex w-full max-w-7xl h-14 items-center justify-between px-5 mx-auto">
        <Link to="/" className="text-azul-texto-e-bg text-2xl font-bold">
          PetShop
        </Link>
        <Link className="relative" to="/cart">
          <FiShoppingCart size={24} color="var(--color-azul-texto-e-bg)" />
          <span className="absolute -right-3 -top-3 px-2 bg-laranja-carrinho-icone-bg rounded-full w-3 h-4.3 flex items-center justify-center text-xs font-medium">
            2
          </span>
        </Link>
      </nav>
    </header>
  );
}
