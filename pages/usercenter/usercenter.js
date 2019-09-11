/*
 * @Author: zlp
 * @Description: 
 * @version: 
 * @Date: 2019-09-03 09:41:43
 * @LastEditors: zlp
 * @LastEditTime: 2019-09-11 17:00:01
 */
// pages/usercenter/usercenter.js
let utils = require("../../utils/util")
Page({

    /**
     * 页面的初始数据
     */
    data: {
        date: null,
        formatDate: '',
        formats: [
            "yyyy-MM-dd hh:mm:ss",
            "yyyy-MM-dd hh:mm",
            "yyyy-MM-dd",
            "yyyy-MM",
            "yyyy/MM/dd hh:mm:ss",
            "yyyy/MM/dd hh:mm",
            "yyyy/MM/dd",
            "yyyy/MM",
            "yyyy年MM月dd日 hh时mm分ss秒",
            "yyyy年MM月dd日 hh时mm分",
            "yyyy年MM月dd日",
        ],
        index: 0
    },

    getInputValue(e) {
        this.setData({
            date: e.detail.value
        })
    },

    bindchange(e) {
        this.setData({
            index: e.detail.value
        })
    },

    format() {
        let formatDate = utils.formatDate(this.data.date, this.data.formats[this.data.index])
        this.setData({
            formatDate
        })
        console.log(formatDate)
    },

    test() {
        let timestamp = new Date().getTime()
        let timestampFormats = []
        let dateFormate = []
            //时间戳转
        this.data.formats.map(item => {
                timestampFormats.push(utils.formatDate(timestamp, item))
            })
            //日期格式化
        this.data.formats.map(item => {
            dateFormate.push(utils.formatDate(new Date(), item))
        })
        console.log("<------- timestamp -------->", timestampFormats)
        console.log("<------- date -------->", dateFormate)
        console.log("<------- getDateAfter -------->", utils.formatDate(utils.getDate(3)))
        console.log("<------- getDateBefore -------->", utils.formatDate(utils.getDate(-3)))
        console.log("<------- formatMoney -------->", utils.formatMoney(2019091112))
        console.log("<------- randomId -------->", utils.randomId(20))
        console.log("<------- randomNum -------->", utils.randomNum(2, 20))
        console.log("<------- checkDataType -------->", utils.checkDataType({}, 'Object'))
        console.log("<------- isEmptyArray -------->", utils.isEmptyArray([]))
        console.log("<------- isEmptyObject -------->", utils.isEmptyObject({}))
        const random = {
            randomNum() {
                return Math.floor(Math.random() * 100)
            },
            randomArray() {
                return Array.from(Array(utils.randomNum(10, 20)), _ => this.randomNum())
            }
        }
        let array = random.randomArray()
        console.log("<------- quickSort -------->", array, utils.quickSort(array))
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        this.test()
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