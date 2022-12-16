import { Controller } from "@hotwired/stimulus";
import { getDistance, convertDistance } from 'geolib';

export default class extends Controller {
  static targets = ['property'];

  connect() {
    window.navigator.geolocation.getCurrentPosition((position) => {
      this.element.dataset.latitude = position.coords.latitude;
      this.element.dataset.longitude = position.coords.longitude;

      this.propertyTargets.forEach((propertyTarget) => {
        // console.log(propertyTarget.querySelector('[data-distance-away]'));
        let distanceFrom = getDistance(
          { latitude: position.coords.latitude, longitude: position.coords.longitude },
          { latitude: propertyTarget.dataset.latitude, longitude: propertyTarget.dataset.longitude },
        );

        // console.log(propertyTarget.dataset.latitude)
        propertyTarget.querySelector('[data-distance-away]').innerHTML = `${Math.round(convertDistance(distanceFrom, 'km'))} kilometer away`;
      });
    });
  }
}