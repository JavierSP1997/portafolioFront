import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { lastValueFrom } from "rxjs";
import type { Project } from "../interfaces/projects.interface";
import { environment } from "../../environments/environment";

@Injectable({
	providedIn: "root",
})
export class ProjectsService {
	private apiUrl = environment.apiUrl;
	private httpClient = inject(HttpClient);

	obtenerProyectos(): Promise<Project[]> {
		return lastValueFrom(this.httpClient.get<Project[]>(this.apiUrl));
	}
}
