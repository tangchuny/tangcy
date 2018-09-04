var util = require('../../utils/util.js');
var api = require('../../config/api.js');

Page({
  data: {
    // text:"这是一个页面"
    navList: [

    ],
    goodsList: [],
    id: 1,
    currentCategory: {},
    scrollLeft: 0,
    scrollTop: 0,
    scrollHeight: 0,
    page: 1,
    size: 10000
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    var that = this;

    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          scrollHeight: res.windowHeight
        });
      }
    });
    this.getCategoryInfo();
    this.getGoodsList(1)
  },
  getCategoryInfo: function () {
    let that = this;
    util.request(api.CatalogList)
      .then(function (res) {
        if (res.errno == 0) {
          that.setData({
            navList: res.data,
          });

        } else {
          //显示错误信息
        }
        
      });
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
    console.log(1);
  },
  onHide: function () {
    // 页面隐藏
  },
  getGoodsList: function (id) {
    var that = this;
    util.request(api.GoodsList, { category_id: id })
      .then(function (res) {
        that.setData({
          goodsList: res.data,
        });
      });
  },
  onUnload: function () {
    // 页面关闭
  },
  openCartPage: function () {
    wx.switchTab({
      url: '/pages/cart/cart',
    });
  },
  switchCate: function (event) {
    if (this.data.id == event.currentTarget.dataset.id) {
      return false;
    }
    this.setData({
      id: event.currentTarget.dataset.id
    });
    this.getGoodsList(this.data.id)
  }
})