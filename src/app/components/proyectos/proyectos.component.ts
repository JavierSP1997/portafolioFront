import { Component, inject } from "@angular/core";
import { ProjectsService } from "../../services/projects.service";
import type { Project } from "../../interfaces/projects.interface";

@Component({
	selector: "app-proyectos",
	imports: [],
	templateUrl: "./proyectos.component.html",
	styleUrl: "./proyectos.component.css",
})
export class ProyectosComponent {
	projectsService = inject(ProjectsService);

	projects: Project[] = [];

	async ngOnInit() {
		this.projects = await this.projectsService.obtenerProyectos();
	}
}
