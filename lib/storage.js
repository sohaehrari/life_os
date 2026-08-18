const STORAGE_KEYS = {
    goals: "life-os_goals",
    projects: "life-os_projects",
    tasks: "life-os_tasks",
    user: "life-os_user",
  };
  
  // --------------------
  // User
  // --------------------
  
  export function getUser() {
    if (typeof window === "undefined") return null;
  
    const user = localStorage.getItem(STORAGE_KEYS.user);
    return user ? JSON.parse(user) : null;
  }
  
  export function saveUser(user) {
    if (typeof window === "undefined") return null;
  
    localStorage.setItem(
      STORAGE_KEYS.user,
      JSON.stringify(user)
    );
  
    return user;
  }
  
  export function updateUser(updates) {
    const user = getUser();
  
    if (!user) return null;
  
    const updatedUser = {
      ...user,
      ...updates,
    };
  
    saveUser(updatedUser);
  
    return updatedUser;
  }
  
  export function deleteUser() {
    if (typeof window === "undefined") return null;
  
    localStorage.removeItem(STORAGE_KEYS.user);
  }
  
  
  // --------------------
  // Goals
  // --------------------
  
  export function getGoals() {
    if (typeof window === "undefined") return [];
  
    const goals = localStorage.getItem(STORAGE_KEYS.goals);
  
    return goals ? JSON.parse(goals) : [];
  }
  
  export function saveGoals(goals) {
    if (typeof window === "undefined") return null;
  
    localStorage.setItem(
      STORAGE_KEYS.goals,
      JSON.stringify(goals)
    );
  
    return goals;
  }
  
  export function addGoal(goalData) {
    const goals = getGoals();
  
    const newGoal = {
      ...goalData,
      id: Date.now(),
      createdAt: new Date().toISOString(),
    };
  
    saveGoals([...goals, newGoal]);
  
    return newGoal;
  }
  
  export function updateGoal(id, updates) {
    const goals = getGoals();
  
    const updatedGoals = goals.map((goal) =>
      goal.id === id
        ? {
            ...goal,
            ...updates,
            updatedAt: new Date().toISOString(),
          }
        : goal
    );
  
    saveGoals(updatedGoals);
  
    return updatedGoals.find((goal) => goal.id === id);
  }
  
  export function deleteGoal(id) {
    const goals = getGoals();
  
    const updatedGoals = goals.filter(
      (goal) => goal.id !== id
    );
  
    saveGoals(updatedGoals);
  
    return updatedGoals;
  }
  
  
  // --------------------
  // Projects
  // --------------------
  
  export function getProjects() {
    if (typeof window === "undefined") return [];
  
    const projects = localStorage.getItem(STORAGE_KEYS.projects);
  
    return projects ? JSON.parse(projects) : [];
  }
  
  export function saveProjects(projects) {
    if (typeof window === "undefined") return null;
  
    localStorage.setItem(
      STORAGE_KEYS.projects,
      JSON.stringify(projects)
    );
  
    return projects;
  }
  
  export function addProject(projectData) {
    const projects = getProjects();
  
    const newProject = {
      ...projectData,
      id: Date.now(),
      createdAt: new Date().toISOString(),
    };
  
    saveProjects([...projects, newProject]);
  
    return newProject;
  }
  
  export function updateProject(id, updates) {
    const projects = getProjects();
  
    const updatedProjects = projects.map((project) =>
      project.id === id
        ? {
            ...project,
            ...updates,
            updatedAt: new Date().toISOString(),
          }
        : project
    );
  
    saveProjects(updatedProjects);
  
    return updatedProjects.find(
      (project) => project.id === id
    );
  }
  
  export function deleteProject(id) {
    const projects = getProjects();
  
    const updatedProjects = projects.filter(
      (project) => project.id !== id
    );
  
    saveProjects(updatedProjects);
  
    return updatedProjects;
  }
  
  
  // --------------------
  // Tasks
  // --------------------
  
  export function getTasks() {
    if (typeof window === "undefined") return [];
  
    const tasks = localStorage.getItem(STORAGE_KEYS.tasks);
  
    return tasks ? JSON.parse(tasks) : [];
  }
  
  export function saveTasks(tasks) {
    if (typeof window === "undefined") return null;
  
    localStorage.setItem(
      STORAGE_KEYS.tasks,
      JSON.stringify(tasks)
    );
  
    return tasks;
  }
  
  export function addTask(taskData) {
    const tasks = getTasks();
  
    const newTask = {
      ...taskData,
      id: Date.now(),
      createdAt: new Date().toISOString(),
    };
  
    saveTasks([...tasks, newTask]);
  
    return newTask;
  }
  
  export function updateTask(id, updates) {
    const tasks = getTasks();
  
    const updatedTasks = tasks.map((task) =>
      task.id === id
        ? {
            ...task,
            ...updates,
            updatedAt: new Date().toISOString(),
          }
        : task
    );
  
    saveTasks(updatedTasks);
  
    return updatedTasks.find((task) => task.id === id);
  }
  
  export function deleteTask(id) {
    const tasks = getTasks();
  
    const updatedTasks = tasks.filter(
      (task) => task.id !== id
    );
  
    saveTasks(updatedTasks);
  
    return updatedTasks;
  }