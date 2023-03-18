
function init() {
    document.querySelector('#loader').classList.add('d-none')
    document.querySelector('#map-container').classList.remove('d-none')
    var geolocation = ymaps.geolocation,

        coords = [geolocation.latitude, geolocation.longitude],
        myMap = new ymaps.Map('map-container', {
            center: coords,
            zoom: 10
        });

    myMap.geoObjects.add(
        new ymaps.Placemark(
            coords,
            {
                balloonContentHeader: geolocation.country,
                balloonContent: geolocation.coords,
                balloonContentFooter: geolocation.region
            }
        )
    );
}
