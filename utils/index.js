import request from "./request";



// 1.获取 banner( 轮播图 ) 数据
export const reqBanner = (type) => request('/banner', {type})

// 2.获取推荐歌单
export const reqRecommend = (limit) => request('/personalized', {limit})

// 3.获取排行榜数据
export const  reqTopList = (idx) => request('/top/list', {idx})


// 4.该接口用于手机号登录网易云音乐，需要网易云音乐真实的账号密码
export const reqLogin = (obj) => request('/login/cellphone', obj)


// 5.该接口用于获取用户最近播放记录，需要登录以后才能获取
export const reqRecentPlayList = (obj) => request('/user/record', obj)


// 6.获取视频导航标签列表数据
export const reqVideoGroupList = () => request('/video/group/list')


// 7.获取导航标签对应的视频列表数据
export const reqVideoList = (id) => request('/video/group', {id})


// 8.获取给用户的每日推荐数据
export const reqDailyRecommend = () => request('/recommend/songs')


// 9.获取歌曲对应的详情信息，需要根据歌曲的 id 获取
export const reqMusicInfo = (ids) => request('/song/detail',{ids})


// 10.该接口用于获取歌曲的播放地址，需要根据歌曲的 id 获取
export const reqSongUrl = (id) => request('/song/url', {id})


// 11.获取默认搜索关键字显示在搜索框中
export const reqDefaultKeyword= () => request('/search/default')


// 12.于获取热搜数据
export const reqHotSearch = () => request('/search/hot/detail')


// 13.该接口用于根据用户输入的内容进行模糊匹配搜索
export const reqSearch = (obj) => request('/search',obj)




