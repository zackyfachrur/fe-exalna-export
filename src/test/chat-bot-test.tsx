// import { useEffect, useState } from "react";
// import { getData } from "@services/ChatServices";
// import { FetchProps } from "@type/fetch";

// const Messages = () => {
//   const [data, setData] = useState<{ services: FetchProps[] } | null>(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const parseData = await getData();
//         console.log("Fetched Data:", parseData); // Debugging

//         // Pastikan data yang diterima adalah objek dengan properti 'services'
//         if (parseData && Array.isArray(parseData.services)) {
//           setData(parseData); // Set data dengan objek yang benar
//         } else {
//           console.error("Data yang diterima tidak valid:", parseData);
//         }
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   if (!data) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <section className="h-[100vh] flex justify-center items-center">
//       <div>
//         {data.services.length === 0 ? (
//           <p>No data available</p>
//         ) : (
//           data.services.map((content, index) => (
//             <p key={index}>
//               {content.name} {content.url}
//             </p>
//           ))
//         )}
//       </div>
//     </section>
//   );
// };

// export default Messages;
