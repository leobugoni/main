<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Sistema de Horas</title>
<link href="<c:url value='/bootstrap/css/bootstrap.css'/>" rel="stylesheet"/>
</head>
<body>
	<nav>
		<ul class="nav nav-tabs">
			<li><a href="${linkTo[IndexController].index()}">Home</a></li>
			<li><a href="${linkTo[UsuarioController].lista()}">Usuario</a></li>
			<li><a href="${linkTo[UsuarioController].form()}">Criar Conta</a></li>
			<c:if test="${usuarioLogado.logado}">
				<li><a href="${linkTo[LoginController].desloga()}">Sair</a></li>
			</c:if>
			<c:if test="${!usuarioLogado.logado}">
				<li><a href="${linkTo[LoginController].form()}">Entrar</a></li>
			</c:if>
		</ul>
	</nav>
	<div class="container">
		<main class="col-sm-8">
		<!-- CONTEUDO -->