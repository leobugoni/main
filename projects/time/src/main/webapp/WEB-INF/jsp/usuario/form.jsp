<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib tagdir="/WEB-INF/tags" prefix="alura" %>

<c:import url="/WEB-INF/jsp/index/header.jsp"></c:import>

<form action="${linkTo[UsuarioController].adiciona(null)}"method="post">
	<label for="nome">Nome:</label>
		<input class="form-control" type="text" placeholder="Nome" name="usuario.nome" id="nome" value="${usuario.nome}"/>
		<alura:validationMessage name="usuario.nome"/>

	<label for="login">Login:</label>
		<input class="form-control" type="text" placeholder="Usuario" name="usuario.login" id="login" value="${usuario.login}"/>
		<alura:validationMessage name="usuario.login"/>
	
	<label for="email">E-mail</label>
		<input class="form-control" type="text" placeholder="E-mail" name="usuario.email" id="email" value="${usuario.email}"/>
		<alura:validationMessage name="usuario.email"/>		
	
	<label for="senha">Senha:</label>
		<input class="form-control" type="password" placeholder="Senha" name="usuario.senha" id="senha"/>
		<alura:validationMessage name="usuario.senha"></alura:validationMessage>
	
	<button class="btn btn-primary" type="submit" value="Criar">Criar</button>
	
</form>

<c:import url="/WEB-INF/jsp/index/footer.jsp"></c:import>
