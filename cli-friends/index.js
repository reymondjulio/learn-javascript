// Friend List
let dataFriends = [
  {
    id: 1,
    name: "Reymond",
  },
  {
    id: 2,
    name: "Haidar",
  },
  {
    id: 3,
    name: "Caroline",
  },
  {
    id: 4,
    name: "Emily",
  },
  {
    id: 5,
    name: "Christopher",
  },
  {
    id: 6,
    name: "Dave",
  },
  {
    id: 7,
    name: "Daniel",
  },
  {
    id: 8,
    name: "Olivia",
  },
];

// Display all friends list
function renderFriends() {
  dataFriends.forEach((friend) => {
    console.log(friend);
  });
}
console.log("Render Friends");

renderFriends();

// Searching for friends with id number 1 and 3 (Reymond and Caroline)
function searchFriend(id) {
  let newSearchFriend = dataFriends.find((friend) => friend.id === id);

  console.log(newSearchFriend);
}

console.log("---------------------------------");

console.log("Search Friends");

searchFriend(1);

searchFriend(3);

// Deleting friends with id number 2,5,6,8 (Haidar, Christopher, Dave, Olivia)
function deleteFriends(ids) {
  let newDataFriends = [...dataFriends];

  newDataFriends = newDataFriends.filter((friend) => !ids.includes(friend.id));

  return newDataFriends;
}

const idsToDelete = [2, 5, 6, 8];
const updatedDeleteFriends = deleteFriends(idsToDelete);

console.log("---------------------------------");

console.log("Delete Friends");

console.log(updatedDeleteFriends);

// Add friends with id number 9 and 10 (Sarah and Michael)

function addFriends(friend1, friend2) {
  const newFriend1 = {
    id: dataFriends.length + 1,
    name: friend1,
  };

  const newFriend2 = {
    id: dataFriends.length + 2,
    name: friend2,
  };

  const updatedFriends = [...dataFriends, newFriend1, newFriend2];
  return updatedFriends;
}
const updatedDataFriends = addFriends("Sarah", "Michael");

console.log("---------------------------------");

console.log("Add Friends");

console.log(updatedDataFriends);

// To check whether the inputted id is in the friends list.

function confirmFriend(id) {
  const friend = updatedDataFriends.find((friend) => friend.id === id);

  if (friend) {
    console.log(`You have confirmed friendship with ${friend.name}`);
  } else {
    console.log(`There are no friends with that ID.`);
  }
}
console.log("---------------------------------");

console.log("Confirm Friends");

confirmFriend(3);
confirmFriend(11);

console.log("---------------------------------");
