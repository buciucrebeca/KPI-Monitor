import { Component } from '@angular/core';
import {
  LucideChartNoAxesColumn,
  LucideDownload,
  LucidePlus,
  LucideRefreshCw,
  LucideSearch,
} from '@lucide/angular';

@Component({
  selector: 'app-top-bar',
  imports: [LucideSearch, LucideDownload, LucideRefreshCw, LucideChartNoAxesColumn, LucidePlus],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.scss',
})
export class TopBarComponent {}
