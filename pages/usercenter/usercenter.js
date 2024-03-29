/*
 * @Author: zlp
 * @Description: 
 * @version: 
 * @Date: 2019-09-03 09:41:43
 * @LastEditors: zlp
 * @LastEditTime: 2019-09-12 10:15:31
 */
// pages/usercenter/usercenter.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        list: [
            { title: "Map组件", path: "others/map/map" },
            { title: "Javascript常用", path: "others/utils/utils" }
        ]
    },

    navigateToPage(e) {
        let path = e.currentTarget.dataset.path
        if (path) {
            wx.navigateTo({
                url: path
            })
        }
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {},

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {
        if (typeof this.getTabBar === 'function' &&
            this.getTabBar()) {
            this.getTabBar().setData({
                selected: 2
            })
        }
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