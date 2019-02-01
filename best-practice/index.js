let tasks = ['Learning JavaScript', 'Drinking coffee', 'Running a marathon']

const taskListDOM = document.getElementById('task-list')

const MyTasks = {
  display: () => {
    taskListDOM.innerHTML = ''
    tasks.forEach(task => {
      const liDOM = document.createElement('li')
      const textDOM = document.createTextNode(task)
      liDOM.appendChild(textDOM) // into LI
      taskListDOM.appendChild(LI) // into UL
    })
  },

  submit: event => {
    event.preventDefault()
    const newTask = document.getElementById('input-text').value // string value

    if (newTask !== '') {
      tasks.push(newTask)
      MyTasks.display()
      document.getElementById('input-text').value = ''
    }
  }
}

MyTasks.display()
