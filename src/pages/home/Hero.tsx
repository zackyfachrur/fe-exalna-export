import Cover from "@img/Home-Hero.png";

const Hero = () => {
  return (
    <section className="h-[100vh] w-full flex justify-center">
      <div className="container flex justify-start items-center z-10">
        <span
          content=""
          className="w-[500px] absolute -z-20 h-[500px] bg-amber-400 rounded-full"
        ></span>
        <div className="flex flex-col mx-32">
          <h2 className="text-6xl font-bold drop-shadow-2xl">
            The First Step to Export <br />{" "}
            <span className="text-blue-600">Global Success Awaits!</span>
          </h2>
          <p className="font-semibold w-[600px]">
            Every great journey begins with a first step. Take your first step
            now and watch your products break into the global market, unlocking
            limitless opportunities.
          </p>
          <button className="flex gap-2 items-center self-start bg-blue-600 px-4 py-2 rounded-xl text-white font-bold mt-2">
            <i className="ri-phone-line"></i>
            <span>Contact Us</span>
          </button>
        </div>
        <img src={Cover} className="absolute -z-50 w-[60%] -right-32" alt="" />
      </div>
    </section>
  );
};

export default Hero;
