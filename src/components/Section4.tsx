import Rate1 from "../assets/rate1.jpg";
import Rate2 from "../assets/rate2.jpg";
import Rate3 from "../assets/rate3.jpg";
import Rate4 from "../assets/rate4.jpg";
import Star from "../assets/star.svg";
import HalfStar from "../assets/half-star.svg";
import Team1 from "../assets/team1.jpg";
import Team2 from "../assets/team2.jpg";
import Team3 from "../assets/team3.jpg";

const Section4 = () => {
  return (
    <section className="w-full bg-zinc-900 py-20 text-white">
      <div className="mx-auto flex max-w-screen-lg flex-col text-center md:flex-row md:px-3 md:text-start xl:px-0">
        <div className="flex-1">
          <h2 className="tracking-widest text-gray-400">TEAMS</h2>
          <h1 className="mt-2 text-4xl leading-relaxed">
            Projects are handled by
            <br /> professional certified teams
          </h1>
          <p className="mt-5 px-3 text-center text-sm md:w-2/3 md:px-0 md:text-justify">
            Posuere urna nec tincidunt praesent egestas maecenas pharetra
            convallis posuere ipsum nunc aliquet bibendum enim consectetur
            adipiscing.
          </p>
          <div className="mt-10 flex justify-center md:justify-start">
            <img
              src={Rate1}
              alt=""
              className="h-10 w-10 rounded-full object-cover object-center grayscale"
            />
            <img
              src={Rate2}
              alt=""
              className="-ml-3 h-10 w-10 rounded-full border border-zinc-900 object-cover object-center grayscale"
            />
            <img
              src={Rate3}
              alt=""
              className="-ml-3 h-10 w-10 rounded-full border border-zinc-900 object-cover object-center grayscale"
            />
            <img
              src={Rate4}
              alt=""
              className="-ml-3 h-10 w-10 rounded-full border border-zinc-900 object-cover object-center grayscale"
            />
          </div>
          <div className="mt-2 flex justify-center gap-2 md:justify-start">
            <img src={Star} alt="" />
            <img src={Star} alt="" />
            <img src={Star} alt="" />
            <img src={Star} alt="" />
            <img src={HalfStar} alt="" />
            <span>(4.5 reviews)</span>
          </div>
          <p className="tracking-widest text-gray-400">TRUSTED BY CUSTOMERS</p>
        </div>
        <div className="mt-4 flex flex-1 flex-wrap md:mt-0">
          <div className="w-1/2 pb-2 pr-2">
            <img
              src={Team1}
              alt=""
              className="aspect-square object-cover object-center"
            />
          </div>
          <div className="w-1/2 pb-2 pl-2">
            <img
              src={Team2}
              alt=""
              className="aspect-square object-cover object-center"
            />
          </div>
          <div className="flex w-1/2 items-center justify-center pr-2 pt-2">
            <button className="mt-4 rounded-3xl border border-gray-300 px-5 py-1 text-sm tracking-widest text-gray-300 hover:border-opacity-30 hover:bg-gray-50 hover:bg-opacity-30">
              LEARN TEAMS
            </button>
          </div>
          <div className="w-1/2 pl-2 pt-2">
            <img
              src={Team3}
              alt=""
              className="aspect-square object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section4;
