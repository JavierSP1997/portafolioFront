import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import type { Skill } from "../interfaces/skills.interface";
import { lastValueFrom } from "rxjs";

@Injectable({
	providedIn: "root",
})
export class SkillsService {
	private apiUrl = "http://localhost:3000/api/skills";
	private httpClient = inject(HttpClient);

	obtenerSkills(): Promise<Skill[]> {
		return lastValueFrom(this.httpClient.get<Skill[]>(this.apiUrl));
	}
}
