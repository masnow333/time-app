(this["webpackJsonptime-app"]=this["webpackJsonptime-app"]||[]).push([[0],{11:function(e,t,n){},12:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),i=n(5),r=n.n(i),s=(n(11),n(12),n(0)),o=function(){return Object(s.jsx)("div",{className:"wrapper",children:Object(s.jsxs)("div",{className:"box",children:[Object(s.jsx)("div",{}),Object(s.jsx)("div",{}),Object(s.jsx)("div",{}),Object(s.jsx)("div",{}),Object(s.jsx)("div",{}),Object(s.jsx)("div",{}),Object(s.jsx)("div",{}),Object(s.jsx)("div",{}),Object(s.jsx)("div",{}),Object(s.jsx)("div",{})]})})},l=n(2),j=n.n(l),d=n(4),u=n(6),b=(n(15),n(16),function(e){var t=e.current;if(void 0===t)return Object(s.jsx)(s.Fragment,{});if(!t.weather)return Object(s.jsx)(s.Fragment,{});var n="http://openweathermap.org/img/wn/".concat(t.weather[0].icon,"@2x.png");return Object(s.jsxs)("div",{className:"card m-3 text-light dGrid",children:[Object(s.jsx)("img",{className:"card-img-top row",src:n,alt:t.weather[0].description,style:{width:"fit-content"}}),Object(s.jsxs)("div",{className:"card-body",children:[Object(s.jsxs)("h5",{className:"card-title h1",children:[t.temp,"\xb0"]}),Object(s.jsxs)("div",{className:"specs",children:[Object(s.jsxs)("p",{className:"card-text h5",children:["Humidity: ",t.humidity,"%"]}),Object(s.jsxs)("p",{className:"card-text h5",children:["Wind: ",t.wind_speed," m/s"]})]})]})]})}),h=function(){var e=Object(c.useState)({}),t=Object(u.a)(e,2),n=t[0],a=t[1];Object(c.useEffect)((function(){"geolocation"in navigator?console.log("Available"):console.log("Not Available"),i()}),[]);var i=function(){var e=Object(d.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:navigator.geolocation.getCurrentPosition((function(e){var t={lat:e.coords.latitude,lon:e.coords.longitude};r(t)}),(function(){alert("You can't see the content of this page, if you don't give permission to geolocation, please reload the page and try again.")}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),r=function(){var e=Object(d.a)(j.a.mark((function e(t){var n,c,i;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.openweathermap.org/data/2.5/onecall?lat=".concat(t.lat,"&lon=").concat(t.lon,"&units=metric&exclude=hourly,minutely&appid=35b12780d58712af0ea68c3f0cacbba0"),e.next=3,fetch(n);case 3:return c=e.sent,e.next=6,c.json();case 6:i=e.sent,a(i.current);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(s.jsxs)("div",{className:"d-flex justify-content-center align-items-center flex-column",style:{height:"100vh"},children:[Object(s.jsx)("h1",{className:"position-relative text-light text-center mb-5",children:"Time App"}),Object(s.jsx)(b,{current:n})]})},p=function(){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(o,{}),Object(s.jsx)(h,{})]})},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),i(e),r(e)}))};r.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(p,{})}),document.getElementById("root")),x()}},[[17,1,2]]]);
//# sourceMappingURL=main.9b8327ae.chunk.js.map