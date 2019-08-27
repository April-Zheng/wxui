/*
 * @Author: zlp
 * @Description: 
 * @version: 
 * @Date: 2019-08-27 17:38:15
 * @LastEditors: zlp
 * @LastEditTime: 2019-08-27 17:46:32
 */
// pages/example/tabs/tabs.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        tabs: ['tabs1', 'tabs2', 'tabs3'],
        activeIndex: 0
    },

    tabClick(e) {
        this.setData({
            activeIndex: e.detail.value
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