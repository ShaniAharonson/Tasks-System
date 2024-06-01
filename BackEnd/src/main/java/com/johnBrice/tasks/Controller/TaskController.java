package com.johnBrice.tasks.Controller;

import com.johnBrice.tasks.Exceptions.TaskSystemException;
import com.johnBrice.tasks.Service.TaskService;
import com.johnBrice.tasks.beans.Task;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.sql.Date;
import java.util.List;

@RestController
@RequestMapping("/")
@CrossOrigin
@RequiredArgsConstructor
public class TaskController {
    private final TaskService taskService;

    @PostMapping("/addTask")
    @ResponseStatus(HttpStatus.CREATED)
    public void addTask(@RequestBody Task task) throws TaskSystemException {
        taskService.addTask(task);

    }

    @GetMapping("/isDoneTask/{isDone}")
    @ResponseStatus(HttpStatus.OK)
    public List<Task> isDoneTask(@PathVariable boolean isDone) {
        return taskService.findByIsDone(isDone);
    }

    @GetMapping("/allTasks")
    @ResponseStatus(HttpStatus.OK)
    public List<Task> getAllTasks() {
        return taskService.getAllTasks();
    }

    @GetMapping("/byDate/{date}")
    @ResponseStatus(HttpStatus.OK)
    public List<Task> TaskByDate(@PathVariable Date date) {
        return taskService.getAllTaskBeforeDate(date);
    }
}
