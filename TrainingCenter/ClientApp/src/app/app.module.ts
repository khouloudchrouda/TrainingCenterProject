import { BrowserModule } from '@angular/platform-browser';
import { NgModule ,NO_ERRORS_SCHEMA} from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { QuillModule } from "ngx-quill";
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
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
import { ModuleProgrammeComponent } from './Models/module-programme/module-programme.component';
import { ListCategoriesComponent } from './gestion-Categories/list-categories/list-categories.component';
import { AddCategoriesComponent } from './gestion-Categories/add-categories/add-categories.component';
import { DataTablePagerComponent } from './Models/ng-bootstrap-table/pager.component';
import { MultiSelectDropDownComponent } from './Models/multi-select-drop-down/multi-select-drop-down.component';
import { DetailsCategorieComponent } from './gestion-Categories/details-categorie/details-categorie.component';


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
        RichTextEditorComponent,
        ModuleProgrammeComponent,
        ListCategoriesComponent,
        AddCategoriesComponent,
        DetailsCategorieComponent,
        DataTablePagerComponent,
        MultiSelectDropDownComponent
        
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
        HttpClientModule,
        FormsModule,
        NgxDatatableModule,
        FormsModule,
        ReactiveFormsModule,
        CommonModule, 
        ReactiveFormsModule,
        QuillModule,
        RouterModule.forRoot([
            { path: '', component: HomeComponent, pathMatch: 'full' },
            { path: 'counter', component: CounterComponent },
            { path: 'menu-side-bar', component: MenuSideBarComponent },
            { path: 'list-formation', component: ListFormationsComponent },
            { path: 'formation_details', component: FormationDetailsComponent },
            { path: 'add-formation', component: AddFormationComponent },
            { path: 'list-categories', component: ListCategoriesComponent },
        ]),
    ],
    schemas:[NO_ERRORS_SCHEMA], 
})
export class AppModule { }
