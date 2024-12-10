import { reactive, ref } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const searchItem = ref('')
  let items = reactive([])
  const stock = [
    {
      name: 'samsung',
      site: 'Flipkart',
      price: '₹1,89,900',
      rating: '4.6',
      features: ['SSD:1 TB', 'RAM:16GB', 'USB PORT : 3 x thunderbolt 4(USB -C)'],
      reviews: ['Good quality!', 'Value for money!', 'Battery is good'],
      img: '',
    },
    {
      name: 'samsung',
      site: 'amazon',
      price: '₹1,00,900',
      rating: '4.6',
      features: ['SSD:1 TB', 'RAM:16GB', 'USB PORT : 3 x thunderbolt 4(USB -C)'],
      reviews: ['Good quality!', 'Value for money!', 'Battery is good'],
      img: '',
    },
  ]

  function foundItems() {
    items = stock.filter((ele) => ele.name === searchItem.value)
    console.log(items)
  }

  return { searchItem, stock, foundItems, items }
})
