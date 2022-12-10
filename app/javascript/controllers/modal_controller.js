import { Controller } from "@hotwired/stimulus"
import { enter, leave, toggle } from 'el-transition'

export default class extends Controller {
  // static targets = ['openUserMenu'];
  connect() {
    document.getElementById('model-wrapper').addEventListener('click', this.closeModal);
  }

  closeModal(event) {
    const modalPanelClicked = document.getElementById('model-panel').contains(event.target);

    if(!modalPanelClicked && event.target.id !== 'model-trigger') {
      leave(document.getElementById('model-wrapper'));
      leave(document.getElementById('model-backdrop'));
      leave(document.getElementById('model-panel'));
    }
  }

  showModal(){
    enter(document.getElementById('model-wrapper'));
    enter(document.getElementById('model-backdrop'));
    enter(document.getElementById('model-panel'));
  }
}