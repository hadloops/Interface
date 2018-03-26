//index.js
//获取应用实例
const app = getApp()

Page({
 data:{
   latitude:0,
   longitude:0,
   controls:[]
 },
 onLoad(){
   wx.getLocation({
     type: 'wgs84',
     success: this.handleGetLocation.bind(this)
   })
 },
 onReady(){
   this.mapCtx = wx.createMapContext('map')
 },
 handleGetLocation(res){
  /*app.getGlobalInfo.systemInfo(function(res){
    console.log(res)
  })*/
   this.setData({
     latitude: res.latitude,
     longitude: res.longitude,
     controls: [
       {
       id: 1,
       iconPath: '/resource/pin.png',
       position: {
         left: 20,
         top: app.getGlobalInfo.systemInfo().windowHeight-80,
         width: 30,
         height: 30
       },
       clickable: false
     },
       {
         id: 2,
         iconPath: '/resource/location.png',
         position: {
           left: app.getGlobalInfo.systemInfo().windowWidth/2-15 ,
           top: (app.getGlobalInfo.systemInfo().windowHeight -44)/2-22,
           width: 30,
           height: 30
         },
         clickable: true
       }
     
     
     ]
   })
 },
controltap(e){
  console.log(e)
  if (e.controlId === 1 ){
    
    this.mapCtx.moveToLocation()
  }
  /*else{
    wx.chooseLocation({
      success: function(res) {
        console.log(res)
      },
    })
  }*/
},
gotoPublish(){
  wx.navigateTo({
    url: '/pages/publish/publish'
  })
},
  gotoSearch(){
    wx.navigateTo({
      url: '/pages/search/search'
    })
  }
})
