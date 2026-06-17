import type { IconType } from "react-icons";

export default function QuickInfoItem({Icon, text}: {Icon: IconType, text: string}) {
    return(
        <div className="flex flex-row items-center justify-center border border-(--bg-dark-200) bg-(--bg-light) shadow-md rounded-3xl hover:scale-105 
         transition-transform duration-200 gap-4 flex-wrap text-(--text-dark) p-2 md:p-3 lg:p-4">
            <Icon className="text-2xl md:text-3xl lg:text-4xl shrink-0"/>
            <p className="font-semibold text-md md:text-xl lg:text-2xl">{text}</p>
        </div>
    );
}