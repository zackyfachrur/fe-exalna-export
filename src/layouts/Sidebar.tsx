import { motion, NavLink, useState, AnimatePresence } from "@libs/pages";
import { NavigateProps, SidebarProps } from "@type/layouts";

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
  const [showSide, setShowSide] = useState<boolean>(true);
  const listStyle =
    "flex gap-2 flex-row font-medium cursor-pointer px-4 py-2 text-lg text-gray-600 hover:text-gray-900";
  const listActive =
    "relative before:content-[''] before:w-10 before:h-10 before:rounded-r-full before:bg-blue-600 before:absolute before:-left-2 before:top-1/2 before:-translate-y-1/2 before:-translate-x-5 flex gap-2 flex-row font-medium cursor-pointer px-4 py-2 text-lg text-gray-900";

  return (
    <AnimatePresence>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="bg-blue-600 text-white font-bold cursor-pointer w-[50px] h-[45px] mx-4 my-4 rounded-lg px-4 py-2 fixed z-50 top-0 left-0"
          onClick={() => setShowSide(!showSide)}
        >
          <i
            className={showSide === false ? `ri-menu-5-line` : `ri-close-line`}
          ></i>
        </motion.button>
      <motion.div
        initial={{ opacity: 1, x: 0 }} // Awal animasi dengan posisi 0 dan opacity 1
        animate={{ x: showSide ? 0 : -400 }} // Jika showSide false, bergeser ke kiri
        exit={{ opacity: 1 }} // Tidak ada perubahan opacity saat keluar
        transition={{ duration: 0.3 }} // Durasi animasi 0.3 detik
        className={`bg-white w-auto flex flex-col justify-between z-40 pt-12 ${
          showSide ? "flex" : "absolute left-0 top-0 h-full z-40"
        }`}
      >
        <>
          <motion.ul
            key="sidebar-navigation"
            initial={{ opacity: 0, x: -100 }} // Masuk dari kiri
            animate={{ opacity: 1, x: 0 }} // Animasi saat muncul
            exit={{ opacity: 0, x: -100 }} // Animasi saat keluar
            transition={{ duration: 0.3 }} // Durasi transisi
            className="py-12 flex flex-col"
          >
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
          </motion.ul>
          <motion.ul
            key="sidebar-actions"
            initial={{ opacity: 0, y: 20 }} // Masuk dari bawah
            animate={{ opacity: 1, y: 0 }} // Animasi saat muncul
            exit={{ opacity: 0, y: 20 }} // Animasi saat keluar
            transition={{ duration: 0.3 }} // Durasi transisi
            className="px-8 py-12 flex gap-4 flex-col"
          >
            <li>
              <button className="bg-blue-600 text-white font-bold px-4 py-2 w-full rounded-2xl cursor-pointer flex gap-2 justify-center items-center hover:bg-blue-500">
                <i className="ri-add-line text-xl"></i>
                <span>Create Order</span>
              </button>
            </li>
          </motion.ul>
        </>
      </motion.div>
    </AnimatePresence>
  );
};

export default Sidebar;
