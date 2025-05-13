import WebLogoWhite from "@assets/img/Web-Logo-White.png";
import Airplane from "@assets/img/Airplane-Hero-Maskot.png";
import { ListFeatureProps } from "@type/pages";

const Hero = () => {
  return (
    <div className="bg-[url('@assets/img/Auth-Hero-Pattern.png')] h-[100vh] w-[60%] flex justify-center items-center flex-col gap-4 px-12 overflow-clip">
      <img src={Airplane} alt="Airplane Images" className="w-[100%] -mr-[100%] opacity-95" />
      <div className="flex flex-col gap-4 absolute">
        <div className="flex items-center flex-col">
            <img src={WebLogoWhite} alt="Web Logo White" />
          <h2 className="text-white font-bold text-5xl">Join the platform</h2>
          <p className="font-medium text-white text-xl flex items-center gap-2">
            Access your smart AI-powered import-export platform
          </p>
        </div>
        <ul className="grid grid-cols-3 px-20 gap-2">
          <ListFeature
            logo={
              <i className="ri-hand-coin-line text-green-500 bg-white px-2 py-1 rounded-full"></i>
            }
            text="Smart Trade Assistant"
          />
          <ListFeature
            logo={
              <i className="ri-chat-private-line text-amber-400 bg-white px-2 py-1 rounded-full"></i>
            }
            text="Secure Messaging System"
          />
          <ListFeature
            logo={
              <i className="ri-draft-line text-red-500 bg-white px-2 py-1 rounded-full"></i>
            }
            text="Automated Report Generator"
          />
          <ListFeature
            logo={
              <i className="ri-brain-line text-purple-500 bg-white px-2 py-1 rounded-full"></i>
            }
            text="Smart Notification Center"
          />
          <ListFeature
            logo={
              <i className="ri-robot-3-line text-blue-500 bg-white px-2 py-1 rounded-full"></i>
            }
            text="AI-Powered Chatbot"
          />
        </ul>
      </div>
    </div>
  );
};

export default Hero;

const ListFeature = ({ logo, text }: ListFeatureProps) => {
  return (
    <li className="text-base text-white bg-white/50 font-semibold px-4 py-2 flex-row rounded-full flex gap-2 items-center">
      {logo} {text}
    </li>
  );
};
