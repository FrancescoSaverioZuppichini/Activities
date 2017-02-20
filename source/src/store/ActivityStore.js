import KnapsackStrategy from '../KnapsackStrategy.js'

const ACTIVITIES = [{
    name: 'side-project',
    time: 10,
    xp: 12,
    match: false,
    display: false
  },
  {
    name: 'algorithms',
    time: 3,
    xp: 7,
    match: false,
    display: false

  },
  {
    name: 'networking',
    time: 1,
    xp: 0.5,
    match: false,
    display: false

  },
  {
    name: 'exercise',
    time: 2,
    xp: 1.5,
    match: false,
    display: false

  },
  {
    name: 'systems design',
    time: 4,
    xp: 4,
    match: false,
    display: false

  },
  {
    name: 'making CSS codepens',
    time: 3,
    xp: 4,
    match: false,
    display: false

  }
];

class ActivityStore {
  constructor() {
    this.state = {}
    this.state.activities = []
    this.KnapsackStrategy = new KnapsackStrategy()
    // this.findTodos()
  }

  initializeActivities() {
    this.state.activities.forEach(activity => activity.match = activity.display = false)
  }
  addActivity(activity) {
    this.state.activities.push(activity)
    this.findTodos()
  }

  removeActivity(activity) {
    const idx = this.state.activities.indexOf(activity)
    this.state.activities.splice(idx, 1)
    this.findTodos()

  }

  removeAll() {
    this.state.activities.length = 0
  }

  findTodos() {
    this.initializeActivities()
    // run 0-1 knapsack algo on
    const todos = this.KnapsackStrategy.solve(10, this.state.activities)
    // do crossOver
    todos.forEach(todo => todo.match = todo.display = true)
    // this.sortByMatch()
    this.showAll()
  }

  sortByMatch() {
    this.state.activities.sort((a, b) => b.match - a.match)
  }

  showAll() {
    this.state.activities.forEach(activity => activity.display = true)
    // set display true on all activities
  }

  showTodos() {
    this.state.activities.forEach(activity => activity.display = activity.match)
    //set display true only on todo
    // activities
  }
}

const activityStore = new ActivityStore()
export default activityStore
