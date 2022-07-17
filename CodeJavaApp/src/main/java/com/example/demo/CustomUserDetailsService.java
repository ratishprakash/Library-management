package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

public class CustomUserDetailsService implements UserDetailsService {
	
	@Autowired
	private UserRepository repo;
	
	@Override
	public UserDetails loadUserByUsername(String reg_no) throws UsernameNotFoundException {
		User user = repo.findByReg_no(reg_no);
		if(user==null) { 
			throw new UsernameNotFoundException("Register Number not found");
		}
		return new CustomUserDetails(user);
	}

}
