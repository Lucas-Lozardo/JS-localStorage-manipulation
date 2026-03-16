const btnAddTask = document.querySelector(".app__button--add-task");
const formAddTask = document.querySelector(".app__form-add-task");
const formTextArea = document.querySelector(".app__form-textarea");


const tasks = [];

btnAddTask.addEventListener("click", ()=>{
    formAddTask.classList.toggle("hidden"); //Se tiver tira, senão coloca. Alternancia da classe.

})

formAddTask.addEventListener("submit", (event)=>{
    event.preventDefault(); //Previne de recarregar a página.
    const task = {
        descricao : formTextArea.value
    }
    tasks.push(task);
    localStorage.setItem("tarefas", JSON.stringify(tasks)); //Converte de forma que possa ser lido (String) na LocalStorage. Utilizando a API do JSON
})