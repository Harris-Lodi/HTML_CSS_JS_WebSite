/* select .navigation-button class to interact with, as an array object using for each loop */ 
Array.from(document.querySelectorAll(".navigation-button")).forEach((item) => {
    item.onclick = () => { /* when the object of .navigation-button class is clicked ... */
        /* call 'change' function from CSS script for each item upon button click */
        item.parentElement.parentElement.classList.toggle("change")
    }
});
