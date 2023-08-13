import Article1 from "../assets/article1.jpg";
import Article2 from "../assets/article2.jpg";
import Article3 from "../assets/article3.jpg";

const Section7 = () => {
  return (
    <section className="w-full py-20 text-white">
      <div className="mx-auto max-w-screen-lg">
        <div className="text-center">
          <p className="tracking-widest text-gray-400">BLOG</p>
          <h1 className="mt-2 text-4xl">The latest articles</h1>
        </div>
        <div className="mt-10 flex flex-col gap-10 md:flex-row md:gap-3">
          <div className="flex-1">
            <img
              src={Article1}
              alt=""
              className="h-60 w-full object-cover object-center"
            />
            <p className="px-5 py-7 text-gray-400">
              Posuere urna nec tincidunt praesent egestas maecenas.
            </p>
            <a
              href=""
              className="ps-5 text-sm tracking-widest hover:opacity-80"
            >
              LEARN MORE &gt;
            </a>
          </div>
          <div className="flex-1">
            <img
              src={Article2}
              alt=""
              className="h-60 w-full object-cover object-center"
            />
            <p className="px-5 py-7 text-gray-400">
              Posuere urna nec tincidunt praesent egestas maecenas.
            </p>
            <a
              href=""
              className="ps-5 text-sm tracking-widest hover:opacity-80"
            >
              LEARN MORE &gt;
            </a>
          </div>
          <div className="flex-1">
            <img
              src={Article3}
              alt=""
              className="h-60 w-full object-cover object-center"
            />
            <p className="px-5 py-7 text-gray-400">
              Posuere urna nec tincidunt praesent egestas maecenas.
            </p>
            <a
              href=""
              className="ps-5 text-sm tracking-widest hover:opacity-80"
            >
              LEARN MORE &gt;
            </a>
          </div>
        </div>
        <div className="mt-36 flex flex-col items-center justify-between px-3 md:flex-row xl:px-0">
          <h2 className="mb-5 text-3xl md:mb-0">Newsletter</h2>
          <form
            action=""
            className="flex w-full flex-1 justify-end gap-4 md:w-auto"
          >
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              className="w-full border-b-2 border-gray-400 bg-transparent px-5 py-2 outline-none md:w-1/2"
            />
            <button
              type="submit"
              className="rounded-3xl border px-7 py-1 tracking-widest hover:bg-gray-200 hover:text-black"
            >
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Section7;
