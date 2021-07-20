import { ref, computed } from 'vue'
export default function() {
  const counter = ref(4)
  const doubleCounter1 = computed(() => {
    return counter.value * 2
  })
  const increment = () => {
    counter.value ++
  }
  const decrement = () => {
    counter.value --
  }
  return {
    counter,
    doubleCounter1,
    increment,
    decrement
  }
}