/* empty css              */(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function i(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(r){if(r.ep)return;r.ep=!0;const s=i(r);fetch(r.href,s)}})();class d{constructor(t=0,i="Network Error"){this.status=t,this.text=i}}const O=()=>{if(!(typeof localStorage>"u"))return{get:e=>Promise.resolve(localStorage.getItem(e)),set:(e,t)=>Promise.resolve(localStorage.setItem(e,t)),remove:e=>Promise.resolve(localStorage.removeItem(e))}},a={origin:"https://api.emailjs.com",blockHeadless:!1,storageProvider:O()},b=e=>e?typeof e=="string"?{publicKey:e}:e.toString()==="[object Object]"?e:{}:{},T=(e,t="https://api.emailjs.com")=>{if(!e)return;const i=b(e);a.publicKey=i.publicKey,a.blockHeadless=i.blockHeadless,a.storageProvider=i.storageProvider,a.blockList=i.blockList,a.limitRate=i.limitRate,a.origin=i.origin||t},h=async(e,t,i={})=>{const o=await fetch(a.origin+e,{method:"POST",headers:i,body:t}),r=await o.text(),s=new d(o.status,r);if(o.ok)return s;throw s},y=(e,t,i)=>{if(!e||typeof e!="string")throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t||typeof t!="string")throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!i||typeof i!="string")throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},P=e=>{if(e&&e.toString()!=="[object Object]")throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"},x=e=>e.webdriver||!e.languages||e.languages.length===0,v=()=>new d(451,"Unavailable For Headless Browser"),F=(e,t)=>{if(!Array.isArray(e))throw"The BlockList list has to be an array";if(typeof t!="string")throw"The BlockList watchVariable has to be a string"},R=e=>!e.list?.length||!e.watchVariable,M=(e,t)=>e instanceof FormData?e.get(t):e[t],w=(e,t)=>{if(R(e))return!1;F(e.list,e.watchVariable);const i=M(t,e.watchVariable);return typeof i!="string"?!1:e.list.includes(i)},k=()=>new d(403,"Forbidden"),j=(e,t)=>{if(typeof e!="number"||e<0)throw"The LimitRate throttle has to be a positive number";if(t&&typeof t!="string")throw"The LimitRate ID has to be a non-empty string"},H=async(e,t,i)=>{const o=Number(await i.get(e)||0);return t-Date.now()+o},L=async(e,t,i)=>{if(!t.throttle||!i)return!1;j(t.throttle,t.id);const o=t.id||e;return await H(o,t.throttle,i)>0?!0:(await i.set(o,Date.now().toString()),!1)},S=()=>new d(429,"Too Many Requests"),z=async(e,t,i,o)=>{const r=b(o),s=r.publicKey||a.publicKey,n=r.blockHeadless||a.blockHeadless,p=r.storageProvider||a.storageProvider,m={...a.blockList,...r.blockList},g={...a.limitRate,...r.limitRate};return n&&x(navigator)?Promise.reject(v()):(y(s,e,t),P(i),i&&w(m,i)?Promise.reject(k()):await L(location.pathname,g,p)?Promise.reject(S()):h("/api/v1.0/email/send",JSON.stringify({lib_version:"4.4.1",user_id:s,service_id:e,template_id:t,template_params:i}),{"Content-type":"application/json"}))},B=e=>{if(!e||e.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"},_=e=>typeof e=="string"?document.querySelector(e):e,I=async(e,t,i,o)=>{const r=b(o),s=r.publicKey||a.publicKey,n=r.blockHeadless||a.blockHeadless,p=a.storageProvider||r.storageProvider,m={...a.blockList,...r.blockList},g={...a.limitRate,...r.limitRate};if(n&&x(navigator))return Promise.reject(v());const f=_(i);y(s,e,t),B(f);const l=new FormData(f);return w(m,l)?Promise.reject(k()):await L(location.pathname,g,p)?Promise.reject(S()):(l.append("lib_version","4.4.1"),l.append("service_id",e),l.append("template_id",t),l.append("user_id",s),h("/api/v1.0/email/send-form",l))},E={init:T,send:z,sendForm:I,EmailJSResponseStatus:d},N=document.getElementById("menuBtn"),c=document.getElementById("mobileMenu");N.addEventListener("click",()=>{c.classList.contains("max-h-0")?(c.classList.remove("max-h-0","opacity-0"),c.classList.add("max-h-96","opacity-100")):(c.classList.add("max-h-0","opacity-0"),c.classList.remove("max-h-96","opacity-100"))});E.init("y22hylZaFSaZOMEwD");const u=document.getElementById("newsletterForm");u.addEventListener("submit",function(e){e.preventDefault();const t=u.user_email.value;E.send("service_pkthqxo","template_i68gbam",{email:t,html_content:`
  <div style="max-width:600px;margin:20px auto;background:#ffffff;border-radius:12px;overflow:hidden;font-family:Arial,sans-serif;color:#111;">
    <!-- HEADER -->
    <div style="text-align:center;padding:24px;border-bottom:1px solid #e5e7eb;">
      <h1 style="font-size:24px;font-weight:bold;margin:0;">⚡Click<span style="color:#fb3b57;">Spark</span></h1>
      <p style="font-size:14px;color:#6b7280;margin:4px 0 0;">Digital Marketing Newsletter</p>
    </div>

    <!-- INTRO -->
    <div style="text-align:center;padding:24px;">
      <p style="font-size:12px;text-transform:uppercase;color:#fb3b57;margin:0 0 12px;">Monthly Update • February</p>
      <h2 style="font-size:20px;font-weight:bold;color:#1e3a8a;margin:0 0 12px;">Marketing Insights You’ll Love</h2>
      <p style="font-size:14px;color:#555;margin:0 0 16px;">
        Practical strategies, expert tips, and exclusive offers to help your brand grow faster in the digital space.
      </p>
      <img src="https://images.unsplash.com/photo-1556761175-4b46a572b786" alt="Marketing" style="width:100%;max-width:400px;border-radius:8px;margin:0 auto 16px;display:block;" />
      
      <!-- EDITOR NOTE -->
      <div style="font-size:12px;color:#555;margin-bottom:16px;">
        <p style="font-weight:bold;margin:0 0 4px;">📝 Editor’s Note</p>
        <p style="margin:0;">
          This month, we’re focusing on smart growth — improving visibility, engagement, and conversions without increasing your ad spend.
        </p>
      </div>

      <!-- CTA -->
      <a href="https://clickspark-digital-agency.netlify.app/services.html" style="display:inline-block;padding:12px 24px;background:#fb3b57;color:#fff;text-decoration:none;border-radius:6px;font-weight:bold;margin-top:8px;">
        Explore Our Services →
      </a>
    </div>

    <!-- QUICK TIP -->
    <div style="background:#f9fafb;padding:16px;border-top:1px solid #e5e7eb;">
      <h3 style="font-size:16px;font-weight:bold;color:#1e3a8a;margin:0 0 8px;">💡 Quick Marketing Tip</h3>
      <p style="font-size:14px;color:#555;margin:0;">
        Website speed matters. Even a 1-second delay can reduce conversions by 7%. Optimize images and remove unused scripts for instant improvement.
      </p>
    </div>

    <!-- OFFERS -->
    <div style="padding:24px;border-top:1px solid #e5e7eb;">
      <h3 style="font-size:16px;font-weight:bold;color:#1e3a8a;margin:0 0 12px;text-align:center;">🎁 Exclusive Offers This Month</h3>

      <div style="background:#fff3f0;border:1px solid #fb3b57;border-radius:8px;padding:12px;margin-bottom:12px;">
        <p style="font-weight:bold;margin:0 0 4px;">🔥 Flat 20% OFF on SEO Audit</p>
        <p style="margin:0;">Get a complete website SEO audit and competitor analysis. Offer valid till Feb 28.</p>
      </div>

      <div style="background:#eff6ff;border:1px solid #3b82f6;border-radius:8px;padding:12px;">
        <p style="font-weight:bold;margin:0 0 4px;">🚀 Free Social Media Strategy Call</p>
        <p style="margin:0;">Book a 30-minute consultation and receive a personalized growth roadmap.</p>
      </div>
    </div>

    <!-- SERVICES -->
    <div style="padding:24px;background:#f9fafb;border-top:1px solid #e5e7eb;">
      <h3 style="font-size:16px;font-weight:bold;color:#1e3a8a;margin:0 0 12px;text-align:center;">⚙️ Our Core Services</h3>
      <div style="font-size:14px;color:#555;line-height:1.5;">
        <p style="margin:8px 0;"><strong>🔍 SEO Optimization:</strong> Rank higher and attract quality organic traffic.</p>
        <p style="margin:8px 0;"><strong>📢 Paid Advertising:</strong> Performance-driven Google & social ad campaigns.</p>
        <p style="margin:8px 0;"><strong>📱 Social Media Marketing:</strong> Build trust, engagement, and brand visibility.</p>
      </div>
      <img src="https://images.unsplash.com/photo-1552581234-26160f608093" alt="Digital Marketing" style="width:100%;max-width:320px;border-radius:8px;display:block;margin:16px auto 0;" />
    </div>

    <!-- FOOTER -->
    <div style="background:#111827;color:#d1d5db;text-align:center;padding:24px;">
      <p style="font-size:12px;margin:0 0 4px;">📧 support@clickspark.com</p>
      <p style="font-size:10px;margin:0;">© 2026 ClickSpark Digital Marketing</p>
    </div>
  </div>
  `}).then(o=>{console.log("SUCCESS!",o.status,o.text),alert("🎉 Newsletter sent! Check your inbox."),u.reset()}).catch(o=>{console.error("FAILED...",o),alert("Oops! Something went wrong. Try again.")})});
