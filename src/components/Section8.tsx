import Facebook from "../assets/facebook.svg";
import Twitter from "../assets/twitter.svg";
import Instagram from "../assets/instagram.svg";
import LinkedIn from "../assets/linkedin-in.svg";

const Section8 = () => {
  return (
    <footer className="w-full bg-zinc-900 py-20 text-white">
      <div className="mx-auto max-w-screen-lg px-3 xl:px-0">
        <div className="flex flex-col items-center justify-between gap-10 md:flex-row">
          <div className="flex flex-col items-center gap-10 md:flex-row">
            <a href="" className="text-gray-200 hover:text-white">
              home
            </a>
            <a href="" className="text-gray-200 hover:text-white">
              about
            </a>
            <a href="" className="text-gray-200 hover:text-white">
              services
            </a>
            <a href="" className="text-gray-200 hover:text-white">
              team
            </a>
            <a href="" className="text-gray-200 hover:text-white">
              blog
            </a>
            <a href="" className="text-gray-200 hover:text-white">
              contact
            </a>
          </div>
          <div className="tracking-widest">INTERIA</div>
        </div>
        <hr className="my-10 h-px border-0 bg-gray-700" />
        <div className="my-16 flex flex-col items-center justify-between gap-10 md:flex-row">
          <div className="flex items-center gap-5 md:flex-row">
            <a href="" className="rounded-full border p-2 hover:bg-gray-400/50">
              <img src={Facebook} alt="" />
            </a>
            <a href="" className="rounded-full border p-2 hover:bg-gray-400/50">
              <img src={Twitter} alt="" />
            </a>
            <a href="" className="rounded-full border p-2 hover:bg-gray-400/50">
              <img src={LinkedIn} alt="" />
            </a>
            <a href="" className="rounded-full border p-2 hover:bg-gray-400/50">
              <img src={Instagram} alt="" />
            </a>
          </div>
          <p className="text-center md:w-1/2 md:text-right">
            Posuere urna nec tincidunt praesent egestas maecenas pharetra
            convallis posuere ipsum nunc.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Section8;
