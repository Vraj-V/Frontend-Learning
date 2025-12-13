function UserFactory(type) {
  if (type === "admin") {
    return {
      role: "Admin",
      permissions: ["read", "write", "delete"]
    };
  }

  if (type === "guest") {
    return {
      role: "Guest",
      permissions: ["read"]
    };
  }
}

document.getElementById("create").addEventListener("click", () => {
  const user = UserFactory("guest");
  console.log(user);
  console.log("You can only ", user.permissions[0]);
});

document.getElementById("admin").addEventListener("click", () => {
  const admin = UserFactory("admin");
  console.log(admin);
  console.log("You can only ", admin.permissions.join(", "));
});
