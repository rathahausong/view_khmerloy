package khmerloy.service;

import khmerloy.enities.User;

public interface UserService {
	public User findUserByEmail(String email);
}
