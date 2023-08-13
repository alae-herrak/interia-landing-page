import IMG1 from "../assets/IMG1.jpg";
import IMG2 from "../assets/IMG2.jpg";
import IMG3 from "../assets/IMG3.jpg";

const Section1 = () => {
  return (
    <section className="w-full p-4">
      <div className="mx-auto my-16 flex max-w-screen-lg flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap">
        <img
          src={IMG1}
          alt=""
          style={{ width: "243px", height: "442px" }}
          className="object-cover object-center"
        />
        <img
          src={IMG2}
          alt=""
          style={{ width: "243px", height: "442px" }}
          className="object-cover object-center"
        />
        <div className="flex flex-1 flex-col" style={{ height: "442px" }}>
          <div className="my-14 flex items-end justify-center lg:my-0 lg:justify-between">
            <img
              src={IMG3}
              alt=""
              style={{ width: "243px", height: "243px" }}
              className="hidden rounded-tr-3xl object-cover object-center lg:block"
            />
            <button className="rounded-3xl border border-gray-300 px-5 py-1 tracking-widest text-gray-300 hover:border-opacity-30 hover:bg-gray-50 hover:bg-opacity-30">
              LEARN ABOUT
            </button>
          </div>
          <div className="flex h-full items-center justify-evenly gap-6 lg:gap-0">
            <div>
              <h1 className="mb-2 text-3xl text-gray-400">2K+</h1>
              <h2 className="tracking-widest text-gray-100">
                PROJECTS
                <br />
                DONE
              </h2>
            </div>
            <div>
              <h1 className="mb-2 text-3xl text-gray-400">20+</h1>
              <h2 className="tracking-widest text-gray-100">
                PRO
                <br />
                TEAMS
              </h2>
            </div>
            <div>
              <h1 className="mb-2 text-3xl text-gray-400">200+</h1>
              <h2 className="tracking-widest text-gray-100">
                GLOBAL
                <br />
                CLIENTS
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;
