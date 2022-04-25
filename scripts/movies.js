// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page
document.getElementById("wallet").innerText = localStorage.getItem("amount")||0;

 async function showData(){
    try{
        // https://www.omdbapi.com/?&apikey=c1fcc466&s=Batman&page=1
        let query = document.getElementById("search").value;
       let res = await fetch(`https://www.omdbapi.com/?&apikey=c1fcc466&s=${query}&page=1`)
        
       let data = await res.json()
       return data
    }catch(err){
        console.log("error", err)
    }

    
   
}
async function main(){
    let data = await showData();
    console.log(data)
    appendM(data.Search)
}

let id ;
function debaunc(func,D_time){
    if(id){
        clearTimeout(id);
    }
    id = setTimeout(()=>{
        func()
    },D_time)
}

function appendM(data){
    document.getElementById("search").value=null
    document.getElementById("movies").innerText = null;
data.forEach(element => {
    
    let box = document.createElement("div");

    let image = document.createElement("img");
    image.src = element.Poster
    let title = document.createElement("h3");
    title.innerText = element.Title
    let year = document.createElement("p")
    year.innerText = element.Year;
    let btn = document.createElement("button");
    btn.innerText = "Book now";
    btn.setAttribute("class","book_now");
     btn.addEventListener("click",()=>{
         let arr =[];
         arr.push(element);
         localStorage.setItem("movie",JSON.stringify(arr));

         window.location.href = "checkout.html";
     }) 



    box.append(image,title,year,btn);
    document.getElementById("movies").append(box);
});

}
