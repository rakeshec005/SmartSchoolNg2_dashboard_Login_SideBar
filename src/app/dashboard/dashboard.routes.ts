import { Route,Routes } from '@angular/router';
import { HomeRoutes } from './home/index';
import { BlankPageRoutes } from './blank-page/index';
import { BSComponentRoutes } from './bs-component/index';

import { DashboardComponent } from './dashboard.component';

/// component
import { HomeComponent } from './home/home.component';
import { BSComponentComponent } from './bs-component/bsComponent.component';
import { BlankPageComponent } from './blank-page/blankPage.component';


export const DashboardRoutes: Route[] = [
  	{
    	path: 'dashboard',
    	component: DashboardComponent,
    	children: [
			 { path: 'home', component: HomeComponent },
			 { path: 'components', component: BSComponentComponent },
			 { path: 'blankpage', component: BlankPageComponent },
		
    	]
  	}
];
