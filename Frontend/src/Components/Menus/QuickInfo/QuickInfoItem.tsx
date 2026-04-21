import type { IconType } from "react-icons";

export default function QuickInfoItem({Icon, text}: {Icon: IconType, text: string}) {
    return(
        <div className="flex flex-row items-center justify-center gap-4">
            <Icon size={48}/>
            <p className="font-semibold text-2xl">{text}</p>
        </div>
    );
}