package khmerloy.enities;

import java.util.Collection;
import java.util.HashSet;
import java.util.Set;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

public class User implements UserDetails {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private String user_name;
	private String password;
	private String role;
	private String email;
	private int id;
	private boolean isenabled;
	private boolean isaccountnonexpired;
	private boolean isaccountnonlocked;
	private boolean iscredentialsnonexpired;
	
	
	public boolean isIsenabled() {
		return isenabled;
	}
	public void setIsenabled(boolean isenabled) {
		this.isenabled = isenabled;
	}
	public boolean isIsaccountnonexpired() {
		return isaccountnonexpired;
	}
	public void setIsaccountnonexpired(boolean isaccountnonexpired) {
		this.isaccountnonexpired = isaccountnonexpired;
	}
	public boolean isIsaccountnonlocked() {
		return isaccountnonlocked;
	}
	public void setIsaccountnonlocked(boolean isaccountnonlocked) {
		this.isaccountnonlocked = isaccountnonlocked;
	}
	public boolean isIscredentialsnonexpired() {
		return iscredentialsnonexpired;
	}
	public void setIscredentialsnonexpired(boolean iscredentialsnonexpired) {
		this.iscredentialsnonexpired = iscredentialsnonexpired;
	}
	
	public String getUser_name() {
		return user_name;
	}
	
	public void setUser_name(String user_name) {
		this.user_name = user_name;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		// TODO Auto-generated method stub
		Set<GrantedAuthority> role = new HashSet<>();
		role.add(new SimpleGrantedAuthority("ROLE_"+this.role.toUpperCase()));
		return role;
	}
	@Override
	public boolean isAccountNonExpired() {
		// TODO Auto-generated method stub
		return this.isaccountnonexpired;
	}
	@Override
	public boolean isAccountNonLocked() {
		// TODO Auto-generated method stub
		return this.isaccountnonlocked;
	}
	@Override
	public boolean isCredentialsNonExpired() {
		// TODO Auto-generated method stub
		return this.iscredentialsnonexpired;
	}
	@Override
	public boolean isEnabled() {
		// TODO Auto-generated method stub
		return this.isenabled;
	}
	
	@Override
	public String getUsername() {
		return this.email;
	}
	
	@Override
	public String getPassword() {
		// TODO Auto-generated method stub
		return this.password;
	}
	
	@Override
	public String toString() {
		return "username "+this.user_name+" password "+this.password+" role "+this.role;
	}
	
	
}
