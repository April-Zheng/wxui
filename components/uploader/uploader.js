/*
 * @Author: zlp
 * @Description: 
 * @version: 
 * @Date: 2019-08-29 16:20:45
 * @LastEditors: zlp
 * @LastEditTime: 2019-08-30 10:52:32
 */
// components/uploader/uploader.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        title: {
            type: String,
            value: '上传图片'
        },
        images: Array,
        key: String,
        hasDelete: {
            type: Boolean,
            value: true
        },
        lazy: {
            type: Boolean,
            value: false
        },
        longPress: {
            type: Boolean,
            value: false
        },
        count: {
            type: Number,
            value: 1
        },
        hasLimit: {
            type: Boolean,
            value: false
        },
        limit: {
            type: Number,
            value: 9
        },
        title: {
            type: String,
            value: `上传图片超出限制`
        },
        mode: {
            type: String,
            value: 'aspectFill',
        },
        sizeType: {
            type: Array,
            value: ['compressed', 'original'],
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        finishLoadFlag: true,
        url: 'data:image/png;base64,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'
    },

    /**
     * 组件的方法列表
     */
    methods: {
        chooseImage() {
            let detail = {}
            let _this = this
            if (_this.data.hasLimit && _this.data.images.length >= _this.data.limit) {
                wx.showToast({
                    title: _this.data.title,
                    icon: 'none',
                    duration: 4000
                })
            } else {
                wx.chooseImage({
                    count: _this.data.count,
                    sizeType: _this.data.sizeType,
                    sourceType: ['album', 'camera'],
                    success: function(res) {
                        detail.tempFilePaths = res.tempFilePaths
                        _this.triggerEvent("uploader", detail);
                    },
                    fail: function(err) {
                        _this.triggerEvent("fail", err);
                    },
                    complete: function(res) {
                        _this.triggerEvent("complete", res);
                    }
                })
            }

        },

        finishLoad: function(e) {
            this.setData({
                finishLoadFlag: true
            });
        },
        loadError: function(e) {
            console.log(e)
            this.setData({
                finishLoadFlag: false
            });
        },

        deleteImg(e) {
            let detail = {
                value: e.currentTarget.dataset.index
            }
            this.triggerEvent("delete", detail)
        },
        previewImage: function(e) {
            let item = this.data.images[e.currentTarget.dataset.index]
            let url = this.data.key ? item[this.data.key] : item
            wx.previewImage({
                current: url, // 当前显示图片的http链接
                urls: this.data.images // 需要预览的图片http链接列表
            })
        }
    }
})