let dataFriends = [
  {
    id: 1,
    imageURL: "images/reymond.png",
    name: "Reymond Julio",
    age: 26,
    mutualFriends: 5,
    isConfirmed: true,
  },
  {
    id: 2,
    imageURL: "images/haidar.jpg",
    name: "M Haidar Hanif",
    age: 30,
    mutualFriends: 6,
    isConfirmed: false,
  },
  {
    id: 3,
    imageURL: "images/christopher.jpg",
    name: "christopher",
    age: 28,
    mutualFriends: 3,
    isConfirmed: true,
  },
  {
    id: 4,
    imageURL: "images/caroline.jpg",
    name: "caroline",
    age: 24,
    mutualFriends: 8,
    isConfirmed: true,
  },
  {
    id: 5,
    imageURL: "images/vicky.jpg",
    name: "vicky",
    age: 29,
    mutualFriends: 2,
    isConfirmed: false,
  },
  {
    id: 6,
    imageURL: "images/emily_brown.jpg",
    name: "Emily Brown",
    age: 31,
    mutualFriends: 7,
    isConfirmed: false,
  },
  {
    id: 7,
    imageURL: "images/daniel_wilson.jpg",
    name: "Daniel Wilson",
    age: 27,
    mutualFriends: 4,
    isConfirmed: true,
  },
  {
    id: 8,
    imageURL: "images/olivia_davis.jpg",
    name: "Olivia Davis",
    age: 33,
    mutualFriends: 1,
    isConfirmed: true,
  },
  {
    id: 9,
    imageURL: "images/william_johnson.jpg",
    name: "William Johnson",
    age: 25,
    mutualFriends: 9,
    isConfirmed: false,
  },
  {
    id: 10,
    imageURL: "images/sophia_martinez.jpg",
    name: "Sophia Martinez",
    age: 32,
    mutualFriends: 6,
    isConfirmed: true,
  },
];

const friendsListElement = document.getElementById("friends-list");

function renderFriends() {
  friendsListElement.innerHTML = "";

  dataFriends.forEach((friend) => {
    const friendItemElement = document.createElement("li"); // LI

    const actionsElement =
      friend.isConfirmed === false
        ? `
      <form onSubmit="confirmFriend(event)">
        <input type="hidden" name="friendId" value="${friend.id}" />
        <button
        type="submit"
        class="bg-blue-500 text-white p-2 rounded w-full self-center hover:bg-blue-400"
        >
         Confirm
        </button>
      </form>
      
      <form onSubmit="deleteFriend(event)">
        <input type="hidden" name="friendId" value="${friend.id}" />
        <button
          type="submit"
          class="bg-slate-300 rounded text-black font-semibold p-2 w-full self-center hover:bg-slate-400"
        >
          Delete
        </button>
      </form>
    `
        : `<button disabled type="button" class="bg-green-900 text-white p-2 rounded w-full self-center hover:bg-green-800">
            Request Accepted
          </button>`;

    friendItemElement.innerHTML = `
    <div>
      <img
        src=${friend.imageURL}
        alt=${friend.name}
        class="rounded object-cover w-60 h-60"
      />
    </div>
    <div class="flex flex-col bg-slate-200 p-6 mb-6 space-y-2">
      <h3 class="text-center text-xl font-semibold">${friend.name}</h3>
      <p class="text-center text-lg text-slate-800">${friend.age} years old</p>
      <p class="text-center text-lg text-slate-500">${friend.mutualFriends} mutual friends</p>
      
      ${actionsElement}
    </div>
    `;

    friendsListElement.appendChild(friendItemElement);
  });
}

function deleteFriend(event) {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);
  const friendId = Number(formData.get("friendId"));

  dataFriends = dataFriends.filter((friend) => {
    if (friend.id !== friendId) {
      return friend;
    }
  });

  renderFriends();
}

function confirmFriend(event) {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);
  const friendId = Number(formData.get("friendId"));

  dataFriends = dataFriends.map((friend) => {
    if (friend.id === friendId) {
      return { ...friend, isConfirmed: true };
    }
    return friend;
  });

  renderFriends();
}

renderFriends();
