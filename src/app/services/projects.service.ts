import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { lastValueFrom } from "rxjs";
import type { Project } from "../interfaces/projects.interface";

@Injectable({
	providedIn: "root",
})
export class ProjectsService {
	private apiUrl = "http://localhost:3000/api/projects";
	private httpClient = inject(HttpClient);

	obtenerProyectos(): Promise<Project[]> {
		return lastValueFrom(this.httpClient.get<Project[]>(this.apiUrl));
	}
}
