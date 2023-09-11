export default function(){
    const crosses = document.querySelectorAll('.delete');
    crosses.forEach(cross => {
        cross.addEventListener('click', ()=>{
                const parentElement = cross.parentElement;
                parentElement.remove();
        })
    })
}
