const container = document.querySelector('.container')

/* code to control the open-navbar button to open navbar */
document.querySelector('.open-navbar-icon').addEventListener('click', () => {
    container.classList.add('change');
});

/* code to control the close-navbar button to close navbar */
document.querySelector('.close-navbar-icon').addEventListener('click', () => {
    container.classList.remove('change');
});

/* an array of color */
const color = ['#6495ed', '#7fffd4', '#ffa07a', '#f08080', '#afeeee']

/* initialize i to 0 */
let i = 0;

/* The following assigns for each of the navbar items a color from color array */
Array.from(document.querySelectorAll('.nav-link')).forEach((item) => {
    item.style.cssText = `background-color: ${color[i++]};`
})

/* select .navigation-button class to interact with, as an array object using for each loop */ 
Array.from(document.querySelectorAll(".navigation-button")).forEach((item) => {
    item.onclick = () => { /* when the object of .navigation-button class is clicked ... */
        /* call 'change' function from CSS script for each item upon button click */
        item.parentElement.parentElement.classList.toggle("change")
    }
});
