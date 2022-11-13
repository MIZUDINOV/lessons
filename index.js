async function getUser(userName) {
  const responseObject = await fetch(
    `https://api.github.com/users/${userName}`
  );

  return responseObject;
}

const searchUserInput = document.querySelector(".user-search");
const profileButton = document.querySelector(".button");

profileButton.addEventListener("click", () => {
  getUser(searchUserInput.value).then(async (responseObject) => {
    if (responseObject.status === 200) {
      const responseData = await responseObject.json();

      const userNameElement = document.querySelector(".user-name");
      userNameElement.textContent = `${responseData.name} ${responseData.login}`;

      const userBioElement = document.querySelector(".user-bio");
      userBioElement.textContent = responseData.bio;
    }

    if (responseObject.status === 404) {
      console.log("Пользователь не найден!");
    }
  });
});
