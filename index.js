import{a as w,S as v,i as c}from"./assets/vendor-DcHCnVjq.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const S="55951286-327cba65600a8883f26a5072e";async function g(o,t=1){const a="https://pixabay.com",s="/api/",r=new URLSearchParams({key:S,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:t}),n=`${a}${s}?${r}`;return(await w.get(n)).data}const m=document.querySelector(".gallery"),y=document.querySelector(".loader");function h(){y.classList.remove("hidden")}function p(){y.classList.add("hidden")}const $=new v(".gallery a",{captionsData:"alt",captionDelay:250});function L(o){const t=o.map(({webformatURL:a,largeImageURL:s,tags:e,likes:r,views:n,comments:f,downloads:P})=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${s}">
            <img
              class="gallery-image"
              src="${a}"
              alt="${e}"
            />
          </a>
          <div class="info">
            <p><b>Likes</b> ${r}</p>
            <p><b>Views</b> ${n}</p>
            <p><b>Comments</b> ${f}</p>
            <p><b>Downloads</b> ${P}</p>
          </div>
        </li>
      `).join("");m.insertAdjacentHTML("beforeend",t),$.refresh()}function E(){m.innerHTML=""}const q=document.querySelector(".form"),u=document.querySelector(".load-more");let l="",i=1;function b(){u.classList.remove("hidden")}function d(){u.classList.add("hidden")}q.addEventListener("submit",async o=>{if(o.preventDefault(),l=o.target.elements["search-text"].value.trim(),i=1,d(),!!l){E(),h();try{const t=await g(l,i);t.hits.length===0?c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}):(L(t.hits),i*15>=t.totalHits?(d(),c.info({message:"We're sorry, but you've reached the end of search results."})):b())}catch(t){console.error(t),c.error({title:"Error",message:"An error occurred while fetching images. Please try again later."})}finally{p()}}});u.addEventListener("click",async()=>{i+=1,h(),d();try{const o=await g(l,i);L(o.hits);const a=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:a*3,behavior:"smooth"}),i*15>=o.totalHits?(d(),c.info({message:"We're sorry, but you've reached the end of search results."})):b()}catch(o){console.error(o),c.error({title:"Error",message:"An error occurred while fetching images. Please try again later."})}finally{p()}});
//# sourceMappingURL=index.js.map
