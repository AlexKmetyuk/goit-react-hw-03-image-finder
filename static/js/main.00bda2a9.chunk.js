(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{15:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),c=n(9),i=n.n(c),r=n(8),s=n(3),l=n(4),h=n(6),u=n(5),d=(n(15),n(16),n(0)),m=function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={query:""},e.handleChange=function(t){var n=t.currentTarget.value;e.setState({query:n})},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.query)},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(d.jsx)("header",{className:"Searchbar",children:Object(d.jsxs)("form",{className:"SearchForm",onSubmit:this.handleSubmit,children:[Object(d.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(d.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(d.jsx)("input",{onChange:this.handleChange,className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:this.state.query})]})})}}]),n}(a.Component),j=function(e){var t=e.hits,n=e.onOpen;return t.map((function(e){return Object(d.jsx)("li",{className:"ImageGalleryItem",children:Object(d.jsx)("img",{"data-img":e.largeImageURL,src:e.webformatURL,alt:"",className:"ImageGalleryItem-image",onClick:n})},e.id)}))},p=function(e){var t=e.hits,n=e.onOpenModal;return Object(d.jsx)("ul",{className:"ImageGallery",children:Object(d.jsx)(j,{hits:t,onOpen:n})})},g="20385561-6a350e58d651a37e998e9aef4",b=function(e){var t=e.title,n=e.onClick;return Object(d.jsx)("button",{className:"Button",onClick:n,children:t})},f=n(10),O=n.n(f),y=function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).handleKeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e.handleBackdropClick=function(t){t.currentTarget===t.target&&e.props.onClose()},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(d.jsx)("div",{className:"Overlay",onClick:this.handleBackdropClick,children:Object(d.jsx)("div",{className:"Modal",children:Object(d.jsx)("img",{src:this.props.src,alt:""})})})}}]),n}(a.Component),v=function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={query:null,hits:[],page:1,isLoading:!1,showModal:!1,largeImageURL:""},e.handleSubmit=function(t){e.setState({query:t})},e.loadMore=function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"}),e.searchHits()},e.reset=function(){e.setState({hits:[]})},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e.onOpenModal=function(t){e.setState({largeImageURL:t.target.dataset.img}),e.toggleModal()},e}return Object(l.a)(n,[{key:"componentDidUpdate",value:function(e,t){t.query!==this.state.query&&(this.reset(),this.searchHits()),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}},{key:"searchHits",value:function(){var e=this,t=this.state,n=t.query,a=t.hits,o=t.page;this.setState({page:o+1}),this.setState({isLoading:!0}),function(){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return fetch("https://pixabay.com/api/?q=".concat(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"","&page=").concat(e,"&key=").concat(g,"&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.json()}))}(n,o).then((function(t){console.log(t.largeImageURL),1===o?e.setState({hits:t.hits}):e.setState({hits:[].concat(Object(r.a)(a),Object(r.a)(t.hits))})})).finally((function(){e.setState({isLoading:!1})}))}},{key:"render",value:function(){var e=this.state,t=e.hits,n=e.isLoading,a=e.showModal,o=e.largeImageURL;return Object(d.jsxs)("div",{className:"main",children:[Object(d.jsx)(m,{onSubmit:this.handleSubmit}),n?Object(d.jsx)(O.a,{type:"Puff",color:"#00BFFF",height:100,width:100,timeout:3e3}):null,t.length>0&&Object(d.jsxs)("main",{children:[Object(d.jsx)(p,{hits:t,onOpenModal:this.onOpenModal}),Object(d.jsx)(b,{title:"Load more",onClick:this.loadMore})," "]}),a&&Object(d.jsx)(y,{src:o,onClose:this.toggleModal})]})}}]),n}(a.Component);i.a.render(Object(d.jsx)(o.a.StrictMode,{children:Object(d.jsx)(v,{})}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.00bda2a9.chunk.js.map