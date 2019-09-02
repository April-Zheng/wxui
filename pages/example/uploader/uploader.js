/*
 * @Author: zlp
 * @Description: 
 * @version: 
 * @Date: 2019-08-29 17:21:41
 * @LastEditors: zlp
 * @LastEditTime: 2019-09-02 10:55:15
 */
// pages/example/uploader/uploader.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        images: [
            'https://d-paper.i4.cn/max/2018/03/27/11/1522122316835_461370.jpg',
            'https://d-paper.i4.cn/max/2018/03/27/11/1522122316835_461370.jpg',
            'https://d-paper.i4.cn/max/2018/03/27/11/1522122316835_461370.jpg',
            'https://d-paper.i4.cn/max/2018/03/27/11/1522122316835_461370.jpg'
        ],
        images2: [
            'https://d-paper.i4.cn/max/2019/04/04/11/1554349361494_922842.jpg',
            'https://d-paper.i4.cn/max/2019/04/04/11/1554349361494_922842.jpg',
            'https://d-paper.i4.cn/max/2019/04/04/11/1554349361494_922842.jpg',
            'https://d-paper.i4.cn/max/2019/04/04/11/1554349361494_922842.jpg'
        ]
    },

    uploader(e) {
        this.setData({
            images: this.data.images.concat(e.detail.tempFilePaths)
        })
    },
    uploader2(e) {
        this.setData({
            images2: this.data.images2.concat(e.detail.tempFilePaths)
        })
    },

    delete(e) {
        let index = e.detail.value
        this.data.images.splice(index, 1)
        this.setData({
            images: this.data.images
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