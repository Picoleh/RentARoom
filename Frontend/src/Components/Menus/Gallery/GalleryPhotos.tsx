const photos = [
  "https://www.jacksonsquareshopping.co.uk/wp-content/uploads/2016/12/placeholder-1920x1080-copy-3.png",
  "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80",
];

export default function GalleryPhotos() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-full rounded-3xl overflow-hidden">
            {/* Principal */}
            <div className="md:col-span-2 md:row-span-2">
                <img src={photos[0]} alt="Foto principal" className="w-full h-full object-cover"/>
            </div>

            {/* Direita topo */}
            <div>
                <img src={photos[1]} alt="Foto 2" className="w-full h-full object-cover"/>
            </div>

            <div>
                <img src={photos[2]} alt="Foto 3" className="w-full h-full object-cover"/>
            </div>

            {/* Direita baixo */}
            <div>
                <img src={photos[3]} alt="Foto 4" className="w-full h-full object-cover"/>
            </div>

            <div className="relative">
                <img src={photos[4]} alt="Foto 5" className="w-full h-full object-cover"/>

                {/* opcional */}
                {photos.length > 5 && (
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <span className="text-white font-semibold">
                    +{photos.length - 5} fotos
                    </span>
                </div>
                )}
            </div>

        </div>
    );
}