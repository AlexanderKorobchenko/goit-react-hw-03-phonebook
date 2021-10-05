(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],[,,,function(t,e,n){t.exports={form:"ContactForm_form__3c2uU",label:"ContactForm_label__2WvbH",input:"ContactForm_input__2nkT-",input_number:"ContactForm_input_number__M2e7u",button:"ContactForm_button__1buib"}},,,,,function(t,e,n){t.exports={list:"ContactList_list__2leqZ",item:"ContactList_item__18IjE",button:"ContactList_button__RrCCV"}},,function(t,e,n){t.exports={label:"Filter_label__2CGQ3",input:"Filter_input__dJK7D"}},,,function(t,e,n){t.exports={container:"Container_container__24Rmf"}},function(t,e,n){t.exports={title:"Section_title__3MNye"}},,,,,,function(t,e,n){},,,,function(t,e,n){"use strict";n.r(e);var a=n(1),r=n.n(a),c=n(12),i=n.n(c),o=(n(20),n(11)),s=n(4),l=n(5),u=n(7),b=n(6),m=n(13),d=n.n(m),h=n(0);var j=function(t){var e=t.children;return Object(h.jsx)("div",{className:d.a.container,children:e})},f=n(2),p=n.n(f),C=n(14),_=n.n(C);function O(t){var e=t.title,n=t.children;return Object(h.jsxs)("section",{children:[Object(h.jsx)("h2",{className:_.a.title,children:e}),n]})}O.protoType={title:p.a.string};var x=O,v=n(15),g=n(26),y=n(3),F=n.n(y),N=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={name:"",number:""},t.handleChange=function(e){var n=e.currentTarget,a=n.name,r=n.value;t.setState(Object(v.a)({},a,r))},t.handleSubmit=function(e){e.preventDefault();var n={id:Object(g.a)(),name:t.state.name,number:t.state.number};t.props.onSubmit(n),t.resetForm()},t.resetForm=function(){t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("form",{className:F.a.form,onSubmit:this.handleSubmit,children:[Object(h.jsxs)("label",{className:F.a.label,children:["Name",Object(h.jsx)("input",{className:F.a.input,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:this.handleChange,value:this.state.name})]}),Object(h.jsxs)("label",{className:F.a.label,children:["Number",Object(h.jsx)("input",{className:F.a.input_number,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:this.handleChange,value:this.state.number})]}),Object(h.jsx)("button",{className:F.a.button,type:"submit",children:"Add contact"})]})}}]),n}(r.a.Component);N.protoType={onSubmit:p.a.func};var S=N,A=n(10),k=n.n(A),w=function(t){var e=t.filter,n=t.onChangeFilter;return Object(h.jsxs)("label",{className:k.a.label,children:["Find contacts by name",Object(h.jsx)("input",{className:k.a.input,type:"text",name:"filter",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0430. \u041f\u043e\u0438\u0441\u043a \u043d\u0435 \u0447\u0443\u0432\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u043a \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0443 \u0432\u0432\u043e\u0434\u0438\u043c\u044b\u0445 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432.",required:!0,onChange:n,value:e})]})};w.protoType={filter:p.a.string,onChangeFilter:p.a.func};var z=w,L=n(8),Z=n.n(L),T=function(t){var e=t.contacts,n=t.deleteContact;return Object(h.jsx)("ul",{className:Z.a.list,children:e.map((function(t){return Object(h.jsxs)("li",{className:Z.a.item,children:[Object(h.jsxs)("span",{children:[t.name,": ",t.number]}),Object(h.jsx)("button",{className:Z.a.button,type:"button",id:t.id,onClick:function(){return n(t.id)},children:"remove"})]},t.id)}))})},q=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.addContact=function(e){t.setState((function(t){return t.contacts.some((function(t){return t.name.includes(e.name)}))?alert("".concat(e.name," is already in contacts!")):{contacts:[].concat(Object(o.a)(t.contacts),[e])}}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:Object(o.a)(t.contacts.filter((function(t){return t.id!==e})))}}))},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value.toLocaleLowerCase()})},t.turnOnFilter=function(){var e=t.state,n=e.contacts,a=e.filter;return n.filter((function(t){return t.name.toLocaleLowerCase().includes(a)}))},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(h.jsxs)(j,{children:[Object(h.jsx)(x,{title:"Phonebook",children:Object(h.jsx)(S,{onSubmit:this.addContact})}),Object(h.jsxs)(x,{title:"Contacts",children:[Object(h.jsx)(z,{filter:this.state.filter,onChangeFilter:this.changeFilter}),""===this.state.filter?Object(h.jsx)(T,{contacts:this.state.contacts,deleteContact:this.deleteContact}):Object(h.jsx)(T,{contacts:this.turnOnFilter(),deleteContact:this.deleteContact})]})]})}}]),n}(r.a.Component),J=q;i.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(J,{})}),document.getElementById("root"))}],[[24,1,2]]]);
//# sourceMappingURL=main.8558c6b3.chunk.js.map