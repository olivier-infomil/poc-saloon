import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AbacoMobileComponent } from './pages/abaco-mobile/abaco-mobile.component';
import { ScapmareeComponent } from './pages/scapmaree/scapmaree.component';
import { ScafelSequoiaLaboComponent } from './pages/scafel-sequoia-labo/scafel-sequoia-labo.component';
import { AccueilFideliteComponent } from './pages/accueil-fidelite/accueil-fidelite.component';
import { ScafelMobifreshComponent } from './pages/scafel-mobifresh/scafel-mobifresh.component';
import { AssistantBtComponent } from './pages/assistant-bt/assistant-bt.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'abaco-mobile', component: AbacoMobileComponent },
    { path: 'assistant-bt', component: AssistantBtComponent },
    { path: 'scapmaree', component: ScapmareeComponent },
    { path: 'scafel-mobifresh', component: ScafelMobifreshComponent },
    { path: 'sequoia-labo', component: ScafelSequoiaLaboComponent },
    { path: 'accueil-fidelite', component: AccueilFideliteComponent },
    { path: '**', component: HomeComponent },
]
