import { Controller } from "@hotwired/stimulus";
import axios from 'axios';

export default class extends Controller {
  // static targets = ['property'];
  HEADERS = { 'ACCEPT': 'application/json'}

  favorite(e){
    e.preventDefault()
    if (this.element.dataset.userLoggedIn === 'false') {
      return document.querySelector('[data-header-target="userAuthLink"').click();
    }

    if (this.element.dataset.favorited === 'true'){
      axios.delete(this.getUnfavoritePath(this.element.dataset.favoriteId), {
      headers: {
        'ACCEPT': 'application/json'
      }
      }).then((response) => {
        this.element.dataset.favorited = 'false'
        this.element.dataset.favoriteId = '';
        this.element.setAttribute('fill', '#ced4da');
      });
    } else {
      axios.post(this.getFavoritePath(), {
          user_id: this.element.dataset.userId,
          property_id: this.element.dataset.propertyId
        },{
            headers: {
              'ACCEPT': 'application/json'
          }
        })
      .then((response) => {
        this.element.dataset.favorited = 'true'
        this.element.dataset.favoriteId = response.data.id;
        this.element.setAttribute('fill', 'black');
      });
    }
  }

  getFavoritePath() {
    return 'api/favorites';
  }

  getUnfavoritePath(favoriteId){
    return `/api/favorites/${favoriteId}`
  }

// favoriteProperty() {
//   axios.post(this.getFavoritePath(),{
//     user_id: this.element.dataset.userId,
//     property_id: this.element.dataset.propertyId
//   }, {
//         headers: HEADERS
//   }).then((response) => {
//     this.element.dataset.favorited = 'true'
//     this.element.dataset.favorited = response.data.id;
//   });
// }

// getUnfavoritePath() {
//   axios.delete(this.getUnfavoritePath(this.element.dataset.favoriteId),{
//   }, {
//         headers: this.HEADERS
//   }).then((response) => {
//     this.element.dataset.favorited = "false"
//     this.element.dataset.favoriteId = "";
//   });
// }
}

