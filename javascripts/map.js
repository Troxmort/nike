document.addEventListener('DOMContentLoaded', function(){

    var map = L.map('mapa').setView([-27.054482, -65.401955], 16);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap'
    }).addTo(map);
    
    
})

