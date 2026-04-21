export default function TopBarMenuButton({text, href}: {text: string, href: string}) {
    return (
        <a href={href} className="p-2 rounded-3xl border px-5 border-black hover:bg-orange-600"> {text} </a>
    )
}