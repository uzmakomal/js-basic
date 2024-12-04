//normal fetch data from file
/*
fetch("message/READme.txt")
.then((response) => response.text())

.then((data) => document.write(data));*/




//fetch data from api:
/*fetch("https://jsonplaceholder.typicode.com/users")
.then((response) => response.json())
.then((data) => console.log(data));
*/

//post method on fetch:
/*var obj={
    title: 'foo',
    name: 'ali',
    userId: 1,
  };
fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify(obj),
    headers: {
      'Content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
  
*/
document.getElementById("submit").addEventListener("click", function(){
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: new FormData(document.getElementById("myform")),
        headers: {
          'Content-type': 'application/x-www-form-urlencoded',
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
})