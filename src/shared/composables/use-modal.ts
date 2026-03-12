import { ref } from 'vue'

type Modal = 'view-product'

const currentModal = ref<Modal | null>(null)

export const useModal = () => {
  const openModal = (name: Modal | null) => {
    currentModal.value = name
  }

  return { openModal, currentModal }
}
