import { BrowserModule, Title } from '@angular/platform-browser';
import { MaterializeModule } from 'angular2-materialize';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NewsComponent } from './components/news/news.component';
import { GraduatesComponent } from './components/graduates/graduates.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { InternationalComponent } from './components/international/international.component';
import { PhotoComponent } from './components/photo/photo.component';
import { EditionComponent } from './components/edition/edition.component';
import { VideoComponent } from './components/video/video.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { RadioComponent } from './components/radio/radio.component';
import { ParliamentComponent } from './components/parliament/parliament.component';
import { GwComponent } from './components/gw/gw.component';
import { GroupsComponent } from './components/groups/groups.component';
import { HeadComponent } from './components/head/head.component';
import { TeachersComponent } from './components/teachers/teachers.component';
import { PsychologistComponent } from './components/psychologist/psychologist.component';
import { LibraryComponent } from './components/library/library.component';
import { MuseumComponent } from './components/museum/museum.component';
import { CanteenComponent } from './components/canteen/canteen.component';
import { PfeComponent } from './components/pfe/pfe.component';
import { GoComponent } from './components/go/go.component';
import { CoursesComponent } from './components/courses/courses.component';
import { TeComponent } from './components/te/te.component';
import { OlympiadsComponent } from './components/olympiads/olympiads.component';
import { ContestsComponent } from './components/contests/contests.component';
import { ConferencesComponent } from './components/conferences/conferences.component';
import { ZnoComponent } from './components/zno/zno.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SliderComponent } from './components/main/slider/slider.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthService} from './services/auth.service';
import { GwService } from './services/gw.service';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { AuthGuard } from './guards/auth.guard';
import { NotAuthGuard } from './guards/notAuth.guard';
import { ProfileComponent } from './components/profile/profile.component';
import { EditGwComponent } from './components/gw/edit-gw/edit-gw.component';
import { DeleteGwComponent } from './components/gw/delete-gw/delete-gw.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NewsComponent,
    GraduatesComponent,
    FooterComponent,
    MainComponent,
    InternationalComponent,
    PhotoComponent,
    EditionComponent,
    VideoComponent,
    ScheduleComponent,
    RadioComponent,
    ParliamentComponent,
    GwComponent,
    GroupsComponent,
    HeadComponent,
    TeachersComponent,
    PsychologistComponent,
    LibraryComponent,
    MuseumComponent,
    CanteenComponent,
    PfeComponent,
    GoComponent,
    CoursesComponent,
    TeComponent,
    OlympiadsComponent,
    ContestsComponent,
    ConferencesComponent,
    ZnoComponent,
    ProjectsComponent,
    SliderComponent,
    RegisterComponent,
    AuthenticationComponent,
    ProfileComponent,
    EditGwComponent,
    DeleteGwComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterializeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    FlashMessagesModule
  ],
  providers: [ Title, AuthService, AuthGuard, NotAuthGuard, GwService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
