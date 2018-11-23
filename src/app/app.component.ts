import { Component, OnInit, ComponentFactoryResolver } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  tasks = [];
  newItem = {};
  showModal = false;


  ngOnInit() {
    this.tasks = [{
      taskIcon: 'calendar_today',
      taskIconColor: 'blue',
      name: 'Spring brand campaign',
      subtitle: 'Brand marketing',
      status: 'onTrack',
      lastUpdated: 'Just now',
      progress: 90,
      dateRange: 'Nov 1 - Feb 20',
      budget: '1.25MM',
      priority: 'medium',
      avatarPath: '../assets/user1.jpeg',
      owner: 'Kat',
      overdueTasks: 0,
      incompleteTasks: 20,
      completedTasks: 27
    }, {
      taskIcon: 'check_circle_outline',
      taskIconColor: 'green',
      name: 'EMEA brand awareness campaign',
      subtitle: 'International marketing',
      status: 'atRisk',
      lastUpdated: '4 days ago',
      progress: 43,
      dateRange: 'Nov 1 - Feb 20',
      budget: '2MM',
      priority: 'high',
      avatarPath: '../assets/user2.jpeg',
      owner: 'Jil',
      overdueTasks: 20,
      incompleteTasks: 5,
      completedTasks: 30

    }, {
      taskIcon: 'trending_up',
      taskIconColor: 'indigo',
      name: 'Influencer campaign',
      subtitle: 'Brand marketing',
      status: 'offTrack',
      lastUpdated: '30 minutes ago',
      progress: 20,
      dateRange: 'Nov 1 - Feb 20',
      budget: '10K',
      priority: 'medium',
      avatarPath: '../assets/user3.jpeg',
      owner: 'Miley',
      overdueTasks: 25,
      incompleteTasks: 5,
      completedTasks: 3
    }, {
      taskIcon: 'face',
      taskIconColor: 'pink',
      name: 'Global costumer growth campaign',
      subtitle: 'Aquisitions',
      status: 'atRisk',
      lastUpdated: '2 days ago',
      progress: 60,
      dateRange: 'Nov 1 - Feb 20',
      budget: '4MM',
      priority: 'high',
      avatarPath: '../assets/user4.jpeg',
      owner: 'Anne',
      overdueTasks: 20,
      incompleteTasks: 10,
      completedTasks: 1
    }, {
      taskIcon: 'favorite_border',
      taskIconColor: 'orchid',
      name: 'Costumer love campaign',
      subtitle: 'Social media',
      status: 'onTrack',
      lastUpdated: '2 hours ago',
      progress: 76,
      dateRange: 'Nov 1 - Feb 20',
      budget: '125K',
      priority: 'low',
      avatarPath: '../assets/user5.jpeg',
      owner: 'Judy',
      overdueTasks: 0,
      incompleteTasks: 55,
      completedTasks: 5
    }, {
      taskIcon: 'local_florist',
      taskIconColor: 'golden',
      name: 'Spring product campaign',
      subtitle: 'Product marketing',
      status: 'atRisk',
      lastUpdated: 'Yesterday',
      progress: 50,
      dateRange: 'Nov 1 - Feb 20',
      budget: '750k',
      priority: 'low',
      avatarPath: '../assets/user6.jpeg',
      owner: 'Moon',
      overdueTasks: 18,
      incompleteTasks: 10,
      completedTasks: 5
    }, {
      taskIcon: 'sentiment_satisfied_alt',
      taskIconColor: 'indigo',
      name: 'Client survey',
      subtitle: 'Product marketing',
      status: 'onTrack',
      lastUpdated: 'Today',
      progress: 70,
      dateRange: 'July 1 - Aug 20',
      budget: '50k',
      priority: 'medium',
      avatarPath: '../assets/user1.jpeg',
      owner: 'Sky',
      overdueTasks: 0,
      incompleteTasks: 10,
      completedTasks: 15
    }, {
      taskIcon: 'swap_calls',
      taskIconColor: 'blue',
      name: 'Winter campaign',
      subtitle: 'Sales',
      status: 'atRisk',
      lastUpdated: 'Yesterday',
      progress: 30,
      dateRange: 'Nov 15 - Feb 10',
      budget: '750k',
      priority: 'high',
      avatarPath: '../assets/user3.jpeg',
      owner: 'Ann',
      overdueTasks: 18,
      incompleteTasks: 10,
      completedTasks: 5
    }, {
      taskIcon: 'face',
      taskIconColor: 'pink',
      name: 'Global costumer growth campaign',
      subtitle: 'Aquisitions',
      status: 'atRisk',
      lastUpdated: '2 days ago',
      progress: 60,
      dateRange: 'Nov 1 - Feb 20',
      budget: '4MM',
      priority: 'high',
      avatarPath: '../assets/user4.jpeg',
      owner: 'Anne',
      overdueTasks: 20,
      incompleteTasks: 10,
      completedTasks: 1
    }];
  }

  openModal(item) {
    this.showModal = true;
    this.newItem = item;
    console.log('newItem: ', this.newItem);
  }

  closeModal(e, clickedElement) {
    if (e.target.className === 'modal-wrap') {
      this.showModal = false;
    }
    if (clickedElement === 'closeBtn') {
      this.showModal = false;
    }
  }
}

