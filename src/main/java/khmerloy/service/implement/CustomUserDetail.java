package khmerloy.service.implement;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import khmerloy.enities.User;

@Service
@Qualifier("customUserDetail")
public class CustomUserDetail implements UserDetailsService {
	
	@Autowired
	@Qualifier("userServiceImplement")
	private UserServiceImplement userservcieimplement;
	@Override
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
		System.out.println("custom user"+email);
		User user = userservcieimplement.findUserByEmail(email);
		if(user==null){
			System.out.println("User not found !");
			throw new UsernameNotFoundException("User not Found !");
		}
		return user;
	}

}
