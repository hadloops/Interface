// pages/publish/publish.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    address:'',
    isShowSucc:false
  },
  staticData:{
    types:'buy',
    contact:'',
    message:'',
    longitude:0,
    latitude:0
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
   

  chooseLocation(){
    wx.chooseLocation({
      success:(res)=> {
        this.setData({
          address: res.address
        })
      },
     
    })
  },
  radioChange(e){
    this.staticData.types = e.detail.value
  },
  descriptionInput(e){
    this.staticData.message = e.detail.value
  },
  contactInput(e){
    this.staticData.contact = e.detail.value
  },
  submitForm(){
    if(this.data.address === ''){
      this.showToasts('请选择地址')
      return
    }

    if (this.staticData.message === '') {
      this.showToasts('请填写说明')
      return
    }

    if (this.staticData.contact === '') {
      this.showToasts('请写联系方式')
      return
    } 
    const data={
      address:this.data.address,
      ...this.staticData
    }
    wx.request({
      url: 'https://test.php', //仅为示例，并非真实的接口地址
      data:JSON.stringify(data),
      method:'POST',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: (res)=> {
        console.log(res.data)
        this.setData({
          isShowSucc:true
        })

      }
    })
    
  },

  showToasts(title){
    wx.showToast({
      title: title,
      icon: 'loading',
      duration: 2000
    })
  },
  back(){
    wx.navigateBack({
      delta: 1 //第几级
    })
  }


})