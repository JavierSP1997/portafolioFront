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

	async ngOnInit() {
		this.skills = await this.skillsService.obtenerSkills();
		console.log(this.skills);
	}
}
