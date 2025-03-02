// COLOR
function themeToggle() {
  document.body.style.backgroundColor = `rgb(${Math.floor(
    Math.random() * 256
  )}, 
                                              ${Math.floor(
                                                Math.random() * 256
                                              )}, 
                                              ${Math.floor(
                                                Math.random() * 256
                                              )})`;
}

// date
const date = new Date();
const locale = "en-US";
const day = date.toLocaleDateString(locale, { weekday: "short" });
document.getElementById("dev-date-day").innerText = day;
const month = date.toLocaleString("default", { month: "short" });
const dayNumber = date.getDate();
const year = date.getFullYear();
document.getElementById(
  "dev-date-years"
).innerText = `${month} ${dayNumber} ${year}`;

// task management
const taskCount = document.getElementById("count-task");
const taskBtns = document.querySelectorAll(".task-completed");
const taskTitles = document.querySelectorAll(".task-title");
const taskTotal = document.getElementById("count-check");
const activityLog = document.getElementById("activity-log");
const clearHistory = document.getElementById("clear-history");

for (let i = 0; i < taskBtns.length; i++) {
  const task = taskBtns[i];
  task.addEventListener("click", function (event) {
    alert("Board Updated Successfully");

    const currentButton = event.target;

    currentButton.disabled = true;

    let remainingTasks = parseInt(taskCount.innerText);
    taskCount.innerText = remainingTasks - 1;

    let completedTasks = parseInt(taskTotal.innerText);
    taskTotal.innerText = completedTasks + 1;

    if (remainingTasks === 1) {
      alert("Hurray. All tasks are completed! 🎉🥳");
    }

    const currentTime = new Date().toLocaleTimeString();
    const taskTitle = taskTitles[i].innerText;

    const activityInner = document.createElement("p");
    activityInner.classList.add(
      "w-full",
      "bg-[#F4F7FF]",
      "rounded-lg",
      "p-[10px]",
      "text-base",
      "text-[#000]/70"
    );

    activityInner.innerHTML = `You have completed the task ${taskTitle} at ${currentTime}`;

    activityLog.appendChild(activityInner);

    clearHistory.addEventListener("click", function () {
      activityLog.removeChild(activityInner);
    });
  });
}
