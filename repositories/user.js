const login = async ({ email, password }) => {
  console.log("login user in user repositories");
};

const register = async ({ name, email, password, phoneNumber, address }) => {
  console.log("register ", name, email, password, phoneNumber, address);
};

export default {login, register}
