const mobileMenu = document.getElementById('mobileMenu');
const mobileMenuDiv = document.getElementById('mobile-menu-div');
const submitBtn = document.getElementById('submitBtn');
const input = document.getElementById('heroInput');
const resultDiv = document.querySelector(".result");


//Mobile Menu Function
//When user click the bar icon this function adds or removes the hidden class
toggleMobileMenu = () => {
    mobileMenuDiv.classList.toggle('hidden');
    
};
mobileMenu.addEventListener('click',toggleMobileMenu);

const getShortenUrl = async function(url){
    try{
        const URL = `https://api.shrtco.de/v2/shorten?url=${url}`;
        const res = await fetch(URL);
        const data = await res.json();
        const resultUrl = data.result.short_link3;
        console.log(resultUrl);

        
            resultDiv.classList.toggle('result-hidden');

            const originalUrlDiv = document.createElement("div");
            originalUrlDiv.classList.add("originalLink");

            const resultLink = document.createElement("div");

            const originalURL = document.createElement("span");
            originalURL.textContent = `${url}`;

            const shortURL = document.createElement("span");
            shortURL.classList.add("resultlink");
            shortURL.textContent = resultUrl;

            const copyBtn = document.createElement("button");
            copyBtn.textContent="Copy";
            copyBtn.classList.add("copyBtn");

            copyBtn.addEventListener("click", function(){
                navigator.clipboard.writeText(resultUrl);
                copyBtn.style.backgroundColor="#3b3054";
                copyBtn.innerText = "Copied!";
                setTimeout(()=>{
                    copyBtn.style.backgroundColor = "#2acfcf";
                    copyBtn.innerHTML = "Copy";
                },5000);
            });

            resultLink.appendChild(shortURL);
            resultLink.appendChild(copyBtn);

            originalUrlDiv.appendChild(originalURL);

            resultDiv.appendChild(originalUrlDiv);
            resultDiv.appendChild(resultLink);
            
            
        
        
    }catch(err){
        console.log(err);
    }
}

submitBtn.addEventListener('click',function(){
    
    if(input.value === ""){
        console.log("no debe estar vacio");
    }else{
        getShortenUrl(input.value);
    }
})