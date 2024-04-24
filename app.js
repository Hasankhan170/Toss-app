const image = document.querySelector("img")
const para = document.querySelector(".main")
function toss(btn){
    const randomNumber = Math.ceil(Math.random()*2);
    if(randomNumber ===1){
        image.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSps3cYu-cuR8hAIOxHGO1oRLJR39KEja6ptNCQ_h0uyQ&s";
    }else{
        image.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGtNSK-R4JGo4hZRfY0YTgHh24EoJEkAIS1T05tPmAQQ&s";
    }
    if(btn === "HEADS" && randomNumber === 1 || btn === "TAILS" && randomNumber === 2){
        para.innerHTML = `YOU WIN THE TOSS <br> <button class = "reset-btn" onclick ="resetAgain()">RESET</button>`
    }else{
        para.innerHTML = `YOU LOSS THE TOSS <br> <button class = "reset-btn" onclick ="resetAgain()">RESET</button>`
    }
}
function resetAgain(){
    para.innerHTML = "";
    image.src = "";
}