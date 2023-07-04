package net.javaguides.springboot.payloads;

import jakarta.persistence.Column;
import jakarta.validation.constraints.DecimalMin;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.web.bind.annotation.CrossOrigin;

@NoArgsConstructor
@Getter
@Setter
@CrossOrigin(origins = "http://localhost:3000") // Replace with your frontend URL
public class SalaryDTO {

    private int salaryId;

    @NotBlank(message = "month is required")
    private String month;

    @NotNull(message = "year is required")
    private Integer year;

    @NotNull(message = "Basic Salary is required")
    @DecimalMin(value = "0.0", inclusive = false, message = "Basic Salary must be a positive decimal value")
    private Double basicSalary;

    private Double allowances;

    @Column(name = "deduction")
    private Double deduction;

    @DecimalMin(value = "0.0", inclusive = false, message = "Net Salary must be a positive decimal value")
    private Double netSalary;

}
