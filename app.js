/*
 * @Author: zlp
 * @Description: 
 * @version: 
 * @Date: 2019-08-27 16:57:24
 * @LastEditors: zlp
 * @LastEditTime: 2019-09-03 09:50:09
 */
//app.js
App({
    onLaunch: function() {
        this.checkFullScreen()
    },

    /**
     * 判断用户机型是否为全面屏(暂定，尚未有更好的方法)
     */
    checkFullScreen: function() {
        const self = this  
        const res = wx.getSystemInfoSync();
        const model = res.model.toLowerCase();
        const models = ['iphone x', 'iphone xr', 'iphone 11', 'iphone xs'];
        models.forEach((item) => {
            if (model.indexOf(item) > -1) {
                self.globalData.isFullSucreen = true
            }
        });
    },
    globalData: {
        isFullSucreen: false
    }
})