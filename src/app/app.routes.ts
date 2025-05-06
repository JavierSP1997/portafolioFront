import type { Routes } from "@angular/router";
import { MainComponent } from "./components/main/main.component";

export const routes: Routes = [
	{ path: "", redirectTo: "/inicio", pathMatch: "full" },
	{ path: "inicio", component: MainComponent },
	{ path: "**", redirectTo: "/inicio" },
];
