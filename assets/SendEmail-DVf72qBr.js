import{r as l,j as e,L as u,c as f}from"./index-CB7YK9cr.js";const j=n=>{const[d,t]=l.useState(window.matchMedia(n).matches);return l.useEffect(()=>{const r=window.matchMedia(n),i=()=>t(r.matches);return r.addEventListener("change",i),()=>r.removeEventListener("change",i)},[n]),d};function m({arrDataImg:n}){const[d,t]=l.useState(null),[r,i]=l.useState([]),h="1020px";return l.useEffect(()=>{if(n){let s=function(o){const a=parseInt(o.slice(1,3),16),p=parseInt(o.slice(3,5),16),x=parseInt(o.slice(5,7),16);return .299*a+.587*p+.114*x};const c=n==null?void 0:n.map(o=>({...o,colors:o.colors.sort((a,p)=>{const x=s(a.name.split("|")[0]);return s(p.name.split("|")[0])-x})}));console.log("sortedData",c),i(c)}},[n]),e.jsx("div",{className:"box2",children:e.jsxs("div",{className:"contentBox2",children:[e.jsx("h2",{className:"sr-only",children:"Products"}),e.jsx("div",{className:"grid grid-cols-2 gap-x-[10px] gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8",style:{gap:j(`(max-width: ${h})`)&&"15px 5px"},children:r?r==null?void 0:r.map((s,c)=>{var o;return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"itemBox2 aspect-h-1 mx-auto aspect-w-1 xl:aspect-h-8 xl:aspect-w-7 relative ",children:[e.jsx(u,{to:`/product/${s==null?void 0:s.id}`,onMouseEnter:()=>t(c),onMouseLeave:()=>t(null),children:e.jsx("div",{className:"itemImgProduct aspect-h-1 aspect-w-1 w-full overflow-hidden bg-gray-200 xl:aspect-h-8 xl:aspect-w-7",style:{background:`url('${d!==c?s==null?void 0:s.images[0]:(o=s==null?void 0:s.images)==null?void 0:o[1]}') center / cover no-repeat`}})},s==null?void 0:s.id),e.jsx("div",{className:"color-product",children:s==null?void 0:s.colors.map((a,p)=>e.jsx("div",{style:{border:"1px solid",padding:"1px",borderColor:s.id==a.name.split("|")[1]?"#000":"transparent"},children:e.jsx("nav",{onClick:()=>{console.log(a.name),document.location.href=`/product/${a.name.split("|")[1]}`},style:{backgroundColor:a.name.startsWith("#")?a.name.split("|")[0]:`#${a.name.split("|")[0]}`,border:a.name.split("|")[0]=="ffffff"||a.name.split("|")[0]=="#ffffff"?"1px solid #333":"0px"}})},p))}),e.jsxs("div",{className:"itemInfoProduct",children:[e.jsx("h2",{className:"productTitle",children:s==null?void 0:s.shortDescription}),e.jsxs("div",{className:"price__div price-product",children:[s.discount!=0&&e.jsxs("h4",{className:"skitka",style:{fontSize:"16px"},children:[" ",e.jsxs(e.Fragment,{children:[s==null?void 0:s.price," ",e.jsx("span",{style:{fontFamily:"font-book, sans-serif"},children:"₽"})]})]}),e.jsxs("h2",{className:"productPrice",style:{fontSize:"16px"},children:[s.discount!=0?s==null?void 0:s.discount:s==null?void 0:s.price," ",e.jsx("span",{style:{fontFamily:"font-book, sans-serif"},children:"₽"})]})]})]})]},c)})}):e.jsx("h2",{children:"Loading..."})})]})})}function b(){const[n,d]=l.useState(""),[t,r]=l.useState(""),i=s=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s),h=async s=>{if(s.preventDefault(),!i(n))r("Введите корректный email!");else{r("");const c=localStorage.getItem("token");try{const o=await f.post(`news_letter_subscriptions/${n}/deactivate`,{},{headers:{Authorization:`Bearer ${c}`}});d("")}catch(o){console.error(o)}}};return e.jsxs("div",{className:"sendEmail",children:[e.jsxs("div",{className:"sendEmailTop",children:[e.jsx("h2",{children:"Скоро новый дроп"}),e.jsx("p",{children:"Хочешь узнавать о всех новинках первый?"}),e.jsx("p",{children:"Подпишись на рассылку!"})]}),e.jsxs("form",{onSubmit:h,className:"sendEmailForm",children:[e.jsx("input",{type:"email",id:"email",onChange:s=>d(s.target.value.trim()),name:"email",placeholder:"Введите e-mail"}),t.length>0&&e.jsx("p",{className:"error-p-send-email",style:{position:"absolute",color:"red"},children:t}),e.jsx("button",{type:"submit",children:"Подписаться"})]})]})}export{m as B,b as S};