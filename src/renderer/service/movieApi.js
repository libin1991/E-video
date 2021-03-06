import Api from './Api'

export default {
  /**
   * 默认30条数据，可以自定义
   * @param limit
   * @returns {*}
   */
  getTopMv (params) {
    // return Api().get(`/mv/first?limit=${limit}`)
    return Api().get('/top/mv', {
      params
    })
  },
  getMvId (id) {
    return Api().get(`/mv?mvid=${id}`)
  },
  getMvComments (id) {
    return Api().get(`/comment/mv?id=${id}`)
  }
}
