<script setup lang="ts">
import { safeParse, type BaseSchema } from "valibot";
const props = defineProps<{
  schema: BaseSchema<any, any>;
  label: string;
}>();

const emit = defineEmits(["blur"]);

const model = defineModel();
const errMsg = shallowRef("");

const onBlur = () => {
  const { schema, label } = props
  const { issues } = safeParse(schema, model.value)
  errMsg.value = issues?.map(({ message}) => message).join() || ''
  emit("blur", label)
}
</script>

<template>
  <div class="w-full p-2">
    <label :for="label" class="block font-semibold mb-1">{{ label }}</label>
    <input
      :id="label"
      v-model="model"
      :class="errMsg ? 'border-RD10' : 'border-G300'"
      type="text"
      class="h-[34px] w-full rounded border bg-G100 py-2 px-3 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-G300"
      placeholder="Type here"
      @blur="onBlur"
    />
    <div class="text-red-500">{{ errMsg }}</div>
  </div>
</template>
