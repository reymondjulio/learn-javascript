const {
  renderFriends,
  renderConfirmedFriends,
  searchFriends,
  deleteFriends,
  addFriends,
  confirmFriend,
} = require("./index"); // CommonJS

// import { renderFriends } from "./index"; // ES Module

console.log("---------------------------------");
console.log("--- CLI Friends ---");

console.log("---------------------------------");
console.log("Render Many Friends");

renderFriends();

console.log("---------------------------------");
console.log("Search Many Friends");

const results1 = searchFriends("Rey");
const results2 = searchFriends("Dar");

console.log("results1 = ", results1);
console.log("results2 = ", results2);

console.log("---------------------------------");
console.log("Delete One Friend");

// TODO LATER
// deleteFriend(9);
// renderFriends();

console.log("---------------------------------");
console.log("Delete Many Friends");

const idsToDelete = [2, 5, 6, 8];

deleteFriends(idsToDelete);
renderFriends();

console.log("---------------------------------");
console.log("Add Many Friends");

const namesToAdd = ["Sarah", "Michael", "Joko"];

addFriends(namesToAdd);
renderFriends();

console.log("---------------------------------");
console.log("Confirm Friends");

confirmFriend(3);
confirmFriend(11);
renderFriends();

console.log("---------------------------------");
console.log("Render Confirmed Friends");

renderConfirmedFriends();
