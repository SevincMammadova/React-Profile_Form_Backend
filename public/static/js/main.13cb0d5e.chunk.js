(this.webpackJsonpprofile=this.webpackJsonpprofile||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(8),l=a.n(o),c=(a(14),a(1)),i=a(2),u=a(4),s=a(3),m=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props,t=e.type,a=e.id,n=e.name,o=e.className,l=e.placeholder,c=e.value,i=e.onClick,u=e.onChange;return r.a.createElement("input",{type:t,id:a,name:n,className:o,placeholder:l,value:c,onClick:i,onChange:u})}}]),a}(r.a.Component),p=a(5),h=a(6),d=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props,t=e.className,a=e.id,n=e.children;return r.a.createElement("p",{className:t,id:a},n)}}]),a}(r.a.Component),f=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).inputChangeHandler=function(e){var t=e.target,a=t.name,r=t.value;n.setState((function(e){return{inputValues:Object(h.a)(Object(h.a)({},e.inputValues),{},Object(p.a)({},a,r))}}))},n.checkFormHandler=function(e){return e.preventDefault(),console.log(n.state.inputValues),function(e,t){var a=new XMLHttpRequest,n=JSON.stringify(e);a.open("POST","/add-obj"),a.setRequestHeader("Content-type","application-json"),a.send(n)}(n.state.inputValues),!1},n.state={inputValues:{}},n}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"container-profile_form"},r.a.createElement("form",{className:"profile_form",action:"",method:"post",onSubmit:this.checkFormHandler},r.a.createElement(d,{className:"userInfo",id:"fullName"},"Full Name:"),r.a.createElement(m,{type:"text",className:"userInfoInput",name:"name",id:"fullNameInput",placeholder:"Enter your full name...",onChange:this.inputChangeHandler}),r.a.createElement(d,{className:"userInfo",id:"age"},"Age:"),r.a.createElement(m,{type:"number",name:"age",className:"userInfoInput",id:"ageInput",placeholder:"Enter your age...",onChange:this.inputChangeHandler}),r.a.createElement(d,{className:"userInfo",id:"email"},"Email:"),r.a.createElement(m,{type:"email",className:"userInfoInput",name:"email",id:"emailInput",placeholder:"Enter your email...",onChange:this.inputChangeHandler}),r.a.createElement(d,{className:"userInfo",id:"phone"},"Phone:"),r.a.createElement(m,{type:"tel",name:"phone",className:"userInfoInput",id:"phoneInput",placeholder:"Enter your phone number...",onChange:this.inputChangeHandler}),r.a.createElement("button",{type:"submit",className:"registrate_button",id:"registrate_button"}," Registrate")))}}]),a}(r.a.Component),b=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).changeModal=function(e){n.setState({isShowModal:e})},n.state={isShowModal:!1},n}return Object(i.a)(a,[{key:"render",value:function(){var e=this.changeModal,t=this.state.isShowModal;return r.a.createElement(r.a.Fragment,null,t?r.a.createElement(f,null):r.a.createElement("div",{className:"welcome_page-container"},r.a.createElement("h1",{className:"welcomePage-header"},"Welcome to our Team"),r.a.createElement(m,{type:"submit",className:"submit_button",id:"submit_button",value:"Click me",onClick:e})))}}]),a}(r.a.Component);var g=function(){return r.a.createElement("div",null,r.a.createElement(b,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,a){e.exports=a(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.13cb0d5e.chunk.js.map