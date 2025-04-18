const btn = document.getElementById('but');
let text_show = document.getElementById('text');


btn.addEventListener('click', () => {
    
    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(success)
    } else{
        alert("Cant Find your location")
    }

    function success(position){
        text_show.innerHTML = `Latitude: ${position.coords.latitude} <br> Longitude: ${position.coords.longitude}`; 
    }
})