package net.javaguides.springboot.payloads;

import lombok.Data;
import org.springframework.web.bind.annotation.CrossOrigin;

@Data
@CrossOrigin(origins = "http://localhost:3000") // Replace with your frontend URL
public class JWTAuthRequest {
    private String username;
    private String password;
}
