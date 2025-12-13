const UserModule = (function () {
  let users = [];

  function addUser(name) {
    users.push(name);
    console.log(users);
  }

  return {
    addUser
  };
})();

document.getElementById("add").addEventListener("click", () => {
  UserModule.addUser("Vraj");
});
