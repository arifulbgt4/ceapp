function Logout() {
    const button = document.createElement('button');
    button.innerText = 'Log out';
    button.setAttribute('class', 'btn');
    el.appendChild(button);

    
    //listing logout buttons

    button.addEventListener("click", ()=>{
        el.remove()
    })

}

