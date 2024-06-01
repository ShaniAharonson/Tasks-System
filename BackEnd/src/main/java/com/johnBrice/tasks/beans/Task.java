package com.johnBrice.tasks.beans;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Date;
import java.time.LocalDate;

@Entity
@Table(name = "Task")
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Data
public class Task {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;
    private String responsible;
    private Date dueDate;
    private boolean isDone;
    private Date executionDate;


    public void setDone(boolean done) {
        isDone = done;
        if (isDone){
            this.executionDate=Date.valueOf(LocalDate.now());
        }

    }
}
