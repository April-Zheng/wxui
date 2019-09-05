/*
 * @Author: zlp
 * @Description: 
 * @version: 
 * @Date: 2019-09-05 09:51:54
 * @LastEditors: zlp
 * @LastEditTime: 2019-09-05 11:31:44
 */
// components/toast/toast.js
Component({
    externalClasses: ['v-container-class', 'v-toast-class', 'v-mask-class', 'v-icon-class', 'v-text-class'],
    /**
     * 组件的属性列表
     */
    properties: {
        show: {
            type: Boolean,
            value: false
        },
        mask: {
            type: Boolean,
            value: false
        },
        position: {
            type: String,
            value: "center"
        },
        // 提示框显示的时长
        duration: {
            type: Number,
            value: 1500
        },
        type: String,
        content: String
    },

    observers: {
        'show': function(show) {
            show && this.changeStatus();
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        timer: null
    },

    /**
     * 组件的方法列表
     */
    methods: {
        changeStatus() {
            if (this.data.timer) clearTimeout(this.data.timer);
            this.data.timer = setTimeout(() => {
                this.setData({
                    show: false
                });
                this.data.timer = null;
            }, this.properties.duration);
        },

        preventTouchMove() {},

        onMaskTap() {
            this.setData({
                show: false
            })
            this.triggerEvent('masktap', this.data.show);
        }

    }
})