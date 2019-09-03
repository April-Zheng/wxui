/*
 * @Author: zlp
 * @Description: 
 * @version: 
 * @Date: 2019-09-03 11:21:21
 * @LastEditors: zlp
 * @LastEditTime: 2019-09-03 14:31:15
 */
// components/count-down/count-item.js
import countDownBehavios from '../../behaviors/countDown';
Component({
    externalClasses: ['v-class', 'v-class-time'],
    behaviors: [countDownBehavios],
    properties: {
        doneText: {
            type: String,
            value: '已结束'
        },
        textType: {
            type: String,
            value: 'none'
        }
    },
    methods: {

    }
});