//code learned through this Dev Ed tutorial: https://www.youtube.com/watch?v=4SQXOA8Z-lo


const modal = document.querySelector(".modal");
const previews = document.querySelectorAll("#gallery img"); //changed from DIV to ID
const original = document.querySelector(".full-img");
//const caption = document.querySelector(".caption");

previews.forEach((preview) => {
    preview.addEventListener('click', () => {
        modal.classList.add("open");
        original.classList.add("open");
        //Dynamic change text and image
        const originalSrc = preview.getAttribute("data-original");
        original.src=`./images/gallery/${originalSrc}`; 
        const altText=preview.alt; //gets the alt text
        //caption.textContent = altText;
    });
});

modal.addEventListener('click', (e) => {
    if(e.target.classList.contains('modal')) {
        modal.classList.remove("open");
        original.classList.remove("open");
    }
});

original.addEventListener('click', (e) => {
    if(e.target.classList.contains('open')) {
        modal.classList.remove("open");
        original.classList.remove("open");
    }
});