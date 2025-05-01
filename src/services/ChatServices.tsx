export const getData = async (userInput: string) => {
  const prompt = `Berikan list impor barang terbaik untuk produk pangan yang berkaitan dengan ${userInput} dalam format JSON yang valid dengan struktur berikut:
      {
        "services": [
          {"name": "Nama Perusahaan", "url": "https://contoh.com"},
          ...
        ]
      }
      Hanya kembalikan JSON tanpa penjelasan, markup, atau catatan tambahan apapun.`;

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
