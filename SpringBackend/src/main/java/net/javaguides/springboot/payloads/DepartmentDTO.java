package net.javaguides.springboot.payloads;


import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.web.bind.annotation.CrossOrigin;

@NoArgsConstructor
@Getter
@Setter
@CrossOrigin(origins = "http://localhost:3000") // Replace with your frontend URL
public class DepartmentDTO {

    private Integer departmentId;

    @NotBlank(message = "Department name is required")
    @Size(min = 4,message = "Min size of department Name is 4")
    private String departmentName;

    @NotBlank
    @Size(min = 10, message = "min size of department Description is 10")
    private String departmentDescription;
}
