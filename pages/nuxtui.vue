<script setup lang="ts">
import { string, objectAsync, email, custom, number, minLength, type Input } from "valibot"
import type { FormSubmitEvent } from '#ui/types'
import AirlineService from "@/services/AirlineService"
import CountryService from "@/services/CountryService"
const { t } = useI18n()

const ages = ["21-24", "25+"]
const optInfo = shallowRef(false)
const airlines = AirlineService.getAirlines()
const countrieService = CountryService.getCountries()
const countries = computed(() => 
  Object.keys(countrieService).map((key) => ({ label: countrieService[key].name, value: key }))
)

const booking = reactive({
  first_name: "",
  last_name: "",
  email: "",
  secondEmail: "",
  phoneNumber: "",
  age: "",
  IPreferNotToReceive: false,
})

const flyOptions = reactive({
  flight_number: "",
  fFlyerCarrier: "",
  fFlyerNbr: "",
})

const payment = reactive({
  countryID: "",
  city: "",
  address: "",
})

const schema = objectAsync({
  first_name: string([minLength(1, t('generalText.emptyValue'))]),
  last_name: string([minLength(1, t('generalText.emptyValue'))]),
  email: string([email(t('generalText.emailNotValid'))]),
  secondEmail: string([
    email(t('generalText.emailNotValid')),
    custom((value) => value === booking.email, t('reservation.emailConfirmEmailMustBeTheSame')),
  ]),
  phoneNumber: number(t('generalText.numberNotValid')),
  age: string([minLength(1, t('generalText.emptyValue'))]),
  countryID: string([minLength(1, t('generalText.emptyValue'))]),
  city: string([minLength(1, t('generalText.emptyValue'))]),
  address: string([minLength(1, t('generalText.emptyValue'))]),
})

type Schema = Input<typeof schema>

const optAirlines = computed(() => {
  return Object.keys(airlines).map((key) => ({ value: key, label: airlines[key] }))
})

function onSubmit({ data }: FormSubmitEvent<Schema>) {
  console.log(data)
}
</script>

