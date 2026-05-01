import{a as l,S as u,i as n}from"./assets/vendor-D1AWmRWP.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const f="55660188-792f1fef602df37d72b3dd925";function d(s){return l.get("https://pixabay.com/api/",{params:{key:f,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(o=>o.data)}const c=document.querySelector(".gallery"),m=new u(".gallery a");function p(s){const o=s.map(r=>`
    <li class="gallery-item">
      <a href="${r.largeImageURL}">
        <img src="${r.webformatURL}" alt="${r.tags}" />
      </a>
      
      <div class="info">
        <p><b>Likes</b> ${r.likes}</p>
        <p><b>Views</b> ${r.views}</p>
        <p><b>Comments</b> ${r.comments}</p>
        <p><b>Downloads</b> ${r.downloads}</p>
      </div>
    </li>
  `).join("");c.insertAdjacentHTML("beforeend",o),m.refresh()}function y(){c.innerHTML=""}function h(){document.querySelector(".loader").classList.add("visible")}function g(){document.querySelector(".loader").classList.remove("visible")}const b=document.querySelector(".form");b.addEventListener("submit",L);function L(s){s.preventDefault();const o=s.target.elements["search-text"].value.trim();if(!o){n.error({message:"Введи щось для пошуку!"});return}y(),h(),d(o).then(r=>{if(r.hits.length===0){n.error({message:"Sorry, there are no images matching your search query."});return}p(r.hits)}).catch(()=>{n.error({message:"Помилка запиту 😢"})}).finally(()=>{g()})}
//# sourceMappingURL=index.js.map
