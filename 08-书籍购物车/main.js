const vm = new Vue({
  el: "#app",
  data: {
    books:[
      {index:1,name:'鲁滨逊漂流记',data:'2006-10-1',price: '80', bookAmount: 1},
      {index:2,name:'昆虫记',data:'2004-5-21',price: '50', bookAmount: 1},
      {index:3,name:'人间',data:'2016-7-25',price: '65', bookAmount: 1},
      {index:4,name:'我的大学',data:'2009-4-6',price: '66', bookAmount: 1}
    ]
  },
  methods: {
    increament(index) {
      this.books[index].bookAmount++
   },
    decreament(index) {
      this.books[index].bookAmount--
   },
    removeHandle(index){
    this.books.splice(index,1);
    },
  },
  computed: {
    totalPrice(index) {
      let totalPrice = 0;
      // 1. 常用方式
      // for(let i = 0; i < this.books.length; i++) {
      //   totalPrice = this.books[i].price * this.books[i].bookAmount + totalPrice;
      // }

      // 1. for(let i in this.books)
      // for(let i in this.books){
      //   totalPrice = this.books[i].price * this.books[i].bookAmount + totalPrice;
      // }

      //3. for(let book of this.books)
      // for(let book of this.books){
      //   totalPrice += book.price * book.bookAmount
      // }
      // return totalPrice;
      return this.books.reduce(function(preValue, book){
        return preValue + book.price * book.bookAmount;
      }, 0)
    }
  },
  filters: {
    showPrice(price) {
      return '￥' + price;
    }
  }
})
