import type { Routes } from "@angular/router";
import { HeroComponent } from "./components/hero/hero.component";

export const routes: Routes = [
	{ path: "", redirectTo: "/inicio", pathMatch: "full" },
	{ path: "inicio", component: HeroComponent },
	{ path: "**", redirectTo: "/inicio" },
];
