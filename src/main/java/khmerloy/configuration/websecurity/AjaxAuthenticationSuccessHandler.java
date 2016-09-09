package khmerloy.configuration.websecurity;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.stereotype.Component;

@Component("ajaxAuthenticationSuccessHandler")
public class AjaxAuthenticationSuccessHandler  implements AuthenticationSuccessHandler {

	@Override
	public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse respone, Authentication authentication)
			throws IOException, ServletException {
		// TODO Auto-generated method stub
		String url = this.thagetURL(authentication);
		respone.sendRedirect(url);
	}
	
	private String thagetURL(Authentication auth){
		
		System.out.println("Authentication "+auth.getPrincipal());
		
		Collection<? extends GrantedAuthority> authies = auth.getAuthorities();
		List<String> role = new ArrayList<>();
		
		for(GrantedAuthority gran : authies){
			role.add(gran.getAuthority());
		}
		
		if(role.contains("ROLE_ADMIN")){
			return "admin";
		}else if(role.contains("ROLE_OWNER")){
			return "owner";
		}
		return "index";
	}

}
