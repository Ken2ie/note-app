import { Routes } from '@angular/router';
import { EditorComponent } from '../features/dashboard/editor/editor.component';

export const routes: Routes = [

    {
        path: "",
        component: EditorComponent
    },
    {
        path: "accounts",
        component: EditorComponent
    }
   
];
