
    // Timer logic
    function startTimer(duration, display) {
      var timer = duration, hours, minutes, seconds;
      setInterval(function () {
        hours = parseInt(timer / 3600, 10);
        minutes = parseInt((timer % 3600) / 60, 10);
        seconds = parseInt(timer % 60, 10);

        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = hours + ":" + minutes + ":" + seconds;

        if (--timer < 0) {
          timer = duration; // Reset the timer when it finishes
        }
      }, 1000);
    }

    window.onload = function () {
      var timeLimit = 60 * 60 * 3; // 3 hours
      var display = document.querySelector('#timer');
      startTimer(timeLimit, display); // Start the timer
    };
  