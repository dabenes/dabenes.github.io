<template>
  <div class="bg-slate-950 flex items-center justify-center p-4">
    <div class="max-w-2xl w-full">
      <div class="fake-terminal-container">
        <div class="fake-terminal-line mb-4">
          <span class="fake-terminal-user">{{ ownerNick }}</span>
          <span class="fake-terminal-separator">@</span>
          <span class="fake-terminal-path">{{ t('labels.portfolio') }}</span>
          <span class="fake-terminal-separator">$</span>
          <span class="fake-terminal-cmd">ls {{ error?.statusCode }}</span>
        </div>

        <div class="space-y-4">
          <div class="fake-terminal-line">
            <span class="fake-terminal-error">
              [{{ error?.statusCode }}] {{ error?.statusMessage }}
            </span>
          </div>

          <div class="fake-terminal-line text-gray-400">
            <span>{{ errorMessage }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { useFakeTerminal } from '~/composables/useTerminalNotification'

const props = defineProps({
  error: Object
})

const config = useRuntimeConfig()
const ownerNick = computed(() => config.public.ownerNick)
const { t } = useI18n()

const errorMessage = computed(() => {
  const status = props.error?.statusCode
  const errorKey = String(status)
  
  if (status && status in [404, 500, 403, 401]) {
    return t(`errors.${errorKey}`)
  }
  return t('errors.default')
})

const { error: notifyError } = useFakeTerminal()
onMounted(() => {
  if (props.error?.statusCode) {
    notifyError(`[${props.error.statusCode}] ${props.error.statusMessage}`)
  }
})
</script>
