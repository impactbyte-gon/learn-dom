// GET TASK LIST
const taskListUL = document.getElementById('task-list')

// TASKS DATA
let tasks = ['Learning JavaScript', 'Drinking coffee', 'Running a marathon']

// PUT ALL DATA INTO DOM
tasks.forEach(task => {
  const LI = document.createElement('li')
  const text = document.createTextNode(task)
  LI.appendChild(text) // into LI
  taskListUL.appendChild(LI) // into UL
})

const submitText = event => {
  event.preventDefault()

  const newTask = document.getElementById('input-text').value

  if (newTask !== '') {
    // CREATE THE NEW TASK LIST
    const LI = document.createElement('li')
    // <li></li>
    const text = document.createTextNode(newTask)
    // New task text
    LI.appendChild(text)
    // <li>New task text</li>
    taskListUL.appendChild(LI)
    // <ul>
    //   <li>New task text</li>
    // </ul>

    // SET INPUT TEXT TO EMPTY AGAIN
    document.getElementById('input-text').value = ''
  }
}
