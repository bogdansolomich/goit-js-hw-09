!function(){function e(e,n){var o=Math.random()>.3;return new Promise((function(t,a){setTimeout((function(){o?t({position:e,delay:n}):a({position:e,delay:n})}),n)}))}var n=document.querySelector(".form"),o=n.querySelector('[name="delay"]'),t=n.querySelector('[name="step"]'),a=n.querySelector('[name="amount"]');n.addEventListener("submit",(function(n){n.preventDefault();for(var r=Number(o.value),c=Number(t.value),i=Number(a.value),u=0;u<i;u++){e(u+1,r+u*c).then((function(e){var n=e.position,o=e.delay;console.log("✅ Fulfilled promise ".concat(n," in ").concat(o,"ms"))})).catch((function(e){var n=e.position,o=e.delay;console.log("❌ Rejected promise ".concat(n," in ").concat(o,"ms"))}))}}))}();
//# sourceMappingURL=03-promises.a965d90c.js.map