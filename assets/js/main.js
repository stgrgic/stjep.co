//Dribble js
$.jribbble.setToken('8e6670294da0606b2f88d761e9d67ad5656ac59a3760875619df178ba533100b');

$.jribbble.users('stjepco').shots({per_page: 9}).then(function(shots) {
  var html = [];
  
  shots.forEach(function(shot) {
    html.push('<li class="shots--shot">');
    html.push('<a href="' + shot.html_url + '" target="_blank">');
    html.push('<img src="' + shot.images.normal + '">');
    html.push('</a></li>');
  });
  
  $('.shots').html(html.join(''));
});