var Header = {template : '<div>this is Header</div>'};
var Body = {template : '<div>this is Body</div>'};
var Footer = {template : '<div>this is Footer</div>'};

var LoginHeader = {template : '<div>this is LoginHeader</div>'};
var LoginBody = {template : '<div>this is LoginBody</div>'};
var LoginFooter = {template : '<div>this is LoginFooter</div> '};

var router = new VueRouter({
  routes: [
    {
      path: '/'
      ,components: {
        default: Body
        ,header: Header
        ,footer: Footer
      }
    },
    {
      path: '/login'
      ,components: {
        default: LoginBody
        ,header: LoginHeader
        ,footer: LoginFooter
      }
    },
  ]
});

var app = new Vue({
  router
}).$mount('#app');
