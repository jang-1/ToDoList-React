(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a(18)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(8),l=a.n(r),i=(a(14),a(6)),s=a(1),o=a(2),u=a(4),d=a(3),m=a(5),h=(a(15),a(16),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(c)))).minDate=(new Date).toISOString().slice(0,10),a.state={text:"",checked:!1,date:a.minDate},a.handleText=function(e){a.setState({text:e.target.value})},a.handleCheckbox=function(e){a.setState({checked:e.target.checked})},a.handleDate=function(e){a.setState({date:e.target.value})},a.handleClick=function(){var e=a.state,t=e.text,n=e.date,c=e.checked;t.length>2?a.props.add(t,n,c)&&a.setState({text:"",checked:!1,date:a.minDate}):alert("The task must have a minimum of 3 characters!")},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=parseInt(this.minDate.slice(0,4))+1;return e+="-12-31",c.a.createElement("div",{className:"form"},c.a.createElement("div",{className:"add"},c.a.createElement("input",{type:"text",placeholder:"Add task",value:this.state.text,onChange:this.handleText}),c.a.createElement("input",{type:"checkbox",checked:this.state.checked,id:"important",onChange:this.handleCheckbox}),c.a.createElement("label",{htmlFor:"important"},"Priority")),c.a.createElement("label",{htmlFor:"date"}," By when to do: "),c.a.createElement("input",{type:"date",value:this.state.date,min:this.minDate,max:e,onChange:this.handleDate}),c.a.createElement("button",{className:"btn",onClick:this.handleClick},"Add"))}}]),t}(n.Component)),k=function(e){var t=e.task,a=t.text,n=t.date,r=t.id,l=t.active,i=t.important,s=t.finishDate;if(l)return c.a.createElement("div",null,c.a.createElement("p",null,c.a.createElement("strong",{style:i?{color:"red"}:null},a)," to"," ",c.a.createElement("span",{style:{marginRight:"10px"}},n," "),c.a.createElement("button",{onClick:function(){return e.change(r)}},"Task done"),c.a.createElement("button",{onClick:function(){return e.delete(r)}},"X")));var o=new Date(s).toLocaleString();return c.a.createElement("div",null,c.a.createElement("p",null,c.a.createElement("strong",null,a)," ",c.a.createElement("em",{style:{marginRight:"5px"}},"(complete to: ",n,") "),"Task confirmed: ",c.a.createElement("span",null,o),c.a.createElement("button",{onClick:function(){return e.delete(r)}},"X")))},f=(a(17),function(e){var t=e.tasks.filter(function(e){return e.active}),a=e.tasks.filter(function(e){return!e.active});t.length>=2&&t.sort(function(e,t){return e.text.localeCompare(t.text)}),a.length>=2&&a.sort(function(e,t){return t.finishDate-e.finishDate});var n=t.map(function(t){return c.a.createElement(k,{key:t.id,task:t,delete:e.delete,change:e.change})}),r=a.map(function(t){return c.a.createElement(k,{key:t.id,task:t,delete:e.delete,change:e.change})});return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"activeTask"},c.a.createElement("h1",null,"Tasks"),n.length>0?n:c.a.createElement("p",null,"No tasks, you should be happy!")),c.a.createElement("div",{className:"completedTasks"},c.a.createElement("h1",null,"Completed tasks ",c.a.createElement("em",null,"(",a.length,")")),a.length>5&&c.a.createElement("p",{className:"five"},"Last five completed tasks"),r.slice(0,5)))}),p=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(c)))).counter=5,a.state={tasks:[]},a.deleteTask=function(e){var t=Object(i.a)(a.state.tasks),n=t.findIndex(function(t){return t.id===e});t.splice(n,1),a.setState({tasks:t})},a.changeTaskStatus=function(e){var t=Object(i.a)(a.state.tasks);t.forEach(function(t){t.id===e&&(t.active=!1,t.finishDate=(new Date).getTime())}),a.setState({tasks:t})},a.addTask=function(e,t,n){var c={id:a.counter,text:e,date:t,important:n,active:!0,finishDate:null};return a.counter++,a.setState(function(e){return{tasks:[].concat(Object(i.a)(e.tasks),[c])}}),!0},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement("p",{className:"todo"},"ToDo App"),c.a.createElement(h,{add:this.addTask}),c.a.createElement(f,{tasks:this.state.tasks,delete:this.deleteTask,change:this.changeTaskStatus}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,1,2]]]);
//# sourceMappingURL=main.d96c455a.chunk.js.map