import heroBg from "../assets/heroBanner.png";
import { ClipboardWithIconText } from "flowbite-react";
import './component.css';

const HeroSection = () => {
  return (
    <section
      className="
        relative min-h-[800px]      
        bg-cover bg-center
        sm:bg-top md:bg-center
        flex items-center
      "
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="absolute inset-0  -z-10" />

      <div className="mx-auto mt-150 max-w-[640px] text-center ">
        <div className="grid w-full ">
      <div className="relative">
        <input
    type="text"
    className="block w-full sm:w-[30rem] md:w-[35rem] lg:w-[40rem] border-2 border-white rounded-lg bg-white px-5 py-6 text-sm text-gray-400"
  value="0x0256c5ecabeb0f1f46359a87a915fd325756bcfd"
  disabled
  readOnly
/>
        <ClipboardWithIconText
  valueToCopy="0x0256c5ecabeb0f1f46359a87a915fd325756bcfd"
  className="bg-yellow-200 text-black hover:bg-black hover:text-yellow-200 focus:ring-yellow-500"
/></div>
    </div>
      </div>
    </section>
  );
};

export default HeroSection;
