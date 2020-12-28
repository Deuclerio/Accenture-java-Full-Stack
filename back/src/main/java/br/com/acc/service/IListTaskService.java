package br.com.acc.service;



import java.util.List;

import br.com.acc.model.ListTask;
import br.com.acc.util.Response;


public interface IListTaskService {
	
	/**
	 * Method to save a ListTask
	 * 
	 * @param listTask
	 * @return listTask
	 */
	ListTask insert(ListTask listTask);

	/**
	 * Method to find a ListTask by Id
	 * 
	 * @param id
	 * @return
	 */
	ListTask findById(Long id);

	/**
	 * Method to find a ListTask all
	 * 
	 * @return
	 */
	List<ListTask> findAll();
}
