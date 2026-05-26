import{a as b,S as P,i as c}from"./assets/vendor-DcHCnVjq.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const w="55951286-327cba65600a8883f26a5072e";async function u(t,o=1){const a="https://pixabay.com",n="/api/",r=new URLSearchParams({key:w,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:o}),s=`${a}${n}?${r}`;return(await b.get(s)).data}const f=document.querySelector(".gallery"),m=document.querySelector(".loader");function y(){m.classList.remove("hidden")}function p(){m.classList.add("hidden")}const $=new P(".gallery a",{captionsData:"alt",captionDelay:250});function g(t){const o=t.map(({webformatURL:a,largeImageURL:n,tags:e,likes:r,views:s,comments:d,downloads:L})=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${n}">
            <img
              class="gallery-image"
              src="${a}"
              alt="${e}"
            />
          </a>
          <div class="info">
            <p><b>Likes</b> ${r}</p>
            <p><b>Views</b> ${s}</p>
            <p><b>Comments</b> ${d}</p>
            <p><b>Downloads</b> ${L}</p>
          </div>
        </li>
      `).join("");f.insertAdjacentHTML("beforeend",o),$.refresh()}function v(){f.innerHTML=""}const E=document.querySelector(".form"),l=document.querySelector(".load-more");let S="",i=1;function h(){l.classList.remove("hidden")}function q(){l.classList.add("hidden")}E.addEventListener("submit",async t=>{t.preventDefault();const o=t.target.elements["search-text"].value.trim();if(i=1,!!o){v(),y();try{const a=await u(o,i);a.hits.length===0?c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}):(g(a.hits),h())}catch(a){console.error(a),c.error({title:"Error",message:"An error occurred while fetching images. Please try again later."})}finally{p()}}});l.addEventListener("click",async()=>{i+=1,y(),q();try{const t=await u(S,i);g(t.hits),h()}catch(t){console.error(t),c.error({title:"Error",message:"An error occurred while fetching images. Please try again later."})}finally{p()}});
//# sourceMappingURL=index.js.map
