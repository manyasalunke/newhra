package net.javaguides.springboot.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "leaves")
@CrossOrigin(origins = "http://localhost:3000") // Replace with your frontend URL
public class Leave {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int leaveId;

    @Column(name = "leaveReason")
    private String leaveReason;

    @Column(name="startDate")
    private Date startDate;

    @Column(name="endDate")
    private Date endDate;

    @Column(name = "leaveType")
    private String leaveType;

    @Column(name = "leaveStatus")
    private String leaveStatus;

    @ManyToOne
    @JoinColumn(name = "employeeId")
    private Employee employee; // Many-to-One relationship with Employee
}
