import"./assets/modulepreload-polyfill-3cfb730f.js";const a=document.querySelector(".login-form");a.addEventListener("input",n);a.addEventListener("submit",s);const l="feedback-form-state";o();let r={email:"",message:""};function n(e){const t=e.currentTarget.elements;r.email=t.email.value.trim(),r.message=t.message.value.trim();try{localStorage.setItem(l,JSON.stringify(r))}catch(m){console.log(m);return}}function s(e){if(e.preventDefault(),e.currentTarget.elements.email.value.trim()&&e.currentTarget.elements.message.value.trim())console.log({email:e.currentTarget.elements.email.value.trim(),message:e.currentTarget.elements.message.value.trim()}),e.currentTarget.reset(),localStorage.removeItem(l);else return alert("All form fields must be filled in !!!")}function o(){let e={};try{e=JSON.parse(localStorage.getItem(l))}catch{return}if(e)for(const t in e)a.elements[t].value=e[t]}
//# sourceMappingURL=commonHelpers2.js.map