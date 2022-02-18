const getBtn = document.getElementById("get-btn");
const postBtn = document.getElementById("post-btn");

console.log(getBtn)


const getData = () => {
    getBtn.style.backgroundColor = "orange"
 
    const xhr = new XMLHttpRequest();
    
    xhr.open('GET','https://reqres.in/api/users' );

    xhr.responseType = "json";


    xhr.onload = ()=>{
        const data=xhr.response;
        console.log(data.data[0])
    }


    xhr.send();
}



const sendData = () => {}

getBtn.addEventListener("click", getData);

postBtn.addEventListener("click", sendData); 