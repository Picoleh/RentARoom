import { useEffect, useState } from "react";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
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
    <section className="w-full bg-slate-50 py-16 px-4">
      <div className="mx-auto max-w-4xl">

        <div className="relative overflow-hidden rounded-3xl bg-white shadow-xl">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {comments.map((comment) => (
              <div key={comment.id} className="min-w-full p-8 md:p-12">
                <div className="mb-6 flex gap-1">
                  {Array.from({ length: comment.rating }).map((_, index) => (
                    <IoStar key={index} className="h-5 w-5 fill-current text-yellow-400" />
                  ))}
                </div>

                <p className="text-lg leading-8 text-slate-700">
                  “{comment.text}”
                </p>

                <div className="mt-8 border-t border-slate-100 pt-6">
                  <h3 className="text-lg font-semibold text-slate-900">
                    {comment.name}
                  </h3>
                  <p className="text-sm text-slate-500">{comment.location}</p>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white p-3 shadow-md transition hover:scale-105"
          >
            <FaChevronCircleLeft className="h-5 w-5 text-slate-700" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white p-3 shadow-md transition hover:scale-105"
          >
            <FaChevronCircleRight className="h-5 w-5 text-slate-700" />
          </button>
        </div>

        <div className="mt-6 flex justify-center gap-2">
          {comments.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-2.5 rounded-full transition-all ${
                current === index ? "w-8 bg-slate-900" : "w-2.5 bg-slate-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
