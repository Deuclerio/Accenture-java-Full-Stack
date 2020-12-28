package br.com.acc.controller;

import java.net.URI;
import java.util.List;

import javax.validation.Valid;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import br.com.acc.model.ListTask;
import br.com.acc.model.dto.ListTaskDTO;
import br.com.acc.service.IListTaskService;
import br.com.acc.util.Response;

@CrossOrigin(origins= "http://localhost:4200")
@RestController
@RequestMapping("/listTask")
public class ListTaskController {
	@Autowired
	private IListTaskService iListTaskService;

	@PostMapping
	public ResponseEntity<ListTask> insert(@RequestBody @Valid ListTaskDTO listTaskDTO) {
		ListTask listTask = new ModelMapper().map(listTaskDTO, ListTask.class);
		URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
				.buildAndExpand(iListTaskService.insert(listTask).getId()).toUri();
		return ResponseEntity.created(location).build();
	}
	
    @GetMapping("/{id}")
    public ResponseEntity<ListTask> findById(@PathVariable Long id){
        return new ResponseEntity<>(iListTaskService.findById(id), HttpStatus.OK);
    }
    
    @GetMapping("")
    public List<ListTask> findAll(){
    	return iListTaskService.findAll();
    }
    
}

