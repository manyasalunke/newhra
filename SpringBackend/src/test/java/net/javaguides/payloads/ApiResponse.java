package net.javaguides.springboot.payloads;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.web.bind.annotation.CrossOrigin;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@CrossOrigin(origins = "http://localhost:3000") // Replace with your frontend URL
public class ApiResponse {

    private String message;
    private boolean success;
}
