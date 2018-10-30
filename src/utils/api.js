import axios from 'axios'

const request = ({ url, ...opts }) => {
  return axios({
    ...opts,
    url: `${url.charAt(0) === '/' ? url.slice(1) : url}`,
  }).catch(error => {
    throw new Error(
      error.response && error.response.data
        ? error.response.data.details
        : error
    )
  })
}

// const request = ({ ...effect }) => {

//     console.log('effect:', effect);
//     return requestInternal(effect);
// }

export default request
