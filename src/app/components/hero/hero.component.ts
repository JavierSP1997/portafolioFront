import { Component, type OnInit } from "@angular/core";

@Component({
	selector: "app-hero",
	standalone: true,
	imports: [],
	templateUrl: "./hero.component.html",
	styleUrls: ["./hero.component.css"],
})
export class HeroComponent implements OnInit {
	fullLine1 = 'const nombre = "Javier Sancho Pe"';
	fullLine2 = 'let rol = "Desarrollador web full stack"';

	line1 = "";
	line2 = "";

	typingSpeed = 50;

	ngOnInit() {
		this.typeLine1();
	}

	typeLine1() {
		let index = 0;
		const interval = setInterval(() => {
			this.line1 += this.fullLine1.charAt(index);
			index++;
			if (index === this.fullLine1.length) {
				clearInterval(interval);
				this.typeLine2();
			}
		}, this.typingSpeed);
	}

	typeLine2() {
		let index = 0;
		const interval = setInterval(() => {
			this.line2 += this.fullLine2.charAt(index);
			index++;
			if (index === this.fullLine2.length) {
				clearInterval(interval);
			}
		}, this.typingSpeed);
	}
}
