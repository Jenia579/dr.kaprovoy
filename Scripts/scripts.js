// The location of Uluru
      const uluru = { lat: -25.344, lng: 131.031 };
      // The map, centered at Uluru
      const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: uluru,
      });

$(document).ready(()=> {
    $(".hidden-burger").click(()=> {
       $("#nav-container").toggleClass("hidden")
    })
    $(".close").click(()=> {
        $("#nav-container").toggleClass("hidden")
    })

    $(".hidden-burger").click(()=> {
       $("#bg").toggleClass("hidden-bg")
    })
    $(".close").click(()=> {
        $("#bg").toggleClass("hidden-bg")
    })

    $(".bg").click(()=> {
        $("#bg").toggleClass("hidden-bg")
    })
    $(".bg").click(()=> {
        $("#nav-container").toggleClass("hidden")
    })
})