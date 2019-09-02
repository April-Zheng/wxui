/*
 * @Author: zlp
 * @Description: 
 * @version: 
 * @Date: 2019-08-30 17:57:14
 * @LastEditors: zlp
 * @LastEditTime: 2019-09-02 10:21:24
 */
// pages/example/tree/tree.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        treeData: {
            text: 'My Tree',
            id: 0,
            children: [{
                    text: 'Parent 1',
                    id: 'Parent1',
                    children: [{
                            text: 'Child 1',
                            id: 'Child1',
                            children: [{
                                    text: 'Grandchild 1',
                                    id: 'Grandchild1',
                                },
                                {
                                    text: 'Grandchild 2',
                                    id: 'Grandchild2',
                                },
                            ]
                        },
                        {
                            text: 'Child 2',
                            id: 'Child2',
                        }
                    ]
                },
                {
                    text: 'Parent 2',
                    id: 'Parent2',
                    children: [{
                            text: 'Child 1',
                            id: 'Child1',
                        },
                        {
                            text: 'Child 2',
                            id: 'Child2',
                        }
                    ]
                }
            ]
        },
    },
    tapItem: function(e) {
        console.log('tap', e.detail.value);
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