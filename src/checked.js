
export default function (){
    const checkedElements = document.querySelectorAll(".checkbox");
    checkedElements.forEach(element => {
        element.addEventListener('click', () => {
            element.classList.toggle('checked');
        });
    });
}