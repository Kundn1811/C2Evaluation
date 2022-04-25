// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time
document.getElementById("wallet").innerText = localStorage.getItem("amount")||0;

let data = JSON.parse(localStorage.getItem("movie"));

data.forEach(element => {
    
    let img = document.createElement("img");
    img.src = element.Poster
    let title = document.createElement("h3");
    title.innerText = element.Title;
    let year = element.Year;

    document.getElementById("movie").append(img,title,year)
});
function bookseat(){
    let seat = document.getElementById("number_of_seats").value;
     let ded = Number(seat) *100;
     let price = Number(localStorage.getItem("amount"));

     let leftP = price-ded;
      if(leftP<100){
          alert("Insufficient Balance!")
      } else{
            alert("Booking successful!")
          localStorage.setItem("amount",JSON.stringify(leftP))
          window.location.reload()
      }



}
