//Truthy or Falsy Fallback

const rawNickname = "";
const nickname = rawNickname || "Anonymous";

console.log(`Welcome, ${nickname}!`);
console.log(Boolean(rawNickname));
console.log(Boolean(nickname));
