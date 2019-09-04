/*
 * @Author: zlp
 * @Description: 
 * @version: 
 * @Date: 2019-09-04 14:43:12
 * @LastEditors: zlp
 * @LastEditTime: 2019-09-04 15:24:13
 */
// components/notice-bar/notice-bar.js
Component({
    externalClasses: ['v-noticebar-class', 'v-notice-content-class'],
    /**
     * 组件的属性列表
     */
    properties: {
        type: {
            type: String,
            value: 'still' //roll swiper
        },
        src: {
            type: String,
            value: './images/broadcast@3x.png'
        },
        // 轮播数组
        swiperItems: Array,
        // 滚动速度
        speed: {
            type: Number,
            value: 1500
        },
        show: {
            type: Boolean,
            value: true
        },
        closeable: {
            type: Boolean,
            value: false
        }
    },

    ready() {
        if (this.properties.type == 'roll' && this.properties.show) {
            this.initAnimation();
        }
    },

    detached() {
        this.destroyTimer();
    },

    /**
     * 组件的初始数据
     */
    data: {
        wrapWidth: 0,
        width: 0,
        duration: 0,
        animation: null,
        timer: null,
    },

    /**
     * 组件的方法列表
     */
    methods: {
        initAnimation() {
            wx.createSelectorQuery().in(this).select('.v-noticebar-content-wrap').boundingClientRect((wrapRect) => {
                wx.createSelectorQuery().in(this).select('.v-noticebar-content').boundingClientRect((rect) => {
                    const duration = rect.width / 40 * this.data.speed;
                    const animation = wx.createAnimation({
                        duration: duration,
                        timingFunction: 'linear',
                    });
                    this.setData({
                        wrapWidth: wrapRect.width,
                        width: rect.width,
                        duration: duration,
                        animation: animation
                    }, () => {
                        this.startAnimation();
                    });
                }).exec();

            }).exec();
        },
        startAnimation() {
            //reset
            if (this.data.animation.option.transition.duration !== 0) {
                this.data.animation.option.transition.duration = 0;
                const resetAnimation = this.data.animation.translateX(this.data.wrapWidth).step();
                this.setData({
                    animationData: resetAnimation.export()
                });
            }
            this.data.animation.option.transition.duration = this.data.duration;
            const animationData = this.data.animation.translateX(-this.data.width).step();
            setTimeout(() => {
                this.setData({
                    animationData: animationData.export()
                });
            }, 100);
            const timer = setTimeout(() => {
                this.startAnimation();
            }, this.data.duration);
            this.setData({
                timer,
            });
        },
        destroyTimer() {
            if (this.data.timer) {
                clearTimeout(this.data.timer);
            }
        },
        handleTap() {
            this.triggerEvent('ontap', {}, { bubbles: true, composed: true });
            this.setData({
                timer: null
            });
        },
        onSwip(e) {
            this.triggerEvent('ontap', {
                ...e.currentTarget.dataset
            }, { bubbles: true, composed: true });
        },
        onClose() {
            this.setData({
                timer: null,
                show: false
            });
        },
    }
})