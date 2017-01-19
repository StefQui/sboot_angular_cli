package com.example.user;

// @formatter:off

import com.example.role.Role;
import com.example.support.security.CustomUserDetails;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "users")
public class User {

	static final int MAX_LENGTH_USERNAME = 30;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;

	@Column(nullable = false, unique = true, length = MAX_LENGTH_USERNAME)
	private String username;

	@Column(nullable = false)
	private String password;

	private boolean enabled;
	private LocalDateTime creationTime;
	private LocalDateTime modificationTime;

	@OneToMany(mappedBy = "user", fetch = FetchType.EAGER, cascade = CascadeType.ALL)
	private Set<Role> roles = new HashSet<Role>();

	public User() {
	}

	/**
	 * Constructor used exclusively by {@link CustomUserDetails}}
	 *
	 * @param user
	 */
	public User(final User user) {
		this.id = user.id;
		this.username = user.username;
		this.password = user.password;
		this.enabled = user.enabled;
	}

	@PrePersist
	public void prePersist() {
		creationTime = LocalDateTime.now();
	}

	@PreUpdate
	public void preUpdate() {
		modificationTime = LocalDateTime.now();
	}


	@Override
	public boolean equals(Object o) {
		if (this == o) return true;
		if (o == null || getClass() != o.getClass()) return false;

		User user = (User) o;

		if (getId() != null ? !getId().equals(user.getId()) : user.getId() != null) return false;
		return getUsername() != null ? getUsername().equals(user.getUsername()) : user.getUsername() == null;

	}

	@Override
	public int hashCode() {
		int result = getId() != null ? getId().hashCode() : 0;
		result = 31 * result + (getUsername() != null ? getUsername().hashCode() : 0);
		return result;
	}

	@Override
	public String toString() {
		return "User{" +
				"id=" + id +
				", username='" + username + '\'' +
				'}';
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public boolean isEnabled() {
		return enabled;
	}

	public void setEnabled(boolean enabled) {
		this.enabled = enabled;
	}

	public LocalDateTime getCreationTime() {
		return creationTime;
	}

	public void setCreationTime(LocalDateTime creationTime) {
		this.creationTime = creationTime;
	}

	public LocalDateTime getModificationTime() {
		return modificationTime;
	}

	public void setModificationTime(LocalDateTime modificationTime) {
		this.modificationTime = modificationTime;
	}

	public Set<Role> getRoles() {
		return roles;
	}

	public void setRoles(Set<Role> roles) {
		this.roles = roles;
	}
}
