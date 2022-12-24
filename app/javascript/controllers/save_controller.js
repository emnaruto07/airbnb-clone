import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
	save(e){
		e.preventDefault();

		console.log('save link clicked!')
	}
}