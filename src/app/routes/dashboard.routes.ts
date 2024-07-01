import { Routes } from '@angular/router';
import { EditorComponent } from '../features/dashboard/editor/editor.component';

export const routes: Routes = [

    {
        path: ":id",
        component: EditorComponent
    },
    {
        path: "accounts",
        component: EditorComponent
    }
   
];
