document.addEventListener('DOMContentLoaded',()=>{
    const todoInput = document.querySelector('#todo-input')
    const addTask = document.querySelector('#add-btn')
    const todoList = document.querySelector('#todo-list')

    addTask.addEventListener('click',()=>{

        if(todoInput.value.trim() === ''){
            alert('please enter a task first!')
        }else{
            const taskList = document.createElement('li')
            
            taskList.textContent = todoInput.value
            console.log(taskList);
            

            todoList.appendChild(taskList)
            todoInput.value = ''


            const status = document.createElement('button')
            status.style.backgroundColor = '#b00020'
            status.style.color = 'white'
            status.style.border = 'none'
            status.style.borderRadius = '4px'
            status.style.height = '26px'
            status.style.marginBottom = '10px'


            status.setAttribute('class', 'task-status')
            status.textContent = 'Status : Not Completed'
            status.addEventListener('click',()=>{
                if(status.textContent == 'Status : Not Completed'){
                    status.textContent = 'Status : Completed'
                    status.style.backgroundColor = 'rgb(6, 201, 6)'
                }else{
                    status.textContent = 'Status : Not Completed'
                    status.style.backgroundColor = '#b00020'
                    status.style.color = 'white'
                }
            })

            todoList.appendChild(status)
    
            const createDeleteButton = document.createElement('button')
            createDeleteButton.textContent = 'Delete'
            createDeleteButton.setAttribute('class', 'delete-btn')
            taskList.appendChild(createDeleteButton)

            createDeleteButton.addEventListener('click',()=>{
                todoList.removeChild(taskList)
                todoList.removeChild(status)
            })
        }
    })
})
