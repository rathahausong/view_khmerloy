package khmerloy.configuration.websecurity;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;


import khmerloy.service.implement.CustomUserDetail;


@Configuration
@EnableWebSecurity

public class WebSecurityConfiguration  extends WebSecurityConfigurerAdapter {
	
	@Autowired
	@Qualifier("customUserDetail")
	private CustomUserDetail customuser;
	
	@Autowired
	private AjaxAuthenticationSuccessHandler success;
	
	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
		
		auth.userDetailsService(customuser).passwordEncoder(passwordEncoder());
	}
	
	@Override
	public void configure(WebSecurity web) throws Exception {
		web.ignoring().antMatchers(HttpMethod.OPTIONS, "/**");
	}
	
	@Override
	protected void configure(HttpSecurity http) throws Exception {
		System.out.println("Login page");
		http.csrf().disable();
		http
			.formLogin()
			.loginPage("/login")
			.usernameParameter("username")
			.passwordParameter("password")
			.successHandler(success)
			.permitAll();
		
		http
			.authorizeRequests()
			.antMatchers("/admin/**").hasRole("ADMIN")
			.antMatchers("/owner/**").hasAnyRole("ADMIN","OWNER");
			
		http.logout().logoutUrl("/logout").logoutSuccessUrl("/");
		http.exceptionHandling().accessDeniedPage("/access-denied");
	
	}
	
	@Bean
	public PasswordEncoder passwordEncoder(){
		PasswordEncoder encoder = new BCryptPasswordEncoder();
		return encoder;
	}
	
	/*public static void main(String args[]){
			System.out.println(new BCryptPasswordEncoder().encode("12345"));
	}*/
	
	
}
