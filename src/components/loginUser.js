async function loginUser(dataUser) {
  //console.log(".env", process.env.REACT_APP_AD_SERVER);

  return fetch(`${process.env.REACT_APP_AD_SERVER}/user/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dataUser),
  })
    .then((data) => data.json())
    .catch((error) => {
      alert(error);
    });
}

export default loginUser;
