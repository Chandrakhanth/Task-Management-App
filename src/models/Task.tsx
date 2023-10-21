interface Task {
    id: number;
    creationDate: Date;
    status: 'manual' | 'completed' | 'in process';
  }
  
  const tasks: Task[] = [
    { id: 1, creationDate: new Date('2023-10-01'), status: 'manual' },
    // ... more tasks
  ];
  
  function autoUpdateStatus() {
    const currentDate = new Date();
    tasks.forEach(task => {
      const daysPassed = Math.floor(( - task.creationDate) / (1000 * 60 * 60 * 24));
      if (daysPassed >= 3 && task.status === 'manual') {
        task.status = 'completed';
        console.log(`Task ${task.id} status updated to completed.`);
      }
    });
  }
  
  // Call autoUpdateStatus every day
  setInterval(autoUpdateStatus, 24 * 60 * 60 * 1000);
  