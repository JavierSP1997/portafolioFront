import { Component } from "@angular/core";
import { SobreMiComponent } from "../sobre-mi/sobre-mi.component";

@Component({
	selector: "app-hero",
	standalone: true,
	imports: [SobreMiComponent],
	templateUrl: "./main.component.html",
	styleUrls: ["./main.component.css"],
})
export class MainComponent {}
