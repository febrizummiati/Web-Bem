console.log("Selamat Datang di Website BEM KM PNP!");

const name = prompt("Siapa namamu?");

if(name!=null){
    alert("Welcome, " +name);
    const help = prompt("Apa yang bisa kami bantu?");
    alert("Terimakasih telah berkunjung ke website BEM KM PNP :)");
}else{
    alert("Welcome! \nTerimakasih telah berkunjung ke website BEM KM PNP :)");
}

let presidium = document.querySelector("#presidium");
presidium.addEventListener('click', function(event){
    presidium.setAttribute("src", "aset/biru.jpg");
})


var bgColor = document.getElementById('bg-color');
var txtColor = document.getElementById('text-color');

bgColor.addEventListener("change", (event) => {
    document.body.style.backgroundColor = bgColor.value;
});

txtColor.addEventListener("change", (event) => {
    document.body.style.color = txtColor.value;
});

