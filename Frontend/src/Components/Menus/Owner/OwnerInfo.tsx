export default function OwnerInfo() {
  return (
    <div className="bg-(--bg-dark) text-(--text-light) p-6 md:p-8 lg:p-10 flex flex-col md:flex-row gap-4 rounded-3xl w-full mt-auto">
        <div className="shrink-0 self-start">
            <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png" className="rounded-full w-24 h-24 md:w-32 md:h-32 lg:w-44 lg:h-44"/>
        </div>

        <div>
            <h2 className="text-2xl font-bold">Axel Seifert</h2>
            <p className="text-(--text-gray)">Property Owner</p>
            <p className="mt-2">Axel is an experienced owner, known for his hospitality and attention to detail. He has a passion for providing comfortable and memorable stays for his guests.</p>
        </div>
    </div>
  );
}