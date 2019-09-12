/*
 * @Author: zlp
 * @Description: 
 * @version: 
 * @Date: 2019-09-12 09:49:38
 * @LastEditors: zlp
 * @LastEditTime: 2019-09-12 10:45:06
 */
let utils = require("../../../../utils/util")
Page({

    /**
     * 页面的初始数据
     */
    data: {
        date: null,
        timestamp: null,
        formatDate: "",
        formatTimestamp: "",
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
        timestampIndex: 0,
        index: 0,
        datenum: 1,
        beforeOrAfterDate: "",
        money: null,
        formatMoney: ""
    },

    getCurrentDate(e) {
        let date = new Date()
        console.log(new Date().toString())
        this.setData({
            date: utils.formatTime(date),
            timestamp: date.getTime()
        })
    },

    bindchange(e) {
        let type = e.currentTarget.dataset.type
        if (type == 'date') {
            this.setData({
                index: e.detail.value
            })
        } else {
            this.setData({
                timestampIndex: e.detail.value
            })
        }

    },

    /**
     * 日期格式化
     */
    format(e) {
        let type = e.currentTarget.dataset.type
        if (type == 'date') {
            let formatDate = utils.formatDate(this.data.date, this.data.formats[this.data.index])
            this.setData({
                formatDate,
            })
            console.log(formatDate)
        } else {
            let formatTimestamp = utils.formatDate(this.data.timestamp, this.data.formats[this.data.timestampIndex])
            this.setData({
                formatTimestamp
            })
        }
    },

    getInputValue(e) {
        let type = e.currentTarget.dataset.type
        this.setData({
            [type]: e.detail.value
        })
    },

    /**
     * 获取过去/未来几天的时间
     */
    getDate() {
        this.setData({
            beforeOrAfterDate: utils.getDate(this.data.datenum)
        })
    },

    /**
     * 金额格式化
     */
    formatMoney() {
        this.setData({
            formatMoney: utils.formatMoney(this.data.money)
        })
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
        this.getCurrentDate()
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