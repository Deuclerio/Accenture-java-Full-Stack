package br.com.acc.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@Table
@Entity 
@AllArgsConstructor
@NoArgsConstructor
public class Task {
	
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
    
    @Column(name = "name", length = 100, nullable = false)
	private String description;
    
    @Column
    private String sn_done;
    
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name="listTask")
    @JsonIgnore
    private ListTask listTask;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}
	
	public ListTask getListTask() {
		return listTask;
	}

	public void setListTask(ListTask listTask) {
		this.listTask = listTask;
	}

	public String getSn_done() {
		return sn_done;
	}

	public void setSn_done(String sn_done) {
		this.sn_done = sn_done;
	}
}
