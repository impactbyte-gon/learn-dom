// ---------------------------------------------------------------------------
// ELEMENTS
const taskListDOM = document.getElementById('task-list')

// ---------------------------------------------------------------------------
// PROGRAM
const App = {
  // ---------------------------------------------------------------------------
  // DATA
  nextId: 6,
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
    },
    {
      id: 4,
      text: 'Building a house',
      completed: false
    },
    {
      id: 5,
      text: 'Drawing a mountain',
      completed: false
    }
  ],

  // ---------------------------------------------------------------------------
  // DISPLAY DATA
  display: (data = App.data) => {
    taskListDOM.innerHTML = ''

    data.forEach(item => {
      const li = document.createElement('li')

      li.innerHTML = `<span ${
        item.completed ? 'class="completed"' : ''
      } onclick="App.toggleCompleted(${item.id})">${item.text}</span>
      <button onclick="App.edit(${item.id})">✎ EDIT</button>
      <button onclick="App.remove(${item.id})">✖ REMOVE</button>`

      taskListDOM.appendChild(li)
    })
  },

  // ---------------------------------------------------------------------------
  // SUBMIT NEW DATA
  add: () => {
    event.preventDefault()
    const newTask = {
      id: nextId,
      text: document.getElementById('add-text').value,
      completed: false
    }

    if (newTask !== '') {
      App.data.push(newTask)
      App.display()
      document.getElementById('add-text').value = ''
      nextId++
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
  edit: id => {
    const textInput = prompt('Edit task to...')

    if (textInput !== null) {
      const modifiedTasks = App.data.map(item => {
        if (item.id === id) {
          item.text = textInput
        }
        return item
      })

      App.data = modifiedTasks
      App.display()
    }
  },

  // ---------------------------------------------------------------------------
  // SEARCH TASK AFTER SUBMIT
  search: () => {
    event.preventDefault()
    const keyword = document.getElementById('search-text').value

    const foundTasks = App.data.filter(item => {
      return item.text.toLowerCase().includes(keyword.toLowerCase())
    })

    App.display(foundTasks)
  },

  // ---------------------------------------------------------------------------
  // SEARCH TASK AUTOMATICALLY
  searchAuto: () => {
    const keyword = document.getElementById('search-text').value

    const foundTasks = App.data.filter(item => {
      return item.text.toLowerCase().includes(keyword.toLowerCase())
    })

    App.display(foundTasks)
  },

  // ---------------------------------------------------------------------------
  // TOGGLE TASK COMPLETED
  toggleCompleted: id => {
    const modifiedTasks = App.data.map(item => {
      if (item.id === id) {
        item.completed = !item.completed
      }
      return item
    })

    App.data = modifiedTasks
    App.display()
  }
}

// ---------------------------------------------------------------------------
// RUN
App.display()
