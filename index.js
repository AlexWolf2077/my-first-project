  
    const Task = require ('./task')
    //  const task1 = new Task(1, 'Сделать дз', 'active');
    //  const task2 = new Task(2, 'Прочитать книгу', 'backlog');
    //  const task3 = new Task(3, 'Купить Одежду', 'done');
     
    //  console.log(task1.toString());
    //  console.log(task2.toString());
    //  console.log(task3.toString());
   const TaskManager = require('./TaskManager');
const taskManager = new TaskManager();
// taskManager.loadTasks('tasks.json');
// taskManager.printTasks();
taskManager.loadTasks('tasks.json');
taskManager.printTasks();
taskManager.addTask(5,"Сомнительно","ОКЕЙ");
