import dayjs from 'dayjs'
export default function(app) {
  app.directive('ftime', {
    created(el, bindings) {
      bindings.formatString = 'YYYY-MM-DD HH:mm:ss'
      if (bindings.value) {
        bindings.formatString = bindings.value
      }
    },
    mounted(el, bindings) {
      let formatString = bindings.value
      const textContent = el.textContent
      let timestamp = parseInt(textContent)
      if (textContent.length === 10) {
        timestamp = timestamp * 1000
      }
      el.textContent = dayjs(timestamp.value).format(bindings.formatString)
    },
  })
}