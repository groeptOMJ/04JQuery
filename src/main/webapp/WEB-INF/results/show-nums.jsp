<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
{ "numbers": [
 <c:forEach var="number" items="${nums}" varStatus="status">
    ${number}
    <c:if test="${!status.last}">,</c:if>
  </c:forEach>
  ]}