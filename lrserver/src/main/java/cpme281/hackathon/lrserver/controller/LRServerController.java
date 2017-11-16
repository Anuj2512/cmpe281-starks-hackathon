package cpme281.hackathon.lrserver.controller;

import java.io.IOException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class LRServerController {
	
	 @RequestMapping(value = "/{id}", method = RequestMethod.GET)
	 public void performLinkRedirection(HttpServletRequest request, HttpServletResponse response, 
			 @RequestHeader(value="User-Agent") String userAgent, @PathVariable String id) throws IOException{
		 
		 System.out.println("IP Address ==>" + request.getRemoteAddr());
		 
		 System.out.println("User Agent ==>" + userAgent);
		 
		 response.sendRedirect("https://www.google.com");
	 }
}
