//Truthy or Falsy Fallback

const rawNickname = "0";
const nickname = rawNickname || "Anonymous";

console.log(`Welcome, ${nickname}!`);
console.log(Boolean(rawNickname));
console.log(Boolean(nickname));
