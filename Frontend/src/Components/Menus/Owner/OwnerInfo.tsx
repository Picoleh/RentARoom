export default function OwnerInfo() {
  return (
    <div className="bg-gray-800 text-white p-12 rounded-lg flex flex-row justify-around mx-64">
        <div>
            <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png" className="rounded-full w-64 h-64 object-cover"/>
        </div>

        <div>
            <h2 className="text-2xl font-bold">Axel Seifert</h2>
            <p className="text-gray-400">Property Owner</p>
            <p className="mt-2">Axel is an experienced owner, known for his hospitality and attention to detail. He has a passion for providing comfortable and memorable stays for his guests.</p>
        </div>
    </div>
  );
}