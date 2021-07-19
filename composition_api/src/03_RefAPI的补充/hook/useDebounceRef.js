import {customRef } from 'vue'

// 自定义ref
export default function(value) {
  return customRef((track, trigger) => {
    return {
      get() {
        track()
      },
      set() {

      }
    }
  })
}