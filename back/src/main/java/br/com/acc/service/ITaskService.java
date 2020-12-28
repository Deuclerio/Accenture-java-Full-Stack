package br.com.acc.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import br.com.acc.model.Task;
import br.com.acc.util.Response;

public interface ITaskService {

	/**
	 * Method to save a Task
	 * 
	 * @param task
	 * @return Task
	 */
	Task insert(Task task);

	/**
	 * Method to alter name by Task
	 * 
	 * @param task
	 * @param id
	 * @return Task
	 */
	Task alter(Task task, Long id);

	/**
	 * Method to find tasks by Description
	 * 
	 * @param description
	 * @param pageable
	 * @return Page<Client>
	 */
	Page<Task> findByDescription(String description, Pageable pageable);

	/**
	 * Method to find a Task by Id
	 * 
	 * @param id
	 * @return
	 */
	Task findById(Long id);

	/**
	 * Method to delete a Task by Id
	 * 
	 * @param id
	 * @return Response
	 */
	Response deleteById(Long id);
}
