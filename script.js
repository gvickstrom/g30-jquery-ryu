$(document).ready(function() {
    // append an img tag with our picture of Ryu
    // url: http://i.imgur.com/90Mmdcm.png
    $('#ryu').append('<img src="http://i.imgur.com/90Mmdcm.png">');

    // change the img src on hover to the animated gif of Ryu
    // url: http://i.imgur.com/nTj3Fxx.gif
    // when the user 'unhovers' change back to static Ryu
    $('#ryu > img').hover(function() {
      this.src = "http://i.imgur.com/nTj3Fxx.gif";
    }, function() {
      this.src = "http://i.imgur.com/90Mmdcm.png";
    })

    // when a user clicks, change Ryu's stance, use mousedown
    // url: http://i.imgur.com/Rfj0a80.png
    $('#ryu > img').on('mousedown', function() {
      this.src = 'http://i.imgur.com/Rfj0a80.png';
    });

    // add the Hadouken!
    // url: http://i.imgur.com/oTyQRvX.gif
    $('#ryu > img').mousedown(function() {
      $('#ryu').append('<img src="http://i.imgur.com/oTyQRvX.gif" class="demo-hadouken">');
    });



    // animate that Hadouken
$('#ryu > img').mousedown(function() {
  $('.demo-hadouken').animate( {
    "margin-left" : "600px"
  }, 1000, 'swing', function() {
    this.remove();
  })
})


    // let Ryu relax
    // url: http://i.imgur.com/90Mmdcm.png
  $('#ryu > img').mouseup(function() {
    this.src="http://i.imgur.com/90Mmdcm.png";
  })
});
