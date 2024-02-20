document.addEventListener('DOMContentLoaded', function() {
    let storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
        document.querySelector('.pr').innerHTML = storedTasks;
    }

    let varone = document.getElementById('onev');
varone.addEventListener('keypress', function(event) {
    // Vérification si la touche pressée est la touche "Entrée" (code 13)
    if (event.key === 'Enter') {
        // Exécuter la fonction clicket()
        task();
    }
});
});

function task(){
    let varone = document.getElementById('onev').value;
    document.getElementById('onev').value = '';
    if(varone.trim() !== ''){
        error.innerHTML = '';
        error.style.display='none';
        let affichagetest = document.createElement('p')
        affichagetest.textContent = varone;
        document.querySelector('.pr').appendChild(affichagetest);
        affichagetest.style.backgroundColor ="#A3BDBC ";
        affichagetest.style.padding="10px";
        affichagetest.style.color="#fff";
        affichagetest.style.borderRadius="7px";
        affichagetest.style.wordBreak = "break-all";
        affichagetest.style.justifyContent = "justify";
        affichagetest.style.margin="10px";
        affichagetest.style.marginLeft="11px";
        localStorage.setItem('tasks', document.querySelector('.pr').innerHTML);
        

        
    }else{
        empty();
    }
}
function empty() {
    let varone = document.getElementById('onev').value;
    if (varone.trim() !== '') {
        task();
    } else {
        let error = document.getElementById('error');
        error.textContent = 'Champ vide';
        error.style.display = "flex";
        error.style.marginLeft = "13px";
        error.style.backgroundColor = "#F9745C";
        error.style.color = "#fff";
        error.style.width = "110px";
        error.style.padding = "7px";
        error.style.borderRadius = "7px";
    }
}

// var varone = document.getElementById("varone");



// document.querySelector('button').addEventListener('click', empty) 👇;
