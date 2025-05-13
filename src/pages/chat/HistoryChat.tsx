import { motion } from "@libs/pages"
import { useMotionLayout } from "@hooks/motion-layout/useMotionLayout";

const HistoryChat = () => { 
  const { showSide } = useMotionLayout();

    return (
      <motion.nav
        initial={{ opacity: 1, x: -500 }} // Awal animasi dengan posisi 0 dan opacity 1
        animate={{ x: showSide ? -500 : 0 }} // Jika showSide false, bergeser ke kiri
        exit={{ opacity: 1 }} // Tidak ada perubahan opacity saat keluar
        transition={{ duration: 0.5 }} // Durasi animasi 0.3 detik
        className="bg-white w-[300px] flex flex-col justify-between z-30 pt-12 rounded-2xl drop-shadow-xl">
          <>
            <ul className="py-4 flex flex-col px-6 text-gray-600 gap-1 font-medium">
            <h2 className="mb-1 px-4 mt-4 bg-blue-600 text-white rounded-full text-center font-bold">Recent Chat</h2>
            <li className=" hover:bg-gray-100 rounded-full px-4 py-2 cursor-pointer bg-gray-200">Berikan 10 Product...</li>
            <li className=" hover:bg-gray-100 rounded-full px-4 py-2 cursor-pointer">Bagaimana Cara Me..</li>
            <li className=" hover:bg-gray-100 rounded-full px-4 py-2 cursor-pointer">Coba Lakukan Sebe...</li>
            <li className=" hover:bg-gray-100 rounded-full px-4 py-2 cursor-pointer">Apakah Memiliki Cu...</li>
            </ul>
            <ul className="px-8 py-6 flex gap-4 flex-col">
              <li>
                <button className="bg-gray-600 text-white font-bold px-4 py-2 w-full rounded-2xl cursor-pointer flex gap-2 justify-center items-center hover:bg-gray-700">
                  <i className="ri-add-line text-xl"></i>
                  <span>New Chat</span>
                </button>
              </li>
              
            </ul>
          </>
      </motion.nav>
    )
}

export default HistoryChat;



/* 
  Default Code Bellow
*/

// const HistoryChat = () => { 
//   const { showSide } = useMotionLayout();

//     return (
//       <motion.nav
//         initial={{ opacity: 1, x: 0 }} // Awal animasi dengan posisi 0 dan opacity 1
//         animate={{ x: showSide ? -500 : 0 }} // Jika showSide false, bergeser ke kiri
//         exit={{ opacity: 1 }} // Tidak ada perubahan opacity saat keluar
//         transition={{ duration: 0.5 }} // Durasi animasi 0.3 detik
//         className="bg-white w-[300px] flex flex-col justify-between z-30 mx-6 my-6 rounded-2xl drop-shadow-xl ml-20">
//           <>
//             <ul className="py-4 flex flex-col px-6 text-gray-600 gap-1 font-medium">
//             <h2 className="mb-1 px-4 mt-4 bg-blue-600 text-white rounded-full text-center font-bold">Recent Chat</h2>
//             <li className=" hover:bg-gray-100 rounded-full px-4 py-2 cursor-pointer bg-gray-200">Berikan 10 Product...</li>
//             <li className=" hover:bg-gray-100 rounded-full px-4 py-2 cursor-pointer">Bagaimana Cara Me..</li>
//             <li className=" hover:bg-gray-100 rounded-full px-4 py-2 cursor-pointer">Coba Lakukan Sebe...</li>
//             <li className=" hover:bg-gray-100 rounded-full px-4 py-2 cursor-pointer">Apakah Memiliki Cu...</li>
//             </ul>
//             <ul className="px-8 py-6 flex gap-4 flex-col">
//               <li>
//                 <button className="bg-gray-600 text-white font-bold px-4 py-2 w-full rounded-2xl cursor-pointer flex gap-2 justify-center items-center hover:bg-gray-700">
//                   <i className="ri-add-line text-xl"></i>
//                   <span>New Chat</span>
//                 </button>
//               </li>
              
//             </ul>
//           </>
//       </motion.nav>
//     )
// }

// export default HistoryChat;