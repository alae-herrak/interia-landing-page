import IMG5 from "../assets/IMG5.jpg";
import IMG6 from "../assets/IMG6.jpg";
import IMG7 from "../assets/IMG7.jpg";
import IMG8 from "../assets/IMG8.jpg";

const Section6 = () => {
  return (
    <section className="flex w-full flex-col items-center gap-3 md:flex-wrap md:flex-row justify-center lg:gap-0">
      <img
        src={IMG5}
        alt=""
        className="w-80 lg:w-1/4 object-cover object-center h-80"
      />
      <img
        src={IMG6}
        alt=""
        className="w-80 lg:w-1/4 object-cover object-center h-80"
      />
      <img
        src={IMG7}
        alt=""
        className="w-80 lg:w-1/4 object-cover object-center h-80"
      />
      <img
        src={IMG8}
        alt=""
        className="w-80 lg:w-1/4 object-cover object-center h-80"
      />
    </section>
  );
};

export default Section6;
