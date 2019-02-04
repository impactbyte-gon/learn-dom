const taskListDOM = document.getElementById('task-list')

const App = {
  nextId: 6,
  data: [],
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
  add: () => {
    event.preventDefault()
    const newTask = {
      id: App.nextId,
      text: document.getElementById('add-text').value,
      completed: false
    }
    if (newTask !== '') {
      App.data.push(newTask)
      App.display()
      document.getElementById('add-text').value = ''
      App.nextId++
    }
  },
  remove: id => {
    const modifiedTasks = App.data.filter(item => {
      return item.id !== id
    })
    App.data = modifiedTasks
    App.display()
  },
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
  search: () => {
    event.preventDefault()
    const keyword = document.getElementById('search-text').value
    const foundTasks = App.data.filter(item => {
      return item.text.toLowerCase().includes(keyword.toLowerCase())
    })
    App.display(foundTasks)
  },
  searchAuto: () => {
    const keyword = document.getElementById('search-text').value
    const foundTasks = App.data.filter(item => {
      return item.text.toLowerCase().includes(keyword.toLowerCase())
    })
    App.display(foundTasks)
  },
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

App.display()
