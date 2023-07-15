// Friend List
let dataFriends = [
  { id: 1, name: "Reymond", isConfirmed: false }, // friend object
  { id: 2, name: "Haidar", isConfirmed: false },
  { id: 3, name: "Caroline", isConfirmed: false },
  { id: 4, name: "Emily", isConfirmed: false },
  { id: 5, name: "Christopher", isConfirmed: false },
  { id: 6, name: "Reynaldo", isConfirmed: false },
  { id: 7, name: "Daniel", isConfirmed: false },
  { id: 8, name: "Olivia", isConfirmed: false },
  { id: 9, name: "Darmadi", isConfirmed: false },
];

// -----------------------------------------------------------------------------

// Display all friends list
function renderFriends() {
  dataFriends.forEach((friend) => {
    console.log(friend);
  });
}

function renderConfirmedFriends() {
  dataFriends.forEach((friend) => {
    if (friend.isConfirmed) {
      console.log(friend);
    }
  });
}

// Searching for friends
function searchFriends(keyword) {
  const results = dataFriends.filter((friend) => {
    const friendName = friend.name.toLowerCase();
    return friendName.includes(keyword.toLowerCase());
  });

  return results;
}

// Deleting friends with id number 2,5,6,8 (Haidar, Christopher, Dave, Olivia)
function deleteFriends(ids) {
  dataFriends = dataFriends.filter((friend) => !ids.includes(friend.id));
}

// Add friends with id number 9 and 10 (Sarah and Michael)
function addFriends(namesToAdd) {
  namesToAdd.forEach((nameToAdd) => {
    const lastId = dataFriends[dataFriends.length - 1].id;

    const newFriend = {
      id: lastId + 1,
      name: nameToAdd,
      isConfirmed: false,
    };

    dataFriends = [...dataFriends, newFriend];
  });
}

// To check whether the inputted id is in the friends list.
function confirmFriend(id) {
  // if (typeof id !== "number") {
  //   return null
  // }

  dataFriends = dataFriends.map((friend) => {
    if (friend.id === id) {
      return { ...friend, isConfirmed: true };
    }
    return friend;
  });
}

module.exports = {
  renderFriends,
  renderConfirmedFriends,
  searchFriends,
  deleteFriends,
  addFriends,
  confirmFriend,
};
