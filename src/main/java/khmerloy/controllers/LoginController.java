package khmerloy.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.validation.Errors;
import org.springframework.validation.Validator;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class LoginController implements Validator {
	@RequestMapping(value={"/","/login"},method = RequestMethod.GET)
	public String login(){
		return "login";
	}

	@Override
	public boolean supports(Class<?> arg0) {
		
		return false;
	}

	@Override
	public void validate(Object arg0, Errors arg1) {
		// TODO Auto-generated method stub
		
	}
}
