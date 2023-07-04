package net.javaguides.springboot.payloads;


import jakarta.validation.constraints.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.Date;

@NoArgsConstructor
@Getter
@Setter
@CrossOrigin(origins = "http://localhost:3000") // Replace with your frontend URL
public class EmployeeDTO {

    private int id;

    @NotBlank(message = "First name is required")
    @Size(min = 4, message = "employee first name must be min of 4 characters !!")
    private String firstName;

    @NotBlank(message = "Last name is required")
    @Size(min = 4, message = "employee last name must be min of 4 characters !!")
    private String lastName;

    @NotBlank(message = "User name is required")
    @Size(min = 4, message = "employee user name must be min of 4 characters !!")
    private String userName;

    @Email(message = "Email address is not valid !!")
    @NotEmpty(message = "Email is required !!")
    private String emailId;

    @NotBlank
    @Size(min = 3, max = 15, message = "Password must be min of 3 chars and max of 15 chars !!")
    private String password;

    @NotBlank(message = "Phone number is required")
    @Digits(integer = 10, fraction = 0, message = "Phone number must be an integer")
    private String phoneNumber;

    private String address;

    @NotNull(message = "Date of birth is required in this format \"yyyy-MM-dd\"")
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    @Past(message = "Date of birth must be in the past in this format \"yyyy-MM-dd\"")
    private Date dateOfBirth;

    @NotNull(message = "Date of joining is required in this format \"yyyy-MM-dd\"")
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    @Past(message = "Date of joining must be in the past in this format \"yyyy-MM-dd\"")
    private Date dateOfJoining;
}

