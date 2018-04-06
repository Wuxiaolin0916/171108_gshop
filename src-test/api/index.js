
/*与后台的交互*/
import ajax from './ajax'

// [1、根据经纬度获取位置详情](#1根据经纬度获取位置详情)<br/>reqAddress
export const reqAddress = (geohash) => ajax('/api/position/'+geohash)

// [2、获取食品分类列表](#2获取食品分类列表)<br/>reqFoodList
export const reqFoodList = () => ajax('/api/index_category')

// [3、根据经纬度获取商铺列表](#3根据经纬度获取商铺列表)<br/>reqShopList
export const reqShops = (latitude , longitude) => ajax('/api/shops' , {latitude , longitude})

// [4、获取一次性验证码](#4获取一次性验证码)<br/>reqCaptcha
export const reqCaptcha = () => ajax('/api/captcha')

// [5、用户名密码登陆](#4用户名密码登陆)<br/>loginPwd
export const loginPwd = ({name , pwd , captcha}) => ajax('/api/login_pwd' , {name , pwd , captcha} , 'POST')

// [6、发送短信验证码](#5发送短信验证码)<br/>sendCode
export const sendCode = (phone) => ajax('/api/sendcode' , {phone})

// [7、手机号验证码登陆](#6手机号验证码登陆)<br/>loginSms
export const loginSms = ({phone , code}) => ajax('/api/login_sms' , {phone , code} , 'POST')

// [8、根据会话获取用户信息](#7根据会话获取用户信息)<br/>reqUserInfo
export const reqUserInfo = () => ajax('/api/userinfo')

