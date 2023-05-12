export const genFakeWord = async (word) => {
  await resetIp();
  const letter = Math.floor(Math.random() * 26) + 97;
  const char = String.fromCharCode(letter);

  const res = await fetch("https://api.pawan.krd/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
      "Content-Type": "application/json",
    },
    cache: "force-cache",

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
          content: `Take a word from the english language, modify it in a way so that the new word is a fake made up word  but sounds like a real word. Modify the definition of the old word to make it match the new word . Display the new word , the definition and the word fake in a json format where the new word has a key of word , the definition has a key of definition and the word fake has a key of mode. The old word must not be the following words: ${word}. Make sure the new word chosen from the english language does not start with the same letter of the last word in the given list: ${word} .Make sure the word chosen from the language is a very complicated word and not known by the average person. Make sure the word starts with the letter ${char}. Make sure the new word formed is not a real word, if it is a real word then change more letters in the word.`,
        },
      ],
    }),
  });

  const data = await res.json();
  console.log(data);
  const jsonData = JSON.parse(data.choices[0].message.content);
  console.log(jsonData);
  return jsonData;
};

export const genOtherWords = async (word) => {
  await resetIp();
  const letter = Math.floor(Math.random() * 26) + 97;
  const char = String.fromCharCode(letter);
  const res = await fetch("https://api.pawan.krd/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
      "Content-Type": "application/json",
    },
    cache: "force-cache",

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
          content: `Generate a random word with its definition from the English Dictionary. Respond with the word,  its definition and the word real only in json format where word has a key of word, definition has a key of definition and real has a key of mode. Ignore the following words ${word}. The word must be such words known by University English Teachers. Make sure the word starts with the letter ${char}.`,
        },
      ],
      temperature: 1,
      frequency_penalty: 2,
    }),
  });

  const data = await res.json();

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
      cache: "force-cache",
    };
    await fetch("https://api.pawan.krd/resetip", options);
  } catch (err) {
    console.error(`error resetting ip: ${JSON.stringify(err.response.data)}`);
  }
}
