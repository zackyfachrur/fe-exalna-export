// const SearchProduct = () => {
//     return (
//         <ul className="w-[50%]">
//             <li className="border-2 rounded-2xl border-gray-100"><div className="px-4 flex gap-2 justify-center items-center"><i className="ri-search-line"></i><input type="text" className="py-2 outline-none w-full" placeholder="Search ekspor for your product" /></div></li>
//         </ul>
//     )
// }

import { ButtonBlue, ButtonTransparent } from "@components/ui/Button";

const Navigation = () => {
  // const imageUrl = "https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg";

  return (
    <>
      <nav className="fixed right-8 top-2 flex justify-between items-center h-[80px] z-50 bg-white px-8 rounded-2xl py-4  drop-shadow-2xl">
        <div className="flex flex-row gap-8 justify-center items-center">
          <i className="ri-search-line text-2xl cursor-pointer"></i>
          <i className="ri-notification-2-line text-2xl cursor-pointer"></i>
          {/* <img src={imageUrl} alt="Avatar Icon" className="w-[40px] h-[40px] object-cover rounded-full" /> */}
          <div className="flex gap-1 border-2 rounded-2xl px-2 py-1 border-blue-600">
            <ButtonTransparent>Sign In</ButtonTransparent>
            <ButtonBlue>Sign Up</ButtonBlue>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
