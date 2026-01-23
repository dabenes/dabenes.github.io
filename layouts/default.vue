<template>
  <div class="flex min-h-screen flex-col bg-slate-950">
    <AppHeader />
    <main class="flex-1 bg-slate-950 pb-4">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>