package br.com.acc.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.acc.model.ListTask;

public interface IListTaskRepository extends JpaRepository<ListTask, Long> {

}
