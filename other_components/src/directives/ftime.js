import dayjs from 'dayjs'
export default function(app) {
  app.directive('ftime', {
    mounted(el, bindings) {
      let formatString = bindings.value
      if (!formatString) {
        formatString = 'YYYY-MM-DD HH:mm:ss'
      }
      console.log(formatString)
      const textContent = el.textContent
      let timestamp = parseInt(textContent)
      if (textContent.length === 10) {
        timestamp = timestamp * 1000
      }
      el.textContent = dayjs(timestamp.value).format('YYYY-MM-DD HH:mm:ss')
      console.log(textContent)
    },
  })
}