import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { ApiAuthorizationModule } from 'src/api-authorization/api-authorization.module';
import { AuthorizeGuard } from 'src/api-authorization/authorize.guard';
import { AuthorizeInterceptor } from 'src/api-authorization/authorize.interceptor';
import { MenuSideBarComponent } from './menu-side-bar/menu-side-bar.component';
import { NgBootstrapTableComponent } from './Models/ng-bootstrap-table/ng-bootstrap-table.component';
import { ListFormationsComponent } from './gestion-Formation/list-formations/list-formations.component';
import { SearchDataComponent } from './Models/search-data/search-data.component';
import { AddFormationComponent } from './gestion-Formation/add-formation/add-formation.component';
import { FilterDataComponent } from './Models/filter-data/filter-data.component';
import { FormationDetailsComponent } from './gestion-Formation/formation-details/formation-details.component';
import { PopupConfirmationComponent } from './Models/popup-confirmation/popup-confirmation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";
import { RichTextEditorComponent } from './Models/rich-text-editor/rich-text-editor.component';
import { QuillModule } from 'ngx-quill';


@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        HomeComponent,
        CounterComponent,
        FetchDataComponent,
        MenuSideBarComponent,
        NgBootstrapTableComponent,
        ListFormationsComponent,
        SearchDataComponent,
        AddFormationComponent,
        FilterDataComponent,
        FormationDetailsComponent,
        PopupConfirmationComponent,
        RichTextEditorComponent
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: AuthorizeInterceptor, multi: true }
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
        HttpClientModule,
        FormsModule,
        ApiAuthorizationModule,
        NgxDatatableModule,
        FormsModule,
        ReactiveFormsModule,
        CommonModule, 
        ReactiveFormsModule,
        QuillModule.forRoot(),
        RouterModule.forRoot([
            { path: '', component: HomeComponent, pathMatch: 'full' },
            { path: 'counter', component: CounterComponent },
            { path: 'menu-side-bar', component: MenuSideBarComponent },
            { path: 'list-formation', component: ListFormationsComponent },
            { path: 'formation_details', component: FormationDetailsComponent },
            { path: 'add-formation', component: AddFormationComponent },
            { path: 'fetch-data', component: FetchDataComponent, canActivate: [AuthorizeGuard] },
        ]),
    ]
})
export class AppModule { }
