/**
 * Created by Anastasiia on 18.07.2017.
 */

import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { NewsComponent } from './components/news/news.component';
import { GraduatesComponent } from './components/graduates/graduates.component';
import { MainComponent } from './components/main/main.component'
import { InternationalComponent } from './components/international/international.component'
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
import { AdminRouteComponent } from './components/admin-route/admin-route.component';




const appRoutes: Routes = [
  {
    path: 'adminEditorArea',
    component: AdminRouteComponent
  },
  {
    path: '',
    component: MainComponent
  },
  { path: 'news',
    component: NewsComponent
  },
  {
    path: 'graduates',
    component: GraduatesComponent
  },
  {
    path: 'internationalPage',
    component: InternationalComponent
  },
  {
    path: 'photo',
    component: PhotoComponent
  },
  {
    path: 'video',
    component: VideoComponent
  },
  {
    path: 'edition',
    component: EditionComponent
  },
  {
    path: 'schedule',
    component: ScheduleComponent
  },
  {
    path: 'radio_lag',
    component: RadioComponent
  },
  {
    path: 'parliament',
    component: ParliamentComponent
  },
  {
    path: 'gw',
    component: GwComponent
  },
  {
    path: 'groups',
    component: GroupsComponent
  },
  {
    path: 'head',
    component: HeadComponent
  },
  {
    path: 'teachers',
    component: TeachersComponent
  },
  {
    path: 'psychologist',
    component: PsychologistComponent
  },
  {
    path: 'library',
    component: LibraryComponent
  },
  {
    path: 'museum',
    component: MuseumComponent
  },
  {
    path: 'canteen',
    component: CanteenComponent
  },
  {
    path: 'pfe',
    component: PfeComponent
  },
  {
    path: 'go',
    component: GoComponent
  },
  {
    path: 'courses',
    component: CoursesComponent
  },
  {
    path: 'examples',
    component: TeComponent
  },
  {
    path: 'olympiads',
    component: OlympiadsComponent
  },
  {
    path:'contests',
    component: ContestsComponent
  },
  {
    path: 'conferences',
    component: ConferencesComponent
  },
  {
    path: 'zno',
    component: ZnoComponent
  },
  {
    path: 'projects',
    component: ProjectsComponent
  }

  // { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
