!function(e){function t(t){for(var r,a,s=t[0],c=t[1],i=t[2],f=0,p=[];f<s.length;f++)a=s[f],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);for(l&&l(t);p.length;)p.shift()();return u.push.apply(u,i||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,s=1;s<n.length;s++){var c=n[s];0!==o[c]&&(r=!1)}r&&(u.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},o={0:0},u=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var s=window.webpackJsonp=window.webpackJsonp||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var i=0;i<s.length;i++)t(s[i]);var l=c;u.push([22,1]),n()}([,,,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"MessageList",{enumerable:!0,get:function(){return r.MessageList}}),Object.defineProperty(t,"MessageForm",{enumerable:!0,get:function(){return o.MessageForm}}),Object.defineProperty(t,"MessagesSection",{enumerable:!0,get:function(){return u.MessagesSection}}),Object.defineProperty(t,"Button",{enumerable:!0,get:function(){return a.Button}});var r=n(29),o=n(32),u=n(62),a=n(65)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getAllMessages=t.addMessage=t.ADD_MESSAGE=t.GET_ALL=void 0;var r=n(33);t.GET_ALL="GET_MESSAGES";t.ADD_MESSAGE="ADD_MESSAGE";t.addMessage=function(e){return function(t){return(0,r.setMessage)(e).then((function(e){var n={type:"ADD_MESSAGE",payload:e[e.length-1]};t(n)}))}};t.getAllMessages=function(){return function(e){return(0,r.getListOfMessages)().then((function(t){e({type:"GET_MESSAGES",payload:t})}))}}},,,,,,,,,,,,,,,,function(e,t,n){e.exports=n(23)},function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var o,u=d(n(0)),a=d(n(4)),s=n(28),c=n(7),i=n(9),l=n(68),f=(o=n(69))&&o.__esModule?o:{default:o};function p(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return p=function(){return e},e}function d(e){if(e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var t=p();if(t&&t.has(e))return t.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if(Object.prototype.hasOwnProperty.call(e,u)){var a=o?Object.getOwnPropertyDescriptor(e,u):null;a&&(a.get||a.set)?Object.defineProperty(n,u,a):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n}var y=(0,i.createStore)(l.MessagesReducer,(0,i.compose)((0,i.applyMiddleware)(f.default)));a.render(u.createElement(c.Provider,{store:y},u.createElement(s.App,null)),document.getElementById("root"))},,,,,function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.App=void 0;var o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var t=a();if(t&&t.has(e))return t.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if(Object.prototype.hasOwnProperty.call(e,u)){var s=o?Object.getOwnPropertyDescriptor(e,u):null;s&&(s.get||s.set)?Object.defineProperty(n,u,s):n[u]=e[u]}n.default=e,t&&t.set(e,n);return n}(n(0)),u=n(5);function a(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return a=function(){return e},e}t.App=function(){return o.createElement("div",null,o.createElement(u.MessagesSection,null))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.MessageList=void 0;var r,o=(r=n(0))&&r.__esModule?r:{default:r};n(30);t.MessageList=function(e){return o.default.createElement("table",{className:"messages-table"},o.default.createElement("thead",null,o.default.createElement("tr",null,o.default.createElement("th",null,"Subject"),o.default.createElement("th",null,"Body"))),o.default.createElement("tbody",null,e.messages.map((function(e){return o.default.createElement("tr",{key:e.id},o.default.createElement("td",null,e.subject),o.default.createElement("td",null,e.body))}))))}},function(e,t,n){var r=n(2),o=n(31);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var u={insert:"head",singleton:!1},a=(r(o,u),o.locals?o.locals:{});e.exports=a},function(e,t,n){(t=n(3)(!1)).push([e.i,".messages-table {\n  border: 1px solid black;\n  width: 80%;\n  border-collapse: collapse;\n}\n.messages-table td,\n.messages-table th {\n  border: 1px solid black;\n}\n.messages-table thead tr {\n  background-color: gainsboro;\n  text-align: left;\n}\n.messages-table tbody tr:nth-child(even) {\n  background-color: #ffe8e8;\n}\n.messages-table tbody tr:nth-child(odd) {\n  background-color: white;\n}\n",""]),e.exports=t},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.MessageForm=t.MessageFormComponent=void 0;var r,o=(r=n(0))&&r.__esModule?r:{default:r},u=n(6),a=n(7);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}n(60);var d=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&i(e,t)}(s,e);var t,n,r,u,a=(t=s,function(){var e,n=p(t);if(f()){var r=p(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return l(this,e)});function s(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),(t=a.call(this,e)).state={newMessage:t.setNewMessage()},t}return n=s,(r=[{key:"setNewMessage",value:function(){return{id:-1,subject:"",body:""}}},{key:"handleSubmit",value:function(e){e.preventDefault(),(0,this.props.addMessage)(this.state.newMessage);var t=this.setNewMessage();this.setState({newMessage:t})}},{key:"handleChange",value:function(e){var t=e.target,n=t.name,r=this.state.newMessage;r[n]=t.value,this.setState({newMessage:r})}},{key:"render",value:function(){var e=this,t=this.state.newMessage;return o.default.createElement("form",{className:"message-form"},o.default.createElement("label",{htmlFor:"subject"},"Subject"),o.default.createElement("input",{value:t.subject,onChange:function(t){return e.handleChange(t)},name:"subject",type:"text"}),o.default.createElement("label",{htmlFor:"body"},"Body"),o.default.createElement("textarea",{name:"body",value:t.body,onChange:function(t){e.handleChange(t)},cols:30,rows:10}),o.default.createElement("button",{onClick:function(t){e.handleSubmit(t)}},"Send"))}}])&&c(n.prototype,r),u&&c(n,u),s}(o.default.Component);t.MessageFormComponent=d;var y=(0,a.connect)(null,(function(e){return{addMessage:function(t){return e((0,u.addMessage)(t))}}}))(d);t.MessageForm=y},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"setMessage",{enumerable:!0,get:function(){return r.setMessage}}),Object.defineProperty(t,"getListOfMessages",{enumerable:!0,get:function(){return r.getListOfMessages}});var r=n(34)},function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.setMessage=t.getListOfMessages=void 0;var o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var s=o?Object.getOwnPropertyDescriptor(e,a):null;s&&(s.get||s.set)?Object.defineProperty(n,a,s):n[a]=e[a]}n.default=e,t&&t.set(e,n);return n}(n(35));function u(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}t.getListOfMessages=function(){return o.getMessages().then(a).catch(s)};t.setMessage=function(e){return o.addMessage(e).then(a).catch(s)};var a=function(e){return e},s=function(){throw new Error("Something unexpected occurred")}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.addMessage=t.getMessages=void 0;var r,o=(r=n(36))&&r.__esModule?r:{default:r};var u=[];t.getMessages=function(){return o.default.get("https://my-json-server.typicode.com/Dacalez/demo/messages").then((function(e){return u=e.data,Promise.resolve(u)}))};t.addMessage=function(e){return e.id=u.length,u.push(e),Promise.resolve(u)}},,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){var r=n(2),o=n(61);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var u={insert:"head",singleton:!1},a=(r(o,u),o.locals?o.locals:{});e.exports=a},function(e,t,n){(t=n(3)(!1)).push([e.i,".message-form {\n  display: flex;\n  flex-direction: column;\n  padding: 13px;\n  padding-bottom: 16px;\n  background-color: white;\n  border-radius: 10px;\n  border: 1px solid black;\n  overflow: hidden;\n  position: relative;\n}\n.message-form textarea {\n  resize: none;\n}\n.message-form button {\n  position: absolute;\n  bottom: 0px;\n  left: 0px;\n  width: 100%;\n  background-color: black;\n  border: black;\n  color: white;\n}\n",""]),e.exports=t},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.MessagesSection=t.MessagesSectionComponent=void 0;var r,o=(r=n(0))&&r.__esModule?r:{default:r},u=n(5),a=n(7),s=n(6);n(63);var c=n(5);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var b=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(i,e);var t,n,r,a,s=(t=i,function(){var e,n=y(t);if(d()){var r=y(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return p(this,e)});function i(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(t=s.call(this,e)).state={messages:[]},t}return n=i,(r=[{key:"componentDidMount",value:function(){this.props.getMessages()}},{key:"handleCallAlert",value:function(e){alert("Hello! I am an alert box!"),console.log("alert",e)}},{key:"render",value:function(){var e=this,t=this.props.messages;return o.default.createElement("div",{className:"message-section"},o.default.createElement("h1",null,"Messages management sample, deployed"),o.default.createElement(u.MessageForm,{messages:t}),o.default.createElement(u.MessageList,{messages:t}),o.default.createElement("div",null,o.default.createElement(c.Button,{onClickButton:function(t){e.handleCallAlert(t)}})))}}])&&l(n.prototype,r),a&&l(n,a),i}(o.default.Component);t.MessagesSectionComponent=b,b.defaultProps={messages:[]};var g=(0,a.connect)((function(e){return{messages:e.messages}}),(function(e){return{getMessages:function(){return e((0,s.getAllMessages)())}}}))(b);t.MessagesSection=g},function(e,t,n){var r=n(2),o=n(64);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var u={insert:"head",singleton:!1},a=(r(o,u),o.locals?o.locals:{});e.exports=a},function(e,t,n){(t=n(3)(!1)).push([e.i,".message-section {\n  display: flex;\n  justify-content: space-between;\n  width: 80%;\n  margin: 0 auto;\n}\n",""]),e.exports=t},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Button=void 0;var r,o=(r=n(0))&&r.__esModule?r:{default:r};n(66);t.Button=function(e){return o.default.createElement("button",{onClick:function(){e.onClickButton(event)},className:"dButton"}," Hi, click me! ")}},function(e,t,n){var r=n(2),o=n(67);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var u={insert:"head",singleton:!1},a=(r(o,u),o.locals?o.locals:{});e.exports=a},function(e,t,n){(t=n(3)(!1)).push([e.i,"button {\n  background-color: #b828b8;\n  border: #b828b8;\n  color: white;\n  display: flex;\n  width: 100%;\n}\n",""]),e.exports=t},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.MessagesReducer=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case r.ADD_MESSAGE:return s(e,t);case r.GET_ALL:return Object.assign(Object.assign({},e),{messages:t.payload});default:return e}};var r=n(6);function o(e){return function(e){if(Array.isArray(e))return u(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var a={messages:[]};var s=function(e,t){var n,r=[].concat(o(e.messages),[t.payload]);return Object.assign(Object.assign({},e),{messages:(n=r,n.filter((function(e,t){return e.id==t})))})}}]);