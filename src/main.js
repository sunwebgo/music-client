import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import store from './store/index'
//引入ElementUI组件库
import ElementUI from 'element-ui';
import JS from '../src/assets/js/iconfont'
import JS1 from '../src/assets/js/iconfont1'
import JS3 from '../src/assets/js/iconfont3'
import JS2 from '../src/assets/js/iconfont2'
//引入ElementUI全部样式
import 'element-ui/lib/theme-chalk/index.css';
import router from './router/index'
import axios from "axios";

Vue.config.productionTip = false
Vue.config.silent = true
Vue.use(axios)
//配置接口地址
axios.defaults.baseURL = 'http://192.168.26.135:8090';


const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}


Vue.use(VueRouter)
Vue.use(ElementUI)
Vue.use(JS)
Vue.use(JS1)
Vue.use(JS2)
Vue.use(JS3)
new Vue({
  render: h => h(App),
  store:store,
  router:router
}).$mount('#app')

onload = function() {
  var click_cnt = 0;
  var $html = document.getElementsByTagName("html")[0];
  var $body = document.getElementsByTagName("body")[0];
  $html.onclick = function(e) {
    var $elem = document.createElement("b");
    $elem.style.color = "#ff0000";
    $elem.style.zIndex = 10000;
    $elem.style.position = "absolute";
    $elem.style.select = "none";
    var x = e.pageX;
    var y = e.pageY;
    $elem.style.left = (x - 10) + "px";
    $elem.style.top = (y - 20) + "px";
    clearInterval(anim);
    switch (++click_cnt) {
      case 10:
        $elem.innerText = "OωO";
        break;
      case 20:
        $elem.innerText = "(๑•́ ∀ •̀๑)";
        break;
      case 30:
        $elem.innerText = "(๑•́ ₃ •̀๑)";
        break;
      case 40:
        $elem.innerText = "(๑•̀_•́๑)";
        break;
      case 50:
        $elem.innerText = "（￣へ￣）";
        break;
      case 60:
        $elem.innerText = "(╯°口°)╯(┴—┴";
        break;
      case 70:
        $elem.innerText = "૮( ᵒ̌皿ᵒ̌ )ა";
        break;
      case 80:
        $elem.innerText = "╮(｡>口<｡)╭";
        break;
      case 90:
        $elem.innerText = "( ง ᵒ̌皿ᵒ̌)ง⁼³₌₃";
        break;
      case 100:
      case 101:
      case 102:
      case 103:
      case 104:
      case 105:
        $elem.innerText = "(ꐦ°᷄д°᷅)";
        break;
      default:
        $elem.innerText = "❤";
        break;
    }
    $elem.style.fontSize = Math.random() * 10 + 8 + "px";
    var increase = 0;
    var anim;
    setTimeout(function() {
      anim = setInterval(function() {
        if (++increase == 150) {
          clearInterval(anim);
          $body.removeChild($elem);
        }
        $elem.style.top = y - 20 - increase + "px";
        $elem.style.opacity = (150 - increase) / 120;
      }, 8);
    }, 70);
    $body.appendChild($elem);
  };
};

