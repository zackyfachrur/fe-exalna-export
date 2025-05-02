import { ButtonProps } from "@type/components";

export const ButtonBlue = ({ children }: ButtonProps) => {
  return (
    <button className="bg-blue-600 text-white px-6 py-2 rounded-xl font-semibold border-2 border-blue-600 active:scale-95 animated cursor-pointer hover:bg-blue-500 hover:border-blue-500">
      {children}
    </button>
  );
};

export const ButtonTransparent = ({ children }: ButtonProps) => {
  return (
    <button className="bg-transparent cursor-pointer hover:bg-blue-600 hover:text-white text-blue-600 px-6 py-2 rounded-xl font-semibold border-2 border-transparent active:scale-95 animated">
      {children}
    </button>
  );
};
