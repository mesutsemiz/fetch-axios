
/*

//Get request using Fetch() method

fetch("https://jsonplaceholder.typicode.com/users")

//converting recieved data to json
.then(response => response.json())

.then(json =>{
    console.log(json)

    //create a variable to store html

    let li = `<tr><th>İd</th><th>Name</th><th>Email</th></tr>`;

    //Loop through each data and add tabble rpw
    json.forEach(user =>{
        li +=`<tr>
        <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
            
        </tr>`;
    });


    // dispay results

    document.getElementById("users").innerHTML = li;



})


*/


//POST request using Fetch();

fetch("https://jsonplaceholder.typicode.com/posts", {
    

        // adding method type to
        method :  "POST",


        // adding body or contents to send to server
        body: JSON.stringify({
            title: "foo",
            body:"bar",
            userId : 1
        }),

        // Adding headers to request 

        headers:{
            "Content-type" : "application/json; charset=UTF-8"
        }
})

// converting to JSON 

.then(response => response.json())

//Displaying results to console

.then(json => console.log(json));