// angular
import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ServiceWorkerModule } from '@angular/service-worker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';

// environment
import { environment } from '../environments/environment';

// core
import { InputFormatDirective } from './core/directives';
import { AppErrorHandler } from './core/errors';
import { SummaryPipe } from './core/pipes';

// Material Design Module
import { MatComponentsModule } from './core/modules/mat-components/mat-components.module';

// components
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { PostComponent } from './components/post/post.component';
import { UploadTaskComponent } from './components/upload-task/upload-task.component';
import { MuseumsPageComponent } from './components/pages/museums-page/museums-page.component';
import { ArtMovementsPageComponent } from './components/pages/art-movements-page/art-movements-page.component';
import { CountriesPageComponent } from './components/pages/countries-page/countries-page.component';
import { CreateCountryFormComponent } from './components/forms/create-country-form/create-country-form.component';
import { CreateArtMovementFormComponent } from './components/forms/create-art-movement-form/create-art-movement-form.component';
import { CreateMuseumFormComponent } from './components/forms/create-museum-form/create-museum-form.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    InputFormatDirective,
    SummaryPipe,
    PostComponent,
    UploadTaskComponent,
    MuseumsPageComponent,
    ArtMovementsPageComponent,
    CountriesPageComponent,
    CreateCountryFormComponent,
    CreateArtMovementFormComponent,
    CreateMuseumFormComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
    FormsModule,
    MatComponentsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireStorageModule
  ],
  providers: [
    { provide: ErrorHandler, useClass: AppErrorHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
