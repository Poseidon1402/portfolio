export const Presentation = () => {
  return (
    <div className="flex flex-col gap-4 px-12">
      <h1 className="text-[44px] font-bold text-[#808080]">
        Hi 👋 <br />
        I’m <span className="text-black">Aina Tiavina</span>
      </h1>
      <div className="flex flex-col gap-16">
        <h1 className="text-md text-[#808080]">
          I am a front-end engineer and UI/UX designer helping startups turn
          their visions into a digital reality. I specialize in designing and
          building modern mobile and web-based apps.
        </h1>
        <div className="flex flex-col gap-4">
          <button className="rounded-xl bg-gradient-to-r from-[#1A1A1A] to-[#131313] p-4 text-white drop-shadow-lg">
            See my resume
          </button>
          <button className="bg-faintWhite rounded-xl p-4">Get in touch</button>
        </div>
      </div>
    </div>
  );
};
