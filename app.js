/* global angular */

(function () {
  angular.module('superPhoneApp', [])
  .controller('SuperPhoneController', [SuperPhoneController])
  function SuperPhoneController () {
    this.superheroes = [
      {
        name: "Howard Hero",
        phone: "867-5309",
        affiliation: "Blue",
        img_url: "https://r50gh2ss1ic2mww8s3uvjvq1-wpengine.netdna-ssl.com/wp-content/themes/bealearninghero.org/assets/images/dest/home-hero-mosaic.png"
      },
      {
        name: "Henrietta Hero",
        phone: "867-5310",
        affiliation: "Green",
        img_url: "https://r50gh2ss1ic2mww8s3uvjvq1-wpengine.netdna-ssl.com/wp-content/themes/bealearninghero.org/assets/images/dest/hero-image-row.png"
      }
    ]
  }
})()
