/*
包含n个接口请求函数的模块
函数的返回值: promise对象
 */
import ajax from './ajax'

const BASE_URL = '/shoping'//接口是没有/shoping的  使用的目的是做跨域代理用的

// 1、根据经纬度获取位置详情 http://localhost:8899/shop/position?Latitude=经度&Longitude=纬度
export const reqAddress = (Latitude, Longitude) => ajax(`${BASE_URL}/shop/position`, {Latitude, Longitude})
// 2、获取食品分类列表 http://localhost:8899/shop/index_category
export const reqFoodCategorys = () => ajax(BASE_URL + '/shop/index_category')
// 3、根据经纬度获取商铺列表 http://localhost:8899/shop/shops?latitude=40.10038&longitude=116.36867
export const reqShops = (longitude, latitude) => ajax(BASE_URL + '/shop/shops', {longitude, latitude})
// 4、根据经纬度和关键字搜索商铺列表  http://localhost:8899/shop/search_shops?geohash=40.10038&keyword=测试哈
export const reqSearchShop = (geohash, keyword) => ajax(BASE_URL + '/shop/search_shops', {geohash, keyword})
// 6、用户名密码登陆
export const reqPwdLogin = ({name, pwd, captcha}) => ajax(BASE_URL + '/shop/login_pwd', {name, pwd, captcha}, 'POST')
// 7、发送短信验证码
export const reqSendCode = (phone) => ajax(BASE_URL + '/shop/sendcode', {phone})
// 8、手机号验证码登陆
export const reqSmsLogin = ({phone, code}) => ajax(BASE_URL + '/shop/login_sms', {phone, code}, 'POST')
// 9、根据会话获取用户信息
export const reqUserInfo = () => ajax(BASE_URL + '/shop/userinfo')
// 10、用户登出
export const reqLogout = () => ajax(BASE_URL + '/shop/logout')

/**
 * 获取商家信息
 */
export const reqShopInfo = () => ajax('/info')

/**
 * 获取商家评价数组
 */
export const reqShopRatings = () => ajax('/ratings')

/**
 * 获取商家商品数组
 */
export const reqShopGoods = () => ajax('/goods')





