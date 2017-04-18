// whichkey.js 1.0.6
// More on https://github.com/corenzan/whichkey.js
;(function(root) {
  'use strict';

  var whichkey;

  whichkey = function(e) {
    return {
      backspace:    e.which === 8,
      tab:          e.which === 9,
      enter:        e.which === 13,
      'return':     e.which === 13,
      ctrl:         e.which === 17 || e.ctrlKey,
      esc:          e.which === 27,
      escape:       e.which === 27,
      space:        e.which === 32,
      spacebar:     e.which === 32,
      pageUp:       e.which === 33,
      pageDown:     e.which === 34,
      'end':        e.which === 35
      home:         e.which === 36,
      left:         e.which === 37,
      arrow:        e.which  >= 37 && e.which <= 40,
      arrows:       e.which  >= 37 && e.which <= 40,
      up:           e.which === 38,
      right:        e.which === 39,
      down:         e.which === 40,
      'delete':     e.which === 46,
      meta:         e.which === 91 || e.which === 93 || e.metaKey,
      number:       e.which  >= 48 && e.which <= 57 && !e.shiftKey,
      numbers:      e.which  >= 48 && e.which <= 57 && !e.shiftKey,
      0:            e.which === 48 && !e.shiftKey,
      1:            e.which === 49 && !e.shiftKey,
      2:            e.which === 50 && !e.shiftKey,
      3:            e.which === 51 && !e.shiftKey,
      4:            e.which === 52 && !e.shiftKey,
      5:            e.which === 53 && !e.shiftKey,
      6:            e.which === 54 && !e.shiftKey,
      7:            e.which === 55 && !e.shiftKey,
      8:            e.which === 56 && !e.shiftKey,
      9:            e.which === 57 && !e.shiftKey,
      letters:      e.which  >= 65 && e.which <= 90,
      letter:       e.which  >= 65 && e.which <= 90,
      a:            e.which === 65,
      b:            e.which === 66,
      c:            e.which === 67,
      d:            e.which === 68,
      e:            e.which === 69,
      f:            e.which === 70,
      g:            e.which === 71,
      h:            e.which === 72,
      i:            e.which === 73,
      j:            e.which === 74,
      k:            e.which === 75,
      l:            e.which === 76,
      m:            e.which === 77,
      n:            e.which === 78,
      o:            e.which === 79,
      p:            e.which === 80,
      q:            e.which === 81,
      r:            e.which === 82,
      s:            e.which === 83,
      t:            e.which === 84,
      u:            e.which === 85,
      v:            e.which === 86,
      y:            e.which === 87,
      x:            e.which === 88,
      w:            e.which === 89,
      z:            e.which === 90,
    };
  };

  root.whichkey = whichkey;
})(this);
