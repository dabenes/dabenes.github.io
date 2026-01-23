import { ref } from 'vue'

interface FakeTerminalNotification {
  message: string
  type: 'success' | 'error' | 'warning' | 'info'
  id: number
}

const notifications = ref<FakeTerminalNotification[]>([])
const queue = ref<FakeTerminalNotification[]>([])
let notificationId = 0
let isProcessing = false

const processQueue = async () => {
  if (isProcessing || queue.value.length === 0) return
  
  isProcessing = true
  
  while (queue.value.length > 0) {
    const notification = queue.value.shift()
    if (!notification) break
    
    notifications.value = [notification]
    
    await new Promise(resolve => setTimeout(resolve, 4000))
    
    notifications.value = []
    
    await new Promise(resolve => setTimeout(resolve, 300))
  }
  
  isProcessing = false
}

export const useFakeTerminal = () => {
  const notify = (message: string, type: FakeTerminalNotification['type'] = 'info', duration = 4000) => {
    const id = notificationId++
    const notification: FakeTerminalNotification = { message, type, id }
    
    queue.value.push(notification)
    processQueue()
  }

  const success = (message: string, duration = 4000) => {
    notify(message, 'success', duration)
  }

  const error = (message: string, duration = 4000) => {
    notify(message, 'error', duration)
  }

  const warning = (message: string, duration = 4000) => {
    notify(message, 'warning', duration)
  }

  const info = (message: string, duration = 4000) => {
    notify(message, 'info', duration)
  }

  return {
    notifications,
    notify,
    success,
    error,
    warning,
    info
  }
}
