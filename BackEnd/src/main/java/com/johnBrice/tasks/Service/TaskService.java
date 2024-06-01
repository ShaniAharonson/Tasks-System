package com.johnBrice.tasks.Service;

import com.johnBrice.tasks.Exceptions.TaskSystemException;
import com.johnBrice.tasks.Repositories.TaskRepo;
import com.johnBrice.tasks.beans.Task;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.sql.Date;
import java.time.LocalDate;
import java.util.List;

@Service
@RequiredArgsConstructor
public class TaskService {
    private final TaskRepo taskRepo;

    public void addTask(Task task) throws TaskSystemException {
        if (task.isDone()) {
            task.setExecutionDate(Date.valueOf(LocalDate.now()));
        }
        taskRepo.save(task);
    }

    public List<Task> findByIsDone(boolean isDone) {
        return taskRepo.findByIdDone_true(isDone);
    }

    public List<Task> getAllTasks() {
        return taskRepo.findAll();
    }

    public List<Task> getAllTaskBeforeDate(Date date) {
        return taskRepo.findByDueDateBefore(date);
    }

}
