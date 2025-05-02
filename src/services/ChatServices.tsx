export const getData = async (userInput: string) => {
  const prompt = `Berikan daftar nama perusahaan beserta link website aktif dan terpercaya yang berkaitan dengan produk "${userInput}". 
  Balas dalam format JSON yang valid dan sesuai dengan struktur berikut:
  
  {
    "explanation_ai": [
      { "prompt": "Penjelasan singkat dari AI tentang hasil pencarian berdasarkan '${userInput}'" }
    ],
    "services": [
      { "name": "Nama Perusahaan", "url": "https://link-website.com" },
      ...
    ]
  }
  
  Hanya kembalikan JSON **tanpa tambahan penjelasan, teks, markup HTML, atau catatan lainnya** di luar struktur JSON di atas.`;

  const res = await fetch(import.meta.env.VITE_CHATBOT_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      prompt: prompt,
    }),
  });

  const result = await res.json();

  // Pastikan data diterima dalam format yang benar
  const parsedData = JSON.parse(result.data);
  return parsedData;
};
