(window["webpackJsonpresturant-finder"]=window["webpackJsonpresturant-finder"]||[]).push([[0],{35:function(e,t,a){e.exports=a(65)},40:function(e,t,a){},41:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(29),s=a.n(o),r=(a(40),a(41),a(6)),c=a(7),i=a(9),u=a(8),d=a(10),h=a(16),m=a.n(h),p=a(30),f=[{name:"Ben Blocker",categories:"G"},{name:"Dave Defender",categories:"D"},{name:"Sam Sweeper",categories:"D"},{name:"Matt Midfielder",categories:["M","j"]},{name:"William Winger",categories:"M"},{name:"William Winger",categories:"M"},{name:"William Winger",categories:"M"},{name:"Fillipe Forward",categories:"F"}],v=a(31),E=a.n(v),g=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).handleSubmit=function(e){e.preventDefault(),a.makeApiCallYelp()},a.handleChange=function(e){a.setState({value:e.target.value})},a.makeApiCallYelp=Object(p.a)(m.a.mark(function e(){var t,n,l;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=restaurants&location=".concat(a.state.value,"&open_now=true&limit=50"),"mx48tJYzE70bdGqj8DwV9b1fQYxJ43079FRogf48QIBsFlUfLEDphBZhHYy8D74JFBUgXi2E0aGMvIqoPwfCk0WjEl9XamWALzy1kOPMkJhGzmih-JRhPzykgU5fXXYx",e.prev=2,n=function(e){for(var t,a,n=e.length;n;)a=Math.floor(Math.random()*n--),t=e[n],e[n]=e[a],e[a]=t;return e},e.next=6,E.a.get(t,{headers:{Authorization:"Bearer ".concat("mx48tJYzE70bdGqj8DwV9b1fQYxJ43079FRogf48QIBsFlUfLEDphBZhHYy8D74JFBUgXi2E0aGMvIqoPwfCk0WjEl9XamWALzy1kOPMkJhGzmih-JRhPzykgU5fXXYx")}});case 6:l=e.sent,n(l.data.businesses),a.setState({options:l.data.businesses},a.updateOptions),console.log("api call",a.state.options),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(2),console.log("this is err",e.t0),a.setState({options:f},a.updateOptions);case 16:case"end":return e.stop()}},e,null,[[2,12]])})),a.updateOptions=function(){a.props.handleOptions(a.state)},a.state={value:"",options:[],toOpts:!0},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("form",null,l.a.createElement("h3",null,"Where are you?"),l.a.createElement("div",{className:"formdiv"},l.a.createElement("input",{onChange:this.handleChange,placeholder:"enter city or zip"}),l.a.createElement("br",null),l.a.createElement("button",{onClick:this.handleSubmit},"Show Me Options")))}}]),t}(l.a.Component),O=a(34),b=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).updateSelected=function(){a.props.handleSelected(a.state)},a.handleSelection=function(e){console.log("this is selection",e.target.value);var t=e.target.value;if(a.state.selected.includes(t)){var n=a.state.selected.filter(function(e){return e!==t});a.setState({selected:n})}else a.setState(function(e,a){return{selected:[].concat(Object(O.a)(e.selected),[t])}})},a.state={selected:[],toFinal:!0,toOpts:!1},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidUpdate",value:function(e){console.log("this is compDidUpdate,",this.state.selected),4===this.state.selected.length&&!0===this.state.toFinal&&(this.setState({toFinal:!1}),this.updateSelected())}},{key:"render",value:function(){var e=this;console.log("this is selected",this.state.selected);var t=this.props.options.map(function(t,a){var n=e.state.selected.includes(t.name);if(a<8)return l.a.createElement("div",{key:a,className:"optionDiv"},l.a.createElement("h3",null,t.name),l.a.createElement("p",null,t.categories[0].title),l.a.createElement("button",{onClick:e.handleSelection,value:t.name,className:n?"selected":""},"select"))}),a=this.state.selected.map(function(e,t){return l.a.createElement("div",{key:t},e)});return l.a.createElement("div",{className:"optionsContainer"},l.a.createElement("div",null,l.a.createElement("h1",null,"Choose 4"),l.a.createElement("div",{className:"optionsDiv"},t)),l.a.createElement("div",{className:" selectedDiv"},l.a.createElement("h1",null,"Selected"),l.a.createElement("div",null,a)))}}]),t}(l.a.Component),k=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).shuffleIt=function(){!function(e){for(var t,a,n=e.length;n;)a=Math.floor(Math.random()*n--),t=e[n],e[n]=e[a],e[a]=t}(a.props.selected),console.log(a.props.select),a.setState({newSelected:a.props.selected})},a.state={newSelected:[]},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.shuffleIt()}},{key:"render",value:function(){console.log(this.state.newSelected);var e=this.state.newSelected.map(function(e,t){if(t<1)return l.a.createElement("div",{key:t,className:"finalDiv"},e)});return l.a.createElement("div",{className:"finalContainer"},l.a.createElement("h1",null,"Final"),e,l.a.createElement("h1",null,"Lets Go Eat"))}}]),t}(l.a.Component),j=a(11),w=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).handleOptions=function(e){a.setState({options:e.options,toOpts:e.toOpts})},a.handleSelected=function(e){a.setState({selected:e.selected,toFinal:e.toFinal,toOpts:e.toOpts})},a.state={options:[],toOpts:!1,selected:[],toFinal:!1},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return console.log("yo yo ",this.state),l.a.createElement("div",{className:"App"},l.a.createElement(j.d,null,l.a.createElement(j.b,{path:"/options",render:function(t){return!0===e.state.toFinal&&!1===e.state.toOpts?l.a.createElement(j.a,{to:"/final"}):l.a.createElement(b,{options:e.state.options,handleSelected:e.handleSelected})}}),l.a.createElement(j.b,{path:"/final",render:function(t){return l.a.createElement(k,{selected:e.state.selected})}}),l.a.createElement(j.b,{exact:!0,path:"/",render:function(t){return e.state.toOpts?l.a.createElement(j.a,{to:"/options"}):l.a.createElement(g,{handleOptions:e.handleOptions})}})))}}]),t}(l.a.Component);var S=function(){return l.a.createElement("h1",{className:"header"},"Whats for dinner?")};var y=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(S,null),l.a.createElement(w,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var D=a(15);s.a.render(l.a.createElement(D.a,null,l.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[35,1,2]]]);
//# sourceMappingURL=main.22e118b0.chunk.js.map