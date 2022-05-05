import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserSearchComponent } from './user-search/user-search.component';
import {SharedModule} from '../shared/shared.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {ReactiveFormsModule} from '@angular/forms';
import { UserDetailsComponent } from './user-details/user-details.component';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {CoreModule} from '../core/core.module';



@NgModule({
    declarations: [UserSearchComponent, UserDetailsComponent],
    exports: [
        UserSearchComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,
        MatListModule,
        MatCardModule,
        MatButtonModule,
        CoreModule
    ]
})
export class MainModule { }
