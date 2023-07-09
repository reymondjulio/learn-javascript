let dataFriends = [
  {
    id: 1,
    imageURL: "images/reymond.png",
    name: "Reymond Julio",
    age: 26,
    mutualFriends: 5,
  },
  {
    id: 2,
    imageURL: "images/haidar.jpg",
    name: "M Haidar Hanif",
    age: 30,
    mutualFriends: 6,
  },
];

const friendsListElement = document.getElementById("friends-list");

function renderFriends() {
  friendsListElement.innerHTML = "";

  dataFriends.forEach((friend) => {
    const friendItemElement = document.createElement("li"); // LI

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
      
      <form onSubmit="">
        <button
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

renderFriends();
