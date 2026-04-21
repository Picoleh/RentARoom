import { GiTreehouse } from "react-icons/gi";
import TopBarMenuButton from "./TopBarMenuButton";

export default function TopBarMenu() {
  return (
    <nav className="bg-orange-500 p-3 flex flex-row justify-between items-center">
        <a href="#" className="flex flex-row items-center text-white gap-2 hover:text-gray-300">
          <GiTreehouse size={48}/>
          {/* <span className="text-5xl">Rent a Room</span> */}
        </a>

        <div className="text-white flex flex-row gap-4">
          <TopBarMenuButton text="Inicio" href="#" />
          <TopBarMenuButton text="Acerca de" href="#" />
          <TopBarMenuButton text="Contacto" href="#" />
        </div>
    </nav>
  )
}