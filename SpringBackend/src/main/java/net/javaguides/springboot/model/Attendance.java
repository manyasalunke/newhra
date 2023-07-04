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
@Table(name = "attendance")
@CrossOrigin(origins = "http://localhost:3000") // Replace with your frontend URL
public class Attendance {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer attendanceId;

    @Column(name = "dateOfAttendance")
    private Date dateOfAttendance;

    // Status of the attendance, such as "Present," "Absent," "Late," or "Early Departure."
    @Column(name = "status")
    private String status;

    @Column(name = "remark")
    private String remark;

    //User or admin who created the attendance record.
    @Column(name = "createdBy")
    private String createdBy;

    @ManyToOne
    @JoinColumn(name = "employeeId")
    private Employee employee; // Many-to-One relationship with Employee

}
