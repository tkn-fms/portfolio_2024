/* eslint-disable */
import { App } from 'vue';

function adobeFonts() {
  // ここに関数のロジックを追加
  const config = {
    kitId: 'mni1cky',
    scriptTimeout: 3000,
    async: true
  };

  const h = document.documentElement;
  const t = setTimeout(() => {
    h.className = h.className.replace(/\bwf-loading\b/g, "") + " wf-inactive";
  }, config.scriptTimeout);

  const tk = document.createElement("script");
  let f = false;
  const s = document.getElementsByTagName("script")[0];

  h.className += " wf-loading";
  tk.src = 'https://use.typekit.net/' + config.kitId + '.js';
  tk.async = true;

  tk.onload = () => {
    clearTimeout(t);
    try {
        Typekit.load(config);
    } catch (e) {
        console.error("Error loading Typekit: ", e);
    }
  };

  s.parentNode.insertBefore(tk, s);
};

export default {
  install(app: App) {
      app.config.globalProperties.$adobeFonts = adobeFonts;
  }
};


// function ({ app }, inject) {
//   const adobeFonts = (d) => {
//     const config = {
//       kitId: 'mni1cky',
//       scriptTimeout: 3000,
//       async: true
//     };

//     const h = document.documentElement;
//     const t = setTimeout(() => {
//       h.className = h.className.replace(/\bwf-loading\b/g, "") + " wf-inactive";
//     }, config.scriptTimeout);

//     const tk = document.createElement("script");
//     let f = false;
//     const s = document.getElementsByTagName("script")[0];

//     h.className += " wf-loading";
//     tk.src = 'https://use.typekit.net/' + config.kitId + '.js';
//     tk.async = true;

//     tk.onload = () => {
//       clearTimeout(t);
//       try {
//           Typekit.load(config);
//       } catch (e) {
//           console.error("Error loading Typekit: ", e);
//       }
//     };

//     s.parentNode.insertBefore(tk, s);
//   };

//   inject('adobeFonts', adobeFonts)
// };

// (function(d) {
//   var config = {
//     kitId: 'mni1cky',
//     scriptTimeout: 3000,
//     async: true
//   },
//   h=d.documentElement,t=setTimeout(function(){
//     h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";
//   },config.scriptTimeout),
//   tk=d.createElement("script"),
//   f=false,
//   s=d.getElementsByTagName("script")[0],
//   a;
//   h.className+=" wf-loading";
//   tk.src='https://use.typekit.net/'+config.kitId+'.js';
//   tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
// })(document);