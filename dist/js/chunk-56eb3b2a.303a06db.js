(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-56eb3b2a"],{"17b0":function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"wrapper",attrs:{id:"wrapper"}},[s("Header"),s("section",{staticClass:"inner-page-banner",style:"background-image: url("+t.$root.URL_ROOT+"uploads/Content/contact-banner.jpeg);"},[t._m(0)]),s("section",{staticClass:"section-space-less30"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-7"},[s("div",{staticClass:"about-layout4"},[s("h2",{staticClass:"bold"},[t._v(" "+t._s(t.pageData.heading)+" ")]),s("p",{staticStyle:{"text-align":"justify"},domProps:{innerHTML:t._s(t.pageData.pbody)}})])]),s("div",{staticClass:"col-lg-5"},[s("div",{staticClass:"progress-layout3"},[s("img",{staticClass:"img-fluid",attrs:{src:t.$root.URL_ROOT+"uploads/pages/"+t.pageData.image,alt:"speaker"}})])])])])]),s("Partners"),s("section",{staticClass:"full-width-container"},[s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"google-map-area"},[s("iframe",{staticStyle:{width:"100%",height:"396px"},attrs:{id:"googleMap",src:t.LinksDetails.MapUrl}})])])]),s("Footer")],1)},i=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12"},[s("div",{staticClass:"breadcrumbs-area"},[s("h1",[t._v("About Us")]),s("ul",[s("li",[s("a",{attrs:{href:"#"}},[t._v("Home")])]),s("li",[t._v("About Us")])])])])])])}],o=s("9d8d"),l=s("076e"),r=s("2214"),c=s("f5e5"),n=s("7ec7"),d=s.n(n),p=s("cc6b"),u=s.n(p),g={props:["catedatas"],components:{Header:o["a"],Footer:l["a"],carousel:u.a,carousel2:d.a,Partners:c["a"],Testimonial:r["a"]},data(){return{pageData:[],LinksDetails:[],fields:{type:"update_profile",uid:"",fullname:"",mobile:"",address:"",Token:this.$root.auth}}},mounted(){this.uid=localStorage.getItem("user"),this.pData(),this.goToTop(),this.site_setting()},methods:{goToTop(){document.body.scrollTop=0,document.documentElement.scrollTop=0},pData(){const t=s("bc3a");var a=this;t.post(this.$root.URL_ROOT+"api.php",{type:"aboutus"}).then((function(t){var s=t.data;a.pageData=s.data}))}}},b=g,h=(s("b0d3"),s("2877")),m=Object(h["a"])(b,e,i,!1,null,"08835928",null);a["default"]=m.exports},"974e":function(t,a,s){},b0d3:function(t,a,s){"use strict";s("974e")}}]);
//# sourceMappingURL=chunk-56eb3b2a.303a06db.js.map