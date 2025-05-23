import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import type { Skill } from "../interfaces/skills.interface";
import { lastValueFrom } from "rxjs";
import { environment } from "../../environments/environment";

@Injectable({
	providedIn: "root",
})
export class SkillsService {
	private apiUrl = `${environment.apiUrl}/skills`;
	private httpClient = inject(HttpClient);

	obtenerSkills(): Promise<Skill[]> {
		return lastValueFrom(this.httpClient.get<Skill[]>(this.apiUrl));
	}
}
