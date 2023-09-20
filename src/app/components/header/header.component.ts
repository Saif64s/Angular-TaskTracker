import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private uiService: UiService) {
    this.subscription = uiService
      .onToggle()
      .subscribe((v) => (this.showAddTask = v));
  }

  title = 'task-tracker';
  showAddTask: boolean = false;
  subscription: Subscription;

  ngOnInit(): void {}

  toggleAddTask() {
    this.uiService.toggleAddTask();
  }
}
