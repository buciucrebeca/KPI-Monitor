import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/component/header/header.component';
import { KpiTableComponent } from './kpi-table/kpi-table.component';
import { PaginationComponent } from './pagination/pagination.component';
import { TopBarComponent } from './top-bar/top-bar.component';

@Component({
  selector: 'app-kpi-management',
  imports: [HeaderComponent, TopBarComponent, KpiTableComponent, PaginationComponent],
  templateUrl: './kpi-management.component.html',
  styleUrl: './kpi-management.component.scss',
})
export class KpiManagementComponent {}
