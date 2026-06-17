import { FaWhatsapp } from "react-icons/fa";

export default function CTACard() {
    return (
        <div className="fixed bottom-6 right-6 flex flex-col rounded-full gap-3">
            <a href="" className="group bg-green-500 hover:bg-green-600 text-white rounded-full p-4 flex justify-center items-center">
                <FaWhatsapp className="text-4xl shrink-0"/>
                <span className="w-0 overflow-hidden whitespace-nowrap opacity-0 text-lg font-semibold
                 group-hover:w-40 group-hover:opacity-100 group-hover:ml-3 transition-all duration-300">
                    Chat on WhatsApp
                </span>
            </a>
        </div>
    );
}