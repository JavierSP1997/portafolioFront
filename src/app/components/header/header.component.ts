import { Component } from "@angular/core";

@Component({
	selector: "app-header",
	templateUrl: "./header.component.html",
	styleUrls: ["./header.component.css"],
})
export class HeaderComponent {
	isMenuOpen = false;

	toggleMenu(): void {
		this.isMenuOpen = !this.isMenuOpen;
	}
	scrollTo(section: string): void {
		const element = document.getElementById(section);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
		const navbarMenu = document.getElementById("navbarMenu");
		if (navbarMenu?.classList.contains("show")) {
			navbarMenu.classList.remove("show");
		}
		this.isMenuOpen = false;
	}
}
