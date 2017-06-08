<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib tagdir="/WEB-INF/tags" prefix="alura" %>

<c:import url="/WEB-INF/jsp/index/header.jsp"></c:import>


<a href="${linkTo[UsuarioController].form()}">Novo Usuario</a>

<table class="table table-hover">
	<thead>
		<tr>
			<th>Id</th>
			<th>Nome</th>
			<th>E-mail</th>
			<th>Login</th>
		</tr>
	</thead>
	<tbody>
		<c:forEach items="${usuarios}" var="usuario">
		<tr>${usuario.id}</tr>
		<tr>${usuario.nome}</tr>
		<tr>${usuario.email}</tr>
		<tr>${usuario.login}</tr>
		</c:forEach>
	</tbody>
</table>



<c:import url="/WEB-INF/jsp/index/footer.jsp"></c:import>