// ---------------------------------------------------------------------------
// ELEMENTS
const taskListDOM = document.getElementById('task-list')

// ---------------------------------------------------------------------------
// PROGRAM
const App = {
  // ---------------------------------------------------------------------------
  // DATA
  data: [
    {
      id: 1,
      text: 'Learning JavaScript',
      completed: true
    },
    {
      id: 2,
      text: 'Running a Hackathon',
      completed: false
    },
    {
      id: 3,
      text: 'Flying an Airplane',
      completed: false
    }
  ],

  // ---------------------------------------------------------------------------
  // DISPLAY DATA
  display: (data = App.data) => {
    taskListDOM.innerHTML = ''

    data.forEach(item => {
      const li = document.createElement('li')

      li.innerHTML = `<span>${item.text}</span>
        <button onclick="App.remove(${item.id})">X</button>`
      taskListDOM.appendChild(li)
    })
  },

  // ---------------------------------------------------------------------------
  // SUBMIT NEW DATA
  add: () => {
    event.preventDefault()
    const newTask = document.getElementById('input-text').value // string value

    if (newTask !== '') {
      App.data.push(newTask)
      App.display()
      document.getElementById('input-text').value = ''
    }
  },

  // ---------------------------------------------------------------------------
  // REMOVE TASK BY ID
  remove: id => {
    const modifiedTasks = App.data.filter(item => {
      return item.id !== id
    })

    App.data = modifiedTasks
    App.display()
  },

  // ---------------------------------------------------------------------------
  // SEARCH TASK BY KEYWORD
  search: keyword => {
    const foundTasks = App.data.filter(item => {
      return item.text.toLowerCase().includes(keyword.toLowerCase())
    })

    App.display(foundTasks)
  }
}

// ---------------------------------------------------------------------------
// RUN
App.display()
