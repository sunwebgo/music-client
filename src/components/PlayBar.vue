<template>
  <div class="play-bar" :class="{show:!toggle}">
    <!--    显示隐藏播放器-->
    <div @click="toggle = !toggle" class="item-up" :class="{turn: toggle}">
      <svg t="1659341161456" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
           p-id="2153" width="48" height="48">
        <path
            d="M76.83347 382.604066L404.834786 54.650852c56.89557-56.887553 157.619247-56.791351 214.434647 0.032068l327.905114 327.93718c59.180371 59.236489 59.180371 155.230226-0.016034 214.434648-59.252523 59.140287-155.190142 59.188388-214.410597-0.032068L663.666737 527.909435v332.386531c0 83.735976-67.894685 151.614628-151.622644 151.614627-83.743993 0-151.590577-67.878651-151.590577-151.614627V527.8453l-69.217465 69.209448a151.326021 151.326021 0 0 1-107.209307 44.373253c-38.76146 0-77.603088-14.815135-107.201291-44.405321-59.188388-59.228472-59.188388-155.182125 0.008017-214.418614z"
            fill="#FFFFFF" p-id="2154"></path>
        <path
            d="M510.087982 12.121474c40.060189-0.472994 80.288732 13.668726 109.173435 42.561446l327.905113 327.93718c59.180371 59.236489 59.180371 155.230226-0.016034 214.434648-59.252523 59.140287-155.190142 59.188388-214.410597-0.032068l-69.081179-69.113245v332.386531c0 83.735976-67.894685 151.614628-151.622644 151.614627-0.657382 0-1.290713-0.096202-1.948094-0.096202V12.121474z"
            fill="#E9F1F4" p-id="2155"></path>
        <path
            d="M291.228034 597.054748a151.221802 151.221802 0 0 1-182.719998 24.050544l296.32675-296.294682c56.89557-56.855485 157.619247-56.791351 214.434647 0.048101l296.214514 296.246581c-57.96181 33.366121-133.215962 25.461509-182.736031-24.082612L663.666737 527.909435v332.386531c0 83.735976-67.894685 151.614628-151.622644 151.614627-83.743993 0-151.590577-67.878651-151.590577-151.614627V527.8453l-69.225482 69.209448z"
            fill="#D8E5EA" p-id="2156"></path>
        <path
            d="M511.995992 282.20908v729.701513c-83.72796-0.016034-151.550493-67.894685-151.550493-151.614627V527.8453l-69.217465 69.209448a151.221802 151.221802 0 0 1-182.719998 24.050544l296.32675-296.294682c28.419726-28.403692 67.798483-42.60153 107.161206-42.60153z"
            fill="#E9F1F4" p-id="2157"></path>
        <path
            d="M512.036076 1023.935865c-90.213589 0-163.615849-73.410276-163.615849-163.639899V556.874306l-48.694334 48.678301c-30.961067 30.896932-72.047412 47.900666-115.715183 47.900666a162.565642 162.565642 0 0 1-115.707166-47.932734c-63.749975-63.814109-63.741958-167.624273 0.016034-231.422348L396.32891 46.144977C425.662556 16.819347 467.82316 0 512.012025 0h0.072152c44.196883 0.016034 86.357486 16.851414 115.683115 46.177044l327.905113 327.93718c63.774025 63.830143 63.766008 167.65634-0.016033 231.438383-63.854194 63.741958-167.664357 63.70989-231.414332-0.032068l-48.558048-48.582098v303.349508c0 90.23764-73.410276 163.647916-163.647916 163.647916zM360.445499 515.820028a12.017255 12.017255 0 0 1 12.025272 12.025272v332.450666c0 76.969757 62.611582 139.589356 139.565305 139.589355 76.977774 0 139.597373-62.627616 139.597372-139.589355V527.909435a12.017255 12.017255 0 1 1 20.531148-8.505876l69.081178 69.113246c54.378279 54.370263 142.940398 54.394313 197.41488 0.02405 54.40233-54.40233 54.410347-142.972466 0.008017-197.422896L610.763558 63.180778c-24.852229-24.852229-60.823825-39.114201-98.695415-39.130234h-0.056118c-37.863573 0-73.819136 14.245939-98.679381 39.098167L85.339346 391.109942c-54.394313 54.42638-54.40233 142.988499-0.024051 197.41488a138.691469 138.691469 0 0 0 98.695415 40.885924c37.246275 0 72.311968-14.518512 98.719465-40.861874l69.209448-69.201431a12.025272 12.025272 0 0 1 8.505876-3.527413z"
            fill="#33363A" p-id="2158"></path>
        <path
            d="M664.516523 539.934707c-3.07847 0-6.156939-1.17046-8.505876-3.519397l-72.913231-72.86513a12.025272 12.025272 0 1 1 17.011751-17.011752l72.913232 72.873148a12.025272 12.025272 0 0 1-8.505876 20.523131zM359.467443 539.934707a12.033289 12.033289 0 0 1-8.505875-20.523131l72.897198-72.873148a12.041306 12.041306 0 0 1 17.011751 0 12.041306 12.041306 0 0 1 0 17.011752l-72.897198 72.86513a11.985188 11.985188 0 0 1-8.505876 3.519397z"
            fill="#33363A" p-id="2159"></path>
        <path
            d="M651.68155 409.332237c0 77.162161-62.547447 139.701592-139.693575 139.701592-77.138111 0-139.685558-62.539431-139.685558-139.701592 0-77.130094 62.539431-139.669524 139.685558-139.669524s139.693575 62.539431 139.693575 139.669524z"
            fill="#FF8F8F" p-id="2160"></path>
        <path
            d="M651.68155 409.332237c0 59.10822-62.547447 107.008886-139.693575 107.008886-77.138111 0-139.685558-47.900666-139.685558-107.008886 0-59.060119 62.539431-106.992852 139.685558-106.992852s139.693575 47.932734 139.693575 106.992852z"
            fill="#FF1A1A" p-id="2161"></path>
        <path
            d="M372.302417 409.332237c0 77.162161 62.539431 139.701592 139.685558 139.701592s139.693575-62.539431 139.693575-139.701592H372.302417z"
            fill="#FFFFFF" p-id="2162"></path>
        <path
            d="M511.987975 516.341123c77.146127 0 139.693575-47.900666 139.693575-107.008886H372.302417c0 59.10822 62.547447 107.008886 139.685558 107.008886z"
            fill="#D8E5EA" p-id="2163"></path>
        <path
            d="M511.987975 257.637441c-83.655808 0-151.71083 68.047005-151.71083 151.694796 0 83.663825 68.055022 151.726863 151.71083 151.726864 83.655808 0 151.718847-68.063039 151.718846-151.726864 0-83.647791-68.063039-151.694796-151.718846-151.694796z m0 24.050544c66.3314 0 120.974235 50.858883 127.059022 115.61898H384.936969c6.092804-64.760097 60.719606-115.618981 127.051006-115.61898z m0 255.320572c-66.3314 0-120.966218-50.874917-127.051006-115.651048h254.110028c-6.084788 64.776131-60.719606 115.651048-127.059022 115.651048z"
            fill="#33363A" p-id="2164"></path>
        <path
            d="M511.987975 425.341883m-46.185061 0a46.185061 46.185061 0 1 0 92.370122 0 46.185061 46.185061 0 1 0-92.370122 0Z"
            fill="#A7BBC1" p-id="2165"></path>
        <path
            d="M511.987975 409.644894m-46.185061 0a46.185061 46.185061 0 1 0 92.370122 0 46.185061 46.185061 0 1 0-92.370122 0Z"
            fill="#FFFFFF" p-id="2166"></path>
        <path d="M479.335353 442.305533a46.193078 46.193078 0 0 1 65.31326-65.321277" fill="#D8E5EA" p-id="2167"></path>
        <path
            d="M511.995992 467.863244a57.865608 57.865608 0 0 1-41.166514-17.043819 57.833541 57.833541 0 0 1-17.043819-41.174531c0-15.552685 6.05272-30.175416 17.043819-41.166514a57.865608 57.865608 0 0 1 41.166514-17.043818c15.544668 0 30.159382 6.05272 41.15048 17.043818a57.801473 57.801473 0 0 1 17.059852 41.166514c0 15.552685-6.060737 30.175416-17.051835 41.166514a57.825524 57.825524 0 0 1-41.158497 17.051836z m0-92.386155a33.943334 33.943334 0 0 0-24.16278 10.013043 33.911267 33.911267 0 0 0-10.005026 24.154762c0 9.13119 3.551464 17.709217 10.005026 24.16278 6.453563 6.453563 15.03159 10.005026 24.16278 10.005026s17.7012-3.551464 24.146745-10.005026c6.461579-6.453563 10.013043-15.03159 10.013044-24.16278s-3.551464-17.7012-10.005027-24.154762h-0.008017a33.911267 33.911267 0 0 0-24.146745-10.013043z"
            fill="#33363A" p-id="2168"></path>
        <path
            d="M550.12412 708.480917c-3.07847 0-6.156939-1.17046-8.505875-3.519396l-29.622253-29.63027-29.622253 29.63027a12.025272 12.025272 0 0 1-17.011752-17.003735l38.128129-38.144162c4.513485-4.513485 12.498266-4.513485 17.011751 0l38.128129 38.144162a12.033289 12.033289 0 0 1-8.505876 20.523131z"
            fill="#33363A" p-id="2169"></path>
        <path
            d="M511.987975 756.405634a12.025272 12.025272 0 0 1-12.025272-12.025272V658.311483a12.025272 12.025272 0 1 1 24.050544 0v86.068879a12.025272 12.025272 0 0 1-12.025272 12.025272zM511.995992 792.561618a12.017255 12.017255 0 0 1-12.025272-12.025272c0-3.206739 1.282696-6.253141 3.527413-8.505876 4.489435-4.489435 12.506283-4.489435 16.995717 0a12.025272 12.025272 0 0 1-8.497858 20.531148zM511.995992 828.637433a12.017255 12.017255 0 0 1-12.025272-12.025272c0-3.206739 1.282696-6.253141 3.527413-8.505875 4.489435-4.489435 12.506283-4.489435 16.995717 0a12.025272 12.025272 0 0 1-8.497858 20.531147zM511.995992 864.713249c-3.126571 0-6.253141-1.282696-8.497859-3.527413a12.001221 12.001221 0 0 1 0-17.003735c4.489435-4.489435 12.586451-4.489435 16.995717 0a12.025272 12.025272 0 0 1-8.497858 20.531148z"
            fill="#33363A" p-id="2170"></path>
        <path
            d="M252.650962 847.188419l-38.128129-38.144162-0.008017-0.008017a12.001221 12.001221 0 0 0-16.995717 0l-0.008017 0.008017-38.128129 38.144162a12.033289 12.033289 0 0 0 17.011751 17.003735l17.596982-17.604998v57.031856a12.025272 12.025272 0 1 0 24.050543 0v-57.031856l17.596982 17.604998c2.348936 2.348936 5.427406 3.519396 8.505875 3.519396s6.156939-1.17046 8.505876-3.519396a12.025272 12.025272 0 0 0 0-17.003735zM197.495048 931.253087c-2.244717 2.244717-3.527413 5.371288-3.527413 8.497858 0 3.134588 1.282696 6.253141 3.527413 8.505876 2.244717 2.244717 5.371288 3.519396 8.497859 3.519396 3.206739 0 6.253141-1.274679 8.578027-3.519396 2.164549-2.244717 3.447245-5.371288 3.447245-8.505876 0-3.126571-1.282696-6.245125-3.527413-8.497858-4.497452-4.489435-12.5143-4.489435-16.995718 0zM197.495048 967.328902c-2.244717 2.244717-3.527413 5.371288-3.527413 8.497859 0 3.134588 1.282696 6.253141 3.527413 8.505876a12.009238 12.009238 0 0 0 20.523131-8.505876c0-3.126571-1.282696-6.245125-3.527413-8.497859-4.497452-4.489435-12.5143-4.489435-16.995718 0zM197.495048 1003.404718c-2.244717 2.244717-3.527413 5.371288-3.527413 8.497859 0 3.134588 1.282696 6.253141 3.527413 8.505875 2.244717 2.244717 5.371288 3.519396 8.497859 3.519396s6.253141-1.274679 8.578027-3.519396c2.164549-2.244717 3.447245-5.371288 3.447245-8.505875 0-3.126571-1.282696-6.245125-3.527413-8.497859-4.497452-4.489435-12.5143-4.489435-16.995718 0z"
            fill="#33363A" p-id="2171"></path>
        <path
            d="M864.60903 847.188419l-38.128129-38.144162-0.008017-0.008017a12.001221 12.001221 0 0 0-16.995717 0l-0.008017 0.008017-38.128129 38.144162a12.033289 12.033289 0 0 0 17.011752 17.003735l17.596981-17.604998v57.031856a12.025272 12.025272 0 1 0 24.050544 0v-57.031856l17.596981 17.604998c2.348936 2.348936 5.427406 3.519396 8.505875 3.519396s6.156939-1.17046 8.505876-3.519396a12.033289 12.033289 0 0 0 0-17.003735zM809.413032 931.253087c-2.164549 2.244717-3.447245 5.371288-3.447245 8.497858a12.009238 12.009238 0 0 0 20.523131 8.505876c2.244717-2.244717 3.527413-5.371288 3.527413-8.505876 0-3.126571-1.282696-6.245125-3.527413-8.497858-4.481418-4.489435-12.498266-4.489435-17.075886 0zM809.501217 967.328902c-2.244717 2.244717-3.527413 5.371288-3.527413 8.497859a12.009238 12.009238 0 0 0 20.523131 8.505876c2.244717-2.244717 3.527413-5.371288 3.527413-8.505876 0-3.126571-1.282696-6.245125-3.527413-8.497859-4.489435-4.489435-12.594468-4.489435-16.995718 0zM809.413032 1003.404718c-2.164549 2.244717-3.447245 5.371288-3.447245 8.497859a12.009238 12.009238 0 0 0 20.523131 8.505875c2.244717-2.244717 3.527413-5.371288 3.527413-8.505875 0-3.126571-1.282696-6.245125-3.527413-8.497859-4.481418-4.489435-12.498266-4.489435-17.075886 0z"
            fill="#33363A" p-id="2172"></path>
      </svg>
    </div>
    <div class="kongJian">
      <!--          上一首-->
      <div class="item" @click="prev">
        <svg t="1658634652229" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
             p-id="2805" width="48" height="48">
          <path
              d="M256 224a32 32 0 0 1 32 32v512a32 32 0 0 1-64 0V256a32 32 0 0 1 32-32z m385.952 30.624a96 96 0 0 1 157.44 73.76v366.72a96 96 0 0 1-157.44 73.76l-220.032-183.36a96 96 0 0 1 0-147.52z m86.048 53.28a32 32 0 0 0-45.056-4.096l-220.032 183.36a32 32 0 0 0-4.096 4.096l-2.4 3.232a32 32 0 0 0 6.496 41.824l220.032 183.36a32 32 0 0 0 52.48-24.576v-366.72a32 32 0 0 0-7.424-20.48z"
              p-id="2806"></path>
        </svg>
      </div>
      <!--          播放-->
      <div class="item" @click="togglePlay">
        <svg class="icon">
          <use :xlink:href="playButtonUrl"></use>
        </svg>
      </div>
      <!--          下一首-->
      <div class="item" @click="next">
        <svg t="1658634813275" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
             p-id="2088" width="48" height="48">
          <path
              d="M768 224a32 32 0 0 1 32 32v512a32 32 0 0 1-64 0V256a32 32 0 0 1 32-32z m-386.336 31.36l220.032 183.36a96 96 0 0 1 0 147.52l-220.032 183.36a96 96 0 0 1-157.44-73.76v-366.72a96 96 0 0 1 157.44-73.76zM295.616 308.64a32 32 0 0 0-7.424 20.48v366.72a32 32 0 0 0 52.48 24.576l220.032-183.36a32 32 0 0 0 6.496-41.824l-2.4-3.264a32 32 0 0 0-4.096-4.096l-220.032-183.36a32 32 0 0 0-45.056 4.128z"
              p-id="2089"></path>
        </svg>
      </div>
      <!--        歌曲图片-->
      <div class="item-img" @click="toLyric" title="歌词">
        <img :src="attachImgUrl(picture)" style="border-radius: 20%;">
      </div>
      <!--        播放进度-->
      <div class="playing-speed">
        <!--          播放开始时间-->
        <div class="current-time">
          {{ nowTime }}
        </div>
        <div class="progress-box">
          <div class="item-song-title">
            <div>{{ name }}-{{ singerName }}</div>
          </div>

          <div ref="progress" class="progress" @mousemove="mousemove">
            <!--              进度条-->
            <div ref="bg" class="bg" @click="updateMove">
              <div ref="curProgress" class="cur-progress" :style="{width:curLength+'%'}"></div>
            </div>
            <!--              拖动点-->
            <div class="idot"
                 ref="idot"
                 :style="{left:curLength+'%'}"
                 @mousedown="mousedown"
                 @mouseup="mouseup"
                 style="cursor: pointer">
            </div>
          </div>
        </div>
        <!--          播放结束时间-->
        <div class="left-time">
          {{ songTime }}
        </div>
        <!--          音量-->
        <div class="item item-volume" ref="item-volume">
          <svg v-if="volume != 0" v- t="1658635519725" class="icon" viewBox="0 0 1024 1024" version="1.1"
               xmlns="http://www.w3.org/2000/svg" p-id="4612" width="48" height="48">
            <path
                d="M128 420.576v200.864h149.12l175.456 140.064V284.288l-169.792 136.288H128z m132.256-64l204.288-163.968a32 32 0 0 1 52.032 24.96v610.432a32 32 0 0 1-51.968 24.992l-209.92-167.552H96a32 32 0 0 1-32-32v-264.864a32 32 0 0 1 32-32h164.256zM670.784 720.128a32 32 0 0 1-44.832-45.664 214.08 214.08 0 0 0 64.32-153.312 213.92 213.92 0 0 0-55.776-144.448 32 32 0 1 1 47.36-43.04 277.92 277.92 0 0 1 72.416 187.488 278.08 278.08 0 0 1-83.488 198.976zM822.912 858.88a32 32 0 1 1-45.888-44.608A419.008 419.008 0 0 0 896 521.152c0-108.704-41.376-210.848-114.432-288.384a32 32 0 0 1 46.592-43.872c84.16 89.28 131.84 207.04 131.84 332.256 0 127.84-49.76 247.904-137.088 337.728z"
                p-id="4613"></path>
          </svg>
          <svg v-else t="1658654475047" class="icon" viewBox="0 0 1024 1024" version="1.1"
               xmlns="http://www.w3.org/2000/svg" p-id="2238" width="48" height="48">
            <path
                d="M128 420.576v200.864h149.12l175.456 140.064V284.288l-169.792 136.288H128z m132.256-64l204.288-163.968a32 32 0 0 1 52.032 24.96v610.432a32 32 0 0 1-51.968 24.992l-209.92-167.552H96a32 32 0 0 1-32-32v-264.864a32 32 0 0 1 32-32h164.256zM752 458.656L870.4 300.8a32 32 0 1 1 51.2 38.4L792 512l129.6 172.8a32 32 0 0 1-51.2 38.4l-118.4-157.856-118.4 157.856a32 32 0 0 1-51.2-38.4l129.6-172.8-129.6-172.8a32 32 0 0 1 51.2-38.4l118.4 157.856z"
                p-id="2239"></path>
          </svg>
          <el-slider class="volume" ref="volume" v-model="volume" :vertical="true"></el-slider>
        </div>
        <!--          收藏-->
        <div class="item" @click="collection">
          <svg :class="{active:collectActive}" class="icon">
            <use xlink:href="#icon-xihuan-shi"></use>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mixin} from "@/mixins";
