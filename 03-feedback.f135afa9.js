!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var r="Expected a function",o=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,s="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,d=s||c||Function("return this")(),m=Object.prototype.toString,v=Math.max,g=Math.min,p=function(){return d.Date.now()};function y(e,t,n){var i,o,a,u,f,l,s=0,c=!1,d=!1,m=!0;if("function"!=typeof e)throw new TypeError(r);function y(t){var n=i,r=o;return i=o=void 0,s=t,u=e.apply(r,n)}function O(e){return s=e,f=setTimeout(w,t),c?y(e):u}function h(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-s>=a}function w(){var e=p();if(h(e))return E(e);f=setTimeout(w,function(e){var n=t-(e-l);return d?g(n,a-(e-s)):n}(e))}function E(e){return f=void 0,m&&i?y(e):(i=o=void 0,u)}function S(){var e=p(),n=h(e);if(i=arguments,o=this,l=e,n){if(void 0===f)return O(l);if(d)return f=setTimeout(w,t),y(l)}return void 0===f&&(f=setTimeout(w,t)),u}return t=j(t)||0,b(n)&&(c=!!n.leading,a=(d="maxWait"in n)?v(j(n.maxWait)||0,t):a,m="trailing"in n?!!n.trailing:m),S.cancel=function(){void 0!==f&&clearTimeout(f),s=0,i=l=o=f=void 0},S.flush=function(){return void 0===f?u:E(p())},S}function b(t){var n=void 0===t?"undefined":e(i)(t);return!!t&&("object"==n||"function"==n)}function j(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(i)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==m.call(t)}(t))return NaN;if(b(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=b(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var r=u.test(t);return r||f.test(t)?l(t.slice(2),r?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw new TypeError(r);return b(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),y(e,t,{leading:i,maxWait:t,trailing:o})};var O={input:document.getElementsByName("email")[0],message:document.getElementsByName("message")[0],form:document.querySelector("form")};document.addEventListener("DOMContentLoaded",(function(){var e=localStorage.getItem("feedback-form-state");if(e){var t=JSON.parse(e),n=t.email,i=t.message;O.input.value=n,O.message.value=i}else O.input.value="",O.message.value=""}));var h=e(t)((function(){var e={email:O.input.value,message:O.message.value};localStorage.setItem("feedback-form-state",JSON.stringify(e))}),500);O.input.addEventListener("input",h),O.message.addEventListener("input",h),O.form.addEventListener("submit",(function(e){e.preventDefault();var t={email:O.input.value,message:O.message.value};if(""===O.input.value.trim()||""===O.message.value.trim())return alert("Введіть дані!");console.log(t),localStorage.removeItem("feedback-form-state"),O.form.reset()}))}();
//# sourceMappingURL=03-feedback.f135afa9.js.map