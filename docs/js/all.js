$(function() {
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 0,
        pagination: {
          clickable: true,
		},
		breakpoints: {
			640: {
			  slidesPerView: 1,
			  spaceBetween: 0,
			},
			768: {
			  slidesPerView: 3,
			  spaceBetween: 0,
			},
			1024: {
			  slidesPerView: 3,
			  spaceBetween: 0,
			},
		}
	});
	
})

$(document).on('ready', function(){
	$(".button-click").on('click', function(){
	//   $("#accordion button .mdi").each(function(){
	// 	$(this).toggleClass('mdi-chevron-up', $(this).parent().hasClass('collapsed'));
	// 	$(this).toggleClass('mdi-chevron-down', (!$(this).parent().hasClass('collapsed')));
	//   });
	alert('k');
	});
});

function contador() {

	var day = localStorage.getItem('day');
	var hr = localStorage.getItem('hr');
  var mm = localStorage.getItem('mm');
	var ss = localStorage.getItem('ss');
    if (!day || !hr || !mm || !ss) {
        day = "00";
        hr = "23";
        mm = "59";
        ss = "59";
        localStorage.setItem('day', day);
        localStorage.setItem('hr', hr);
        localStorage.setItem('mm', mm);
        localStorage.setItem('ss', ss);
    }

    var interval = setInterval(function(){

        if(day == 0 && hr == 0 && mm == 0 && ss == 0)clearInterval(interval);
        ss--;
        if(ss == 0)
        {
            ss = 90;
            mm--;
            if(mm == 0)
            {
                mm = 90;
                hr--;
                if(hr == 0)
                {
                    hr = 24;
                    // day--;
                }
			      }
        }

        if(day.toString().length < 2) day = "0"+day;
        if(hr.toString().length < 2) hr = "0"+hr;
        if(mm.toString().length < 2) mm = "0"+mm;
        if(ss.toString().length < 2) ss = "0"+ss;
        $("#contador").html(
			"<div class='d-flex justify-content-center'><div class='mr-3'>"+ "<div class='day color-timer'>"+day+"</div><div class='text-center small item-wotch'>Hari</div>" +"</div><div class='mr-3'>"+ "<div class='hora color-timer'>"+day+"</div> <div class='text-center small item-wotch'>Jam</div>" +"</div><div class='mr-3'>"+ "<div class='minuto color-timer'>"+mm+"</div><div class='text-center small item-wotch'>Menit</div>" +"</div><div class='mr-3'>"+ "<div class='segundo color-timer'>"+ss+"</div><div class='text-center small item-wotch'>Detik</div>" +"</div></div>"
		);

          localStorage.setItem('day', day);
          localStorage.setItem('hr', hr);
          localStorage.setItem('mm', mm);
          localStorage.setItem('ss', ss);

    },1000)
}
window.onload = contador;

// var upgradeTime = 10;
var upgradeTime = 10800;
var seconds = upgradeTime;
function timer() {
  var days        = Math.floor(seconds/24/60/60);
  var hoursLeft   = Math.floor((seconds) - (days*86400));
  var hours       = Math.floor(hoursLeft/3600);
  var minutesLeft = Math.floor((hoursLeft) - (hours*3600));
  var minutes     = Math.floor(minutesLeft/60);
  var remainingSeconds = seconds % 60;
  function pad(n) {
    return (n < 10 ? "0" + n : n);
  }
  
    // document.getElementById('countdown').innerHTML = pad(days) + ":" + pad(hours) + ":" + pad(minutes) + ":" + pad(remainingSeconds);
      document.getElementById('countdown').innerHTML = "<div class='d-flex justify-content-center'><div class='mr-3'>"+ "<div class='day color-timer'>"+pad(days)+"</div><div class='text-center small item-wotch'>Hari</div>" +"</div><div class='mr-3'>"+ "<div class='hora color-timer'>"+pad(hours)+"</div> <div class='text-center small item-wotch'>Jam</div>" +"</div><div class='mr-3'>"+ "<div class='minuto color-timer'>"+ pad(minutes)+"</div><div class='text-center small item-wotch'>Menit</div>" +"</div><div class='mr-3'>"+ "<div class='segundo color-timer'>"+pad(remainingSeconds)+"</div><div class='text-center small item-wotch'>Detik</div>" +"</div></div>";
  if (seconds == 0) {
    clearInterval(countdownTimer);
    document.getElementsByClassName('countdown').innerHTML = "Completed";
  } else {
    seconds--;
  }
}
var countdownTimer = setInterval('timer()', 1000);