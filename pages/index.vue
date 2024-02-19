<script setup lang="ts">
import { string, email, nonOptional, minLength } from "valibot"

interface Fields {
  first_name?: string
  last_name?: string
  email?: string
  secondEmail?: string
  phoneNumber?: string
  age?: string
  IPreferNotToReceive?: boolean
}

const fields = reactive<Fields>({})

const errorMsgs = ref<string[]>([])

const EmailSchema = nonOptional(string([email("The email address is badly formatted.")]),"The field is required")
const RequiredSchema = nonOptional(string("", [minLength(1, "The field is required")]), "The field is required")

function onBlur(err: string) {
  if (errorMsgs.value.includes(err)) {
    errorMsgs.value.splice(errorMsgs.value.indexOf(err), 1)
  } else {
    errorMsgs.value.push(err)
  }
}

const disabled = computed(() => {
  return !Object.values(fields).length && !errorMsgs.value.length
})

</script>
<template>
  <div class="p-2 text-[12px]">
    <div class="flex gap-5">
      <BaseInput
        v-model="fields.first_name"
        label="Name"
        :schema="RequiredSchema"
        @blur="onBlur"
      />
      <BaseInput
        v-model="fields.last_name"
        label="Last Name"
        :schema="RequiredSchema"
        @blur="onBlur"
      />
    </div>
    <div class="flex gap-5">
      <BaseInput
        v-model="fields.email"
        label="Email"
        :schema="EmailSchema"
        @blur="onBlur"
      />
      <BaseInput
        v-model="fields.secondEmail"
        label="Confirm Email"
        :schema="EmailSchema"
        @blur="onBlur"
      />
    </div>
    <div class="flex gap-5">
      <BaseInput
        v-model="fields.phoneNumber"
        label="Phone Number"
        :schema="RequiredSchema"
        @blur="onBlur"
      />
      <BaseInput
        v-model="fields.age"
        label="Age"
        :schema="RequiredSchema"
        @blur="onBlur"
      />
    </div>
    <div class="text-center w-full p-2">
      <button
        :class="{ 'opacity-50': disabled }"
        class="w-[290px] rounded py-2 text-white bg-GN20">Book Now</button>
    </div>
  </div>
  <div class="w-full text-xs flex gap-5 bg-gray-100">
    <div class="w-full">
      <strong>Fields</strong>
      <pre>{{ fields }}</pre>
    </div>
    <div class="w-full">
      <strong>Errors</strong>
      <pre>{{ errorMsgs }}</pre>
    </div>
  </div>
</template>
