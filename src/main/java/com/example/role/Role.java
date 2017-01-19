package com.example.role;

import com.example.user.User;

import javax.persistence.*;

@Entity
public class Role {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;

	@Enumerated(EnumType.STRING)
	@Column(nullable = false)
	private RoleName rolename;

	@JoinColumn(name = "user_id", nullable = false)
	@ManyToOne
	private User user;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public RoleName getRolename() {
		return rolename;
	}

	public void setRolename(RoleName rolename) {
		this.rolename = rolename;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	@Override
	public String toString() {
		return "Role{" +
				"id=" + id +
				", rolename=" + rolename +
				", user=" + user +
				'}';
	}

	@Override
	public boolean equals(Object o) {
		if (this == o) return true;
		if (o == null || getClass() != o.getClass()) return false;

		Role role = (Role) o;

		if (getId() != null ? !getId().equals(role.getId()) : role.getId() != null) return false;
		return getUser() != null ? getUser().equals(role.getUser()) : role.getUser() == null;

	}

	@Override
	public int hashCode() {
		int result = getId() != null ? getId().hashCode() : 0;
		result = 31 * result + (getUser() != null ? getUser().hashCode() : 0);
		return result;
	}
}
