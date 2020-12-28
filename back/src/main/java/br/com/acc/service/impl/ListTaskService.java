package br.com.acc.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.acc.exception.CustomException;
import br.com.acc.model.ListTask;
import br.com.acc.repository.IListTaskRepository;
import br.com.acc.service.IListTaskService;
import br.com.acc.util.Constants;
import br.com.acc.util.Response;

@Service
public class ListTaskService implements IListTaskService{
	
	@Autowired
	private IListTaskRepository iListTaskRepository;
	
	@Override
	public ListTask insert(ListTask listTask) {
       return iListTaskRepository.save(listTask);

	}
	@Override
	public ListTask findById(Long id) {
		Optional<ListTask> listTask = iListTaskRepository.findById(id);

        if(listTask.isPresent()){
            return listTask.get();
        }else{
            throw new CustomException(Constants.LISTTASK_NOT_FOUND);
        }
	}
	@Override
	public List<ListTask> findAll() {
		
		return iListTaskRepository.findAll();
	}
	
	
	
}
