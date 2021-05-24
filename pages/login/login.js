// pages/login/login.js
import {reqLogin} from "../../utils/index";

Page({

  /**
   * 页面的初始数据
   */
  data: {
    phone: '', // 手机号
    password: '' // 用户密码
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  //表单输入过渡到data
  handleInput(event) {
    console.log('aaaa')
    let type = event.currentTarget.dataset.type
    this.setData({
      [type]: event.detail.value
    })


  },



  //提交登录请求
  async login() {
    let {phone, password} = this.data

    //前端验证
    if (!phone) {
      wx.showToast({
        title: '手机号不能为空',
        icon: 'none'
      })
      return;
    }

    let phoneReg = /^1(3|4|5|6|7|8|9)\d{9}$/;
    if (!phoneReg.test(phone)) {
      wx.showToast({
        title: '手机号格式错误',
        icon: 'none'
      })
      return;
    }

    if (!password) {
      wx.showToast({
        title: '密码不能为空',
        icon: 'none'
      })
      return;
    }

    //后端验证
    let result = await reqLogin({phone, password, isLogin: true})
    if(result.code === 200){
      wx.showToast({
        title:'登录成功'
      })

      wx.setStorageSync('userInfo',JSON.stringify(result.profile))

      wx.reLaunch({
        url:'/pages/personal/personal'
      })
    }else if(result.code === 400){
      wx.showToast({
        title:'手机号错误',
        icon:'none'
      })
    }else if( result.code === 502){
      wx.showToast({
        title:'密码错误',
        icon:'none'
      })
    }else{
      wx.showToat({
        title:'登录失败，请重新登录',
        icon:'none'
      })
    }


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