<template>
  <div class="sm:flex gap-4 pb-10">
    <div class="mt-4 w-full sm:w-2/3 border border-G200 px-7 pt-8 pb-4 shadow-xl">
      <h3 class="pb-4 text-2xl font-bold text-BRC0 md:mb-0">
        {{ $t("reservation.DriverInformation") }}
      </h3>
      <UForm
        :schema="schema"
        :state="{...booking, ...payment}"
        class="space-y-3"
        @submit="onSubmit"
      >
        <div class="md:flex gap-5 w-full">
          <UFormGroup :label="$t('reservation.FirstName') + ' *'" name="first_name" class="w-full pt-1">
            <UInput
              input-class="rounded border bg-G100 py-2 px-3"
              v-model="booking.first_name"
              :placeholder="$t('reservation.FirstName')"
            />
          </UFormGroup>

          <UFormGroup :label="$t('reservation.LastName') + ' *'" name="last_name" class="w-full pt-1">
            <UInput
              input-class="rounded border bg-G100 py-2 px-3"
              v-model="booking.last_name"
              :placeholder="$t('reservation.LastName')"
            />
          </UFormGroup>
        </div>

        <div class="md:flex gap-5 w-full">
          <UFormGroup :label="$t('reservation.Email') + ' *'" name="email" class="w-full pt-1">
            <UInput
              input-class="rounded border bg-G100 py-2 px-3"
              v-model="booking.email"
              :placeholder="$t('reservation.Email')"
            />
          </UFormGroup>

          <UFormGroup :label="$t('reservation.ConfirmYourEmail') + ' *'" name="secondEmail" class="w-full pt-1">
            <UInput
              input-class="rounded border bg-G100 py-2 px-3"
              @paste.prevent=""
              v-model="booking.secondEmail"
              :placeholder="$t('reservation.ConfirmYourEmail')"
            />
          </UFormGroup>
        </div>

        <div class="md:flex gap-5 w-full">
          <UFormGroup :label="$t('reservation.PhoneNumber') + ' *'" name="phoneNumber" class="w-full pt-1">
            <UInput
              input-class="rounded border bg-G100 py-2 px-3"
              v-model="booking.phoneNumber"
              type="number"
              placeholder="(XXX) XXX-XXXX"
            />
          </UFormGroup>
          <UFormGroup :label="$t('reservation.Age') + ' *'" name="age" class="w-full pt-1">
            <USelect
              select-class="rounded border bg-G100 py-2 px-3"
              v-model="booking.age"
              :options="ages"
              :placeholder="$t('generalText.select')"
            />
          </UFormGroup>
        </div>

        <UFormGroup name="IPreferNotToReceive" class="w-full">
          <UCheckbox
            v-model="booking.IPreferNotToReceive"
            :label="$t('reservation.IPreferNotToReceive')"
          />
        </UFormGroup>

        <div class="text-GRC0 text-sm">
          {{ $t("reservation.WeTakeTheProtection") }}
          <NuxtLink to="/">{{ $t("reservation.PrivacyPolicy") }}</NuxtLink>
        </div>

        <div
          @click="optInfo = !optInfo"
          class="text-BRC0 text-xl justify-between flex font-bold py-2.5 pr-2 hover:pl-2 border-y w-full cursor-pointer duration-100 hover:bg-G100"
        >
          <span>{{ $t("reservation.OptionalInformation") }}</span>
          <IconChevon
            class="stroke-BRC0 stroke-2 duration-100"
            :class="{ 'rotate-180': optInfo }"
          ></IconChevon>
        </div>

        <div v-if="optInfo" class="md:flex items-end gap-5 p-1.5 duration-150 border border-G100 rounded-b">
          <UFormGroup 
          :label="$t('reservation.FlightNumber')"
          name="flightNumber" class="w-full">
            <UInput input-class="rounded border bg-G100 py-2 px-3" v-model="flyOptions.flight_number" placeholder="Ex: AA1234" />
          </UFormGroup>
          <UFormGroup
            :label="$t('reservation.AirlineLoyaltyProgram')"
            name="flightNumber"
            class="w-full"
          >
            <USelectMenu
              select-class="rounded border bg-G100 py-2 px-3"
              v-model="flyOptions.fFlyerCarrier" searchable
              :options="optAirlines" :placeholder="$t('generalText.select')"
              option-attribute="label" value-attribute="value"></USelectMenu>
          </UFormGroup>
          <UFormGroup
            :label="$t('reservation.FrequentFlyerNumber')"
            name="flightNumber"
            class="w-full"
          >
            <UInput :placeholder="$t('reservation.FrequentFlyerNumber')"
              v-model="flyOptions.fFlyerNbr"
              input-class="rounded border bg-G100 py-2 px-3" />
          </UFormGroup>
        </div>

        <div class="text-BRC0 font-bold text-xl">
          <img class="float-end" src="@/assets/img/cards.png" alt="">
          {{ $t("reservation.PaymentInformation") }}
        </div>
        <p class="text-GRC0 text-sm">
          {{ $t("reservation.TheseAreTheFinalDetails") }}
        </p>

        <div class="w-full md:flex gap-4">
          <UFormGroup :label="$t('reservation.CreditCardNumber') + ' *'" class="w-full md:w-2/3">
            <UInput input-class="rounded border bg-G100 py-2 px-3"
              :placeholder="$t('reservation.CreditCardNumber')"></UInput>
          </UFormGroup>
          <UFormGroup :label="$t('reservation.CountryOfIssuance') + ' *'"
            name="countryID" class="w-full md:w-1/3">
            <USelectMenu v-model="payment.countryID"
              :options="countries" searchable
              option-attribute="label" value-attribute="value"
              select-class="rounded border bg-G100 py-2 px-3"></USelectMenu>
          </UFormGroup>
        </div>

        <div class="w-full md:flex gap-4">
          <UFormGroup :label="$t('reservation.City') + ' *'"
            name="city" class="w-full md:w-1/3">
            <UInput v-model="payment.city"
              input-class="rounded border bg-G100 py-2 px-3"
              :placeholder="$t('reservation.City')"></UInput>
          </UFormGroup>
          <UFormGroup :label="$t('reservation.Address') + ' *'"
            name="address" class="w-full md:w-2/3">
            <UInput v-model="payment.address"
              input-class="rounded border bg-G100 py-2 px-3"
              :placeholder="$t('reservation.Address')"></UInput>
          </UFormGroup>
        </div>

        <hr>

        <div class="text-GRC0 text-xs text-center">
          {{ $t("reservation.ByClickingBookNow") }} {{ $t("footer.termsAndConditions") }}
        </div>

        <div class="text-center">
          <UButton class="px-10 text-md" type="submit" icon="i-heroicons-lock-closed">
            {{ $t("reservation.BookNow") }}
          </UButton>
        </div>
      </UForm>
      <div class="flex w-full justify-end">
        <img class="w-28" src="@/assets/img/SSL-Encryption.png" alt="">
      </div>
    </div>

    <div class="w-full md:w-1/3 p-4 mt-4 text-xs border">
      <strong>booking:</strong>
      <pre>{{ booking }}</pre>
      <hr class="my-4">
      <strong>flyOptions:</strong>
      <pre>{{ flyOptions }}</pre>
      <hr class="my-4">
      <strong>payment:</strong>
      <pre>{{ payment }}</pre>
    </div>
  </div>
</template>
