export default function OwnerInfo() {
  return (
    <div className="bg-gray-800 text-white p-12 rounded-lg flex flex-row justify-around mx-64">
        <div>
            <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png" className="rounded-full w-64 h-64 object-cover"/>
        </div>

        <div>
            <h2 className="text-2xl font-bold">João Silva</h2>
            <p className="text-gray-400">Proprietário</p>
            <p className="mt-2">João é um proprietário experiente, conhecido por sua hospitalidade e atenção aos detalhes. Ele tem uma paixão por oferecer uma estadia confortável e memorável para seus hóspedes.</p>
        </div>
    </div>
  );
}