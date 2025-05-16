import { ModeItemProps } from "@type/pages";

export const ModeItem = ({ logo, title, desc, onClick }: ModeItemProps) => {
  return (
    <div className="flex flex-row gap-2 rounded-2xl text-gray-500 items-center px-4 hover:bg-gray-900 py-1">
      <span className="bg-white text-black rounded-full px-2 py-1 cursor-pointer">
        {logo}
      </span>
      <button
        className="flex flex-col text-sm cursor-pointer"
        onClick={onClick}
        type="button"
      >
        <span className="text-start text-white rounded-full font-semibold w-full ">
          {title}
        </span>
        <span className="text-start text-gray-400 rounded-md w-full">
          {desc}
        </span>
      </button>
    </div>
  );
};

export const ModeItemButton = ({ title, onClick, logo }: ModeItemProps) => {
  return (
    <button
      type="button"
      className="bg-white px-3 rounded-full font-medium text-sm"
      onClick={onClick}
    >
      {logo} {title}
    </button>
  );
};
