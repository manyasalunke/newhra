package net.javaguides.springboot.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import jakarta.persistence.*;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.*;
import java.util.stream.Collectors;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "employees")
@CrossOrigin(origins = "http://localhost:3000") // Replace with your frontend URL
public class Employee implements UserDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "last_name")
    private String lastName;

    @Column(name = "user_name", unique = true)
    private String userName;

    @Column(name = "email_id", unique = true)
    private String emailId;

    @Column(name = "password", unique = true)
    private String password;

    @Column(name="phone_number")
    private String phoneNumber;

    @Column(name="address")
    private String address;

    @Column(name="date_of_birth")
    private Date dateOfBirth;

    @Column(name="date_of_joining")
    private Date dateOfJoining;

    @OneToOne
    @JoinColumn(name = "departmentId")
    private Department department;

    @OneToMany(mappedBy = "employee")
    private List<Leave> leaveDays;

    @OneToOne
    @JoinColumn(name = "salaryId")
    private Salary salaries;

    @OneToMany(mappedBy = "employee")
    private List<Payslip> payslips;

    @ManyToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinTable(name = "employee_role", joinColumns = @JoinColumn(name = "employee", referencedColumnName = "id"), inverseJoinColumns = @JoinColumn(name = "role", referencedColumnName = "id"))
    private Set<Role> roles = new HashSet<>();

    public Integer getId() { return id; }
    public void setId(Integer id) { this.id = id; }

    public String getFirstName() {
        return firstName;
    }
    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }
    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getUserName() {
        return userName;
    }
    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getEmailId() {
        return emailId;
    }
    public void setEmailId(String emailId) {
        this.emailId = emailId;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        List<SimpleGrantedAuthority> authorities = this.roles.stream().map((role) -> new SimpleGrantedAuthority(role.getName())).collect(Collectors.toList());
        return authorities;
    }

    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return this.userName;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getPhoneNumber() {return phoneNumber;	}
    public void setPhoneNumber(String phoneNumber) {this.phoneNumber = phoneNumber;	}

    public String getAddress() {return address;	}
    public void setAddress(String address) {this.address = address;	}

    public Date getDateOfBirth() {return dateOfBirth;	}
    public void setDateOfBirth(Date dateOfBirth) {this.dateOfBirth = dateOfBirth;	}

    public Date getDateOfJoining() {return dateOfJoining;	}
    public void setDateOfJoining(Date dateOfJoining) {this.dateOfJoining = dateOfJoining;	}
}
