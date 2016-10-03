import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { HttpModule } from '@angular/http';
import { APP_BASE_HREF } from '@angular/common';
import { AppComponent } from './app.component';
import { routes } from './app.routes';

import { LoginModule } from './login/login.module';
import { DashboardModule } from './dashboard/dashboard.module';


@NgModule({
	imports: [
		BrowserModule,
		HttpModule,
		RouterModule.forRoot(routes),
		LoginModule,
		DashboardModule,
		
	],
	declarations: [AppComponent],
	providers: [//{
	//	provide: APP_BASE_HREF,
	//	useValue: '<%= APP_BASE %>'
	//}
	],
	bootstrap: [AppComponent]

})
export class AppModule {
  constructor() {
    console.log("Inside App.Modules Constructor");
  }

}
