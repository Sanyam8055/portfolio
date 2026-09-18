/* Sanyam Singh — field notebook.
   Language switching, desk lamp, span chart, notebook diagrams,
   scroll reveal, scroll-spy, copy-to-clipboard.
   Nothing is load-bearing: with JS off the page reads in full
   English, and every diagram keeps its accessible label. */

(function () {
  'use strict';

  var root = document.documentElement;
  var supported = 'IntersectionObserver' in window;
  var reduce = window.matchMedia &&
               window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function get(key) { try { return localStorage.getItem(key); } catch (e) { return null; } }
  function set(key, v) { try { localStorage.setItem(key, v); } catch (e) {} }

  /* ══ language ═══════════════════════════════════════════
     English is the fallback for every key. A string missing
     from BOTH the target language and English leaves the DOM
     node untouched, so partial translations never blank out
     content. */
  var STRINGS = window.STRINGS || { en: {} };
  var LANGS = ['en', 'hi', 'te', 'or'];
  var langButtons = document.querySelectorAll('.lang');
  var langNote = document.getElementById('langNote');

  function translate(code) {
    var table = STRINGS[code] || {};
    var base = STRINGS.en || {};

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.dataset.i18n;
      var value = table[key];
      if (value === undefined) value = base[key];
      if (value === undefined) return;          /* leave authored content */
      el.innerHTML = value;
    });

    root.setAttribute('lang', code);

    langButtons.forEach(function (b) {
      var on = b.dataset.lang === code;
      b.classList.toggle('is-on', on);
      b.setAttribute('aria-pressed', on ? 'true' : 'false');
    });

    if (langNote) {
      var note = table.langNote;
      if (note) {
        langNote.textContent = note;
        langNote.setAttribute('lang', code);
        langNote.hidden = false;
      } else {
        langNote.hidden = true;
      }
    }
  }

  var saved = get('lang');
  translate(LANGS.indexOf(saved) > -1 ? saved : 'en');

  langButtons.forEach(function (b) {
    b.addEventListener('click', function () {
      var code = b.dataset.lang;
      set('lang', code);
      translate(code);
    });
  });

  /* ══ desk lamp ══════════════════════════════════════════ */
  var lamp = document.getElementById('lamp');
  var lampGlyph = document.getElementById('lamp-glyph');

  function systemDark() {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
  function setLamp(state) {
    if (state) root.setAttribute('data-lamp', state);
    else root.removeAttribute('data-lamp');
    var dark = state === 'off' || (!state && systemDark());
    if (lampGlyph) lampGlyph.textContent = dark ? '☾' : '☀';
    if (lamp) lamp.setAttribute('aria-label', dark ? 'Turn the desk lamp on' : 'Turn the desk lamp off');
  }

  setLamp(get('lamp'));

  if (lamp) {
    lamp.addEventListener('click', function () {
      var now = get('lamp') || (systemDark() ? 'off' : 'on');
      var next = now === 'off' ? 'on' : 'off';
      set('lamp', next);
      setLamp(next);
    });
  }
  if (window.matchMedia) {
    var mq = window.matchMedia('(prefers-color-scheme: dark)');
    var follow = function () { if (!get('lamp')) setLamp(null); };
    if (mq.addEventListener) mq.addEventListener('change', follow);
    else if (mq.addListener) mq.addListener(follow);
  }

  /* ══ span chart geometry ════════════════════════════════
     Bars are positioned against a fixed 2019→2027 window, the
     same range the printed axis labels describe. */
  var SPAN_START = 2019, SPAN_END = 2027, SPAN_YEARS = SPAN_END - SPAN_START;

  document.querySelectorAll('.span-row').forEach(function (row) {
    var from = parseFloat(row.dataset.from);
    var to = parseFloat(row.dataset.to);
    if (isNaN(from) || isNaN(to)) return;

    var left = (from - SPAN_START) / SPAN_YEARS * 100;
    var width = (to - from) / SPAN_YEARS * 100;
    row.style.setProperty('--bar-left', Math.max(0, left) + '%');
    row.style.setProperty('--bar-width', Math.min(100 - Math.max(0, left), width) + '%');
  });

  /* ══ the tally of 180 prompts, in 17 groups ═════════════ */
  var tally = document.getElementById('tally');
  if (tally) {
    var TOTAL = 180, GROUPS = 17, placed = 0;
    for (var g = 0; g < GROUPS; g++) {
      var size = g < (TOTAL - GROUPS * 10) ? 11 : 10;
      var group = document.createElement('span');
      group.className = 'tally-group';
      for (var d = 0; d < size && placed < TOTAL; d++, placed++) {
        var dot = document.createElement('span');
        dot.className = 'tally-dot';
        group.appendChild(dot);
      }
      tally.appendChild(group);
    }
  }

  /* ══ on-screen animations ═══════════════════════════════ */
  function countUp(el) {
    var target = parseInt(el.dataset.count, 10);
    var suffix = el.dataset.suffix || '';
    if (reduce) { el.textContent = target + suffix; return; }

    var start = null, DUR = 1100;
    (function tick(now) {
      if (now === undefined) { requestAnimationFrame(tick); return; }
      if (start === null) start = now;
      var p = Math.min((now - start) / DUR, 1);
      el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3))) + suffix;
      if (p < 1) requestAnimationFrame(tick);
    })();
  }

  function drawBars(scope) {
    var MAX = 45;   /* axis top — matches the printed labels */
    scope.querySelectorAll('.bar-range').forEach(function (bar) {
      var from = parseFloat(bar.dataset.from), to = parseFloat(bar.dataset.to);
      bar.style.left = (from / MAX * 100) + '%';
      bar.style.width = ((to - from) / MAX * 100) + '%';
    });
  }

  function drawDial(dial) {
    var value = parseFloat(dial.dataset.value);
    var arc = dial.querySelector('.dial-fg');
    var num = dial.querySelector('.dial-num');
    var CIRC = 2 * Math.PI * 50;
    if (arc) arc.style.strokeDashoffset = String(CIRC * (1 - value / 100));
    if (!num) return;
    if (reduce) { num.textContent = value + '%'; return; }

    var start = null, DUR = 1200;
    (function tick(now) {
      if (now === undefined) { requestAnimationFrame(tick); return; }
      if (start === null) start = now;
      var p = Math.min((now - start) / DUR, 1);
      num.textContent = Math.round(value * (1 - Math.pow(1 - p, 3))) + '%';
      if (p < 1) requestAnimationFrame(tick);
    })();
  }

  function activate(el) {
    el.classList.add('in');
    el.querySelectorAll('.card-num').forEach(countUp);
    if (el.querySelector('.bar-range')) drawBars(el);
    var dial = el.querySelector('.dial');
    if (dial) drawDial(dial);
    var t = el.querySelector('.tally');
    if (t) t.classList.add('lit');
    if (el.classList.contains('chartwrap') || el.querySelector('.span-row')) {
      el.classList.add('drawn');
    }
  }

  var animated = document.querySelectorAll('.reveal, #cards, .case, .chart, .tally-wrap, .chartwrap');

  if (!supported) {
    animated.forEach(activate);
  } else {
    var io = new IntersectionObserver(function (rows) {
      rows.forEach(function (row) {
        if (row.isIntersecting) { activate(row.target); io.unobserve(row.target); }
      });
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.12 });
    animated.forEach(function (el) { io.observe(el); });
  }

  /* ══ rail hairline + scroll-spy ═════════════════════════ */
  var rail = document.getElementById('rail');
  if (rail && supported) {
    var sentinel = document.createElement('div');
    sentinel.style.cssText = 'position:absolute;top:0;height:1px;width:1px;';
    document.body.insertBefore(sentinel, document.body.firstChild);
    new IntersectionObserver(function (rows) {
      rail.classList.toggle('stuck', !rows[0].isIntersecting);
    }).observe(sentinel);
  }

  var navLinks = document.querySelectorAll('.rail-nav a[href^="#"]');
  if (supported && navLinks.length) {
    var byId = {}, watched = [], seen = {};
    navLinks.forEach(function (link) {
      var id = link.getAttribute('href').slice(1);
      var section = document.getElementById(id);
      if (section) { byId[id] = link; watched.push(section); }
    });
    var spy = new IntersectionObserver(function (rows) {
      rows.forEach(function (row) { seen[row.target.id] = row.isIntersecting; });
      var active = null;
      for (var i = 0; i < watched.length; i++) {
        if (seen[watched[i].id]) { active = watched[i].id; break; }
      }
      Object.keys(byId).forEach(function (id) {
        if (id === active) byId[id].setAttribute('aria-current', 'true');
        else byId[id].removeAttribute('aria-current');
      });
    }, { rootMargin: '-15% 0px -70% 0px' });
    watched.forEach(function (s) { spy.observe(s); });
  }

  /* ══ copy email ═════════════════════════════════════════ */
  var toast = document.getElementById('toast');
  var timer;

  function flash(msg) {
    if (!toast) return;
    toast.textContent = msg;
    toast.hidden = false;
    requestAnimationFrame(function () { toast.classList.add('show'); });
    clearTimeout(timer);
    timer = setTimeout(function () {
      toast.classList.remove('show');
      setTimeout(function () { toast.hidden = true; }, 220);
    }, 1600);
  }

  document.querySelectorAll('.copy').forEach(function (el) {
    el.addEventListener('click', function (ev) {
      if (ev.metaKey || ev.ctrlKey || ev.shiftKey) return;   /* let mail open */
      if (!navigator.clipboard) return;
      ev.preventDefault();
      navigator.clipboard.writeText(el.dataset.copy || el.textContent)
        .then(function () { flash('copied'); })
        .catch(function () { window.location.href = el.getAttribute('href'); });
    });
  });

  /* == phone, assembled at runtime ===========================
     The digits are not in the served HTML: they are stitched
     together from three attributes, so a scraper reading the
     raw page finds nothing. WhatsApp gets a working link
     immediately; the number itself waits for a real click.
     With JS off both rows stay hidden and email remains. */
  (function () {
    var d = document.body.dataset;
    if (!d.cc || !d.p1 || !d.p2) return;

    var digits = d.cc + d.p1 + d.p2;            /* country + two halves */
    var pretty = '+' + d.cc + ' ' + d.p1 + ' ' + d.p2;

    var waRow = document.getElementById('waRow');
    var waLink = document.getElementById('waLink');
    if (waRow && waLink) {
      waLink.href = 'https://wa.me/' + digits;
      waLink.rel = 'noopener';
      waRow.hidden = false;
    }

    var phoneRow = document.getElementById('phoneRow');
    var btn = document.getElementById('phoneBtn');
    if (!phoneRow || !btn) return;
    phoneRow.hidden = false;

    btn.addEventListener('click', function () {
      var a = document.createElement('a');
      a.className = 'copy hand-md';
      a.href = 'tel:+' + digits;
      a.textContent = pretty;
      a.dataset.copy = '+' + digits;
      a.addEventListener('click', function (ev) {
        if (ev.metaKey || ev.ctrlKey || ev.shiftKey) return;
        if (!navigator.clipboard) return;
        ev.preventDefault();
        navigator.clipboard.writeText(a.dataset.copy)
          .then(function () { flash('copied'); })
          .catch(function () { window.location.href = a.href; });
      });
      btn.replaceWith(a);

      var tag = phoneRow.querySelector('.reach-tag');
      if (tag) {
        var table = STRINGS[root.getAttribute('lang')] || STRINGS.en;
        tag.textContent = table['reach.phoneCopy'] || STRINGS.en['reach.phoneCopy'];
        tag.removeAttribute('data-i18n');     /* it has moved past its key */
      }
    });
  })();


  /* ══ footer year ════════════════════════════════════════ */
  var y = document.getElementById('year');
  if (y) y.textContent = String(new Date().getFullYear());
})();
