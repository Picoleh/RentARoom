export default function TopBarMenuButton() {
  return (
    <section className="mb-20 h-full p-2 border border-black
     bg-[url('https://www.jacksonsquareshopping.co.uk/wp-content/uploads/2016/12/placeholder-1920x1080-copy-3.png')]
     bg-cover bg-center bg-fixed flex items-end justify-start">

      <div className="bg-black/20 p-4 lg:p-6 xl:p-8 rounded-xl text-left">
        <h1 className="text-(--text-light) text-2xl md:text-3xl lg:text-5xl font-bold">
          Welcome
        </h1>
        <p className="text-(--text-light) mt-4 hidden md:block md:text-lg lg:text-xl">
          Find the ideal room for your stay
        </p>
      </div>
    </section>
  )
}