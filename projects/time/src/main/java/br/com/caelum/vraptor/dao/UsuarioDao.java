package br.com.caelum.vraptor.dao;



import java.util.List;

import javax.enterprise.context.RequestScoped;
import javax.inject.Inject;
import javax.persistence.EntityManager;
import javax.persistence.NoResultException;
import javax.persistence.Query;
import javax.persistence.TypedQuery;

import br.com.caelum.vraptor.controller.Usuario;

@RequestScoped
public class UsuarioDao {

	private EntityManager manager;
	
	@Inject
	public UsuarioDao(EntityManager manager){
		this.manager = manager;
	}
	
	public UsuarioDao(){}
	
	public void adiciona(Usuario usuario){
		manager.getTransaction().begin();
		manager.persist(usuario);
		manager.getTransaction().commit();
	}
	
	public List<Usuario> lista(){
		TypedQuery<Usuario> query = manager.createQuery("SELECT u FROM Usuario u", Usuario.class);
		return query.getResultList();
		
	}

	public Usuario busca(String login, String senha) {
		String jpql = "SELECT u FROM Usuario u WHERE u.login = :login AND u.senha = :senha";
		Query query = manager.createQuery(jpql);
		query.setParameter("login", login);
		query.setParameter("senha", senha);
		
		try { 
			Usuario usuario = (Usuario) query.getSingleResult(); 
			return usuario; 
		} 
		catch (NoResultException ex) { 
				System.out.println ("Usuário não encontrado!"); 
		}
		return null;
	}
}