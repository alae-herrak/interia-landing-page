const Hero = () => {
  return (
    <div
      id="hero"
      className="flex bg-cover bg-center"
      style={{ backgroundImage: "url(./hero-background.jpg)" }}
    >
      <div className="hidden h-full flex-1 md:block"></div>
      <div className="flex h-full flex-1 flex-col items-center justify-center gap-6 text-center text-white md:items-start md:text-start">
        <div className="mb-7 space-y-2">
          <h1 className="text-4xl">We design your room aesthetic</h1>
          <p>Lectus quam id leo in vitae turpis nisi porta lorem mollis.</p>
        </div>
        <button className="rounded border bg-white px-4 py-2 text-black hover:bg-opacity-75">
          Hire us
        </button>
      </div>
    </div>
  );
};

export default Hero;
