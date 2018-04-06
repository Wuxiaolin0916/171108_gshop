



import axios from 'axios'
//封装一个能传data的promise对象
export default function ajax(url='' , data={} , method='GET') {
  return new Promise(function (resolve , reject) {
    let promise;
    if(method === 'GET'){//{name：‘tom’ ， pwd：‘123’}login?name=tom&pwd=123
      let dataString = '';
      Object.keys(data).forEach(key => {
        const value = data[key];
        dataString += key + "=" + value + '&'
      })
      // dataString是否有值
      if(dataString){
        dataString = dataString.substring(0 , dataString.length-1)
      }
      url += '?' + dataString;
      promise = axios.get(url)
    }else {
      promise = axios.post(url , data)
    }

    //说明有数据了
    promise.then(response => {
      resolve(response.data)
    }).catch(error => {
      reject(error)
    })
  })


}








