import { request } from './request'
export function getHomeMutation() {
  return request({
    url: "/home/multidata"
  })
}
