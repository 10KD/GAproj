import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about.component';
import { EarlyLifeComponent } from '../early-life/early-life.component';
import { CareerComponent } from '../career/career.component';

const aboutRoutes: Routes = [
    {
        path: 'about',
        component: AboutComponent,
        children: [ 
            {
                path: 'early-life',
                component: EarlyLifeComponent
            },
            {
                path: 'career',
                component: CareerComponent
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(aboutRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AboutRoutingModule { }