//app.js
App({
  onLaunch: function () {
    
  },
  globalData: {
    userInfo: null
  },
  getGlobalInfo:{
    systemInfo(){
      try {
        var res = wx.getSystemInfoSync()
        return res
      } catch (e) {
        // Do something when catch error
      }
    }
  }
})