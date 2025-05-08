import { Component } from "@angular/core";
import { SobreMiComponent } from "../sobre-mi/sobre-mi.component";
import { ProyectosComponent } from "../proyectos/proyectos.component";

@Component({
	selector: "app-hero",
	standalone: true,
	imports: [SobreMiComponent, ProyectosComponent],
	templateUrl: "./main.component.html",
	styleUrls: ["./main.component.css"],
})
export class MainComponent {
	scrollToProjects(): void {
		const element = document.getElementById("proyectos");
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	}
}
