import { RouteConfig } from 'vue-router';
import VueRouter from 'vue-router';

import PageNotFoundComponent from './page-not-found-component.vue';
import HelloComponent from './hello.vue';

// Routes resolved in order
export const Routes: RouteConfig[] = [
    { path: '/hello', component: HelloComponent },
    { path: '**', component: PageNotFoundComponent }
];
