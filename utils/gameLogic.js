export const genFakeWord = async (word) => {
  await resetIp();
  const letter = Math.floor(Math.random() * 26) + 97;
  const char = String.fromCharCode(letter);
  console.log("run 2");
  const res = await fetch("https://api.pawan.krd/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
      "Content-Type": "application/json",
    },
    cache: "force-cache",
    next: { revalidate: 0 },

    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      max_tokens: 100,
      messages: [
        {
          role: "system",
          content:
            "Make sure every response is unique and not similar to previous responses.",
        },
        {
          role: "user",
          content: `Take a word from the english language, modify it in a way so that the new word is a fake made up word  but sounds like a real word. Modify the definition of the old word to make it match the new word and compress it to a maximum of 6 words. Display the new word , the definition and the word fake in a json format where the new word has a key of word , the definition has a key of definition and the word fake has a key of mode. The old word must not be the following words: ${word}. Make sure the new word chosen from the english language does not start with the same letter of the last word in the given list: ${word} .Make sure the word chosen from the language is a very complicated word and not known by the average person. Make sure the word starts with the letter ${char}. Make sure the new word formed is not a real word, if it is a real word then change more letters in the word.`,
        },
      ],
    }),
  });
  var data = await res.json();

  console.log("fake", res);
  const jsonData = JSON.parse(data.choices[0].message.content);

  return jsonData;
};

export const genOtherWords = async (word) => {
  await resetIp();
  const letter = Math.floor(Math.random() * 26) + 97;
  const char = String.fromCharCode(letter);
  console.log("run 2");
  const res = await fetch("https://api.pawan.krd/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
      "Content-Type": "application/json",
    },
    cache: "force-cache",
    next: { revalidate: 0 },

    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      max_tokens: 100,
      messages: [
        {
          role: "system",
          content:
            "Make sure every response is unique and not similar to previous responses.",
        },
        {
          role: "user",
          content: `Generate a random word with its definition from the English Dictionary. Edit the definition of the word by compressing it to a maximum of 6 words . Respond with the word,  the modified definition and the word real only in json format where word has a key of word, definition has a key of definition and real has a key of mode. Ignore the following words ${word}. The word must be such words known by University English Teachers. Make sure the word starts with the letter ${char}.`,
        },
      ],
    }),
  });
  var data = await res.json();

  console.log("real", res);
  const jsonData = JSON.parse(data.choices[0].message.content);

  return jsonData;
};

async function resetIp() {
  try {
    const headers = {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
    };
    const options = {
      method: "POST",
      headers: headers,
      body: "",
      cache: "no-store",
      next: { revalidate: 0 },
    };
    await fetch("https://api.pawan.krd/resetip", options);
    console.log("ip reset");
  } catch (err) {
    console.error(`error resetting ip: ${JSON.stringify(err.message)}`);
  }
}
