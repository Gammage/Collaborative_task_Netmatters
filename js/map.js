//Ipswich waterfront coordinates: [52.0527, 1.161]


//Norwich coordinates
//52.6476° N, 1.2638° E
var mymap = L.map('mapid').setView([52.6476, 1.2638], 13);



var marker = L.marker([52.6476, 1.2638]).addTo(mymap);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiYmVjd3kiLCJhIjoiY2trcjA4eWZxMDl6eTJwbnVkdGozNjc1aSJ9.aycPan2swxnRypDPUOIAhQ'
}).addTo(mymap);