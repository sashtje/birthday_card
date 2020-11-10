!function($) {
  $(document).ready(function() {
    var $play = $('#audio-play'),
        $pause = $('#audio-pause'),
        birthday_music = $('#birthday_music').get(0);

    $play.on('click', function() {
      birthday_music.play();
      $play.addClass('hidden');
      $pause.removeClass('hidden');
    });

    $pause.on('click', function() {
      birthday_music.pause();
      $pause.addClass('hidden');
      $play.removeClass('hidden');
    });
  });
}(jQuery);