import {mapGetters} from "vuex";
import axios from "axios";

export default {
  mixins: [mixin],
  name: "PlayBar",
  data() {
    return {
      nowTime: '00:00',    //当前播放进度时间
      songTime: '00:00',   //当前歌曲总时间
      curLength: 0,        //进度条位置
      progressLength: 0,   //进度条总长度
      mouseStartX: 0,      //拖拽播放位置
      tag: false,          //拖拽开始结束的标志，当开始拖拽才会变成true
      volume: 50,          //默认音量
      toggle: true,         //显示隐藏播放器页面
      openLyric: false,      //控制歌词打开与关闭
    }
  },
  //在computed中使用：将store中的getters映射到局部计算属性中
  computed: {
    ...mapGetters([
      'isPlay',
      'id',
      'url',
      'playButtonUrl',
      'picture',
      'name',
      'singerName',
      'lyric',
      'duration',
      'curTime',    //当前歌曲播放位置
      'showAside',  //控制显示歌曲列表
      'listIndex',  //当前歌曲在歌单中的位置
      'listOfSongs',
      'autoNext',           //自动播放下一首
      'loginIn',
      'userId',
      'collectActive',  //当前播放的歌曲是否已经收藏
      'number',         //当前用户的收藏数量
    ])
  },
  mounted() {
    // getBoundingClientRect() 方法返回元素的大小及其相对于视口的位置。
    //计算进度条总长度
    this.progressLength = this.$refs.progress.getBoundingClientRect().width;

    this.$refs["item-volume"].addEventListener('click', function (e) {
      document.querySelector('.volume').classList.add('show-volume');
      e.stopPropagation();
    }, false);
    document.querySelector('.volume').addEventListener('click', function (e) {
      e.stopPropagation();
    }, false);
    document.addEventListener('click', function () {
      document.querySelector('.volume').classList.remove('show-volume');
    }, false)
  },
  watch: {
    //监控播放状态
    isPlay() {
      if (this.isPlay) {
        //当前是播放状态再次点击则暂停
        this.$store.commit('setPlayButtonUrl', '#icon-zanting');
      } else {
        this.$store.commit('setPlayButtonUrl', '#icon-bofang');
      }
    },

    //监控歌曲进度条时间
    curTime() {
      this.nowTime = this.changeTime(this.curTime);
      this.songTime = this.changeTime(this.duration);
      //计算进度条位置位置
      this.curLength = (this.curTime / this.duration) * 100
    },

    //  监控音量变化,及时更新数据
    volume() {
      this.$store.commit('setVolume', this.volume / 100)
    },
    //  监控自动播放
    autoNext() {
      //如果歌曲结束，自动播放下一首
      this.next()
    }
  },

  methods: {
    //  控制音乐播放暂停
    togglePlay() {
      if (this.isPlay) {
        //当前是播放状态再次点击则暂停
        this.$store.commit('setIsPlay', false);
      } else {
        this.$store.commit('setIsPlay', true);
      }
    },

    //  更改歌曲时间
    changeTime(value) {
      let theTime = parseInt(value);  //获取歌曲总时间
      let result = '';
      let minute = parseInt(theTime / 60); //计算分钟
      let seconds = parseInt(theTime % 60); //计算秒

      //添加分钟
      result += '0' + minute + ':';
      //添加秒
      if (seconds > 0) {
        if (seconds < 10) {
          result += '0' + seconds;
        } else {
          result += seconds;
        }
      } else {
        result += '00:';
      }
      return result;
    },
    //拖拽开始
    mousedown(e) {
      this.mouseStartX = e.clientX;
      this.tag = true;
    },
    //  拖拽结束
    mouseup() {
      this.tag = false
    },
    //  拖拽中
    mousemove(e) {
      if (!this.duration) {
        return false;
      }
      //拖拽中
      if (this.tag) {
        let movementX = e.clientX - this.mouseStartX;   //移动距离
        let curLength = this.$refs.curProgress.getBoundingClientRect().width; //当前进度条位置

        let newPercent = ((movementX + curLength) / this.progressLength) * 100;//计算当前距离
        if (newPercent > 100) {
          newPercent = 100;
        }
        this.curLength = newPercent;
        this.mouseStartX = e.clientX;
        this.changeProgress(newPercent)
      }
    },
    //  更改歌曲进度
    changeProgress(percent) {
      let newCurTime = (percent * 0.01) * this.duration;
      this.$store.commit('setChangeTime', newCurTime);
    },

    //播放条点击拖动
    updateMove(e) {
      //如果是非拖动状态
      if (!this.tag) {
        //  进度条左侧坐标
        let curLength = this.$refs.bg.offsetLeft; // 计算出起始坐标
        let newPercent = ((e.clientX - curLength) / this.progressLength) * 100; //当前位置减去起始位置，再除以总长度
        if (newPercent > 100) {
          newPercent = 100;
        }
        if (newPercent < 0) {
          newPercent = 0;
        }
        this.curLength = newPercent;
      }
    },
    //  上一首
    prev() {
      //当前不知只有一首歌的时候
      if (this.listIndex != -1 && this.listOfSongs.length > 1) {
        //不是第一首
        if (this.listIndex > 0) {
          this.$store.commit('setListIndex', this.listIndex - 1)
        } else {
          //切换到最后一首
          this.$store.commit('setListIndex', this.listOfSongs.length - 1)
        }
        //  播放音乐
        this.toPlay(this.listOfSongs[this.listIndex].url)
      }
    },
    next() {
      //当前不知只有一首歌的时候
      if (this.listIndex != -1 && this.listOfSongs.length > 1) {
        //不是最后一首一首
        if (this.listIndex < this.listOfSongs.length - 1) {
          this.$store.commit('setListIndex', this.listIndex + 1)
        } else {
          //切换到第一首
          this.$store.commit('setListIndex', 0)
        }
        //  播放音乐
        this.toPlay(this.listOfSongs[this.listIndex].url)
      }
    },
    //播放音乐
    toPlay(url) {
      if (url && url != this.url) {
        this.$store.commit('setId', this.listOfSongs[this.listIndex].id);
        this.$store.commit('setUrl', this.$store.state.HOST + url);
        this.$store.commit('setPicture', this.listOfSongs[this.listIndex].picture);
        this.$store.commit('setName', this.listOfSongs[this.listIndex].name);
        this.$store.commit("setSingerName", this.listOfSongs[this.listIndex].singerName);
        this.$store.commit('setLyric', this.parseLyric(this.listOfSongs[this.listIndex].lyric));
        this.getCollectState(this.listOfSongs[this.listIndex].id)
      }
    },
    //转向歌词页面
    toLyric() {
      if (this.openLyric == false) {
        this.$router.push({name: 'lyric'})
        this.openLyric = true
      } else {
        //再次点击返回
        this.$router.go(-1)
        this.openLyric = false
      }

    },

    //收藏 / 取消收藏歌曲按钮
    collection() {
      if (this.loginIn) {
        if (this.collectActive == false) {
          axios.post('/collection/add', {
            //  从浏览器本地存储中获取到用户id
            userId: localStorage.getItem('userId'),
            songId: this.id
          }).then(
              response => {
                if (response.data.code == 1) {
                  //设置当前歌曲为收藏状态
                  this.$store.commit('setCollectActive', true);
                  //增加用户收藏数量
                  this.$store.commit('setNumber', this.number + 1)
                  this.$message({
                    type: 'success',
                    center: true,
                    message: response.data.message,
                    duration: 1000
                  });
                }
              }
          )
        } else {
          this.$store.commit('setCollectActive', false);
          //收藏过后再次点击取消收藏
          axios.post('/collection/delete/' + localStorage.getItem('userId') + '/' + this.id).then(
              response => {
                if (response.data.code == 1) {
                  //取消收藏点亮
                  this.$store.commit('setCollectActive', false)
                  //减少用户收藏数量
                  this.$store.commit('setNumber', this.number - 1)
                  this.$message({
                    type: 'success',
                    center: true,
                    message: response.data.message,
                    duration: 1000
                  });
                } else {
                  this.$message({
                    type: 'error',
                    center: true,
                    message: response.data.message,
                    duration: 1000
                  });
                }
              }
          )
        }
      } else {
        this.$message({
          type: 'warning',
          center: true,
          message: '请先登录',
          duration: 1000
        });
      }
    },
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/css/play-bar.scss";
</style>
