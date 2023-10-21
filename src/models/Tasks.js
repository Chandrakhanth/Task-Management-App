const tasks = [
    { id: 1, creationDate: new Date('2023-10-01'), status: 'pending' },
    // ... more tasks
  ];
  
  function autoUpdateStatus() {
    const currentDate = new Date();
    tasks.forEach(task => {
      const daysPassed = Math.floor((currentDate - task.creationDate) / (1000 * 60 * 60 * 24));
      if (daysPassed >= 3 && task.status === 'pending') {
        task.status = 'completed';
        console.log(`Task ${task.id} status updated to completed.`);
      }
    });
  }
  
  // Call autoUpdateStatus every day
  setInterval(autoUpdateStatus, 24 * 60 * 60 * 1000);
  