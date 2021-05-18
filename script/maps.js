  function init() {
        var i;
        //Custom Icons
        const icons = {
            location: {
              icon: "../assets/placeholder.png",
            },
          };
          //Custom destinations
        var arrDestinations = [
            {
                id:0,
                lat: 50.815155, 
                lon: -0.137072, 
                title: "Store in London",
                adress: "1418 River Drive, Suite 35 Cottonhall, CA 9622",
                country: "United States",
                phone: "+1 246-345-0695",
                timetable: "10 am - 10 pm EST, 7 days a week",
                type: "location",
            },
            {
                id:1,
                lat: 50.822638, 
                lon: -0.137361, 
                title: "Store in Istanbul",
                adress: "1418 River Drive, Suite 35 Cottonhall, CA 9622",
                country: "United States",
                phone: "+1 246-345-0695",
                timetable: "10 am - 10 pm EST, 7 days a week",
                type: "location",
            },
            {
                lat: 50.831226, 
                lon: -0.145372, 
                title: "Store in New York",
                adress: "1418 River Drive, Suite 35 Cottonhall, CA 9622",
                country: "United States",
                phone: "+1 246-345-0695",
                timetable: "10 am - 10 pm EST, 7 days a week",
                type: "location",
            }
        ];
        
        var myOptions = {
            zoom: 13,
            center: new google.maps.LatLng(50.820645,-0.137376),
            mapTypeId: google.maps.MapTypeId.ROADMAP,
        };
        
        var map = new google.maps.Map(document.getElementById("map"), myOptions);
        
        var infowindow =  new google.maps.InfoWindow({
            content: ''
        });
        
        // Loop to load every locations
        for (i = 0; i < arrDestinations.length; i++) {
            // create a marker for google maps
            var marker = new google.maps.Marker({
                title: arrDestinations[i].title,
                position: new google.maps.LatLng(arrDestinations[i].lat, arrDestinations[i].lon),
                icon: icons[arrDestinations[i].type].icon,
                map: map,
            });
            
            // When click on marker it shows information
            bindInfoWindow(marker, map, infowindow, "<h2>" + arrDestinations[i].title+"</h2>" + "<p>" + arrDestinations[i].adress + "</p>"+ "<p>" + arrDestinations[i].country + "</p>"+ "<p>" + arrDestinations[i].phone + "</p>"+ "<p>" + arrDestinations[i].timetable + "</p>");  
        }
    }
 
    function bindInfoWindow(marker, map, infowindow, html) { 
        google.maps.event.addListener(marker, 'click', function() { 
            infowindow.setContent(html); 
            infowindow.open(map, marker); 
        }); 
    } 

    google.maps.event.addDomListener(window, 'load', init);
    

