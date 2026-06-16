import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

export default function FullScreenGallery({onClose, photos, openOn}: {onClose: () => void; photos: string[]; openOn: number}) {
    const [currentIndex, setCurrentIndex] = useState(openOn);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                onClose();
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [onClose]);

    useEffect(() => {
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = "";
        };
    }, []);

    return (
        <div className="fixed inset-0 bg-black/90 z-1000" onClick={onClose}>
            <div className="h-full w-full flex flex-col items-center justify-between">
                <div className="bg-gray-800/80 p-4 px-8 w-full flex flex-row justify-between items-center text-white" onClick={(e) => e.stopPropagation()}>
                    <h2 className="text-2xl">Casa</h2>
                    <div className="flex flex-row gap-12 items-center">
                        <h2 className="text-2xl">{currentIndex + 1} / {photos.length}</h2>
                        <div className="hover:bg-gray-600 text-3xl p-2 px-4 rounded-3xl" onClick={onClose}>
                            <IoMdClose className="" />
                        </div>
                    </div>
                </div>

                <div className="flex flex-row items-center justify-between w-full p-4 px-8">
                    <button className="text-white bg-white/50 rounded-full p-2 flex justify-center items-center 
                     hover:bg-white/70 hover:scale-105 cursor-pointer"
                     onClick={(e) => {
                         e.stopPropagation();
                         setCurrentIndex((currentIndex - 1 + photos.length) % photos.length);
                     }}>
                        <FaChevronLeft className="text-4xl"/>
                    </button>

                    <img src={photos[currentIndex]} alt="Foto principal" className="max-w-full max-h-full object-contain" onClick={(e) => e.stopPropagation()} />

                    <button className="text-white bg-white/50 rounded-full p-2 flex justify-center items-center 
                     hover:bg-white/70 hover:scale-105 cursor-pointer"
                     onClick={(e) => {
                         e.stopPropagation();
                         setCurrentIndex((currentIndex + 1) % photos.length);
                     }}>
                        <FaChevronRight className="text-4xl"/>
                    </button>
                </div>

                <div className="bg-gray-800 p-4 w-full flex flex-row gap-8 items-center justify-center" onClick={(e) => e.stopPropagation()}>
                    {photos.map((photo, index) => (
                        <img 
                            key={index}
                            src={photo}
                            alt={`Foto ${index + 1}`}
                            className={`max-w-48 max-h-24 object-contain cursor-pointer border-2 hover:border-white transition 
                                ${currentIndex === index ? 'border-orange-500' : ''}`}
                            onClick={() => {
                                setCurrentIndex(index);
                            }}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}