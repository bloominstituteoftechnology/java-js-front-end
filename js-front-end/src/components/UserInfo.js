import { axiosWithAuth } from './axiosWithAuth';

const getUserInfo = (props) => {
  axiosWithAuth()
  .get('http://localhost:2019/users/getuserinfo')
  .then(res => {
    console.log(res.data)
    })
  .catch(err => {
    debugger
  })

  return null
}

export default getUserInfo;
