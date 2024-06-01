package com.johnBrice.tasks.Exceptions;

public class TaskSystemException extends Exception{
    public TaskSystemException(ErrMsg errMsg){
        super(errMsg.getMsg());
    }
}
