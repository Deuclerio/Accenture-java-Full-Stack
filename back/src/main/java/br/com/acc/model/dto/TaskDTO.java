package br.com.acc.model.dto;

import br.com.acc.model.ListTask;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;


@AllArgsConstructor
@NoArgsConstructor
public class TaskDTO {
    
	private String description;
	
    private String sn_done;
    
    private ListTask listTask;
   // private ListOfTaskDTO listTask;

    public TaskDTO() {
    	
    }
    
	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}


	public String getSn_done() {
		return sn_done;
	}

	public void setSn_done(String sn_done) {
		this.sn_done = sn_done;
	}

	public ListTask getListTask() {
		return listTask;
	}

	public void setListTask(ListTask listTask) {
		this.listTask = listTask;
	}
	
	
	/*public ListOfTaskDTO getListTask() {
		return listTask;
	}

	public void setListTask(ListOfTaskDTO listTask) {
		this.listTask = listTask;
	}*/
    
}
