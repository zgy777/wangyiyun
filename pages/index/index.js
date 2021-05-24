// pages/index/index.js


import {reqBanner, reqRecommend, reqTopList} from "../../utils/index";

Page({

  /**
   * 页面的初始数据
   */
  data: {
    bannerList: [], // 轮播图数据
    recommendList: [], // 推荐歌单
    topList: [], // 排行榜数据

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.initData()
  },


  //获取数据
  async initData() {

    //获取轮播数据
    let bannerListData = await reqBanner(2)
    //获取推荐歌单
    let recommendListData = await reqRecommend(10)


    this.setData({
      bannerList: bannerListData.banners,
      recommendList: recommendListData.result
    })


    let resultArr = []
    let index = 0
    while (index < 5){
      let topListData = await reqTopList(index++)

      let topListItem = {
        name: topListData.playlist.name,
        tracks: topListData.playlist.tracks.slice(0,3)
      }

      resultArr.push(topListItem)

      this.setData({
        topList:resultArr
      })

    }



  },


  // 跳转至recommendSong页面的回调
  toRecommendSong() {
    wx.navigateTo({
      url: '/pages/recommendSong/recommendSong'
    })
  },

  // 跳转至other页面
  toOther() {
    wx.navigateTo({
      url: '/pages/other/other'
    })
  },







  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
