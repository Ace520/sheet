(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-538bd916"],{1276:function(t,e,n){"use strict";var i=n("d784"),s=n("44e7"),a=n("825a"),r=n("1d80"),l=n("4840"),c=n("8aa5"),o=n("50c4"),u=n("14c3"),h=n("9263"),d=n("d039"),p=[].push,g=Math.min,f=4294967295,m=!d((function(){return!RegExp(f,"y")}));i("split",2,(function(t,e,n){var i;return i="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var i=String(r(this)),a=void 0===n?f:n>>>0;if(0===a)return[];if(void 0===t)return[i];if(!s(t))return e.call(i,t,a);var l,c,o,u=[],d=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),g=0,m=new RegExp(t.source,d+"g");while(l=h.call(m,i)){if(c=m.lastIndex,c>g&&(u.push(i.slice(g,l.index)),l.length>1&&l.index<i.length&&p.apply(u,l.slice(1)),o=l[0].length,g=c,u.length>=a))break;m.lastIndex===l.index&&m.lastIndex++}return g===i.length?!o&&m.test("")||u.push(""):u.push(i.slice(g)),u.length>a?u.slice(0,a):u}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:e.call(this,t,n)}:e,[function(e,n){var s=r(this),a=void 0==e?void 0:e[t];return void 0!==a?a.call(e,s,n):i.call(String(s),e,n)},function(t,s){var r=n(i,t,this,s,i!==e);if(r.done)return r.value;var h=a(t),d=String(this),p=l(h,RegExp),v=h.unicode,b=(h.ignoreCase?"i":"")+(h.multiline?"m":"")+(h.unicode?"u":"")+(m?"y":"g"),x=new p(m?h:"^(?:"+h.source+")",b),w=void 0===s?f:s>>>0;if(0===w)return[];if(0===d.length)return null===u(x,d)?[d]:[];var C=0,_=0,k=[];while(_<d.length){x.lastIndex=m?_:0;var y,U=u(x,m?d:d.slice(_));if(null===U||(y=g(o(x.lastIndex+(m?0:_)),d.length))===C)_=c(d,_,v);else{if(k.push(d.slice(C,_)),k.length===w)return k;for(var j=1;j<=U.length-1;j++)if(k.push(U[j]),k.length===w)return k;_=C=y}}return k.push(d.slice(C)),k}]}),!m)},"44e7":function(t,e,n){var i=n("861d"),s=n("c6b6"),a=n("b622"),r=a("match");t.exports=function(t){var e;return i(t)&&(void 0!==(e=t[r])?!!e:"RegExp"==s(t))}},"833b":function(t,e,n){"use strict";var i=n("8b50"),s=n.n(i);s.a},"898e":function(t,e,n){var i={"./laravel/index.json":"ee9f"};function s(t){var e=a(t);return n(e)}function a(t){if(!n.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}s.keys=function(){return Object.keys(i)},s.resolve=a,t.exports=s,s.id="898e"},"8b50":function(t,e,n){},"9f52":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"h-16 border-b flex items-center px-4 justify-between"},[i("div",{staticClass:"flex items-center"},[i("router-link",{attrs:{to:"/"}},[i("img",{staticClass:"w-6 h-6",attrs:{src:n("cf05")}})]),i("span",{staticClass:"px-4"},[t._v("|")]),t._v(" "+t._s(t.config.name)+" ")],1),i("div",{staticClass:"flex items-center"},[i("a",{staticClass:"ml-5",attrs:{href:t.config.source,target:"_brack"}},[t._v("文档")]),i("a",{staticClass:"ml-5",attrs:{href:t.editUrl+"index.json",target:"_brack"}},[t._v("配置")])])]),i("waterfall",{staticClass:"p-1",attrs:{col:t.col,gutterWidth:0,data:t.items}},[t._l(t.items,(function(e,n){return i("div",{key:n,staticClass:"p-2 item"},[i("div",{staticClass:"border rounded"},[i("div",{staticClass:"h-12 flex items-center justify-between px-3 md-bg-color"},[i("div",[t._v(t._s(e.title))]),i("a",{attrs:{href:e.edit,target:"_brack"}},[i("img",{staticClass:"w-5 h-5 github-icon",attrs:{src:"https://github.com/fluidicon.png"}})])]),i("div",{staticClass:"markdown-body",domProps:{innerHTML:t._s(e.content)}})])])}))],2)],1)},s=[],a=(n("ac1f"),n("1276"),n("cebe")),r=n.n(a),l=n("1d61"),c=n.n(l),o=n("f4e8"),u=n.n(o),h={name:"App",data:function(){return{rawUrl:"https://raw.githubusercontent.com/Ace520/sheet/gh-pages/md/",editUrl:"https://github.com/Ace520/sheet/edit/gh-pages/md/",config:{},items:[],col:3}},mounted:function(){c.a.setOptions({highlight:function(t){return u.a.highlightAuto(t).value}});var t=parseInt(document.body.clientWidth/450);this.switchCol(t>1?t:1),this.config=n("898e")("./"+this.$route.params.id+"/index.json"),this.rawUrl=this.rawUrl+this.config.path+"/",this.editUrl=this.editUrl+this.config.path+"/",this.initItems(),this.appendLanguageJs()},methods:{scroll:function(t){console.log(t)},switchCol:function(t){this.col=t},initItems:function(){for(var t=this,e=this.config.items,n=function(n){r.a.get(t.rawUrl+e[n].path).then((function(i){var s=c()(i.data);t.items.push({title:e[n].title,content:s,edit:t.editUrl+e[n].path})})).catch((function(t){console.error(t)}))},i=0;i<e.length;i++)n(i)},appendLanguageJs:function(){if(this.config.languages)for(var t=this.config.languages.split(","),e=0;e<t.length;e++){var n=document.createElement("script");n.type="text/javascript",n.src="https://cdn.bootcss.com/highlight.js/8.7/languages/"+t[e]+".min.js",document.body.appendChild(n)}}}},d=h,p=(n("833b"),n("2877")),g=Object(p["a"])(d,i,s,!1,null,null,null);e["default"]=g.exports},cf05:function(t,e,n){t.exports=n.p+"img/logo.82b9c7a5.png"},ee9f:function(t){t.exports=JSON.parse('{"path":"laravel","name":"Laravel 速查表","icon":"https://cdn.learnku.com//uploads/communities/WtC3cPLHzMbKRSZnagU9.png","source":"https://learnku.com/docs/laravel-cheatsheet","languages":"php","items":[{"title":"Artisan","path":"artisan.md"},{"title":"Composer","path":"composer.md"},{"title":"Environment","path":"environment.md"},{"title":"Helper","path":"helper.md"},{"title":"log","path":"log.md"},{"title":"Model","path":"model.md"}]}')}}]);
//# sourceMappingURL=chunk-538bd916.3191d26d.js.map