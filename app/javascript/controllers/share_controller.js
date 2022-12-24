import { Controller } from "@hotwired/stimulus"


export default class extends Controller {
	share(e){
		e.preventDefault();

		console.log('share link clicked!')
	}
}