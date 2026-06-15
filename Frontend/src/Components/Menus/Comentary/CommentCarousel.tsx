import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { IoStar } from "react-icons/io5";

type Comment = {
  id: number;
  name: string;
  location: string;
  text: string;
  rating: number;
};

const comments: Comment[] = [
  {
    id: 1,
    name: "Mariana Costa",
    location: "São Paulo, SP",
    text: "A casa superou nossas expectativas. Tudo muito limpo, confortável e com uma vista incrível para o jardim.",
    rating: 5,
  },
  {
    id: 2,
    name: "Rafael Lima",
    location: "Campinas, SP",
    text: "Ambiente silencioso, decoração elegante e atendimento impecável. Voltaremos com certeza.",
    rating: 5,
  },
  {
    id: 3,
    name: "Juliana Martins",
    location: "Rio de Janeiro, RJ",
    text: "Excelente localização e espaço muito aconchegante para família. As fotos refletem exatamente o local.",
    rating: 4,
  },
];

export default function CommentsCarousel() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % comments.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + comments.length) % comments.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className=" h-full bg-(--bg-light-100) rounded-3xl p-4">
      <div className="w-full h-full">

        <div className="relative overflow-hidden rounded-3xl bg-(--bg-light) shadow-xl">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {comments.map((comment) => (
              <div key={comment.id} className="w-full shrink-0 p-4 px-12">
                <div className="flex flex-col lg:flex-row items-start justify-start gap-2 lg:gap-8 border-b border-(--bg-light-300) pb-4 mb-4">
                  <div className="flex flex-col">
                    <h3 className="text-lg font-semibold text-(--text-dark)">
                      {comment.name}
                    </h3>
                    <p className="text-sm text-(--text-gray)">{comment.location}</p>
                  </div>
                  <div className="flex flex-row gap-1">
                    {Array.from({ length: comment.rating }).map((_, index) => (
                      <IoStar key={index} className="h-5 w-5 fill-current text-yellow-400" />
                    ))}
                  </div>
                </div>

                <p className="text-lg leading-8 text-(--text-dark) wrap-break-word">
                  “{comment.text}”
                </p>
              </div>
            ))}
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-1 top-1/2 -translate-y-1/2 rounded-full bg-(--bg-light) p-2 border-2 border-(--bg-dark-100) shadow-md transition hover:scale-105"
          >
            <FaChevronLeft className="h-4 w-4 text-(--text-dark-100)" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full bg-(--bg-light) p-2 border-2 border-(--bg-dark-100) shadow-md transition hover:scale-105"
          >
            <FaChevronRight className="h-4 w-4 text-(--text-dark-100)" />
          </button>
        </div>

        <div className="mt-4 flex justify-center gap-2">
          {comments.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-2.5 rounded-full transition-all ${
                current === index ? "w-8 bg-(--bg-dark)" : "w-2.5 bg-(--bg-light-300)"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
