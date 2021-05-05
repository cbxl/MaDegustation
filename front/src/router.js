import Vue from 'vue';
import VueRouter from 'vue-router';
import user from './components/user'
import myCellar from './components/myCellar'
import myBottle from './components/myBottle'
import home from './components/home'
import degustationBook from './components/degustationBook'
import addBottle from './components/addBottle'


Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: home },
    { path: '/utilisateur', component: user },
    { path: '/maCave', component: myCellar },
    { path: '/maBouteille', component: myBottle },
    { path: '/livreDegustation', component: degustationBook },
    { path: '/ajoutBouteille', component: addBottle },
    { path: '*', redirect:'/'},
  ]
});

export default router;