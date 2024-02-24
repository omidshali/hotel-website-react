const Hero = () => {
  return (
    <div className="w-full h-screen relative">
      <img
        className="w-full h-full object-cover"
        src="https://images.pexels.com/photos/38238/maldives-ile-beach-sun-38238.jpeg"
      />
      <div className="bg-black/30 absolute top-0 left-0 w-full h-full" />
      <div className="absolute top-0 h-full w-full">
        <div className="flex flex-col absolute md:left-[10%] justify-center h-full max-w-[1100px] p-4 m-auto text-white">
          <p>All Inclusive</p>
          <h1 className="font-bold text-4xl md:text-6xl drop-shadow-2xl">
            Private Beaches & Getways
          </h1>
          <p className="text-wrap py-2 drop-shadow-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ut quis
            est, id consequuntur sequi ipsum vitae sit non exercitationem.
          </p>
          <div>
            <button className="bg-white text-black">Reserve Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
