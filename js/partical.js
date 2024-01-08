
!(function (t) {
  var e = {};
  function i(n) {
    if (e[n]) return e[n].exports;
    var o = (e[n] = { i: n, l: !1, exports: {} });
    return t[n].call(o.exports, o, o.exports, i), (o.l = !0), o.exports;
  }
  (i.m = t),
    (i.c = e),
    (i.d = function (t, e, n) {
      i.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });
    }),
    (i.r = function (t) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (i.t = function (t, e) {
      if ((1 & e && (t = i(t)), 8 & e)) return t;
      if (4 & e && "object" == typeof t && t && t.__esModule) return t;
      var n = Object.create(null);
      if (
        (i.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: t }),
        2 & e && " " != typeof t)
      )
        for (var o in t)
          i.d(
            n,
            o,
            function (e) {
              return t[e];
            }.bind(null, o)
          );
      return n;
    }),
    (i.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return i.d(e, "a", e), e;
    }),
    (i.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (i.p = ""),
    i((i.s = 1));
})([
  function (t, e, i) {},
  function (t, e, i) {
    "use strict";
    i.r(e);
    i(0);
    function n(t, e) {
      for (var i = 0; i < e.length; i++) {
        var n = e[i];
        (n.enumerable = n.enumerable || !1),
          (n.configurable = !0),
          "value" in n && (n.writable = !0),
          Object.defineProperty(t, n.key, n);
      }
    }
    var o,
      r = document.getElementById("tp__canvas"),
      a = r.getContext("2d");
    (r.width = window.innerWidth), (r.height = window.innerHeight);
    var l = {},
      h = {},
      s = (function () {
        function t(e, i, n, o, r, a, l, h, s) {
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
            (this.pointX = e),
            (this.pointY = i),
            (this.moveX = n),
            (this.moveY = o),
            (this.name = r),
            (this.particleSize = l),
            (this.particleColor = a),
            (this.textSize = s),
            (this.textColor = h),
            (this.halfTextWidth = 0);
        }
        var e, i, o;
        return (
          (e = t),
          (i = [
            {
              key: "plot",
              value: function () {
                a.beginPath(),
                  this.particleSize > 0 &&
                    (a.arc(
                      this.pointX,
                      this.pointY,
                      this.particleSize,
                      0,
                      2 * Math.PI
                    ),
                    (a.fillStyle = this.particleColor),
                    a.fill()),
                  (a.font = "".concat(this.textSize, "px Arial")),
                  (a.fillStyle = this.textColor),
                  (this.halfTextWidth = a.measureText(this.name).width / 2),
                  a.fillText(this.name, this.pointX, this.pointY);
              },
            },
            {
              key: "update",
              value: function () {
                (this.pointX > r.width - this.halfTextWidth ||
                  this.pointX < this.halfTextWidth) &&
                  (this.moveX = -this.moveX),
                  (this.pointY > r.height || this.pointY < this.textSize) &&
                    (this.moveY = -this.moveY),
                  (this.pointX += this.moveX),
                  (this.pointY += this.moveY),
                  this.plot();
              },
            },
          ]) && n(e.prototype, i),
          o && n(e, o),
          t
        );
      })();
    function c(t) {
      (o = []), (a.textAlign = "center");
      for (var e = t.textList.length, i = 0; i < e; i++) {
        var n = Math.random() * (r.width - 200) + 100,
          l = Math.random() * (r.height - 200) + 100,
          h = Math.random() * (t.maxSpeed - t.minSpeed) + t.minSpeed,
          c = Math.random() * (t.maxSpeed - t.minSpeed) + t.minSpeed;
        o.push(
          new s(
            n,
            l,
            h,
            c,
            t.textList[i],
            t.particleColor,
            t.particleSize,
            t.textColor,
            t.textSize
          )
        );
      }
    }
    function p() {
      a.clearRect(0, 0, r.width, r.height);
      for (var t = o.length, e = 0; e < t; e++) o[e].update();
      !(function () {
        for (var t, e = r.width * r.height, i = 0; i < o.length; i++)
          for (var n = i; n < o.length; n++) {
            var l =
              (o[i].pointX - o[n].pointX) * (o[i].pointX - o[n].pointX) +
              (o[i].pointY - o[n].pointY) * (o[i].pointY - o[n].pointY);
            l < e &&
              ((t = 1 - l / 4e4),
              (a.strokeStyle =
                `rgb(${PrticalObject.particalColorR},${PrticalObject.particalColorG},${PrticalObject.particalColorB},`.concat(
                  t,
                  ")"
                )),
              (a.lineWidth = PrticalObject.particalLineWidth),
              a.beginPath(),
              a.moveTo(o[i].pointX, o[i].pointY),
              a.lineTo(o[n].pointX, o[n].pointY),
              a.stroke());
          }
      })(),
        window.requestAnimationFrame(p);
    }
    window.addEventListener("resize", function () {
      (r.width = window.innerWidth), (r.height = window.innerHeight), c(h);
    }),
      (l.accelerate = function (t) {
        ((h = t).maxSpeed = t.speed || PrticalObject.particalSpeed),
          (h.minSpeed = -t.speed || -1),
          (h.particleColor =
            t.particleColor || `${PrticalObject.prticalPointColor}`),
          (h.particleSize = t.particleSize || 0),
          (h.textColor = t.textColor || `${PrticalObject.particalTextColor}`),
          (h.textList = (
            t.textList || PrticalObject.languageName.toString()
          ).split(", ")),
          (h.textSize = t.textSize || 24),
          c(h),
          window.requestAnimationFrame(p);
      }),
      l.accelerate({
        textSize: PrticalObject.particaTextSize,
        particleSize: PrticalObject.particalPointSize,
      });
  },
]);
