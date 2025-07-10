import { Component, inject } from "@angular/core";
import { SkillsService } from "../../services/skills.service";
import type { Skill } from "../../interfaces/skills.interface";

@Component({
	selector: "app-sobre-mi",
	imports: [],
	templateUrl: "./sobre-mi.component.html",
	styleUrl: "./sobre-mi.component.css",
})
export class SobreMiComponent {
	skillsService = inject(SkillsService);
	skills: Skill[] = [];
	isLoading = true

	async ngOnInit() {
		try{
		this.skills = await this.skillsService.obtenerSkills();
	} catch (error) {
			console.error("Error al cargar las habilidades:", error);
		} finally {
			this.isLoading = false;
		}
}}
