let dataFriends = [
  {
    imageURL: "images/reymond.png",
    name: "Reymond Julio",
    age: 26,
    mutualFriends: 5,
  },
  {
    imageURL: "images/haidar.png",
    name: "M Haidar Hanif",
    age: 30,
    mutualFriends: 6,
  },
];

const friendsListElement = document.getElementById("friends-list");

function renderFriends() {
  dataFriends.forEach((friend) => {
    console.log(friend.name);
  });
}

renderFriends();
