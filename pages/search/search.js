// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tradeInfo:[]
  },

  staticData:{
    keywords:''
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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
  
  },

  handelBindInput(e){
   this.staticData.keywords = e.detail.value;
  },
  handelSearchAction(){
    console.log(this.staticData.keywords)
    wx.request({
      url: 'https://www.duapp.com/v1.0/list', //仅为示例，并非真实的接口地址
      data: {
        keyword:this.staticData.keywords
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      success: (res) => {
       this.setData({
         tradeInfo:res.data.data
       })
      }
    })
  }

})