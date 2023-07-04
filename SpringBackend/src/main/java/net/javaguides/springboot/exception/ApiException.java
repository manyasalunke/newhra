package net.javaguides.springboot.exception;

import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = "http://localhost:3000") // Replace with your frontend URL
public class ApiException extends RuntimeException {
    public ApiException(String message) {
        super(message);
    }
    public ApiException() {
        super();
    }
}
