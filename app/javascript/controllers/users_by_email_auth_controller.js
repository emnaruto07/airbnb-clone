import { Controller } from "@hotwired/stimulus";
import axios from 'axios';

export default class extends Controller {
  static targets = ['email', 'submit']

  connect() {
    // console.log("user_by_email", axios)
    this.submitTarget.addEventListener('click', (e) => {
      e.preventDefault();

      if (this.emailTarget.value.length === 0){
      } else {
         axios.get('/api/users_by_email', {
          headers: {
            'ACCEPT': 'application/json'
          },
          params: {
            email: this.emailTarget.value
          }
        }).then((response) => {
          Turbo.visit('/users/sign_in');
        }).catch((response) => {
          Turbo.visit('/users/sign_up');
        })
      }
    });
  };
}