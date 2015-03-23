package servlet;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import bean.Person;

/**
 * MVC-based servlet to return some random numbers and colors.
 */
@WebServlet("/search-name")
public class SearchName extends HttpServlet {
	/**
	 *
	 */
	private static final long serialVersionUID = 1L;

	@Override
	public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.setHeader("Cache-Control", "no-cache");
		response.setHeader("Pragma", "no-cache");
		String input = request.getParameter("id");
		Person p = new Person();
		p.setId(Integer.parseInt(input));
		p.setName("Dummy");
		request.setAttribute("person", p);

		response.setContentType("application/json");
		String outputPage = "/WEB-INF/results/show-name.jsp";
		RequestDispatcher dispatcher = request.getRequestDispatcher(outputPage);
		dispatcher.include(request, response);
	}
}
