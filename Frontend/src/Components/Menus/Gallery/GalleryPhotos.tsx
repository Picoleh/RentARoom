const photos = [
  "https://www.jacksonsquareshopping.co.uk/wp-content/uploads/2016/12/placeholder-1920x1080-copy-3.png",
  "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80",
];

export default function GalleryPhotos() {
    return (
        <div className="grid grid-cols-5 bg-amber-100 h-full gap-4">
            <div className="col-span-3 min-h-0">
                <img src={photos[0]} alt="Foto 1" className="w-full h-full object-cover rounded-lg" />
            </div>
            <div className="col-span-2 min-h-0">
                <img src={photos[0]} alt="Foto 2" className="w-full h-full object-cover rounded-lg mb-4" />
            </div>
        </div>
    );
}