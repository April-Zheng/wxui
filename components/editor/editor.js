/*
 * @Author: zlp
 * @Description: 
 * @version: 
 * @Date: 2019-09-10 10:46:33
 * @LastEditors: zlp
 * @LastEditTime: 2019-09-10 14:55:38
 */
// components/editor/editor.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        formats: Object,
        bottom: {
            type: null,
            value: 0
        },
        readOnly: { type: Boolean, value: false },
        placeholder: { type: String, value: '开始输入...' },
        focus: { type: Boolean, value: false },
    },

    /**
     * 组件的初始数据
     */
    data: {

    },
    attached() {
        // wx.loadFontFace({
        //     family: 'Pacifico',
        //     source: 'url("https://sungd.github.io/Pacifico.ttf")',
        //     success: console.log
        // })
    },

    /**
     * 组件的方法列表
     */
    methods: {
        readOnlyChange() {
            this.setData({
                readOnly: !this.data.readOnly
            })
        },

        onEditorReady() {
            const that = this
            that.createSelectorQuery().select('#editor').context(function(res) {
                that.editorCtx = res.context
            }).exec()
        },

        undo() {
            this.editorCtx.undo()
        },
        redo() {
            this.editorCtx.redo()
        },
        format(e) {
            let { name, value } = e.target.dataset
            if (!name) return
                // console.log('format', name, value)
            this.editorCtx.format(name, value)

        },
        onStatusChange(e) {
            const formats = e.detail
            this.setData({ formats })
        },
        insertDivider() {
            this.editorCtx.insertDivider({
                success: function() {
                    console.log('insert divider success')
                }
            })
        },
        clear() {
            this.editorCtx.clear({
                success: function(res) {
                    console.log("clear success")
                }
            })
        },
        removeFormat() {
            this.editorCtx.removeFormat()
        },
        insertDate() {
            const date = new Date()
            const formatDate = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`
            this.editorCtx.insertText({
                text: formatDate
            })
        },
        insertImage() {
            const that = this
            wx.chooseImage({
                count: 1,
                success: function(res) {
                    that.editorCtx.insertImage({
                        src: res.tempFilePaths[0],
                        data: {
                            id: 'abcd',
                            role: 'god'
                        },
                        success: function() {
                            console.log('insert image success')
                        }
                    })
                }
            })
        }
    }
})