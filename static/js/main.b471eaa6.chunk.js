(this.webpackJsonpoecscovidtracker=this.webpackJsonpoecscovidtracker||[]).push([[0],[,,,,,,,,,,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){},,function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),r=a(7),s=a.n(r),o=(a(13),a(3)),i=a.n(o),l=a(8),d=a(6),j=(a(15),a(16),a(0)),b=function(e){var t=e.searchValue,a=e.handleChange,c=e.handleSubmit;return Object(j.jsx)("nav",{children:Object(j.jsxs)("div",{className:"container nav-body",children:[Object(j.jsx)("h1",{children:"OECS Covid Tracker"}),Object(j.jsxs)("form",{role:"search",onSubmit:c,children:[Object(j.jsx)("label",{htmlFor:"header-search",children:Object(j.jsx)("span",{className:"visually-hidden",children:"Search"})}),Object(j.jsx)("input",{className:"search-field",type:"search",id:"header-search",value:t,onChange:a}),Object(j.jsx)("button",{type:"submit",className:"visually-hidden",children:"Search"})]})]})})},u=(a(18),function(){return Object(j.jsx)("div",{className:"loader","data-testid":"loader",children:Object(j.jsxs)("svg",{className:"spinner",viewBox:"0 0 50 50","aria-labelledby":"title",children:[Object(j.jsx)("title",{id:"title",lang:"en",children:"Spinning loading screen"}),Object(j.jsx)("circle",{className:"path",cx:"25",cy:"25",r:"20",fill:"none",strokeWidth:"5"})]})})}),h=a(2),O=a(5),f=(a(20),function(e){var t=e.columns,a=e.data,n=e.filterStr,r=Object(O.useTable)({columns:t,data:a},O.useGlobalFilter),s=r.getTableProps,o=r.getTableBodyProps,i=r.headerGroups,l=r.rows,d=r.prepareRow,b=r.setGlobalFilter;return Object(c.useEffect)((function(){b(n||"")}),[n]),Object(j.jsxs)("table",Object(h.a)(Object(h.a)({className:"data-table"},s()),{},{children:[Object(j.jsx)("caption",{className:"clipped",children:"A summary of Covid 19 data in the Organisation of Eastern Caribbean States"}),Object(j.jsx)("thead",{className:"data-table-head",children:i.map((function(e){return Object(j.jsx)("tr",Object(h.a)(Object(h.a)({className:"data-table-tr"},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e){return Object(j.jsx)("th",Object(h.a)(Object(h.a)({className:"data-table-th"},e.getHeaderProps()),{},{scope:"col",children:e.render("Header")}))}))}))}))}),Object(j.jsx)("tbody",Object(h.a)(Object(h.a)({className:"data-table-body"},o()),{},{children:l.map((function(e){return d(e),Object(j.jsx)("tr",Object(h.a)(Object(h.a)({className:"data-table-tr"},e.getRowProps()),{},{children:e.cells.map((function(e){return Object(j.jsx)("td",Object(h.a)(Object(h.a)({className:"data-table-td"},e.getCellProps()),{},{children:e.render("Cell")}))}))}))}))}))]}))}),m=(a(21),function(){return Object(j.jsx)("footer",{className:"footer","data-testid":"footer",children:Object(j.jsxs)("p",{children:["Made with ",Object(j.jsx)("span",{className:"footer-heart",children:"\u2764"})," by"," ",Object(j.jsx)("a",{target:"_blank",href:"https://github.com/keonsam/OECS-Covid-Tracker",rel:"noreferrer",children:"Keon Samuel Github"}),Object(j.jsx)("span",{className:"removed",children:"(opens in a new window)"})]})})});var p=function(){var e=Object(c.useState)(""),t=Object(d.a)(e,2),a=t[0],n=t[1],r=Object(c.useState)([]),s=Object(d.a)(r,2),o=s[0],h=s[1],O=["28","212","308","500","659","662","670","660","92","474","312"],p=function(){var e=Object(l.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://corona.lmao.ninja/v3/covid-19/countries/:".concat(O.join(","))).then((function(e){return e.json()}));case 2:t=e.sent,console.log(t),h(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){p()}),[]);var v=Object(c.useMemo)((function(){return o}),[o]),x=Object(c.useMemo)((function(){return[{Header:"Country",accessor:"country"},{Header:"Total Cases",accessor:"cases"},{Header:"New Cases",accessor:"todayCases"},{Header:"Total Deaths",accessor:"deaths"},{Header:"New Deaths",accessor:"todayDeaths"},{Header:"Total Recovered",accessor:"recovered"},{Header:"New Recovered",accessor:"todayRecovered"},{Header:"Active",accessor:"active"}]}),[]);return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(b,{searchValue:a,handleChange:function(e){n(e.target.value)},handleSubmit:function(e){e.preventDefault()}}),Object(j.jsx)("main",{className:"container",children:Object(j.jsx)("div",{className:"main-body",children:(null===o||void 0===o?void 0:o.length)?Object(j.jsx)(f,{data:v,columns:x,filterStr:a}):Object(j.jsx)(u,{})})}),Object(j.jsx)(m,{})]})},v=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,23)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),c(e),n(e),r(e),s(e)}))};s.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(p,{})}),document.getElementById("root")),v()}],[[22,1,2]]]);
//# sourceMappingURL=main.b471eaa6.chunk.js.map