package com.johnBrice.tasks.clr;

import com.johnBrice.tasks.Service.TaskService;
import com.johnBrice.tasks.beans.Task;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

import java.sql.Date;
import java.time.LocalDate;

//@Component
@Order(1)
@RequiredArgsConstructor
public class TaskTest implements CommandLineRunner {
    private final TaskService taskService;

    @Override
    public void run(String... args) throws Exception {
        //add task
        Task task1 = Task.builder()
                .id(0)
                .name("task1")
                .responsible("Ofir")
                .dueDate(Date.valueOf(LocalDate.of(2024, 12, 25)))
                .isDone(true)
                .build();
        //taskService.addTask(task1);
        System.out.println("Task1 is added!");


        //reportTask
        try {
            System.out.println("task that are done:");
            System.out.println(taskService.findByIsDone(false));
        } catch (Exception err) {
            System.out.println(err.getMessage());
        }

        //taskList
        System.out.println("All tasks: ");
        taskService.getAllTasks().forEach(System.out::println);
    }

}
