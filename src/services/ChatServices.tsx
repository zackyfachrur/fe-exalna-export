import axios from "axios";

export const getData = async (userInput: string) => {
  const prompt = `Berikan daftar nama perusahaan beserta link website aktif dan terpercaya yang berkaitan dengan produk "${userInput}". 
  Balas dalam format JSON yang valid dan sesuai dengan struktur berikut:

  {
    "explanation_ai": [
      { "prompt": "Penjelasan singkat dari AI tentang hasil pencarian berdasarkan '${userInput}'" }
    ],
    "services": [
      { "name": "Nama Perusahaan", "url": "https://link-website.com" }
    ]
  }

  Hanya kembalikan JSON tanpa tambahan penjelasan, teks, markup HTML, atau catatan lainnya di luar struktur JSON di atas.`;

   try {
    const userString = localStorage.getItem("user");
    const user = userString ? JSON.parse(userString) : null;
    const userId = user?.id;
    console.log("User ID:", userId);

    const res = await axios.post(
      import.meta.env.VITE_CHATBOT_API_URL,
      {
        user_id: userId,
        keyword: userInput,
        prompt: prompt,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    // response object punya properti data yg berisi base64 string JSON
    const base64String = res.data.data;
    console.log("Base64 string:", base64String);

    // decode base64 jadi JSON string
    const decodedString = atob(base64String);
    console.log("Decoded JSON string:", decodedString);

    // parse JSON string jadi objek
    const parsedData = JSON.parse(decodedString);
    console.log("Parsed data:", parsedData);

    return parsedData;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
