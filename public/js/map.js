mapboxgl.accessToken = mapToken;
{
  /* console.log(mapToken); */
}
const map = new mapboxgl.Map({
  container: "map", // container ID
  style:"mapbox://styles/mapbox/streets-v12",
  center: listing.geometry.coordinates, // starting position [lng, lat]. Note that lat must be set between -90 and 90
  zoom: 9, // starting zoom
});

const markerElement = document.createElement("div");

markerElement.innerHTML = `<i class="fa-regular fa-compass"></i>`;

markerElement.style.fontSize = "30px";
markerElement.style.color = "red";
markerElement.style.cursor = "pointer";

const marker = new mapboxgl.Marker({ element: markerElement })
  .setLngLat(listing.geometry.coordinates) // listing.geometry.coordinates
  .setPopup(
    new mapboxgl.Popup({ offset: 25 }).setHTML(
      `<h4>${listing.title}</h4><p>Exact location provided after booking!</p>`,
    ),
  )
  .addTo(map);
 