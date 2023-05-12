export default async function handler(req, res) {
  await fetch("https://api.pawan.krd/resetip"),
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
        "Content-Type": "application/json",
      },
    };
  const resp = await fetch("https://api.pawan.krd/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
      "Content-Type": "application/json",
    },
    cache: "no-cache",

    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      max_tokens: 100,
      messages: [
        {
          role: "user",
          content:
            "Generate json of a random word with its definition. Make sure the word is in English and not common words.",
        },
      ],
    }),
  });
  const data = await resp.json();
  // res.status(200).json(data.choices[0].message.content);
  console.log(data);
}
