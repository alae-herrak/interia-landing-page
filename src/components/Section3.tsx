import IMG4 from "../assets/IMG4.jpg";

const Section3 = () => {
  return (
    <section className="relative mt-16 w-full">
      <div className="absolute bottom-0 -z-10 h-40 w-full bg-zinc-900"></div>

      <div className="mx-auto flex max-w-screen-lg overflow-hidden rounded-bl-3xl rounded-tl-3xl rounded-tr-3xl bg-zinc-700">
        <div className="relative hidden flex-1 md:block">
          <img
            src={IMG4}
            alt=""
            className="absolute -left-16 -top-10 h-96 w-96 rounded-full object-cover object-center"
          />
        </div>
        <div className="flex flex-1 flex-col items-center justify-center px-3 py-20 text-center text-white md:items-start md:text-start">
          <h1 className="text-3xl leading-relaxed">
            Blending creativity and
            <br />
            functionality in every design
          </h1>
          <button className="mt-4 rounded-3xl border border-gray-300 px-5 py-1 text-sm tracking-widest text-gray-300 hover:border-opacity-30 hover:bg-gray-50 hover:bg-opacity-30">
            HIRE US NOW
          </button>
        </div>
      </div>
    </section>
  );
};

export default Section3;
