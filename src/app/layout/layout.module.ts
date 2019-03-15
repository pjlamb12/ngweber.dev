import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MainNavComponent } from './main-nav/main-nav.component';

@NgModule({
	declarations: [MainNavComponent],
	imports: [CommonModule, RouterModule],
	exports: [MainNavComponent],
})
export class LayoutModule {}
