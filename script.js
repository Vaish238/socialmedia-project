// sidebar
const menuItem = document.querySelectorAll('.menu-item');

const removeActive = () => {
    menuItem.forEach(item => {
        item.classList.remove('active')
    });
}


menuItem.forEach(item => {
    item.addEventListener('click', () => {
        removeActive();
        item.classList.add('active');

        if (item.id != 'notifice') {
            document.querySelector('.notification').style.dislplay = "none"
        } else {
            document.querySelector('.notification').style.dislplay = "block"
        }
    })
})