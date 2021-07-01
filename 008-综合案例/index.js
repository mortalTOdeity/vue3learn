Vue.createApp({
  template: '#chen',
  data() {
    return {
      books: [
        {
          id: 1,
          name: '《算法导论》',
          date: '2006-9',
          price: 85.00,
          count: 1
        },
        {
          id: 2,
          name: '《UNIX编程艺术》',
          date: '2006-2',
          price: 59.00,
          count: 1
        },
        {
          id: 3,
          name: '《编程珠玑》',
          date: '2008-10',
          price: 39.00,
          count: 1
        },
        {
          id: 4,
          name: '《代码大全》',
          date: '2006-3',
          price: 128.00,
          count: 1
        },
      ]
    }
  },
  methods: {
    increment($event, index) {
      // 通过索引值获取到对象
      // console.log($event)
      console.log(index)
      this.books[index].count ++
    },
    decrement(index) {
      // 通过索引值获取到对象
      console.log(index)
      this.books[index].count --
    },
    removeBook(index) {
      this.books.splice(index, 1)
    }

  },
  computed: {
    totalPrice() {
      let price = 0
      for (let book of this.books) {
        price += book.count * book.price
      }
      return price
    },
    filterBooks () {
      return this.books.map(item => {
        const newItem = Object.assign({}, item)
        newItem.price = '$' + item.price
        return newItem
      })
    }
  }
}).mount('#app')