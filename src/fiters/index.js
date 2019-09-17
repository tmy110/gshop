// import Vue from 'vue'
// import  moment from 'moment'

import format from 'date-fns/format'
import Vue from 'vue'

//自定义过滤器
// Vue.filter('date-format',function (value,formatStr='YYYY-MM-DD HH:mm:ss') {
//   return moment(value).format(formatStr)
// })

Vue.filter('dateString', function (value, formatStr) {
    // return moment(value).format(format || 'YYYY-MM-DD HH:mm:ss')
    return format(value, formatStr || 'YYYY-MM-DD HH:mm:ss')
  }
)
