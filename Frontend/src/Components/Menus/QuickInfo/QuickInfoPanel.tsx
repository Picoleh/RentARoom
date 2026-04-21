import { FaBed, FaRulerCombined, FaShower } from "react-icons/fa";
import QuickInfoItem from "./QuickInfoItem"
import { MdOutlinePets } from "react-icons/md";
import { FaToiletsPortable, FaWifi } from "react-icons/fa6";

export default function QuickInfoPanel() {
    return (
        <div className="grid grid-cols-3 grid-rows-2 gap-x-16 gap-y-8 p-8 rounded-md">
            <QuickInfoItem Icon={FaRulerCombined} text="20m²" />
            <QuickInfoItem Icon={FaBed} text="4 Quartos"/>
            <QuickInfoItem Icon={FaShower} text="2 Banheiros"/>
            <QuickInfoItem Icon={MdOutlinePets} text="Pets Permitidos"/>
            <QuickInfoItem Icon={FaWifi} text="WiFi Disponível"/>
            <QuickInfoItem Icon={FaToiletsPortable} text="Mobilhado"/>
        </div>
    );
}