// ---------------------------------------------------------------------------
// ELEMENTS
const taskListDOM = document.getElementById('task-list')

// ---------------------------------------------------------------------------
// STORAGE
const Storage = {
  set: value => {
    if (value !== null) localStorage.setItem('tasks', JSON.stringify(value))
  },

  get: () => {
    const data = JSON.parse(localStorage.getItem('tasks'))
    if (data !== null) return data
    else return []
  }
}

// ---------------------------------------------------------------------------
// PROGRAM
const App = {
  // ---------------------------------------------------------------------------
  // DATA
  nextId: 1, // App.nextId
  data: Storage.get(), // App.data

  // ---------------------------------------------------------------------------
  // DISPLAY DATA
  // App.display()
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
  add: event => {
    event.preventDefault()
    const newTask = {
      id: App.nextId,
      text: document.getElementById('add-text').value,
      completed: false
    }

    if (newTask !== '') {
      // Push new data
      App.data.push(newTask)
      // Set new data into localStorage
      Storage.set(App.data)

      App.display()
      document.getElementById('add-text').value = ''
      App.nextId++
    }
  },

  // ---------------------------------------------------------------------------
  // REMOVE TASK BY ID
  remove: id => {
    const modifiedTasks = App.data.filter(item => {
      return item.id !== id
    })

    App.data = modifiedTasks
    Storage.set(App.data)
    App.display()
  },

  // ---------------------------------------------------------------------------
  // EDIT TASK TEXT
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
      Storage.set(App.data)
      App.display()
    }
  },

  // ---------------------------------------------------------------------------
  // SEARCH TASK AFTER SUBMIT
  search: event => {
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
    Storage.set(App.data)
    App.display()
  }
}

// ---------------------------------------------------------------------------
// RUN
App.display()
