function initMap() {
    const myLatLng = {   
        lat: 9.072,
        lng: 76.498
    };
    const myLatLng1 = {
        lat: 9.110,
        lng: 76.485
    };
    map = new google.maps.Map(document.getElementById('map'), {
        center: myLatLng,
        zoom: 11,
        mapId: '43b5f02381d87609'
    });
    new google.maps.Marker({
        position: myLatLng,
        map,
        title: "jagmul",
    });
    new google.maps.Marker({
        position: myLatLng1,
        map,
        title: "jagmul",
    });
    
}

