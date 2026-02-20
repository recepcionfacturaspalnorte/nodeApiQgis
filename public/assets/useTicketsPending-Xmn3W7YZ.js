import{J as r,c as p,k as T,l as i,a2 as o,a3 as y}from"./index-D-eP-XBK.js";/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m=[["path",{d:"M5 22h14",key:"ehvnwv"}],["path",{d:"M5 2h14",key:"pdyrp9"}],["path",{d:"M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22",key:"1d314k"}],["path",{d:"M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2",key:"1vvvr6"}]],N=r("hourglass",m);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P=[["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z",key:"2d38gg"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]],Q=r("octagon-x",P);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q=[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]],A=r("wrench",q),U=(c,a)=>{const[n]=p(),s=n.get("query")||void 0,e=n.get("limit")||9,t=n.get("page")||1,d=T(),g=i({queryKey:["TicketsPending",{limit:e,page:t,query:s}],queryFn:()=>o({limit:isNaN(+e)?9:+e,page:+t,query:s,id:c}),staleTime:0}),u=i({queryKey:["TicketsPendingUser",{limit:e,page:t,query:s}],queryFn:()=>y({limit:isNaN(+e)?9:+e,page:+t,query:s,id:c,userId:a||""}),staleTime:0,enabled:!!a}),l=i({queryKey:["TicketsQueryInProgress",{limit:e,page:t,query:s}],queryFn:()=>o({limit:isNaN(+e)?9:+e,page:+t,query:s,id:2}),staleTime:0}),k=i({queryKey:["TicketsQueryInProgressUser",{limit:e,page:t,query:s}],queryFn:()=>y({limit:isNaN(+e)?9:+e,page:+t,query:s,id:2,userId:a}),staleTime:0,enabled:!!a}),h=()=>d.invalidateQueries({queryKey:["Tickets","Ticket","TicketSumary","TicketsPending"]});return{ticketsPending:g.data,ticketsInProgress:l.data,invalidate:h,ticketsByUser:u.data??[],ticketsInProgressByUser:k.data??[]}};export{N as H,Q as O,A as W,U as u};
