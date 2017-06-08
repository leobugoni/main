<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib tagdir="/WEB-INF/tags" prefix="alura" %>

<c:import url="/WEB-INF/jsp/index/header.jsp"></c:import>


<form action="${linkTo[LoginController].autentica(null, null)}" method="post">
	
	<label for="login">Login:</label>
		<input class="form-control" type="text" name="login" id="login" placeholder="Login"/>
		<alura:validationMessage name="login_invalido"/>
		
	<label for="login">Senha:</label>
		<input class="form-control" type="password" name="senha" id="senha" placeholder="Senha"/>
	
	<input class="btn btn-primary" type="submit" name="enviar" id="enviar" value="Login"/>

</form>


<c:import url="/WEB-INF/jsp/index/footer.jsp"/>