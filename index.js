import{a as w,S as v,i as c}from"./assets/vendor-DcHCnVjq.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const $="55951286-327cba65600a8883f26a5072e";async function m(o,t=1){const s="https://pixabay.com",n="/api/",r=new URLSearchParams({key:$,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:t}),a=`${s}${n}?${r}`;return(await w.get(a)).data}const g=document.querySelector(".gallery"),y=document.querySelector(".loader");function h(){y.classList.remove("hidden")}function p(){y.classList.add("hidden")}const E=new v(".gallery a",{captionsData:"alt",captionDelay:250});function L(o){const t=o.map(({webformatURL:s,largeImageURL:n,tags:e,likes:r,views:a,comments:f,downloads:P})=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${n}">
            <img
              class="gallery-image"
              src="${s}"
              alt="${e}"
            />
          </a>
          <div class="info">
            <p><b>Likes</b> ${r}</p>
            <p><b>Views</b> ${a}</p>
            <p><b>Comments</b> ${f}</p>
            <p><b>Downloads</b> ${P}</p>
          </div>
        </li>
      `).join("");g.insertAdjacentHTML("beforeend",t),E.refresh()}function S(){g.innerHTML=""}const q=document.querySelector(".form"),u=document.querySelector(".load-more");let l="",i=1;function b(){u.classList.remove("hidden")}function d(){u.classList.add("hidden")}q.addEventListener("submit",async o=>{if(o.preventDefault(),l=o.target.elements["search-text"].value.trim(),i=1,d(),!!l){S(),h();try{const t=await m(l,i);t.hits.length===0?c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}):(L(t.hits),i*15>=t.totalHits?(d(),c.info({message:"We're sorry, but you've reached the end of search results."})):b())}catch(t){console.error(t),c.error({title:"Error",message:"An error occurred while fetching images. Please try again later."})}finally{p()}}});u.addEventListener("click",async()=>{i+=1,h(),d();try{const o=await m(l,i);L(o.hits),i*15>=o.totalHits?(d(),c.info({message:"We're sorry, but you've reached the end of search results."})):b()}catch(o){console.error(o),c.error({title:"Error",message:"An error occurred while fetching images. Please try again later."})}finally{p()}});
//# sourceMappingURL=index.js.map
