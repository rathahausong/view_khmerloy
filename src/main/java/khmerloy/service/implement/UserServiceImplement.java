package khmerloy.service.implement;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import khmerloy.enities.User;
import khmerloy.service.UserService;

@Service
@Qualifier("userServiceImplement")
public class UserServiceImplement implements UserService {

	@Override
	public User findUserByEmail(String email) {
		System.out.println("finder user by email");
		User user = new User();
		user.setEmail("ratha@gmail.com");
		user.setUser_name("ratha");
		user.setRole("admin");
		user.setPassword("$2a$10$zMiMxApMfbyftAutvgDOHeQLaN9977wWpHkek7vhf.SnEh.806Gmi");
		user.setIsaccountnonexpired(true);
		user.setIsaccountnonlocked(true);
		user.setIscredentialsnonexpired(true);
		user.setIsenabled(true);
		
		return user;
	}

}
