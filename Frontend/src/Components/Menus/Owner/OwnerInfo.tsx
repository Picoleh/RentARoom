export default function OwnerInfo() {
  return (
    <div className="bg-(--bg-dark) text-(--text-light) p-6 md:p-8 lg:p-10 flex flex-col md:flex-row md:justify-between gap-4 rounded-lg lg:mx-20 xl:mx-40">
        <div className="shrink-0 self-center">
            <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png" className="rounded-2xl md:rounded-full w-32 h-32 md:w-40 md:h-40 lg:w-60 lg:h-60"/>
        </div>

        <div>
            <h2 className="text-xl font-bold">Axel Seifert</h2>
            <p className="text-(--text-gray) text-sm">Property Owner</p>
            <p className="mt-2">Axel is an experienced owner, known for his hospitality and attention to detail. He has a passion for providing comfortable and memorable stays for his guests.</p>
        </div>
    </div>
  );
}