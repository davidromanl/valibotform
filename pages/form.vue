<script setup lang="ts">
import {
  string,
  objectAsync,
  email,
  number,
  nonOptional,
  boolean,
  custom,
  minLength
} from "valibot";

const schema = objectAsync({
  first_name: nonOptional(string([minLength(1, "First name is required")]), "First name is required"),
  last_name: nonOptional(string([minLength(1, "First name is required")]), "Last name is required"),
  email: nonOptional(string([email("Invalid email")]), "Email is required"),
  secondEmail: nonOptional(
    string([
      email("Invalid email"),
      custom((value) => value === state.email, "Emails must match"),
    ]),
    "Confirm Email is required"
  ),
  phoneNumber: nonOptional(
    number("Must be a number"),
    "Phone number is required"
  ),
  age: nonOptional(string(), "Age is required"),
  IPreferNotToReceive: boolean(),
});

const state = reactive({
  first_name: undefined,
  last_name: undefined,
  email: undefined,
  secondEmail: undefined,
  phoneNumber: undefined,
  age: undefined,
  IPreferNotToReceive: false,
});

const errorMsgs = ref()

async function onSubmit(event: any) {
  if (event) {
    errorMsgs.value = event;
  }
}
</script>

<template>
  <div>
    <BaseForm :schema="schema" :state="state" @submit="onSubmit">
      <div class="md:flex gap-5 p-2 text-[12px]">
        <div class="w-full flex flex-col">
          <label class="font-semibold py-1" for="first_name">Name *</label>
          <input
            id="first_name"
            type="text"
            v-model="state.first_name"
            :class="errorMsgs?.first_name ? 'border-RD10' : 'border-G300'"
            class="h-[34px] rounded border bg-G100 py-2 px-3 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-G300"
          />
          <div class="text-red-500">{{ errorMsgs?.first_name }}</div>
        </div>
        <div class="w-full flex flex-col">
          <label class="font-semibold py-1" for="last_name">Last Name *</label>
          <input
            id="last_name"
            type="text"
            v-model="state.last_name"
            :class="errorMsgs?.last_name ? 'border-RD10' : 'border-G300'"
            class="h-[34px] rounded border bg-G100 py-2 px-3 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-G300"
          />
          <div class="text-red-500">{{ errorMsgs?.last_name }}</div>
        </div>
      </div>
      <div class="md:flex gap-5 p-2 text-[12px]">
        <div class="w-full flex flex-col">
          <label class="font-semibold py-1" for="email">Email *</label>
          <input
            id="email"
            type="text"
            v-model="state.email"
            :class="errorMsgs?.email ? 'border-RD10' : 'border-G300'"
            class="h-[34px] rounded border bg-G100 py-2 px-3 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-G300"
          />
          <div class="text-red-500">{{ errorMsgs?.email }}</div>
        </div>
        <div class="w-full flex flex-col">
          <label class="font-semibold py-1" for="secondEmail"
            >Confirm Your Email *</label
          >
          <input
            id="secondEmail"
            type="text"
            @paste.prevent=""
            v-model="state.secondEmail"
            :class="errorMsgs?.secondEmail ? 'border-RD10' : 'border-G300'"
            class="h-[34px] rounded border bg-G100 py-2 px-3 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-G300"
          />
          <div class="text-red-500">{{ errorMsgs?.secondEmail }}</div>
        </div>
      </div>
      <div class="md:flex gap-5 p-2 text-[12px]">
        <div class="w-full flex flex-col">
          <label class="font-semibold py-1" for="phoneNumber"
            >Phone Number *</label
          >
          <input
            id="phoneNumber"
            type="number"
            v-model="state.phoneNumber"
            :class="errorMsgs?.phoneNumber ? 'border-RD10' : 'border-G300'"
            class="h-[34px] rounded border bg-G100 py-2 px-3 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-G300"
          />
          <div class="text-red-500">{{ errorMsgs?.phoneNumber }}</div>
        </div>
        <div class="w-full flex flex-col">
          <label class="font-semibold py-1" for="age">Age *</label>
          <select
            id="age"
            v-model="state.age"
            :class="errorMsgs?.age ? 'border-RD10' : 'border-G300'"
            class="h-[34px] rounded border bg-G100 py-2 px-3"
          >
            <option value="" selected disabled>Select</option>
            <option value="21">21-24</option>
            <option value="25">25+</option>
          </select>
          <div class="text-red-500">{{ errorMsgs?.age }}</div>
        </div>
      </div>
      <div class="p-2 text-[12px] flex items-center gap-2">
        <input
          v-model="state.IPreferNotToReceive"
          class="w-4 h-4"
          type="checkbox"
          id="suscribe"
        />
        <label class="pt-0.5" for="suscribe"
          >Subscribe to our newsletter for exclusive offers and
          discounts.</label
        >
      </div>
      <div class="text-center w-full">
        <button class="w-[290px] rounded py-2 text-white bg-GN20">
          Book Now
        </button>
      </div>
    </BaseForm>

    <hr class="my-4" />
    <div class="w-full text-xs flex gap-5 bg-gray-100">
      <div class="w-full p-2">
        <strong>Fields</strong>
        <pre>{{ state }}</pre>
      </div>
      <div class="w-full p-2">
        <strong>Errors</strong>
        <pre>{{ errorMsgs }}</pre>
      </div>
    </div>
  </div>
</template>
