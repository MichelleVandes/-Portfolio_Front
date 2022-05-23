async function loginUser(dataUser) {
 return fetch('http://localhost:5002/login', {
   method: 'POST',
   headers: {
     'Content-Type': 'application/json'
   },
   body: JSON.stringify(dataUser)
 })
   .then(data => data.json())
   .catch(error => { alert(error)})
}

export default loginUser