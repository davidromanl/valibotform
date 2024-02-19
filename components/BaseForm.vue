<script setup lang="ts">
import { safeParseAsync, type ObjectSchemaAsync } from "valibot"

const props = defineProps({
  schema: {
    type: Object as PropType<ObjectSchemaAsync<any>>,
    required: true,
  },
  state: {
    type: Object,
    required: true,
  },
})

const emit = defineEmits(["submit"])

async function onSubmit() {
  const { schema, state } = props
  const { issues } = await safeParseAsync(schema, state)
  const errors: any = {}
  issues?.map(({ message, path }) => {
    path?.map(({ key }) => {
      errors[key as string] = message
    })
  })
  emit("submit", errors)
}
</script>

<template>
  <div>
    <form @submit.prevent="onSubmit">
      <slot />
    </form>
  </div>
</template>
