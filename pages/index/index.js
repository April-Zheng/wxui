/*
 * @Author: zlp
 * @Description: 
 * @version: 
 * @Date: 2019-08-27 16:57:24
 * @LastEditors: zlp
 * @LastEditTime: 2019-09-10 10:45:00
 */
//index.js
//获取应用实例
const app = getApp()

Page({
    data: {
        datas: [{
                title: "布局组件",
                children: [{
                        title: "Card卡片",
                        path: "pages/example/card/card"
                    },
                    {
                        title: "Steps步骤条",
                        path: "pages/example/steps/steps"
                    },
                    {
                        title: "Tabs选项卡",
                        path: "pages/example/tabs/tabs"
                    },
                    {
                        title: "Text-elip文本溢出截断",
                        path: "pages/example/text-elip/text-elip"
                    },
                    {
                        title: "Tree树形目录",
                        path: "pages/example/tree/tree"
                    },
                ]
            },
            {
                title: "表单组件",
                children: [{
                        title: "Button按钮",
                        path: "pages/example/button/button"
                    },
                    {
                        title: "Capsule胶囊按钮",
                        path: "pages/example/capsule/capsule"
                    },
                    {
                        title: "Editor富文本编辑器",
                        path: "pages/example/editor/editor"
                    },
                    {
                        title: "Checkbox-group复选框",
                        path: "pages/example/checkbox-group/checkbox-group"
                    },
                    {
                        title: "Input输入框",
                        path: "pages/example/input/input"
                    },
                    {
                        title: "Radio-group单选框",
                        path: "pages/example/radio-group/radio-group"
                    },
                ]
            },
            {
                title: "功能组件",
                children: [{
                        title: "Notice-bar通知栏",
                        path: "pages/example/notice-bar/notice-bar"
                    },
                    {
                        title: "Rate评分",
                        path: "pages/example/rate/rate"
                    },
                    {
                        title: "Search-bar搜索栏",
                        path: "pages/example/searchbar/searchbar"
                    },
                    {
                        title: "Slide-view左滑菜单",
                        path: "pages/example/slide-view/slide-view"
                    },
                    {
                        title: "Uploader图片上传",
                        path: "pages/example/uploader/uploader"
                    },

                ]
            },
            {
                title: "提示反馈",
                children: [{
                    title: "Toast提示",
                    path: "pages/example/toast/toast"
                }, ]
            }

        ],
        list: [{
                title: "Button按钮",
                path: "pages/example/button/button"
            },
            {
                title: "Card卡片",
                path: "pages/example/card/card"
            },
            {
                title: "Checkbox-group复选框",
                path: "pages/example/checkbox-group/checkbox-group"
            },
            {
                title: "Capsule胶囊按钮",
                path: "pages/example/capsule/capsule"
            },
            {
                title: "Collapse折叠面板",
                path: "pages/example/collapse/collapse"
            },
            {
                title: "Count-down倒计时",
                path: "pages/example/count-down/count-down"
            },
            {
                title: "Grid宫格",
                path: "pages/example/grid/grid"
            },
            {
                title: "Input输入框",
                path: "pages/example/input/input"
            },
            {
                title: "Notice-bar通知栏",
                path: "pages/example/notice-bar/notice-bar"
            },
            {
                title: "Radio-group单选框",
                path: "pages/example/radio-group/radio-group"
            },
            {
                title: "Rate评分",
                path: "pages/example/rate/rate"
            },
            {
                title: "Search-bar搜索栏",
                path: "pages/example/searchbar/searchbar"
            },
            {
                title: "Slide-view左滑菜单",
                path: "pages/example/slide-view/slide-view"
            },
            {
                title: "Steps步骤条",
                path: "pages/example/steps/steps"
            },
            {
                title: "Tabs选项卡",
                path: "pages/example/tabs/tabs"
            },
            {
                title: "Text-elip文本溢出截断",
                path: "pages/example/text-elip/text-elip"
            },
            {
                title: "Toast提示",
                path: "pages/example/toast/toast"
            },
            {
                title: "Tree树形目录",
                path: "pages/example/tree/tree"
            },
            {
                title: "Uploader图片上传",
                path: "pages/example/uploader/uploader"
            },
        ]
    },

    navigateToPage(e) {
        console.log(e)
        let path = e.currentTarget.dataset.path ? e.currentTarget.dataset.path : e.detail.value.path
        if (path) {
            wx.navigateTo({
                url: '/' + path
            })
        }
    },


    onLoad: function() {

    },

    onShow: function() {
        if (typeof this.getTabBar === 'function' &&
            this.getTabBar()) {
            this.getTabBar().setData({
                selected: 0
            })
        }
    }

})