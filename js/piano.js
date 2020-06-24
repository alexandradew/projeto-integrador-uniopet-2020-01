"use strict";

/* HTML Audio API responsive piano/keyboard

 -TO DO test on mobile
 
 Demo 1 - No Suprises - Radiohead
 Demo 2 - Life on Mars - David Bowie
 Demo 3 - Für Elise - Ludwig van Beethoven 
 Demo 4 - The Entertainer - Scott Joplin 
 
 Increase tempo before you play a demo to play the song faster
*/

document.addEventListener("DOMContentLoaded", function () {

  //Frequencies list from http://www.phy.mtu.edu     
  var frequencies = [["rest", 0], ["b3", 233.08], ["c4", 261.63], ["db4", 277.18], ["d4", 293.66], ["eb4", 311.13], ["e4", 329.63], ["f4", 349.23], ["gb4", 369.99], ["g4", 392.00], ["ab4", 415.30], ["a4", 440.00], ["bb4", 466.16], ["b4", 493.88], ["c5", 523.25], ["db5", 554.37], ["d5", 587.33], ["eb5", 622.25], ["e5", 659.25], ["f5", 698.46], ["gb5", 739.99], ["g5", 783.99], ["ab5", 830.61], ["a5", 880.00], ["bb5", 932.33], ["b5", 987.77], ["c6", 1046.50], ["d6", 1174.66], ["e6", 1318.51]];

  //Songs
  //Note followed by note length. Crotchet = 100
  var noSuprises = [["rest", 0], ["a5", 50], ["c5", 50], ["f5", 50], ["c5", 50], ["a5", 50], ["c5", 50], ["f5", 50], ["c5", 50], ["a5", 50], ["c5", 50], ["f5", 50], ["c5", 50], ["bb4", 50], ["db5", 50], ["f5", 50], ["g5", 50], ["a5", 50], ["c5", 50], ["f5", 50], ["c5", 50], ["a5", 50], ["c5", 50], ["f5", 50], ["c5", 50], ["a5", 50], ["c5", 50], ["f5", 50], ["c5", 50], ["bb4", 50], ["db5", 50], ["f5", 50], ["g5", 50], ["a4", 200], ["c4", 200], ["a4", 50], ["a4", 100], ["g4", 200], ["a4", 50], ["a4", 200], ["b3", 150], ["rest", 25], ["b3", 25], ["a4", 50], ["a4", 100], ["g4", 100], ["f4", 100], ["bb4", 200], ["d4", 200], ["e4", 50], ["e4", 100], ["f4", 100], ["g4", 100], ["a4", 250]];

  var lifeOnMars = [["rest", 0], ["ab4", 50], ["bb4", 50], ["c5", 50], ["db5", 50], ["c5", 50], ["bb4", 100], ["ab4", 50], ["c5", 100], ["rest", 200], ["ab4", 50], ["bb4", 50], ["c5", 50], ["db5", 50], ["c5", 50], ["bb4", 100], ["ab4", 50], ["f5", 100], ["rest", 200], ["db5", 50], ["eb5", 50], ["f5", 50], ["gb5", 50], ["f5", 50], ["eb5", 100], ["db5", 50], ["f5", 150], ["rest", 150], ["db5", 50], ["eb5", 50], ["f5", 50], ["gb5", 50], ["f5", 50], ["eb5", 100], ["db5", 50], ["db5", 100], ["bb5", 200], ["f5", 200], ["eb5", 50], ["eb5", 50], ["eb5", 50], ["d5", 50], ["bb4", 100], ["c5", 100], ["rest", 50], ["bb5", 100], ["f5", 200], ["eb5", 50], ["eb5", 50], ["d5", 100], ["c5", 100], ["d5", 100], ["c5", 200], ["rest", 150], ["c5", 50], ["c5", 50], ["c5", 50], ["d5", 50], ["c5", 50], ["f5", 100], ["eb5", 25], ["d5", 25], ["c5", 100], ["rest", 150], ["bb4", 50], ["bb4", 50], ["bb4", 50], ["c5", 50], ["bb4", 100], ["bb5", 200], ["f5", 200], ["eb5", 50], ["eb5", 50], ["eb5", 50], ["d5", 50], ["bb4", 100], ["c5", 100], ["rest", 50], ["bb5", 100], ["f5", 200], ["eb5", 50], ["eb5", 50], ["eb5", 50], ["d5", 50], ["c5", 50], ["d5", 50], ["c5", 100], ["rest", 300], ["c5", 50], ["c5", 50], ["c5", 50], ["c5", 50], ["d5", 50], ["c5", 50], ["f5", 100], ["eb5", 25], ["d5", 25], ["c5", 100], ["rest", 200], ["bb4", 50], ["bb4", 50], ["bb4", 50], ["c5", 50], ["bb4", 100], ["bb5", 600]];

  var furElise = [["rest", 0], ["e5", 25], ["eb5", 25], ["e5", 25], ["eb5", 25], ["e5", 25], ["b4", 25], ["d5", 25], ["c5", 25], ["a4", 50], ["rest", 25], ["c4", 25], ["e4", 25], ["a4", 25], ["b4", 50], ["rest", 25], ["e4", 25], ["ab4", 25], ["b4", 25], ["c5", 50], ["rest", 25], ["e4", 25], ["e5", 25], ["eb5", 25], ["e5", 25], ["eb5", 25], ["e5", 25], ["b4", 25], ["d5", 25], ["c5", 25], ["a4", 50], ["rest", 25], ["c4", 25], ["e4", 25], ["a4", 25], ["b4", 50], ["rest", 25], ["e4", 25], ["c5", 25], ["b4", 25], ["a4", 50], ["rest", 25], ["b4", 25], ["c5", 25], ["d5", 25], ["e5", 75], ["g4", 25], ["f5", 25], ["e5", 25], ["d5", 75], ["f4", 25], ["e5", 25], ["d5", 25], ["c5", 75], ["e4", 25], ["d5", 25], ["c5", 25], ["b4", 50], ["rest", 25], ["e4", 25], ["e5", 25], ["rest", 25], ["e5", 25], ["e6", 25], ["rest", 25], ["eb5", 25], ["e5", 50], ["rest", 25], ["eb5", 25], ["e5", 25], ["eb5", 25], ["e5", 25], ["eb5", 25], ["e5", 25], ["b4", 25], ["d5", 25], ["c5", 25], ["a4", 100]];

  var theEntertainer = [["rest", 0], ["d6", 50], ["e6", 50], ["c6", 50], ["a5", 100], ["b5", 50], ["g5", 100], ["d5", 50], ["e5", 50], ["c5", 50], ["a4", 100], ["b4", 50], ["g4", 100], ["d5", 50], ["e5", 50], ["c5", 50], ["a4", 100], ["b4", 50], ["a4", 50], ["ab4", 50], ["g4", 100], ["rest", 50], ["g5", 100], ["d4", 50], ["d4", 50], ["e4", 50], ["c5", 100], ["e4", 50], ["c5", 100], ["e4", 50], ["c5", 300], ["c5", 50], ["d5", 50], ["eb5", 50], ["e5", 50], ["c5", 50], ["d5", 50], ["e5", 100], ["b4", 50], ["d5", 100], ["c5", 300], ["d4", 50], ["d4", 50], ["e4", 50], ["c5", 100], ["e4", 50], ["c5", 100], ["e4", 50], ["c5", 300], ["a4", 50], ["g4", 50], ["gb4", 50], ["a4", 50], ["c5", 50], ["e5", 100], ["d5", 50], ["c5", 50], ["a4", 50], ["d5", 300], ["d4", 50], ["d4", 50], ["e4", 50], ["c5", 100], ["e4", 50], ["c5", 100], ["e4", 50], ["c5", 300], ["c5", 50], ["d5", 50], ["eb5", 50], ["e5", 50], ["c5", 50], ["d5", 50], ["e5", 100], ["b4", 50], ["d5", 100], ["c5", 300], ["c5", 50], ["d5", 50], ["e5", 50], ["c5", 50], ["d5", 50], ["e5", 100], ["c5", 50], ["d5", 50], ["c5", 50], ["e5", 50], ["c5", 50], ["d5", 50], ["e5", 100], ["c5", 50], ["d5", 50], ["c5", 50], ["e5", 50], ["c5", 50], ["d5", 50], ["e5", 100], ["b4", 50], ["d5", 100], ["c5", 250]];

  var demoButtons = Array.from(document.querySelectorAll('.demo-button'));
  var tempoInput = document.querySelector('.tempo');
  var volumeInput = document.querySelector('.volume');
  var blackKey = Array.from(document.querySelectorAll('.black'));
  var whiteKey = Array.from(document.querySelectorAll('.white'));
  var help = document.querySelector('.help');
  var stopDemo = document.querySelector('.stop');
  var key = Array.from(document.querySelectorAll('.key'));
  var volume = 0.5;
  //Lower value = faster speed
  var tempo = 5;

  //Create new audio context when note played
  function playNote(note, length) {
    var AudioContext = window.AudioContext || window.webkitAudioContext,
      ctx = new AudioContext(),
      oscillator = ctx.createOscillator(),
      gainNode = ctx.createGain();
    oscillator.type = 'triangle';
    oscillator.frequency.value = note;
    gainNode.gain.value = volume;
    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);
    oscillator.start(0);
    //Trying to prevent popping sound on note end. Probably can be improved
    gainNode.gain.setTargetAtTime(0, length / 1000 - 0.05, 0.08);
    oscillator.stop(ctx.currentTime + (length / 1000 + 0.2));
    oscillator.onended = function () {
      return ctx.close();
    };
  }

  //Finds clicked element returns data-note value and runs playKey function 
  function onClickPlay(e) {
    var key = 0;
    var length = 300;
    var noteClass = e.target.dataset.note;
    for (var i = 0; i < frequencies.length; i++) {
      if (frequencies[i][0] === noteClass) {
        key = frequencies[i][1];
      }
    }
    addVisual(e.target);
    playNote(key, length);
  }

  //Finds pressed key and returns data-note value
  function keyDownSearch(event) {
    var key = 0;
    var length = 300;
    var keyPressed = document.querySelector("div[data-key=\"" + event.keyCode + "\"]");
    if (keyPressed === null) {
      return;
    }
    var note = keyPressed.dataset.note;
    for (var i = 0; i < frequencies.length; i++) {
      if (frequencies[i][0] === note) {
        key = frequencies[i][1];
      }
    }
    addVisual(keyPressed);
    playNote(key, length);
  }


  //add each note to setinterval and playNote
  function demo(arr, e) {
    if (setStop) {
      return
    }
    var noteLength = 0;
    e.target.classList.add('on');
    tempoInput.disabled = true;
    demoButtons.forEach(function (btn) {
      btn.disabled = true;
    });

    var _loop = function _loop(i) {
      noteLength += arr[i - 1][2] * tempo;

      setTimeout(function () {

        if (setStop) {
          arr = []
          return
        }

        if (arr.length > 0) {
          playNote(arr[i][1], arr[i][2] * tempo);

          if (arr[i][1] !== 0) {
            document.querySelector("[data-note=" + arr[i][0] + "]").classList.add('played');
          }
        }

        if (arr.length > 0) {
          var gambiarra = arr[i][2] * tempo - 0.05
        }

        setTimeout(function () {
          if (arr.length > 0) {
            if (arr[i][1] !== 0) {
              document.querySelector("[data-note=" + arr[i][0] + "]").classList.remove('played');
            }
            if (arr.length - 2 < i) {
              e.target.classList.remove('on');
              tempoInput.disabled = false;
              demoButtons.forEach(function (btn) {
                btn.disabled = false;
              });
            }
          }
        }, gambiarra);
      }, noteLength);

    };

    for (var i = 1; i < arr.length; i++) {
      _loop(i);
    }
  }


  // stop

  var setStop = false

  function stop() {
    setStop = !setStop
    tempoInput.disabled = false;
    console.log(setStop)
  }


  //map notes in song to frequencies
  function findFrequencies(song, e) {

    var arr = [];
    song.forEach(function (note) {
      frequencies.forEach(function (frequency) {
        if (note[0] === frequency[0]) {
          arr.push([note[0], frequency[1], note[1]]);
        }
      });
    });
    demo(arr, e);
  }



  //play demo according to which one selected
  function demoHandler(e) {
    if (e.target.classList.contains('demo1')) {
      setStop = false
      findFrequencies(noSuprises, e);
    }
    if (e.target.classList.contains('demo2')) {
      setStop = false
      findFrequencies(lifeOnMars, e);

    }
    if (e.target.classList.contains('demo3')) {
      setStop = false
      findFrequencies(furElise, e);
    }
    if (e.target.classList.contains('demo4')) {
      setStop = false
      findFrequencies(theEntertainer, e);
    }
  }

  //input handlers
  function updateTempo(e) {
    tempo = e.target.value;
  }
  function updateVolume(e) {
    volume = e.target.value;
  }

  //adds css class when note played
  function addVisual(key, length) {
    key.classList.add('played');
    setTimeout(function () {
      key.classList.remove('played');
    }, length || 300);
  }

  //keyboard information toggle
  var helpOn = true;
  function helpToggle() {
    if (helpOn) {
      blackKey.forEach(function (key) {
        key.style.color = 'rgba(0,0,0,0)';
      });
      whiteKey.forEach(function (key) {
        key.style.color = 'rgba(255,255,255,0)';
      });
      help.classList.remove('on');
      helpOn = !helpOn;
    } else {
      blackKey.forEach(function (key) {
        key.style.color = 'rgba(255,255,255,1)';
      });
      whiteKey.forEach(function (key) {
        key.style.color = 'rgba(0,0,0,1)';
      });
      help.classList.add('on');
      helpOn = !helpOn;
    }
  }

  //event listeners
  help.addEventListener('click', helpToggle);
  demoButtons.forEach(function (key) {
    key.addEventListener('click', demoHandler);
  });
  key.forEach(function (key) {
    key.addEventListener('click', onClickPlay);
  });
  window.addEventListener('keydown', keyDownSearch);
  tempoInput.addEventListener('change', updateTempo);
  volumeInput.addEventListener('change', updateVolume);
  stopDemo.addEventListener('click', stop);

  //Hide keyboard help letters on load
  helpToggle();
});