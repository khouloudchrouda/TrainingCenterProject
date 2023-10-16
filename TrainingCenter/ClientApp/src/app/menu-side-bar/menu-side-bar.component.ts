import { Component , OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-side-bar',
  templateUrl: './menu-side-bar.component.html',
  styleUrls: ['./menu-side-bar.component.css']
})
export class MenuSideBarComponent {

  openSidebar: boolean = true;

  menuSidebar = [
    {
      link_name: "Dashboard",
      link: "",
      icon: "bx bx-grid-alt",
      sub_menu: [
        {
          link_name: "Analytics",
          link: "",
        }]
    }, {
      link_name: "Category",
      link: null,
      icon: "bx bx-collection",
      sub_menu: [
        {
          link_name: "List Formations",
          link: "list-formation",
        }, {
          link_name: "Session",
          link: "formation_details",
        }
      ]
    }, {
      link_name: "Espace Condidat",
      link: "add-formation",
      icon: "bx bx-book-alt",
      sub_menu: [ ]
    }, {
      link_name: "Espace Foramteurs",
      link: null,
      icon: "bx bx-line-chart",
      sub_menu: []
    },
  ]

  constructor() { }

  ngOnInit() {

  }

  showSubmenu(itemEl: HTMLElement) {
    itemEl.classList.toggle("showMenu");
  }
}
