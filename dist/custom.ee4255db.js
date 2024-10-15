// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"sWee":[function(require,module,exports) {
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
console.clear();
var nav = document.querySelector("nav");
var navLinksContainer = document.querySelector(".nav-links");
var navLinks = _toConsumableArray(document.querySelectorAll(".link"));
var menuBtn = document.querySelector(".menu-btn");
var subMenuBtn = document.querySelector(".sub-menu-btn");
menuBtn.addEventListener("click", function () {
  nav.classList.toggle("nav-open");
  menuBtn.classList.toggle("close");
});
subMenuBtn.addEventListener("click", function () {
  nav.classList.toggle("sub-menu-open");
  removeSubmenu();
});
function createHoverEl() {
  var hoverEl = document.createElement("div");
  hoverEl.className = "hover-el";
  hoverEl.style.setProperty("--y", "0px");
  hoverEl.style.setProperty("--mousex", "0px");
  hoverEl.style.setProperty("--mousey", "0px");
  navLinksContainer.appendChild(hoverEl);
}
createHoverEl();
navLinks.forEach(function (link, index) {
  var hoverEl = navLinksContainer.querySelector(".hover-el");
  link.style.setProperty("--delay", "".concat(index * 50, "ms"));
  link.addEventListener("mousemove", function (e) {
    hoverEl.style.setProperty("--y", "".concat(index * 60, "px"));
    hoverEl.style.setProperty("opacity", "1");
    hoverEl.style.setProperty("--mousex", "".concat(e.pageX - hoverEl.offsetLeft, "px"));
    hoverEl.style.setProperty("--mousey", "".concat(e.pageY - hoverEl.offsetTop, "px"));
  });
  navLinksContainer.addEventListener("mouseout", function () {
    hoverEl.style.setProperty("opacity", "0");
  });
  link.addEventListener("click", function () {
    var hoverEl = navLinksContainer.querySelector(".hover-el");
    hoverEl.style.opacity = '0';
    toggleSubmenu(link);
  });
});
function toggleSubmenu(el) {
  var subMenu = nav.querySelector(".sub-menu");
  if (el.children[1]) {
    createSubmenu(el);
  } else if (nav.contains(subMenu)) {
    removeSubmenu();
  } else {
    return;
  }
}

// scroll move
$(document).ready(function ($) {
  $(".scroll_move").click(function (event) {
    console.log(".scroll_move");
    $(nav).removeClass("nav-open");
    $(menuBtn).removeClass("close");
    event.preventDefault();
    $('html,body').animate({
      scrollTop: $(this.hash).offset().top
    }, 500);
  });
});

// project

var panels = gsap.utils.toArray(".parallax__item");
var tops = panels.map(function (panel) {
  return ScrollTrigger.create({
    trigger: panel,
    start: "top top"
  });
});
panels.forEach(function (panel, i) {
  ScrollTrigger.create({
    trigger: panel,
    start: "top top",
    pin: true,
    pinSpacing: false
  });
});

// popup

$(document).ready(function () {
  $('.grid').isotope({
    itemSelector: '.grid-item',
    percentPosition: true,
    resizesContainer: true,
    resizable: true
  });
  $('.grid-item').click(function () {
    $(this).children(".popup").fadeIn().addClass("active");
    $('body').addClass("scrollLock ");
  });
  $(".popup").click(function (e) {
    e.stopPropagation();
    $(".popup").fadeOut().removeClass("active");
    $('body').removeClass("scrollLock ");
  });
});
},{}]},{},["sWee"], null)
//# sourceMappingURL=custom.ee4255db.js.map