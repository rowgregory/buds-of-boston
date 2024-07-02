import{f as p,a as h,g as f,c as g,r,j as e,L as o,h as N,u as v,_ as j,D as w,s as x,p as z,i as y,t as k,R as A,e as u}from"./index-Dnp_oc2s.js";import{S as L,I as d,L as P}from"./logo-VdixgAPP.js";const R=a=>{try{const n=JSON.parse(atob(a.split(".")[1])),t=Math.floor(Date.now()/1e3);return n.exp&&n.exp<t?null:!0}catch(n){return console.error("Error decoding JWT:",n.message),null}},b=()=>{const{token:a}=p(),n=h();let{isLoading:t}=f();const c=g(s=>s.product.products);return r.useEffect(()=>{R(a)||n("/")},[a]),e.jsxs(r.Fragment,{children:[e.jsx("div",{className:"max-w-[1400px] mx-auto pt-16",children:t?e.jsx("div",{className:"flex justify-center",children:e.jsx(L,{fill:"fill-lime-500",wAndH:"w-10 h-10"})}):e.jsx("div",{className:"grid grid-cols-12 gap-6 px-3 lg:px-6",children:c==null?void 0:c.map((s,i)=>{var l,m;return e.jsxs(o,{to:`/code-validated/${a}/item`,state:{product:s},className:"rounded-lg col-span-12 sm:col-span-6 lg:col-span-4 xl:col-span-3 bg-[#181818]",children:[e.jsx(d,{loading:"lazy",src:s.image,alt:`product${i}`,className:"bg-zinc-950 w-full h-48 object-contain rounded-tl-lg rounded-tr-lg p-2"}),e.jsxs("div",{className:"p-4",children:[e.jsx("p",{className:"text-sm font-semibold mb-2",children:s==null?void 0:s.productName}),e.jsx("p",{className:"text-sm text-zinc-400 text-ellipsis overflow-hidden",children:((l=s==null?void 0:s.description)==null?void 0:l.length)>40?((m=s==null?void 0:s.description)==null?void 0:m.substring(0,40))+"...":s==null?void 0:s.description})]})]},i)})})}),e.jsx("p",{className:"max-w-[1400px] mx-auto text-sm text-zinc-600 px-3 lg:px-6 mt-48 pb-10",children:"This website is intended for demonstration purposes only. All content, including but not limited to text, images, and functionalities, is simulated and does not represent real products, services, or data. Any resemblance to actual names, brands, products, or services is purely coincidental."})]})},D=()=>{const{state:a}=N(),{token:n}=p(),t=a.product;return e.jsx("div",{className:"flex flex-col mt-16 items-center w-full min-h-screen bg-zinc-950",children:e.jsxs("div",{className:"flex flex-col",children:[e.jsxs(o,{to:`/code-validated/${n}/items`,className:"w-fit border border-zinc-900 bg-zinc-900 rounded-md  px-3.5 py-1.5 flex items-center hover:no-underline group hover:bg-zinc-800 duration-300 mb-5",children:[e.jsx("i",{className:"fas fa-chevron-left fa-xs mr-2"}),e.jsx("p",{className:"font-Matter-Regular text-sm mt-0.5",children:"Back to products"})]}),e.jsxs("div",{className:"max-w-screen-lg grid grid-cols-12 gap-8",children:[e.jsx("div",{className:"col-span-12 md:col-span-7",children:e.jsx(d,{className:"object-contain aspect-square w-full",src:t==null?void 0:t.image,alt:t==null?void 0:t.productName})}),e.jsxs("div",{className:"col-span-12 md:col-span-5 p-6",children:[e.jsx("h2",{className:"text-2xl font-bold mb-2",children:t==null?void 0:t.productName}),e.jsx("p",{className:"text-gray-700",children:t==null?void 0:t.description})]})]})]})})},S=()=>{const a=v(),n=h(),t=new j(w),c=g(i=>{var l;return(l=i.auth)==null?void 0:l.isAdmin}),s=()=>{a(x(0)),t.play(),z.purge(),a(y()),a(x(100)),a(k(!1)),n("/")};return e.jsx("div",{className:"w-full h-20 bg-[#212121] flex items-center",children:e.jsxs("div",{className:"w-full max-w-[1400px] mx-auto px-3 lg:px-6 flex items-center justify-between",children:[e.jsx(d,{src:P,alt:"Budz of Boston",className:"h-20"}),e.jsxs("div",{className:"flex items-center",children:[c&&e.jsx(o,{to:"/admin/dashboard",children:e.jsx("i",{className:"fa-solid fa-gauge-high text-zinc-300 cursor-pointer mr-5"})}),e.jsx("i",{onClick:s,className:"fa-solid fa-sign-out text-zinc-300 cursor-pointer duration-200 hover:text-zinc-400"})]})]})})},E=()=>e.jsxs(r.Fragment,{children:[e.jsx(S,{}),e.jsx("div",{className:"bg-[#0d0d0d] min-h-[calc(100vh-80px)] text-zinc-200",children:e.jsxs(A,{children:[e.jsx(u,{path:":token/items",element:e.jsx(b,{})}),e.jsx(u,{path:":token/item",element:e.jsx(D,{})})]})})]});export{E as default};
