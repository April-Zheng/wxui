/*
 * @Author: zlp
 * @Description: 
 * @version: 
 * @Date: 2019-08-27 17:38:15
 * @LastEditors: zlp
 * @LastEditTime: 2019-09-04 10:04:49
 */
// pages/example/tabs/tabs.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        tabs: ['tabs1', 'tabs2', 'tabs3'],
        tabs2: ['tabs1', 'tabs2', 'tabs3', 'tabs4', 'tabs5', 'tabs6', 'tabs7', 'tabs8', 'tabs9', 'tabs10'],
        activeIndex: 0,
        activeIndex2: 0
    },

    tabClick(e) {
        this.setData({
            activeIndex: e.detail.value
        })
    },
    tabClick2(e) {
        this.setData({
            activeIndex2: e.detail.value
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    }
})