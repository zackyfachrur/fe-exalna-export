import { ReactNode } from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";

interface NavigateProps {
  icon: ReactNode;
  to: string;
  text: string;
}

interface SidebarProps {
  children?: ReactNode;
  className?: string;
  logo?: ReactNode;
  text?: string;
}

const Navigate: NavigateProps[] = [
  {
    icon: <i className="ri-home-3-line"></i>,
    to: "/",
    text: "Home",
  },
  {
    icon: <i className="ri-folder-line"></i>,
    to: "/saved",
    text: "Saved",
  },
  {
    icon: <i className="ri-bard-line"></i>,
    to: "/chat",
    text: "Ask AI",
  },
  {
    icon: <i className="ri-message-3-line"></i>,
    to: "/messages",
    text: "Messages",
  },
];

const SidebarList = ({ children, className, logo, text }: SidebarProps) => {
  return (
    <li className={className}>
      {children ? (
        children
      ) : (
        <div className="flex gap-2 items-center">
          {logo}
          <span>{text}</span>
        </div>
      )}
    </li>
  );
};

export const Sidebar = () => {
  const [showSide, setShowSide] = useState<boolean>(false);
  const listStyle =
    "flex gap-2 flex-row font-medium cursor-pointer px-4 py-2 text-lg text-gray-600 hover:text-gray-900";
  const listActive =
    "relative before:content-[''] before:w-10 before:h-10 before:rounded-r-full before:bg-blue-600 before:absolute before:-left-2 before:top-1/2 before:-translate-y-1/2 before:-translate-x-5 flex gap-2 flex-row font-medium cursor-pointer px-4 py-2 text-lg text-gray-900";
  return (
    <nav className="bg-white w-auto flex flex-col justify-between z-50">
      <button
        className="bg-blue-600 text-white font-bold cursor-pointer w-[50px] mx-4 my-4 rounded-lg px-4 py-2"
        onClick={() => setShowSide(!showSide)}
      >
        <i
          className={showSide === false ? `ri-menu-5-line` : `ri-close-line`}
        ></i>
      </button>
      {showSide && (
        <>
          <ul className="py-12 flex flex-col">
            {Navigate.map((content, index) => (
              <SidebarList key={index} className={listStyle}>
                <NavLink
                  to={content.to}
                  className={({ isActive }) =>
                    isActive ? listActive : listStyle
                  }
                >
                  {content.icon}
                  <span>{content.text}</span>
                </NavLink>
              </SidebarList>
            ))}
          </ul>
          <ul className="px-8 py-12 flex gap-4 flex-col">
            <li>
              <button className="bg-blue-600 text-white font-bold px-4 py-2 w-full rounded-2xl cursor-pointer flex gap-2 justify-center items-center hover:bg-blue-500">
                <i className="ri-add-line text-xl"></i>
                <span>Create Order</span>
              </button>
            </li>
            {/* <SidebarList
                            logo={<i className="ri-settings-3-line text-xl"></i>}
                            text="Settings"
                            className="text-gray-600 cursor-pointer hover:text-gray-900 flex gap-2 text-lg font-medium"
                        />
                        <SidebarList
                            logo={<i className="ri-logout-box-line text-xl"></i>}
                            text="Log Out"
                            className="text-gray-600 cursor-pointer hover:text-gray-900 flex gap-2 text-lg font-medium"
                        /> */}
          </ul>
        </>
      )}
    </nav>
  );
};

export default Sidebar;
