import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})

export class TodoComponent implements OnInit {

  todoList:any = []

  constructor(private apiService: ApiService) {    
  }

  ngOnInit() {
    this.apiService.getTodoList().subscribe((data) => {
      this.todoList = data
    })
  }

}
