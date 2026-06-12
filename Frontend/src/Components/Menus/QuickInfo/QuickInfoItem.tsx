import type { IconType } from "react-icons";

export default function QuickInfoItem({Icon, text}: {Icon: IconType, text: string}) {
    return(
        <div className="flex flex-row items-center justify-center gap-4 flex-wrap text-(--text-dark)">
            <Icon className="text-2xl md:text-4xl lg:text-5xl shrink-0"/>
            <p className="font-semibold text-md md:text-xl lg:text-2xl">{text}</p>
        </div>
    );
}