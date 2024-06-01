package com.johnBrice.tasks.Exceptions;

import lombok.Getter;

@Getter
public enum ErrMsg {
    ID_ALREADY_EXISTS("id already exists");
    private String msg;
    ErrMsg(String msg){this.msg=msg;}
}
