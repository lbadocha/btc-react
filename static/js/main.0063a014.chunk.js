(this["webpackJsonpcrypto-rate-list"]=this["webpackJsonpcrypto-rate-list"]||[]).push([[0],{18:function(t,e,r){t.exports=r(42)},23:function(t,e,r){},24:function(t,e,r){},42:function(t,e,r){"use strict";r.r(e);var a=r(0),n=r.n(a),o=r(11),c=r.n(o),i=(r(23),r(24),r(12)),l=r(13),s=r(16),u=r(14),p=r(17),y=r(15),f=r.n(y),m=function(t){var e=t.cryptoList.map((function(t){return n.a.createElement("li",{key:t.currency,className:"crypto-item"},"Last rate: ",n.a.createElement("span",{className:t.colorClass},t.last)," ",t.currency," ",t.symbol)}));return n.a.createElement("ul",{className:"crypto-list"},e)},h=function(t){function e(){var t;return Object(i.a)(this,e),(t=Object(s.a)(this,Object(u.a)(e).call(this))).getData=function(){f.a.get("https://blockchain.info/pl/ticker").then((function(e){var r=e.data,a=[],n=0;for(var o in r){var c=t.state.crypto[n],i="blue";void 0!==c&&(i=c.last>r[o].last?"red":c.last<r[o].last?"green":"blue");var l={last:r[o].last,symbol:r[o].symbol,currency:o,colorClass:i};a.push(l),n++}t.setState({crypto:a,filteredCrypto:a}),t.filterCrypto()}))},t.filterCrypto=function(){var e=t.state.crypto.filter((function(e){return e.currency.toUpperCase().includes(t.filterInput.value.toUpperCase())}));t.setState({filteredCrypto:e})},t.state={crypto:[],filteredCrypto:[]},t}return Object(p.a)(e,t),Object(l.a)(e,[{key:"componentDidMount",value:function(){this.getData(),this.timer=setInterval(this.getData,5e3)}},{key:"render",value:function(){var t=this;return n.a.createElement("div",{className:"crypto"},n.a.createElement("h2",null,"Crypto rate"),n.a.createElement("input",{type:"text",onChange:this.filterCrypto,ref:function(e){return t.filterInput=e}}),n.a.createElement(m,{cryptoList:this.state.filteredCrypto}))}}]),e}(a.Component);var v=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(h,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}},[[18,1,2]]]);
//# sourceMappingURL=main.0063a014.chunk.js.map