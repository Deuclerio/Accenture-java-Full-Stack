package br.com.acc.controller;

import java.net.URI;

import javax.validation.Valid;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import br.com.acc.model.Task;
import br.com.acc.model.dto.TaskAlterDTO;
import br.com.acc.model.dto.TaskDTO;
import br.com.acc.service.ITaskService;
import br.com.acc.util.Response;

@CrossOrigin(origins= "http://localhost:4200")
@RestController
@RequestMapping("/task")
public class TaskController {
	
	@Autowired
	private ITaskService iTaskService;
	
    @PostMapping
    public ResponseEntity<Task> insert(@RequestBody @Valid TaskDTO taskDTO){
        Task task = new ModelMapper().map(taskDTO, Task.class);
        URI location = ServletUriComponentsBuilder
                .fromCurrentRequest().path("/{id}")
                .buildAndExpand(iTaskService.insert(task).getId()).toUri();
        return ResponseEntity.created(location).build();
    }
	
    @GetMapping("/name/{name}")
    public ResponseEntity<Page<Task>> findByName(@PathVariable String description, Pageable pageable){
        return new ResponseEntity<>(iTaskService.findByDescription(description, pageable), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Task> findById(@PathVariable Long id){
        return new ResponseEntity<>(iTaskService.findById(id), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Response> delete(@PathVariable Long id){
        return new ResponseEntity<>(iTaskService.deleteById(id), HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Task> alter(@RequestBody @Valid TaskAlterDTO taskAlterDTO, @PathVariable Long id){
        Task task = new ModelMapper().map(taskAlterDTO, Task.class);
        return new ResponseEntity<>(iTaskService.alter(task, id), HttpStatus.OK);
    }
}
