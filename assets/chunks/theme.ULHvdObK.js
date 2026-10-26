const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/VPLocalSearchBox.-8Ud8jlg.js","assets/chunks/framework.CBxkvBm_.js","assets/chunks/mermaid.core.CoQ9ZrcJ.js"])))=>i.map(i=>d[i]);
import{d as we,c as Y,r as J,n as dt,o as N,a as Rn,t as Qe,b as Be,w as se,T as _o,e as Ce,_ as Ne,u as go,i as Kc,f as Zc,g as vo,h as $e,j as U,k as W,l as Mi,m as fa,p as Je,q as Mn,s as mr,v as Nn,x as _r,y as xo,z as jc,A as Jc,F as Et,B as Ht,C as ui,D as gr,E as Oe,G as Jl,H as Cn,I as Ql,J as vr,K as oi,L as xr,M as Qc,N as Mo,O as pa,P as So,Q as ec,R as Mr,S as eu,U as tu,V as tc,W as nc,X as ic,Y as nu,Z as iu,$ as su,a0 as ma,a1 as ru,a2 as sc}from"./framework.CBxkvBm_.js";const au=we({__name:"VPBadge",props:{text:{},type:{default:"tip"}},setup(i){return(e,t)=>(N(),Y("span",{class:dt(["VPBadge",i.type])},[J(e.$slots,"default",{},()=>[Rn(Qe(i.text),1)])],2))}}),ou={key:0,class:"VPBackdrop"},lu=we({__name:"VPBackdrop",props:{show:{type:Boolean}},setup(i){return(e,t)=>(N(),Be(_o,{name:"fade"},{default:se(()=>[i.show?(N(),Y("div",ou)):Ce("",!0)]),_:1}))}}),cu=Ne(lu,[["__scopeId","data-v-b2600058"]]),rt=go;function uu(i,e){let t,n=!1;return()=>{t&&clearTimeout(t),n?t=setTimeout(i,e):(i(),(n=!0)&&setTimeout(()=>n=!1,e))}}function _a(i){return i.startsWith("/")?i:`/${i}`}function bo(i){const{pathname:e,search:t,hash:n,protocol:s}=new URL(i,"http://a.com");if(Kc(i)||i.startsWith("#")||!s.startsWith("http")||!Zc(e))return i;const{site:r}=rt(),a=e.endsWith("/")||e.endsWith(".html")?i:i.replace(/(?:(^\.+)\/)?.*$/,`$1${e.replace(/(\.md)?$/,r.value.cleanUrls?"":".html")}${t}${n}`);return vo(a)}function _s({correspondingLink:i=!1}={}){const{site:e,localeIndex:t,page:n,theme:s,hash:r}=rt(),a=$e(()=>({label:e.value.locales[t.value]?.label,link:e.value.locales[t.value]?.link||(t.value==="root"?"/":`/${t.value}/`)}));return{localeLinks:$e(()=>Object.entries(e.value.locales).flatMap(([l,c])=>a.value.label===c.label?[]:{text:c.label,link:du(c.link||(l==="root"?"/":`/${l}/`),s.value.i18nRouting!==!1&&i,n.value.relativePath.slice(a.value.link.length-1),!e.value.cleanUrls)+r.value})),currentLang:a}}function du(i,e,t,n){return e?i.replace(/\/$/,"")+_a(t.replace(/(^|\/)index\.md$/,"$1").replace(/\.md$/,n?".html":"")):i}const hu={class:"NotFound"},fu={class:"code"},pu={class:"title"},mu={class:"quote"},_u={class:"action"},gu=["href","aria-label"],vu=we({__name:"NotFound",setup(i){const{theme:e}=rt(),{currentLang:t}=_s();return(n,s)=>(N(),Y("div",hu,[U("p",fu,Qe(W(e).notFound?.code??"404"),1),U("h1",pu,Qe(W(e).notFound?.title??"PAGE NOT FOUND"),1),s[0]||(s[0]=U("div",{class:"divider"},null,-1)),U("blockquote",mu,Qe(W(e).notFound?.quote??"But if you don't change your direction, and if you keep looking, you may end up where you are heading."),1),U("div",_u,[U("a",{class:"link",href:W(vo)(W(t).link),"aria-label":W(e).notFound?.linkLabel??"go to home"},Qe(W(e).notFound?.linkText??"Take me home"),9,gu)])]))}}),xu=Ne(vu,[["__scopeId","data-v-93fd8736"]]);function rc(i,e){if(Array.isArray(i))return Js(i);if(i==null)return[];e=_a(e);const t=Object.keys(i).sort((s,r)=>r.split("/").length-s.split("/").length).find(s=>e.startsWith(_a(s))),n=t?i[t]:[];return Array.isArray(n)?Js(n):Js(n.items,n.base)}function Mu(i){const e=[];let t=0;for(const n in i){const s=i[n];if(s.items){t=e.push(s);continue}e[t]||e.push({items:[]}),e[t].items.push(s)}return e}function Su(i){const e=[];function t(n){for(const s of n)s.text&&s.link&&e.push({text:s.text,link:s.link,docFooterText:s.docFooterText}),s.items&&t(s.items)}return t(i),e}function ga(i,e){return Array.isArray(e)?e.some(t=>ga(i,t)):Mi(i,e.link)?!0:e.items?ga(i,e.items):!1}function Js(i,e){return[...i].map(t=>{const n={...t},s=n.base||e;return s&&n.link&&(n.link=s+n.link),n.items&&(n.items=Js(n.items,s)),n})}function Yn(){const{frontmatter:i,page:e,theme:t}=rt(),n=fa("(min-width: 960px)"),s=Je(!1),r=$e(()=>{const M=t.value.sidebar,p=e.value.relativePath;return M?rc(M,p):[]}),a=Je(r.value);Mn(r,(M,p)=>{JSON.stringify(M)!==JSON.stringify(p)&&(a.value=r.value)});const o=$e(()=>i.value.sidebar!==!1&&a.value.length>0&&i.value.layout!=="home"),l=$e(()=>c?i.value.aside==null?t.value.aside==="left":i.value.aside==="left":!1),c=$e(()=>i.value.layout==="home"?!1:i.value.aside!=null?!!i.value.aside:t.value.aside!==!1),d=$e(()=>o.value&&n.value),f=$e(()=>o.value?Mu(a.value):[]);function u(){s.value=!0}function m(){s.value=!1}function g(){s.value?m():u()}return{isOpen:s,sidebar:a,sidebarGroups:f,hasSidebar:o,hasAside:c,leftAside:l,isSidebarEnabled:d,open:u,close:m,toggle:g}}function bu(i,e){let t;mr(()=>{t=i.value?document.activeElement:void 0}),Nn(()=>{window.addEventListener("keyup",n)}),_r(()=>{window.removeEventListener("keyup",n)});function n(s){s.key==="Escape"&&i.value&&(e(),t?.focus())}}function yu(i){const{page:e,hash:t}=rt(),n=Je(!1),s=$e(()=>i.value.collapsed!=null),r=$e(()=>!!i.value.link),a=Je(!1),o=()=>{a.value=Mi(e.value.relativePath,i.value.link)};Mn([e,i,t],o),Nn(o);const l=$e(()=>a.value?!0:i.value.items?ga(e.value.relativePath,i.value.items):!1),c=$e(()=>!!(i.value.items&&i.value.items.length));mr(()=>{n.value=!!(s.value&&i.value.collapsed)}),xo(()=>{(a.value||l.value)&&(n.value=!1)});function d(){s.value&&(n.value=!n.value)}return{collapsed:n,collapsible:s,isLink:r,isActiveLink:a,hasActiveLink:l,hasChildren:c,toggle:d}}function Eu(){const{hasSidebar:i}=Yn(),e=fa("(min-width: 960px)"),t=fa("(min-width: 1280px)");return{isAsideEnabled:$e(()=>!t.value&&!e.value?!1:i.value?t.value:e.value)}}const Tu=/\b(?:VPBadge|header-anchor|footnote-ref|ignore-header)\b/,va=[];function ac(i){return typeof i.outline=="object"&&!Array.isArray(i.outline)&&i.outline.label||i.outlineTitle||"On this page"}function yo(i){const e=[...document.querySelectorAll(".VPDoc :where(h1,h2,h3,h4,h5,h6)")].filter(t=>t.id&&t.hasChildNodes()).map(t=>{const n=Number(t.tagName[1]);return{element:t,title:Au(t),link:"#"+t.id,level:n}});return wu(e,i)}function Au(i){let e="";for(const t of i.childNodes)if(t.nodeType===1){if(Tu.test(t.className))continue;e+=t.textContent}else t.nodeType===3&&(e+=t.textContent);return e.trim()}function wu(i,e){if(e===!1)return[];const t=(typeof e=="object"&&!Array.isArray(e)?e.level:e)||2,[n,s]=typeof t=="number"?[t,t]:t==="deep"?[2,6]:t;return Pu(i,n,s)}function Ru(i,e){const{isAsideEnabled:t}=Eu(),n=uu(r,100);let s=null;Nn(()=>{requestAnimationFrame(r),window.addEventListener("scroll",n)}),jc(()=>{a(location.hash)}),_r(()=>{window.removeEventListener("scroll",n)});function r(){if(!t.value)return;const o=window.scrollY,l=window.innerHeight,c=document.body.offsetHeight,d=Math.abs(o+l-c)<1,f=va.map(({element:m,link:g})=>({link:g,top:Cu(m)})).filter(({top:m})=>!Number.isNaN(m)).sort((m,g)=>m.top-g.top);if(!f.length){a(null);return}if(o<1){a(null);return}if(d){a(f[f.length-1].link);return}let u=null;for(const{link:m,top:g}of f){if(g>o+Jc()+4)break;u=m}a(u)}function a(o){s&&s.classList.remove("active"),o==null?s=null:s=i.value.querySelector(`a[href="${decodeURIComponent(o)}"]`);const l=s;l?(l.classList.add("active"),e.value.style.top=l.offsetTop+39+"px",e.value.style.opacity="1"):(e.value.style.top="33px",e.value.style.opacity="0")}}function Cu(i){let e=0;for(;i!==document.body;){if(i===null)return NaN;e+=i.offsetTop,i=i.offsetParent}return e}function Pu(i,e,t){va.length=0;const n=[],s=[];return i.forEach(r=>{const a={...r,children:[]};let o=s[s.length-1];for(;o&&o.level>=a.level;)s.pop(),o=s[s.length-1];if(a.element.classList.contains("ignore-header")||o&&"shouldIgnore"in o){s.push({level:a.level,shouldIgnore:!0});return}a.level>t||a.level<e||(va.push({element:a.element,link:a.link}),o?o.children.push(a):n.push(a),s.push(a))}),n}const Lu=["href","title"],Du=we({__name:"VPDocOutlineItem",props:{headers:{},root:{type:Boolean}},setup(i){function e({target:t}){const n=t.href.split("#")[1];document.getElementById(decodeURIComponent(n))?.focus({preventScroll:!0})}return(t,n)=>{const s=ui("VPDocOutlineItem",!0);return N(),Y("ul",{class:dt(["VPDocOutlineItem",i.root?"root":"nested"])},[(N(!0),Y(Et,null,Ht(i.headers,({children:r,link:a,title:o})=>(N(),Y("li",null,[U("a",{class:"outline-link",href:a,onClick:e,title:o},Qe(o),9,Lu),r?.length?(N(),Be(s,{key:0,headers:r},null,8,["headers"])):Ce("",!0)]))),256))],2)}}}),oc=Ne(Du,[["__scopeId","data-v-da421f78"]]),Iu={class:"content"},Uu={"aria-level":"2",class:"outline-title",id:"doc-outline-aria-label",role:"heading"},Nu=we({__name:"VPDocAsideOutline",setup(i){const{frontmatter:e,theme:t}=rt(),n=Jl([]);gr(()=>{n.value=yo(e.value.outline??t.value.outline)});const s=Je(),r=Je();return Ru(s,r),(a,o)=>(N(),Y("nav",{"aria-labelledby":"doc-outline-aria-label",class:dt(["VPDocAsideOutline",{"has-outline":n.value.length>0}]),ref_key:"container",ref:s},[U("div",Iu,[U("div",{class:"outline-marker",ref_key:"marker",ref:r},null,512),U("div",Uu,Qe(W(ac)(W(t))),1),Oe(oc,{headers:n.value,root:!0},null,8,["headers"])])],2))}}),Fu=Ne(Nu,[["__scopeId","data-v-dfbd9fb8"]]),Ou={class:"VPDocAsideCarbonAds"},Bu=we({__name:"VPDocAsideCarbonAds",props:{carbonAds:{}},setup(i){const e=()=>null;return(t,n)=>(N(),Y("div",Ou,[Oe(W(e),{"carbon-ads":i.carbonAds},null,8,["carbon-ads"])]))}}),ku={class:"VPDocAside"},Vu=we({__name:"VPDocAside",setup(i){const{theme:e}=rt();return(t,n)=>(N(),Y("div",ku,[J(t.$slots,"aside-top",{},void 0,!0),J(t.$slots,"aside-outline-before",{},void 0,!0),Oe(Fu),J(t.$slots,"aside-outline-after",{},void 0,!0),n[0]||(n[0]=U("div",{class:"spacer"},null,-1)),J(t.$slots,"aside-ads-before",{},void 0,!0),W(e).carbonAds?(N(),Be(Bu,{key:0,"carbon-ads":W(e).carbonAds},null,8,["carbon-ads"])):Ce("",!0),J(t.$slots,"aside-ads-after",{},void 0,!0),J(t.$slots,"aside-bottom",{},void 0,!0)]))}}),zu=Ne(Vu,[["__scopeId","data-v-79cae1a0"]]);function Gu(){const{theme:i,page:e}=rt();return $e(()=>{const{text:t="Edit this page",pattern:n=""}=i.value.editLink||{};let s;return typeof n=="function"?s=n(e.value):s=n.replace(/:path/g,e.value.filePath),{url:s,text:t}})}function Hu(){const{page:i,theme:e,frontmatter:t}=rt();return $e(()=>{const n=rc(e.value.sidebar,i.value.relativePath),s=Su(n),r=Wu(s,c=>c.link.replace(/[?#].*$/,"")),a=r.findIndex(c=>Mi(i.value.relativePath,c.link)),o=e.value.docFooter?.prev===!1&&!t.value.prev||t.value.prev===!1,l=e.value.docFooter?.next===!1&&!t.value.next||t.value.next===!1;return{prev:o?void 0:{text:(typeof t.value.prev=="string"?t.value.prev:typeof t.value.prev=="object"?t.value.prev.text:void 0)??r[a-1]?.docFooterText??r[a-1]?.text,link:(typeof t.value.prev=="object"?t.value.prev.link:void 0)??r[a-1]?.link},next:l?void 0:{text:(typeof t.value.next=="string"?t.value.next:typeof t.value.next=="object"?t.value.next.text:void 0)??r[a+1]?.docFooterText??r[a+1]?.text,link:(typeof t.value.next=="object"?t.value.next.link:void 0)??r[a+1]?.link}}})}function Wu(i,e){const t=new Set;return i.filter(n=>{const s=e(n);return t.has(s)?!1:t.add(s)})}const Pn=we({__name:"VPLink",props:{tag:{},href:{},noIcon:{type:Boolean},target:{},rel:{}},setup(i){const e=i,t=$e(()=>e.tag??(e.href?"a":"span")),n=$e(()=>e.href&&Ql.test(e.href)||e.target==="_blank");return(s,r)=>(N(),Be(Cn(t.value),{class:dt(["VPLink",{link:i.href,"vp-external-link-icon":n.value,"no-icon":i.noIcon}]),href:i.href?W(bo)(i.href):void 0,target:i.target??(n.value?"_blank":void 0),rel:i.rel??(n.value?"noreferrer":void 0)},{default:se(()=>[J(s.$slots,"default")]),_:3},8,["class","href","target","rel"]))}}),$u={class:"VPLastUpdated"},Xu=["datetime"],qu=we({__name:"VPDocFooterLastUpdated",setup(i){const{theme:e,page:t,lang:n}=rt(),s=$e(()=>new Date(t.value.lastUpdated)),r=$e(()=>s.value.toISOString()),a=Je("");return Nn(()=>{mr(()=>{a.value=new Intl.DateTimeFormat(e.value.lastUpdated?.formatOptions?.forceLocale?n.value:void 0,e.value.lastUpdated?.formatOptions??{dateStyle:"short",timeStyle:"short"}).format(s.value)})}),(o,l)=>(N(),Y("p",$u,[Rn(Qe(W(e).lastUpdated?.text||W(e).lastUpdatedText||"Last updated")+": ",1),U("time",{datetime:r.value},Qe(a.value),9,Xu)]))}}),Yu=Ne(qu,[["__scopeId","data-v-e95db471"]]),Ku={key:0,class:"VPDocFooter"},Zu={key:0,class:"edit-info"},ju={key:0,class:"edit-link"},Ju={key:1,class:"last-updated"},Qu={key:1,class:"prev-next","aria-labelledby":"doc-footer-aria-label"},ed={class:"pager"},td=["innerHTML"],nd=["innerHTML"],id={class:"pager"},sd=["innerHTML"],rd=["innerHTML"],ad=we({__name:"VPDocFooter",setup(i){const{theme:e,page:t,frontmatter:n}=rt(),s=Gu(),r=Hu(),a=$e(()=>e.value.editLink&&n.value.editLink!==!1),o=$e(()=>t.value.lastUpdated),l=$e(()=>a.value||o.value||r.value.prev||r.value.next);return(c,d)=>l.value?(N(),Y("footer",Ku,[J(c.$slots,"doc-footer-before",{},void 0,!0),a.value||o.value?(N(),Y("div",Zu,[a.value?(N(),Y("div",ju,[Oe(Pn,{class:"edit-link-button",href:W(s).url,"no-icon":!0},{default:se(()=>[d[0]||(d[0]=U("span",{class:"vpi-square-pen edit-link-icon"},null,-1)),Rn(" "+Qe(W(s).text),1)]),_:1},8,["href"])])):Ce("",!0),o.value?(N(),Y("div",Ju,[Oe(Yu)])):Ce("",!0)])):Ce("",!0),W(r).prev?.link||W(r).next?.link?(N(),Y("nav",Qu,[d[1]||(d[1]=U("span",{class:"visually-hidden",id:"doc-footer-aria-label"},"Pager",-1)),U("div",ed,[W(r).prev?.link?(N(),Be(Pn,{key:0,class:"pager-link prev",href:W(r).prev.link},{default:se(()=>[U("span",{class:"desc",innerHTML:W(e).docFooter?.prev||"Previous page"},null,8,td),U("span",{class:"title",innerHTML:W(r).prev.text},null,8,nd)]),_:1},8,["href"])):Ce("",!0)]),U("div",id,[W(r).next?.link?(N(),Be(Pn,{key:0,class:"pager-link next",href:W(r).next.link},{default:se(()=>[U("span",{class:"desc",innerHTML:W(e).docFooter?.next||"Next page"},null,8,sd),U("span",{class:"title",innerHTML:W(r).next.text},null,8,rd)]),_:1},8,["href"])):Ce("",!0)])])):Ce("",!0)])):Ce("",!0)}}),od=Ne(ad,[["__scopeId","data-v-07d71ff1"]]),ld={class:"container"},cd={class:"aside-container"},ud={class:"aside-content"},dd={class:"content"},hd={class:"content-container"},fd={class:"main"},pd=we({__name:"VPDoc",setup(i){const{theme:e}=rt(),t=vr(),{hasSidebar:n,hasAside:s,leftAside:r}=Yn(),a=$e(()=>t.path.replace(/[./]+/g,"_").replace(/_html$/,""));return(o,l)=>{const c=ui("Content");return N(),Y("div",{class:dt(["VPDoc",{"has-sidebar":W(n),"has-aside":W(s)}])},[J(o.$slots,"doc-top",{},void 0,!0),U("div",ld,[W(s)?(N(),Y("div",{key:0,class:dt(["aside",{"left-aside":W(r)}])},[l[0]||(l[0]=U("div",{class:"aside-curtain"},null,-1)),U("div",cd,[U("div",ud,[Oe(zu,null,{"aside-top":se(()=>[J(o.$slots,"aside-top",{},void 0,!0)]),"aside-bottom":se(()=>[J(o.$slots,"aside-bottom",{},void 0,!0)]),"aside-outline-before":se(()=>[J(o.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":se(()=>[J(o.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":se(()=>[J(o.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":se(()=>[J(o.$slots,"aside-ads-after",{},void 0,!0)]),_:3})])])],2)):Ce("",!0),U("div",dd,[U("div",hd,[J(o.$slots,"doc-before",{},void 0,!0),U("main",fd,[Oe(c,{class:dt(["vp-doc",[a.value,W(e).externalLinkIcon&&"external-link-icon-enabled"]])},null,8,["class"])]),Oe(od,null,{"doc-footer-before":se(()=>[J(o.$slots,"doc-footer-before",{},void 0,!0)]),_:3}),J(o.$slots,"doc-after",{},void 0,!0)])])]),J(o.$slots,"doc-bottom",{},void 0,!0)],2)}}}),md=Ne(pd,[["__scopeId","data-v-ef3a4dda"]]),_d=we({__name:"VPButton",props:{tag:{},size:{default:"medium"},theme:{default:"brand"},text:{},href:{},target:{},rel:{}},setup(i){const e=i,t=$e(()=>e.href&&Ql.test(e.href)),n=$e(()=>e.tag||(e.href?"a":"button"));return(s,r)=>(N(),Be(Cn(n.value),{class:dt(["VPButton",[i.size,i.theme]]),href:i.href?W(bo)(i.href):void 0,target:e.target??(t.value?"_blank":void 0),rel:e.rel??(t.value?"noreferrer":void 0)},{default:se(()=>[Rn(Qe(i.text),1)]),_:1},8,["class","href","target","rel"]))}}),gd=Ne(_d,[["__scopeId","data-v-b20c43c2"]]),vd=["src","alt"],xd=we({inheritAttrs:!1,__name:"VPImage",props:{image:{},alt:{}},setup(i){return(e,t)=>{const n=ui("VPImage",!0);return i.image?(N(),Y(Et,{key:0},[typeof i.image=="string"||"src"in i.image?(N(),Y("img",oi({key:0,class:"VPImage"},typeof i.image=="string"?e.$attrs:{...i.image,...e.$attrs},{src:W(vo)(typeof i.image=="string"?i.image:i.image.src),alt:i.alt??(typeof i.image=="string"?"":i.image.alt||"")}),null,16,vd)):(N(),Y(Et,{key:1},[Oe(n,oi({class:"dark",image:i.image.dark,alt:i.image.alt},e.$attrs),null,16,["image","alt"]),Oe(n,oi({class:"light",image:i.image.light,alt:i.image.alt},e.$attrs),null,16,["image","alt"])],64))],64)):Ce("",!0)}}}),ar=Ne(xd,[["__scopeId","data-v-4d414b82"]]),Md={class:"container"},Sd={class:"main"},bd={class:"heading"},yd=["innerHTML"],Ed=["innerHTML"],Td=["innerHTML"],Ad={key:0,class:"actions"},wd={key:0,class:"image"},Rd={class:"image-container"},Cd=we({__name:"VPHero",props:{name:{},text:{},tagline:{},image:{},actions:{}},setup(i){const e=xr("hero-image-slot-exists");return(t,n)=>(N(),Y("div",{class:dt(["VPHero",{"has-image":i.image||W(e)}])},[U("div",Md,[U("div",Sd,[J(t.$slots,"home-hero-info-before",{},void 0,!0),J(t.$slots,"home-hero-info",{},()=>[U("h1",bd,[i.name?(N(),Y("span",{key:0,innerHTML:i.name,class:"name clip"},null,8,yd)):Ce("",!0),i.text?(N(),Y("span",{key:1,innerHTML:i.text,class:"text"},null,8,Ed)):Ce("",!0)]),i.tagline?(N(),Y("p",{key:0,innerHTML:i.tagline,class:"tagline"},null,8,Td)):Ce("",!0)],!0),J(t.$slots,"home-hero-info-after",{},void 0,!0),i.actions?(N(),Y("div",Ad,[(N(!0),Y(Et,null,Ht(i.actions,s=>(N(),Y("div",{key:s.link,class:"action"},[Oe(gd,{tag:"a",size:"medium",theme:s.theme,text:s.text,href:s.link,target:s.target,rel:s.rel},null,8,["theme","text","href","target","rel"])]))),128))])):Ce("",!0),J(t.$slots,"home-hero-actions-after",{},void 0,!0)]),i.image||W(e)?(N(),Y("div",wd,[U("div",Rd,[n[0]||(n[0]=U("div",{class:"image-bg"},null,-1)),J(t.$slots,"home-hero-image",{},()=>[i.image?(N(),Be(ar,{key:0,class:"image-src",image:i.image},null,8,["image"])):Ce("",!0)],!0)])])):Ce("",!0)])],2))}}),Pd=Ne(Cd,[["__scopeId","data-v-d266baba"]]),Ld=we({__name:"VPHomeHero",setup(i){const{frontmatter:e}=rt();return(t,n)=>W(e).hero?(N(),Be(Pd,{key:0,class:"VPHomeHero",name:W(e).hero.name,text:W(e).hero.text,tagline:W(e).hero.tagline,image:W(e).hero.image,actions:W(e).hero.actions},{"home-hero-info-before":se(()=>[J(t.$slots,"home-hero-info-before")]),"home-hero-info":se(()=>[J(t.$slots,"home-hero-info")]),"home-hero-info-after":se(()=>[J(t.$slots,"home-hero-info-after")]),"home-hero-actions-after":se(()=>[J(t.$slots,"home-hero-actions-after")]),"home-hero-image":se(()=>[J(t.$slots,"home-hero-image")]),_:3},8,["name","text","tagline","image","actions"])):Ce("",!0)}}),Dd={class:"box"},Id={key:0,class:"icon"},Ud=["innerHTML"],Nd=["innerHTML"],Fd=["innerHTML"],Od={key:4,class:"link-text"},Bd={class:"link-text-value"},kd=we({__name:"VPFeature",props:{icon:{},title:{},details:{},link:{},linkText:{},rel:{},target:{}},setup(i){return(e,t)=>(N(),Be(Pn,{class:"VPFeature",href:i.link,rel:i.rel,target:i.target,"no-icon":!0,tag:i.link?"a":"div"},{default:se(()=>[U("article",Dd,[typeof i.icon=="object"&&i.icon.wrap?(N(),Y("div",Id,[Oe(ar,{image:i.icon,alt:i.icon.alt,height:i.icon.height||48,width:i.icon.width||48},null,8,["image","alt","height","width"])])):typeof i.icon=="object"?(N(),Be(ar,{key:1,image:i.icon,alt:i.icon.alt,height:i.icon.height||48,width:i.icon.width||48},null,8,["image","alt","height","width"])):i.icon?(N(),Y("div",{key:2,class:"icon",innerHTML:i.icon},null,8,Ud)):Ce("",!0),U("h2",{class:"title",innerHTML:i.title},null,8,Nd),i.details?(N(),Y("p",{key:3,class:"details",innerHTML:i.details},null,8,Fd)):Ce("",!0),i.linkText?(N(),Y("div",Od,[U("p",Bd,[Rn(Qe(i.linkText)+" ",1),t[0]||(t[0]=U("span",{class:"vpi-arrow-right link-text-icon"},null,-1))])])):Ce("",!0)])]),_:1},8,["href","rel","target","tag"]))}}),Vd=Ne(kd,[["__scopeId","data-v-95001937"]]),zd={key:0,class:"VPFeatures"},Gd={class:"container"},Hd={class:"items"},Wd=we({__name:"VPFeatures",props:{features:{}},setup(i){const e=i,t=$e(()=>{const n=e.features.length;if(n){if(n===2)return"grid-2";if(n===3)return"grid-3";if(n%3===0)return"grid-6";if(n>3)return"grid-4"}else return});return(n,s)=>i.features?(N(),Y("div",zd,[U("div",Gd,[U("div",Hd,[(N(!0),Y(Et,null,Ht(i.features,r=>(N(),Y("div",{key:r.title,class:dt(["item",[t.value]])},[Oe(Vd,{icon:r.icon,title:r.title,details:r.details,link:r.link,"link-text":r.linkText,rel:r.rel,target:r.target},null,8,["icon","title","details","link","link-text","rel","target"])],2))),128))])])])):Ce("",!0)}}),$d=Ne(Wd,[["__scopeId","data-v-1da4ff3d"]]),Xd=we({__name:"VPHomeFeatures",setup(i){const{frontmatter:e}=rt();return(t,n)=>W(e).features?(N(),Be($d,{key:0,class:"VPHomeFeatures",features:W(e).features},null,8,["features"])):Ce("",!0)}}),qd=we({__name:"VPHomeContent",setup(i){const{width:e}=Qc({initialWidth:0,includeScrollbar:!1});return(t,n)=>(N(),Y("div",{class:"vp-doc container",style:Mo(W(e)?{"--vp-offset":`calc(50% - ${W(e)/2}px)`}:{})},[J(t.$slots,"default",{},void 0,!0)],4))}}),Yd=Ne(qd,[["__scopeId","data-v-2498cc33"]]),Kd=we({__name:"VPHome",setup(i){const{frontmatter:e,theme:t}=rt();return(n,s)=>{const r=ui("Content");return N(),Y("div",{class:dt(["VPHome",{"external-link-icon-enabled":W(t).externalLinkIcon}])},[J(n.$slots,"home-hero-before",{},void 0,!0),Oe(Ld,null,{"home-hero-info-before":se(()=>[J(n.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":se(()=>[J(n.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":se(()=>[J(n.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":se(()=>[J(n.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":se(()=>[J(n.$slots,"home-hero-image",{},void 0,!0)]),_:3}),J(n.$slots,"home-hero-after",{},void 0,!0),J(n.$slots,"home-features-before",{},void 0,!0),Oe(Xd),J(n.$slots,"home-features-after",{},void 0,!0),W(e).markdownStyles!==!1?(N(),Be(Yd,{key:0},{default:se(()=>[Oe(r)]),_:1})):(N(),Be(r,{key:1}))],2)}}}),Zd=Ne(Kd,[["__scopeId","data-v-8b59c434"]]),jd={},Jd={class:"VPPage"};function Qd(i,e){const t=ui("Content");return N(),Y("div",Jd,[J(i.$slots,"page-top"),Oe(t),J(i.$slots,"page-bottom")])}const eh=Ne(jd,[["render",Qd]]),th=we({__name:"VPContent",setup(i){const{page:e,frontmatter:t}=rt(),{hasSidebar:n}=Yn();return(s,r)=>(N(),Y("div",{class:dt(["VPContent",{"has-sidebar":W(n),"is-home":W(t).layout==="home"}]),id:"VPContent"},[W(e).isNotFound?J(s.$slots,"not-found",{},()=>[Oe(xu)],!0,0):W(t).layout==="page"?(N(),Be(eh,{key:1},{"page-top":se(()=>[J(s.$slots,"page-top",{},void 0,!0)]),"page-bottom":se(()=>[J(s.$slots,"page-bottom",{},void 0,!0)]),_:3})):W(t).layout==="home"?(N(),Be(Zd,{key:2},{"home-hero-before":se(()=>[J(s.$slots,"home-hero-before",{},void 0,!0)]),"home-hero-info-before":se(()=>[J(s.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":se(()=>[J(s.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":se(()=>[J(s.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":se(()=>[J(s.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":se(()=>[J(s.$slots,"home-hero-image",{},void 0,!0)]),"home-hero-after":se(()=>[J(s.$slots,"home-hero-after",{},void 0,!0)]),"home-features-before":se(()=>[J(s.$slots,"home-features-before",{},void 0,!0)]),"home-features-after":se(()=>[J(s.$slots,"home-features-after",{},void 0,!0)]),_:3})):W(t).layout&&W(t).layout!=="doc"?(N(),Be(Cn(W(t).layout),{key:3})):(N(),Be(md,{key:4},{"doc-top":se(()=>[J(s.$slots,"doc-top",{},void 0,!0)]),"doc-bottom":se(()=>[J(s.$slots,"doc-bottom",{},void 0,!0)]),"doc-footer-before":se(()=>[J(s.$slots,"doc-footer-before",{},void 0,!0)]),"doc-before":se(()=>[J(s.$slots,"doc-before",{},void 0,!0)]),"doc-after":se(()=>[J(s.$slots,"doc-after",{},void 0,!0)]),"aside-top":se(()=>[J(s.$slots,"aside-top",{},void 0,!0)]),"aside-outline-before":se(()=>[J(s.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":se(()=>[J(s.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":se(()=>[J(s.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":se(()=>[J(s.$slots,"aside-ads-after",{},void 0,!0)]),"aside-bottom":se(()=>[J(s.$slots,"aside-bottom",{},void 0,!0)]),_:3}))],2))}}),nh=Ne(th,[["__scopeId","data-v-d2aef184"]]),ih={class:"container"},sh=["innerHTML"],rh=["innerHTML"],ah=we({__name:"VPFooter",setup(i){const{theme:e,frontmatter:t}=rt(),{hasSidebar:n}=Yn();return(s,r)=>W(e).footer&&W(t).footer!==!1?(N(),Y("footer",{key:0,class:dt(["VPFooter",{"has-sidebar":W(n)}])},[U("div",ih,[W(e).footer.message?(N(),Y("p",{key:0,class:"message",innerHTML:W(e).footer.message},null,8,sh)):Ce("",!0),W(e).footer.copyright?(N(),Y("p",{key:1,class:"copyright",innerHTML:W(e).footer.copyright},null,8,rh)):Ce("",!0)])],2)):Ce("",!0)}}),oh=Ne(ah,[["__scopeId","data-v-e3157d6d"]]);function lh(){const{theme:i,frontmatter:e}=rt(),t=Jl([]),n=$e(()=>t.value.length>0);return gr(()=>{t.value=yo(e.value.outline??i.value.outline)}),{headers:t,hasLocalNav:n}}const ch={class:"menu-text"},uh={class:"header"},dh={class:"outline"},hh=we({__name:"VPLocalNavOutlineDropdown",props:{headers:{},navHeight:{}},setup(i){const e=i,{theme:t}=rt(),n=Je(!1),s=Je(0),r=Je(),a=Je();function o(f){r.value?.contains(f.target)||(n.value=!1)}Mn(n,f=>{if(f){document.addEventListener("click",o);return}document.removeEventListener("click",o)}),pa("Escape",()=>{n.value=!1}),gr(()=>{n.value=!1});function l(){n.value=!n.value,s.value=window.innerHeight+Math.min(window.scrollY-e.navHeight,0)}function c(f){f.target.classList.contains("outline-link")&&(a.value&&(a.value.style.transition="none"),So(()=>{n.value=!1}))}function d(){n.value=!1,window.scrollTo({top:0,left:0,behavior:"smooth"})}return(f,u)=>(N(),Y("div",{class:"VPLocalNavOutlineDropdown",style:Mo({"--vp-vh":s.value+"px"}),ref_key:"main",ref:r},[i.headers.length>0?(N(),Y("button",{key:0,onClick:l,class:dt({open:n.value})},[U("span",ch,Qe(W(ac)(W(t))),1),u[0]||(u[0]=U("span",{class:"vpi-chevron-right icon"},null,-1))],2)):(N(),Y("button",{key:1,onClick:d},Qe(W(t).returnToTopLabel||"Return to top"),1)),Oe(_o,{name:"flyout"},{default:se(()=>[n.value?(N(),Y("div",{key:0,ref_key:"items",ref:a,class:"items",onClick:c},[U("div",uh,[U("a",{class:"top-link",href:"#",onClick:d},Qe(W(t).returnToTopLabel||"Return to top"),1)]),U("div",dh,[Oe(oc,{headers:i.headers},null,8,["headers"])])],512)):Ce("",!0)]),_:1})],4))}}),fh=Ne(hh,[["__scopeId","data-v-d61422fe"]]),ph={class:"container"},mh=["aria-expanded"],_h={class:"menu-text"},gh=we({__name:"VPLocalNav",props:{open:{type:Boolean}},emits:["open-menu"],setup(i){const{theme:e,frontmatter:t}=rt(),{hasSidebar:n}=Yn(),{headers:s}=lh(),{y:r}=ec(),a=Je(0);Nn(()=>{a.value=parseInt(getComputedStyle(document.documentElement).getPropertyValue("--vp-nav-height"))}),gr(()=>{s.value=yo(t.value.outline??e.value.outline)});const o=$e(()=>s.value.length===0),l=$e(()=>o.value&&!n.value),c=$e(()=>({VPLocalNav:!0,"has-sidebar":n.value,empty:o.value,fixed:l.value}));return(d,f)=>W(t).layout!=="home"&&(!l.value||W(r)>=a.value)?(N(),Y("div",{key:0,class:dt(c.value)},[U("div",ph,[W(n)?(N(),Y("button",{key:0,class:"menu","aria-expanded":i.open,"aria-controls":"VPSidebarNav",onClick:f[0]||(f[0]=u=>d.$emit("open-menu"))},[f[1]||(f[1]=U("span",{class:"vpi-align-left menu-icon"},null,-1)),U("span",_h,Qe(W(e).sidebarMenuLabel||"Menu"),1)],8,mh)):Ce("",!0),Oe(fh,{headers:W(s),navHeight:a.value},null,8,["headers","navHeight"])])],2)):Ce("",!0)}}),vh=Ne(gh,[["__scopeId","data-v-9d8129cc"]]);function xh(){const i=Je(!1);function e(){i.value=!0,window.addEventListener("resize",s)}function t(){i.value=!1,window.removeEventListener("resize",s)}function n(){i.value?t():e()}function s(){window.outerWidth>=768&&t()}const r=vr();return Mn(()=>r.path,t),{isScreenOpen:i,openScreen:e,closeScreen:t,toggleScreen:n}}const Mh={},Sh={class:"VPSwitch",type:"button",role:"switch"},bh={class:"check"},yh={key:0,class:"icon"};function Eh(i,e){return N(),Y("button",Sh,[U("span",bh,[i.$slots.default?(N(),Y("span",yh,[J(i.$slots,"default",{},void 0,!0)])):Ce("",!0)])])}const Th=Ne(Mh,[["render",Eh],["__scopeId","data-v-7012e5dd"]]),Ah=we({__name:"VPSwitchAppearance",setup(i){const{isDark:e,theme:t}=rt(),n=xr("toggle-appearance",()=>{e.value=!e.value}),s=Je("");return xo(()=>{s.value=e.value?t.value.lightModeSwitchTitle||"Switch to light theme":t.value.darkModeSwitchTitle||"Switch to dark theme"}),(r,a)=>(N(),Be(Th,{title:s.value,class:"VPSwitchAppearance","aria-checked":W(e),onClick:W(n)},{default:se(()=>[...a[0]||(a[0]=[U("span",{class:"vpi-sun sun"},null,-1),U("span",{class:"vpi-moon moon"},null,-1)])]),_:1},8,["title","aria-checked","onClick"]))}}),Eo=Ne(Ah,[["__scopeId","data-v-fa1daf57"]]),wh={key:0,class:"VPNavBarAppearance"},Rh=we({__name:"VPNavBarAppearance",setup(i){const{site:e}=rt();return(t,n)=>W(e).appearance&&W(e).appearance!=="force-dark"&&W(e).appearance!=="force-auto"?(N(),Y("div",wh,[Oe(Eo)])):Ce("",!0)}}),Ch=Ne(Rh,[["__scopeId","data-v-123fcb2f"]]),To=Je();let lc=!1,Pr=0;function Ph(i){const e=Je(!1);if(Mr){!lc&&Lh(),Pr++;const t=Mn(To,n=>{n===i.el.value||i.el.value?.contains(n)?(e.value=!0,i.onFocus?.()):(e.value=!1,i.onBlur?.())});_r(()=>{t(),Pr--,Pr||Dh()})}return eu(e)}function Lh(){document.addEventListener("focusin",cc),lc=!0,To.value=document.activeElement}function Dh(){document.removeEventListener("focusin",cc)}function cc(){To.value=document.activeElement}const Ih={class:"VPMenuLink"},Uh=["innerHTML"],Nh=we({__name:"VPMenuLink",props:{item:{}},setup(i){const{page:e}=rt();return(t,n)=>(N(),Y("div",Ih,[Oe(Pn,{class:dt({active:W(Mi)(W(e).relativePath,i.item.activeMatch||i.item.link,!!i.item.activeMatch)}),href:i.item.link,target:i.item.target,rel:i.item.rel,"no-icon":i.item.noIcon},{default:se(()=>[U("span",{innerHTML:i.item.text},null,8,Uh)]),_:1},8,["class","href","target","rel","no-icon"])]))}}),Sr=Ne(Nh,[["__scopeId","data-v-65e4a6b1"]]),Fh={class:"VPMenuGroup"},Oh={key:0,class:"title"},Bh=we({__name:"VPMenuGroup",props:{text:{},items:{}},setup(i){return(e,t)=>(N(),Y("div",Fh,[i.text?(N(),Y("p",Oh,Qe(i.text),1)):Ce("",!0),(N(!0),Y(Et,null,Ht(i.items,n=>(N(),Y(Et,null,["link"in n?(N(),Be(Sr,{key:0,item:n},null,8,["item"])):Ce("",!0)],64))),256))]))}}),kh=Ne(Bh,[["__scopeId","data-v-2bec9359"]]),Vh={class:"VPMenu"},zh={key:0,class:"items"},Gh=we({__name:"VPMenu",props:{items:{}},setup(i){return(e,t)=>(N(),Y("div",Vh,[i.items?(N(),Y("div",zh,[(N(!0),Y(Et,null,Ht(i.items,n=>(N(),Y(Et,{key:JSON.stringify(n)},["link"in n?(N(),Be(Sr,{key:0,item:n},null,8,["item"])):"component"in n?(N(),Be(Cn(n.component),oi({key:1,ref_for:!0},n.props),null,16)):(N(),Be(kh,{key:2,text:n.text,items:n.items},null,8,["text","items"]))],64))),128))])):Ce("",!0),J(e.$slots,"default",{},void 0,!0)]))}}),Hh=Ne(Gh,[["__scopeId","data-v-39eca401"]]),Wh=["aria-expanded","aria-label"],$h={key:0,class:"text"},Xh=["innerHTML"],qh={key:1,class:"vpi-more-horizontal icon"},Yh={class:"menu"},Kh=we({__name:"VPFlyout",props:{icon:{},button:{},label:{},items:{}},setup(i){const e=Je(!1),t=Je();Ph({el:t,onBlur:n});function n(){e.value=!1}return(s,r)=>(N(),Y("div",{class:"VPFlyout",ref_key:"el",ref:t,onMouseenter:r[1]||(r[1]=a=>e.value=!0),onMouseleave:r[2]||(r[2]=a=>e.value=!1)},[U("button",{type:"button",class:"button","aria-haspopup":"true","aria-expanded":e.value,"aria-label":i.label,onClick:r[0]||(r[0]=a=>e.value=!e.value)},[i.button||i.icon?(N(),Y("span",$h,[i.icon?(N(),Y("span",{key:0,class:dt([i.icon,"option-icon"])},null,2)):Ce("",!0),i.button?(N(),Y("span",{key:1,innerHTML:i.button},null,8,Xh)):Ce("",!0),r[3]||(r[3]=U("span",{class:"vpi-chevron-down text-icon"},null,-1))])):(N(),Y("span",qh))],8,Wh),U("div",Yh,[Oe(Hh,{items:i.items},{default:se(()=>[J(s.$slots,"default",{},void 0,!0)]),_:3},8,["items"])])],544))}}),Ao=Ne(Kh,[["__scopeId","data-v-40e55da0"]]),Zh=["href","aria-label","innerHTML"],jh=we({__name:"VPSocialLink",props:{icon:{},link:{},ariaLabel:{}},setup(i){const e=i,t=Je();Nn(async()=>{await So();const s=t.value?.children[0];s instanceof HTMLElement&&s.className.startsWith("vpi-social-")&&(getComputedStyle(s).maskImage||getComputedStyle(s).webkitMaskImage)==="none"&&s.style.setProperty("--icon",`url('https://api.iconify.design/simple-icons/${e.icon}.svg')`)});const n=$e(()=>typeof e.icon=="object"?e.icon.svg:`<span class="vpi-social-${e.icon}"></span>`);return(s,r)=>(N(),Y("a",{ref_key:"el",ref:t,class:"VPSocialLink no-icon",href:i.link,"aria-label":i.ariaLabel??(typeof i.icon=="string"?i.icon:""),target:"_blank",rel:"noopener",innerHTML:n.value},null,8,Zh))}}),Jh=Ne(jh,[["__scopeId","data-v-fbf39218"]]),Qh={class:"VPSocialLinks"},ef=we({__name:"VPSocialLinks",props:{links:{}},setup(i){return(e,t)=>(N(),Y("div",Qh,[(N(!0),Y(Et,null,Ht(i.links,({link:n,icon:s,ariaLabel:r})=>(N(),Be(Jh,{key:n,icon:s,link:n,ariaLabel:r},null,8,["icon","link","ariaLabel"]))),128))]))}}),wo=Ne(ef,[["__scopeId","data-v-f2234a39"]]),tf={key:0,class:"group translations"},nf={class:"trans-title"},sf={key:1,class:"group"},rf={class:"item appearance"},af={class:"label"},of={class:"appearance-action"},lf={key:2,class:"group"},cf={class:"item social-links"},uf=we({__name:"VPNavBarExtra",setup(i){const{site:e,theme:t}=rt(),{localeLinks:n,currentLang:s}=_s({correspondingLink:!0}),r=$e(()=>n.value.length&&s.value.label||e.value.appearance||t.value.socialLinks);return(a,o)=>r.value?(N(),Be(Ao,{key:0,class:"VPNavBarExtra",label:"extra navigation"},{default:se(()=>[W(n).length&&W(s).label?(N(),Y("div",tf,[U("p",nf,Qe(W(s).label),1),(N(!0),Y(Et,null,Ht(W(n),l=>(N(),Be(Sr,{key:l.link,item:l},null,8,["item"]))),128))])):Ce("",!0),W(e).appearance&&W(e).appearance!=="force-dark"&&W(e).appearance!=="force-auto"?(N(),Y("div",sf,[U("div",rf,[U("p",af,Qe(W(t).darkModeSwitchLabel||"Appearance"),1),U("div",of,[Oe(Eo)])])])):Ce("",!0),W(t).socialLinks?(N(),Y("div",lf,[U("div",cf,[Oe(wo,{class:"social-links-list",links:W(t).socialLinks},null,8,["links"])])])):Ce("",!0)]),_:1})):Ce("",!0)}}),df=Ne(uf,[["__scopeId","data-v-0c845e5d"]]),hf=["aria-expanded"],ff=we({__name:"VPNavBarHamburger",props:{active:{type:Boolean}},emits:["click"],setup(i){return(e,t)=>(N(),Y("button",{type:"button",class:dt(["VPNavBarHamburger",{active:i.active}]),"aria-label":"mobile navigation","aria-expanded":i.active,"aria-controls":"VPNavScreen",onClick:t[0]||(t[0]=n=>e.$emit("click"))},[...t[1]||(t[1]=[U("span",{class:"container"},[U("span",{class:"top"}),U("span",{class:"middle"}),U("span",{class:"bottom"})],-1)])],10,hf))}}),pf=Ne(ff,[["__scopeId","data-v-670493dd"]]),mf=["innerHTML"],_f=we({__name:"VPNavBarMenuLink",props:{item:{}},setup(i){const{page:e}=rt();return(t,n)=>(N(),Be(Pn,{class:dt({VPNavBarMenuLink:!0,active:W(Mi)(W(e).relativePath,i.item.activeMatch||i.item.link,!!i.item.activeMatch)}),href:i.item.link,target:i.item.target,rel:i.item.rel,"no-icon":i.item.noIcon,tabindex:"0"},{default:se(()=>[U("span",{innerHTML:i.item.text},null,8,mf)]),_:1},8,["class","href","target","rel","no-icon"]))}}),gf=Ne(_f,[["__scopeId","data-v-8dbce4d0"]]),vf=we({__name:"VPNavBarMenuGroup",props:{item:{}},setup(i){const e=i,{page:t}=rt(),n=r=>"component"in r?!1:"link"in r?Mi(t.value.relativePath,r.link,!!e.item.activeMatch):r.items.some(n),s=$e(()=>n(e.item));return(r,a)=>(N(),Be(Ao,{class:dt({VPNavBarMenuGroup:!0,active:W(Mi)(W(t).relativePath,i.item.activeMatch,!!i.item.activeMatch)||s.value}),button:i.item.text,items:i.item.items},null,8,["class","button","items"]))}}),xf={key:0,"aria-labelledby":"main-nav-aria-label",class:"VPNavBarMenu"},Mf=we({__name:"VPNavBarMenu",setup(i){const{theme:e}=rt();return(t,n)=>W(e).nav?(N(),Y("nav",xf,[n[0]||(n[0]=U("span",{id:"main-nav-aria-label",class:"visually-hidden"}," Main Navigation ",-1)),(N(!0),Y(Et,null,Ht(W(e).nav,s=>(N(),Y(Et,{key:JSON.stringify(s)},["link"in s?(N(),Be(gf,{key:0,item:s},null,8,["item"])):"component"in s?(N(),Be(Cn(s.component),oi({key:1,ref_for:!0},s.props),null,16)):(N(),Be(vf,{key:2,item:s},null,8,["item"]))],64))),128))])):Ce("",!0)}}),Sf=Ne(Mf,[["__scopeId","data-v-5bacfe89"]]);function bf(i){const{localeIndex:e,theme:t}=rt();function n(s){const r=s.split("."),a=t.value.search?.options,o=a&&typeof a=="object",l=o&&a.locales?.[e.value]?.translations||null,c=o&&a.translations||null;let d=l,f=c,u=i;const m=r.pop();for(const g of r){let M=null;const p=u?.[g];p&&(M=u=p);const h=f?.[g];h&&(M=f=h);const S=d?.[g];S&&(M=d=S),p||(u=M),h||(f=M),S||(d=M)}return d?.[m]??f?.[m]??u?.[m]??""}return n}const yf=["aria-label"],Ef={class:"DocSearch-Button-Container"},Tf={class:"DocSearch-Button-Placeholder"},Xo=we({__name:"VPNavBarSearchButton",setup(i){const t=bf({button:{buttonText:"Search",buttonAriaLabel:"Search"}});return(n,s)=>(N(),Y("button",{type:"button",class:"DocSearch DocSearch-Button","aria-label":W(t)("button.buttonAriaLabel")},[U("span",Ef,[s[0]||(s[0]=U("span",{class:"vp-icon DocSearch-Search-Icon"},null,-1)),U("span",Tf,Qe(W(t)("button.buttonText")),1)]),s[1]||(s[1]=U("span",{class:"DocSearch-Button-Keys"},[U("kbd",{class:"DocSearch-Button-Key"}),U("kbd",{class:"DocSearch-Button-Key"},"K")],-1))],8,yf))}}),Af={class:"VPNavBarSearch"},wf={id:"local-search"},Rf={key:1,id:"docsearch"},Cf=we({__name:"VPNavBarSearch",setup(i){const e=tu(()=>tc(()=>import("./VPLocalSearchBox.-8Ud8jlg.js"),__vite__mapDeps([0,1]))),t=()=>null,{theme:n}=rt(),s=Je(!1),r=Je(!1);Nn(()=>{});function a(){s.value||(s.value=!0,setTimeout(o,16))}function o(){const f=new Event("keydown");f.key="k",f.metaKey=!0,window.dispatchEvent(f),setTimeout(()=>{document.querySelector(".DocSearch-Modal")||o()},16)}function l(f){const u=f.target,m=u.tagName;return u.isContentEditable||m==="INPUT"||m==="SELECT"||m==="TEXTAREA"}const c=Je(!1);pa("k",f=>{(f.ctrlKey||f.metaKey)&&(f.preventDefault(),c.value=!0)}),pa("/",f=>{l(f)||(f.preventDefault(),c.value=!0)});const d="local";return(f,u)=>(N(),Y("div",Af,[W(d)==="local"?(N(),Y(Et,{key:0},[c.value?(N(),Be(W(e),{key:0,onClose:u[0]||(u[0]=m=>c.value=!1)})):Ce("",!0),U("div",wf,[Oe(Xo,{onClick:u[1]||(u[1]=m=>c.value=!0)})])],64)):W(d)==="algolia"?(N(),Y(Et,{key:1},[s.value?(N(),Be(W(t),{key:0,algolia:W(n).search?.options??W(n).algolia,onVnodeBeforeMount:u[2]||(u[2]=m=>r.value=!0)},null,8,["algolia"])):Ce("",!0),r.value?Ce("",!0):(N(),Y("div",Rf,[Oe(Xo,{onClick:a})]))],64)):Ce("",!0)]))}}),Pf=we({__name:"VPNavBarSocialLinks",setup(i){const{theme:e}=rt();return(t,n)=>W(e).socialLinks?(N(),Be(wo,{key:0,class:"VPNavBarSocialLinks",links:W(e).socialLinks},null,8,["links"])):Ce("",!0)}}),Lf=Ne(Pf,[["__scopeId","data-v-08b35e6f"]]),Df=["href","rel","target"],If=["innerHTML"],Uf={key:2},Nf=we({__name:"VPNavBarTitle",setup(i){const{site:e,theme:t}=rt(),{hasSidebar:n}=Yn(),{currentLang:s}=_s(),r=$e(()=>typeof t.value.logoLink=="string"?t.value.logoLink:t.value.logoLink?.link),a=$e(()=>typeof t.value.logoLink=="string"?void 0:t.value.logoLink?.rel),o=$e(()=>typeof t.value.logoLink=="string"?void 0:t.value.logoLink?.target);return(l,c)=>(N(),Y("div",{class:dt(["VPNavBarTitle",{"has-sidebar":W(n)}])},[U("a",{class:"title",href:r.value??W(bo)(W(s).link),rel:a.value,target:o.value},[J(l.$slots,"nav-bar-title-before",{},void 0,!0),W(t).logo?(N(),Be(ar,{key:0,class:"logo",image:W(t).logo},null,8,["image"])):Ce("",!0),W(t).siteTitle?(N(),Y("span",{key:1,innerHTML:W(t).siteTitle},null,8,If)):W(t).siteTitle===void 0?(N(),Y("span",Uf,Qe(W(e).title),1)):Ce("",!0),J(l.$slots,"nav-bar-title-after",{},void 0,!0)],8,Df)],2))}}),Ff=Ne(Nf,[["__scopeId","data-v-5622a072"]]),Of={class:"items"},Bf={class:"title"},kf=we({__name:"VPNavBarTranslations",setup(i){const{theme:e}=rt(),{localeLinks:t,currentLang:n}=_s({correspondingLink:!0});return(s,r)=>W(t).length&&W(n).label?(N(),Be(Ao,{key:0,class:"VPNavBarTranslations",icon:"vpi-languages",label:W(e).langMenuLabel||"Change language"},{default:se(()=>[U("div",Of,[U("p",Bf,Qe(W(n).label),1),(N(!0),Y(Et,null,Ht(W(t),a=>(N(),Be(Sr,{key:a.link,item:a},null,8,["item"]))),128))])]),_:1},8,["label"])):Ce("",!0)}}),Vf=Ne(kf,[["__scopeId","data-v-dac637f3"]]),zf={class:"wrapper"},Gf={class:"container"},Hf={class:"title"},Wf={class:"content"},$f={class:"content-body"},Xf=we({__name:"VPNavBar",props:{isScreenOpen:{type:Boolean}},emits:["toggle-screen"],setup(i){const e=i,{y:t}=ec(),{hasSidebar:n}=Yn(),{frontmatter:s}=rt(),r=Je({});return xo(()=>{r.value={"has-sidebar":n.value,home:s.value.layout==="home",top:t.value===0,"screen-open":e.isScreenOpen}}),(a,o)=>(N(),Y("div",{class:dt(["VPNavBar",r.value])},[U("div",zf,[U("div",Gf,[U("div",Hf,[Oe(Ff,null,{"nav-bar-title-before":se(()=>[J(a.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":se(()=>[J(a.$slots,"nav-bar-title-after",{},void 0,!0)]),_:3})]),U("div",Wf,[U("div",$f,[J(a.$slots,"nav-bar-content-before",{},void 0,!0),Oe(Cf,{class:"search"}),Oe(Sf,{class:"menu"}),Oe(Vf,{class:"translations"}),Oe(Ch,{class:"appearance"}),Oe(Lf,{class:"social-links"}),Oe(df,{class:"extra"}),J(a.$slots,"nav-bar-content-after",{},void 0,!0),Oe(pf,{class:"hamburger",active:i.isScreenOpen,onClick:o[0]||(o[0]=l=>a.$emit("toggle-screen"))},null,8,["active"])])])])]),o[1]||(o[1]=U("div",{class:"divider"},[U("div",{class:"divider-line"})],-1))],2))}}),qf=Ne(Xf,[["__scopeId","data-v-bb7529ee"]]),Yf={key:0,class:"VPNavScreenAppearance"},Kf={class:"text"},Zf=we({__name:"VPNavScreenAppearance",setup(i){const{site:e,theme:t}=rt();return(n,s)=>W(e).appearance&&W(e).appearance!=="force-dark"&&W(e).appearance!=="force-auto"?(N(),Y("div",Yf,[U("p",Kf,Qe(W(t).darkModeSwitchLabel||"Appearance"),1),Oe(Eo)])):Ce("",!0)}}),jf=Ne(Zf,[["__scopeId","data-v-774971f8"]]),Jf=["innerHTML"],Qf=we({__name:"VPNavScreenMenuLink",props:{item:{}},setup(i){const e=xr("close-screen");return(t,n)=>(N(),Be(Pn,{class:"VPNavScreenMenuLink",href:i.item.link,target:i.item.target,rel:i.item.rel,"no-icon":i.item.noIcon,onClick:W(e)},{default:se(()=>[U("span",{innerHTML:i.item.text},null,8,Jf)]),_:1},8,["href","target","rel","no-icon","onClick"]))}}),ep=Ne(Qf,[["__scopeId","data-v-29871565"]]),tp=["innerHTML"],np=we({__name:"VPNavScreenMenuGroupLink",props:{item:{}},setup(i){const e=xr("close-screen");return(t,n)=>(N(),Be(Pn,{class:"VPNavScreenMenuGroupLink",href:i.item.link,target:i.item.target,rel:i.item.rel,"no-icon":i.item.noIcon,onClick:W(e)},{default:se(()=>[U("span",{innerHTML:i.item.text},null,8,tp)]),_:1},8,["href","target","rel","no-icon","onClick"]))}}),uc=Ne(np,[["__scopeId","data-v-581896e9"]]),ip={class:"VPNavScreenMenuGroupSection"},sp={key:0,class:"title"},rp=we({__name:"VPNavScreenMenuGroupSection",props:{text:{},items:{}},setup(i){return(e,t)=>(N(),Y("div",ip,[i.text?(N(),Y("p",sp,Qe(i.text),1)):Ce("",!0),(N(!0),Y(Et,null,Ht(i.items,n=>(N(),Be(uc,{key:n.text,item:n},null,8,["item"]))),128))]))}}),ap=Ne(rp,[["__scopeId","data-v-836cddb8"]]),op=["aria-controls","aria-expanded"],lp=["innerHTML"],cp=["id"],up={key:0,class:"item"},dp={key:1,class:"item"},hp={key:2,class:"group"},fp=we({__name:"VPNavScreenMenuGroup",props:{text:{},items:{}},setup(i){const e=i,t=Je(!1),n=$e(()=>`NavScreenGroup-${e.text.replace(" ","-").toLowerCase()}`);function s(){t.value=!t.value}return(r,a)=>(N(),Y("div",{class:dt(["VPNavScreenMenuGroup",{open:t.value}])},[U("button",{class:"button","aria-controls":n.value,"aria-expanded":t.value,onClick:s},[U("span",{class:"button-text",innerHTML:i.text},null,8,lp),a[0]||(a[0]=U("span",{class:"vpi-plus button-icon"},null,-1))],8,op),U("div",{id:n.value,class:"items"},[(N(!0),Y(Et,null,Ht(i.items,o=>(N(),Y(Et,{key:JSON.stringify(o)},["link"in o?(N(),Y("div",up,[Oe(uc,{item:o},null,8,["item"])])):"component"in o?(N(),Y("div",dp,[(N(),Be(Cn(o.component),oi({ref_for:!0},o.props,{"screen-menu":""}),null,16))])):(N(),Y("div",hp,[Oe(ap,{text:o.text,items:o.items},null,8,["text","items"])]))],64))),128))],8,cp)],2))}}),pp=Ne(fp,[["__scopeId","data-v-a8d3502a"]]),mp={key:0,class:"VPNavScreenMenu"},_p=we({__name:"VPNavScreenMenu",setup(i){const{theme:e}=rt();return(t,n)=>W(e).nav?(N(),Y("nav",mp,[(N(!0),Y(Et,null,Ht(W(e).nav,s=>(N(),Y(Et,{key:JSON.stringify(s)},["link"in s?(N(),Be(ep,{key:0,item:s},null,8,["item"])):"component"in s?(N(),Be(Cn(s.component),oi({key:1,ref_for:!0},s.props,{"screen-menu":""}),null,16)):(N(),Be(pp,{key:2,text:s.text||"",items:s.items},null,8,["text","items"]))],64))),128))])):Ce("",!0)}}),gp=we({__name:"VPNavScreenSocialLinks",setup(i){const{theme:e}=rt();return(t,n)=>W(e).socialLinks?(N(),Be(wo,{key:0,class:"VPNavScreenSocialLinks",links:W(e).socialLinks},null,8,["links"])):Ce("",!0)}}),vp={class:"list"},xp=we({__name:"VPNavScreenTranslations",setup(i){const{localeLinks:e,currentLang:t}=_s({correspondingLink:!0}),n=Je(!1);function s(){n.value=!n.value}return(r,a)=>W(e).length&&W(t).label?(N(),Y("div",{key:0,class:dt(["VPNavScreenTranslations",{open:n.value}])},[U("button",{class:"title",onClick:s},[a[0]||(a[0]=U("span",{class:"vpi-languages icon lang"},null,-1)),Rn(" "+Qe(W(t).label)+" ",1),a[1]||(a[1]=U("span",{class:"vpi-chevron-down icon chevron"},null,-1))]),U("ul",vp,[(N(!0),Y(Et,null,Ht(W(e),o=>(N(),Y("li",{key:o.link,class:"item"},[Oe(Pn,{class:"link",href:o.link},{default:se(()=>[Rn(Qe(o.text),1)]),_:2},1032,["href"])]))),128))])],2)):Ce("",!0)}}),Mp=Ne(xp,[["__scopeId","data-v-0d43316b"]]),Sp={class:"container"},bp=we({__name:"VPNavScreen",props:{open:{type:Boolean}},setup(i){const e=Je(null),t=nc(Mr?document.body:null);return(n,s)=>(N(),Be(_o,{name:"fade",onEnter:s[0]||(s[0]=r=>t.value=!0),onAfterLeave:s[1]||(s[1]=r=>t.value=!1)},{default:se(()=>[i.open?(N(),Y("div",{key:0,class:"VPNavScreen",ref_key:"screen",ref:e,id:"VPNavScreen"},[U("div",Sp,[J(n.$slots,"nav-screen-content-before",{},void 0,!0),Oe(_p,{class:"menu"}),Oe(Mp,{class:"translations"}),Oe(jf,{class:"appearance"}),Oe(gp,{class:"social-links"}),J(n.$slots,"nav-screen-content-after",{},void 0,!0)])],512)):Ce("",!0)]),_:3}))}}),yp=Ne(bp,[["__scopeId","data-v-34fa79a7"]]),Ep={key:0,class:"VPNav"},Tp=we({__name:"VPNav",setup(i){const{isScreenOpen:e,closeScreen:t,toggleScreen:n}=xh(),{frontmatter:s}=rt(),r=$e(()=>s.value.navbar!==!1);return ic("close-screen",t),mr(()=>{Mr&&document.documentElement.classList.toggle("hide-nav",!r.value)}),(a,o)=>r.value?(N(),Y("header",Ep,[Oe(qf,{"is-screen-open":W(e),onToggleScreen:W(n)},{"nav-bar-title-before":se(()=>[J(a.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":se(()=>[J(a.$slots,"nav-bar-title-after",{},void 0,!0)]),"nav-bar-content-before":se(()=>[J(a.$slots,"nav-bar-content-before",{},void 0,!0)]),"nav-bar-content-after":se(()=>[J(a.$slots,"nav-bar-content-after",{},void 0,!0)]),_:3},8,["is-screen-open","onToggleScreen"]),Oe(yp,{open:W(e)},{"nav-screen-content-before":se(()=>[J(a.$slots,"nav-screen-content-before",{},void 0,!0)]),"nav-screen-content-after":se(()=>[J(a.$slots,"nav-screen-content-after",{},void 0,!0)]),_:3},8,["open"])])):Ce("",!0)}}),Ap=Ne(Tp,[["__scopeId","data-v-a46e73f0"]]),wp=["role","tabindex"],Rp={key:1,class:"items"},Cp=we({__name:"VPSidebarItem",props:{item:{},depth:{}},setup(i){const e=i,{collapsed:t,collapsible:n,isLink:s,isActiveLink:r,hasActiveLink:a,hasChildren:o,toggle:l}=yu($e(()=>e.item)),c=$e(()=>o.value?"section":"div"),d=$e(()=>s.value?"a":"div"),f=$e(()=>o.value?e.depth+2===7?"p":`h${e.depth+2}`:"p"),u=$e(()=>s.value?void 0:"button"),m=$e(()=>[[`level-${e.depth}`],{collapsible:n.value},{collapsed:t.value},{"is-link":s.value},{"is-active":r.value},{"has-active":a.value}]);function g(p){"key"in p&&p.key!=="Enter"||!e.item.link&&l()}function M(){e.item.link&&l()}return(p,h)=>{const S=ui("VPSidebarItem",!0);return N(),Be(Cn(c.value),{class:dt(["VPSidebarItem",m.value])},{default:se(()=>[i.item.text?(N(),Y("div",oi({key:0,class:"item",role:u.value},nu(i.item.items?{click:g,keydown:g}:{},!0),{tabindex:i.item.items&&0}),[h[1]||(h[1]=U("div",{class:"indicator"},null,-1)),i.item.link?(N(),Be(Pn,{key:0,tag:d.value,class:"link",href:i.item.link,rel:i.item.rel,target:i.item.target},{default:se(()=>[(N(),Be(Cn(f.value),{class:"text",innerHTML:i.item.text},null,8,["innerHTML"]))]),_:1},8,["tag","href","rel","target"])):(N(),Be(Cn(f.value),{key:1,class:"text",innerHTML:i.item.text},null,8,["innerHTML"])),i.item.collapsed!=null&&i.item.items&&i.item.items.length?(N(),Y("div",{key:2,class:"caret",role:"button","aria-label":"toggle section",onClick:M,onKeydown:iu(M,["enter"]),tabindex:"0"},[...h[0]||(h[0]=[U("span",{class:"vpi-chevron-right caret-icon"},null,-1)])],32)):Ce("",!0)],16,wp)):Ce("",!0),i.item.items&&i.item.items.length?(N(),Y("div",Rp,[i.depth<5?(N(!0),Y(Et,{key:0},Ht(i.item.items,T=>(N(),Be(S,{key:T.text,item:T,depth:i.depth+1},null,8,["item","depth"]))),128)):Ce("",!0)])):Ce("",!0)]),_:1},8,["class"])}}}),Pp=Ne(Cp,[["__scopeId","data-v-2e0476bc"]]),Lp=we({__name:"VPSidebarGroup",props:{items:{}},setup(i){const e=Je(!0);let t=null;return Nn(()=>{t=setTimeout(()=>{t=null,e.value=!1},300)}),su(()=>{t!=null&&(clearTimeout(t),t=null)}),(n,s)=>(N(!0),Y(Et,null,Ht(i.items,r=>(N(),Y("div",{key:r.text,class:dt(["group",{"no-transition":e.value}])},[Oe(Pp,{item:r,depth:0},null,8,["item"])],2))),128))}}),Dp=Ne(Lp,[["__scopeId","data-v-ec086cd5"]]),Ip={class:"nav",id:"VPSidebarNav","aria-labelledby":"sidebar-aria-label",tabindex:"-1"},Up=we({__name:"VPSidebar",props:{open:{type:Boolean}},setup(i){const{sidebarGroups:e,hasSidebar:t}=Yn(),n=i,s=Je(null),r=nc(Mr?document.body:null);Mn([n,s],()=>{n.open?(r.value=!0,s.value?.focus()):r.value=!1},{immediate:!0,flush:"post"});const a=Je(0);return Mn(e,()=>{a.value+=1},{deep:!0}),(o,l)=>W(t)?(N(),Y("aside",{key:0,class:dt(["VPSidebar",{open:i.open}]),ref_key:"navEl",ref:s,onClick:l[0]||(l[0]=ma(()=>{},["stop"]))},[l[2]||(l[2]=U("div",{class:"curtain"},null,-1)),U("nav",Ip,[l[1]||(l[1]=U("span",{class:"visually-hidden",id:"sidebar-aria-label"}," Sidebar Navigation ",-1)),J(o.$slots,"sidebar-nav-before",{},void 0,!0),(N(),Be(Dp,{items:W(e),key:a.value},null,8,["items"])),J(o.$slots,"sidebar-nav-after",{},void 0,!0)])],2)):Ce("",!0)}}),Np=Ne(Up,[["__scopeId","data-v-12a40e3d"]]),Fp=we({__name:"VPSkipLink",setup(i){const{theme:e}=rt(),t=vr(),n=Je();Mn(()=>t.path,()=>n.value.focus());function s({target:r}){const a=document.getElementById(decodeURIComponent(r.hash).slice(1));if(a){const o=()=>{a.removeAttribute("tabindex"),a.removeEventListener("blur",o)};a.setAttribute("tabindex","-1"),a.addEventListener("blur",o),a.focus(),window.scrollTo(0,0)}}return(r,a)=>(N(),Y(Et,null,[U("span",{ref_key:"backToTop",ref:n,tabindex:"-1"},null,512),U("a",{href:"#VPContent",class:"VPSkipLink visually-hidden",onClick:s},Qe(W(e).skipToContentLabel||"Skip to content"),1)],64))}}),Op=Ne(Fp,[["__scopeId","data-v-17ad389b"]]),Bp=we({__name:"Layout",setup(i){const{isOpen:e,open:t,close:n}=Yn(),s=vr();Mn(()=>s.path,n),bu(e,n);const{frontmatter:r}=rt(),a=ru(),o=$e(()=>!!a["home-hero-image"]);return ic("hero-image-slot-exists",o),(l,c)=>{const d=ui("Content");return W(r).layout!==!1?(N(),Y("div",{key:0,class:dt(["Layout",W(r).pageClass])},[J(l.$slots,"layout-top",{},void 0,!0),Oe(Op),Oe(cu,{class:"backdrop",show:W(e),onClick:W(n)},null,8,["show","onClick"]),Oe(Ap,null,{"nav-bar-title-before":se(()=>[J(l.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":se(()=>[J(l.$slots,"nav-bar-title-after",{},void 0,!0)]),"nav-bar-content-before":se(()=>[J(l.$slots,"nav-bar-content-before",{},void 0,!0)]),"nav-bar-content-after":se(()=>[J(l.$slots,"nav-bar-content-after",{},void 0,!0)]),"nav-screen-content-before":se(()=>[J(l.$slots,"nav-screen-content-before",{},void 0,!0)]),"nav-screen-content-after":se(()=>[J(l.$slots,"nav-screen-content-after",{},void 0,!0)]),_:3}),Oe(vh,{open:W(e),onOpenMenu:W(t)},null,8,["open","onOpenMenu"]),Oe(Np,{open:W(e)},{"sidebar-nav-before":se(()=>[J(l.$slots,"sidebar-nav-before",{},void 0,!0)]),"sidebar-nav-after":se(()=>[J(l.$slots,"sidebar-nav-after",{},void 0,!0)]),_:3},8,["open"]),Oe(nh,null,{"page-top":se(()=>[J(l.$slots,"page-top",{},void 0,!0)]),"page-bottom":se(()=>[J(l.$slots,"page-bottom",{},void 0,!0)]),"not-found":se(()=>[J(l.$slots,"not-found",{},void 0,!0)]),"home-hero-before":se(()=>[J(l.$slots,"home-hero-before",{},void 0,!0)]),"home-hero-info-before":se(()=>[J(l.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":se(()=>[J(l.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":se(()=>[J(l.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":se(()=>[J(l.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":se(()=>[J(l.$slots,"home-hero-image",{},void 0,!0)]),"home-hero-after":se(()=>[J(l.$slots,"home-hero-after",{},void 0,!0)]),"home-features-before":se(()=>[J(l.$slots,"home-features-before",{},void 0,!0)]),"home-features-after":se(()=>[J(l.$slots,"home-features-after",{},void 0,!0)]),"doc-footer-before":se(()=>[J(l.$slots,"doc-footer-before",{},void 0,!0)]),"doc-before":se(()=>[J(l.$slots,"doc-before",{},void 0,!0)]),"doc-after":se(()=>[J(l.$slots,"doc-after",{},void 0,!0)]),"doc-top":se(()=>[J(l.$slots,"doc-top",{},void 0,!0)]),"doc-bottom":se(()=>[J(l.$slots,"doc-bottom",{},void 0,!0)]),"aside-top":se(()=>[J(l.$slots,"aside-top",{},void 0,!0)]),"aside-bottom":se(()=>[J(l.$slots,"aside-bottom",{},void 0,!0)]),"aside-outline-before":se(()=>[J(l.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":se(()=>[J(l.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":se(()=>[J(l.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":se(()=>[J(l.$slots,"aside-ads-after",{},void 0,!0)]),_:3}),Oe(oh),J(l.$slots,"layout-bottom",{},void 0,!0)],2)):(N(),Be(d,{key:1}))}}}),kp=Ne(Bp,[["__scopeId","data-v-c4daae71"]]),dc={Layout:kp,enhanceApp:({app:i})=>{i.component("Badge",au)}},Vp={class:"home-section docker-section"},zp={class:"section-container"},Gp={class:"docker-card"},Hp={class:"terminal-bar"},Wp={key:0,class:"copied-text"},$p={key:1,class:"copy-text"},qo=`# Pull the pre-built multi-arch images
docker pull ghcr.io/modelscript/api:latest
docker pull ghcr.io/modelscript/morsel:latest

# Launch backend simulation server & interactive web UI
docker compose up -d`,Xp=we({__name:"HomeDocker",setup(i){const e=Je(!1);async function t(){try{await navigator.clipboard.writeText(qo),e.value=!0,setTimeout(()=>{e.value=!1},2e3)}catch{}}return(n,s)=>(N(),Y("section",Vp,[U("div",zp,[s[1]||(s[1]=U("div",{class:"section-header"},[U("span",{class:"section-badge"},"Containerized Deployment"),U("h2",{class:"section-title"},"Run with Docker"),U("p",{class:"section-subtitle"}," Spin up the complete simulation API and Morsel environment locally with zero dependencies. ")],-1)),U("div",Gp,[U("div",Hp,[s[0]||(s[0]=sc('<div class="terminal-dots" data-v-217c687c><span class="dot red" data-v-217c687c></span><span class="dot yellow" data-v-217c687c></span><span class="dot green" data-v-217c687c></span></div><span class="terminal-label" data-v-217c687c>docker-compose</span>',2)),U("button",{type:"button",class:"copy-btn","aria-label":"Copy Docker command snippet",onClick:t},[e.value?(N(),Y("span",Wp,"✓ Copied")):(N(),Y("span",$p,"Copy"))])]),U("pre",{class:"terminal-code"},[U("code",null,Qe(qo))])])])]))}}),qp=Ne(Xp,[["__scopeId","data-v-217c687c"]]),Yp={class:"home-section packages-section"},Kp={class:"section-container"},Zp={class:"packages-grid"},jp={class:"package-top"},Jp={class:"package-name"},Qp={class:"package-tag"},em={class:"package-desc"},tm={class:"package-install-box"},nm={class:"install-cmd"},im=["aria-label","onClick"],sm={key:0,class:"copied"},rm={key:1},am={class:"package-actions"},om=["href"],lm=["href"],cm=we({__name:"HomePackages",setup(i){const e=[{name:"@modelscript/cli",description:"The unified msc command-line toolchain — flatten, simulate, optimize, lint, render, and execute the digital thread.",install:"npm install -g @modelscript/cli",docsLink:"/cli/overview",npmLink:"https://www.npmjs.com/package/@modelscript/cli",tag:"Toolchain"},{name:"@modelscript/modelica",description:"High-performance Modelica compiler — native WebAssembly GLR parser, CST indexer, and DAE flattener.",install:"npm install @modelscript/modelica",docsLink:"/languages/modelica",npmLink:"https://www.npmjs.com/package/@modelscript/modelica",tag:"Compiler"},{name:"@modelscript/dsl",description:"Polyglot modeling language runtime — AST combinators, GLR parser generator, and graph rewriting engines.",install:"npm install @modelscript/dsl",docsLink:"/architecture/overview",npmLink:"https://www.npmjs.com/package/@modelscript/dsl",tag:"Grammar & AST"},{name:"@modelscript/runtime",description:"Linear-memory WebAssembly DAE arena, Salsa incremental query engine, and computable digital thread coordinator.",install:"npm install @modelscript/runtime",docsLink:"/architecture/dae-arena",npmLink:"https://www.npmjs.com/package/@modelscript/runtime",tag:"Arena Engine"},{name:"@modelscript/simulate",description:"Numerical ODE/DAE integrators, SUNDIALS CVODE/IDA, WebGPU batched solver, and surrogate modeling.",install:"npm install @modelscript/simulate",docsLink:"/algorithms/solvers-ode-dae",npmLink:"https://www.npmjs.com/package/@modelscript/simulate",tag:"Numerics"},{name:"@modelscript/cad",description:"CAD & ECAD engine — CSG primitives, OpenCascade integration, STEP (ISO 10303), and Gerber support.",install:"npm install @modelscript/cad",docsLink:"/languages/step",npmLink:"https://www.npmjs.com/package/@modelscript/cad",tag:"CAD / CSG"}],t=Je(null);async function n(s,r){try{await navigator.clipboard.writeText(s),t.value=r,setTimeout(()=>{t.value===r&&(t.value=null)},2e3)}catch{}}return(s,r)=>(N(),Y("section",Yp,[U("div",Kp,[r[0]||(r[0]=U("div",{class:"section-header"},[U("span",{class:"section-badge"},"Modular Ecosystem"),U("h2",{class:"section-title"},"Published Packages"),U("p",{class:"section-subtitle"}," Engineered for composability. Modular building blocks powering the computable digital thread. ")],-1)),U("div",Zp,[(N(),Y(Et,null,Ht(e,a=>U("div",{key:a.name,class:"package-card"},[U("div",jp,[U("span",Jp,Qe(a.name),1),U("span",Qp,Qe(a.tag),1)]),U("p",em,Qe(a.description),1),U("div",tm,[U("span",nm,[U("code",null,Qe(a.install),1)]),U("button",{type:"button",class:"pkg-copy-btn","aria-label":"Copy install command for "+a.name,onClick:o=>n(a.install,a.name)},[t.value===a.name?(N(),Y("span",sm,"✓")):(N(),Y("span",rm,"Copy"))],8,im)]),U("div",am,[U("a",{href:a.docsLink,class:"pkg-link"},"Documentation →",8,om),U("a",{href:a.npmLink,target:"_blank",rel:"noopener noreferrer",class:"pkg-npm-link"},"npm",8,lm)])])),64))])])]))}}),um=Ne(cm,[["__scopeId","data-v-f4fe9839"]]),dm={class:"home-section quickstart-section"},hm={class:"section-container"},fm={class:"quickstart-timeline"},pm={class:"step-badge"},mm={class:"step-num"},_m={class:"step-card"},gm={class:"step-meta"},vm={class:"step-title"},xm={class:"step-desc"},Mm={class:"terminal-block"},Sm={class:"terminal-bar"},bm=["aria-label","onClick"],ym={key:0,class:"copied-text"},Em={key:1,class:"copy-text"},Tm={class:"terminal-code"},Am=we({__name:"HomeQuickStart",setup(i){const e=[{step:1,title:"Install the CLI",description:"Install the unified command-line toolchain globally via npm.",code:"npm install -g @modelscript/cli"},{step:2,title:"Flatten a Hierarchical Model",description:"Lower Modelica classes to Differential Algebraic Equations with arena-native speed.",code:"msc flatten Modelica.Electrical.Analog.Examples.CauerLowPassAnalog path/to/MSL"},{step:3,title:"Simulate ODE / DAE System",description:"Execute numerical simulations with automatic index reduction and BLT partitioning.",code:"msc simulate BouncingBall model.mo --stop-time 5"},{step:4,title:"Render Interactive SVG Diagram",description:"Generate crisp vector diagrams from Modelica visual annotations.",code:"msc render MyModel model.mo > diagram.svg"}],t=Je(null);async function n(s,r){try{await navigator.clipboard.writeText(s),t.value=r,setTimeout(()=>{t.value===r&&(t.value=null)},2e3)}catch{}}return(s,r)=>(N(),Y("section",dm,[U("div",hm,[r[2]||(r[2]=U("div",{class:"section-header"},[U("span",{class:"section-badge"},"Get Started Fast"),U("h2",{class:"section-title"},"Quick Start"),U("p",{class:"section-subtitle"},[Rn(" From installation to computable digital thread simulation and rendering in under two minutes with the unified "),U("code",null,"msc"),Rn(" CLI. ")])],-1)),U("div",fm,[(N(),Y(Et,null,Ht(e,(a,o)=>U("div",{key:a.step,class:"timeline-step"},[U("div",pm,[U("span",mm,Qe(a.step),1)]),U("div",_m,[U("div",gm,[U("h3",vm,Qe(a.title),1),U("p",xm,Qe(a.description),1)]),U("div",Mm,[U("div",Sm,[r[0]||(r[0]=sc('<div class="terminal-dots" data-v-df468c35><span class="dot red" data-v-df468c35></span><span class="dot yellow" data-v-df468c35></span><span class="dot green" data-v-df468c35></span></div><span class="terminal-label" data-v-df468c35>bash</span>',2)),U("button",{type:"button",class:"copy-btn","aria-label":"Copy command for step "+a.step,onClick:l=>n(a.code,o)},[t.value===o?(N(),Y("span",ym,"✓ Copied")):(N(),Y("span",Em,"Copy"))],8,bm)]),U("pre",Tm,[U("code",null,[r[1]||(r[1]=U("span",{class:"prompt"},"$ ",-1)),Rn(Qe(a.code),1)])])])])])),64))])])]))}}),wm=Ne(Am,[["__scopeId","data-v-df468c35"]]),Rm={class:"home-section vscode-section"},Cm={class:"section-container"},Pm={class:"vscode-grid"},Lm={class:"feat-icon"},Dm={class:"feat-content"},Im={class:"feat-title"},Um={class:"feat-desc"},Nm=we({__name:"HomeVsCode",setup(i){const e=[{icon:"🎨",title:"Syntax Highlighting",description:"Deep highlighting powered by WASM GLR parser tokens and TextMate grammar rules."},{icon:"⚡",title:"Diagnostics & Linting",description:"Sub-millisecond diagnostics with 15+ compiler lint rules and inline quick-fixes."},{icon:"📊",title:"Interactive Diagramming",description:"Visual schematic editor with automatic connector routing and SVG icon rendering."},{icon:"📈",title:"In-Editor Simulation",description:"Run numerical simulations and inspect trajectory plots without leaving VS Code."},{icon:"💡",title:"Hover & Navigation",description:"Go-to-definition, hover type inspection, and Salsa-backed semantic completion."},{icon:"📦",title:"Bundled MSL",description:"Pre-indexed Modelica Standard Library (MSL 4.0.0) ready out of the box."}];return(t,n)=>(N(),Y("section",Rm,[U("div",Cm,[n[0]||(n[0]=U("div",{class:"section-header"},[U("span",{class:"section-badge"},"Editor Tooling"),U("h2",{class:"section-title"},"VS Code Extension"),U("p",{class:"section-subtitle"}," Turn VS Code into a comprehensive physical modeling and simulation IDE. ")],-1)),U("div",Pm,[(N(),Y(Et,null,Ht(e,s=>U("div",{key:s.title,class:"vscode-feat-card"},[U("span",Lm,Qe(s.icon),1),U("div",Dm,[U("h3",Im,Qe(s.title),1),U("p",Um,Qe(s.description),1)])])),64))]),n[1]||(n[1]=U("div",{class:"vscode-actions"},[U("a",{href:"https://marketplace.visualstudio.com/items?itemName=modelscript.modelscript",target:"_blank",rel:"noopener noreferrer",class:"btn-primary"}," Install from Marketplace → "),U("a",{href:"https://open-vsx.org/extension/modelscript/modelscript",target:"_blank",rel:"noopener noreferrer",class:"btn-secondary"}," Open VSX Registry ")],-1))])]))}}),Fm=Ne(Nm,[["__scopeId","data-v-0e7f87ce"]]),Om=["innerHTML"],Bm={key:1,class:"mermaid-loading-placeholder"},km={key:2,class:"mermaid-error-fallback"},Vm={class:"mermaid-error-title"},zm=we({__name:"MermaidBlock",props:{code:{}},setup(i){const e=i,{isDark:t}=go(),n=Je(null),s=Je(""),r=Je(null),a=Je(!0);let o=0;async function l(){if(typeof window>"u")return;const c=++o;a.value=!0,r.value=null;try{const d=await tc(()=>import("./mermaid.core.CoQ9ZrcJ.js").then(p=>p.bq),__vite__mapDeps([2,1])),f=d.default||d,u=t.value;f.initialize({startOnLoad:!1,securityLevel:"loose",fontFamily:"var(--vp-font-family-base, system-ui, -apple-system, sans-serif)",theme:u?"dark":"default",themeVariables:u?{darkMode:!0,background:"#161b22",primaryColor:"#21262d",primaryTextColor:"#f0f6fc",primaryBorderColor:"#388bfd",lineColor:"#58a6ff",secondaryColor:"#1f242c",tertiaryColor:"#161b22",nodeBorder:"#388bfd",clusterBkg:"#0d1117",clusterBorder:"#30363d",defaultLinkColor:"#58a6ff",titleColor:"#f0f6fc",edgeLabelBackground:"#161b22"}:{darkMode:!1,background:"#f6f8fa",primaryColor:"#e6edfa",primaryTextColor:"#1f2328",primaryBorderColor:"#0969da",lineColor:"#0969da",secondaryColor:"#ffffff",tertiaryColor:"#f6f8fa",nodeBorder:"#0969da",clusterBkg:"#f6f8fa",clusterBorder:"#d0d7de",defaultLinkColor:"#0969da",titleColor:"#1f2328",edgeLabelBackground:"#ffffff"},flowchart:{htmlLabels:!0,curve:"basis",padding:16}});const m=decodeURIComponent(e.code),g="mermaid-"+Math.random().toString(36).substring(2,9)+"-"+Date.now(),{svg:M}=await f.render(g,m);c===o&&(s.value=M,a.value=!1)}catch(d){c===o&&(console.warn("Mermaid rendering warning:",d),r.value=d instanceof Error?d.message:String(d),a.value=!1)}}return Nn(()=>{l()}),Mn(t,()=>{So(()=>{l()})}),(c,d)=>(N(),Y("div",{class:"mermaid-diagram-card",ref_key:"containerRef",ref:n},[s.value?(N(),Y("div",{key:0,class:"mermaid-svg-container",innerHTML:s.value},null,8,Om)):a.value?(N(),Y("div",Bm,[...d[0]||(d[0]=[U("div",{class:"mermaid-spinner"},null,-1),U("span",null,"Rendering diagram...",-1)])])):r.value?(N(),Y("div",km,[U("div",Vm,"Diagram render error: "+Qe(r.value),1),U("pre",null,[U("code",null,Qe(decodeURIComponent(e.code)),1)])])):Ce("",!0)],512))}}),Gm=Ne(zm,[["__scopeId","data-v-81396e2f"]]),Hm=["src","title"],Wm=we({__name:"ModelScriptViewer",props:{code:{},dialect:{default:"modelica"},view:{default:"diagram"},anchor:{},height:{default:"480px"},title:{},isMultiFile:{type:Boolean,default:!1},artifactId:{}},setup(i){const e=i,t=$e(()=>{try{const s=JSON.stringify({v:1,lang:e.dialect,code:e.code.trim(),view:e.view,anchor:e.anchor?{elementId:e.anchor}:void 0,isMultiFile:e.isMultiFile,artifactId:e.artifactId});return btoa(unescape(encodeURI(s))).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}catch{return""}}),n=$e(()=>`/embed/playground#m=${t.value}`);return(s,r)=>(N(),Y("div",{class:"modelscript-embed-container",style:Mo({height:i.height})},[U("iframe",{src:n.value,width:"100%",height:"100%",frameborder:"0",allow:"clipboard-read; clipboard-write",title:i.title||"ModelScript Artifact Viewer"},null,8,Hm)],4))}}),$m=Ne(Wm,[["__scopeId","data-v-4d91b73a"]]);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ro="184",Xm=0,Yo=1,qm=2,Qs=1,Ym=2,ds=3,li=0,en=1,Gn=2,Wn=0,qi=1,xa=2,Ko=3,Zo=4,Km=5,_i=100,Zm=101,jm=102,Jm=103,Qm=104,e_=200,t_=201,n_=202,i_=203,Ma=204,Sa=205,s_=206,r_=207,a_=208,o_=209,l_=210,c_=211,u_=212,d_=213,h_=214,ba=0,ya=1,Ea=2,Ki=3,Ta=4,Aa=5,wa=6,Ra=7,hc=0,f_=1,p_=2,Ln=0,fc=1,pc=2,mc=3,Co=4,_c=5,gc=6,vc=7,xc=300,Si=301,Zi=302,Lr=303,Dr=304,br=306,Ca=1e3,Hn=1001,Pa=1002,$t=1003,m_=1004,ys=1005,Kt=1006,Ir=1007,vi=1008,cn=1009,Mc=1010,Sc=1011,fs=1012,Po=1013,In=1014,An=1015,Xn=1016,Lo=1017,Do=1018,ps=1020,bc=35902,yc=35899,Ec=1021,Tc=1022,vn=1023,qn=1026,xi=1027,Ac=1028,Io=1029,bi=1030,Uo=1031,No=1033,er=33776,tr=33777,nr=33778,ir=33779,La=35840,Da=35841,Ia=35842,Ua=35843,Na=36196,Fa=37492,Oa=37496,Ba=37488,ka=37489,or=37490,Va=37491,za=37808,Ga=37809,Ha=37810,Wa=37811,$a=37812,Xa=37813,qa=37814,Ya=37815,Ka=37816,Za=37817,ja=37818,Ja=37819,Qa=37820,eo=37821,to=36492,no=36494,io=36495,so=36283,ro=36284,lr=36285,ao=36286,__=3200,oo=0,g_=1,ri="",on="srgb",cr="srgb-linear",ur="linear",bt="srgb",Li=7680,jo=519,v_=512,x_=513,M_=514,Fo=515,S_=516,b_=517,Oo=518,y_=519,Jo=35044,Qo="300 es",wn=2e3,ms=2001;function E_(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function dr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function T_(){const i=dr("canvas");return i.style.display="block",i}const el={};function tl(...i){const e="THREE."+i.shift();console.log(e,...i)}function wc(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ge(...i){i=wc(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function mt(...i){i=wc(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function lo(...i){const e=i.join(" ");e in el||(el[e]=!0,Ge(...i))}function A_(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const w_={[ba]:ya,[Ea]:wa,[Ta]:Ra,[Ki]:Aa,[ya]:ba,[wa]:Ea,[Ra]:Ta,[Aa]:Ki};class yi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],sr=Math.PI/180,co=180/Math.PI;function gs(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(qt[i&255]+qt[i>>8&255]+qt[i>>16&255]+qt[i>>24&255]+"-"+qt[e&255]+qt[e>>8&255]+"-"+qt[e>>16&15|64]+qt[e>>24&255]+"-"+qt[t&63|128]+qt[t>>8&255]+"-"+qt[t>>16&255]+qt[t>>24&255]+qt[n&255]+qt[n>>8&255]+qt[n>>16&255]+qt[n>>24&255]).toLowerCase()}function ut(i,e,t){return Math.max(e,Math.min(t,i))}function R_(i,e){return(i%e+e)%e}function Ur(i,e,t){return(1-t)*i+t*e}function is(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Qt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class gt{static{gt.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ut(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Qi{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],d=n[s+2],f=n[s+3],u=r[a+0],m=r[a+1],g=r[a+2],M=r[a+3];if(f!==M||l!==u||c!==m||d!==g){let p=l*u+c*m+d*g+f*M;p<0&&(u=-u,m=-m,g=-g,M=-M,p=-p);let h=1-o;if(p<.9995){const S=Math.acos(p),T=Math.sin(S);h=Math.sin(h*S)/T,o=Math.sin(o*S)/T,l=l*h+u*o,c=c*h+m*o,d=d*h+g*o,f=f*h+M*o}else{l=l*h+u*o,c=c*h+m*o,d=d*h+g*o,f=f*h+M*o;const S=1/Math.sqrt(l*l+c*c+d*d+f*f);l*=S,c*=S,d*=S,f*=S}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],d=n[s+3],f=r[a],u=r[a+1],m=r[a+2],g=r[a+3];return e[t]=o*g+d*f+l*m-c*u,e[t+1]=l*g+d*u+c*f-o*m,e[t+2]=c*g+d*m+o*u-l*f,e[t+3]=d*g-o*f-l*u-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),d=o(s/2),f=o(r/2),u=l(n/2),m=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=u*d*f+c*m*g,this._y=c*m*f-u*d*g,this._z=c*d*g+u*m*f,this._w=c*d*f-u*m*g;break;case"YXZ":this._x=u*d*f+c*m*g,this._y=c*m*f-u*d*g,this._z=c*d*g-u*m*f,this._w=c*d*f+u*m*g;break;case"ZXY":this._x=u*d*f-c*m*g,this._y=c*m*f+u*d*g,this._z=c*d*g+u*m*f,this._w=c*d*f-u*m*g;break;case"ZYX":this._x=u*d*f-c*m*g,this._y=c*m*f+u*d*g,this._z=c*d*g-u*m*f,this._w=c*d*f+u*m*g;break;case"YZX":this._x=u*d*f+c*m*g,this._y=c*m*f+u*d*g,this._z=c*d*g-u*m*f,this._w=c*d*f-u*m*g;break;case"XZY":this._x=u*d*f-c*m*g,this._y=c*m*f-u*d*g,this._z=c*d*g+u*m*f,this._w=c*d*f+u*m*g;break;default:Ge("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],d=t[6],f=t[10],u=n+o+f;if(u>0){const m=.5/Math.sqrt(u+1);this._w=.25/m,this._x=(d-l)*m,this._y=(r-c)*m,this._z=(a-s)*m}else if(n>o&&n>f){const m=2*Math.sqrt(1+n-o-f);this._w=(d-l)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+c)/m}else if(o>f){const m=2*Math.sqrt(1+o-n-f);this._w=(r-c)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(l+d)/m}else{const m=2*Math.sqrt(1+f-n-o);this._w=(a-s)/m,this._x=(r+c)/m,this._y=(l+d)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ut(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,d=t._w;return this._x=n*d+a*o+s*c-r*l,this._y=s*d+a*l+r*o-n*c,this._z=r*d+a*c+n*l-s*o,this._w=a*d-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),d=Math.sin(c);l=Math.sin(l*c)/d,t=Math.sin(t*c)/d,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{static{F.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(nl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(nl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),d=2*(o*t-r*s),f=2*(r*n-a*t);return this.x=t+l*c+a*f-o*d,this.y=n+l*d+o*c-r*f,this.z=s+l*f+r*d-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this.z=ut(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this.z=ut(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Nr.copy(this).projectOnVector(e),this.sub(Nr)}reflect(e){return this.sub(Nr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ut(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Nr=new F,nl=new Qi;class je{static{je.prototype.isMatrix3=!0}constructor(e,t,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){const d=this.elements;return d[0]=e,d[1]=s,d[2]=o,d[3]=t,d[4]=r,d[5]=l,d[6]=n,d[7]=a,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],d=n[4],f=n[7],u=n[2],m=n[5],g=n[8],M=s[0],p=s[3],h=s[6],S=s[1],T=s[4],y=s[7],L=s[2],E=s[5],D=s[8];return r[0]=a*M+o*S+l*L,r[3]=a*p+o*T+l*E,r[6]=a*h+o*y+l*D,r[1]=c*M+d*S+f*L,r[4]=c*p+d*T+f*E,r[7]=c*h+d*y+f*D,r[2]=u*M+m*S+g*L,r[5]=u*p+m*T+g*E,r[8]=u*h+m*y+g*D,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8];return t*a*d-t*o*c-n*r*d+n*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],f=d*a-o*c,u=o*l-d*r,m=c*r-a*l,g=t*f+n*u+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/g;return e[0]=f*M,e[1]=(s*c-d*n)*M,e[2]=(o*n-s*a)*M,e[3]=u*M,e[4]=(d*t-s*l)*M,e[5]=(s*r-o*t)*M,e[6]=m*M,e[7]=(n*l-c*t)*M,e[8]=(a*t-n*r)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Fr.makeScale(e,t)),this}rotate(e){return this.premultiply(Fr.makeRotation(-e)),this}translate(e,t){return this.premultiply(Fr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Fr=new je,il=new je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),sl=new je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function C_(){const i={enabled:!0,workingColorSpace:cr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===bt&&(s.r=$n(s.r),s.g=$n(s.g),s.b=$n(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===bt&&(s.r=Yi(s.r),s.g=Yi(s.g),s.b=Yi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ri?ur:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return lo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return lo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[cr]:{primaries:e,whitePoint:n,transfer:ur,toXYZ:il,fromXYZ:sl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:on},outputColorSpaceConfig:{drawingBufferColorSpace:on}},[on]:{primaries:e,whitePoint:n,transfer:bt,toXYZ:il,fromXYZ:sl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:on}}}),i}const ct=C_();function $n(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Yi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Di;class P_{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Di===void 0&&(Di=dr("canvas")),Di.width=e.width,Di.height=e.height;const s=Di.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Di}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=dr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=$n(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor($n(t[n]/255)*255):t[n]=$n(t[n]);return{data:t,width:e.width,height:e.height}}else return Ge("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let L_=0;class Bo{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:L_++}),this.uuid=gs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Or(s[a].image)):r.push(Or(s[a]))}else r=Or(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Or(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?P_.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ge("Texture: Unable to serialize Texture."),{})}let D_=0;const Br=new F;class jt extends yi{constructor(e=jt.DEFAULT_IMAGE,t=jt.DEFAULT_MAPPING,n=Hn,s=Hn,r=Kt,a=vi,o=vn,l=cn,c=jt.DEFAULT_ANISOTROPY,d=ri){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:D_++}),this.uuid=gs(),this.name="",this.source=new Bo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new gt(0,0),this.repeat=new gt(1,1),this.center=new gt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Br).x}get height(){return this.source.getSize(Br).y}get depth(){return this.source.getSize(Br).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Ge(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Ge(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==xc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ca:e.x=e.x-Math.floor(e.x);break;case Hn:e.x=e.x<0?0:1;break;case Pa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ca:e.y=e.y-Math.floor(e.y);break;case Hn:e.y=e.y<0?0:1;break;case Pa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}jt.DEFAULT_IMAGE=null;jt.DEFAULT_MAPPING=xc;jt.DEFAULT_ANISOTROPY=1;class It{static{It.prototype.isVector4=!0}constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],d=l[4],f=l[8],u=l[1],m=l[5],g=l[9],M=l[2],p=l[6],h=l[10];if(Math.abs(d-u)<.01&&Math.abs(f-M)<.01&&Math.abs(g-p)<.01){if(Math.abs(d+u)<.1&&Math.abs(f+M)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(c+1)/2,y=(m+1)/2,L=(h+1)/2,E=(d+u)/4,D=(f+M)/4,x=(g+p)/4;return T>y&&T>L?T<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(T),s=E/n,r=D/n):y>L?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=E/s,r=x/s):L<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(L),n=D/r,s=x/r),this.set(n,s,r,t),this}let S=Math.sqrt((p-g)*(p-g)+(f-M)*(f-M)+(u-d)*(u-d));return Math.abs(S)<.001&&(S=1),this.x=(p-g)/S,this.y=(f-M)/S,this.z=(u-d)/S,this.w=Math.acos((c+m+h-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this.z=ut(this.z,e.z,t.z),this.w=ut(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this.z=ut(this.z,e,t),this.w=ut(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class I_ extends yi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Kt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new It(0,0,e,t),this.scissorTest=!1,this.viewport=new It(0,0,e,t),this.textures=[];const s={width:e,height:t,depth:n.depth},r=new jt(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Kt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Bo(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Dn extends I_{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Rc extends jt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=$t,this.minFilter=$t,this.wrapR=Hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class U_ extends jt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=$t,this.minFilter=$t,this.wrapR=Hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Lt{static{Lt.prototype.isMatrix4=!0}constructor(e,t,n,s,r,a,o,l,c,d,f,u,m,g,M,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,d,f,u,m,g,M,p)}set(e,t,n,s,r,a,o,l,c,d,f,u,m,g,M,p){const h=this.elements;return h[0]=e,h[4]=t,h[8]=n,h[12]=s,h[1]=r,h[5]=a,h[9]=o,h[13]=l,h[2]=c,h[6]=d,h[10]=f,h[14]=u,h[3]=m,h[7]=g,h[11]=M,h[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Lt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,n=e.elements,s=1/Ii.setFromMatrixColumn(e,0).length(),r=1/Ii.setFromMatrixColumn(e,1).length(),a=1/Ii.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),d=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const u=a*d,m=a*f,g=o*d,M=o*f;t[0]=l*d,t[4]=-l*f,t[8]=c,t[1]=m+g*c,t[5]=u-M*c,t[9]=-o*l,t[2]=M-u*c,t[6]=g+m*c,t[10]=a*l}else if(e.order==="YXZ"){const u=l*d,m=l*f,g=c*d,M=c*f;t[0]=u+M*o,t[4]=g*o-m,t[8]=a*c,t[1]=a*f,t[5]=a*d,t[9]=-o,t[2]=m*o-g,t[6]=M+u*o,t[10]=a*l}else if(e.order==="ZXY"){const u=l*d,m=l*f,g=c*d,M=c*f;t[0]=u-M*o,t[4]=-a*f,t[8]=g+m*o,t[1]=m+g*o,t[5]=a*d,t[9]=M-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const u=a*d,m=a*f,g=o*d,M=o*f;t[0]=l*d,t[4]=g*c-m,t[8]=u*c+M,t[1]=l*f,t[5]=M*c+u,t[9]=m*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const u=a*l,m=a*c,g=o*l,M=o*c;t[0]=l*d,t[4]=M-u*f,t[8]=g*f+m,t[1]=f,t[5]=a*d,t[9]=-o*d,t[2]=-c*d,t[6]=m*f+g,t[10]=u-M*f}else if(e.order==="XZY"){const u=a*l,m=a*c,g=o*l,M=o*c;t[0]=l*d,t[4]=-f,t[8]=c*d,t[1]=u*f+M,t[5]=a*d,t[9]=m*f-g,t[2]=g*f-m,t[6]=o*d,t[10]=M*f+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(N_,e,F_)}lookAt(e,t,n){const s=this.elements;return sn.subVectors(e,t),sn.lengthSq()===0&&(sn.z=1),sn.normalize(),Qn.crossVectors(n,sn),Qn.lengthSq()===0&&(Math.abs(n.z)===1?sn.x+=1e-4:sn.z+=1e-4,sn.normalize(),Qn.crossVectors(n,sn)),Qn.normalize(),Es.crossVectors(sn,Qn),s[0]=Qn.x,s[4]=Es.x,s[8]=sn.x,s[1]=Qn.y,s[5]=Es.y,s[9]=sn.y,s[2]=Qn.z,s[6]=Es.z,s[10]=sn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],d=n[1],f=n[5],u=n[9],m=n[13],g=n[2],M=n[6],p=n[10],h=n[14],S=n[3],T=n[7],y=n[11],L=n[15],E=s[0],D=s[4],x=s[8],A=s[12],O=s[1],R=s[5],k=s[9],q=s[13],X=s[2],B=s[6],G=s[10],$=s[14],ie=s[3],re=s[7],_e=s[11],Re=s[15];return r[0]=a*E+o*O+l*X+c*ie,r[4]=a*D+o*R+l*B+c*re,r[8]=a*x+o*k+l*G+c*_e,r[12]=a*A+o*q+l*$+c*Re,r[1]=d*E+f*O+u*X+m*ie,r[5]=d*D+f*R+u*B+m*re,r[9]=d*x+f*k+u*G+m*_e,r[13]=d*A+f*q+u*$+m*Re,r[2]=g*E+M*O+p*X+h*ie,r[6]=g*D+M*R+p*B+h*re,r[10]=g*x+M*k+p*G+h*_e,r[14]=g*A+M*q+p*$+h*Re,r[3]=S*E+T*O+y*X+L*ie,r[7]=S*D+T*R+y*B+L*re,r[11]=S*x+T*k+y*G+L*_e,r[15]=S*A+T*q+y*$+L*Re,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],d=e[2],f=e[6],u=e[10],m=e[14],g=e[3],M=e[7],p=e[11],h=e[15],S=l*m-c*u,T=o*m-c*f,y=o*u-l*f,L=a*m-c*d,E=a*u-l*d,D=a*f-o*d;return t*(M*S-p*T+h*y)-n*(g*S-p*L+h*E)+s*(g*T-M*L+h*D)-r*(g*y-M*E+p*D)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],f=e[9],u=e[10],m=e[11],g=e[12],M=e[13],p=e[14],h=e[15],S=t*o-n*a,T=t*l-s*a,y=t*c-r*a,L=n*l-s*o,E=n*c-r*o,D=s*c-r*l,x=d*M-f*g,A=d*p-u*g,O=d*h-m*g,R=f*p-u*M,k=f*h-m*M,q=u*h-m*p,X=S*q-T*k+y*R+L*O-E*A+D*x;if(X===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/X;return e[0]=(o*q-l*k+c*R)*B,e[1]=(s*k-n*q-r*R)*B,e[2]=(M*D-p*E+h*L)*B,e[3]=(u*E-f*D-m*L)*B,e[4]=(l*O-a*q-c*A)*B,e[5]=(t*q-s*O+r*A)*B,e[6]=(p*y-g*D-h*T)*B,e[7]=(d*D-u*y+m*T)*B,e[8]=(a*k-o*O+c*x)*B,e[9]=(n*O-t*k-r*x)*B,e[10]=(g*E-M*y+h*S)*B,e[11]=(f*y-d*E-m*S)*B,e[12]=(o*A-a*R-l*x)*B,e[13]=(t*R-n*A+s*x)*B,e[14]=(M*T-g*L-p*S)*B,e[15]=(d*L-f*T+u*S)*B,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,d=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,d*o+n,d*l-s*a,0,c*l-s*o,d*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,d=a+a,f=o+o,u=r*c,m=r*d,g=r*f,M=a*d,p=a*f,h=o*f,S=l*c,T=l*d,y=l*f,L=n.x,E=n.y,D=n.z;return s[0]=(1-(M+h))*L,s[1]=(m+y)*L,s[2]=(g-T)*L,s[3]=0,s[4]=(m-y)*E,s[5]=(1-(u+h))*E,s[6]=(p+S)*E,s[7]=0,s[8]=(g+T)*D,s[9]=(p-S)*D,s[10]=(1-(u+M))*D,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinant();if(r===0)return n.set(1,1,1),t.identity(),this;let a=Ii.set(s[0],s[1],s[2]).length();const o=Ii.set(s[4],s[5],s[6]).length(),l=Ii.set(s[8],s[9],s[10]).length();r<0&&(a=-a),pn.copy(this);const c=1/a,d=1/o,f=1/l;return pn.elements[0]*=c,pn.elements[1]*=c,pn.elements[2]*=c,pn.elements[4]*=d,pn.elements[5]*=d,pn.elements[6]*=d,pn.elements[8]*=f,pn.elements[9]*=f,pn.elements[10]*=f,t.setFromRotationMatrix(pn),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,s,r,a,o=wn,l=!1){const c=this.elements,d=2*r/(t-e),f=2*r/(n-s),u=(t+e)/(t-e),m=(n+s)/(n-s);let g,M;if(l)g=r/(a-r),M=a*r/(a-r);else if(o===wn)g=-(a+r)/(a-r),M=-2*a*r/(a-r);else if(o===ms)g=-a/(a-r),M=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=f,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=wn,l=!1){const c=this.elements,d=2/(t-e),f=2/(n-s),u=-(t+e)/(t-e),m=-(n+s)/(n-s);let g,M;if(l)g=1/(a-r),M=a/(a-r);else if(o===wn)g=-2/(a-r),M=-(a+r)/(a-r);else if(o===ms)g=-1/(a-r),M=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=f,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=g,c[14]=M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ii=new F,pn=new Lt,N_=new F(0,0,0),F_=new F(1,1,1),Qn=new F,Es=new F,sn=new F,rl=new Lt,al=new Qi;class ci{constructor(e=0,t=0,n=0,s=ci.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],d=s[9],f=s[2],u=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(ut(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ut(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(ut(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ut(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ut(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-ut(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-d,m),this._y=0);break;default:Ge("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return rl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(rl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return al.setFromEuler(this),this.setFromQuaternion(al,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ci.DEFAULT_ORDER="XYZ";class Cc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let O_=0;const ol=new F,Ui=new Qi,Fn=new Lt,Ts=new F,ss=new F,B_=new F,k_=new Qi,ll=new F(1,0,0),cl=new F(0,1,0),ul=new F(0,0,1),dl={type:"added"},V_={type:"removed"},Ni={type:"childadded",child:null},kr={type:"childremoved",child:null};class Gt extends yi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:O_++}),this.uuid=gs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Gt.DEFAULT_UP.clone();const e=new F,t=new ci,n=new Qi,s=new F(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Lt},normalMatrix:{value:new je}}),this.matrix=new Lt,this.matrixWorld=new Lt,this.matrixAutoUpdate=Gt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Cc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ui.setFromAxisAngle(e,t),this.quaternion.multiply(Ui),this}rotateOnWorldAxis(e,t){return Ui.setFromAxisAngle(e,t),this.quaternion.premultiply(Ui),this}rotateX(e){return this.rotateOnAxis(ll,e)}rotateY(e){return this.rotateOnAxis(cl,e)}rotateZ(e){return this.rotateOnAxis(ul,e)}translateOnAxis(e,t){return ol.copy(e).applyQuaternion(this.quaternion),this.position.add(ol.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ll,e)}translateY(e){return this.translateOnAxis(cl,e)}translateZ(e){return this.translateOnAxis(ul,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Fn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ts.copy(e):Ts.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),ss.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fn.lookAt(ss,Ts,this.up):Fn.lookAt(Ts,ss,this.up),this.quaternion.setFromRotationMatrix(Fn),s&&(Fn.extractRotation(s.matrixWorld),Ui.setFromRotationMatrix(Fn),this.quaternion.premultiply(Ui.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(mt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(dl),Ni.child=e,this.dispatchEvent(Ni),Ni.child=null):mt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(V_),kr.child=e,this.dispatchEvent(kr),kr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Fn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Fn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Fn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(dl),Ni.child=e,this.dispatchEvent(Ni),Ni.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ss,e,B_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ss,k_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),d=a(e.images),f=a(e.shapes),u=a(e.skeletons),m=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),d.length>0&&(n.images=d),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const l=[];for(const c in o){const d=o[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}Gt.DEFAULT_UP=new F(0,1,0);Gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class gn extends Gt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const z_={type:"move"};class Vr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new gn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new gn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new gn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const M of e.hand.values()){const p=t.getJointPose(M,n),h=this._getHandJoint(c,M);p!==null&&(h.matrix.fromArray(p.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=p.radius),h.visible=p!==null}const d=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=d.position.distanceTo(f.position),m=.02,g=.005;c.inputState.pinching&&u>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(z_)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new gn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Pc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ei={h:0,s:0,l:0},As={h:0,s:0,l:0};function zr(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class _t{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=on){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ct.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=ct.workingColorSpace){return this.r=e,this.g=t,this.b=n,ct.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=ct.workingColorSpace){if(e=R_(e,1),t=ut(t,0,1),n=ut(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=zr(a,r,e+1/3),this.g=zr(a,r,e),this.b=zr(a,r,e-1/3)}return ct.colorSpaceToWorking(this,s),this}setStyle(e,t=on){function n(r){r!==void 0&&parseFloat(r)<1&&Ge("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ge("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Ge("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=on){const n=Pc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ge("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=$n(e.r),this.g=$n(e.g),this.b=$n(e.b),this}copyLinearToSRGB(e){return this.r=Yi(e.r),this.g=Yi(e.g),this.b=Yi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=on){return ct.workingToColorSpace(Yt.copy(this),e),Math.round(ut(Yt.r*255,0,255))*65536+Math.round(ut(Yt.g*255,0,255))*256+Math.round(ut(Yt.b*255,0,255))}getHexString(e=on){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ct.workingColorSpace){ct.workingToColorSpace(Yt.copy(this),t);const n=Yt.r,s=Yt.g,r=Yt.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const d=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=d<=.5?f/(a+o):f/(2-a-o),a){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=ct.workingColorSpace){return ct.workingToColorSpace(Yt.copy(this),t),e.r=Yt.r,e.g=Yt.g,e.b=Yt.b,e}getStyle(e=on){ct.workingToColorSpace(Yt.copy(this),e);const t=Yt.r,n=Yt.g,s=Yt.b;return e!==on?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(ei),this.setHSL(ei.h+e,ei.s+t,ei.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ei),e.getHSL(As);const n=Ur(ei.h,As.h,t),s=Ur(ei.s,As.s,t),r=Ur(ei.l,As.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Yt=new _t;_t.NAMES=Pc;class G_ extends Gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ci,this.environmentIntensity=1,this.environmentRotation=new ci,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const mn=new F,On=new F,Gr=new F,Bn=new F,Fi=new F,Oi=new F,hl=new F,Hr=new F,Wr=new F,$r=new F,Xr=new It,qr=new It,Yr=new It;class hn{constructor(e=new F,t=new F,n=new F){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),mn.subVectors(e,t),s.cross(mn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){mn.subVectors(s,t),On.subVectors(n,t),Gr.subVectors(e,t);const a=mn.dot(mn),o=mn.dot(On),l=mn.dot(Gr),c=On.dot(On),d=On.dot(Gr),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;const u=1/f,m=(c*l-o*d)*u,g=(a*d-o*l)*u;return r.set(1-m-g,g,m)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Bn)===null?!1:Bn.x>=0&&Bn.y>=0&&Bn.x+Bn.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,Bn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Bn.x),l.addScaledVector(a,Bn.y),l.addScaledVector(o,Bn.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return Xr.setScalar(0),qr.setScalar(0),Yr.setScalar(0),Xr.fromBufferAttribute(e,t),qr.fromBufferAttribute(e,n),Yr.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Xr,r.x),a.addScaledVector(qr,r.y),a.addScaledVector(Yr,r.z),a}static isFrontFacing(e,t,n,s){return mn.subVectors(n,t),On.subVectors(e,t),mn.cross(On).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return mn.subVectors(this.c,this.b),On.subVectors(this.a,this.b),mn.cross(On).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return hn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return hn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return hn.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return hn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return hn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;Fi.subVectors(s,n),Oi.subVectors(r,n),Hr.subVectors(e,n);const l=Fi.dot(Hr),c=Oi.dot(Hr);if(l<=0&&c<=0)return t.copy(n);Wr.subVectors(e,s);const d=Fi.dot(Wr),f=Oi.dot(Wr);if(d>=0&&f<=d)return t.copy(s);const u=l*f-d*c;if(u<=0&&l>=0&&d<=0)return a=l/(l-d),t.copy(n).addScaledVector(Fi,a);$r.subVectors(e,r);const m=Fi.dot($r),g=Oi.dot($r);if(g>=0&&m<=g)return t.copy(r);const M=m*c-l*g;if(M<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(Oi,o);const p=d*g-m*f;if(p<=0&&f-d>=0&&m-g>=0)return hl.subVectors(r,s),o=(f-d)/(f-d+(m-g)),t.copy(s).addScaledVector(hl,o);const h=1/(p+M+u);return a=M*h,o=u*h,t.copy(n).addScaledVector(Fi,a).addScaledVector(Oi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class vs{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(_n.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(_n.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=_n.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,_n):_n.fromBufferAttribute(r,a),_n.applyMatrix4(e.matrixWorld),this.expandByPoint(_n);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ws.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ws.copy(n.boundingBox)),ws.applyMatrix4(e.matrixWorld),this.union(ws)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,_n),_n.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(rs),Rs.subVectors(this.max,rs),Bi.subVectors(e.a,rs),ki.subVectors(e.b,rs),Vi.subVectors(e.c,rs),ti.subVectors(ki,Bi),ni.subVectors(Vi,ki),hi.subVectors(Bi,Vi);let t=[0,-ti.z,ti.y,0,-ni.z,ni.y,0,-hi.z,hi.y,ti.z,0,-ti.x,ni.z,0,-ni.x,hi.z,0,-hi.x,-ti.y,ti.x,0,-ni.y,ni.x,0,-hi.y,hi.x,0];return!Kr(t,Bi,ki,Vi,Rs)||(t=[1,0,0,0,1,0,0,0,1],!Kr(t,Bi,ki,Vi,Rs))?!1:(Cs.crossVectors(ti,ni),t=[Cs.x,Cs.y,Cs.z],Kr(t,Bi,ki,Vi,Rs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,_n).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(_n).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(kn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const kn=[new F,new F,new F,new F,new F,new F,new F,new F],_n=new F,ws=new vs,Bi=new F,ki=new F,Vi=new F,ti=new F,ni=new F,hi=new F,rs=new F,Rs=new F,Cs=new F,fi=new F;function Kr(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){fi.fromArray(i,r);const o=s.x*Math.abs(fi.x)+s.y*Math.abs(fi.y)+s.z*Math.abs(fi.z),l=e.dot(fi),c=t.dot(fi),d=n.dot(fi);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}const Ot=new F,Ps=new gt;let H_=0;class xn extends yi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:H_++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Jo,this.updateRanges=[],this.gpuType=An,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ps.fromBufferAttribute(this,t),Ps.applyMatrix3(e),this.setXY(t,Ps.x,Ps.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix3(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix4(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyNormalMatrix(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.transformDirection(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=is(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Qt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=is(t,this.array)),t}setX(e,t){return this.normalized&&(t=Qt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=is(t,this.array)),t}setY(e,t){return this.normalized&&(t=Qt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=is(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Qt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=is(t,this.array)),t}setW(e,t){return this.normalized&&(t=Qt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Qt(t,this.array),n=Qt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Qt(t,this.array),n=Qt(n,this.array),s=Qt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Qt(t,this.array),n=Qt(n,this.array),s=Qt(s,this.array),r=Qt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Jo&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class Lc extends xn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Dc extends xn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ut extends xn{constructor(e,t,n){super(new Float32Array(e),t,n)}}const W_=new vs,as=new F,Zr=new F;class xs{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):W_.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;as.subVectors(e,this.center);const t=as.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(as,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Zr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(as.copy(e.center).add(Zr)),this.expandByPoint(as.copy(e.center).sub(Zr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let $_=0;const dn=new Lt,jr=new Gt,zi=new F,rn=new vs,os=new vs,zt=new F;class Bt extends yi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$_++}),this.uuid=gs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(E_(e)?Dc:Lc)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new je().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return dn.makeRotationFromQuaternion(e),this.applyMatrix4(dn),this}rotateX(e){return dn.makeRotationX(e),this.applyMatrix4(dn),this}rotateY(e){return dn.makeRotationY(e),this.applyMatrix4(dn),this}rotateZ(e){return dn.makeRotationZ(e),this.applyMatrix4(dn),this}translate(e,t,n){return dn.makeTranslation(e,t,n),this.applyMatrix4(dn),this}scale(e,t,n){return dn.makeScale(e,t,n),this.applyMatrix4(dn),this}lookAt(e){return jr.lookAt(e),jr.updateMatrix(),this.applyMatrix4(jr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zi).negate(),this.translate(zi.x,zi.y,zi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ut(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ge("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){mt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];rn.setFromBufferAttribute(r),this.morphTargetsRelative?(zt.addVectors(this.boundingBox.min,rn.min),this.boundingBox.expandByPoint(zt),zt.addVectors(this.boundingBox.max,rn.max),this.boundingBox.expandByPoint(zt)):(this.boundingBox.expandByPoint(rn.min),this.boundingBox.expandByPoint(rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&mt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){mt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){const n=this.boundingSphere.center;if(rn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];os.setFromBufferAttribute(o),this.morphTargetsRelative?(zt.addVectors(rn.min,os.min),rn.expandByPoint(zt),zt.addVectors(rn.max,os.max),rn.expandByPoint(zt)):(rn.expandByPoint(os.min),rn.expandByPoint(os.max))}rn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)zt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(zt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)zt.fromBufferAttribute(o,c),l&&(zi.fromBufferAttribute(e,c),zt.add(zi)),s=Math.max(s,n.distanceToSquared(zt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&mt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){mt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new xn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let x=0;x<n.count;x++)o[x]=new F,l[x]=new F;const c=new F,d=new F,f=new F,u=new gt,m=new gt,g=new gt,M=new F,p=new F;function h(x,A,O){c.fromBufferAttribute(n,x),d.fromBufferAttribute(n,A),f.fromBufferAttribute(n,O),u.fromBufferAttribute(r,x),m.fromBufferAttribute(r,A),g.fromBufferAttribute(r,O),d.sub(c),f.sub(c),m.sub(u),g.sub(u);const R=1/(m.x*g.y-g.x*m.y);isFinite(R)&&(M.copy(d).multiplyScalar(g.y).addScaledVector(f,-m.y).multiplyScalar(R),p.copy(f).multiplyScalar(m.x).addScaledVector(d,-g.x).multiplyScalar(R),o[x].add(M),o[A].add(M),o[O].add(M),l[x].add(p),l[A].add(p),l[O].add(p))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let x=0,A=S.length;x<A;++x){const O=S[x],R=O.start,k=O.count;for(let q=R,X=R+k;q<X;q+=3)h(e.getX(q+0),e.getX(q+1),e.getX(q+2))}const T=new F,y=new F,L=new F,E=new F;function D(x){L.fromBufferAttribute(s,x),E.copy(L);const A=o[x];T.copy(A),T.sub(L.multiplyScalar(L.dot(A))).normalize(),y.crossVectors(E,A);const R=y.dot(l[x])<0?-1:1;a.setXYZW(x,T.x,T.y,T.z,R)}for(let x=0,A=S.length;x<A;++x){const O=S[x],R=O.start,k=O.count;for(let q=R,X=R+k;q<X;q+=3)D(e.getX(q+0)),D(e.getX(q+1)),D(e.getX(q+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new xn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,m=n.count;u<m;u++)n.setXYZ(u,0,0,0);const s=new F,r=new F,a=new F,o=new F,l=new F,c=new F,d=new F,f=new F;if(e)for(let u=0,m=e.count;u<m;u+=3){const g=e.getX(u+0),M=e.getX(u+1),p=e.getX(u+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,M),a.fromBufferAttribute(t,p),d.subVectors(a,r),f.subVectors(s,r),d.cross(f),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,M),c.fromBufferAttribute(n,p),o.add(d),l.add(d),c.add(d),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(M,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let u=0,m=t.count;u<m;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),d.subVectors(a,r),f.subVectors(s,r),d.cross(f),n.setXYZ(u+0,d.x,d.y,d.z),n.setXYZ(u+1,d.x,d.y,d.z),n.setXYZ(u+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)zt.fromBufferAttribute(e,t),zt.normalize(),e.setXYZ(t,zt.x,zt.y,zt.z)}toNonIndexed(){function e(o,l){const c=o.array,d=o.itemSize,f=o.normalized,u=new c.constructor(l.length*d);let m=0,g=0;for(let M=0,p=l.length;M<p;M++){o.isInterleavedBufferAttribute?m=l[M]*o.data.stride+o.offset:m=l[M]*d;for(let h=0;h<d;h++)u[g++]=c[m++]}return new xn(u,d,f)}if(this.index===null)return Ge("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Bt,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let d=0,f=c.length;d<f;d++){const u=c[d],m=e(u,n);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let f=0,u=c.length;f<u;f++){const m=c[f];d.push(m.toJSON(e.data))}d.length>0&&(s[l]=d,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const c in s){const d=s[c];this.setAttribute(c,d.clone(t))}const r=e.morphAttributes;for(const c in r){const d=[],f=r[c];for(let u=0,m=f.length;u<m;u++)d.push(f[u].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,d=a.length;c<d;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let X_=0;class Ei extends yi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:X_++}),this.uuid=gs(),this.name="",this.type="Material",this.blending=qi,this.side=li,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ma,this.blendDst=Sa,this.blendEquation=_i,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new _t(0,0,0),this.blendAlpha=0,this.depthFunc=Ki,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=jo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Li,this.stencilZFail=Li,this.stencilZPass=Li,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Ge(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Ge(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==qi&&(n.blending=this.blending),this.side!==li&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ma&&(n.blendSrc=this.blendSrc),this.blendDst!==Sa&&(n.blendDst=this.blendDst),this.blendEquation!==_i&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ki&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==jo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Li&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Li&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Li&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Vn=new F,Jr=new F,Ls=new F,ii=new F,Qr=new F,Ds=new F,ea=new F;class ko{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Vn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Vn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Vn.copy(this.origin).addScaledVector(this.direction,t),Vn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Jr.copy(e).add(t).multiplyScalar(.5),Ls.copy(t).sub(e).normalize(),ii.copy(this.origin).sub(Jr);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Ls),o=ii.dot(this.direction),l=-ii.dot(Ls),c=ii.lengthSq(),d=Math.abs(1-a*a);let f,u,m,g;if(d>0)if(f=a*l-o,u=a*o-l,g=r*d,f>=0)if(u>=-g)if(u<=g){const M=1/d;f*=M,u*=M,m=f*(f+a*u+2*o)+u*(a*f+u+2*l)+c}else u=r,f=Math.max(0,-(a*u+o)),m=-f*f+u*(u+2*l)+c;else u=-r,f=Math.max(0,-(a*u+o)),m=-f*f+u*(u+2*l)+c;else u<=-g?(f=Math.max(0,-(-a*r+o)),u=f>0?-r:Math.min(Math.max(-r,-l),r),m=-f*f+u*(u+2*l)+c):u<=g?(f=0,u=Math.min(Math.max(-r,-l),r),m=u*(u+2*l)+c):(f=Math.max(0,-(a*r+o)),u=f>0?r:Math.min(Math.max(-r,-l),r),m=-f*f+u*(u+2*l)+c);else u=a>0?-r:r,f=Math.max(0,-(a*u+o)),m=-f*f+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Jr).addScaledVector(Ls,u),m}intersectSphere(e,t){Vn.subVectors(e.center,this.origin);const n=Vn.dot(this.direction),s=Vn.dot(Vn)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l;const c=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),d>=0?(r=(e.min.y-u.y)*d,a=(e.max.y-u.y)*d):(r=(e.max.y-u.y)*d,a=(e.min.y-u.y)*d),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(e.min.z-u.z)*f,l=(e.max.z-u.z)*f):(o=(e.max.z-u.z)*f,l=(e.min.z-u.z)*f),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Vn)!==null}intersectTriangle(e,t,n,s,r){Qr.subVectors(t,e),Ds.subVectors(n,e),ea.crossVectors(Qr,Ds);let a=this.direction.dot(ea),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ii.subVectors(this.origin,e);const l=o*this.direction.dot(Ds.crossVectors(ii,Ds));if(l<0)return null;const c=o*this.direction.dot(Qr.cross(ii));if(c<0||l+c>a)return null;const d=-o*ii.dot(ea);return d<0?null:this.at(d/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Vo extends Ei{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new _t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ci,this.combine=hc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const fl=new Lt,pi=new ko,Is=new xs,pl=new F,Us=new F,Ns=new F,Fs=new F,ta=new F,Os=new F,ml=new F,Bs=new F;class Sn extends Gt{constructor(e=new Bt,t=new Vo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){Os.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const d=o[l],f=r[l];d!==0&&(ta.fromBufferAttribute(f,e),a?Os.addScaledVector(ta,d):Os.addScaledVector(ta.sub(t),d))}t.add(Os)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Is.copy(n.boundingSphere),Is.applyMatrix4(r),pi.copy(e.ray).recast(e.near),!(Is.containsPoint(pi.origin)===!1&&(pi.intersectSphere(Is,pl)===null||pi.origin.distanceToSquared(pl)>(e.far-e.near)**2))&&(fl.copy(r).invert(),pi.copy(e.ray).applyMatrix4(fl),!(n.boundingBox!==null&&pi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,pi)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,d=r.attributes.uv1,f=r.attributes.normal,u=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,M=u.length;g<M;g++){const p=u[g],h=a[p.materialIndex],S=Math.max(p.start,m.start),T=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let y=S,L=T;y<L;y+=3){const E=o.getX(y),D=o.getX(y+1),x=o.getX(y+2);s=ks(this,h,e,n,c,d,f,E,D,x),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const g=Math.max(0,m.start),M=Math.min(o.count,m.start+m.count);for(let p=g,h=M;p<h;p+=3){const S=o.getX(p),T=o.getX(p+1),y=o.getX(p+2);s=ks(this,a,e,n,c,d,f,S,T,y),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,M=u.length;g<M;g++){const p=u[g],h=a[p.materialIndex],S=Math.max(p.start,m.start),T=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let y=S,L=T;y<L;y+=3){const E=y,D=y+1,x=y+2;s=ks(this,h,e,n,c,d,f,E,D,x),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const g=Math.max(0,m.start),M=Math.min(l.count,m.start+m.count);for(let p=g,h=M;p<h;p+=3){const S=p,T=p+1,y=p+2;s=ks(this,a,e,n,c,d,f,S,T,y),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}}function q_(i,e,t,n,s,r,a,o){let l;if(e.side===en?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===li,o),l===null)return null;Bs.copy(o),Bs.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Bs);return c<t.near||c>t.far?null:{distance:c,point:Bs.clone(),object:i}}function ks(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,Us),i.getVertexPosition(l,Ns),i.getVertexPosition(c,Fs);const d=q_(i,e,t,n,Us,Ns,Fs,ml);if(d){const f=new F;hn.getBarycoord(ml,Us,Ns,Fs,f),s&&(d.uv=hn.getInterpolatedAttribute(s,o,l,c,f,new gt)),r&&(d.uv1=hn.getInterpolatedAttribute(r,o,l,c,f,new gt)),a&&(d.normal=hn.getInterpolatedAttribute(a,o,l,c,f,new F),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new F,materialIndex:0};hn.getNormal(Us,Ns,Fs,u.normal),d.face=u,d.barycoord=f}return d}class Y_ extends jt{constructor(e=null,t=1,n=1,s,r,a,o,l,c=$t,d=$t,f,u){super(null,a,o,l,c,d,s,r,f,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const na=new F,K_=new F,Z_=new je;class zn{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=na.subVectors(n,t).cross(K_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const s=e.delta(na),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Z_.getNormalMatrix(e),s=this.coplanarPoint(na).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const mi=new xs,j_=new gt(.5,.5),Vs=new F;class zo{constructor(e=new zn,t=new zn,n=new zn,s=new zn,r=new zn,a=new zn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=wn,n=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],d=r[4],f=r[5],u=r[6],m=r[7],g=r[8],M=r[9],p=r[10],h=r[11],S=r[12],T=r[13],y=r[14],L=r[15];if(s[0].setComponents(c-a,m-d,h-g,L-S).normalize(),s[1].setComponents(c+a,m+d,h+g,L+S).normalize(),s[2].setComponents(c+o,m+f,h+M,L+T).normalize(),s[3].setComponents(c-o,m-f,h-M,L-T).normalize(),n)s[4].setComponents(l,u,p,y).normalize(),s[5].setComponents(c-l,m-u,h-p,L-y).normalize();else if(s[4].setComponents(c-l,m-u,h-p,L-y).normalize(),t===wn)s[5].setComponents(c+l,m+u,h+p,L+y).normalize();else if(t===ms)s[5].setComponents(l,u,p,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),mi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),mi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(mi)}intersectsSprite(e){mi.center.set(0,0,0);const t=j_.distanceTo(e.center);return mi.radius=.7071067811865476+t,mi.applyMatrix4(e.matrixWorld),this.intersectsSphere(mi)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Vs.x=s.normal.x>0?e.max.x:e.min.x,Vs.y=s.normal.y>0?e.max.y:e.min.y,Vs.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Vs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class uo extends Ei{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new _t(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const hr=new F,fr=new F,_l=new Lt,ls=new ko,zs=new xs,ia=new F,gl=new F;class ho extends Gt{constructor(e=new Bt,t=new uo){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)hr.fromBufferAttribute(t,s-1),fr.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=hr.distanceTo(fr);e.setAttribute("lineDistance",new Ut(n,1))}else Ge("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),zs.copy(n.boundingSphere),zs.applyMatrix4(s),zs.radius+=r,e.ray.intersectsSphere(zs)===!1)return;_l.copy(s).invert(),ls.copy(e.ray).applyMatrix4(_l);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,d=n.index,u=n.attributes.position;if(d!==null){const m=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let M=m,p=g-1;M<p;M+=c){const h=d.getX(M),S=d.getX(M+1),T=Gs(this,e,ls,l,h,S,M);T&&t.push(T)}if(this.isLineLoop){const M=d.getX(g-1),p=d.getX(m),h=Gs(this,e,ls,l,M,p,g-1);h&&t.push(h)}}else{const m=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let M=m,p=g-1;M<p;M+=c){const h=Gs(this,e,ls,l,M,M+1,M);h&&t.push(h)}if(this.isLineLoop){const M=Gs(this,e,ls,l,g-1,m,g-1);M&&t.push(M)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Gs(i,e,t,n,s,r,a){const o=i.geometry.attributes.position;if(hr.fromBufferAttribute(o,s),fr.fromBufferAttribute(o,r),t.distanceSqToSegment(hr,fr,ia,gl)>n)return;ia.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(ia);if(!(c<e.near||c>e.far))return{distance:c,point:gl.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}const vl=new F,xl=new F;class Ml extends ho{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)vl.fromBufferAttribute(t,s),xl.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+vl.distanceTo(xl);e.setAttribute("lineDistance",new Ut(n,1))}else Ge("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ic extends Ei{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new _t(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Sl=new Lt,fo=new ko,Hs=new xs,Ws=new F;class J_ extends Gt{constructor(e=new Bt,t=new Ic){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Hs.copy(n.boundingSphere),Hs.applyMatrix4(s),Hs.radius+=r,e.ray.intersectsSphere(Hs)===!1)return;Sl.copy(s).invert(),fo.copy(e.ray).applyMatrix4(Sl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,f=n.attributes.position;if(c!==null){const u=Math.max(0,a.start),m=Math.min(c.count,a.start+a.count);for(let g=u,M=m;g<M;g++){const p=c.getX(g);Ws.fromBufferAttribute(f,p),bl(Ws,p,l,s,e,t,this)}}else{const u=Math.max(0,a.start),m=Math.min(f.count,a.start+a.count);for(let g=u,M=m;g<M;g++)Ws.fromBufferAttribute(f,g),bl(Ws,g,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function bl(i,e,t,n,s,r,a){const o=fo.distanceSqToPoint(i);if(o<t){const l=new F;fo.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Uc extends jt{constructor(e=[],t=Si,n,s,r,a,o,l,c,d){super(e,t,n,s,r,a,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ji extends jt{constructor(e,t,n=In,s,r,a,o=$t,l=$t,c,d=qn,f=1){if(d!==qn&&d!==xi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:t,depth:f};super(u,s,r,a,o,l,d,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Bo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Q_ extends ji{constructor(e,t=In,n=Si,s,r,a=$t,o=$t,l,c=qn){const d={width:e,height:e,depth:1},f=[d,d,d,d,d,d];super(e,e,t,n,s,r,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Nc extends jt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class an extends Bt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],d=[],f=[];let u=0,m=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Ut(c,3)),this.setAttribute("normal",new Ut(d,3)),this.setAttribute("uv",new Ut(f,2));function g(M,p,h,S,T,y,L,E,D,x,A){const O=y/D,R=L/x,k=y/2,q=L/2,X=E/2,B=D+1,G=x+1;let $=0,ie=0;const re=new F;for(let _e=0;_e<G;_e++){const Re=_e*R-q;for(let De=0;De<B;De++){const lt=De*O-k;re[M]=lt*S,re[p]=Re*T,re[h]=X,c.push(re.x,re.y,re.z),re[M]=0,re[p]=0,re[h]=E>0?1:-1,d.push(re.x,re.y,re.z),f.push(De/D),f.push(1-_e/x),$+=1}}for(let _e=0;_e<x;_e++)for(let Re=0;Re<D;Re++){const De=u+Re+B*_e,lt=u+Re+B*(_e+1),St=u+(Re+1)+B*(_e+1),Ze=u+(Re+1)+B*_e;l.push(De,lt,Ze),l.push(lt,St,Ze),ie+=6}o.addGroup(m,ie,A),m+=ie,u+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new an(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Wt extends Bt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const d=[],f=[],u=[],m=[];let g=0;const M=[],p=n/2;let h=0;S(),a===!1&&(e>0&&T(!0),t>0&&T(!1)),this.setIndex(d),this.setAttribute("position",new Ut(f,3)),this.setAttribute("normal",new Ut(u,3)),this.setAttribute("uv",new Ut(m,2));function S(){const y=new F,L=new F;let E=0;const D=(t-e)/n;for(let x=0;x<=r;x++){const A=[],O=x/r,R=O*(t-e)+e;for(let k=0;k<=s;k++){const q=k/s,X=q*l+o,B=Math.sin(X),G=Math.cos(X);L.x=R*B,L.y=-O*n+p,L.z=R*G,f.push(L.x,L.y,L.z),y.set(B,D,G).normalize(),u.push(y.x,y.y,y.z),m.push(q,1-O),A.push(g++)}M.push(A)}for(let x=0;x<s;x++)for(let A=0;A<r;A++){const O=M[A][x],R=M[A+1][x],k=M[A+1][x+1],q=M[A][x+1];(e>0||A!==0)&&(d.push(O,R,q),E+=3),(t>0||A!==r-1)&&(d.push(R,k,q),E+=3)}c.addGroup(h,E,0),h+=E}function T(y){const L=g,E=new gt,D=new F;let x=0;const A=y===!0?e:t,O=y===!0?1:-1;for(let k=1;k<=s;k++)f.push(0,p*O,0),u.push(0,O,0),m.push(.5,.5),g++;const R=g;for(let k=0;k<=s;k++){const X=k/s*l+o,B=Math.cos(X),G=Math.sin(X);D.x=A*G,D.y=p*O,D.z=A*B,f.push(D.x,D.y,D.z),u.push(0,O,0),E.x=B*.5+.5,E.y=G*.5*O+.5,m.push(E.x,E.y),g++}for(let k=0;k<s;k++){const q=L+k,X=R+k;y===!0?d.push(X,X+1,q):d.push(X+1,X,q),x+=3}c.addGroup(h,x,y===!0?1:2),h+=x}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class pr extends Wt{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new pr(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}const $s=new F,Xs=new F,sa=new F,qs=new hn;class eg extends Bt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const s=Math.pow(10,4),r=Math.cos(sr*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],d=["a","b","c"],f=new Array(3),u={},m=[];for(let g=0;g<l;g+=3){a?(c[0]=a.getX(g),c[1]=a.getX(g+1),c[2]=a.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);const{a:M,b:p,c:h}=qs;if(M.fromBufferAttribute(o,c[0]),p.fromBufferAttribute(o,c[1]),h.fromBufferAttribute(o,c[2]),qs.getNormal(sa),f[0]=`${Math.round(M.x*s)},${Math.round(M.y*s)},${Math.round(M.z*s)}`,f[1]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,f[2]=`${Math.round(h.x*s)},${Math.round(h.y*s)},${Math.round(h.z*s)}`,!(f[0]===f[1]||f[1]===f[2]||f[2]===f[0]))for(let S=0;S<3;S++){const T=(S+1)%3,y=f[S],L=f[T],E=qs[d[S]],D=qs[d[T]],x=`${y}_${L}`,A=`${L}_${y}`;A in u&&u[A]?(sa.dot(u[A].normal)<=r&&(m.push(E.x,E.y,E.z),m.push(D.x,D.y,D.z)),u[A]=null):x in u||(u[x]={index0:c[S],index1:c[T],normal:sa.clone()})}}for(const g in u)if(u[g]){const{index0:M,index1:p}=u[g];$s.fromBufferAttribute(o,M),Xs.fromBufferAttribute(o,p),m.push($s.x,$s.y,$s.z),m.push(Xs.x,Xs.y,Xs.z)}this.setAttribute("position",new Ut(m,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class yr extends Bt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,d=l+1,f=e/o,u=t/l,m=[],g=[],M=[],p=[];for(let h=0;h<d;h++){const S=h*u-a;for(let T=0;T<c;T++){const y=T*f-r;g.push(y,-S,0),M.push(0,0,1),p.push(T/o),p.push(1-h/l)}}for(let h=0;h<l;h++)for(let S=0;S<o;S++){const T=S+c*h,y=S+c*(h+1),L=S+1+c*(h+1),E=S+1+c*h;m.push(T,y,E),m.push(y,L,E)}this.setIndex(m),this.setAttribute("position",new Ut(g,3)),this.setAttribute("normal",new Ut(M,3)),this.setAttribute("uv",new Ut(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yr(e.width,e.height,e.widthSegments,e.heightSegments)}}class Go extends Bt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const d=[],f=new F,u=new F,m=[],g=[],M=[],p=[];for(let h=0;h<=n;h++){const S=[],T=h/n;let y=0;h===0&&a===0?y=.5/t:h===n&&l===Math.PI&&(y=-.5/t);for(let L=0;L<=t;L++){const E=L/t;f.x=-e*Math.cos(s+E*r)*Math.sin(a+T*o),f.y=e*Math.cos(a+T*o),f.z=e*Math.sin(s+E*r)*Math.sin(a+T*o),g.push(f.x,f.y,f.z),u.copy(f).normalize(),M.push(u.x,u.y,u.z),p.push(E+y,1-T),S.push(c++)}d.push(S)}for(let h=0;h<n;h++)for(let S=0;S<t;S++){const T=d[h][S+1],y=d[h][S],L=d[h+1][S],E=d[h+1][S+1];(h!==0||a>0)&&m.push(T,y,E),(h!==n-1||l<Math.PI)&&m.push(y,L,E)}this.setIndex(m),this.setAttribute("position",new Ut(g,3)),this.setAttribute("normal",new Ut(M,3)),this.setAttribute("uv",new Ut(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Go(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Xi extends Bt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);const l=[],c=[],d=[],f=[],u=new F,m=new F,g=new F;for(let M=0;M<=n;M++){const p=a+M/n*o;for(let h=0;h<=s;h++){const S=h/s*r;m.x=(e+t*Math.cos(p))*Math.cos(S),m.y=(e+t*Math.cos(p))*Math.sin(S),m.z=t*Math.sin(p),c.push(m.x,m.y,m.z),u.x=e*Math.cos(S),u.y=e*Math.sin(S),g.subVectors(m,u).normalize(),d.push(g.x,g.y,g.z),f.push(h/s),f.push(M/n)}}for(let M=1;M<=n;M++)for(let p=1;p<=s;p++){const h=(s+1)*M+p-1,S=(s+1)*(M-1)+p-1,T=(s+1)*(M-1)+p,y=(s+1)*M+p;l.push(h,S,y),l.push(S,T,y)}this.setIndex(l),this.setAttribute("position",new Ut(c,3)),this.setAttribute("normal",new Ut(d,3)),this.setAttribute("uv",new Ut(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xi(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}function Ji(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];if(yl(s))s.isRenderTargetTexture?(Ge("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(yl(s[0])){const r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function Zt(i){const e={};for(let t=0;t<i.length;t++){const n=Ji(i[t]);for(const s in n)e[s]=n[s]}return e}function yl(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function tg(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Fc(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ct.workingColorSpace}const ng={clone:Ji,merge:Zt};var ig=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,sg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Un extends Ei{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ig,this.fragmentShader=sg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ji(e.uniforms),this.uniformsGroups=tg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class rg extends Un{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Gi extends Ei{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new _t(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _t(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=oo,this.normalScale=new gt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ci,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ag extends Ei{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=__,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class og extends Ei{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Ho extends Gt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new _t(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const ra=new Lt,El=new F,Tl=new F;class Oc{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new gt(512,512),this.mapType=cn,this.map=null,this.mapPass=null,this.matrix=new Lt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new zo,this._frameExtents=new gt(1,1),this._viewportCount=1,this._viewports=[new It(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;El.setFromMatrixPosition(e.matrixWorld),t.position.copy(El),Tl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Tl),t.updateMatrixWorld(),ra.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ra,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===ms||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ra)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Ys=new F,Ks=new Qi,yn=new F;class Bc extends Gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Lt,this.projectionMatrix=new Lt,this.projectionMatrixInverse=new Lt,this.coordinateSystem=wn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ys,Ks,yn),yn.x===1&&yn.y===1&&yn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ys,Ks,yn.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Ys,Ks,yn),yn.x===1&&yn.y===1&&yn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ys,Ks,yn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const si=new F,Al=new gt,wl=new gt;class ln extends Bc{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=co*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(sr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return co*2*Math.atan(Math.tan(sr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){si.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(si.x,si.y).multiplyScalar(-e/si.z),si.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(si.x,si.y).multiplyScalar(-e/si.z)}getViewSize(e,t){return this.getViewBounds(e,Al,wl),t.subVectors(wl,Al)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(sr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class lg extends Oc{constructor(){super(new ln(90,1,.5,500)),this.isPointLightShadow=!0}}class cg extends Ho{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new lg}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Wo extends Bc{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class ug extends Oc{constructor(){super(new Wo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class aa extends Ho{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.target=new Gt,this.shadow=new ug}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class dg extends Ho{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const Hi=-90,Wi=1;class hg extends Gt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new ln(Hi,Wi,e,t);s.layers=this.layers,this.add(s);const r=new ln(Hi,Wi,e,t);r.layers=this.layers,this.add(r);const a=new ln(Hi,Wi,e,t);a.layers=this.layers,this.add(a);const o=new ln(Hi,Wi,e,t);o.layers=this.layers,this.add(o);const l=new ln(Hi,Wi,e,t);l.layers=this.layers,this.add(l);const c=new ln(Hi,Wi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===wn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ms)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,d]=this.children,f=e.getRenderTarget(),u=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=M,e.setRenderTarget(n,5,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(f,u,m),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class fg extends ln{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class kc{static{kc.prototype.isMatrix2=!0}constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){const r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}}function Rl(i,e,t,n){const s=pg(n);switch(t){case Ec:return i*e;case Ac:return i*e/s.components*s.byteLength;case Io:return i*e/s.components*s.byteLength;case bi:return i*e*2/s.components*s.byteLength;case Uo:return i*e*2/s.components*s.byteLength;case Tc:return i*e*3/s.components*s.byteLength;case vn:return i*e*4/s.components*s.byteLength;case No:return i*e*4/s.components*s.byteLength;case er:case tr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case nr:case ir:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Da:case Ua:return Math.max(i,16)*Math.max(e,8)/4;case La:case Ia:return Math.max(i,8)*Math.max(e,8)/2;case Na:case Fa:case Ba:case ka:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Oa:case or:case Va:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case za:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ga:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Ha:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Wa:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case $a:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Xa:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case qa:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Ya:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Ka:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Za:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case ja:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Ja:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Qa:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case eo:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case to:case no:case io:return Math.ceil(i/4)*Math.ceil(e/4)*16;case so:case ro:return Math.ceil(i/4)*Math.ceil(e/4)*8;case lr:case ao:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function pg(i){switch(i){case cn:case Mc:return{byteLength:1,components:1};case fs:case Sc:case Xn:return{byteLength:2,components:1};case Lo:case Do:return{byteLength:2,components:4};case In:case Po:case An:return{byteLength:4,components:1};case bc:case yc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ro}}));typeof window<"u"&&(window.__THREE__?Ge("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ro);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Vc(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function mg(i){const e=new WeakMap;function t(o,l){const c=o.array,d=o.usage,f=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,d),o.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){const d=l.array,f=l.updateRanges;if(i.bindBuffer(c,o),f.length===0)i.bufferSubData(c,0,d);else{f.sort((m,g)=>m.start-g.start);let u=0;for(let m=1;m<f.length;m++){const g=f[u],M=f[m];M.start<=g.start+g.count+1?g.count=Math.max(g.count,M.start+M.count-g.start):(++u,f[u]=M)}f.length=u+1;for(let m=0,g=f.length;m<g;m++){const M=f[m];i.bufferSubData(c,M.start*d.BYTES_PER_ELEMENT,d,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var _g=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,gg=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,vg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,xg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Mg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Sg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,bg=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,yg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Eg=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Tg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ag=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,wg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Rg=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Cg=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Pg=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Lg=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Dg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ig=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ug=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ng=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Fg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Og=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Bg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,kg=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Vg=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,zg=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Gg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Hg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Wg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$g=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Xg="gl_FragColor = linearToOutputTexel( gl_FragColor );",qg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Yg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Kg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Zg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,jg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Jg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Qg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,e0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,t0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,n0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,i0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,s0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,r0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,a0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,o0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,l0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,c0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,u0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,d0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,h0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,f0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,p0=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,m0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,_0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,g0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,v0=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,x0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,M0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,S0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,b0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,y0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,E0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,T0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,A0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,w0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,R0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,C0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,P0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,L0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,D0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,I0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,U0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,N0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,F0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,O0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,B0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,k0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,V0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,z0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,G0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,H0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,W0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,X0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,q0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Y0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,K0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Z0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,j0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,J0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Q0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ev=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,tv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,nv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,iv=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,sv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,rv=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,av=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ov=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,lv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,cv=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,uv=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,dv=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,hv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,fv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,pv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,mv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const _v=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,gv=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xv=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,yv=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Ev=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Tv=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Av=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,wv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rv=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Cv=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Pv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Lv=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dv=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Iv=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Uv=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Nv=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fv=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Ov=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Bv=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,zv=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gv=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wv=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,$v=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Xv=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qv=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Yv=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Kv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,it={alphahash_fragment:_g,alphahash_pars_fragment:gg,alphamap_fragment:vg,alphamap_pars_fragment:xg,alphatest_fragment:Mg,alphatest_pars_fragment:Sg,aomap_fragment:bg,aomap_pars_fragment:yg,batching_pars_vertex:Eg,batching_vertex:Tg,begin_vertex:Ag,beginnormal_vertex:wg,bsdfs:Rg,iridescence_fragment:Cg,bumpmap_pars_fragment:Pg,clipping_planes_fragment:Lg,clipping_planes_pars_fragment:Dg,clipping_planes_pars_vertex:Ig,clipping_planes_vertex:Ug,color_fragment:Ng,color_pars_fragment:Fg,color_pars_vertex:Og,color_vertex:Bg,common:kg,cube_uv_reflection_fragment:Vg,defaultnormal_vertex:zg,displacementmap_pars_vertex:Gg,displacementmap_vertex:Hg,emissivemap_fragment:Wg,emissivemap_pars_fragment:$g,colorspace_fragment:Xg,colorspace_pars_fragment:qg,envmap_fragment:Yg,envmap_common_pars_fragment:Kg,envmap_pars_fragment:Zg,envmap_pars_vertex:jg,envmap_physical_pars_fragment:l0,envmap_vertex:Jg,fog_vertex:Qg,fog_pars_vertex:e0,fog_fragment:t0,fog_pars_fragment:n0,gradientmap_pars_fragment:i0,lightmap_pars_fragment:s0,lights_lambert_fragment:r0,lights_lambert_pars_fragment:a0,lights_pars_begin:o0,lights_toon_fragment:c0,lights_toon_pars_fragment:u0,lights_phong_fragment:d0,lights_phong_pars_fragment:h0,lights_physical_fragment:f0,lights_physical_pars_fragment:p0,lights_fragment_begin:m0,lights_fragment_maps:_0,lights_fragment_end:g0,lightprobes_pars_fragment:v0,logdepthbuf_fragment:x0,logdepthbuf_pars_fragment:M0,logdepthbuf_pars_vertex:S0,logdepthbuf_vertex:b0,map_fragment:y0,map_pars_fragment:E0,map_particle_fragment:T0,map_particle_pars_fragment:A0,metalnessmap_fragment:w0,metalnessmap_pars_fragment:R0,morphinstance_vertex:C0,morphcolor_vertex:P0,morphnormal_vertex:L0,morphtarget_pars_vertex:D0,morphtarget_vertex:I0,normal_fragment_begin:U0,normal_fragment_maps:N0,normal_pars_fragment:F0,normal_pars_vertex:O0,normal_vertex:B0,normalmap_pars_fragment:k0,clearcoat_normal_fragment_begin:V0,clearcoat_normal_fragment_maps:z0,clearcoat_pars_fragment:G0,iridescence_pars_fragment:H0,opaque_fragment:W0,packing:$0,premultiplied_alpha_fragment:X0,project_vertex:q0,dithering_fragment:Y0,dithering_pars_fragment:K0,roughnessmap_fragment:Z0,roughnessmap_pars_fragment:j0,shadowmap_pars_fragment:J0,shadowmap_pars_vertex:Q0,shadowmap_vertex:ev,shadowmask_pars_fragment:tv,skinbase_vertex:nv,skinning_pars_vertex:iv,skinning_vertex:sv,skinnormal_vertex:rv,specularmap_fragment:av,specularmap_pars_fragment:ov,tonemapping_fragment:lv,tonemapping_pars_fragment:cv,transmission_fragment:uv,transmission_pars_fragment:dv,uv_pars_fragment:hv,uv_pars_vertex:fv,uv_vertex:pv,worldpos_vertex:mv,background_vert:_v,background_frag:gv,backgroundCube_vert:vv,backgroundCube_frag:xv,cube_vert:Mv,cube_frag:Sv,depth_vert:bv,depth_frag:yv,distance_vert:Ev,distance_frag:Tv,equirect_vert:Av,equirect_frag:wv,linedashed_vert:Rv,linedashed_frag:Cv,meshbasic_vert:Pv,meshbasic_frag:Lv,meshlambert_vert:Dv,meshlambert_frag:Iv,meshmatcap_vert:Uv,meshmatcap_frag:Nv,meshnormal_vert:Fv,meshnormal_frag:Ov,meshphong_vert:Bv,meshphong_frag:kv,meshphysical_vert:Vv,meshphysical_frag:zv,meshtoon_vert:Gv,meshtoon_frag:Hv,points_vert:Wv,points_frag:$v,shadow_vert:Xv,shadow_frag:qv,sprite_vert:Yv,sprite_frag:Kv},ve={common:{diffuse:{value:new _t(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new je}},envmap:{envMap:{value:null},envMapRotation:{value:new je},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new je},normalScale:{value:new gt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new _t(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new F},probesMax:{value:new F},probesResolution:{value:new F}},points:{diffuse:{value:new _t(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0},uvTransform:{value:new je}},sprite:{diffuse:{value:new _t(16777215)},opacity:{value:1},center:{value:new gt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}}},Tn={basic:{uniforms:Zt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:it.meshbasic_vert,fragmentShader:it.meshbasic_frag},lambert:{uniforms:Zt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new _t(0)},envMapIntensity:{value:1}}]),vertexShader:it.meshlambert_vert,fragmentShader:it.meshlambert_frag},phong:{uniforms:Zt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new _t(0)},specular:{value:new _t(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:it.meshphong_vert,fragmentShader:it.meshphong_frag},standard:{uniforms:Zt([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new _t(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag},toon:{uniforms:Zt([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new _t(0)}}]),vertexShader:it.meshtoon_vert,fragmentShader:it.meshtoon_frag},matcap:{uniforms:Zt([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:it.meshmatcap_vert,fragmentShader:it.meshmatcap_frag},points:{uniforms:Zt([ve.points,ve.fog]),vertexShader:it.points_vert,fragmentShader:it.points_frag},dashed:{uniforms:Zt([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:it.linedashed_vert,fragmentShader:it.linedashed_frag},depth:{uniforms:Zt([ve.common,ve.displacementmap]),vertexShader:it.depth_vert,fragmentShader:it.depth_frag},normal:{uniforms:Zt([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:it.meshnormal_vert,fragmentShader:it.meshnormal_frag},sprite:{uniforms:Zt([ve.sprite,ve.fog]),vertexShader:it.sprite_vert,fragmentShader:it.sprite_frag},background:{uniforms:{uvTransform:{value:new je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:it.background_vert,fragmentShader:it.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new je}},vertexShader:it.backgroundCube_vert,fragmentShader:it.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:it.cube_vert,fragmentShader:it.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:it.equirect_vert,fragmentShader:it.equirect_frag},distance:{uniforms:Zt([ve.common,ve.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:it.distance_vert,fragmentShader:it.distance_frag},shadow:{uniforms:Zt([ve.lights,ve.fog,{color:{value:new _t(0)},opacity:{value:1}}]),vertexShader:it.shadow_vert,fragmentShader:it.shadow_frag}};Tn.physical={uniforms:Zt([Tn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new je},clearcoatNormalScale:{value:new gt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new je},sheen:{value:0},sheenColor:{value:new _t(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new je},transmissionSamplerSize:{value:new gt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new je},attenuationDistance:{value:0},attenuationColor:{value:new _t(0)},specularColor:{value:new _t(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new je},anisotropyVector:{value:new gt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new je}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag};const Zs={r:0,b:0,g:0},Zv=new Lt,zc=new je;zc.set(-1,0,0,0,1,0,0,0,1);function jv(i,e,t,n,s,r){const a=new _t(0);let o=s===!0?0:1,l,c,d=null,f=0,u=null;function m(S){let T=S.isScene===!0?S.background:null;if(T&&T.isTexture){const y=S.backgroundBlurriness>0;T=e.get(T,y)}return T}function g(S){let T=!1;const y=m(S);y===null?p(a,o):y&&y.isColor&&(p(y,1),T=!0);const L=i.xr.getEnvironmentBlendMode();L==="additive"?t.buffers.color.setClear(0,0,0,1,r):L==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||T)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function M(S,T){const y=m(T);y&&(y.isCubeTexture||y.mapping===br)?(c===void 0&&(c=new Sn(new an(1,1,1),new Un({name:"BackgroundCubeMaterial",uniforms:Ji(Tn.backgroundCube.uniforms),vertexShader:Tn.backgroundCube.vertexShader,fragmentShader:Tn.backgroundCube.fragmentShader,side:en,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(L,E,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Zv.makeRotationFromEuler(T.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(zc),c.material.toneMapped=ct.getTransfer(y.colorSpace)!==bt,(d!==y||f!==y.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,d=y,f=y.version,u=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Sn(new yr(2,2),new Un({name:"BackgroundMaterial",uniforms:Ji(Tn.background.uniforms),vertexShader:Tn.background.vertexShader,fragmentShader:Tn.background.fragmentShader,side:li,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=ct.getTransfer(y.colorSpace)!==bt,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||f!==y.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,d=y,f=y.version,u=i.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function p(S,T){S.getRGB(Zs,Fc(i)),t.buffers.color.setClear(Zs.r,Zs.g,Zs.b,T,r)}function h(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,T=1){a.set(S),o=T,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(S){o=S,p(a,o)},render:g,addToRenderList:M,dispose:h}}function Jv(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null);let r=s,a=!1;function o(R,k,q,X,B){let G=!1;const $=f(R,X,q,k);r!==$&&(r=$,c(r.object)),G=m(R,X,q,B),G&&g(R,X,q,B),B!==null&&e.update(B,i.ELEMENT_ARRAY_BUFFER),(G||a)&&(a=!1,y(R,k,q,X),B!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function l(){return i.createVertexArray()}function c(R){return i.bindVertexArray(R)}function d(R){return i.deleteVertexArray(R)}function f(R,k,q,X){const B=X.wireframe===!0;let G=n[k.id];G===void 0&&(G={},n[k.id]=G);const $=R.isInstancedMesh===!0?R.id:0;let ie=G[$];ie===void 0&&(ie={},G[$]=ie);let re=ie[q.id];re===void 0&&(re={},ie[q.id]=re);let _e=re[B];return _e===void 0&&(_e=u(l()),re[B]=_e),_e}function u(R){const k=[],q=[],X=[];for(let B=0;B<t;B++)k[B]=0,q[B]=0,X[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:q,attributeDivisors:X,object:R,attributes:{},index:null}}function m(R,k,q,X){const B=r.attributes,G=k.attributes;let $=0;const ie=q.getAttributes();for(const re in ie)if(ie[re].location>=0){const Re=B[re];let De=G[re];if(De===void 0&&(re==="instanceMatrix"&&R.instanceMatrix&&(De=R.instanceMatrix),re==="instanceColor"&&R.instanceColor&&(De=R.instanceColor)),Re===void 0||Re.attribute!==De||De&&Re.data!==De.data)return!0;$++}return r.attributesNum!==$||r.index!==X}function g(R,k,q,X){const B={},G=k.attributes;let $=0;const ie=q.getAttributes();for(const re in ie)if(ie[re].location>=0){let Re=G[re];Re===void 0&&(re==="instanceMatrix"&&R.instanceMatrix&&(Re=R.instanceMatrix),re==="instanceColor"&&R.instanceColor&&(Re=R.instanceColor));const De={};De.attribute=Re,Re&&Re.data&&(De.data=Re.data),B[re]=De,$++}r.attributes=B,r.attributesNum=$,r.index=X}function M(){const R=r.newAttributes;for(let k=0,q=R.length;k<q;k++)R[k]=0}function p(R){h(R,0)}function h(R,k){const q=r.newAttributes,X=r.enabledAttributes,B=r.attributeDivisors;q[R]=1,X[R]===0&&(i.enableVertexAttribArray(R),X[R]=1),B[R]!==k&&(i.vertexAttribDivisor(R,k),B[R]=k)}function S(){const R=r.newAttributes,k=r.enabledAttributes;for(let q=0,X=k.length;q<X;q++)k[q]!==R[q]&&(i.disableVertexAttribArray(q),k[q]=0)}function T(R,k,q,X,B,G,$){$===!0?i.vertexAttribIPointer(R,k,q,B,G):i.vertexAttribPointer(R,k,q,X,B,G)}function y(R,k,q,X){M();const B=X.attributes,G=q.getAttributes(),$=k.defaultAttributeValues;for(const ie in G){const re=G[ie];if(re.location>=0){let _e=B[ie];if(_e===void 0&&(ie==="instanceMatrix"&&R.instanceMatrix&&(_e=R.instanceMatrix),ie==="instanceColor"&&R.instanceColor&&(_e=R.instanceColor)),_e!==void 0){const Re=_e.normalized,De=_e.itemSize,lt=e.get(_e);if(lt===void 0)continue;const St=lt.buffer,Ze=lt.type,ee=lt.bytesPerElement,xe=Ze===i.INT||Ze===i.UNSIGNED_INT||_e.gpuType===Po;if(_e.isInterleavedBufferAttribute){const pe=_e.data,Ve=pe.stride,Xe=_e.offset;if(pe.isInstancedInterleavedBuffer){for(let ze=0;ze<re.locationSize;ze++)h(re.location+ze,pe.meshPerAttribute);R.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let ze=0;ze<re.locationSize;ze++)p(re.location+ze);i.bindBuffer(i.ARRAY_BUFFER,St);for(let ze=0;ze<re.locationSize;ze++)T(re.location+ze,De/re.locationSize,Ze,Re,Ve*ee,(Xe+De/re.locationSize*ze)*ee,xe)}else{if(_e.isInstancedBufferAttribute){for(let pe=0;pe<re.locationSize;pe++)h(re.location+pe,_e.meshPerAttribute);R.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let pe=0;pe<re.locationSize;pe++)p(re.location+pe);i.bindBuffer(i.ARRAY_BUFFER,St);for(let pe=0;pe<re.locationSize;pe++)T(re.location+pe,De/re.locationSize,Ze,Re,De*ee,De/re.locationSize*pe*ee,xe)}}else if($!==void 0){const Re=$[ie];if(Re!==void 0)switch(Re.length){case 2:i.vertexAttrib2fv(re.location,Re);break;case 3:i.vertexAttrib3fv(re.location,Re);break;case 4:i.vertexAttrib4fv(re.location,Re);break;default:i.vertexAttrib1fv(re.location,Re)}}}}S()}function L(){A();for(const R in n){const k=n[R];for(const q in k){const X=k[q];for(const B in X){const G=X[B];for(const $ in G)d(G[$].object),delete G[$];delete X[B]}}delete n[R]}}function E(R){if(n[R.id]===void 0)return;const k=n[R.id];for(const q in k){const X=k[q];for(const B in X){const G=X[B];for(const $ in G)d(G[$].object),delete G[$];delete X[B]}}delete n[R.id]}function D(R){for(const k in n){const q=n[k];for(const X in q){const B=q[X];if(B[R.id]===void 0)continue;const G=B[R.id];for(const $ in G)d(G[$].object),delete G[$];delete B[R.id]}}}function x(R){for(const k in n){const q=n[k],X=R.isInstancedMesh===!0?R.id:0,B=q[X];if(B!==void 0){for(const G in B){const $=B[G];for(const ie in $)d($[ie].object),delete $[ie];delete B[G]}delete q[X],Object.keys(q).length===0&&delete n[k]}}}function A(){O(),a=!0,r!==s&&(r=s,c(r.object))}function O(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:A,resetDefaultState:O,dispose:L,releaseStatesOfGeometry:E,releaseStatesOfObject:x,releaseStatesOfProgram:D,initAttributes:M,enableAttribute:p,disableUnusedAttributes:S}}function Qv(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,d){d!==0&&(i.drawArraysInstanced(n,l,c,d),t.update(c,n,d))}function o(l,c,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,d);let u=0;for(let m=0;m<d;m++)u+=c[m];t.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function ex(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const D=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(D){return!(D!==vn&&n.convert(D)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(D){const x=D===Xn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(D!==cn&&n.convert(D)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==An&&!x)}function l(D){if(D==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const d=l(c);d!==c&&(Ge("WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const f=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&Ge("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),h=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),L=i.getParameter(i.MAX_SAMPLES),E=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:m,maxVertexTextures:g,maxTextureSize:M,maxCubemapSize:p,maxAttributes:h,maxVertexUniforms:S,maxVaryings:T,maxFragmentUniforms:y,maxSamples:L,samples:E}}function tx(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new zn,o=new je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){const m=f.length!==0||u||n!==0||s;return s=u,n=f.length,m},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){t=d(f,u,0)},this.setState=function(f,u,m){const g=f.clippingPlanes,M=f.clipIntersection,p=f.clipShadows,h=i.get(f);if(!s||g===null||g.length===0||r&&!p)r?d(null):c();else{const S=r?0:n,T=S*4;let y=h.clippingState||null;l.value=y,y=d(g,u,T,m);for(let L=0;L!==T;++L)y[L]=t[L];h.clippingState=y,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(f,u,m,g){const M=f!==null?f.length:0;let p=null;if(M!==0){if(p=l.value,g!==!0||p===null){const h=m+M*4,S=u.matrixWorldInverse;o.getNormalMatrix(S),(p===null||p.length<h)&&(p=new Float32Array(h));for(let T=0,y=m;T!==M;++T,y+=4)a.copy(f[T]).applyMatrix4(S,o),a.normal.toArray(p,y),p[y+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,p}}const ai=4,Cl=[.125,.215,.35,.446,.526,.582],gi=20,nx=256,cs=new Wo,Pl=new _t;let oa=null,la=0,ca=0,ua=!1;const ix=new F;class Ll{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){const{size:a=256,position:o=ix}=r;oa=this._renderer.getRenderTarget(),la=this._renderer.getActiveCubeFace(),ca=this._renderer.getActiveMipmapLevel(),ua=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ul(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Il(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(oa,la,ca),this._renderer.xr.enabled=ua,e.scissorTest=!1,$i(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Si||e.mapping===Zi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),oa=this._renderer.getRenderTarget(),la=this._renderer.getActiveCubeFace(),ca=this._renderer.getActiveMipmapLevel(),ua=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Kt,minFilter:Kt,generateMipmaps:!1,type:Xn,format:vn,colorSpace:cr,depthBuffer:!1},s=Dl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Dl(e,t,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=sx(r)),this._blurMaterial=ax(r,e,t),this._ggxMaterial=rx(r,e,t)}return s}_compileMaterial(e){const t=new Sn(new Bt,e);this._renderer.compile(t,cs)}_sceneToCubeUV(e,t,n,s,r){const l=new ln(90,1,t,n),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],f=this._renderer,u=f.autoClear,m=f.toneMapping;f.getClearColor(Pl),f.toneMapping=Ln,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Sn(new an,new Vo({name:"PMREM.Background",side:en,depthWrite:!1,depthTest:!1})));const M=this._backgroundBox,p=M.material;let h=!1;const S=e.background;S?S.isColor&&(p.color.copy(S),e.background=null,h=!0):(p.color.copy(Pl),h=!0);for(let T=0;T<6;T++){const y=T%3;y===0?(l.up.set(0,c[T],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+d[T],r.y,r.z)):y===1?(l.up.set(0,0,c[T]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+d[T],r.z)):(l.up.set(0,c[T],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+d[T]));const L=this._cubeSize;$i(s,y*L,T>2?L:0,L,L),f.setRenderTarget(s),h&&f.render(M,l),f.render(e,l)}f.toneMapping=m,f.autoClear=u,e.background=S}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Si||e.mapping===Zi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ul()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Il());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;$i(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,cs)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){const s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),d=t/(this._lodMeshes.length-1),f=Math.sqrt(c*c-d*d),u=0+c*1.25,m=f*u,{_lodMax:g}=this,M=this._sizeLods[n],p=3*M*(n>g-ai?n-g+ai:0),h=4*(this._cubeSize-M);l.envMap.value=e.texture,l.roughness.value=m,l.mipInt.value=g-t,$i(r,p,h,3*M,2*M),s.setRenderTarget(r),s.render(o,cs),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-n,$i(e,p,h,3*M,2*M),s.setRenderTarget(e),s.render(o,cs)}_blur(e,t,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&mt("blur direction must be either latitudinal or longitudinal!");const d=3,f=this._lodMeshes[s];f.material=c;const u=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*gi-1),M=r/g,p=isFinite(r)?1+Math.floor(d*M):gi;p>gi&&Ge(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${gi}`);const h=[];let S=0;for(let D=0;D<gi;++D){const x=D/M,A=Math.exp(-x*x/2);h.push(A),D===0?S+=A:D<p&&(S+=2*A)}for(let D=0;D<h.length;D++)h[D]=h[D]/S;u.envMap.value=e.texture,u.samples.value=p,u.weights.value=h,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:T}=this;u.dTheta.value=g,u.mipInt.value=T-n;const y=this._sizeLods[s],L=3*y*(s>T-ai?s-T+ai:0),E=4*(this._cubeSize-y);$i(t,L,E,3*y,2*y),l.setRenderTarget(t),l.render(f,cs)}}function sx(i){const e=[],t=[],n=[];let s=i;const r=i-ai+1+Cl.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>i-ai?l=Cl[a-i+ai-1]:a===0&&(l=0),t.push(l);const c=1/(o-2),d=-c,f=1+c,u=[d,d,f,d,f,f,d,d,f,f,d,f],m=6,g=6,M=3,p=2,h=1,S=new Float32Array(M*g*m),T=new Float32Array(p*g*m),y=new Float32Array(h*g*m);for(let E=0;E<m;E++){const D=E%3*2/3-1,x=E>2?0:-1,A=[D,x,0,D+2/3,x,0,D+2/3,x+1,0,D,x,0,D+2/3,x+1,0,D,x+1,0];S.set(A,M*g*E),T.set(u,p*g*E);const O=[E,E,E,E,E,E];y.set(O,h*g*E)}const L=new Bt;L.setAttribute("position",new xn(S,M)),L.setAttribute("uv",new xn(T,p)),L.setAttribute("faceIndex",new xn(y,h)),n.push(new Sn(L,null)),s>ai&&s--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function Dl(i,e,t){const n=new Dn(i,e,t);return n.texture.mapping=br,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function $i(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function rx(i,e,t){return new Un({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:nx,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Er(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function ax(i,e,t){const n=new Float32Array(gi),s=new F(0,1,0);return new Un({name:"SphericalGaussianBlur",defines:{n:gi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Er(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function Il(){return new Un({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Er(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function Ul(){return new Un({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Er(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function Er(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class Gc extends Dn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Uc(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new an(5,5,5),r=new Un({name:"CubemapFromEquirect",uniforms:Ji(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:en,blending:Wn});r.uniforms.tEquirect.value=t;const a=new Sn(s,r),o=t.minFilter;return t.minFilter===vi&&(t.minFilter=Kt),new hg(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}function ox(i){let e=new WeakMap,t=new WeakMap,n=null;function s(u,m=!1){return u==null?null:m?a(u):r(u)}function r(u){if(u&&u.isTexture){const m=u.mapping;if(m===Lr||m===Dr)if(e.has(u)){const g=e.get(u).texture;return o(g,u.mapping)}else{const g=u.image;if(g&&g.height>0){const M=new Gc(g.height);return M.fromEquirectangularTexture(i,u),e.set(u,M),u.addEventListener("dispose",c),o(M.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){const m=u.mapping,g=m===Lr||m===Dr,M=m===Si||m===Zi;if(g||M){let p=t.get(u);const h=p!==void 0?p.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==h)return n===null&&(n=new Ll(i)),p=g?n.fromEquirectangular(u,p):n.fromCubemap(u,p),p.texture.pmremVersion=u.pmremVersion,t.set(u,p),p.texture;if(p!==void 0)return p.texture;{const S=u.image;return g&&S&&S.height>0||M&&S&&l(S)?(n===null&&(n=new Ll(i)),p=g?n.fromEquirectangular(u):n.fromCubemap(u),p.texture.pmremVersion=u.pmremVersion,t.set(u,p),u.addEventListener("dispose",d),p.texture):null}}}return u}function o(u,m){return m===Lr?u.mapping=Si:m===Dr&&(u.mapping=Zi),u}function l(u){let m=0;const g=6;for(let M=0;M<g;M++)u[M]!==void 0&&m++;return m===g}function c(u){const m=u.target;m.removeEventListener("dispose",c);const g=e.get(m);g!==void 0&&(e.delete(m),g.dispose())}function d(u){const m=u.target;m.removeEventListener("dispose",d);const g=t.get(m);g!==void 0&&(t.delete(m),g.dispose())}function f(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function lx(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&lo("WebGLRenderer: "+n+" extension not supported."),s}}}function cx(i,e,t,n){const s={},r=new WeakMap;function a(f){const u=f.target;u.index!==null&&e.remove(u.index);for(const g in u.attributes)e.remove(u.attributes[g]);u.removeEventListener("dispose",a),delete s[u.id];const m=r.get(u);m&&(e.remove(m),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(f,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,t.memory.geometries++),u}function l(f){const u=f.attributes;for(const m in u)e.update(u[m],i.ARRAY_BUFFER)}function c(f){const u=[],m=f.index,g=f.attributes.position;let M=0;if(g===void 0)return;if(m!==null){const S=m.array;M=m.version;for(let T=0,y=S.length;T<y;T+=3){const L=S[T+0],E=S[T+1],D=S[T+2];u.push(L,E,E,D,D,L)}}else{const S=g.array;M=g.version;for(let T=0,y=S.length/3-1;T<y;T+=3){const L=T+0,E=T+1,D=T+2;u.push(L,E,E,D,D,L)}}const p=new(g.count>=65535?Dc:Lc)(u,1);p.version=M;const h=r.get(f);h&&e.remove(h),r.set(f,p)}function d(f){const u=r.get(f);if(u){const m=f.index;m!==null&&u.version<m.version&&c(f)}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:d}}function ux(i,e,t){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,u){i.drawElements(n,u,r,f*a),t.update(u,n,1)}function c(f,u,m){m!==0&&(i.drawElementsInstanced(n,u,r,f*a,m),t.update(u,n,m))}function d(f,u,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,f,0,m);let M=0;for(let p=0;p<m;p++)M+=u[p];t.update(M,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d}function dx(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:mt("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function hx(i,e,t){const n=new WeakMap,s=new It;function r(a,o,l){const c=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=d!==void 0?d.length:0;let u=n.get(o);if(u===void 0||u.count!==f){let A=function(){D.dispose(),n.delete(o),o.removeEventListener("dispose",A)};u!==void 0&&u.texture.dispose();const m=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,M=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],h=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let T=0;m===!0&&(T=1),g===!0&&(T=2),M===!0&&(T=3);let y=o.attributes.position.count*T,L=1;y>e.maxTextureSize&&(L=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const E=new Float32Array(y*L*4*f),D=new Rc(E,y,L,f);D.type=An,D.needsUpdate=!0;const x=T*4;for(let O=0;O<f;O++){const R=p[O],k=h[O],q=S[O],X=y*L*4*O;for(let B=0;B<R.count;B++){const G=B*x;m===!0&&(s.fromBufferAttribute(R,B),E[X+G+0]=s.x,E[X+G+1]=s.y,E[X+G+2]=s.z,E[X+G+3]=0),g===!0&&(s.fromBufferAttribute(k,B),E[X+G+4]=s.x,E[X+G+5]=s.y,E[X+G+6]=s.z,E[X+G+7]=0),M===!0&&(s.fromBufferAttribute(q,B),E[X+G+8]=s.x,E[X+G+9]=s.y,E[X+G+10]=s.z,E[X+G+11]=q.itemSize===4?s.w:1)}}u={count:f,texture:D,size:new gt(y,L)},n.set(o,u),o.addEventListener("dispose",A)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let m=0;for(let M=0;M<c.length;M++)m+=c[M];const g=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function fx(i,e,t,n,s){let r=new WeakMap;function a(c){const d=s.render.frame,f=c.geometry,u=e.get(c,f);if(r.get(u)!==d&&(e.update(u),r.set(u,d)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==d&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,d))),c.isSkinnedMesh){const m=c.skeleton;r.get(m)!==d&&(m.update(),r.set(m,d))}return u}function o(){r=new WeakMap}function l(c){const d=c.target;d.removeEventListener("dispose",l),n.releaseStatesOfObject(d),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:a,dispose:o}}const px={[fc]:"LINEAR_TONE_MAPPING",[pc]:"REINHARD_TONE_MAPPING",[mc]:"CINEON_TONE_MAPPING",[Co]:"ACES_FILMIC_TONE_MAPPING",[gc]:"AGX_TONE_MAPPING",[vc]:"NEUTRAL_TONE_MAPPING",[_c]:"CUSTOM_TONE_MAPPING"};function mx(i,e,t,n,s){const r=new Dn(e,t,{type:i,depthBuffer:n,stencilBuffer:s,depthTexture:n?new ji(e,t):void 0}),a=new Dn(e,t,{type:Xn,depthBuffer:!1,stencilBuffer:!1}),o=new Bt;o.setAttribute("position",new Ut([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new Ut([0,2,0,0,2,0],2));const l=new rg({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new Sn(o,l),d=new Wo(-1,1,1,-1,0,1);let f=null,u=null,m=!1,g,M=null,p=[],h=!1;this.setSize=function(S,T){r.setSize(S,T),a.setSize(S,T);for(let y=0;y<p.length;y++){const L=p[y];L.setSize&&L.setSize(S,T)}},this.setEffects=function(S){p=S,h=p.length>0&&p[0].isRenderPass===!0;const T=r.width,y=r.height;for(let L=0;L<p.length;L++){const E=p[L];E.setSize&&E.setSize(T,y)}},this.begin=function(S,T){if(m||S.toneMapping===Ln&&p.length===0)return!1;if(M=T,T!==null){const y=T.width,L=T.height;(r.width!==y||r.height!==L)&&this.setSize(y,L)}return h===!1&&S.setRenderTarget(r),g=S.toneMapping,S.toneMapping=Ln,!0},this.hasRenderPass=function(){return h},this.end=function(S,T){S.toneMapping=g,m=!0;let y=r,L=a;for(let E=0;E<p.length;E++){const D=p[E];if(D.enabled!==!1&&(D.render(S,L,y,T),D.needsSwap!==!1)){const x=y;y=L,L=x}}if(f!==S.outputColorSpace||u!==S.toneMapping){f=S.outputColorSpace,u=S.toneMapping,l.defines={},ct.getTransfer(f)===bt&&(l.defines.SRGB_TRANSFER="");const E=px[u];E&&(l.defines[E]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=y.texture,S.setRenderTarget(M),S.render(c,d),M=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){r.depthTexture&&r.depthTexture.dispose(),r.dispose(),a.dispose(),o.dispose(),l.dispose()}}const Hc=new jt,po=new ji(1,1),Wc=new Rc,$c=new U_,Xc=new Uc,Nl=[],Fl=[],Ol=new Float32Array(16),Bl=new Float32Array(9),kl=new Float32Array(4);function es(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=Nl[s];if(r===void 0&&(r=new Float32Array(s),Nl[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function kt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Vt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Tr(i,e){let t=Fl[e];t===void 0&&(t=new Int32Array(e),Fl[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function _x(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function gx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;i.uniform2fv(this.addr,e),Vt(t,e)}}function vx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(kt(t,e))return;i.uniform3fv(this.addr,e),Vt(t,e)}}function xx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;i.uniform4fv(this.addr,e),Vt(t,e)}}function Mx(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Vt(t,e)}else{if(kt(t,n))return;kl.set(n),i.uniformMatrix2fv(this.addr,!1,kl),Vt(t,n)}}function Sx(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Vt(t,e)}else{if(kt(t,n))return;Bl.set(n),i.uniformMatrix3fv(this.addr,!1,Bl),Vt(t,n)}}function bx(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Vt(t,e)}else{if(kt(t,n))return;Ol.set(n),i.uniformMatrix4fv(this.addr,!1,Ol),Vt(t,n)}}function yx(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Ex(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;i.uniform2iv(this.addr,e),Vt(t,e)}}function Tx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;i.uniform3iv(this.addr,e),Vt(t,e)}}function Ax(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;i.uniform4iv(this.addr,e),Vt(t,e)}}function wx(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Rx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;i.uniform2uiv(this.addr,e),Vt(t,e)}}function Cx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;i.uniform3uiv(this.addr,e),Vt(t,e)}}function Px(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;i.uniform4uiv(this.addr,e),Vt(t,e)}}function Lx(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(po.compareFunction=t.isReversedDepthBuffer()?Oo:Fo,r=po):r=Hc,t.setTexture2D(e||r,s)}function Dx(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||$c,s)}function Ix(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Xc,s)}function Ux(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Wc,s)}function Nx(i){switch(i){case 5126:return _x;case 35664:return gx;case 35665:return vx;case 35666:return xx;case 35674:return Mx;case 35675:return Sx;case 35676:return bx;case 5124:case 35670:return yx;case 35667:case 35671:return Ex;case 35668:case 35672:return Tx;case 35669:case 35673:return Ax;case 5125:return wx;case 36294:return Rx;case 36295:return Cx;case 36296:return Px;case 35678:case 36198:case 36298:case 36306:case 35682:return Lx;case 35679:case 36299:case 36307:return Dx;case 35680:case 36300:case 36308:case 36293:return Ix;case 36289:case 36303:case 36311:case 36292:return Ux}}function Fx(i,e){i.uniform1fv(this.addr,e)}function Ox(i,e){const t=es(e,this.size,2);i.uniform2fv(this.addr,t)}function Bx(i,e){const t=es(e,this.size,3);i.uniform3fv(this.addr,t)}function kx(i,e){const t=es(e,this.size,4);i.uniform4fv(this.addr,t)}function Vx(i,e){const t=es(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function zx(i,e){const t=es(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Gx(i,e){const t=es(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Hx(i,e){i.uniform1iv(this.addr,e)}function Wx(i,e){i.uniform2iv(this.addr,e)}function $x(i,e){i.uniform3iv(this.addr,e)}function Xx(i,e){i.uniform4iv(this.addr,e)}function qx(i,e){i.uniform1uiv(this.addr,e)}function Yx(i,e){i.uniform2uiv(this.addr,e)}function Kx(i,e){i.uniform3uiv(this.addr,e)}function Zx(i,e){i.uniform4uiv(this.addr,e)}function jx(i,e,t){const n=this.cache,s=e.length,r=Tr(t,s);kt(n,r)||(i.uniform1iv(this.addr,r),Vt(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=po:a=Hc;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function Jx(i,e,t){const n=this.cache,s=e.length,r=Tr(t,s);kt(n,r)||(i.uniform1iv(this.addr,r),Vt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||$c,r[a])}function Qx(i,e,t){const n=this.cache,s=e.length,r=Tr(t,s);kt(n,r)||(i.uniform1iv(this.addr,r),Vt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Xc,r[a])}function eM(i,e,t){const n=this.cache,s=e.length,r=Tr(t,s);kt(n,r)||(i.uniform1iv(this.addr,r),Vt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Wc,r[a])}function tM(i){switch(i){case 5126:return Fx;case 35664:return Ox;case 35665:return Bx;case 35666:return kx;case 35674:return Vx;case 35675:return zx;case 35676:return Gx;case 5124:case 35670:return Hx;case 35667:case 35671:return Wx;case 35668:case 35672:return $x;case 35669:case 35673:return Xx;case 5125:return qx;case 36294:return Yx;case 36295:return Kx;case 36296:return Zx;case 35678:case 36198:case 36298:case 36306:case 35682:return jx;case 35679:case 36299:case 36307:return Jx;case 35680:case 36300:case 36308:case 36293:return Qx;case 36289:case 36303:case 36311:case 36292:return eM}}class nM{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Nx(t.type)}}class iM{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=tM(t.type)}}class sM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const da=/(\w+)(\])?(\[|\.)?/g;function Vl(i,e){i.seq.push(e),i.map[e.id]=e}function rM(i,e,t){const n=i.name,s=n.length;for(da.lastIndex=0;;){const r=da.exec(n),a=da.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Vl(t,c===void 0?new nM(o,i,e):new iM(o,i,e));break}else{let f=t.map[o];f===void 0&&(f=new sM(o),Vl(t,f)),t=f}}}class rr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);rM(o,l,this)}const s=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function zl(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const aM=37297;let oM=0;function lM(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Gl=new je;function cM(i){ct._getMatrix(Gl,ct.workingColorSpace,i);const e=`mat3( ${Gl.elements.map(t=>t.toFixed(4))} )`;switch(ct.getTransfer(i)){case ur:return[e,"LinearTransferOETF"];case bt:return[e,"sRGBTransferOETF"];default:return Ge("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Hl(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+lM(i.getShaderSource(e),o)}else return r}function uM(i,e){const t=cM(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const dM={[fc]:"Linear",[pc]:"Reinhard",[mc]:"Cineon",[Co]:"ACESFilmic",[gc]:"AgX",[vc]:"Neutral",[_c]:"Custom"};function hM(i,e){const t=dM[e];return t===void 0?(Ge("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const js=new F;function fM(){ct.getLuminanceCoefficients(js);const i=js.x.toFixed(4),e=js.y.toFixed(4),t=js.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function pM(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(hs).join(`
`)}function mM(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function _M(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function hs(i){return i!==""}function Wl(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function $l(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const gM=/^[ \t]*#include +<([\w\d./]+)>/gm;function mo(i){return i.replace(gM,xM)}const vM=new Map;function xM(i,e){let t=it[e];if(t===void 0){const n=vM.get(e);if(n!==void 0)t=it[n],Ge('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return mo(t)}const MM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xl(i){return i.replace(MM,SM)}function SM(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ql(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const bM={[Qs]:"SHADOWMAP_TYPE_PCF",[ds]:"SHADOWMAP_TYPE_VSM"};function yM(i){return bM[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const EM={[Si]:"ENVMAP_TYPE_CUBE",[Zi]:"ENVMAP_TYPE_CUBE",[br]:"ENVMAP_TYPE_CUBE_UV"};function TM(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":EM[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const AM={[Zi]:"ENVMAP_MODE_REFRACTION"};function wM(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":AM[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const RM={[hc]:"ENVMAP_BLENDING_MULTIPLY",[f_]:"ENVMAP_BLENDING_MIX",[p_]:"ENVMAP_BLENDING_ADD"};function CM(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":RM[i.combine]||"ENVMAP_BLENDING_NONE"}function PM(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function LM(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=yM(t),c=TM(t),d=wM(t),f=CM(t),u=PM(t),m=pM(t),g=mM(r),M=s.createProgram();let p,h,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(hs).join(`
`),p.length>0&&(p+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(hs).join(`
`),h.length>0&&(h+=`
`)):(p=[ql(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(hs).join(`
`),h=[ql(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ln?"#define TONE_MAPPING":"",t.toneMapping!==Ln?it.tonemapping_pars_fragment:"",t.toneMapping!==Ln?hM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",it.colorspace_pars_fragment,uM("linearToOutputTexel",t.outputColorSpace),fM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(hs).join(`
`)),a=mo(a),a=Wl(a,t),a=$l(a,t),o=mo(o),o=Wl(o,t),o=$l(o,t),a=Xl(a),o=Xl(o),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,h=["#define varying in",t.glslVersion===Qo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Qo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const T=S+p+a,y=S+h+o,L=zl(s,s.VERTEX_SHADER,T),E=zl(s,s.FRAGMENT_SHADER,y);s.attachShader(M,L),s.attachShader(M,E),t.index0AttributeName!==void 0?s.bindAttribLocation(M,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function D(R){if(i.debug.checkShaderErrors){const k=s.getProgramInfoLog(M)||"",q=s.getShaderInfoLog(L)||"",X=s.getShaderInfoLog(E)||"",B=k.trim(),G=q.trim(),$=X.trim();let ie=!0,re=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(ie=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,M,L,E);else{const _e=Hl(s,L,"vertex"),Re=Hl(s,E,"fragment");mt("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+B+`
`+_e+`
`+Re)}else B!==""?Ge("WebGLProgram: Program Info Log:",B):(G===""||$==="")&&(re=!1);re&&(R.diagnostics={runnable:ie,programLog:B,vertexShader:{log:G,prefix:p},fragmentShader:{log:$,prefix:h}})}s.deleteShader(L),s.deleteShader(E),x=new rr(s,M),A=_M(s,M)}let x;this.getUniforms=function(){return x===void 0&&D(this),x};let A;this.getAttributes=function(){return A===void 0&&D(this),A};let O=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return O===!1&&(O=s.getProgramParameter(M,aM)),O},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=oM++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=L,this.fragmentShader=E,this}let DM=0;class IM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new UM(e),t.set(e,n)),n}}class UM{constructor(e){this.id=DM++,this.code=e,this.usedTimes=0}}function NM(i){return i===bi||i===or||i===lr}function FM(i,e,t,n,s,r){const a=new Cc,o=new IM,l=new Set,c=[],d=new Map,f=n.logarithmicDepthBuffer;let u=n.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return l.add(x),x===0?"uv":`uv${x}`}function M(x,A,O,R,k,q){const X=R.fog,B=k.geometry,G=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?R.environment:null,$=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,ie=e.get(x.envMap||G,$),re=ie&&ie.mapping===br?ie.image.height:null,_e=m[x.type];x.precision!==null&&(u=n.getMaxPrecision(x.precision),u!==x.precision&&Ge("WebGLProgram.getParameters:",x.precision,"not supported, using",u,"instead."));const Re=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,De=Re!==void 0?Re.length:0;let lt=0;B.morphAttributes.position!==void 0&&(lt=1),B.morphAttributes.normal!==void 0&&(lt=2),B.morphAttributes.color!==void 0&&(lt=3);let St,Ze,ee,xe;if(_e){const Ye=Tn[_e];St=Ye.vertexShader,Ze=Ye.fragmentShader}else St=x.vertexShader,Ze=x.fragmentShader,o.update(x),ee=o.getVertexShaderID(x),xe=o.getFragmentShaderID(x);const pe=i.getRenderTarget(),Ve=i.state.buffers.depth.getReversed(),Xe=k.isInstancedMesh===!0,ze=k.isBatchedMesh===!0,Ct=!!x.map,ue=!!x.matcap,me=!!ie,He=!!x.aoMap,Ie=!!x.lightMap,at=!!x.bumpMap,ht=!!x.normalMap,Tt=!!x.displacementMap,C=!!x.emissiveMap,ft=!!x.metalnessMap,We=!!x.roughnessMap,et=x.anisotropy>0,ae=x.clearcoat>0,vt=x.dispersion>0,b=x.iridescence>0,_=x.sheen>0,I=x.transmission>0,j=et&&!!x.anisotropyMap,te=ae&&!!x.clearcoatMap,oe=ae&&!!x.clearcoatNormalMap,de=ae&&!!x.clearcoatRoughnessMap,K=b&&!!x.iridescenceMap,Q=b&&!!x.iridescenceThicknessMap,ge=_&&!!x.sheenColorMap,be=_&&!!x.sheenRoughnessMap,he=!!x.specularMap,le=!!x.specularColorMap,qe=!!x.specularIntensityMap,Ke=I&&!!x.transmissionMap,ot=I&&!!x.thicknessMap,P=!!x.gradientMap,ce=!!x.alphaMap,Z=x.alphaTest>0,Ee=!!x.alphaHash,fe=!!x.extensions;let ne=Ln;x.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(ne=i.toneMapping);const Pe={shaderID:_e,shaderType:x.type,shaderName:x.name,vertexShader:St,fragmentShader:Ze,defines:x.defines,customVertexShaderID:ee,customFragmentShaderID:xe,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:u,batching:ze,batchingColor:ze&&k._colorsTexture!==null,instancing:Xe,instancingColor:Xe&&k.instanceColor!==null,instancingMorph:Xe&&k.morphTexture!==null,outputColorSpace:pe===null?i.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:ct.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Ct,matcap:ue,envMap:me,envMapMode:me&&ie.mapping,envMapCubeUVHeight:re,aoMap:He,lightMap:Ie,bumpMap:at,normalMap:ht,displacementMap:Tt,emissiveMap:C,normalMapObjectSpace:ht&&x.normalMapType===g_,normalMapTangentSpace:ht&&x.normalMapType===oo,packedNormalMap:ht&&x.normalMapType===oo&&NM(x.normalMap.format),metalnessMap:ft,roughnessMap:We,anisotropy:et,anisotropyMap:j,clearcoat:ae,clearcoatMap:te,clearcoatNormalMap:oe,clearcoatRoughnessMap:de,dispersion:vt,iridescence:b,iridescenceMap:K,iridescenceThicknessMap:Q,sheen:_,sheenColorMap:ge,sheenRoughnessMap:be,specularMap:he,specularColorMap:le,specularIntensityMap:qe,transmission:I,transmissionMap:Ke,thicknessMap:ot,gradientMap:P,opaque:x.transparent===!1&&x.blending===qi&&x.alphaToCoverage===!1,alphaMap:ce,alphaTest:Z,alphaHash:Ee,combine:x.combine,mapUv:Ct&&g(x.map.channel),aoMapUv:He&&g(x.aoMap.channel),lightMapUv:Ie&&g(x.lightMap.channel),bumpMapUv:at&&g(x.bumpMap.channel),normalMapUv:ht&&g(x.normalMap.channel),displacementMapUv:Tt&&g(x.displacementMap.channel),emissiveMapUv:C&&g(x.emissiveMap.channel),metalnessMapUv:ft&&g(x.metalnessMap.channel),roughnessMapUv:We&&g(x.roughnessMap.channel),anisotropyMapUv:j&&g(x.anisotropyMap.channel),clearcoatMapUv:te&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:oe&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:de&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:K&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:Q&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:ge&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:be&&g(x.sheenRoughnessMap.channel),specularMapUv:he&&g(x.specularMap.channel),specularColorMapUv:le&&g(x.specularColorMap.channel),specularIntensityMapUv:qe&&g(x.specularIntensityMap.channel),transmissionMapUv:Ke&&g(x.transmissionMap.channel),thicknessMapUv:ot&&g(x.thicknessMap.channel),alphaMapUv:ce&&g(x.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(ht||et),vertexNormals:!!B.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!B.attributes.uv&&(Ct||ce),fog:!!X,useFog:x.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||B.attributes.normal===void 0&&ht===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Ve,skinning:k.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:De,morphTextureStride:lt,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:q.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&O.length>0,shadowMapType:i.shadowMap.type,toneMapping:ne,decodeVideoTexture:Ct&&x.map.isVideoTexture===!0&&ct.getTransfer(x.map.colorSpace)===bt,decodeVideoTextureEmissive:C&&x.emissiveMap.isVideoTexture===!0&&ct.getTransfer(x.emissiveMap.colorSpace)===bt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Gn,flipSided:x.side===en,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:fe&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(fe&&x.extensions.multiDraw===!0||ze)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Pe.vertexUv1s=l.has(1),Pe.vertexUv2s=l.has(2),Pe.vertexUv3s=l.has(3),l.clear(),Pe}function p(x){const A=[];if(x.shaderID?A.push(x.shaderID):(A.push(x.customVertexShaderID),A.push(x.customFragmentShaderID)),x.defines!==void 0)for(const O in x.defines)A.push(O),A.push(x.defines[O]);return x.isRawShaderMaterial===!1&&(h(A,x),S(A,x),A.push(i.outputColorSpace)),A.push(x.customProgramCacheKey),A.join()}function h(x,A){x.push(A.precision),x.push(A.outputColorSpace),x.push(A.envMapMode),x.push(A.envMapCubeUVHeight),x.push(A.mapUv),x.push(A.alphaMapUv),x.push(A.lightMapUv),x.push(A.aoMapUv),x.push(A.bumpMapUv),x.push(A.normalMapUv),x.push(A.displacementMapUv),x.push(A.emissiveMapUv),x.push(A.metalnessMapUv),x.push(A.roughnessMapUv),x.push(A.anisotropyMapUv),x.push(A.clearcoatMapUv),x.push(A.clearcoatNormalMapUv),x.push(A.clearcoatRoughnessMapUv),x.push(A.iridescenceMapUv),x.push(A.iridescenceThicknessMapUv),x.push(A.sheenColorMapUv),x.push(A.sheenRoughnessMapUv),x.push(A.specularMapUv),x.push(A.specularColorMapUv),x.push(A.specularIntensityMapUv),x.push(A.transmissionMapUv),x.push(A.thicknessMapUv),x.push(A.combine),x.push(A.fogExp2),x.push(A.sizeAttenuation),x.push(A.morphTargetsCount),x.push(A.morphAttributeCount),x.push(A.numDirLights),x.push(A.numPointLights),x.push(A.numSpotLights),x.push(A.numSpotLightMaps),x.push(A.numHemiLights),x.push(A.numRectAreaLights),x.push(A.numDirLightShadows),x.push(A.numPointLightShadows),x.push(A.numSpotLightShadows),x.push(A.numSpotLightShadowsWithMaps),x.push(A.numLightProbes),x.push(A.shadowMapType),x.push(A.toneMapping),x.push(A.numClippingPlanes),x.push(A.numClipIntersection),x.push(A.depthPacking)}function S(x,A){a.disableAll(),A.instancing&&a.enable(0),A.instancingColor&&a.enable(1),A.instancingMorph&&a.enable(2),A.matcap&&a.enable(3),A.envMap&&a.enable(4),A.normalMapObjectSpace&&a.enable(5),A.normalMapTangentSpace&&a.enable(6),A.clearcoat&&a.enable(7),A.iridescence&&a.enable(8),A.alphaTest&&a.enable(9),A.vertexColors&&a.enable(10),A.vertexAlphas&&a.enable(11),A.vertexUv1s&&a.enable(12),A.vertexUv2s&&a.enable(13),A.vertexUv3s&&a.enable(14),A.vertexTangents&&a.enable(15),A.anisotropy&&a.enable(16),A.alphaHash&&a.enable(17),A.batching&&a.enable(18),A.dispersion&&a.enable(19),A.batchingColor&&a.enable(20),A.gradientMap&&a.enable(21),A.packedNormalMap&&a.enable(22),A.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.reversedDepthBuffer&&a.enable(4),A.skinning&&a.enable(5),A.morphTargets&&a.enable(6),A.morphNormals&&a.enable(7),A.morphColors&&a.enable(8),A.premultipliedAlpha&&a.enable(9),A.shadowMapEnabled&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),A.decodeVideoTextureEmissive&&a.enable(20),A.alphaToCoverage&&a.enable(21),A.numLightProbeGrids>0&&a.enable(22),x.push(a.mask)}function T(x){const A=m[x.type];let O;if(A){const R=Tn[A];O=ng.clone(R.uniforms)}else O=x.uniforms;return O}function y(x,A){let O=d.get(A);return O!==void 0?++O.usedTimes:(O=new LM(i,A,x,s),c.push(O),d.set(A,O)),O}function L(x){if(--x.usedTimes===0){const A=c.indexOf(x);c[A]=c[c.length-1],c.pop(),d.delete(x.cacheKey),x.destroy()}}function E(x){o.remove(x)}function D(){o.dispose()}return{getParameters:M,getProgramCacheKey:p,getUniforms:T,acquireProgram:y,releaseProgram:L,releaseShaderCache:E,programs:c,dispose:D}}function OM(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function BM(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Yl(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Kl(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(u){let m=0;return u.isInstancedMesh&&(m+=2),u.isSkinnedMesh&&(m+=1),m}function o(u,m,g,M,p,h){let S=i[e];return S===void 0?(S={id:u.id,object:u,geometry:m,material:g,materialVariant:a(u),groupOrder:M,renderOrder:u.renderOrder,z:p,group:h},i[e]=S):(S.id=u.id,S.object=u,S.geometry=m,S.material=g,S.materialVariant=a(u),S.groupOrder=M,S.renderOrder=u.renderOrder,S.z=p,S.group=h),e++,S}function l(u,m,g,M,p,h){const S=o(u,m,g,M,p,h);g.transmission>0?n.push(S):g.transparent===!0?s.push(S):t.push(S)}function c(u,m,g,M,p,h){const S=o(u,m,g,M,p,h);g.transmission>0?n.unshift(S):g.transparent===!0?s.unshift(S):t.unshift(S)}function d(u,m){t.length>1&&t.sort(u||BM),n.length>1&&n.sort(m||Yl),s.length>1&&s.sort(m||Yl)}function f(){for(let u=e,m=i.length;u<m;u++){const g=i[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:f,sort:d}}function kM(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new Kl,i.set(n,[a])):s>=r.length?(a=new Kl,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function VM(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new _t};break;case"SpotLight":t={position:new F,direction:new F,color:new _t,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new _t,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new _t,groundColor:new _t};break;case"RectAreaLight":t={color:new _t,position:new F,halfWidth:new F,halfHeight:new F};break}return i[e.id]=t,t}}}function zM(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let GM=0;function HM(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function WM(i){const e=new VM,t=zM(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new F);const s=new F,r=new Lt,a=new Lt;function o(c){let d=0,f=0,u=0;for(let A=0;A<9;A++)n.probe[A].set(0,0,0);let m=0,g=0,M=0,p=0,h=0,S=0,T=0,y=0,L=0,E=0,D=0;c.sort(HM);for(let A=0,O=c.length;A<O;A++){const R=c[A],k=R.color,q=R.intensity,X=R.distance;let B=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===bi?B=R.shadow.map.texture:B=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)d+=k.r*q,f+=k.g*q,u+=k.b*q;else if(R.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(R.sh.coefficients[G],q);D++}else if(R.isDirectionalLight){const G=e.get(R);if(G.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const $=R.shadow,ie=t.get(R);ie.shadowIntensity=$.intensity,ie.shadowBias=$.bias,ie.shadowNormalBias=$.normalBias,ie.shadowRadius=$.radius,ie.shadowMapSize=$.mapSize,n.directionalShadow[m]=ie,n.directionalShadowMap[m]=B,n.directionalShadowMatrix[m]=R.shadow.matrix,S++}n.directional[m]=G,m++}else if(R.isSpotLight){const G=e.get(R);G.position.setFromMatrixPosition(R.matrixWorld),G.color.copy(k).multiplyScalar(q),G.distance=X,G.coneCos=Math.cos(R.angle),G.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),G.decay=R.decay,n.spot[M]=G;const $=R.shadow;if(R.map&&(n.spotLightMap[L]=R.map,L++,$.updateMatrices(R),R.castShadow&&E++),n.spotLightMatrix[M]=$.matrix,R.castShadow){const ie=t.get(R);ie.shadowIntensity=$.intensity,ie.shadowBias=$.bias,ie.shadowNormalBias=$.normalBias,ie.shadowRadius=$.radius,ie.shadowMapSize=$.mapSize,n.spotShadow[M]=ie,n.spotShadowMap[M]=B,y++}M++}else if(R.isRectAreaLight){const G=e.get(R);G.color.copy(k).multiplyScalar(q),G.halfWidth.set(R.width*.5,0,0),G.halfHeight.set(0,R.height*.5,0),n.rectArea[p]=G,p++}else if(R.isPointLight){const G=e.get(R);if(G.color.copy(R.color).multiplyScalar(R.intensity),G.distance=R.distance,G.decay=R.decay,R.castShadow){const $=R.shadow,ie=t.get(R);ie.shadowIntensity=$.intensity,ie.shadowBias=$.bias,ie.shadowNormalBias=$.normalBias,ie.shadowRadius=$.radius,ie.shadowMapSize=$.mapSize,ie.shadowCameraNear=$.camera.near,ie.shadowCameraFar=$.camera.far,n.pointShadow[g]=ie,n.pointShadowMap[g]=B,n.pointShadowMatrix[g]=R.shadow.matrix,T++}n.point[g]=G,g++}else if(R.isHemisphereLight){const G=e.get(R);G.skyColor.copy(R.color).multiplyScalar(q),G.groundColor.copy(R.groundColor).multiplyScalar(q),n.hemi[h]=G,h++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ve.LTC_FLOAT_1,n.rectAreaLTC2=ve.LTC_FLOAT_2):(n.rectAreaLTC1=ve.LTC_HALF_1,n.rectAreaLTC2=ve.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=f,n.ambient[2]=u;const x=n.hash;(x.directionalLength!==m||x.pointLength!==g||x.spotLength!==M||x.rectAreaLength!==p||x.hemiLength!==h||x.numDirectionalShadows!==S||x.numPointShadows!==T||x.numSpotShadows!==y||x.numSpotMaps!==L||x.numLightProbes!==D)&&(n.directional.length=m,n.spot.length=M,n.rectArea.length=p,n.point.length=g,n.hemi.length=h,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=T,n.pointShadowMap.length=T,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=T,n.spotLightMatrix.length=y+L-E,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=D,x.directionalLength=m,x.pointLength=g,x.spotLength=M,x.rectAreaLength=p,x.hemiLength=h,x.numDirectionalShadows=S,x.numPointShadows=T,x.numSpotShadows=y,x.numSpotMaps=L,x.numLightProbes=D,n.version=GM++)}function l(c,d){let f=0,u=0,m=0,g=0,M=0;const p=d.matrixWorldInverse;for(let h=0,S=c.length;h<S;h++){const T=c[h];if(T.isDirectionalLight){const y=n.directional[f];y.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(p),f++}else if(T.isSpotLight){const y=n.spot[m];y.position.setFromMatrixPosition(T.matrixWorld),y.position.applyMatrix4(p),y.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(p),m++}else if(T.isRectAreaLight){const y=n.rectArea[g];y.position.setFromMatrixPosition(T.matrixWorld),y.position.applyMatrix4(p),a.identity(),r.copy(T.matrixWorld),r.premultiply(p),a.extractRotation(r),y.halfWidth.set(T.width*.5,0,0),y.halfHeight.set(0,T.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),g++}else if(T.isPointLight){const y=n.point[u];y.position.setFromMatrixPosition(T.matrixWorld),y.position.applyMatrix4(p),u++}else if(T.isHemisphereLight){const y=n.hemi[M];y.direction.setFromMatrixPosition(T.matrixWorld),y.direction.transformDirection(p),M++}}}return{setup:o,setupView:l,state:n}}function Zl(i){const e=new WM(i),t=[],n=[],s=[];function r(u){f.camera=u,t.length=0,n.length=0,s.length=0}function a(u){t.push(u)}function o(u){n.push(u)}function l(u){s.push(u)}function c(){e.setup(t)}function d(u){e.setupView(t,u)}const f={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:c,setupLightsView:d,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function $M(i){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new Zl(i),e.set(s,[o])):r>=a.length?(o=new Zl(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const XM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,qM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,YM=[new F(1,0,0),new F(-1,0,0),new F(0,1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1)],KM=[new F(0,-1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1),new F(0,-1,0),new F(0,-1,0)],jl=new Lt,us=new F,ha=new F;function ZM(i,e,t){let n=new zo;const s=new gt,r=new gt,a=new It,o=new ag,l=new og,c={},d=t.maxTextureSize,f={[li]:en,[en]:li,[Gn]:Gn},u=new Un({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new gt},radius:{value:4}},vertexShader:XM,fragmentShader:qM}),m=u.clone();m.defines.HORIZONTAL_PASS=1;const g=new Bt;g.setAttribute("position",new xn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new Sn(g,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Qs;let h=this.type;this.render=function(E,D,x){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;this.type===Ym&&(Ge("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Qs);const A=i.getRenderTarget(),O=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),k=i.state;k.setBlending(Wn),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const q=h!==this.type;q&&D.traverse(function(X){X.material&&(Array.isArray(X.material)?X.material.forEach(B=>B.needsUpdate=!0):X.material.needsUpdate=!0)});for(let X=0,B=E.length;X<B;X++){const G=E[X],$=G.shadow;if($===void 0){Ge("WebGLShadowMap:",G,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;s.copy($.mapSize);const ie=$.getFrameExtents();s.multiply(ie),r.copy($.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/ie.x),s.x=r.x*ie.x,$.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/ie.y),s.y=r.y*ie.y,$.mapSize.y=r.y));const re=i.state.buffers.depth.getReversed();if($.camera._reversedDepth=re,$.map===null||q===!0){if($.map!==null&&($.map.depthTexture!==null&&($.map.depthTexture.dispose(),$.map.depthTexture=null),$.map.dispose()),this.type===ds){if(G.isPointLight){Ge("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}$.map=new Dn(s.x,s.y,{format:bi,type:Xn,minFilter:Kt,magFilter:Kt,generateMipmaps:!1}),$.map.texture.name=G.name+".shadowMap",$.map.depthTexture=new ji(s.x,s.y,An),$.map.depthTexture.name=G.name+".shadowMapDepth",$.map.depthTexture.format=qn,$.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=$t,$.map.depthTexture.magFilter=$t}else G.isPointLight?($.map=new Gc(s.x),$.map.depthTexture=new Q_(s.x,In)):($.map=new Dn(s.x,s.y),$.map.depthTexture=new ji(s.x,s.y,In)),$.map.depthTexture.name=G.name+".shadowMap",$.map.depthTexture.format=qn,this.type===Qs?($.map.depthTexture.compareFunction=re?Oo:Fo,$.map.depthTexture.minFilter=Kt,$.map.depthTexture.magFilter=Kt):($.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=$t,$.map.depthTexture.magFilter=$t);$.camera.updateProjectionMatrix()}const _e=$.map.isWebGLCubeRenderTarget?6:1;for(let Re=0;Re<_e;Re++){if($.map.isWebGLCubeRenderTarget)i.setRenderTarget($.map,Re),i.clear();else{Re===0&&(i.setRenderTarget($.map),i.clear());const De=$.getViewport(Re);a.set(r.x*De.x,r.y*De.y,r.x*De.z,r.y*De.w),k.viewport(a)}if(G.isPointLight){const De=$.camera,lt=$.matrix,St=G.distance||De.far;St!==De.far&&(De.far=St,De.updateProjectionMatrix()),us.setFromMatrixPosition(G.matrixWorld),De.position.copy(us),ha.copy(De.position),ha.add(YM[Re]),De.up.copy(KM[Re]),De.lookAt(ha),De.updateMatrixWorld(),lt.makeTranslation(-us.x,-us.y,-us.z),jl.multiplyMatrices(De.projectionMatrix,De.matrixWorldInverse),$._frustum.setFromProjectionMatrix(jl,De.coordinateSystem,De.reversedDepth)}else $.updateMatrices(G);n=$.getFrustum(),y(D,x,$.camera,G,this.type)}$.isPointLightShadow!==!0&&this.type===ds&&S($,x),$.needsUpdate=!1}h=this.type,p.needsUpdate=!1,i.setRenderTarget(A,O,R)};function S(E,D){const x=e.update(M);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,m.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,m.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Dn(s.x,s.y,{format:bi,type:Xn})),u.uniforms.shadow_pass.value=E.map.depthTexture,u.uniforms.resolution.value=E.mapSize,u.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(D,null,x,u,M,null),m.uniforms.shadow_pass.value=E.mapPass.texture,m.uniforms.resolution.value=E.mapSize,m.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(D,null,x,m,M,null)}function T(E,D,x,A){let O=null;const R=x.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(R!==void 0)O=R;else if(O=x.isPointLight===!0?l:o,i.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){const k=O.uuid,q=D.uuid;let X=c[k];X===void 0&&(X={},c[k]=X);let B=X[q];B===void 0&&(B=O.clone(),X[q]=B,D.addEventListener("dispose",L)),O=B}if(O.visible=D.visible,O.wireframe=D.wireframe,A===ds?O.side=D.shadowSide!==null?D.shadowSide:D.side:O.side=D.shadowSide!==null?D.shadowSide:f[D.side],O.alphaMap=D.alphaMap,O.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,O.map=D.map,O.clipShadows=D.clipShadows,O.clippingPlanes=D.clippingPlanes,O.clipIntersection=D.clipIntersection,O.displacementMap=D.displacementMap,O.displacementScale=D.displacementScale,O.displacementBias=D.displacementBias,O.wireframeLinewidth=D.wireframeLinewidth,O.linewidth=D.linewidth,x.isPointLight===!0&&O.isMeshDistanceMaterial===!0){const k=i.properties.get(O);k.light=x}return O}function y(E,D,x,A,O){if(E.visible===!1)return;if(E.layers.test(D.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&O===ds)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,E.matrixWorld);const q=e.update(E),X=E.material;if(Array.isArray(X)){const B=q.groups;for(let G=0,$=B.length;G<$;G++){const ie=B[G],re=X[ie.materialIndex];if(re&&re.visible){const _e=T(E,re,A,O);E.onBeforeShadow(i,E,D,x,q,_e,ie),i.renderBufferDirect(x,null,q,_e,E,ie),E.onAfterShadow(i,E,D,x,q,_e,ie)}}}else if(X.visible){const B=T(E,X,A,O);E.onBeforeShadow(i,E,D,x,q,B,null),i.renderBufferDirect(x,null,q,B,E,null),E.onAfterShadow(i,E,D,x,q,B,null)}}const k=E.children;for(let q=0,X=k.length;q<X;q++)y(k[q],D,x,A,O)}function L(E){E.target.removeEventListener("dispose",L);for(const x in c){const A=c[x],O=E.target.uuid;O in A&&(A[O].dispose(),delete A[O])}}}function jM(i,e){function t(){let P=!1;const ce=new It;let Z=null;const Ee=new It(0,0,0,0);return{setMask:function(fe){Z!==fe&&!P&&(i.colorMask(fe,fe,fe,fe),Z=fe)},setLocked:function(fe){P=fe},setClear:function(fe,ne,Pe,Ye,Pt){Pt===!0&&(fe*=Ye,ne*=Ye,Pe*=Ye),ce.set(fe,ne,Pe,Ye),Ee.equals(ce)===!1&&(i.clearColor(fe,ne,Pe,Ye),Ee.copy(ce))},reset:function(){P=!1,Z=null,Ee.set(-1,0,0,0)}}}function n(){let P=!1,ce=!1,Z=null,Ee=null,fe=null;return{setReversed:function(ne){if(ce!==ne){const Pe=e.get("EXT_clip_control");ne?Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.ZERO_TO_ONE_EXT):Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.NEGATIVE_ONE_TO_ONE_EXT),ce=ne;const Ye=fe;fe=null,this.setClear(Ye)}},getReversed:function(){return ce},setTest:function(ne){ne?pe(i.DEPTH_TEST):Ve(i.DEPTH_TEST)},setMask:function(ne){Z!==ne&&!P&&(i.depthMask(ne),Z=ne)},setFunc:function(ne){if(ce&&(ne=w_[ne]),Ee!==ne){switch(ne){case ba:i.depthFunc(i.NEVER);break;case ya:i.depthFunc(i.ALWAYS);break;case Ea:i.depthFunc(i.LESS);break;case Ki:i.depthFunc(i.LEQUAL);break;case Ta:i.depthFunc(i.EQUAL);break;case Aa:i.depthFunc(i.GEQUAL);break;case wa:i.depthFunc(i.GREATER);break;case Ra:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ee=ne}},setLocked:function(ne){P=ne},setClear:function(ne){fe!==ne&&(fe=ne,ce&&(ne=1-ne),i.clearDepth(ne))},reset:function(){P=!1,Z=null,Ee=null,fe=null,ce=!1}}}function s(){let P=!1,ce=null,Z=null,Ee=null,fe=null,ne=null,Pe=null,Ye=null,Pt=null;return{setTest:function(xt){P||(xt?pe(i.STENCIL_TEST):Ve(i.STENCIL_TEST))},setMask:function(xt){ce!==xt&&!P&&(i.stencilMask(xt),ce=xt)},setFunc:function(xt,tn,Jt){(Z!==xt||Ee!==tn||fe!==Jt)&&(i.stencilFunc(xt,tn,Jt),Z=xt,Ee=tn,fe=Jt)},setOp:function(xt,tn,Jt){(ne!==xt||Pe!==tn||Ye!==Jt)&&(i.stencilOp(xt,tn,Jt),ne=xt,Pe=tn,Ye=Jt)},setLocked:function(xt){P=xt},setClear:function(xt){Pt!==xt&&(i.clearStencil(xt),Pt=xt)},reset:function(){P=!1,ce=null,Z=null,Ee=null,fe=null,ne=null,Pe=null,Ye=null,Pt=null}}}const r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap;let d={},f={},u={},m=new WeakMap,g=[],M=null,p=!1,h=null,S=null,T=null,y=null,L=null,E=null,D=null,x=new _t(0,0,0),A=0,O=!1,R=null,k=null,q=null,X=null,B=null;const G=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,ie=0;const re=i.getParameter(i.VERSION);re.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(re)[1]),$=ie>=1):re.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(re)[1]),$=ie>=2);let _e=null,Re={};const De=i.getParameter(i.SCISSOR_BOX),lt=i.getParameter(i.VIEWPORT),St=new It().fromArray(De),Ze=new It().fromArray(lt);function ee(P,ce,Z,Ee){const fe=new Uint8Array(4),ne=i.createTexture();i.bindTexture(P,ne),i.texParameteri(P,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(P,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Pe=0;Pe<Z;Pe++)P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY?i.texImage3D(ce,0,i.RGBA,1,1,Ee,0,i.RGBA,i.UNSIGNED_BYTE,fe):i.texImage2D(ce+Pe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,fe);return ne}const xe={};xe[i.TEXTURE_2D]=ee(i.TEXTURE_2D,i.TEXTURE_2D,1),xe[i.TEXTURE_CUBE_MAP]=ee(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),xe[i.TEXTURE_2D_ARRAY]=ee(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),xe[i.TEXTURE_3D]=ee(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),pe(i.DEPTH_TEST),a.setFunc(Ki),at(!1),ht(Yo),pe(i.CULL_FACE),He(Wn);function pe(P){d[P]!==!0&&(i.enable(P),d[P]=!0)}function Ve(P){d[P]!==!1&&(i.disable(P),d[P]=!1)}function Xe(P,ce){return u[P]!==ce?(i.bindFramebuffer(P,ce),u[P]=ce,P===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ce),P===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ce),!0):!1}function ze(P,ce){let Z=g,Ee=!1;if(P){Z=m.get(ce),Z===void 0&&(Z=[],m.set(ce,Z));const fe=P.textures;if(Z.length!==fe.length||Z[0]!==i.COLOR_ATTACHMENT0){for(let ne=0,Pe=fe.length;ne<Pe;ne++)Z[ne]=i.COLOR_ATTACHMENT0+ne;Z.length=fe.length,Ee=!0}}else Z[0]!==i.BACK&&(Z[0]=i.BACK,Ee=!0);Ee&&i.drawBuffers(Z)}function Ct(P){return M!==P?(i.useProgram(P),M=P,!0):!1}const ue={[_i]:i.FUNC_ADD,[Zm]:i.FUNC_SUBTRACT,[jm]:i.FUNC_REVERSE_SUBTRACT};ue[Jm]=i.MIN,ue[Qm]=i.MAX;const me={[e_]:i.ZERO,[t_]:i.ONE,[n_]:i.SRC_COLOR,[Ma]:i.SRC_ALPHA,[l_]:i.SRC_ALPHA_SATURATE,[a_]:i.DST_COLOR,[s_]:i.DST_ALPHA,[i_]:i.ONE_MINUS_SRC_COLOR,[Sa]:i.ONE_MINUS_SRC_ALPHA,[o_]:i.ONE_MINUS_DST_COLOR,[r_]:i.ONE_MINUS_DST_ALPHA,[c_]:i.CONSTANT_COLOR,[u_]:i.ONE_MINUS_CONSTANT_COLOR,[d_]:i.CONSTANT_ALPHA,[h_]:i.ONE_MINUS_CONSTANT_ALPHA};function He(P,ce,Z,Ee,fe,ne,Pe,Ye,Pt,xt){if(P===Wn){p===!0&&(Ve(i.BLEND),p=!1);return}if(p===!1&&(pe(i.BLEND),p=!0),P!==Km){if(P!==h||xt!==O){if((S!==_i||L!==_i)&&(i.blendEquation(i.FUNC_ADD),S=_i,L=_i),xt)switch(P){case qi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case xa:i.blendFunc(i.ONE,i.ONE);break;case Ko:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Zo:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:mt("WebGLState: Invalid blending: ",P);break}else switch(P){case qi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case xa:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Ko:mt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Zo:mt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:mt("WebGLState: Invalid blending: ",P);break}T=null,y=null,E=null,D=null,x.set(0,0,0),A=0,h=P,O=xt}return}fe=fe||ce,ne=ne||Z,Pe=Pe||Ee,(ce!==S||fe!==L)&&(i.blendEquationSeparate(ue[ce],ue[fe]),S=ce,L=fe),(Z!==T||Ee!==y||ne!==E||Pe!==D)&&(i.blendFuncSeparate(me[Z],me[Ee],me[ne],me[Pe]),T=Z,y=Ee,E=ne,D=Pe),(Ye.equals(x)===!1||Pt!==A)&&(i.blendColor(Ye.r,Ye.g,Ye.b,Pt),x.copy(Ye),A=Pt),h=P,O=!1}function Ie(P,ce){P.side===Gn?Ve(i.CULL_FACE):pe(i.CULL_FACE);let Z=P.side===en;ce&&(Z=!Z),at(Z),P.blending===qi&&P.transparent===!1?He(Wn):He(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),a.setFunc(P.depthFunc),a.setTest(P.depthTest),a.setMask(P.depthWrite),r.setMask(P.colorWrite);const Ee=P.stencilWrite;o.setTest(Ee),Ee&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),C(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?pe(i.SAMPLE_ALPHA_TO_COVERAGE):Ve(i.SAMPLE_ALPHA_TO_COVERAGE)}function at(P){R!==P&&(P?i.frontFace(i.CW):i.frontFace(i.CCW),R=P)}function ht(P){P!==Xm?(pe(i.CULL_FACE),P!==k&&(P===Yo?i.cullFace(i.BACK):P===qm?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ve(i.CULL_FACE),k=P}function Tt(P){P!==q&&($&&i.lineWidth(P),q=P)}function C(P,ce,Z){P?(pe(i.POLYGON_OFFSET_FILL),(X!==ce||B!==Z)&&(X=ce,B=Z,a.getReversed()&&(ce=-ce),i.polygonOffset(ce,Z))):Ve(i.POLYGON_OFFSET_FILL)}function ft(P){P?pe(i.SCISSOR_TEST):Ve(i.SCISSOR_TEST)}function We(P){P===void 0&&(P=i.TEXTURE0+G-1),_e!==P&&(i.activeTexture(P),_e=P)}function et(P,ce,Z){Z===void 0&&(_e===null?Z=i.TEXTURE0+G-1:Z=_e);let Ee=Re[Z];Ee===void 0&&(Ee={type:void 0,texture:void 0},Re[Z]=Ee),(Ee.type!==P||Ee.texture!==ce)&&(_e!==Z&&(i.activeTexture(Z),_e=Z),i.bindTexture(P,ce||xe[P]),Ee.type=P,Ee.texture=ce)}function ae(){const P=Re[_e];P!==void 0&&P.type!==void 0&&(i.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function vt(){try{i.compressedTexImage2D(...arguments)}catch(P){mt("WebGLState:",P)}}function b(){try{i.compressedTexImage3D(...arguments)}catch(P){mt("WebGLState:",P)}}function _(){try{i.texSubImage2D(...arguments)}catch(P){mt("WebGLState:",P)}}function I(){try{i.texSubImage3D(...arguments)}catch(P){mt("WebGLState:",P)}}function j(){try{i.compressedTexSubImage2D(...arguments)}catch(P){mt("WebGLState:",P)}}function te(){try{i.compressedTexSubImage3D(...arguments)}catch(P){mt("WebGLState:",P)}}function oe(){try{i.texStorage2D(...arguments)}catch(P){mt("WebGLState:",P)}}function de(){try{i.texStorage3D(...arguments)}catch(P){mt("WebGLState:",P)}}function K(){try{i.texImage2D(...arguments)}catch(P){mt("WebGLState:",P)}}function Q(){try{i.texImage3D(...arguments)}catch(P){mt("WebGLState:",P)}}function ge(P){return f[P]!==void 0?f[P]:i.getParameter(P)}function be(P,ce){f[P]!==ce&&(i.pixelStorei(P,ce),f[P]=ce)}function he(P){St.equals(P)===!1&&(i.scissor(P.x,P.y,P.z,P.w),St.copy(P))}function le(P){Ze.equals(P)===!1&&(i.viewport(P.x,P.y,P.z,P.w),Ze.copy(P))}function qe(P,ce){let Z=c.get(ce);Z===void 0&&(Z=new WeakMap,c.set(ce,Z));let Ee=Z.get(P);Ee===void 0&&(Ee=i.getUniformBlockIndex(ce,P.name),Z.set(P,Ee))}function Ke(P,ce){const Ee=c.get(ce).get(P);l.get(ce)!==Ee&&(i.uniformBlockBinding(ce,Ee,P.__bindingPointIndex),l.set(ce,Ee))}function ot(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),d={},f={},_e=null,Re={},u={},m=new WeakMap,g=[],M=null,p=!1,h=null,S=null,T=null,y=null,L=null,E=null,D=null,x=new _t(0,0,0),A=0,O=!1,R=null,k=null,q=null,X=null,B=null,St.set(0,0,i.canvas.width,i.canvas.height),Ze.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:pe,disable:Ve,bindFramebuffer:Xe,drawBuffers:ze,useProgram:Ct,setBlending:He,setMaterial:Ie,setFlipSided:at,setCullFace:ht,setLineWidth:Tt,setPolygonOffset:C,setScissorTest:ft,activeTexture:We,bindTexture:et,unbindTexture:ae,compressedTexImage2D:vt,compressedTexImage3D:b,texImage2D:K,texImage3D:Q,pixelStorei:be,getParameter:ge,updateUBOMapping:qe,uniformBlockBinding:Ke,texStorage2D:oe,texStorage3D:de,texSubImage2D:_,texSubImage3D:I,compressedTexSubImage2D:j,compressedTexSubImage3D:te,scissor:he,viewport:le,reset:ot}}function JM(i,e,t,n,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new gt,d=new WeakMap,f=new Set;let u;const m=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(b,_){return g?new OffscreenCanvas(b,_):dr("canvas")}function p(b,_,I){let j=1;const te=vt(b);if((te.width>I||te.height>I)&&(j=I/Math.max(te.width,te.height)),j<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const oe=Math.floor(j*te.width),de=Math.floor(j*te.height);u===void 0&&(u=M(oe,de));const K=_?M(oe,de):u;return K.width=oe,K.height=de,K.getContext("2d").drawImage(b,0,0,oe,de),Ge("WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+oe+"x"+de+")."),K}else return"data"in b&&Ge("WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),b;return b}function h(b){return b.generateMipmaps}function S(b){i.generateMipmap(b)}function T(b){return b.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?i.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(b,_,I,j,te,oe=!1){if(b!==null){if(i[b]!==void 0)return i[b];Ge("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let de;j&&(de=e.get("EXT_texture_norm16"),de||Ge("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let K=_;if(_===i.RED&&(I===i.FLOAT&&(K=i.R32F),I===i.HALF_FLOAT&&(K=i.R16F),I===i.UNSIGNED_BYTE&&(K=i.R8),I===i.UNSIGNED_SHORT&&de&&(K=de.R16_EXT),I===i.SHORT&&de&&(K=de.R16_SNORM_EXT)),_===i.RED_INTEGER&&(I===i.UNSIGNED_BYTE&&(K=i.R8UI),I===i.UNSIGNED_SHORT&&(K=i.R16UI),I===i.UNSIGNED_INT&&(K=i.R32UI),I===i.BYTE&&(K=i.R8I),I===i.SHORT&&(K=i.R16I),I===i.INT&&(K=i.R32I)),_===i.RG&&(I===i.FLOAT&&(K=i.RG32F),I===i.HALF_FLOAT&&(K=i.RG16F),I===i.UNSIGNED_BYTE&&(K=i.RG8),I===i.UNSIGNED_SHORT&&de&&(K=de.RG16_EXT),I===i.SHORT&&de&&(K=de.RG16_SNORM_EXT)),_===i.RG_INTEGER&&(I===i.UNSIGNED_BYTE&&(K=i.RG8UI),I===i.UNSIGNED_SHORT&&(K=i.RG16UI),I===i.UNSIGNED_INT&&(K=i.RG32UI),I===i.BYTE&&(K=i.RG8I),I===i.SHORT&&(K=i.RG16I),I===i.INT&&(K=i.RG32I)),_===i.RGB_INTEGER&&(I===i.UNSIGNED_BYTE&&(K=i.RGB8UI),I===i.UNSIGNED_SHORT&&(K=i.RGB16UI),I===i.UNSIGNED_INT&&(K=i.RGB32UI),I===i.BYTE&&(K=i.RGB8I),I===i.SHORT&&(K=i.RGB16I),I===i.INT&&(K=i.RGB32I)),_===i.RGBA_INTEGER&&(I===i.UNSIGNED_BYTE&&(K=i.RGBA8UI),I===i.UNSIGNED_SHORT&&(K=i.RGBA16UI),I===i.UNSIGNED_INT&&(K=i.RGBA32UI),I===i.BYTE&&(K=i.RGBA8I),I===i.SHORT&&(K=i.RGBA16I),I===i.INT&&(K=i.RGBA32I)),_===i.RGB&&(I===i.UNSIGNED_SHORT&&de&&(K=de.RGB16_EXT),I===i.SHORT&&de&&(K=de.RGB16_SNORM_EXT),I===i.UNSIGNED_INT_5_9_9_9_REV&&(K=i.RGB9_E5),I===i.UNSIGNED_INT_10F_11F_11F_REV&&(K=i.R11F_G11F_B10F)),_===i.RGBA){const Q=oe?ur:ct.getTransfer(te);I===i.FLOAT&&(K=i.RGBA32F),I===i.HALF_FLOAT&&(K=i.RGBA16F),I===i.UNSIGNED_BYTE&&(K=Q===bt?i.SRGB8_ALPHA8:i.RGBA8),I===i.UNSIGNED_SHORT&&de&&(K=de.RGBA16_EXT),I===i.SHORT&&de&&(K=de.RGBA16_SNORM_EXT),I===i.UNSIGNED_SHORT_4_4_4_4&&(K=i.RGBA4),I===i.UNSIGNED_SHORT_5_5_5_1&&(K=i.RGB5_A1)}return(K===i.R16F||K===i.R32F||K===i.RG16F||K===i.RG32F||K===i.RGBA16F||K===i.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function L(b,_){let I;return b?_===null||_===In||_===ps?I=i.DEPTH24_STENCIL8:_===An?I=i.DEPTH32F_STENCIL8:_===fs&&(I=i.DEPTH24_STENCIL8,Ge("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===In||_===ps?I=i.DEPTH_COMPONENT24:_===An?I=i.DEPTH_COMPONENT32F:_===fs&&(I=i.DEPTH_COMPONENT16),I}function E(b,_){return h(b)===!0||b.isFramebufferTexture&&b.minFilter!==$t&&b.minFilter!==Kt?Math.log2(Math.max(_.width,_.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?_.mipmaps.length:1}function D(b){const _=b.target;_.removeEventListener("dispose",D),A(_),_.isVideoTexture&&d.delete(_),_.isHTMLTexture&&f.delete(_)}function x(b){const _=b.target;_.removeEventListener("dispose",x),R(_)}function A(b){const _=n.get(b);if(_.__webglInit===void 0)return;const I=b.source,j=m.get(I);if(j){const te=j[_.__cacheKey];te.usedTimes--,te.usedTimes===0&&O(b),Object.keys(j).length===0&&m.delete(I)}n.remove(b)}function O(b){const _=n.get(b);i.deleteTexture(_.__webglTexture);const I=b.source,j=m.get(I);delete j[_.__cacheKey],a.memory.textures--}function R(b){const _=n.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),n.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(_.__webglFramebuffer[j]))for(let te=0;te<_.__webglFramebuffer[j].length;te++)i.deleteFramebuffer(_.__webglFramebuffer[j][te]);else i.deleteFramebuffer(_.__webglFramebuffer[j]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[j])}else{if(Array.isArray(_.__webglFramebuffer))for(let j=0;j<_.__webglFramebuffer.length;j++)i.deleteFramebuffer(_.__webglFramebuffer[j]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let j=0;j<_.__webglColorRenderbuffer.length;j++)_.__webglColorRenderbuffer[j]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[j]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const I=b.textures;for(let j=0,te=I.length;j<te;j++){const oe=n.get(I[j]);oe.__webglTexture&&(i.deleteTexture(oe.__webglTexture),a.memory.textures--),n.remove(I[j])}n.remove(b)}let k=0;function q(){k=0}function X(){return k}function B(b){k=b}function G(){const b=k;return b>=s.maxTextures&&Ge("WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+s.maxTextures),k+=1,b}function $(b){const _=[];return _.push(b.wrapS),_.push(b.wrapT),_.push(b.wrapR||0),_.push(b.magFilter),_.push(b.minFilter),_.push(b.anisotropy),_.push(b.internalFormat),_.push(b.format),_.push(b.type),_.push(b.generateMipmaps),_.push(b.premultiplyAlpha),_.push(b.flipY),_.push(b.unpackAlignment),_.push(b.colorSpace),_.join()}function ie(b,_){const I=n.get(b);if(b.isVideoTexture&&et(b),b.isRenderTargetTexture===!1&&b.isExternalTexture!==!0&&b.version>0&&I.__version!==b.version){const j=b.image;if(j===null)Ge("WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)Ge("WebGLRenderer: Texture marked for update but image is incomplete");else{Ve(I,b,_);return}}else b.isExternalTexture&&(I.__webglTexture=b.sourceTexture?b.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,I.__webglTexture,i.TEXTURE0+_)}function re(b,_){const I=n.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&I.__version!==b.version){Ve(I,b,_);return}else b.isExternalTexture&&(I.__webglTexture=b.sourceTexture?b.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,I.__webglTexture,i.TEXTURE0+_)}function _e(b,_){const I=n.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&I.__version!==b.version){Ve(I,b,_);return}t.bindTexture(i.TEXTURE_3D,I.__webglTexture,i.TEXTURE0+_)}function Re(b,_){const I=n.get(b);if(b.isCubeDepthTexture!==!0&&b.version>0&&I.__version!==b.version){Xe(I,b,_);return}t.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+_)}const De={[Ca]:i.REPEAT,[Hn]:i.CLAMP_TO_EDGE,[Pa]:i.MIRRORED_REPEAT},lt={[$t]:i.NEAREST,[m_]:i.NEAREST_MIPMAP_NEAREST,[ys]:i.NEAREST_MIPMAP_LINEAR,[Kt]:i.LINEAR,[Ir]:i.LINEAR_MIPMAP_NEAREST,[vi]:i.LINEAR_MIPMAP_LINEAR},St={[v_]:i.NEVER,[y_]:i.ALWAYS,[x_]:i.LESS,[Fo]:i.LEQUAL,[M_]:i.EQUAL,[Oo]:i.GEQUAL,[S_]:i.GREATER,[b_]:i.NOTEQUAL};function Ze(b,_){if(_.type===An&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===Kt||_.magFilter===Ir||_.magFilter===ys||_.magFilter===vi||_.minFilter===Kt||_.minFilter===Ir||_.minFilter===ys||_.minFilter===vi)&&Ge("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(b,i.TEXTURE_WRAP_S,De[_.wrapS]),i.texParameteri(b,i.TEXTURE_WRAP_T,De[_.wrapT]),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,De[_.wrapR]),i.texParameteri(b,i.TEXTURE_MAG_FILTER,lt[_.magFilter]),i.texParameteri(b,i.TEXTURE_MIN_FILTER,lt[_.minFilter]),_.compareFunction&&(i.texParameteri(b,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(b,i.TEXTURE_COMPARE_FUNC,St[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===$t||_.minFilter!==ys&&_.minFilter!==vi||_.type===An&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const I=e.get("EXT_texture_filter_anisotropic");i.texParameterf(b,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function ee(b,_){let I=!1;b.__webglInit===void 0&&(b.__webglInit=!0,_.addEventListener("dispose",D));const j=_.source;let te=m.get(j);te===void 0&&(te={},m.set(j,te));const oe=$(_);if(oe!==b.__cacheKey){te[oe]===void 0&&(te[oe]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,I=!0),te[oe].usedTimes++;const de=te[b.__cacheKey];de!==void 0&&(te[b.__cacheKey].usedTimes--,de.usedTimes===0&&O(_)),b.__cacheKey=oe,b.__webglTexture=te[oe].texture}return I}function xe(b,_,I){return Math.floor(Math.floor(b/I)/_)}function pe(b,_,I,j){const oe=b.updateRanges;if(oe.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,I,j,_.data);else{oe.sort((be,he)=>be.start-he.start);let de=0;for(let be=1;be<oe.length;be++){const he=oe[de],le=oe[be],qe=he.start+he.count,Ke=xe(le.start,_.width,4),ot=xe(he.start,_.width,4);le.start<=qe+1&&Ke===ot&&xe(le.start+le.count-1,_.width,4)===Ke?he.count=Math.max(he.count,le.start+le.count-he.start):(++de,oe[de]=le)}oe.length=de+1;const K=t.getParameter(i.UNPACK_ROW_LENGTH),Q=t.getParameter(i.UNPACK_SKIP_PIXELS),ge=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let be=0,he=oe.length;be<he;be++){const le=oe[be],qe=Math.floor(le.start/4),Ke=Math.ceil(le.count/4),ot=qe%_.width,P=Math.floor(qe/_.width),ce=Ke,Z=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,ot),t.pixelStorei(i.UNPACK_SKIP_ROWS,P),t.texSubImage2D(i.TEXTURE_2D,0,ot,P,ce,Z,I,j,_.data)}b.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,K),t.pixelStorei(i.UNPACK_SKIP_PIXELS,Q),t.pixelStorei(i.UNPACK_SKIP_ROWS,ge)}}function Ve(b,_,I){let j=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(j=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(j=i.TEXTURE_3D);const te=ee(b,_),oe=_.source;t.bindTexture(j,b.__webglTexture,i.TEXTURE0+I);const de=n.get(oe);if(oe.version!==de.__version||te===!0){if(t.activeTexture(i.TEXTURE0+I),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){const Z=ct.getPrimaries(ct.workingColorSpace),Ee=_.colorSpace===ri?null:ct.getPrimaries(_.colorSpace),fe=_.colorSpace===ri||Z===Ee?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe)}t.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment);let Q=p(_.image,!1,s.maxTextureSize);Q=ae(_,Q);const ge=r.convert(_.format,_.colorSpace),be=r.convert(_.type);let he=y(_.internalFormat,ge,be,_.normalized,_.colorSpace,_.isVideoTexture);Ze(j,_);let le;const qe=_.mipmaps,Ke=_.isVideoTexture!==!0,ot=de.__version===void 0||te===!0,P=oe.dataReady,ce=E(_,Q);if(_.isDepthTexture)he=L(_.format===xi,_.type),ot&&(Ke?t.texStorage2D(i.TEXTURE_2D,1,he,Q.width,Q.height):t.texImage2D(i.TEXTURE_2D,0,he,Q.width,Q.height,0,ge,be,null));else if(_.isDataTexture)if(qe.length>0){Ke&&ot&&t.texStorage2D(i.TEXTURE_2D,ce,he,qe[0].width,qe[0].height);for(let Z=0,Ee=qe.length;Z<Ee;Z++)le=qe[Z],Ke?P&&t.texSubImage2D(i.TEXTURE_2D,Z,0,0,le.width,le.height,ge,be,le.data):t.texImage2D(i.TEXTURE_2D,Z,he,le.width,le.height,0,ge,be,le.data);_.generateMipmaps=!1}else Ke?(ot&&t.texStorage2D(i.TEXTURE_2D,ce,he,Q.width,Q.height),P&&pe(_,Q,ge,be)):t.texImage2D(i.TEXTURE_2D,0,he,Q.width,Q.height,0,ge,be,Q.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Ke&&ot&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ce,he,qe[0].width,qe[0].height,Q.depth);for(let Z=0,Ee=qe.length;Z<Ee;Z++)if(le=qe[Z],_.format!==vn)if(ge!==null)if(Ke){if(P)if(_.layerUpdates.size>0){const fe=Rl(le.width,le.height,_.format,_.type);for(const ne of _.layerUpdates){const Pe=le.data.subarray(ne*fe/le.data.BYTES_PER_ELEMENT,(ne+1)*fe/le.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,ne,le.width,le.height,1,ge,Pe)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,le.width,le.height,Q.depth,ge,le.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Z,he,le.width,le.height,Q.depth,0,le.data,0,0);else Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ke?P&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,le.width,le.height,Q.depth,ge,be,le.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Z,he,le.width,le.height,Q.depth,0,ge,be,le.data)}else{Ke&&ot&&t.texStorage2D(i.TEXTURE_2D,ce,he,qe[0].width,qe[0].height);for(let Z=0,Ee=qe.length;Z<Ee;Z++)le=qe[Z],_.format!==vn?ge!==null?Ke?P&&t.compressedTexSubImage2D(i.TEXTURE_2D,Z,0,0,le.width,le.height,ge,le.data):t.compressedTexImage2D(i.TEXTURE_2D,Z,he,le.width,le.height,0,le.data):Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?P&&t.texSubImage2D(i.TEXTURE_2D,Z,0,0,le.width,le.height,ge,be,le.data):t.texImage2D(i.TEXTURE_2D,Z,he,le.width,le.height,0,ge,be,le.data)}else if(_.isDataArrayTexture)if(Ke){if(ot&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ce,he,Q.width,Q.height,Q.depth),P)if(_.layerUpdates.size>0){const Z=Rl(Q.width,Q.height,_.format,_.type);for(const Ee of _.layerUpdates){const fe=Q.data.subarray(Ee*Z/Q.data.BYTES_PER_ELEMENT,(Ee+1)*Z/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ee,Q.width,Q.height,1,ge,be,fe)}_.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,ge,be,Q.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,he,Q.width,Q.height,Q.depth,0,ge,be,Q.data);else if(_.isData3DTexture)Ke?(ot&&t.texStorage3D(i.TEXTURE_3D,ce,he,Q.width,Q.height,Q.depth),P&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,ge,be,Q.data)):t.texImage3D(i.TEXTURE_3D,0,he,Q.width,Q.height,Q.depth,0,ge,be,Q.data);else if(_.isFramebufferTexture){if(ot)if(Ke)t.texStorage2D(i.TEXTURE_2D,ce,he,Q.width,Q.height);else{let Z=Q.width,Ee=Q.height;for(let fe=0;fe<ce;fe++)t.texImage2D(i.TEXTURE_2D,fe,he,Z,Ee,0,ge,be,null),Z>>=1,Ee>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in i){const Z=i.canvas;if(Z.hasAttribute("layoutsubtree")||Z.setAttribute("layoutsubtree","true"),Q.parentNode!==Z){Z.appendChild(Q),f.add(_),Z.onpaint=Ye=>{const Pt=Ye.changedElements;for(const xt of f)Pt.includes(xt.image)&&(xt.needsUpdate=!0)},Z.requestPaint();return}const Ee=0,fe=i.RGBA,ne=i.RGBA,Pe=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,Ee,fe,ne,Pe,Q),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(qe.length>0){if(Ke&&ot){const Z=vt(qe[0]);t.texStorage2D(i.TEXTURE_2D,ce,he,Z.width,Z.height)}for(let Z=0,Ee=qe.length;Z<Ee;Z++)le=qe[Z],Ke?P&&t.texSubImage2D(i.TEXTURE_2D,Z,0,0,ge,be,le):t.texImage2D(i.TEXTURE_2D,Z,he,ge,be,le);_.generateMipmaps=!1}else if(Ke){if(ot){const Z=vt(Q);t.texStorage2D(i.TEXTURE_2D,ce,he,Z.width,Z.height)}P&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ge,be,Q)}else t.texImage2D(i.TEXTURE_2D,0,he,ge,be,Q);h(_)&&S(j),de.__version=oe.version,_.onUpdate&&_.onUpdate(_)}b.__version=_.version}function Xe(b,_,I){if(_.image.length!==6)return;const j=ee(b,_),te=_.source;t.bindTexture(i.TEXTURE_CUBE_MAP,b.__webglTexture,i.TEXTURE0+I);const oe=n.get(te);if(te.version!==oe.__version||j===!0){t.activeTexture(i.TEXTURE0+I);const de=ct.getPrimaries(ct.workingColorSpace),K=_.colorSpace===ri?null:ct.getPrimaries(_.colorSpace),Q=_.colorSpace===ri||de===K?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);const ge=_.isCompressedTexture||_.image[0].isCompressedTexture,be=_.image[0]&&_.image[0].isDataTexture,he=[];for(let ne=0;ne<6;ne++)!ge&&!be?he[ne]=p(_.image[ne],!0,s.maxCubemapSize):he[ne]=be?_.image[ne].image:_.image[ne],he[ne]=ae(_,he[ne]);const le=he[0],qe=r.convert(_.format,_.colorSpace),Ke=r.convert(_.type),ot=y(_.internalFormat,qe,Ke,_.normalized,_.colorSpace),P=_.isVideoTexture!==!0,ce=oe.__version===void 0||j===!0,Z=te.dataReady;let Ee=E(_,le);Ze(i.TEXTURE_CUBE_MAP,_);let fe;if(ge){P&&ce&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ee,ot,le.width,le.height);for(let ne=0;ne<6;ne++){fe=he[ne].mipmaps;for(let Pe=0;Pe<fe.length;Pe++){const Ye=fe[Pe];_.format!==vn?qe!==null?P?Z&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Pe,0,0,Ye.width,Ye.height,qe,Ye.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Pe,ot,Ye.width,Ye.height,0,Ye.data):Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):P?Z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Pe,0,0,Ye.width,Ye.height,qe,Ke,Ye.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Pe,ot,Ye.width,Ye.height,0,qe,Ke,Ye.data)}}}else{if(fe=_.mipmaps,P&&ce){fe.length>0&&Ee++;const ne=vt(he[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ee,ot,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(be){P?Z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,he[ne].width,he[ne].height,qe,Ke,he[ne].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,ot,he[ne].width,he[ne].height,0,qe,Ke,he[ne].data);for(let Pe=0;Pe<fe.length;Pe++){const Pt=fe[Pe].image[ne].image;P?Z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Pe+1,0,0,Pt.width,Pt.height,qe,Ke,Pt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Pe+1,ot,Pt.width,Pt.height,0,qe,Ke,Pt.data)}}else{P?Z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,qe,Ke,he[ne]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,ot,qe,Ke,he[ne]);for(let Pe=0;Pe<fe.length;Pe++){const Ye=fe[Pe];P?Z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Pe+1,0,0,qe,Ke,Ye.image[ne]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Pe+1,ot,qe,Ke,Ye.image[ne])}}}h(_)&&S(i.TEXTURE_CUBE_MAP),oe.__version=te.version,_.onUpdate&&_.onUpdate(_)}b.__version=_.version}function ze(b,_,I,j,te,oe){const de=r.convert(I.format,I.colorSpace),K=r.convert(I.type),Q=y(I.internalFormat,de,K,I.normalized,I.colorSpace),ge=n.get(_),be=n.get(I);if(be.__renderTarget=_,!ge.__hasExternalTextures){const he=Math.max(1,_.width>>oe),le=Math.max(1,_.height>>oe);te===i.TEXTURE_3D||te===i.TEXTURE_2D_ARRAY?t.texImage3D(te,oe,Q,he,le,_.depth,0,de,K,null):t.texImage2D(te,oe,Q,he,le,0,de,K,null)}t.bindFramebuffer(i.FRAMEBUFFER,b),We(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,te,be.__webglTexture,0,ft(_)):(te===i.TEXTURE_2D||te>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,j,te,be.__webglTexture,oe),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ct(b,_,I){if(i.bindRenderbuffer(i.RENDERBUFFER,b),_.depthBuffer){const j=_.depthTexture,te=j&&j.isDepthTexture?j.type:null,oe=L(_.stencilBuffer,te),de=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;We(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ft(_),oe,_.width,_.height):I?i.renderbufferStorageMultisample(i.RENDERBUFFER,ft(_),oe,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,oe,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,de,i.RENDERBUFFER,b)}else{const j=_.textures;for(let te=0;te<j.length;te++){const oe=j[te],de=r.convert(oe.format,oe.colorSpace),K=r.convert(oe.type),Q=y(oe.internalFormat,de,K,oe.normalized,oe.colorSpace);We(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ft(_),Q,_.width,_.height):I?i.renderbufferStorageMultisample(i.RENDERBUFFER,ft(_),Q,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,Q,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ue(b,_,I){const j=_.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,b),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const te=n.get(_.depthTexture);if(te.__renderTarget=_,(!te.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),j){if(te.__webglInit===void 0&&(te.__webglInit=!0,_.depthTexture.addEventListener("dispose",D)),te.__webglTexture===void 0){te.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,te.__webglTexture),Ze(i.TEXTURE_CUBE_MAP,_.depthTexture);const ge=r.convert(_.depthTexture.format),be=r.convert(_.depthTexture.type);let he;_.depthTexture.format===qn?he=i.DEPTH_COMPONENT24:_.depthTexture.format===xi&&(he=i.DEPTH24_STENCIL8);for(let le=0;le<6;le++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,he,_.width,_.height,0,ge,be,null)}}else ie(_.depthTexture,0);const oe=te.__webglTexture,de=ft(_),K=j?i.TEXTURE_CUBE_MAP_POSITIVE_X+I:i.TEXTURE_2D,Q=_.depthTexture.format===xi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(_.depthTexture.format===qn)We(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,K,oe,0,de):i.framebufferTexture2D(i.FRAMEBUFFER,Q,K,oe,0);else if(_.depthTexture.format===xi)We(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,K,oe,0,de):i.framebufferTexture2D(i.FRAMEBUFFER,Q,K,oe,0);else throw new Error("Unknown depthTexture format")}function me(b){const _=n.get(b),I=b.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==b.depthTexture){const j=b.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),j){const te=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,j.removeEventListener("dispose",te)};j.addEventListener("dispose",te),_.__depthDisposeCallback=te}_.__boundDepthTexture=j}if(b.depthTexture&&!_.__autoAllocateDepthBuffer)if(I)for(let j=0;j<6;j++)ue(_.__webglFramebuffer[j],b,j);else{const j=b.texture.mipmaps;j&&j.length>0?ue(_.__webglFramebuffer[0],b,0):ue(_.__webglFramebuffer,b,0)}else if(I){_.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[j]),_.__webglDepthbuffer[j]===void 0)_.__webglDepthbuffer[j]=i.createRenderbuffer(),Ct(_.__webglDepthbuffer[j],b,!1);else{const te=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,oe=_.__webglDepthbuffer[j];i.bindRenderbuffer(i.RENDERBUFFER,oe),i.framebufferRenderbuffer(i.FRAMEBUFFER,te,i.RENDERBUFFER,oe)}}else{const j=b.texture.mipmaps;if(j&&j.length>0?t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),Ct(_.__webglDepthbuffer,b,!1);else{const te=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,oe=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,oe),i.framebufferRenderbuffer(i.FRAMEBUFFER,te,i.RENDERBUFFER,oe)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function He(b,_,I){const j=n.get(b);_!==void 0&&ze(j.__webglFramebuffer,b,b.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),I!==void 0&&me(b)}function Ie(b){const _=b.texture,I=n.get(b),j=n.get(_);b.addEventListener("dispose",x);const te=b.textures,oe=b.isWebGLCubeRenderTarget===!0,de=te.length>1;if(de||(j.__webglTexture===void 0&&(j.__webglTexture=i.createTexture()),j.__version=_.version,a.memory.textures++),oe){I.__webglFramebuffer=[];for(let K=0;K<6;K++)if(_.mipmaps&&_.mipmaps.length>0){I.__webglFramebuffer[K]=[];for(let Q=0;Q<_.mipmaps.length;Q++)I.__webglFramebuffer[K][Q]=i.createFramebuffer()}else I.__webglFramebuffer[K]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){I.__webglFramebuffer=[];for(let K=0;K<_.mipmaps.length;K++)I.__webglFramebuffer[K]=i.createFramebuffer()}else I.__webglFramebuffer=i.createFramebuffer();if(de)for(let K=0,Q=te.length;K<Q;K++){const ge=n.get(te[K]);ge.__webglTexture===void 0&&(ge.__webglTexture=i.createTexture(),a.memory.textures++)}if(b.samples>0&&We(b)===!1){I.__webglMultisampledFramebuffer=i.createFramebuffer(),I.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let K=0;K<te.length;K++){const Q=te[K];I.__webglColorRenderbuffer[K]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,I.__webglColorRenderbuffer[K]);const ge=r.convert(Q.format,Q.colorSpace),be=r.convert(Q.type),he=y(Q.internalFormat,ge,be,Q.normalized,Q.colorSpace,b.isXRRenderTarget===!0),le=ft(b);i.renderbufferStorageMultisample(i.RENDERBUFFER,le,he,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+K,i.RENDERBUFFER,I.__webglColorRenderbuffer[K])}i.bindRenderbuffer(i.RENDERBUFFER,null),b.depthBuffer&&(I.__webglDepthRenderbuffer=i.createRenderbuffer(),Ct(I.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(oe){t.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),Ze(i.TEXTURE_CUBE_MAP,_);for(let K=0;K<6;K++)if(_.mipmaps&&_.mipmaps.length>0)for(let Q=0;Q<_.mipmaps.length;Q++)ze(I.__webglFramebuffer[K][Q],b,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+K,Q);else ze(I.__webglFramebuffer[K],b,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);h(_)&&S(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(de){for(let K=0,Q=te.length;K<Q;K++){const ge=te[K],be=n.get(ge);let he=i.TEXTURE_2D;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(he=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(he,be.__webglTexture),Ze(he,ge),ze(I.__webglFramebuffer,b,ge,i.COLOR_ATTACHMENT0+K,he,0),h(ge)&&S(he)}t.unbindTexture()}else{let K=i.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(K=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(K,j.__webglTexture),Ze(K,_),_.mipmaps&&_.mipmaps.length>0)for(let Q=0;Q<_.mipmaps.length;Q++)ze(I.__webglFramebuffer[Q],b,_,i.COLOR_ATTACHMENT0,K,Q);else ze(I.__webglFramebuffer,b,_,i.COLOR_ATTACHMENT0,K,0);h(_)&&S(K),t.unbindTexture()}b.depthBuffer&&me(b)}function at(b){const _=b.textures;for(let I=0,j=_.length;I<j;I++){const te=_[I];if(h(te)){const oe=T(b),de=n.get(te).__webglTexture;t.bindTexture(oe,de),S(oe),t.unbindTexture()}}}const ht=[],Tt=[];function C(b){if(b.samples>0){if(We(b)===!1){const _=b.textures,I=b.width,j=b.height;let te=i.COLOR_BUFFER_BIT;const oe=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,de=n.get(b),K=_.length>1;if(K)for(let ge=0;ge<_.length;ge++)t.bindFramebuffer(i.FRAMEBUFFER,de.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,de.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,de.__webglMultisampledFramebuffer);const Q=b.texture.mipmaps;Q&&Q.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,de.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,de.__webglFramebuffer);for(let ge=0;ge<_.length;ge++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(te|=i.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(te|=i.STENCIL_BUFFER_BIT)),K){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,de.__webglColorRenderbuffer[ge]);const be=n.get(_[ge]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,be,0)}i.blitFramebuffer(0,0,I,j,0,0,I,j,te,i.NEAREST),l===!0&&(ht.length=0,Tt.length=0,ht.push(i.COLOR_ATTACHMENT0+ge),b.depthBuffer&&b.resolveDepthBuffer===!1&&(ht.push(oe),Tt.push(oe),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Tt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ht))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),K)for(let ge=0;ge<_.length;ge++){t.bindFramebuffer(i.FRAMEBUFFER,de.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.RENDERBUFFER,de.__webglColorRenderbuffer[ge]);const be=n.get(_[ge]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,de.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.TEXTURE_2D,be,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,de.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){const _=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function ft(b){return Math.min(s.maxSamples,b.samples)}function We(b){const _=n.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function et(b){const _=a.render.frame;d.get(b)!==_&&(d.set(b,_),b.update())}function ae(b,_){const I=b.colorSpace,j=b.format,te=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||I!==cr&&I!==ri&&(ct.getTransfer(I)===bt?(j!==vn||te!==cn)&&Ge("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):mt("WebGLTextures: Unsupported texture color space:",I)),_}function vt(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=q,this.getTextureUnits=X,this.setTextureUnits=B,this.setTexture2D=ie,this.setTexture2DArray=re,this.setTexture3D=_e,this.setTextureCube=Re,this.rebindTextures=He,this.setupRenderTarget=Ie,this.updateRenderTargetMipmap=at,this.updateMultisampleRenderTarget=C,this.setupDepthRenderbuffer=me,this.setupFrameBufferTexture=ze,this.useMultisampledRTT=We,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function QM(i,e){function t(n,s=ri){let r;const a=ct.getTransfer(s);if(n===cn)return i.UNSIGNED_BYTE;if(n===Lo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Do)return i.UNSIGNED_SHORT_5_5_5_1;if(n===bc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===yc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Mc)return i.BYTE;if(n===Sc)return i.SHORT;if(n===fs)return i.UNSIGNED_SHORT;if(n===Po)return i.INT;if(n===In)return i.UNSIGNED_INT;if(n===An)return i.FLOAT;if(n===Xn)return i.HALF_FLOAT;if(n===Ec)return i.ALPHA;if(n===Tc)return i.RGB;if(n===vn)return i.RGBA;if(n===qn)return i.DEPTH_COMPONENT;if(n===xi)return i.DEPTH_STENCIL;if(n===Ac)return i.RED;if(n===Io)return i.RED_INTEGER;if(n===bi)return i.RG;if(n===Uo)return i.RG_INTEGER;if(n===No)return i.RGBA_INTEGER;if(n===er||n===tr||n===nr||n===ir)if(a===bt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===er)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===tr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===nr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ir)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===er)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===tr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===nr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ir)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===La||n===Da||n===Ia||n===Ua)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===La)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Da)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ia)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ua)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Na||n===Fa||n===Oa||n===Ba||n===ka||n===or||n===Va)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Na||n===Fa)return a===bt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Oa)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ba)return r.COMPRESSED_R11_EAC;if(n===ka)return r.COMPRESSED_SIGNED_R11_EAC;if(n===or)return r.COMPRESSED_RG11_EAC;if(n===Va)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===za||n===Ga||n===Ha||n===Wa||n===$a||n===Xa||n===qa||n===Ya||n===Ka||n===Za||n===ja||n===Ja||n===Qa||n===eo)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===za)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ga)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ha)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Wa)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===$a)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Xa)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===qa)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ya)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ka)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Za)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ja)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ja)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Qa)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===eo)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===to||n===no||n===io)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===to)return a===bt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===no)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===io)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===so||n===ro||n===lr||n===ao)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===so)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ro)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===lr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ao)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ps?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const eS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,tS=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class nS{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Nc(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Un({vertexShader:eS,fragmentShader:tS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Sn(new yr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class iS extends yi{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,d=null,f=null,u=null,m=null,g=null;const M=typeof XRWebGLBinding<"u",p=new nS,h={},S=t.getContextAttributes();let T=null,y=null;const L=[],E=[],D=new gt;let x=null;const A=new ln;A.viewport=new It;const O=new ln;O.viewport=new It;const R=[A,O],k=new fg;let q=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let xe=L[ee];return xe===void 0&&(xe=new Vr,L[ee]=xe),xe.getTargetRaySpace()},this.getControllerGrip=function(ee){let xe=L[ee];return xe===void 0&&(xe=new Vr,L[ee]=xe),xe.getGripSpace()},this.getHand=function(ee){let xe=L[ee];return xe===void 0&&(xe=new Vr,L[ee]=xe),xe.getHandSpace()};function B(ee){const xe=E.indexOf(ee.inputSource);if(xe===-1)return;const pe=L[xe];pe!==void 0&&(pe.update(ee.inputSource,ee.frame,c||a),pe.dispatchEvent({type:ee.type,data:ee.inputSource}))}function G(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",$);for(let ee=0;ee<L.length;ee++){const xe=E[ee];xe!==null&&(E[ee]=null,L[ee].disconnect(xe))}q=null,X=null,p.reset();for(const ee in h)delete h[ee];e.setRenderTarget(T),m=null,u=null,f=null,s=null,y=null,Ze.stop(),n.isPresenting=!1,e.setPixelRatio(x),e.setSize(D.width,D.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){r=ee,n.isPresenting===!0&&Ge("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){o=ee,n.isPresenting===!0&&Ge("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(ee){c=ee},this.getBaseLayer=function(){return u!==null?u:m},this.getBinding=function(){return f===null&&M&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(ee){if(s=ee,s!==null){if(T=e.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",G),s.addEventListener("inputsourceschange",$),S.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(D),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let pe=null,Ve=null,Xe=null;S.depth&&(Xe=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,pe=S.stencil?xi:qn,Ve=S.stencil?ps:In);const ze={colorFormat:t.RGBA8,depthFormat:Xe,scaleFactor:r};f=this.getBinding(),u=f.createProjectionLayer(ze),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),y=new Dn(u.textureWidth,u.textureHeight,{format:vn,type:cn,depthTexture:new ji(u.textureWidth,u.textureHeight,Ve,void 0,void 0,void 0,void 0,void 0,void 0,pe),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const pe={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,pe),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),y=new Dn(m.framebufferWidth,m.framebufferHeight,{format:vn,type:cn,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Ze.setContext(s),Ze.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function $(ee){for(let xe=0;xe<ee.removed.length;xe++){const pe=ee.removed[xe],Ve=E.indexOf(pe);Ve>=0&&(E[Ve]=null,L[Ve].disconnect(pe))}for(let xe=0;xe<ee.added.length;xe++){const pe=ee.added[xe];let Ve=E.indexOf(pe);if(Ve===-1){for(let ze=0;ze<L.length;ze++)if(ze>=E.length){E.push(pe),Ve=ze;break}else if(E[ze]===null){E[ze]=pe,Ve=ze;break}if(Ve===-1)break}const Xe=L[Ve];Xe&&Xe.connect(pe)}}const ie=new F,re=new F;function _e(ee,xe,pe){ie.setFromMatrixPosition(xe.matrixWorld),re.setFromMatrixPosition(pe.matrixWorld);const Ve=ie.distanceTo(re),Xe=xe.projectionMatrix.elements,ze=pe.projectionMatrix.elements,Ct=Xe[14]/(Xe[10]-1),ue=Xe[14]/(Xe[10]+1),me=(Xe[9]+1)/Xe[5],He=(Xe[9]-1)/Xe[5],Ie=(Xe[8]-1)/Xe[0],at=(ze[8]+1)/ze[0],ht=Ct*Ie,Tt=Ct*at,C=Ve/(-Ie+at),ft=C*-Ie;if(xe.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(ft),ee.translateZ(C),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert(),Xe[10]===-1)ee.projectionMatrix.copy(xe.projectionMatrix),ee.projectionMatrixInverse.copy(xe.projectionMatrixInverse);else{const We=Ct+C,et=ue+C,ae=ht-ft,vt=Tt+(Ve-ft),b=me*ue/et*We,_=He*ue/et*We;ee.projectionMatrix.makePerspective(ae,vt,b,_,We,et),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}}function Re(ee,xe){xe===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(xe.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(s===null)return;let xe=ee.near,pe=ee.far;p.texture!==null&&(p.depthNear>0&&(xe=p.depthNear),p.depthFar>0&&(pe=p.depthFar)),k.near=O.near=A.near=xe,k.far=O.far=A.far=pe,(q!==k.near||X!==k.far)&&(s.updateRenderState({depthNear:k.near,depthFar:k.far}),q=k.near,X=k.far),k.layers.mask=ee.layers.mask|6,A.layers.mask=k.layers.mask&-5,O.layers.mask=k.layers.mask&-3;const Ve=ee.parent,Xe=k.cameras;Re(k,Ve);for(let ze=0;ze<Xe.length;ze++)Re(Xe[ze],Ve);Xe.length===2?_e(k,A,O):k.projectionMatrix.copy(A.projectionMatrix),De(ee,k,Ve)};function De(ee,xe,pe){pe===null?ee.matrix.copy(xe.matrixWorld):(ee.matrix.copy(pe.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(xe.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(xe.projectionMatrix),ee.projectionMatrixInverse.copy(xe.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=co*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(u===null&&m===null))return l},this.setFoveation=function(ee){l=ee,u!==null&&(u.fixedFoveation=ee),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=ee)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(k)},this.getCameraTexture=function(ee){return h[ee]};let lt=null;function St(ee,xe){if(d=xe.getViewerPose(c||a),g=xe,d!==null){const pe=d.views;m!==null&&(e.setRenderTargetFramebuffer(y,m.framebuffer),e.setRenderTarget(y));let Ve=!1;pe.length!==k.cameras.length&&(k.cameras.length=0,Ve=!0);for(let ue=0;ue<pe.length;ue++){const me=pe[ue];let He=null;if(m!==null)He=m.getViewport(me);else{const at=f.getViewSubImage(u,me);He=at.viewport,ue===0&&(e.setRenderTargetTextures(y,at.colorTexture,at.depthStencilTexture),e.setRenderTarget(y))}let Ie=R[ue];Ie===void 0&&(Ie=new ln,Ie.layers.enable(ue),Ie.viewport=new It,R[ue]=Ie),Ie.matrix.fromArray(me.transform.matrix),Ie.matrix.decompose(Ie.position,Ie.quaternion,Ie.scale),Ie.projectionMatrix.fromArray(me.projectionMatrix),Ie.projectionMatrixInverse.copy(Ie.projectionMatrix).invert(),Ie.viewport.set(He.x,He.y,He.width,He.height),ue===0&&(k.matrix.copy(Ie.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),Ve===!0&&k.cameras.push(Ie)}const Xe=s.enabledFeatures;if(Xe&&Xe.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){f=n.getBinding();const ue=f.getDepthInformation(pe[0]);ue&&ue.isValid&&ue.texture&&p.init(ue,s.renderState)}if(Xe&&Xe.includes("camera-access")&&M){e.state.unbindTexture(),f=n.getBinding();for(let ue=0;ue<pe.length;ue++){const me=pe[ue].camera;if(me){let He=h[me];He||(He=new Nc,h[me]=He);const Ie=f.getCameraImage(me);He.sourceTexture=Ie}}}}for(let pe=0;pe<L.length;pe++){const Ve=E[pe],Xe=L[pe];Ve!==null&&Xe!==void 0&&Xe.update(Ve,xe,c||a)}lt&&lt(ee,xe),xe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:xe}),g=null}const Ze=new Vc;Ze.setAnimationLoop(St),this.setAnimationLoop=function(ee){lt=ee},this.dispose=function(){}}}const sS=new Lt,qc=new je;qc.set(-1,0,0,0,1,0,0,0,1);function rS(i,e){function t(p,h){p.matrixAutoUpdate===!0&&p.updateMatrix(),h.value.copy(p.matrix)}function n(p,h){h.color.getRGB(p.fogColor.value,Fc(i)),h.isFog?(p.fogNear.value=h.near,p.fogFar.value=h.far):h.isFogExp2&&(p.fogDensity.value=h.density)}function s(p,h,S,T,y){h.isNodeMaterial?h.uniformsNeedUpdate=!1:h.isMeshBasicMaterial?r(p,h):h.isMeshLambertMaterial?(r(p,h),h.envMap&&(p.envMapIntensity.value=h.envMapIntensity)):h.isMeshToonMaterial?(r(p,h),f(p,h)):h.isMeshPhongMaterial?(r(p,h),d(p,h),h.envMap&&(p.envMapIntensity.value=h.envMapIntensity)):h.isMeshStandardMaterial?(r(p,h),u(p,h),h.isMeshPhysicalMaterial&&m(p,h,y)):h.isMeshMatcapMaterial?(r(p,h),g(p,h)):h.isMeshDepthMaterial?r(p,h):h.isMeshDistanceMaterial?(r(p,h),M(p,h)):h.isMeshNormalMaterial?r(p,h):h.isLineBasicMaterial?(a(p,h),h.isLineDashedMaterial&&o(p,h)):h.isPointsMaterial?l(p,h,S,T):h.isSpriteMaterial?c(p,h):h.isShadowMaterial?(p.color.value.copy(h.color),p.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function r(p,h){p.opacity.value=h.opacity,h.color&&p.diffuse.value.copy(h.color),h.emissive&&p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(p.map.value=h.map,t(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.bumpMap&&(p.bumpMap.value=h.bumpMap,t(h.bumpMap,p.bumpMapTransform),p.bumpScale.value=h.bumpScale,h.side===en&&(p.bumpScale.value*=-1)),h.normalMap&&(p.normalMap.value=h.normalMap,t(h.normalMap,p.normalMapTransform),p.normalScale.value.copy(h.normalScale),h.side===en&&p.normalScale.value.negate()),h.displacementMap&&(p.displacementMap.value=h.displacementMap,t(h.displacementMap,p.displacementMapTransform),p.displacementScale.value=h.displacementScale,p.displacementBias.value=h.displacementBias),h.emissiveMap&&(p.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,p.emissiveMapTransform)),h.specularMap&&(p.specularMap.value=h.specularMap,t(h.specularMap,p.specularMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);const S=e.get(h),T=S.envMap,y=S.envMapRotation;T&&(p.envMap.value=T,p.envMapRotation.value.setFromMatrix4(sS.makeRotationFromEuler(y)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(qc),p.reflectivity.value=h.reflectivity,p.ior.value=h.ior,p.refractionRatio.value=h.refractionRatio),h.lightMap&&(p.lightMap.value=h.lightMap,p.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,p.lightMapTransform)),h.aoMap&&(p.aoMap.value=h.aoMap,p.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,p.aoMapTransform))}function a(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,h.map&&(p.map.value=h.map,t(h.map,p.mapTransform))}function o(p,h){p.dashSize.value=h.dashSize,p.totalSize.value=h.dashSize+h.gapSize,p.scale.value=h.scale}function l(p,h,S,T){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.size.value=h.size*S,p.scale.value=T*.5,h.map&&(p.map.value=h.map,t(h.map,p.uvTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function c(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.rotation.value=h.rotation,h.map&&(p.map.value=h.map,t(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function d(p,h){p.specular.value.copy(h.specular),p.shininess.value=Math.max(h.shininess,1e-4)}function f(p,h){h.gradientMap&&(p.gradientMap.value=h.gradientMap)}function u(p,h){p.metalness.value=h.metalness,h.metalnessMap&&(p.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,p.metalnessMapTransform)),p.roughness.value=h.roughness,h.roughnessMap&&(p.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,p.roughnessMapTransform)),h.envMap&&(p.envMapIntensity.value=h.envMapIntensity)}function m(p,h,S){p.ior.value=h.ior,h.sheen>0&&(p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),p.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(p.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,p.sheenColorMapTransform)),h.sheenRoughnessMap&&(p.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,p.sheenRoughnessMapTransform))),h.clearcoat>0&&(p.clearcoat.value=h.clearcoat,p.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(p.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,p.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(p.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===en&&p.clearcoatNormalScale.value.negate())),h.dispersion>0&&(p.dispersion.value=h.dispersion),h.iridescence>0&&(p.iridescence.value=h.iridescence,p.iridescenceIOR.value=h.iridescenceIOR,p.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(p.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,p.iridescenceMapTransform)),h.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),h.transmission>0&&(p.transmission.value=h.transmission,p.transmissionSamplerMap.value=S.texture,p.transmissionSamplerSize.value.set(S.width,S.height),h.transmissionMap&&(p.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,p.transmissionMapTransform)),p.thickness.value=h.thickness,h.thicknessMap&&(p.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=h.attenuationDistance,p.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(p.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(p.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=h.specularIntensity,p.specularColor.value.copy(h.specularColor),h.specularColorMap&&(p.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,p.specularColorMapTransform)),h.specularIntensityMap&&(p.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,h){h.matcap&&(p.matcap.value=h.matcap)}function M(p,h){const S=e.get(h).light;p.referencePosition.value.setFromMatrixPosition(S.matrixWorld),p.nearDistance.value=S.shadow.camera.near,p.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function aS(i,e,t,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,T){const y=T.program;n.uniformBlockBinding(S,y)}function c(S,T){let y=s[S.id];y===void 0&&(g(S),y=d(S),s[S.id]=y,S.addEventListener("dispose",p));const L=T.program;n.updateUBOMapping(S,L);const E=e.render.frame;r[S.id]!==E&&(u(S),r[S.id]=E)}function d(S){const T=f();S.__bindingPointIndex=T;const y=i.createBuffer(),L=S.__size,E=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,L,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,T,y),y}function f(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return mt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(S){const T=s[S.id],y=S.uniforms,L=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let E=0,D=y.length;E<D;E++){const x=Array.isArray(y[E])?y[E]:[y[E]];for(let A=0,O=x.length;A<O;A++){const R=x[A];if(m(R,E,A,L)===!0){const k=R.__offset,q=Array.isArray(R.value)?R.value:[R.value];let X=0;for(let B=0;B<q.length;B++){const G=q[B],$=M(G);typeof G=="number"||typeof G=="boolean"?(R.__data[0]=G,i.bufferSubData(i.UNIFORM_BUFFER,k+X,R.__data)):G.isMatrix3?(R.__data[0]=G.elements[0],R.__data[1]=G.elements[1],R.__data[2]=G.elements[2],R.__data[3]=0,R.__data[4]=G.elements[3],R.__data[5]=G.elements[4],R.__data[6]=G.elements[5],R.__data[7]=0,R.__data[8]=G.elements[6],R.__data[9]=G.elements[7],R.__data[10]=G.elements[8],R.__data[11]=0):ArrayBuffer.isView(G)?R.__data.set(new G.constructor(G.buffer,G.byteOffset,R.__data.length)):(G.toArray(R.__data,X),X+=$.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,k,R.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(S,T,y,L){const E=S.value,D=T+"_"+y;if(L[D]===void 0)return typeof E=="number"||typeof E=="boolean"?L[D]=E:ArrayBuffer.isView(E)?L[D]=E.slice():L[D]=E.clone(),!0;{const x=L[D];if(typeof E=="number"||typeof E=="boolean"){if(x!==E)return L[D]=E,!0}else{if(ArrayBuffer.isView(E))return!0;if(x.equals(E)===!1)return x.copy(E),!0}}return!1}function g(S){const T=S.uniforms;let y=0;const L=16;for(let D=0,x=T.length;D<x;D++){const A=Array.isArray(T[D])?T[D]:[T[D]];for(let O=0,R=A.length;O<R;O++){const k=A[O],q=Array.isArray(k.value)?k.value:[k.value];for(let X=0,B=q.length;X<B;X++){const G=q[X],$=M(G),ie=y%L,re=ie%$.boundary,_e=ie+re;y+=re,_e!==0&&L-_e<$.storage&&(y+=L-_e),k.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=y,y+=$.storage}}}const E=y%L;return E>0&&(y+=L-E),S.__size=y,S.__cache={},this}function M(S){const T={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(T.boundary=4,T.storage=4):S.isVector2?(T.boundary=8,T.storage=8):S.isVector3||S.isColor?(T.boundary=16,T.storage=12):S.isVector4?(T.boundary=16,T.storage=16):S.isMatrix3?(T.boundary=48,T.storage=48):S.isMatrix4?(T.boundary=64,T.storage=64):S.isTexture?Ge("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(T.boundary=16,T.storage=S.byteLength):Ge("WebGLRenderer: Unsupported uniform value type.",S),T}function p(S){const T=S.target;T.removeEventListener("dispose",p);const y=a.indexOf(T.__bindingPointIndex);a.splice(y,1),i.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function h(){for(const S in s)i.deleteBuffer(s[S]);a=[],s={},r={}}return{bind:l,update:c,dispose:h}}const oS=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let En=null;function lS(){return En===null&&(En=new Y_(oS,16,16,bi,Xn),En.name="DFG_LUT",En.minFilter=Kt,En.magFilter=Kt,En.wrapS=Hn,En.wrapT=Hn,En.generateMipmaps=!1,En.needsUpdate=!0),En}class cS{constructor(e={}){const{canvas:t=T_(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:m=cn}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;const M=m,p=new Set([No,Uo,Io]),h=new Set([cn,In,fs,ps,Lo,Do]),S=new Uint32Array(4),T=new Int32Array(4),y=new F;let L=null,E=null;const D=[],x=[];let A=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ln,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const O=this;let R=!1,k=null;this._outputColorSpace=on;let q=0,X=0,B=null,G=-1,$=null;const ie=new It,re=new It;let _e=null;const Re=new _t(0);let De=0,lt=t.width,St=t.height,Ze=1,ee=null,xe=null;const pe=new It(0,0,lt,St),Ve=new It(0,0,lt,St);let Xe=!1;const ze=new zo;let Ct=!1,ue=!1;const me=new Lt,He=new F,Ie=new It,at={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ht=!1;function Tt(){return B===null?Ze:1}let C=n;function ft(v,w){return t.getContext(v,w)}try{const v={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ro}`),t.addEventListener("webglcontextlost",ne,!1),t.addEventListener("webglcontextrestored",Pe,!1),t.addEventListener("webglcontextcreationerror",Ye,!1),C===null){const w="webgl2";if(C=ft(w,v),C===null)throw ft(w)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(v){throw mt("WebGLRenderer: "+v.message),v}let We,et,ae,vt,b,_,I,j,te,oe,de,K,Q,ge,be,he,le,qe,Ke,ot,P,ce,Z;function Ee(){We=new lx(C),We.init(),P=new QM(C,We),et=new ex(C,We,e,P),ae=new jM(C,We),et.reversedDepthBuffer&&u&&ae.buffers.depth.setReversed(!0),vt=new dx(C),b=new OM,_=new JM(C,We,ae,b,et,P,vt),I=new ox(O),j=new mg(C),ce=new Jv(C,j),te=new cx(C,j,vt,ce),oe=new fx(C,te,j,ce,vt),qe=new hx(C,et,_),be=new tx(b),de=new FM(O,I,We,et,ce,be),K=new rS(O,b),Q=new kM,ge=new $M(We),le=new jv(O,I,ae,oe,g,l),he=new ZM(O,oe,et),Z=new aS(C,vt,et,ae),Ke=new Qv(C,We,vt),ot=new ux(C,We,vt),vt.programs=de.programs,O.capabilities=et,O.extensions=We,O.properties=b,O.renderLists=Q,O.shadowMap=he,O.state=ae,O.info=vt}Ee(),M!==cn&&(A=new mx(M,t.width,t.height,s,r));const fe=new iS(O,C);this.xr=fe,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const v=We.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){const v=We.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return Ze},this.setPixelRatio=function(v){v!==void 0&&(Ze=v,this.setSize(lt,St,!1))},this.getSize=function(v){return v.set(lt,St)},this.setSize=function(v,w,V=!0){if(fe.isPresenting){Ge("WebGLRenderer: Can't change size while VR device is presenting.");return}lt=v,St=w,t.width=Math.floor(v*Ze),t.height=Math.floor(w*Ze),V===!0&&(t.style.width=v+"px",t.style.height=w+"px"),A!==null&&A.setSize(t.width,t.height),this.setViewport(0,0,v,w)},this.getDrawingBufferSize=function(v){return v.set(lt*Ze,St*Ze).floor()},this.setDrawingBufferSize=function(v,w,V){lt=v,St=w,Ze=V,t.width=Math.floor(v*V),t.height=Math.floor(w*V),this.setViewport(0,0,v,w)},this.setEffects=function(v){if(M===cn){mt("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(v){for(let w=0;w<v.length;w++)if(v[w].isOutputPass===!0){Ge("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(v||[])},this.getCurrentViewport=function(v){return v.copy(ie)},this.getViewport=function(v){return v.copy(pe)},this.setViewport=function(v,w,V,H){v.isVector4?pe.set(v.x,v.y,v.z,v.w):pe.set(v,w,V,H),ae.viewport(ie.copy(pe).multiplyScalar(Ze).round())},this.getScissor=function(v){return v.copy(Ve)},this.setScissor=function(v,w,V,H){v.isVector4?Ve.set(v.x,v.y,v.z,v.w):Ve.set(v,w,V,H),ae.scissor(re.copy(Ve).multiplyScalar(Ze).round())},this.getScissorTest=function(){return Xe},this.setScissorTest=function(v){ae.setScissorTest(Xe=v)},this.setOpaqueSort=function(v){ee=v},this.setTransparentSort=function(v){xe=v},this.getClearColor=function(v){return v.copy(le.getClearColor())},this.setClearColor=function(){le.setClearColor(...arguments)},this.getClearAlpha=function(){return le.getClearAlpha()},this.setClearAlpha=function(){le.setClearAlpha(...arguments)},this.clear=function(v=!0,w=!0,V=!0){let H=0;if(v){let z=!1;if(B!==null){const Se=B.texture.format;z=p.has(Se)}if(z){const Se=B.texture.type,Ae=h.has(Se),Me=le.getClearColor(),Le=le.getClearAlpha(),Ue=Me.r,tt=Me.g,st=Me.b;Ae?(S[0]=Ue,S[1]=tt,S[2]=st,S[3]=Le,C.clearBufferuiv(C.COLOR,0,S)):(T[0]=Ue,T[1]=tt,T[2]=st,T[3]=Le,C.clearBufferiv(C.COLOR,0,T))}else H|=C.COLOR_BUFFER_BIT}w&&(H|=C.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),V&&(H|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&C.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(v){v.setRenderer(this),k=v},this.dispose=function(){t.removeEventListener("webglcontextlost",ne,!1),t.removeEventListener("webglcontextrestored",Pe,!1),t.removeEventListener("webglcontextcreationerror",Ye,!1),le.dispose(),Q.dispose(),ge.dispose(),b.dispose(),I.dispose(),oe.dispose(),ce.dispose(),Z.dispose(),de.dispose(),fe.dispose(),fe.removeEventListener("sessionstart",Ms),fe.removeEventListener("sessionend",Ti),fn.stop()};function ne(v){v.preventDefault(),tl("WebGLRenderer: Context Lost."),R=!0}function Pe(){tl("WebGLRenderer: Context Restored."),R=!1;const v=vt.autoReset,w=he.enabled,V=he.autoUpdate,H=he.needsUpdate,z=he.type;Ee(),vt.autoReset=v,he.enabled=w,he.autoUpdate=V,he.needsUpdate=H,he.type=z}function Ye(v){mt("WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function Pt(v){const w=v.target;w.removeEventListener("dispose",Pt),xt(w)}function xt(v){tn(v),b.remove(v)}function tn(v){const w=b.get(v).programs;w!==void 0&&(w.forEach(function(V){de.releaseProgram(V)}),v.isShaderMaterial&&de.releaseShaderCache(v))}this.renderBufferDirect=function(v,w,V,H,z,Se){w===null&&(w=at);const Ae=z.isMesh&&z.matrixWorld.determinant()<0,Me=Rr(v,w,V,H,z);ae.setMaterial(H,Ae);let Le=V.index,Ue=1;if(H.wireframe===!0){if(Le=te.getWireframeAttribute(V),Le===void 0)return;Ue=2}const tt=V.drawRange,st=V.attributes.position;let Fe=tt.start*Ue,yt=(tt.start+tt.count)*Ue;Se!==null&&(Fe=Math.max(Fe,Se.start*Ue),yt=Math.min(yt,(Se.start+Se.count)*Ue)),Le!==null?(Fe=Math.max(Fe,0),yt=Math.min(yt,Le.count)):st!=null&&(Fe=Math.max(Fe,0),yt=Math.min(yt,st.count));const Nt=yt-Fe;if(Nt<0||Nt===1/0)return;ce.setup(z,H,Me,V,Le);let Dt,At=Ke;if(Le!==null&&(Dt=j.get(Le),At=ot,At.setIndex(Dt)),z.isMesh)H.wireframe===!0?(ae.setLineWidth(H.wireframeLinewidth*Tt()),At.setMode(C.LINES)):At.setMode(C.TRIANGLES);else if(z.isLine){let Xt=H.linewidth;Xt===void 0&&(Xt=1),ae.setLineWidth(Xt*Tt()),z.isLineSegments?At.setMode(C.LINES):z.isLineLoop?At.setMode(C.LINE_LOOP):At.setMode(C.LINE_STRIP)}else z.isPoints?At.setMode(C.POINTS):z.isSprite&&At.setMode(C.TRIANGLES);if(z.isBatchedMesh)if(We.get("WEBGL_multi_draw"))At.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Xt=z._multiDrawStarts,Te=z._multiDrawCounts,nn=z._multiDrawCount,pt=Le?j.get(Le).bytesPerElement:1,un=b.get(H).currentProgram.getUniforms();for(let bn=0;bn<nn;bn++)un.setValue(C,"_gl_DrawID",bn),At.render(Xt[bn]/pt,Te[bn])}else if(z.isInstancedMesh)At.renderInstances(Fe,Nt,z.count);else if(V.isInstancedBufferGeometry){const Xt=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Te=Math.min(V.instanceCount,Xt);At.renderInstances(Fe,Nt,Te)}else At.render(Fe,Nt)};function Jt(v,w,V){v.transparent===!0&&v.side===Gn&&v.forceSinglePass===!1?(v.side=en,v.needsUpdate=!0,Kn(v,w,V),v.side=li,v.needsUpdate=!0,Kn(v,w,V),v.side=Gn):Kn(v,w,V)}this.compile=function(v,w,V=null){V===null&&(V=v),E=ge.get(V),E.init(w),x.push(E),V.traverseVisible(function(z){z.isLight&&z.layers.test(w.layers)&&(E.pushLight(z),z.castShadow&&E.pushShadow(z))}),v!==V&&v.traverseVisible(function(z){z.isLight&&z.layers.test(w.layers)&&(E.pushLight(z),z.castShadow&&E.pushShadow(z))}),E.setupLights();const H=new Set;return v.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const Se=z.material;if(Se)if(Array.isArray(Se))for(let Ae=0;Ae<Se.length;Ae++){const Me=Se[Ae];Jt(Me,V,z),H.add(Me)}else Jt(Se,V,z),H.add(Se)}),E=x.pop(),H},this.compileAsync=function(v,w,V=null){const H=this.compile(v,w,V);return new Promise(z=>{function Se(){if(H.forEach(function(Ae){b.get(Ae).currentProgram.isReady()&&H.delete(Ae)}),H.size===0){z(v);return}setTimeout(Se,10)}We.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let ts=null;function Ar(v){ts&&ts(v)}function Ms(){fn.stop()}function Ti(){fn.start()}const fn=new Vc;fn.setAnimationLoop(Ar),typeof self<"u"&&fn.setContext(self),this.setAnimationLoop=function(v){ts=v,fe.setAnimationLoop(v),v===null?fn.stop():fn.start()},fe.addEventListener("sessionstart",Ms),fe.addEventListener("sessionend",Ti),this.render=function(v,w){if(w!==void 0&&w.isCamera!==!0){mt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;k!==null&&k.renderStart(v,w);const V=fe.enabled===!0&&fe.isPresenting===!0,H=A!==null&&(B===null||V)&&A.begin(O,B);if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),w.parent===null&&w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),fe.enabled===!0&&fe.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(fe.cameraAutoUpdate===!0&&fe.updateCamera(w),w=fe.getCamera()),v.isScene===!0&&v.onBeforeRender(O,v,w,B),E=ge.get(v,x.length),E.init(w),E.state.textureUnits=_.getTextureUnits(),x.push(E),me.multiplyMatrices(w.projectionMatrix,w.matrixWorldInverse),ze.setFromProjectionMatrix(me,wn,w.reversedDepth),ue=this.localClippingEnabled,Ct=be.init(this.clippingPlanes,ue),L=Q.get(v,D.length),L.init(),D.push(L),fe.enabled===!0&&fe.isPresenting===!0){const Ae=O.xr.getDepthSensingMesh();Ae!==null&&Ai(Ae,w,-1/0,O.sortObjects)}Ai(v,w,0,O.sortObjects),L.finish(),O.sortObjects===!0&&L.sort(ee,xe),ht=fe.enabled===!1||fe.isPresenting===!1||fe.hasDepthSensing()===!1,ht&&le.addToRenderList(L,v),this.info.render.frame++,Ct===!0&&be.beginShadows();const z=E.state.shadowsArray;if(he.render(z,v,w),Ct===!0&&be.endShadows(),this.info.autoReset===!0&&this.info.reset(),(H&&A.hasRenderPass())===!1){const Ae=L.opaque,Me=L.transmissive;if(E.setupLights(),w.isArrayCamera){const Le=w.cameras;if(Me.length>0)for(let Ue=0,tt=Le.length;Ue<tt;Ue++){const st=Le[Ue];wi(Ae,Me,v,st)}ht&&le.render(v);for(let Ue=0,tt=Le.length;Ue<tt;Ue++){const st=Le[Ue];ns(L,v,st,st.viewport)}}else Me.length>0&&wi(Ae,Me,v,w),ht&&le.render(v),ns(L,v,w)}B!==null&&X===0&&(_.updateMultisampleRenderTarget(B),_.updateRenderTargetMipmap(B)),H&&A.end(O),v.isScene===!0&&v.onAfterRender(O,v,w),ce.resetDefaultState(),G=-1,$=null,x.pop(),x.length>0?(E=x[x.length-1],_.setTextureUnits(E.state.textureUnits),Ct===!0&&be.setGlobalState(O.clippingPlanes,E.state.camera)):E=null,D.pop(),D.length>0?L=D[D.length-1]:L=null,k!==null&&k.renderEnd()};function Ai(v,w,V,H){if(v.visible===!1)return;if(v.layers.test(w.layers)){if(v.isGroup)V=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(w);else if(v.isLightProbeGrid)E.pushLightProbeGrid(v);else if(v.isLight)E.pushLight(v),v.castShadow&&E.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||ze.intersectsSprite(v)){H&&Ie.setFromMatrixPosition(v.matrixWorld).applyMatrix4(me);const Ae=oe.update(v),Me=v.material;Me.visible&&L.push(v,Ae,Me,V,Ie.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||ze.intersectsObject(v))){const Ae=oe.update(v),Me=v.material;if(H&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),Ie.copy(v.boundingSphere.center)):(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),Ie.copy(Ae.boundingSphere.center)),Ie.applyMatrix4(v.matrixWorld).applyMatrix4(me)),Array.isArray(Me)){const Le=Ae.groups;for(let Ue=0,tt=Le.length;Ue<tt;Ue++){const st=Le[Ue],Fe=Me[st.materialIndex];Fe&&Fe.visible&&L.push(v,Ae,Fe,V,Ie.z,st)}}else Me.visible&&L.push(v,Ae,Me,V,Ie.z,null)}}const Se=v.children;for(let Ae=0,Me=Se.length;Ae<Me;Ae++)Ai(Se[Ae],w,V,H)}function ns(v,w,V,H){const{opaque:z,transmissive:Se,transparent:Ae}=v;E.setupLightsView(V),Ct===!0&&be.setGlobalState(O.clippingPlanes,V),H&&ae.viewport(ie.copy(H)),z.length>0&&di(z,w,V),Se.length>0&&di(Se,w,V),Ae.length>0&&di(Ae,w,V),ae.buffers.depth.setTest(!0),ae.buffers.depth.setMask(!0),ae.buffers.color.setMask(!0),ae.setPolygonOffset(!1)}function wi(v,w,V,H){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[H.id]===void 0){const Fe=We.has("EXT_color_buffer_half_float")||We.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[H.id]=new Dn(1,1,{generateMipmaps:!0,type:Fe?Xn:cn,minFilter:vi,samples:Math.max(4,et.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ct.workingColorSpace})}const Se=E.state.transmissionRenderTarget[H.id],Ae=H.viewport||ie;Se.setSize(Ae.z*O.transmissionResolutionScale,Ae.w*O.transmissionResolutionScale);const Me=O.getRenderTarget(),Le=O.getActiveCubeFace(),Ue=O.getActiveMipmapLevel();O.setRenderTarget(Se),O.getClearColor(Re),De=O.getClearAlpha(),De<1&&O.setClearColor(16777215,.5),O.clear(),ht&&le.render(V);const tt=O.toneMapping;O.toneMapping=Ln;const st=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),E.setupLightsView(H),Ct===!0&&be.setGlobalState(O.clippingPlanes,H),di(v,V,H),_.updateMultisampleRenderTarget(Se),_.updateRenderTargetMipmap(Se),We.has("WEBGL_multisampled_render_to_texture")===!1){let Fe=!1;for(let yt=0,Nt=w.length;yt<Nt;yt++){const Dt=w[yt],{object:At,geometry:Xt,material:Te,group:nn}=Dt;if(Te.side===Gn&&At.layers.test(H.layers)){const pt=Te.side;Te.side=en,Te.needsUpdate=!0,Ss(At,V,H,Xt,Te,nn),Te.side=pt,Te.needsUpdate=!0,Fe=!0}}Fe===!0&&(_.updateMultisampleRenderTarget(Se),_.updateRenderTargetMipmap(Se))}O.setRenderTarget(Me,Le,Ue),O.setClearColor(Re,De),st!==void 0&&(H.viewport=st),O.toneMapping=tt}function di(v,w,V){const H=w.isScene===!0?w.overrideMaterial:null;for(let z=0,Se=v.length;z<Se;z++){const Ae=v[z],{object:Me,geometry:Le,group:Ue}=Ae;let tt=Ae.material;tt.allowOverride===!0&&H!==null&&(tt=H),Me.layers.test(V.layers)&&Ss(Me,w,V,Le,tt,Ue)}}function Ss(v,w,V,H,z,Se){v.onBeforeRender(O,w,V,H,z,Se),v.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),z.onBeforeRender(O,w,V,H,v,Se),z.transparent===!0&&z.side===Gn&&z.forceSinglePass===!1?(z.side=en,z.needsUpdate=!0,O.renderBufferDirect(V,w,H,z,v,Se),z.side=li,z.needsUpdate=!0,O.renderBufferDirect(V,w,H,z,v,Se),z.side=Gn):O.renderBufferDirect(V,w,H,z,v,Se),v.onAfterRender(O,w,V,H,z,Se)}function Kn(v,w,V){w.isScene!==!0&&(w=at);const H=b.get(v),z=E.state.lights,Se=E.state.shadowsArray,Ae=z.state.version,Me=de.getParameters(v,z.state,Se,w,V,E.state.lightProbeGridArray),Le=de.getProgramCacheKey(Me);let Ue=H.programs;H.environment=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?w.environment:null,H.fog=w.fog;const tt=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap;H.envMap=I.get(v.envMap||H.environment,tt),H.envMapRotation=H.environment!==null&&v.envMap===null?w.environmentRotation:v.envMapRotation,Ue===void 0&&(v.addEventListener("dispose",Pt),Ue=new Map,H.programs=Ue);let st=Ue.get(Le);if(st!==void 0){if(H.currentProgram===st&&H.lightsStateVersion===Ae)return bs(v,Me),st}else Me.uniforms=de.getUniforms(v),k!==null&&v.isNodeMaterial&&k.build(v,V,Me),v.onBeforeCompile(Me,O),st=de.acquireProgram(Me,Le),Ue.set(Le,st),H.uniforms=Me.uniforms;const Fe=H.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(Fe.clippingPlanes=be.uniform),bs(v,Me),H.needsLights=ye(v),H.lightsStateVersion=Ae,H.needsLights&&(Fe.ambientLightColor.value=z.state.ambient,Fe.lightProbe.value=z.state.probe,Fe.directionalLights.value=z.state.directional,Fe.directionalLightShadows.value=z.state.directionalShadow,Fe.spotLights.value=z.state.spot,Fe.spotLightShadows.value=z.state.spotShadow,Fe.rectAreaLights.value=z.state.rectArea,Fe.ltc_1.value=z.state.rectAreaLTC1,Fe.ltc_2.value=z.state.rectAreaLTC2,Fe.pointLights.value=z.state.point,Fe.pointLightShadows.value=z.state.pointShadow,Fe.hemisphereLights.value=z.state.hemi,Fe.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Fe.spotLightMatrix.value=z.state.spotLightMatrix,Fe.spotLightMap.value=z.state.spotLightMap,Fe.pointShadowMatrix.value=z.state.pointShadowMatrix),H.lightProbeGrid=E.state.lightProbeGridArray.length>0,H.currentProgram=st,H.uniformsList=null,st}function Ri(v){if(v.uniformsList===null){const w=v.currentProgram.getUniforms();v.uniformsList=rr.seqWithValue(w.seq,v.uniforms)}return v.uniformsList}function bs(v,w){const V=b.get(v);V.outputColorSpace=w.outputColorSpace,V.batching=w.batching,V.batchingColor=w.batchingColor,V.instancing=w.instancing,V.instancingColor=w.instancingColor,V.instancingMorph=w.instancingMorph,V.skinning=w.skinning,V.morphTargets=w.morphTargets,V.morphNormals=w.morphNormals,V.morphColors=w.morphColors,V.morphTargetsCount=w.morphTargetsCount,V.numClippingPlanes=w.numClippingPlanes,V.numIntersection=w.numClipIntersection,V.vertexAlphas=w.vertexAlphas,V.vertexTangents=w.vertexTangents,V.toneMapping=w.toneMapping}function wr(v,w){if(v.length===0)return null;if(v.length===1)return v[0].texture!==null?v[0]:null;y.setFromMatrixPosition(w.matrixWorld);for(let V=0,H=v.length;V<H;V++){const z=v[V];if(z.texture!==null&&z.boundingBox.containsPoint(y))return z}return null}function Rr(v,w,V,H,z){w.isScene!==!0&&(w=at),_.resetTextureUnits();const Se=w.fog,Ae=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?w.environment:null,Me=B===null?O.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:ct.workingColorSpace,Le=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,Ue=I.get(H.envMap||Ae,Le),tt=H.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,st=!!V.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Fe=!!V.morphAttributes.position,yt=!!V.morphAttributes.normal,Nt=!!V.morphAttributes.color;let Dt=Ln;H.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(Dt=O.toneMapping);const At=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Xt=At!==void 0?At.length:0,Te=b.get(H),nn=E.state.lights;if(Ct===!0&&(ue===!0||v!==$)){const Rt=v===$&&H.id===G;be.setState(H,v,Rt)}let pt=!1;H.version===Te.__version?(Te.needsLights&&Te.lightsStateVersion!==nn.state.version||Te.outputColorSpace!==Me||z.isBatchedMesh&&Te.batching===!1||!z.isBatchedMesh&&Te.batching===!0||z.isBatchedMesh&&Te.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Te.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Te.instancing===!1||!z.isInstancedMesh&&Te.instancing===!0||z.isSkinnedMesh&&Te.skinning===!1||!z.isSkinnedMesh&&Te.skinning===!0||z.isInstancedMesh&&Te.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Te.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Te.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Te.instancingMorph===!1&&z.morphTexture!==null||Te.envMap!==Ue||H.fog===!0&&Te.fog!==Se||Te.numClippingPlanes!==void 0&&(Te.numClippingPlanes!==be.numPlanes||Te.numIntersection!==be.numIntersection)||Te.vertexAlphas!==tt||Te.vertexTangents!==st||Te.morphTargets!==Fe||Te.morphNormals!==yt||Te.morphColors!==Nt||Te.toneMapping!==Dt||Te.morphTargetsCount!==Xt||!!Te.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(pt=!0):(pt=!0,Te.__version=H.version);let un=Te.currentProgram;pt===!0&&(un=Kn(H,w,z),k&&H.isNodeMaterial&&k.onUpdateProgram(H,un,Te));let bn=!1,Zn=!1,Ci=!1;const wt=un.getUniforms(),Ft=Te.uniforms;if(ae.useProgram(un.program)&&(bn=!0,Zn=!0,Ci=!0),H.id!==G&&(G=H.id,Zn=!0),Te.needsLights){const Rt=wr(E.state.lightProbeGridArray,z);Te.lightProbeGrid!==Rt&&(Te.lightProbeGrid=Rt,Zn=!0)}if(bn||$!==v){ae.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),wt.setValue(C,"projectionMatrix",v.projectionMatrix),wt.setValue(C,"viewMatrix",v.matrixWorldInverse);const Jn=wt.map.cameraPosition;Jn!==void 0&&Jn.setValue(C,He.setFromMatrixPosition(v.matrixWorld)),et.logarithmicDepthBuffer&&wt.setValue(C,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&wt.setValue(C,"isOrthographic",v.isOrthographicCamera===!0),$!==v&&($=v,Zn=!0,Ci=!0)}if(Te.needsLights&&(nn.state.directionalShadowMap.length>0&&wt.setValue(C,"directionalShadowMap",nn.state.directionalShadowMap,_),nn.state.spotShadowMap.length>0&&wt.setValue(C,"spotShadowMap",nn.state.spotShadowMap,_),nn.state.pointShadowMap.length>0&&wt.setValue(C,"pointShadowMap",nn.state.pointShadowMap,_)),z.isSkinnedMesh){wt.setOptional(C,z,"bindMatrix"),wt.setOptional(C,z,"bindMatrixInverse");const Rt=z.skeleton;Rt&&(Rt.boneTexture===null&&Rt.computeBoneTexture(),wt.setValue(C,"boneTexture",Rt.boneTexture,_))}z.isBatchedMesh&&(wt.setOptional(C,z,"batchingTexture"),wt.setValue(C,"batchingTexture",z._matricesTexture,_),wt.setOptional(C,z,"batchingIdTexture"),wt.setValue(C,"batchingIdTexture",z._indirectTexture,_),wt.setOptional(C,z,"batchingColorTexture"),z._colorsTexture!==null&&wt.setValue(C,"batchingColorTexture",z._colorsTexture,_));const jn=V.morphAttributes;if((jn.position!==void 0||jn.normal!==void 0||jn.color!==void 0)&&qe.update(z,V,un),(Zn||Te.receiveShadow!==z.receiveShadow)&&(Te.receiveShadow=z.receiveShadow,wt.setValue(C,"receiveShadow",z.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&w.environment!==null&&(Ft.envMapIntensity.value=w.environmentIntensity),Ft.dfgLUT!==void 0&&(Ft.dfgLUT.value=lS()),Zn){if(wt.setValue(C,"toneMappingExposure",O.toneMappingExposure),Te.needsLights&&Cr(Ft,Ci),Se&&H.fog===!0&&K.refreshFogUniforms(Ft,Se),K.refreshMaterialUniforms(Ft,H,Ze,St,E.state.transmissionRenderTarget[v.id]),Te.needsLights&&Te.lightProbeGrid){const Rt=Te.lightProbeGrid;Ft.probesSH.value=Rt.texture,Ft.probesMin.value.copy(Rt.boundingBox.min),Ft.probesMax.value.copy(Rt.boundingBox.max),Ft.probesResolution.value.copy(Rt.resolution)}rr.upload(C,Ri(Te),Ft,_)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(rr.upload(C,Ri(Te),Ft,_),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&wt.setValue(C,"center",z.center),wt.setValue(C,"modelViewMatrix",z.modelViewMatrix),wt.setValue(C,"normalMatrix",z.normalMatrix),wt.setValue(C,"modelMatrix",z.matrixWorld),H.uniformsGroups!==void 0){const Rt=H.uniformsGroups;for(let Jn=0,Pi=Rt.length;Jn<Pi;Jn++){const $o=Rt[Jn];Z.update($o,un),Z.bind($o,un)}}return un}function Cr(v,w){v.ambientLightColor.needsUpdate=w,v.lightProbe.needsUpdate=w,v.directionalLights.needsUpdate=w,v.directionalLightShadows.needsUpdate=w,v.pointLights.needsUpdate=w,v.pointLightShadows.needsUpdate=w,v.spotLights.needsUpdate=w,v.spotLightShadows.needsUpdate=w,v.rectAreaLights.needsUpdate=w,v.hemisphereLights.needsUpdate=w}function ye(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(v,w,V){const H=b.get(v);H.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),b.get(v.texture).__webglTexture=w,b.get(v.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:V,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,w){const V=b.get(v);V.__webglFramebuffer=w,V.__useDefaultFramebuffer=w===void 0};const nt=C.createFramebuffer();this.setRenderTarget=function(v,w=0,V=0){B=v,q=w,X=V;let H=null,z=!1,Se=!1;if(v){const Me=b.get(v);if(Me.__useDefaultFramebuffer!==void 0){ae.bindFramebuffer(C.FRAMEBUFFER,Me.__webglFramebuffer),ie.copy(v.viewport),re.copy(v.scissor),_e=v.scissorTest,ae.viewport(ie),ae.scissor(re),ae.setScissorTest(_e),G=-1;return}else if(Me.__webglFramebuffer===void 0)_.setupRenderTarget(v);else if(Me.__hasExternalTextures)_.rebindTextures(v,b.get(v.texture).__webglTexture,b.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){const tt=v.depthTexture;if(Me.__boundDepthTexture!==tt){if(tt!==null&&b.has(tt)&&(v.width!==tt.image.width||v.height!==tt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");_.setupDepthRenderbuffer(v)}}const Le=v.texture;(Le.isData3DTexture||Le.isDataArrayTexture||Le.isCompressedArrayTexture)&&(Se=!0);const Ue=b.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Ue[w])?H=Ue[w][V]:H=Ue[w],z=!0):v.samples>0&&_.useMultisampledRTT(v)===!1?H=b.get(v).__webglMultisampledFramebuffer:Array.isArray(Ue)?H=Ue[V]:H=Ue,ie.copy(v.viewport),re.copy(v.scissor),_e=v.scissorTest}else ie.copy(pe).multiplyScalar(Ze).floor(),re.copy(Ve).multiplyScalar(Ze).floor(),_e=Xe;if(V!==0&&(H=nt),ae.bindFramebuffer(C.FRAMEBUFFER,H)&&ae.drawBuffers(v,H),ae.viewport(ie),ae.scissor(re),ae.setScissorTest(_e),z){const Me=b.get(v.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+w,Me.__webglTexture,V)}else if(Se){const Me=w;for(let Le=0;Le<v.textures.length;Le++){const Ue=b.get(v.textures[Le]);C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0+Le,Ue.__webglTexture,V,Me)}}else if(v!==null&&V!==0){const Me=b.get(v.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Me.__webglTexture,V)}G=-1},this.readRenderTargetPixels=function(v,w,V,H,z,Se,Ae,Me=0){if(!(v&&v.isWebGLRenderTarget)){mt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=b.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&Ae!==void 0&&(Le=Le[Ae]),Le){ae.bindFramebuffer(C.FRAMEBUFFER,Le);try{const Ue=v.textures[Me],tt=Ue.format,st=Ue.type;if(v.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+Me),!et.textureFormatReadable(tt)){mt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!et.textureTypeReadable(st)){mt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}w>=0&&w<=v.width-H&&V>=0&&V<=v.height-z&&C.readPixels(w,V,H,z,P.convert(tt),P.convert(st),Se)}finally{const Ue=B!==null?b.get(B).__webglFramebuffer:null;ae.bindFramebuffer(C.FRAMEBUFFER,Ue)}}},this.readRenderTargetPixelsAsync=async function(v,w,V,H,z,Se,Ae,Me=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Le=b.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&Ae!==void 0&&(Le=Le[Ae]),Le)if(w>=0&&w<=v.width-H&&V>=0&&V<=v.height-z){ae.bindFramebuffer(C.FRAMEBUFFER,Le);const Ue=v.textures[Me],tt=Ue.format,st=Ue.type;if(v.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+Me),!et.textureFormatReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!et.textureTypeReadable(st))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Fe=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,Fe),C.bufferData(C.PIXEL_PACK_BUFFER,Se.byteLength,C.STREAM_READ),C.readPixels(w,V,H,z,P.convert(tt),P.convert(st),0);const yt=B!==null?b.get(B).__webglFramebuffer:null;ae.bindFramebuffer(C.FRAMEBUFFER,yt);const Nt=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await A_(C,Nt,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,Fe),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,Se),C.deleteBuffer(Fe),C.deleteSync(Nt),Se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,w=null,V=0){const H=Math.pow(2,-V),z=Math.floor(v.image.width*H),Se=Math.floor(v.image.height*H),Ae=w!==null?w.x:0,Me=w!==null?w.y:0;_.setTexture2D(v,0),C.copyTexSubImage2D(C.TEXTURE_2D,V,0,0,Ae,Me,z,Se),ae.unbindTexture()};const ke=C.createFramebuffer(),Mt=C.createFramebuffer();this.copyTextureToTexture=function(v,w,V=null,H=null,z=0,Se=0){let Ae,Me,Le,Ue,tt,st,Fe,yt,Nt;const Dt=v.isCompressedTexture?v.mipmaps[Se]:v.image;if(V!==null)Ae=V.max.x-V.min.x,Me=V.max.y-V.min.y,Le=V.isBox3?V.max.z-V.min.z:1,Ue=V.min.x,tt=V.min.y,st=V.isBox3?V.min.z:0;else{const Ft=Math.pow(2,-z);Ae=Math.floor(Dt.width*Ft),Me=Math.floor(Dt.height*Ft),v.isDataArrayTexture?Le=Dt.depth:v.isData3DTexture?Le=Math.floor(Dt.depth*Ft):Le=1,Ue=0,tt=0,st=0}H!==null?(Fe=H.x,yt=H.y,Nt=H.z):(Fe=0,yt=0,Nt=0);const At=P.convert(w.format),Xt=P.convert(w.type);let Te;w.isData3DTexture?(_.setTexture3D(w,0),Te=C.TEXTURE_3D):w.isDataArrayTexture||w.isCompressedArrayTexture?(_.setTexture2DArray(w,0),Te=C.TEXTURE_2D_ARRAY):(_.setTexture2D(w,0),Te=C.TEXTURE_2D),ae.activeTexture(C.TEXTURE0),ae.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,w.flipY),ae.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),ae.pixelStorei(C.UNPACK_ALIGNMENT,w.unpackAlignment);const nn=ae.getParameter(C.UNPACK_ROW_LENGTH),pt=ae.getParameter(C.UNPACK_IMAGE_HEIGHT),un=ae.getParameter(C.UNPACK_SKIP_PIXELS),bn=ae.getParameter(C.UNPACK_SKIP_ROWS),Zn=ae.getParameter(C.UNPACK_SKIP_IMAGES);ae.pixelStorei(C.UNPACK_ROW_LENGTH,Dt.width),ae.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Dt.height),ae.pixelStorei(C.UNPACK_SKIP_PIXELS,Ue),ae.pixelStorei(C.UNPACK_SKIP_ROWS,tt),ae.pixelStorei(C.UNPACK_SKIP_IMAGES,st);const Ci=v.isDataArrayTexture||v.isData3DTexture,wt=w.isDataArrayTexture||w.isData3DTexture;if(v.isDepthTexture){const Ft=b.get(v),jn=b.get(w),Rt=b.get(Ft.__renderTarget),Jn=b.get(jn.__renderTarget);ae.bindFramebuffer(C.READ_FRAMEBUFFER,Rt.__webglFramebuffer),ae.bindFramebuffer(C.DRAW_FRAMEBUFFER,Jn.__webglFramebuffer);for(let Pi=0;Pi<Le;Pi++)Ci&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,b.get(v).__webglTexture,z,st+Pi),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,b.get(w).__webglTexture,Se,Nt+Pi)),C.blitFramebuffer(Ue,tt,Ae,Me,Fe,yt,Ae,Me,C.DEPTH_BUFFER_BIT,C.NEAREST);ae.bindFramebuffer(C.READ_FRAMEBUFFER,null),ae.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(z!==0||v.isRenderTargetTexture||b.has(v)){const Ft=b.get(v),jn=b.get(w);ae.bindFramebuffer(C.READ_FRAMEBUFFER,ke),ae.bindFramebuffer(C.DRAW_FRAMEBUFFER,Mt);for(let Rt=0;Rt<Le;Rt++)Ci?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Ft.__webglTexture,z,st+Rt):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Ft.__webglTexture,z),wt?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,jn.__webglTexture,Se,Nt+Rt):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,jn.__webglTexture,Se),z!==0?C.blitFramebuffer(Ue,tt,Ae,Me,Fe,yt,Ae,Me,C.COLOR_BUFFER_BIT,C.NEAREST):wt?C.copyTexSubImage3D(Te,Se,Fe,yt,Nt+Rt,Ue,tt,Ae,Me):C.copyTexSubImage2D(Te,Se,Fe,yt,Ue,tt,Ae,Me);ae.bindFramebuffer(C.READ_FRAMEBUFFER,null),ae.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else wt?v.isDataTexture||v.isData3DTexture?C.texSubImage3D(Te,Se,Fe,yt,Nt,Ae,Me,Le,At,Xt,Dt.data):w.isCompressedArrayTexture?C.compressedTexSubImage3D(Te,Se,Fe,yt,Nt,Ae,Me,Le,At,Dt.data):C.texSubImage3D(Te,Se,Fe,yt,Nt,Ae,Me,Le,At,Xt,Dt):v.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,Se,Fe,yt,Ae,Me,At,Xt,Dt.data):v.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,Se,Fe,yt,Dt.width,Dt.height,At,Dt.data):C.texSubImage2D(C.TEXTURE_2D,Se,Fe,yt,Ae,Me,At,Xt,Dt);ae.pixelStorei(C.UNPACK_ROW_LENGTH,nn),ae.pixelStorei(C.UNPACK_IMAGE_HEIGHT,pt),ae.pixelStorei(C.UNPACK_SKIP_PIXELS,un),ae.pixelStorei(C.UNPACK_SKIP_ROWS,bn),ae.pixelStorei(C.UNPACK_SKIP_IMAGES,Zn),Se===0&&w.generateMipmaps&&C.generateMipmap(Te),ae.unbindTexture()},this.initRenderTarget=function(v){b.get(v).__webglFramebuffer===void 0&&_.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?_.setTextureCube(v,0):v.isData3DTexture?_.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?_.setTexture2DArray(v,0):_.setTexture2D(v,0),ae.unbindTexture()},this.resetState=function(){q=0,X=0,B=null,ae.reset(),ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=ct._getDrawingBufferColorSpace(e),t.unpackColorSpace=ct._getUnpackColorSpace()}}const uS={class:"turbine-hud"},dS={class:"hud-modes"},hS={class:"hud-telemetry"},fS=["title"],pS={class:"rpm-value"},mS={class:"hud-actions"},_S=["title"],gS=9600,vS=we({__name:"TurbineHero",setup(i){const{isDark:e}=go(),t=Je(null),n=Je("split"),s=Je(!1),r=Je(1),a=Je("9,600"),o=Je(!1);let l=null,c=null,d=null,f=null,u=null,m=null,g=!0,M=null,p=null,h=null,S=null,T=null,y=null;const L=[],E=[];let D=null;const x=new zn(new F(-1,0,0),0),A=new zn(new F(1,0,0),0);let O=!1,R={x:0,y:0},k=.22,q=-.58,X=.22,B=-.58,G=null,$=!0;function ie(){if(s.value)a.value="0";else{const ue=Math.floor(Math.random()*80-40),me=Math.round(gS*r.value+ue);a.value=me.toLocaleString()}}function re(ue){n.value=ue,lt()}function _e(){s.value=!s.value,ie()}function Re(ue){r.value=ue,s.value=!1,ie()}function De(){k=.22,q=-.55,X=.22,B=-.55,$=!0,d&&(d.position.set(0,.15,8.8),d.lookAt(0,0,0))}function lt(){if(!l)return;const ue=n.value;ue==="split"?(l.localClippingEnabled=!0,h&&(h.visible=!0),S&&(S.visible=!0)):ue==="wireframe"?(l.localClippingEnabled=!1,h&&(h.visible=!1),S&&(S.visible=!0)):ue==="solid"&&(l.localClippingEnabled=!1,h&&(h.visible=!0),S&&(S.visible=!1))}function St(ue){const me=ue?61695:165063,He=ue?959977:223649;for(const Ie of L)Ie.color.setHex(me);for(const Ie of E)Ie.color.setHex(He);D&&D.color.setHex(ue?65535:165063),y&&(y.color.setHex(ue?1976635:14870768),y.intensity=ue?.9:1.4)}Mn(e,ue=>{St(ue)});function Ze(){const ue=new gn,me=new gn,He=new gn,Ie=new gn;L.length=0,E.length=0;const at=e.value??!0,ht=at?61695:165063,Tt=at?959977:223649,C=new Gi({color:9413567,roughness:.24,metalness:.88,clippingPlanes:[x],clipShadows:!0}),ft=new Gi({color:14608109,roughness:.15,metalness:.95,clippingPlanes:[x],clipShadows:!0}),We=new Gi({color:2569544,roughness:.18,metalness:.84,clippingPlanes:[x],clipShadows:!0}),et=new Gi({color:14870768,roughness:.12,metalness:.96,clippingPlanes:[x],clipShadows:!0}),ae=new Gi({color:5926277,roughness:.3,metalness:.85,clippingPlanes:[x],clipShadows:!0}),vt=new Gi({color:6583435,roughness:.35,metalness:.8,clippingPlanes:[x],clipShadows:!0}),b=new uo({color:ht,transparent:!0,opacity:.9,clippingPlanes:[A]});L.push(b);const _=new Vo({color:Tt,transparent:!0,opacity:.08,depthWrite:!1,clippingPlanes:[A]});E.push(_);function I(ye,nt,ke=!1,Mt=22){const v=new Sn(ye,nt);ke?j.add(v):me.add(v);const w=new Sn(ye,_),V=new eg(ye,Mt),H=new Ml(V,b),z=new gn;z.add(w),z.add(H),ke?te.add(z):He.add(z)}const j=new gn,te=new gn;Ie.add(j),Ie.add(te);const oe=new Xi(2.32,.14,16,40);oe.translate(0,0,2.3),I(oe,C,!1,28);const de=new Wt(2.36,2.44,3.4,40,5,!0);de.rotateX(Math.PI/2),de.translate(0,0,.6),I(de,C,!1,24);const K=new Wt(2.18,2.22,3.3,40,4,!0);K.rotateX(Math.PI/2),K.translate(0,0,.6),I(K,ae,!1,24);const Q=[2.1,1.3,.4,-.4,-1];for(const ye of Q){const nt=new Xi(2.44,.045,8,40);nt.translate(0,0,ye),I(nt,C,!1,28)}const ge=new Wt(2.26,2.36,.6,40,2,!0);ge.rotateX(Math.PI/2),ge.translate(0,0,-1.3),I(ge,C,!1,24);const be=[],he=40,le=[{z:2.32,r:2.42},{z:2.1,r:2.44},{z:1.7,r:2.44},{z:1.3,r:2.44},{z:.85,r:2.44},{z:.4,r:2.44},{z:0,r:2.44},{z:-.4,r:2.44},{z:-.7,r:2.44},{z:-1,r:2.44},{z:-1.3,r:2.36},{z:-1.6,r:2.26}];for(let ye=0;ye<he;ye++){const nt=ye*Math.PI*2/he,ke=Math.cos(nt),Mt=Math.sin(nt);for(let v=0;v<le.length-1;v++){const w=le[v],V=le[v+1];be.push(w.r*ke,w.r*Mt,w.z,V.r*ke,V.r*Mt,V.z)}}const qe=[1.7,.85,0,-.7];for(const ye of qe)for(let Mt=0;Mt<40;Mt++){const v=Mt*Math.PI*2/40,w=(Mt+1)*Math.PI*2/40;be.push(2.44*Math.cos(v),2.44*Math.sin(v),ye,2.44*Math.cos(w),2.44*Math.sin(w),ye)}const Ke=24,ot=[{z:2.25,r:2.18},{z:1.3,r:2.19},{z:.4,r:2.2},{z:-.4,r:2.21},{z:-1.05,r:2.22}];for(let ye=0;ye<Ke;ye++){const nt=ye*Math.PI*2/Ke,ke=Math.cos(nt),Mt=Math.sin(nt);for(let v=0;v<ot.length-1;v++){const w=ot[v],V=ot[v+1];be.push(w.r*ke,w.r*Mt,w.z,V.r*ke,V.r*Mt,V.z)}}const P=16,ce=[{z:1.2,r:.96},{z:.85,r:.96},{z:.52,r:.96},{z:.24,r:.96},{z:-.04,r:.96},{z:-.65,r:.86}];for(let ye=0;ye<P;ye++){const nt=ye*Math.PI*2/P,ke=Math.cos(nt),Mt=Math.sin(nt);for(let v=0;v<ce.length-1;v++){const w=ce[v],V=ce[v+1];be.push(w.r*ke,w.r*Mt,w.z,V.r*ke,V.r*Mt,V.z)}}const Z=new Bt;Z.setAttribute("position",new Ut(be,3));const Ee=new Ml(Z,b);He.add(Ee);const fe=24;for(let ye=0;ye<fe;ye++){const nt=ye*Math.PI*2/fe,ke=new an(.04,1.25,.22);ke.translate(0,1.55,1.5),ke.rotateZ(nt),ke.rotateY(.18),I(ke,ae,!1,20)}for(let ye=0;ye<4;ye++){const nt=ye*Math.PI/2,ke=new an(.12,1.35,.45);ke.translate(0,1.58,.3),ke.rotateZ(nt),I(ke,ae,!1,20)}const ne=new pr(.7,1.15,32);ne.rotateX(Math.PI/2),ne.translate(0,0,2.22),I(ne,We,!0,28);const Pe=new Wt(.72,.72,.25,32);Pe.rotateX(Math.PI/2),Pe.translate(0,0,1.55),I(Pe,et,!0,28);const Ye=new Go(.06,16,16);Ye.translate(0,0,2.8),I(Ye,et,!0,28);const Pt=22,xt=1.48;for(let ye=0;ye<Pt;ye++){const nt=ye*Math.PI*2/Pt,ke=new an(.045,xt,.46);ke.translate(0,.7+xt/2,0),ke.rotateX(.52),ke.rotateY(-.15),ke.rotateZ(nt),ke.translate(0,0,1.82),I(ke,ft,!0,18)}const tn=new Wt(.18,.18,5.2,20);tn.rotateX(Math.PI/2),tn.translate(0,0,-.4),I(tn,et,!0,25);const Jt=new Wt(.42,.52,1.4,28);Jt.rotateX(Math.PI/2),Jt.translate(0,0,.1),I(Jt,et,!0,25);const ts=[{z:1.35,r:1.15,blades:18,chord:.28},{z:1.05,r:1.05,blades:20,chord:.24}];for(const ye of ts){const nt=new Wt(ye.r*.5,ye.r*.5,.08,20);nt.rotateX(Math.PI/2),nt.translate(0,0,ye.z),I(nt,et,!0,25);const ke=ye.r*.52;for(let Mt=0;Mt<ye.blades;Mt++){const v=Mt*Math.PI*2/ye.blades,w=new an(.035,ke,ye.chord);w.translate(0,ye.r*.5+ke/2,0),w.rotateX(.42),w.rotateZ(v),w.translate(0,0,ye.z),I(w,ft,!0,18)}}const Ar=[{z:.65,r:.94,blades:24,chord:.18},{z:.38,r:.88,blades:26,chord:.16},{z:.1,r:.82,blades:28,chord:.14},{z:-.18,r:.76,blades:30,chord:.12}];for(const ye of Ar){const nt=new Wt(ye.r*.55,ye.r*.55,.06,20);nt.rotateX(Math.PI/2),nt.translate(0,0,ye.z),I(nt,et,!0,25);const ke=ye.r*.46;for(let Mt=0;Mt<ye.blades;Mt++){const v=Mt*Math.PI*2/ye.blades,w=new an(.025,ke,ye.chord);w.translate(0,ye.r*.55+ke/2,0),w.rotateX(.36),w.rotateZ(v),w.translate(0,0,ye.z),I(w,ft,!0,18)}}const Ms=[1.2,.85,.52,.24,-.04];for(const ye of Ms){const nt=new Xi(.96,.025,6,32);nt.translate(0,0,ye),I(nt,ae,!1,28);for(let ke=0;ke<14;ke++){const Mt=ke*Math.PI*2/14,v=new an(.02,.35,.12);v.translate(0,.78,0),v.rotateX(-.35),v.rotateZ(Mt),v.translate(0,0,ye),I(v,ae,!1,18)}}const Ti=new Wt(.85,1.05,3.2,32,4,!0);Ti.rotateX(Math.PI/2),Ti.translate(0,0,-.4),I(Ti,ae,!1,24);const fn=new Wt(.78,.82,.7,28,2,!0);fn.rotateX(Math.PI/2),fn.translate(0,0,-.65),I(fn,vt,!1,24);const Ai=new Xi(.86,.035,8,32);Ai.translate(0,0,-.65),I(Ai,et,!1,28);const ns=16;for(let ye=0;ye<ns;ye++){const nt=ye*Math.PI*2/ns,ke=new Wt(.04,.04,.16,10);ke.translate(0,.82,-.65),ke.rotateZ(nt),I(ke,et,!1,20)}const wi=new Wt(.48,.48,.08,20);wi.rotateX(Math.PI/2),wi.translate(0,0,-1.22),I(wi,et,!0,25);const di=28;for(let ye=0;ye<di;ye++){const nt=ye*Math.PI*2/di,ke=new an(.028,.42,.16);ke.translate(0,.48+.21,0),ke.rotateX(-.48),ke.rotateZ(nt),ke.translate(0,0,-1.22),I(ke,ft,!0,18)}const Ss=[{z:-1.62,r:.86,blades:26,chord:.18},{z:-1.98,r:.82,blades:24,chord:.2}];for(const ye of Ss){const nt=new Wt(.44,.44,.08,20);nt.rotateX(Math.PI/2),nt.translate(0,0,ye.z),I(nt,et,!0,25);const ke=ye.r-.44;for(let Mt=0;Mt<ye.blades;Mt++){const v=Mt*Math.PI*2/ye.blades,w=new an(.03,ke,ye.chord);w.translate(0,.44+ke/2,0),w.rotateX(-.42),w.rotateZ(v),w.translate(0,0,ye.z),I(w,ft,!0,18)}}const Kn=new pr(.5,1.25,28);Kn.rotateX(-Math.PI/2),Kn.translate(0,0,-2.65),I(Kn,We,!0,25);const Ri=new Wt(.92,.84,.9,32,2,!0);Ri.rotateX(Math.PI/2),Ri.translate(0,0,-2.25),I(Ri,ae,!1,24);const bs=[new F(0,2.18,2.3),new F(0,2.44,2.3),new F(0,2.44,-1.3),new F(0,2.22,-1.3)],wr=[new F(0,-2.18,2.3),new F(0,-2.44,2.3),new F(0,-2.44,-1.3),new F(0,-2.22,-1.3)],Rr=new Bt().setFromPoints(bs),Cr=new Bt().setFromPoints(wr);return D=new uo({color:at?65535:165063,transparent:!0,opacity:.95}),ue.add(new ho(Rr,D)),ue.add(new ho(Cr,D)),ue.add(me),ue.add(He),ue.add(Ie),{assembly:ue,solid:me,wire:He,rotor:Ie}}function ee(){const me=new Float32Array(360),He=new Float32Array(120);for(let Tt=0;Tt<120;Tt++){const C=Math.random()*Math.PI*2,ft=.45+Math.random()*1.7,We=Math.cos(C)*ft,et=Math.sin(C)*ft,ae=3.6-Math.random()*7.2;me[Tt*3]=We,me[Tt*3+1]=et,me[Tt*3+2]=ae,He[Tt]=.05+Math.random()*.08}const Ie=new Bt;Ie.setAttribute("position",new xn(me,3));const at=new Ic({color:3718648,size:.05,transparent:!0,opacity:.55,blending:xa}),ht=new J_(Ie,at);return ht._velocities=He,ht}function xe(ue,me){const Ie=ue.geometry.getAttribute("position"),at=Ie.array,ht=ue._velocities,Tt=ht.length;for(let C=0;C<Tt;C++)if(at[C*3+2]-=ht[C]*me,at[C*3+2]<-3.6){at[C*3+2]=3.6;const ft=Math.random()*Math.PI*2,We=.45+Math.random()*1.7;at[C*3]=Math.cos(ft)*We,at[C*3+1]=Math.sin(ft)*We}Ie.needsUpdate=!0}function pe(){if(!t.value)return;const ue=t.value.clientWidth||480,me=t.value.clientHeight||450;c=new G_,d=new ln(40,ue/me,.1,100),d.position.set(0,.15,8.8),d.lookAt(0,0,0),l=new cS({antialias:!0,alpha:!0,powerPreference:"high-performance"}),l.setSize(ue,me),l.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),l.localClippingEnabled=!0,l.outputColorSpace=on,l.toneMapping=Co,l.toneMappingExposure=1.15,t.value.innerHTML="",t.value.appendChild(l.domElement);const He=e.value??!0;y=new dg(He?1976635:14870768,He?.9:1.4),c.add(y);const Ie=new aa(14742270,2.4);Ie.position.set(5,6,7),c.add(Ie);const at=new aa(8490232,1.4);at.position.set(-6,-3,3),c.add(at);const ht=new aa(61695,3.2);ht.position.set(0,5,-6),c.add(ht);const Tt=new cg(54015,1.8,4);Tt.position.set(0,0,-.6),c.add(Tt);const C=Ze();M=C.assembly,h=C.solid,S=C.wire,p=C.rotor,M.rotation.x=X,M.rotation.y=B,c.add(M),T=ee(),M.add(T),u=new ResizeObserver(ae=>{for(const vt of ae){const{width:b,height:_}=vt.contentRect;b>0&&_>0&&d&&l&&(d.aspect=b/_,d.updateProjectionMatrix(),l.setSize(b,_))}}),u.observe(t.value),m=new IntersectionObserver(ae=>{for(const vt of ae)g=vt.isIntersecting}),m.observe(t.value);let ft=performance.now(),We=0;const et=ae=>{if(f=requestAnimationFrame(et),!g)return;const vt=Math.min((ae-ft)/1e3,.1);ft=ae,We+=vt,We>.4&&(We=0,ie());const b=s.value?0:r.value;if(p&&b>0&&(p.rotation.z+=14*vt*b),T&&b>0&&xe(T,b),$&&!O&&b>0){const _=ae*8e-4;q=-.55+Math.sin(_)*.2,k=.22+Math.cos(_*.7)*.06}if(X+=(k-X)*.08,B+=(q-B)*.08,M&&(M.rotation.x=X,M.rotation.y=B,l&&l.localClippingEnabled)){const _=new F(-1,0,0),I=new F(1,0,0),j=new F,te=new F,oe=new F;M.getWorldPosition(oe),j.copy(_).applyQuaternion(M.quaternion),x.setFromNormalAndCoplanarPoint(j,oe),te.copy(I).applyQuaternion(M.quaternion),A.setFromNormalAndCoplanarPoint(te,oe)}l&&c&&d&&l.render(c,d)};f=requestAnimationFrame(et)}function Ve(ue){O=!0,o.value=!0,$=!1,G&&clearTimeout(G);const me="touches"in ue?ue.touches[0].clientX:ue.clientX,He="touches"in ue?ue.touches[0].clientY:ue.clientY;R={x:me,y:He}}function Xe(ue){if(!O)return;const me="touches"in ue?ue.touches[0].clientX:ue.clientX,He="touches"in ue?ue.touches[0].clientY:ue.clientY,Ie=me-R.x,at=He-R.y;q+=Ie*.0075,k=Math.max(-1.1,Math.min(1.1,k+at*.0075)),R={x:me,y:He}}function ze(){O=!1,o.value=!1,G&&clearTimeout(G),G=setTimeout(()=>{$=!0},3200)}function Ct(ue){if(ue.preventDefault(),!d)return;const me=d.position.z+ue.deltaY*.005;d.position.z=Math.max(4.5,Math.min(12,me))}return Nn(()=>{typeof window<"u"&&(pe(),ie())}),_r(()=>{f!==null&&cancelAnimationFrame(f),u&&u.disconnect(),m&&m.disconnect(),G&&clearTimeout(G),l&&(l.dispose(),l.forceContextLoss(),l.domElement&&l.domElement.parentNode&&l.domElement.parentNode.removeChild(l.domElement)),c=null,d=null,l=null}),(ue,me)=>(N(),Y("div",{class:dt(["turbine-hero-wrapper",{dragging:o.value}]),onMousedown:Ve,onMousemove:Xe,onMouseup:ze,onMouseleave:ze,onTouchstartPassive:Ve,onTouchmovePassive:Xe,onTouchend:ze,onWheel:Ct},[me[12]||(me[12]=U("div",{class:"turbine-aura"},null,-1)),U("div",{ref_key:"containerRef",ref:t,class:"turbine-canvas-container"},null,512),U("div",uS,[U("div",{class:"hud-panel",onMousedown:me[4]||(me[4]=ma(()=>{},["stop"])),onTouchstart:me[5]||(me[5]=ma(()=>{},["stop"]))},[U("div",dS,[U("button",{type:"button",class:dt(["hud-btn",{active:n.value==="split"}]),title:"Half Blue Wireframe / Half Solid Titanium",onClick:me[0]||(me[0]=He=>re("split"))},[...me[6]||(me[6]=[U("span",{class:"mode-icon"},"⚡",-1),U("span",{class:"mode-label"},"Split Cutaway",-1)])],2),U("button",{type:"button",class:dt(["hud-btn",{active:n.value==="wireframe"}]),title:"Full Holographic Cyan Wireframe",onClick:me[1]||(me[1]=He=>re("wireframe"))},[...me[7]||(me[7]=[U("span",{class:"mode-icon"},"🌐",-1),U("span",{class:"mode-label"},"Wireframe",-1)])],2),U("button",{type:"button",class:dt(["hud-btn",{active:n.value==="solid"}]),title:"Full Aerospace Solid Finish",onClick:me[2]||(me[2]=He=>re("solid"))},[...me[8]||(me[8]=[U("span",{class:"mode-icon"},"🛡️",-1),U("span",{class:"mode-label"},"Solid",-1)])],2)]),me[10]||(me[10]=U("div",{class:"hud-divider"},null,-1)),U("div",hS,[U("div",{class:"telemetry-badge",title:"Turbine Core Speed: "+a.value+" RPM"},[U("span",{class:dt(["pulse-dot",{paused:s.value}])},null,2),U("span",pS,Qe(a.value),1),me[9]||(me[9]=U("span",{class:"rpm-unit"},"RPM",-1))],8,fS),U("div",mS,[U("button",{type:"button",class:dt(["telemetry-icon-btn",{paused:s.value}]),title:s.value?"Resume Rotation":"Pause Rotation",onClick:_e},Qe(s.value?"▶":"⏸"),11,_S),U("button",{type:"button",class:dt(["telemetry-icon-btn",{active:r.value===1.8&&!s.value}]),title:"Turbo Speed (1.8x)",onClick:me[3]||(me[3]=He=>Re(r.value===1.8?1:1.8))}," ⚡ ",2),U("button",{type:"button",class:"telemetry-icon-btn reset-btn",title:"Reset 3D Perspective",onClick:De}," ↺ ")])])],32),me[11]||(me[11]=U("div",{class:"hud-hint"},[U("span",null,"Drag to rotate • Scroll to zoom")],-1))])],34))}}),Yc=Ne(vS,[["__scopeId","data-v-b9411564"]]),xS=we({__name:"Layout",setup(i){const{Layout:e}=dc;return(t,n)=>{const s=ui("ClientOnly");return N(),Be(W(e),null,{"home-hero-image":se(()=>[Oe(s,null,{default:se(()=>[Oe(Yc)]),_:1})]),_:1})}}}),SS={extends:dc,Layout:xS,enhanceApp({app:i}){i.component("TurbineHero",Yc),i.component("HomeQuickStart",wm),i.component("HomePackages",um),i.component("HomeVsCode",Fm),i.component("HomeDocker",qp),i.component("MermaidBlock",Gm),i.component("ModelScriptViewer",$m)}};export{SS as R,bf as c,rt as u};
