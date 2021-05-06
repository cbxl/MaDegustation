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
    { path: '/', name:"Accueil", component: home },
    { path: '/utilisateur', name:"Profil", component: user },
    { path: '/maCave',name:"Ma cave", component: myCellar },
    { path: '/maBouteille',name:"Ma bouteille", component: myBottle },
    { path: '/carnetDegustation',name: "Mon Carnet", component: degustationBook },
    { path: '/ajoutBouteille',name:"Ajout", component: addBottle },
    { path: '*', redirect:'/'},
  ]
});

export default router;