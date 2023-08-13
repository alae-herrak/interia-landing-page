import IMG5 from "../assets/IMG5.jpg";
import IMG6 from "../assets/IMG6.jpg";
import IMG7 from "../assets/IMG7.jpg";
import IMG8 from "../assets/IMG8.jpg";

const Section6 = () => {
  return (
    <section className="flex w-full flex-col items-center gap-3 lg:flex-row lg:justify-center lg:gap-0">
      <img
        src={IMG5}
        alt=""
        className="h-96 w-96 object-cover object-center lg:flex-1"
      />
      <img
        src={IMG6}
        alt=""
        className="h-96 w-96 object-cover object-center lg:flex-1"
      />
      <img
        src={IMG7}
        alt=""
        className="h-96 w-96 object-cover object-center lg:flex-1"
      />
      <img
        src={IMG8}
        alt=""
        className="h-96 w-96 object-cover object-center lg:flex-1"
      />
    </section>
  );
};

export default Section6;
