/*
 * @Author: zlp
 * @Description: 
 * @version: 
 * @Date: 2019-09-05 09:52:07
 * @LastEditors: zlp
 * @LastEditTime: 2019-09-05 11:29:41
 */
// pages/example/toast/toast.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        btns: [{
                show: true,
                name: "toast_top_icon提示",
                content: "toast_top_icon提示",
                position: 'top',
                mask: false,
                type: "cancel"
            },
            {
                show: true,
                name: "toast_center提示",
                content: "toast_center提示toast_center提示toast_center提示toast_center提示toast_center提示toast_center提示toast_center提示toast_center提示toast_center提示toast_center提示toast_center提示toast_center提示toast_center提示toast_center提示",
                position: 'center',
                duration: 3000,
                mask: true,
            },
            {
                show: true,
                name: "toast_bottom提示",
                content: "toast_bottom提示",
                position: 'bottom',
                mask: false
            }
        ],
        currentConfig: {}
    },

    showToast(e) {
        let item = e.currentTarget.dataset.item
        this.setData({
            currentConfig: item
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