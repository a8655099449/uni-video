(function(vue) {
  "use strict";
  function _interopNamespace(e) {
    if (e && e.__esModule)
      return e;
    var n = { __proto__: null, [Symbol.toStringTag]: "Module" };
    if (e) {
      Object.keys(e).forEach(function(k) {
        if (k !== "default") {
          var d = Object.getOwnPropertyDescriptor(e, k);
          Object.defineProperty(n, k, d.get ? d : {
            enumerable: true,
            get: function() {
              return e[k];
            }
          });
        }
      });
    }
    n["default"] = e;
    return Object.freeze(n);
  }
  var vue__namespace = /* @__PURE__ */ _interopNamespace(vue);
  Object.freeze({});
  Object.freeze([]);
  const objectToString = Object.prototype.toString;
  const toTypeString = (value) => objectToString.call(value);
  const toRawType = (value) => {
    return toTypeString(value).slice(8, -1);
  };
  function isDebugMode() {
    return typeof __channelId__ === "string" && __channelId__;
  }
  function jsonStringifyReplacer(k, p) {
    switch (toRawType(p)) {
      case "Function":
        return "function() { [native code] }";
      default:
        return p;
    }
  }
  function normalizeLog(type, filename, args) {
    if (isDebugMode()) {
      args.push(filename.replace("at ", "uni-app:///"));
      return console[type].apply(console, args);
    }
    const msgs = args.map(function(v) {
      const type2 = toTypeString(v).toLowerCase();
      if (type2 === "[object object]" || type2 === "[object array]") {
        try {
          v = "---BEGIN:JSON---" + JSON.stringify(v, jsonStringifyReplacer) + "---END:JSON---";
        } catch (e) {
          v = type2;
        }
      } else {
        if (v === null) {
          v = "---NULL---";
        } else if (v === void 0) {
          v = "---UNDEFINED---";
        } else {
          const vType = toRawType(v).toUpperCase();
          if (vType === "NUMBER" || vType === "BOOLEAN") {
            v = "---BEGIN:" + vType + "---" + v + "---END:" + vType + "---";
          } else {
            v = String(v);
          }
        }
      }
      return v;
    });
    return msgs.join("---COMMA---") + " " + filename;
  }
  function formatAppLog(type, filename, ...args) {
    const res = normalizeLog(type, filename, args);
    res && console[type](res);
  }
  var _export_sfc = (sfc, props) => {
    for (const [key, val] of props) {
      sfc[key] = val;
    }
    return sfc;
  };
  const _sfc_main$8 = {
    props: {
      list: {
        type: Array,
        required: true
      }
    },
    setup(props, { emit }) {
      const handleSwiperClick = (index) => {
        emit("clickItem", index);
      };
      return {
        handleSwiperClick
      };
    }
  };
  function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "wrap" }, [
      vue.createElementVNode("swiper", {
        "indicator-dots": "",
        circular: "",
        class: "swiper"
      }, [
        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.list, (item, index) => {
          return vue.openBlock(), vue.createElementBlock("swiper-item", {
            class: "swiper-item",
            key: item,
            onClick: ($event) => $setup.handleSwiperClick(index)
          }, [
            vue.createElementVNode("image", {
              src: "https://pic4.zhimg.com/v2-d1685367b6bae10418cf768b0f3eb47b_b.jpg",
              mode: "scaleToFill"
            })
          ], 8, ["onClick"]);
        }), 128))
      ])
    ]);
  }
  var BaseSwiper = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$7], ["__scopeId", "data-v-1166e648"]]);
  const querySelectAll = (selector) => {
    return new Promise((resolve) => {
      let view = uni.createSelectorQuery().selectAll(selector);
      view.fields({
        size: true,
        rect: true,
        scrollOffset: true
      }, (res) => {
        resolve(res);
      }).exec();
    });
  };
  const _sfc_main$7 = {
    name: "NavBar",
    props: {
      nvaList: {
        type: Array,
        default: ["\u83DC\u53551", "\u83DC\u53552", "\u83DC\u53553"]
      },
      activeIndex: {
        type: Number,
        default: 0
      },
      sliderBarWidth: {
        type: Number,
        default: 10
      }
    },
    setup({ activeIndex, sliderBarWidth }, { emit }) {
      const _activeIndex = vue.ref(activeIndex);
      const clickItem = (evert, index) => {
        emit("clickItem", index);
        _activeIndex.value = index;
      };
      const slideLefts = vue.ref([]);
      const setRefs = (el) => {
      };
      vue.onMounted(async () => {
        const doms = await querySelectAll(`.nav-item`);
        let firstLeft = 0;
        slideLefts.value = doms.map(({ width, left }, index) => {
          if (index === 0) {
            firstLeft = left;
          }
          return left - firstLeft + (width - sliderBarWidth) / 2;
        });
      });
      return {
        clickItem,
        setRefs,
        slideLefts,
        _activeIndex
      };
    }
  };
  function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "nav" }, [
      (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.nvaList, (item, index) => {
        return vue.openBlock(), vue.createElementBlock("view", {
          class: vue.normalizeClass({
            "nav-item": true,
            active: index == $setup._activeIndex
          }),
          key: item,
          onClick: ($event) => $setup.clickItem($event, index),
          ref: $setup.setRefs
        }, vue.toDisplayString(item), 11, ["onClick"]);
      }), 128)),
      vue.createElementVNode("view", {
        class: "slide-bar",
        style: vue.normalizeStyle({
          left: `${$setup.slideLefts[$setup._activeIndex]}px`,
          width: `${$props.sliderBarWidth * 2}rpx`
        })
      }, null, 4)
    ]);
  }
  var NavBar = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$6], ["__scopeId", "data-v-3ec30023"]]);
  const _sfc_main$6 = {
    props: {
      src: {
        type: String,
        default: "https://picsum.photos/300/200"
      },
      width: {
        type: String,
        default: `100%`
      },
      height: {
        type: String,
        default: `100%`
      }
    }
  };
  function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("image", {
      src: $props.src,
      mode: "center",
      class: "base-image",
      style: vue.normalizeStyle({
        width: $props.width,
        height: $props.height
      })
    }, null, 12, ["src"]);
  }
  var BaseImage = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$5], ["__scopeId", "data-v-0d13e882"]]);
  const _sfc_main$5 = {
    components: { BaseImage },
    name: "VideoItem"
  };
  function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_BaseImage = vue.resolveComponent("BaseImage");
    return vue.openBlock(), vue.createElementBlock("view", { class: "video-item" }, [
      vue.createElementVNode("view", { class: "img-view" }, [
        vue.createVNode(_component_BaseImage)
      ]),
      vue.createElementVNode("view", { class: "zan" }, [
        vue.createElementVNode("text", { class: "tag" }, "\u6807\u7B7E"),
        vue.createElementVNode("text", null, [
          vue.createElementVNode("text", { class: "iconfont icon-dianzan" }),
          vue.createTextVNode(" 6666 ")
        ])
      ])
    ]);
  }
  var VideoItem = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$4], ["__scopeId", "data-v-181fee4b"]]);
  const _sfc_main$4 = {
    name: "list",
    components: { VideoItem }
  };
  function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_VideoItem = vue.resolveComponent("VideoItem");
    return vue.openBlock(), vue.createElementBlock("view", { class: "list-view" }, [
      (vue.openBlock(), vue.createElementBlock(vue.Fragment, null, vue.renderList(20, (item) => {
        return vue.createVNode(_component_VideoItem, { key: item });
      }), 64))
    ]);
  }
  var ListVue = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$3], ["__scopeId", "data-v-abf24940"]]);
  const _sfc_main$3 = {
    setup() {
      const nvaIndex = vue.ref(0);
      const handleNavItem = (index) => {
        nvaIndex.value = index;
        formatAppLog("log", "at pages/home/index.vue:23", "\u{1F474}2021-12-16 20:15:59 index.vue line:22", nvaIndex);
      };
      const handleSwiperChange = (index) => {
      };
      return {
        handleNavItem,
        handleSwiperChange
      };
    },
    components: {
      BaseSwiper,
      NavBar,
      ListVue
    }
  };
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_base_swiper = vue.resolveComponent("base-swiper");
    const _component_NavBar = vue.resolveComponent("NavBar");
    const _component_ListVue = vue.resolveComponent("ListVue");
    return vue.openBlock(), vue.createElementBlock("view", { class: "home" }, [
      vue.createElementVNode("view", { class: "swiper-wrap" }, [
        vue.createVNode(_component_base_swiper, {
          list: [1, 2, 3],
          onClickItem: $setup.handleSwiperChange
        }, null, 8, ["onClickItem"]),
        vue.createVNode(_component_NavBar, {
          nvaList: ["\u70ED\u95E8\u89C6\u9891", "\u6700\u65B0\u89C6\u9891"],
          onClickItem: $setup.handleNavItem
        }, null, 8, ["onClickItem"]),
        vue.createVNode(_component_ListVue)
      ])
    ]);
  }
  var PagesHomeIndex = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$2]]);
  const _sfc_main$2 = {};
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", null, "\u4E2A\u4EBA\u4E2D\u5FC3");
  }
  var PagesProfileIndex = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$1]]);
  const _sfc_main$1 = {};
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", null, " category ");
  }
  var PagesCategoryIndex = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render]]);
  if (typeof Promise !== "undefined" && !Promise.prototype.finally) {
    Promise.prototype.finally = function(callback) {
      const promise = this.constructor;
      return this.then((value) => promise.resolve(callback()).then(() => value), (reason) => promise.resolve(callback()).then(() => {
        throw reason;
      }));
    };
  }
  if (uni.restoreGlobal) {
    uni.restoreGlobal(vue__namespace, weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
  }
  __definePage("pages/home/index", PagesHomeIndex);
  __definePage("pages/profile/index", PagesProfileIndex);
  __definePage("pages/category/index", PagesCategoryIndex);
  const _sfc_main = {
    onLaunch: function() {
      formatAppLog("log", "at App.vue:4", "App Launch");
    },
    onShow: function() {
      formatAppLog("log", "at App.vue:7", "App Show");
    },
    onHide: function() {
      formatAppLog("log", "at App.vue:10", "App Hide");
    }
  };
  function createApp() {
    const app = vue.createVueApp(_sfc_main);
    return {
      app
    };
  }
  const __app__ = createApp().app;
  __app__._component.mpType = "app";
  __app__._component.render = () => {
  };
  __app__.use(uni.__vuePlugin).mount("#app");
})(Vue);
