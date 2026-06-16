import { FaBed, FaRulerCombined, FaShower } from "react-icons/fa";
import QuickInfoItem from "./QuickInfoItem"
import { MdOutlinePets } from "react-icons/md";
import { FaToiletsPortable, FaWifi } from "react-icons/fa6";

export default function QuickInfoPanel() {
    return (
        <div className="grid grid-cols-2 grid-rows-3 md:grid-cols-3 md:grid-rows-2 gap-x-8 gap-y-8 py-4 md:py-6 lg:py-8 justify-center mt-auto h-full">
            <QuickInfoItem Icon={FaRulerCombined} text="20m²" />
            <QuickInfoItem Icon={FaBed} text="4 Bedrooms"/>
            <QuickInfoItem Icon={FaShower} text="2 Bathrooms"/>
            <QuickInfoItem Icon={MdOutlinePets} text="Pets Allowed"/>
            <QuickInfoItem Icon={FaWifi} text="WiFi Available"/>
            <QuickInfoItem Icon={FaToiletsPortable} text="Furnished"/>
        </div>
    );
}