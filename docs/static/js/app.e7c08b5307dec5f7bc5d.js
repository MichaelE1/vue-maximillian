webpackJsonp([1],{"/626":function(t,e){},"2WXF":function(t,e){},"3TcT":function(t,e){},"4AK/":function(t,e){},"6STh":function(t,e){},"6nfk":function(t,e){},"90VL":function(t,e){},"A+FS":function(t,e){},BCfr:function(t,e){},FbEL:function(t,e){},"HNa/":function(t,e){},"N+IJ":function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("/5sW"),r={data:function(){return{sideNav:!1}},computed:{menuItems:function(){var t=[{icon:"face",title:"Sign up",link:"/signup"},{icon:"lock_open",title:"Sign in",link:"/signin"}];return this.userisAuthenticated&&(t=[{icon:"supervisor_account",title:"View Meetups",link:"/meetups"},{icon:"room",title:"Organise Meetup",link:"/meetup/new"},{icon:"person",title:"Profile",link:"/profile"}]),t},userisAuthenticated:function(){return null!==this.$store.getters.user&&void 0!==this.$store.getters.user}},methods:{onLogout:function(){this.$store.dispatch("logout")}}},a={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-app",[i("v-navigation-drawer",{attrs:{temporary:"",fixed:""},model:{value:t.sideNav,callback:function(e){t.sideNav=e},expression:"sideNav"}},[i("v-list",[t._l(t.menuItems,function(e){return i("v-list-tile",{key:e.title,attrs:{to:e.link}},[i("v-list-tile-action",[i("v-icon",[t._v(t._s(e.icon))])],1),t._v(" "),i("v-list-tile-content",[t._v(t._s(e.title))])],1)}),t._v(" "),t.userisAuthenticated?i("v-list-tile",{on:{click:t.onLogout}},[i("v-list-tile-action",[i("v-icon",[t._v("exit_to_app")])],1),t._v(" "),i("v-list-tile-content",[t._v("Logout")])],1):t._e()],2)],1),t._v(" "),i("v-toolbar",{staticClass:"primary",attrs:{dark:""}},[i("v-toolbar-side-icon",{staticClass:"hidden-sm-and-up",on:{click:function(e){e.stopPropagation(),t.sideNav=!t.sideNav}}}),t._v(" "),i("v-toolbar-title",[i("router-link",{staticStyle:{cursor:"pointer"},attrs:{to:"/",tag:"span"}},[t._v("DevMeetup")])],1),t._v(" "),i("v-spacer"),t._v(" "),i("v-toolbar-items",{staticClass:"hidden-xs-only"},[t._l(t.menuItems,function(e){return i("v-btn",{key:e.title,attrs:{flat:"",to:e.link}},[i("v-icon",{attrs:{left:""}},[t._v(t._s(e.icon))]),t._v("\n        "+t._s(e.title)+"\n      ")],1)}),t._v(" "),t.userisAuthenticated?i("v-btn",{attrs:{flat:""},on:{click:t.onLogout}},[i("v-icon",{attrs:{left:""}},[t._v("exit_to_app")]),t._v("\n        Logout\n      ")],1):t._e()],2)],1),t._v(" "),i("main",[i("router-view")],1)],1)},staticRenderFns:[]},n=i("VU/8")(r,a,!1,null,null,null).exports,o=i("kxiW"),l=i("/ocq"),u={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",[i("v-layout",{attrs:{row:"",wrap:""}},[i("v-flex",{staticClass:"text-xs-center text-sm-right",attrs:{xs12:"",sm6:""}},[i("v-btn",{staticClass:"info",attrs:{large:"",router:"",to:"/meetups"}},[t._v("Explore Meetups")])],1),t._v(" "),i("v-flex",{staticClass:"text-xs-center text-sm-left",attrs:{xs12:"",sm6:""}},[i("v-btn",{staticClass:"info",attrs:{large:"",router:"",to:"/meetup/new"}},[t._v("Organise Meetup")])],1)],1),t._v(" "),i("v-layout",[i("v-flex",{staticClass:"text-xs-center",attrs:{xs12:""}},[t.loading?i("v-progress-circular",{staticClass:"primary--text",attrs:{indeterminate:"",width:7,size:70}}):t._e()],1)],1),t._v(" "),t.loading?t._e():i("v-layout",{staticClass:"mt-2",attrs:{row:"",wrap:""}},[i("v-flex",{attrs:{xs12:""}},[i("v-carousel",{staticStyle:{cursor:"pointer"}},t._l(t.meetups,function(e){return i("v-carousel-item",{key:e.id,attrs:{src:e.imageUrl},nativeOn:{click:function(i){t.onLoadMeetup(e.id)}}},[i("div",{staticClass:"title"},[t._v("\n          "+t._s(e.title)+"\n        ")])])}))],1)],1),t._v(" "),i("v-layout",{staticClass:"mt-2",attrs:{row:"",wrap:""}},[i("v-flex",{staticClass:"text-xs-center",attrs:{xs12:""}},[i("p",[t._v("Join our awesome meetups")])])],1)],1)},staticRenderFns:[]};var c=i("VU/8")({computed:{meetups:function(){return this.$store.getters.featuredMeetups},loading:function(){return this.$store.getters.loading}},methods:{onLoadMeetup:function(t){this.$router.push("/meetups/"+t)}}},u,!1,function(t){i("jyNZ")},"data-v-34ff811a",null).exports,d={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",t._l(t.meetups,function(e){return i("v-layout",{key:e.id,staticClass:"mb-2",attrs:{row:"",wrap:""}},[i("v-flex",{attrs:{xs12:""}},[i("v-card",[i("v-container",{attrs:{fluid:""}},[i("v-layout",{attrs:{row:""}},[i("v-flex",{attrs:{xs5:"",sm4:"",md3:""}},[i("v-card-media",{attrs:{src:e.imageUrl,height:"130px"}})],1),t._v(" "),i("v-flex",{attrs:{xs7:"",sm8:"",md9:""}},[i("v-card-title",{attrs:{"primary-title":""}},[i("div",[i("h3",{staticClass:"blue--text"},[t._v(t._s(e.title))]),t._v(" "),i("div",[t._v(t._s(t._f("date")(e.date))+" ")])])]),t._v(" "),i("v-card-actions",[i("v-btn",{attrs:{flat:"",to:"/meetups/"+e.id}},[i("v-icon",{attrs:{left:""}},[t._v("arrow_forward")]),t._v("\n                  View Meetup\n                ")],1)],1)],1)],1)],1)],1)],1)],1)}))},staticRenderFns:[]},v=i("VU/8")({computed:{meetups:function(){return this.$store.getters.loadedMeetups}}},d,!1,null,null,null).exports,p=(new Date).getHours().toString()+":"+(new Date).getMinutes().toString(),f=(new Date).getFullYear().toString()+"-"+((new Date).getMonth()+1).toString()+"-"+(new Date).getDate().toString(),m={data:function(){return{title:"",location:"",imageUrl:"",description:"",date:f,time:p,image:null}},computed:{formIsValid:function(){return""!==this.title&""!==this.location&&""!==this.imageUrl&&""!==this.description},submittableDateTime:function(){console.log(this.date);var t=new Date,e=this.time.match(/^(\d+)/)[0],i=this.time.match(/:(\d+)/)[1],s=this.date.match(/^(\d+)/)[0],r=this.date.match(/-(\d+)/)[1],a=this.date.match(/-\d+-(\d+)/)[1];return t.setHours(e),t.setMinutes(i),t.setFullYear(s),t.setMonth(r-1),t.setDate(a),t}},methods:{onCreateMeetup:function(){if(this.formIsValid&&this.image){var t={title:this.title,location:this.location,image:this.image,description:this.description,date:this.submittableDateTime};this.$store.dispatch("createMeetup",t),this.$router.push("/meetups")}},onPickFile:function(){this.$refs.fileInput.click()},onFilePicked:function(t){var e=this,i=t.target.files;if(i[0].name.lastIndexOf(".")<=0)return alert("Please add a valid file!");var s=new FileReader;s.addEventListener("load",function(){e.imageUrl=s.result}),s.readAsDataURL(i[0]),this.image=i[0]}}},g={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",[i("v-layout",{attrs:{row:""}},[i("v-flex",{attrs:{x12:"",sm6:"","offset-sm3":""}},[i("h1",{staticClass:"primary--text"},[t._v("Create a new meetup")])])],1),t._v(" "),i("v-flex",{attrs:{xs12:""}},[i("form",{on:{submit:function(e){return e.preventDefault(),t.onCreateMeetup(e)}}},[i("v-layout",{attrs:{row:""}},[i("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[i("v-text-field",{attrs:{name:"title",label:"Title",id:"title",required:""},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}})],1)],1),t._v(" "),i("v-layout",{attrs:{row:""}},[i("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[i("v-text-field",{attrs:{name:"location",label:"Location",id:"location",required:""},model:{value:t.location,callback:function(e){t.location=e},expression:"location"}})],1)],1),t._v(" "),i("v-layout",{attrs:{row:""}},[i("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[i("v-btn",{staticClass:"primary",attrs:{raised:""},on:{click:t.onPickFile}},[t._v("Upload Image")]),t._v(" "),i("input",{ref:"fileInput",staticStyle:{display:"none"},attrs:{type:"file",accept:"image/*"},on:{change:t.onFilePicked}})],1)],1),t._v(" "),i("v-layout",{attrs:{row:""}},[i("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[i("img",{attrs:{src:t.imageUrl,height:"200"}})])],1),t._v(" "),i("v-layout",{attrs:{row:""}},[i("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[i("v-text-field",{attrs:{name:"description",label:"Description",id:"description","multi-line":"",required:""},model:{value:t.description,callback:function(e){t.description=e},expression:"description"}})],1)],1),t._v(" "),i("v-layout",{attrs:{row:""}},[i("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[i("h4",[t._v("Choose a Date & Time")])])],1),t._v(" "),i("v-layout",{staticClass:"mb-2",attrs:{row:""}},[i("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[i("v-date-picker",{model:{value:t.date,callback:function(e){t.date=e},expression:"date"}})],1)],1),t._v(" "),i("v-layout",{attrs:{row:""}},[i("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[i("v-time-picker",{attrs:{format:"24hr"},model:{value:t.time,callback:function(e){t.time=e},expression:"time"}})],1)],1),t._v(" "),i("v-layout",{attrs:{row:""}},[i("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[i("v-btn",{staticClass:"primary",attrs:{type:"submit",disabled:!t.formIsValid}},[t._v("Create Meetup")])],1)],1)],1)])],1)},staticRenderFns:[]},h=i("VU/8")(m,g,!1,null,null,null).exports,x={props:["id"],computed:{meetup:function(){return this.$store.getters.loadedMeetup(this.id)},userIsAuthenticated:function(){return null!==this.$store.getters.user&&void 0!==this.$store.getters.user},userIsCreator:function(){return!!this.userIsAuthenticated&&this.$store.getters.user.id===this.meetup.creatorId},loading:function(){return this.$store.getters.loading}}},_={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",[t.loading?i("v-layout",{attrs:{row:"",wrap:""}},[i("v-flex",{staticClass:"text-xs-center",attrs:{xs12:""}},[t.loading?i("v-progress-circular",{staticClass:"primary--text",attrs:{indeterminate:"",width:7,size:70}}):t._e()],1)],1):i("v-layout",{attrs:{row:"",wrap:""}},[i("v-flex",{attrs:{xs12:""}},[i("v-card",[i("v-card-title",[i("h2",{staticClass:"primary--text"},[t._v(t._s(t.meetup.title))]),t._v(" "),t.userIsCreator?[i("v-spacer"),t._v(" "),i("app-edit-meetup-details-dialog",{attrs:{meetup:t.meetup}})]:t._e()],2),t._v(" "),i("v-card-media",{attrs:{src:t.meetup.imageUrl,height:"400px"}}),t._v(" "),i("v-card-text",[i("div",{staticClass:"info--text"},[t._v(t._s(t._f("date")(t.meetup.date))+" - "+t._s(t.meetup.location))]),t._v(" "),i("div",[t.userIsCreator?i("app-edit-meetup-date-dialog",{attrs:{meetup:t.meetup}}):t._e(),t._v(" "),t.userIsCreator?i("app-edit-meetup-time-dialog",{attrs:{meetup:t.meetup}}):t._e()],1),t._v(" "),i("div",[t._v(t._s(t.meetup.description))])]),t._v(" "),i("v-card-actions",[i("v-spacer"),t._v(" "),t.userIsAuthenticated&&!t.userIsCreator?i("app-meetup-register-dialog",{attrs:{meetupId:t.meetup.id}}):t._e()],1)],1)],1)],1)],1)},staticRenderFns:[]},w=i("VU/8")(x,_,!1,null,null,null).exports,b={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("p",[this._v("The User Page")])])}]},y=i("VU/8")(null,b,!1,null,null,null).exports,D={data:function(){return{email:"",password:"",confirmPassword:""}},computed:{comparePasswords:function(){return this.password===this.confirmPassword||"Passwords do not match"},user:function(){return this.$store.getters.user},error:function(){return this.$store.getters.error},loading:function(){return this.$store.getters.loading}},watch:{user:function(t){null!==t&&void 0!==t&&this.$router.push("/")}},methods:{onSignup:function(){this.$store.dispatch("signUserUp",{email:this.email,password:this.password})},onDismissed:function(){this.$store.dispatch("clearError")}}},M={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",[t.error?i("v-layout",{attrs:{row:""}},[i("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[i("app-alert",{attrs:{text:t.error.message},on:{dismissed:t.onDismissed}})],1)],1):t._e(),t._v(" "),i("v-layout",{attrs:{row:""}},[i("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[i("v-card",[i("v-card-text",[i("v-container",[i("form",{on:{submit:function(e){return e.preventDefault(),t.onSignup(e)}}},[i("v-layout",{attrs:{row:""}},[i("v-flex",{attrs:{xs12:""}},[i("v-text-field",{attrs:{name:"email",label:"Mail",id:"email",type:"email",required:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1)],1),t._v(" "),i("v-layout",{attrs:{row:""}},[i("v-flex",{attrs:{xs12:""}},[i("v-text-field",{attrs:{name:"password",label:"Password",id:"password",type:"password",required:""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)],1),t._v(" "),i("v-layout",{attrs:{row:""}},[i("v-flex",{attrs:{xs12:""}},[i("v-text-field",{attrs:{name:"confirmPassword",label:"Confirm Password",id:"confirmPassword",type:"password",rules:[t.comparePasswords]},model:{value:t.confirmPassword,callback:function(e){t.confirmPassword=e},expression:"confirmPassword"}})],1)],1),t._v(" "),i("v-layout",{attrs:{row:""}},[i("v-flex",{attrs:{xs12:""}},[i("v-btn",{attrs:{type:"submit",disabled:t.loading,loading:t.loading}},[t._v("Sign up")])],1)],1)],1)])],1)],1)],1)],1)],1)},staticRenderFns:[]},k=i("VU/8")(D,M,!1,null,null,null).exports,C={data:function(){return{email:"",password:""}},computed:{user:function(){return this.$store.getters.user},error:function(){return this.$store.getters.error},loading:function(){return this.$store.getters.loading}},watch:{user:function(t){null!==t&&void 0!==t&&this.$router.push("/")}},methods:{onSignin:function(){this.$store.dispatch("signUserIn",{email:this.email,password:this.password})},onDismissed:function(){this.$store.dispatch("clearError")}}},U={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",[t.error?i("v-layout",{attrs:{row:""}},[i("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[i("app-alert",{attrs:{text:t.error.message},on:{dismissed:t.onDismissed}})],1)],1):t._e(),t._v(" "),i("v-layout",{attrs:{row:""}},[i("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[i("v-card",[i("v-card-text",[i("v-container",[i("form",{on:{submit:function(e){return e.preventDefault(),t.onSignin(e)}}},[i("v-layout",{attrs:{row:""}},[i("v-flex",{attrs:{xs12:""}},[i("v-text-field",{attrs:{name:"email",label:"Mail",id:"email",type:"email",required:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1)],1),t._v(" "),i("v-layout",{attrs:{row:""}},[i("v-flex",{attrs:{xs12:""}},[i("v-text-field",{attrs:{name:"password",label:"Password",id:"password",type:"password",required:""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)],1),t._v(" "),i("v-layout",{attrs:{row:""}},[i("v-flex",{attrs:{xs12:""}},[i("v-btn",{attrs:{type:"submit",disabled:t.loading,loading:t.loading}},[t._v("Sign in")])],1)],1)],1)])],1)],1)],1)],1)],1)},staticRenderFns:[]},$=i("VU/8")(C,U,!1,null,null,null).exports,I=i("NYxO"),V=i("Dd8w"),S=i.n(V),L={state:{loadedMeetups:[{imageUrl:"https://i.imgur.com/rRWen3h.jpg",id:"asdfglz",title:"title1",date:new Date,location:"New York",description:"come and chill!"},{imageUrl:"https://i.imgur.com/rRWen3h.jpg",id:"asdfglfh",title:"title2",date:new Date,location:"Paris",description:"cool story bro"}]},mutations:{setLoadedMeetUps:function(t,e){t.loadedMeetups=e},createMeetup:function(t,e){t.loadedMeetups.push(e)},updateMeetup:function(t,e){var i=t.loadedMeetups.find(function(t){return t.id===e.id});e.title&&(i.title=e.title),e.description&&(i.description=e.description),e.date&&(i.date=e.date)}},actions:{loadMeetups:function(t){var e=t.commit;e("setLoading",!0),o.database().ref("meetups").once("value").then(function(t){var i=[],s=t.val();for(var r in s)i.push({id:r,title:s[r].title,description:s[r].description,imageUrl:s[r].imageUrl,location:s[r].location,date:s[r].date,creatorId:s[r].creatorId});e("setLoadedMeetUps",i),e("setLoading",!1)}).catch(function(t){console.log(t),e("setLoading",!1)})},createMeetup:function(t,e){var i=t.commit,s=t.getters,r={title:e.title,location:e.location,description:e.description,date:e.date.toISOString(),creatorId:s.user.id},a=void 0,n=void 0;o.database().ref("meetups").push(r).then(function(t){return n=t.key}).then(function(t){var i=e.image.name,s=i.slice(i.lastIndexOf("."));return o.storage().ref("meetups/"+t+s).put(e.image)}).then(function(t){return t.ref.getDownloadURL()}).then(function(t){return a=t,o.database().ref("meetups").child(n).update({imageUrl:t})}).then(function(){i("createMeetup",S()({},r,{imageUrl:a,id:n}))}).catch(function(t){console.log(t)})},updateMeetupData:function(t,e){var i=t.commit;i("setLoading",!0);var s={};e.title&&(s.title=e.title),e.description&&(s.description=e.description),e.date&&(s.date=e.date),o.database().ref("meetups").child(e.id).update(s).then(function(){i("setLoading",!1),i("updateMeetup",e)}).catch(function(t){console.log(t),i("setLoading",!1)})}},getters:{loadedMeetups:function(t){return t.loadedMeetups.sort(function(t,e){return t.date>e.date})},featuredMeetups:function(t,e){return e.loadedMeetups.slice(0,5)},loadedMeetup:function(t){return function(e){return t.loadedMeetups.find(function(t){return t.id===e})}}}},T=i("uqrR"),E=i.n(T),F={state:{user:null},mutations:{registerUserForMeetup:function(t,e){var i=e.id;t.user.registeredMeetups.findIndex(function(t){return t.id===i})>0||(t.user.registeredMeetups.push(i),t.user.fbKeys[i]=e.fbKey)},unregisterUserFromMeetup:function(t,e){var i=t.user.registeredMeetups;i.splice(i.findIndex(function(t){return t.id===e}),1),E()(t.user.fbKeys,e)},setUser:function(t,e){t.user=e}},actions:{registerUserForMeetup:function(t,e){var i=t.commit,s=t.getters;i("setLoading",!0);var r=s.user;o.database().ref("/users/"+r.id).child("/registrations/").push(e).then(function(t){i("setLoading",!1),i("registerUserForMeetup",{id:e,fbKey:t.key})}).catch(function(t){console.log(t),i("setLoading",!1)})},unregisterUserFromMeetup:function(t,e){var i=t.commit,s=t.getters;i("setLoading",!0);var r=s.user;if(r.fbKeys){var a=r.fbKeys[e];o.database().ref("/users/"+r.id+"/registrations").child(a).remove().then(function(){i("setLoading",!1),i("unregisterUserFromMeetup",e)}).catch(function(t){console.log(t),i("setLoading",!1)})}},signUserUp:function(t,e){var i=t.commit;i("setLoading",!0),i("clearError"),o.auth().createUserWithEmailAndPassword(e.email,e.password).then(function(t){i("setLoading",!1);var e={id:t.user.uid,registeredMeetups:[],fbKeys:{}};i("setUser",e)}).catch(function(t){i("setLoading",!1),i("setError",t),console.log(t)})},signUserIn:function(t,e){var i=t.commit;i("setLoading",!0),i("clearError"),o.auth().signInWithEmailAndPassword(e.email,e.password).then(function(t){i("setLoading",!1);var e={id:t.user.uid,registeredMeetups:[],fbKeys:{}};i("setUser",e)}).catch(function(t){i("setLoading",!1),i("setError",t),console.log(t)})},autoSignIn:function(t,e){(0,t.commit)("setUser",{id:e.uid,registeredMeetups:[],fbKeys:{}})},fetchUserData:function(t){var e=t.commit,i=t.getters;e("setLoading",!0),o.database().ref("/users/"+i.user.id+"/registrations/").once("value").then(function(t){var s=t.val(),r=[],a={};for(var n in s)r.push(s[n]),a[s[n]]=n;var o={id:i.user.id,registeredMeetups:r,fbKeys:a};e("setLoading",!1),e("setUser",o)}).catch(function(t){console.log(t),e("setLoading",!1)})},logout:function(t){var e=t.commit;o.auth().signOut(),e("setUser",null)}},getters:{user:function(t){return t.user}}};s.a.use(I.a);var P=new I.a.Store({modules:{meetup:L,user:F,shared:{state:{loading:!1,error:null},mutations:{setLoading:function(t,e){t.loading=e},setError:function(t,e){t.error=e},clearError:function(t){t.error=null}},actions:{clearError:function(t){(0,t.commit)("clearError")}},getters:{loading:function(t){return t.loading},error:function(t){return t.error}}}}}),R=function(t,e,i){P.getters.user?i():i("/signin")};s.a.use(l.a);var A=new l.a({routes:[{path:"/",name:"Home",component:c},{path:"/meetups",name:"Meetups",component:v},{path:"/meetup/new",name:"CreateMeetup",component:h,beforeEnter:R},{path:"/meetups/:id",name:"Meetup",props:!0,component:w},{path:"/profile",name:"Profile",component:y,beforeEnter:R},{path:"/signup",name:"Signup",component:k},{path:"/signin",name:"Signin",component:$}],mode:"history"}),O={render:function(){var t=this.$createElement;return(this._self._c||t)("v-alert",{attrs:{type:"error",dismissible:"",value:!0},on:{input:this.onClose}},[this._v("\n  "+this._s(this.text)+"\n")])},staticRenderFns:[]},N=i("VU/8")({props:["text"],methods:{onClose:function(){this.$emit("dismissed")}}},O,!1,null,null,null).exports,q={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-dialog",{attrs:{width:"350px",persistent:""},model:{value:t.editDialog,callback:function(e){t.editDialog=e},expression:"editDialog"}},[i("v-btn",{attrs:{slot:"activator",fab:"",accent:""},slot:"activator"},[i("v-icon",[t._v("edit")])],1),t._v(" "),i("v-card",[i("v-container",[i("v-layout",{attrs:{row:"",wrap:""}},[i("v-flex",{attrs:{xs12:""}},[i("v-card-title",[t._v("Edit Meetup")])],1)],1),t._v(" "),i("v-divider"),t._v(" "),i("v-layout",{attrs:{row:"",wrap:""}},[i("v-flex",{attrs:{xs12:""}},[i("v-card-text",[i("v-text-field",{attrs:{name:"title",label:"Title",id:"title",required:""},model:{value:t.editedTitle,callback:function(e){t.editedTitle=e},expression:"editedTitle"}}),t._v(" "),i("v-text-field",{attrs:{name:"description",label:"Description",id:"description","multi-line":"",required:""},model:{value:t.editedDescription,callback:function(e){t.editedDescription=e},expression:"editedDescription"}})],1)],1)],1),t._v(" "),i("v-divider"),t._v(" "),i("v-layout",{attrs:{row:"",wrap:""}},[i("v-flex",{attrs:{xs12:""}},[i("v-card-actions",[i("v-btn",{staticClass:"blue--text darken-1",attrs:{flat:""},on:{click:function(e){t.editDialog=!1}}},[t._v("Close")]),t._v(" "),i("v-btn",{staticClass:"blue--text darken-1",attrs:{flat:""},on:{click:t.onSaveChanges}},[t._v("Save")])],1)],1)],1)],1)],1)],1)},staticRenderFns:[]},K=i("VU/8")({props:["meetup"],data:function(){return{editDialog:!1,editedTitle:this.meetup.title,editedDescription:this.meetup.description}},methods:{onSaveChanges:function(){""!==this.editedTitle.trim()&&""!==this.editedDescription.trim()&&(this.editDialog=!1,this.$store.dispatch("updateMeetupData",{id:this.meetup.id,title:this.editedTitle,description:this.editedDescription}))}}},q,!1,null,null,null).exports,H={props:["meetup"],data:function(){return{editDialog:!1,editableDate:null}},methods:{onSaveChanges:function(){var t=new Date(this.meetup.date),e=new Date(this.editableDate).getUTCDate(),i=new Date(this.editableDate).getUTCMonth(),s=new Date(this.editableDate).getUTCFullYear();t.setUTCDate(e),t.setUTCMonth(i),t.setUTCFullYear(s),this.$store.dispatch("updateMeetupData",{id:this.meetup.id,date:t})}},created:function(){var t=new Date(this.meetup.date);this.editableDate=t.getUTCFullYear()+"-"+("0"+(t.getUTCMonth()+1)).slice(-2)+"-"+t.getUTCDate()}},Y={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-dialog",{attrs:{width:"350px",persistent:""},model:{value:t.editDialog,callback:function(e){t.editDialog=e},expression:"editDialog"}},[i("v-btn",{attrs:{slot:"activator",accent:""},slot:"activator"},[t._v("\n    Edit Date\n  ")]),t._v(" "),i("v-card",[i("v-container",[i("v-layout",{attrs:{row:"",wrap:""}},[i("v-flex",{attrs:{xs12:""}},[i("v-card-title",[t._v("Edit Meetup Date")])],1)],1),t._v(" "),i("v-divider"),t._v(" "),i("v-layout",{attrs:{row:"",wrap:""}},[i("v-flex",{attrs:{xs12:""}},[i("v-date-picker",{staticStyle:{width:"100%"},attrs:{actions:""},scopedSlots:t._u([{key:"default",fn:function(e){return e.save,e.cancel,[i("v-btn",{staticClass:"blue--text darken-1",attrs:{flat:""},nativeOn:{click:function(e){t.editDialog=!1}}},[t._v("Close")]),t._v(" "),i("v-btn",{staticClass:"blue--text darken-1",attrs:{flat:""},nativeOn:{click:function(e){return t.onSaveChanges(e)}}},[t._v("Save")])]}}]),model:{value:t.editableDate,callback:function(e){t.editableDate=e},expression:"editableDate"}})],1)],1)],1)],1)],1)},staticRenderFns:[]},z=i("VU/8")(H,Y,!1,null,null,null).exports,W={props:["meetup"],data:function(){return{editDialog:!1,editableTime:null}},methods:{onSaveChanges:function(){var t=new Date(this.meetup.date),e=this.editableTime.match(/^(\d+)/)[0],i=this.editableTime.match(/:(\d+)/)[1];t.setHours(e),t.setMinutes(i),this.$store.dispatch("updateMeetupData",{id:this.meetup.id,date:t})}},created:function(){var t=new Date(this.meetup.date),e=t.getHours(),i=t.getMinutes();this.editableTime=e+":"+i}},j={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-dialog",{attrs:{width:"350px",persistent:""},model:{value:t.editDialog,callback:function(e){t.editDialog=e},expression:"editDialog"}},[i("v-btn",{attrs:{slot:"activator",accent:""},slot:"activator"},[t._v("\n    Edit Time\n  ")]),t._v(" "),i("v-card",[i("v-container",[i("v-layout",{attrs:{row:"",wrap:""}},[i("v-flex",{attrs:{xs12:""}},[i("v-card-title",[t._v("Edit Meetup Time")])],1)],1),t._v(" "),i("v-divider"),t._v(" "),i("v-layout",{attrs:{row:"",wrap:""}},[i("v-flex",{attrs:{xs12:""}},[i("v-time-picker",{staticStyle:{width:"100%"},attrs:{actions:"",format:"24hr"},scopedSlots:t._u([{key:"default",fn:function(e){return e.save,e.cancel,[i("v-btn",{staticClass:"blue--text darken-1",attrs:{flat:""},nativeOn:{click:function(e){t.editDialog=!1}}},[t._v("Close")]),t._v(" "),i("v-btn",{staticClass:"blue--text darken-1",attrs:{flat:""},nativeOn:{click:function(e){return t.onSaveChanges(e)}}},[t._v("Save")])]}}]),model:{value:t.editableTime,callback:function(e){t.editableTime=e},expression:"editableTime"}})],1)],1)],1)],1)],1)},staticRenderFns:[]},Z=i("VU/8")(W,j,!1,null,null,null).exports,Q={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-dialog",{attrs:{persistent:"","max-width":"290"},model:{value:t.registerDialog,callback:function(e){t.registerDialog=e},expression:"registerDialog"}},[i("v-btn",{staticClass:"primary",attrs:{slot:"activator",accent:""},slot:"activator"},[t._v("\n    "+t._s(t.userIsRegistered?"Unregister":"Register")+"\n  ")]),t._v(" "),i("v-card",[i("v-container",[i("v-layout",{attrs:{row:"",wrap:""}},[i("v-flex",{attrs:{xs12:""}},[t.userIsRegistered?i("v-card-title",[t._v("Unregister from Meetup?")]):i("v-card-title",[t._v("Register for Meetup?")])],1)],1),t._v(" "),i("v-divider"),t._v(" "),i("v-layout",{attrs:{row:"",wrap:""}},[i("v-flex",{attrs:{xs12:""}},[i("v-card-text",[t._v("You can always change your decision later on.")])],1)],1),t._v(" "),i("v-layout",{attrs:{row:"",wrap:""}},[i("v-flex",{attrs:{xs12:""}},[i("v-card-actions",[i("v-btn",{staticClass:"red--text darken-1",attrs:{flat:""},on:{click:function(e){t.registerDialog=!1}}},[t._v("Cancel")]),t._v(" "),i("v-btn",{staticClass:"green--text darken-1",attrs:{flat:""},on:{click:t.onAgree}},[t._v("Confirm")])],1)],1)],1)],1)],1)],1)},staticRenderFns:[]},X=i("VU/8")({props:["meetupId"],data:function(){return{registerDialog:!1}},computed:{userIsRegistered:function(){var t=this;return this.$store.getters.user.registeredMeetups.findIndex(function(e){return e===t.meetupId})>=0}},methods:{onAgree:function(){this.userIsRegistered?this.$store.dispatch("unregisterUserFromMeetup",this.meetupId):this.$store.dispatch("registerUserForMeetup",this.meetupId)}}},Q,!1,null,null,null).exports,B=i("M+UZ"),J=i.n(B),G=i("BOXn"),tt=i.n(G),et=i("IcMm"),it=i.n(et),st=i("f/u0"),rt=i.n(st),at=i("8qgm"),nt=i.n(at),ot=i("MPXs"),lt=i.n(ot),ut=i("XRgG"),ct=i.n(ut),dt=i("rPQa"),vt=i.n(dt),pt=i("TWha"),ft=i.n(pt),mt=i("fYhH"),gt=i.n(mt),ht=i("7Q1V"),xt=i.n(ht),_t=i("7M7f"),wt=i.n(_t),bt=i("JUsQ"),yt=i.n(bt),Dt=i("IzLz"),Mt=i.n(Dt),kt=i("QLUw"),Ct=i.n(kt),Ut=i("Wj7w"),$t=i.n(Ut),It=i("/yi5"),Vt=i.n(It),St=i("+9ps"),Lt=i.n(St),Tt=i("6VHA"),Et=i.n(Tt);i("s6ZO");s.a.use(J.a,{components:{VApp:it.a,VAlert:tt.a,VCard:rt.a,VCarousel:nt.a,VDialog:lt.a,VDivider:ct.a,VNavigationDrawer:vt.a,VFooter:ft.a,VList:gt.a,VBtn:xt.a,VIcon:wt.a,VGrid:yt.a,VDatePicker:Mt.a,VProgressCircular:Ct.a,VTimePicker:$t.a,VTextField:Vt.a,VToolbar:Lt.a,transitions:Et.a}}),s.a.config.productionTip=!1,s.a.filter("date",function(t){return new Date(t).toLocaleString(["en-US"],{month:"short",day:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"})}),s.a.component("app-alert",N),s.a.component("app-edit-meetup-details-dialog",K),s.a.component("app-edit-meetup-date-dialog",z),s.a.component("app-edit-meetup-time-dialog",Z),s.a.component("app-meetup-register-dialog",X),new s.a({el:"#app",router:A,store:P,render:function(t){return t(n)},created:function(){var t=this;o.initializeApp({apiKey:"AIzaSyDQNVCA5AsqYO1RDmmPEuryha8-YOboanM",authDomain:"devmeetup-fead1.firebaseapp.com",databaseURL:"https://devmeetup-fead1.firebaseio.com",projectId:"devmeetup-fead1",storageBucket:"devmeetup-fead1.appspot.com"}),o.auth().onAuthStateChanged(function(e){e&&(t.$store.dispatch("autoSignIn",e),t.$store.dispatch("fetchUserData"))}),this.$store.dispatch("loadMeetups")}})},NOHZ:function(t,e){},P0ba:function(t,e){},Pjg2:function(t,e){},Stsr:function(t,e){},V5lI:function(t,e){},"X05+":function(t,e){},XC5Q:function(t,e){},ZlFP:function(t,e){},acBN:function(t,e){},hVUK:function(t,e){},jyNZ:function(t,e){},kP4z:function(t,e){},kVeV:function(t,e){},pu2v:function(t,e){},qRVk:function(t,e){},rzhv:function(t,e){},s6ZO:function(t,e){},zegt:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.e7c08b5307dec5f7bc5d.js.map