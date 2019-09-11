/*
 * @Author: zlp
 * @Description: 
 * @version: 
 * @Date: 2019-08-27 16:57:24
 * @LastEditors: zlp
 * @LastEditTime: 2019-09-11 17:07:14
 */
const formatTime = date => {
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()

    return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
    n = n.toString()
    return n[1] ? n : '0' + n
}

/**
 * 接收两个参数，
 * @param {*} oldDate 日期(Date,String,Number)
 * @param {*} fmt 格式(yyyy-MM-dd hh:mm)
 */
const formatDate = (oldDate, fmt = 'yyyy-MM-dd hh:mm') => {
        let date = new Date()
        if (typeof oldDate === 'string' || typeof oldDate === 'number') {
            date = new Date(+oldDate)
        } else {
            date = oldDate
        }
        if (/(y+)/.test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
        }
        let o = {
            'M+': date.getMonth() + 1,
            'd+': date.getDate(),
            'h+': date.getHours(),
            'm+': date.getMinutes(),
            's+': date.getSeconds()
        }

        const padLeftZero = (str) => {
            return ('00' + str).substr(str.length)
        }
        for (let k in o) {
            if (new RegExp(`(${k})`).test(fmt)) {
                let str = o[k] + ''
                fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str))
            }
        }
        return fmt
    }
    /**
     * 获取过去/未来num天的时间 过去：num为负数，未来：num为正数
     * @param {*} num 
     */
const getDate = (num) => {
    return Date.now() + num * 24 * 60 * 60 * 1000
}

/**
 * 格式化金钱 
 * @param {*} num 
 * num..toLocaleString('en-US')同样可实现
 */

const formatMoney = num => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

/**
 * 生成随机id
 */
const randomId = len => Number(Math.random().toString().substr(3, len) + Date.now()).toString(36);

/**
 * 生成范围随机数
 * @param {*} min 
 * @param {*} max 
 */
const randomNum = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

/**
 * 判断数据类型
 * @param {*} data 
 * @param {*} type 
 */
const checkDataType = (data, type) => {
    let dataType = Object.prototype.toString.call(data).replace(/\[object /g, "").replace(/\]/g, "").toLowerCase();
    let formatDataType = dataType.toLowerCase()
    let currentType = type.toLowerCase()
    return type ? formatDataType === currentType : dataType;

}

/**
 * 判断是否为空数组
 * @param {Array} array 
 */
const isEmptyArray = array => {
    return Array.isArray(array) && !array.length;
}

/**
 * 判断是否为空对象
 * @param {Object} object 
 */
const isEmptyObject = object => {
    return checkDataType(object, 'object') && !Object.keys(object).length
}

/**
 * 快速排序
 * @param {Array} array 
 */
const quickSort = arr => {
    if (arr.length <= 1) { return arr; }　　
    var pivotIndex = Math.floor(arr.length / 2);　　
    var pivot = arr.splice(pivotIndex, 1)[0];　　
    var left = [];　　
    var right = [];　　
    for (var i = 0; i < arr.length; i++) {　　　　
        if (arr[i] < pivot) {　　　　　　
            left.push(arr[i]);　　　　
        } else {　　　　　　
            right.push(arr[i]);　　　　
        }　　
    }
    return [...quickSort(left), pivot, ...quickSort(right)]
}



module.exports = {
    formatTime: formatTime,
    formatDate,
    getDate,
    formatMoney,
    randomId,
    randomNum,
    checkDataType,
    isEmptyArray,
    isEmptyObject,
    quickSort
}