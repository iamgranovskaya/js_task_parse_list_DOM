function t(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=Array(r);e<r;e++)n[e]=t[e];return n}function r(r){return function(r){if(Array.isArray(r))return t(r)}(r)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(r)||function(r,e){if(r){if("string"==typeof r)return t(r,void 0);var n=Object.prototype.toString.call(r).slice(8,-1);if("Object"===n&&r.constructor&&(n=r.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return t(r,void 0)}}(r)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var e,n=document.querySelector("ul"),a=r(document.querySelectorAll("li"));r((e=[],a.forEach(function(t){t.remove(),e.push({name:t.innerHTML.trim(),position:t.getAttribute("data-position").trim(),salary:Number(t.getAttribute("data-salary").replace(/[^\w\s]|_/g,"")),age:Number(t.getAttribute("data-age"))})}),e)).sort(function(t,r){return r.salary-t.salary}).forEach(function(t){var r=document.createElement("li");r.setAttribute("data-position",t.position),r.setAttribute("data-salary","$".concat(t.salary.toLocaleString("en-US"))),r.setAttribute("data-age",t.age.toString()),r.innerText=t.name,n.append(r)});
//# sourceMappingURL=index.96581667.js.map
