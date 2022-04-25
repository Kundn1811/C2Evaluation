// Store the wallet amount to your local storage with key "amount"
document.getElementById("wallet").innerText = localStorage.getItem("amount")||0;
function addToWallet(){
    let price = document.getElementById("amount").value;
    let data = localStorage.getItem("amount");
      // console.log(data,typeof data)
    let rs = Number(data);
    let t_price =  rs+ Number(price)
    document.getElementById("wallet").innerText = t_price;
    localStorage.setItem("amount",JSON.stringify(t_price))
    document.getElementById("amount").value= null
}

// for redirecting to movies page

document.getElementById("book_movies").addEventListener("click",()=>{
    window.location.href = "movies.html"
})