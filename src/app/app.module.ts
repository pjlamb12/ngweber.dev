import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';

import { LayoutModule } from './layout/layout.module';
import { SentryErrorHandler } from './sentry.service';

@NgModule({
	declarations: [AppComponent, HomeComponent],
	imports: [BrowserModule, AppRoutingModule, LayoutModule],
	providers: [{ provide: ErrorHandler, useClass: SentryErrorHandler }],
	bootstrap: [AppComponent],
})
export class AppModule {}
