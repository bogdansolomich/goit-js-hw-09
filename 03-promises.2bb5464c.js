function e(e,o){const t=Math.random()>.3;return new Promise(((n,l)=>{setTimeout((()=>{t?n({position:e,delay:o}):l({position:e,delay:o})}),o)}))}const o=document.querySelector(".form"),t=o.querySelector('[name="delay"]'),n=o.querySelector('[name="step"]'),l=o.querySelector('[name="amount"]');o.addEventListener("submit",(function(o){o.preventDefault();const r=Number(t.value),i=Number(n.value),u=Number(l.value);for(let o=0;o<u;o++){e(o+1,r+o*i).then((({position:e,delay:o})=>{console.log(`✅ Fulfilled promise ${e} in ${o}ms`)})).catch((({position:e,delay:o})=>{console.log(`❌ Rejected promise ${e} in ${o}ms`)}))}}));
//# sourceMappingURL=03-promises.2bb5464c.js.map
