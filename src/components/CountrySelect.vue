<template>
    <v-select v-model="country" :items="countries" item-value="code" item-title="name" label="Country" :menu-props="{
        closeOnClick: true,
        closeOnContentClick: true,
    }" required>
        <template v-slot:selection="{ item, index }">
            <v-list-item>
                <template #prepend>
                    <v-avatar size="32" rounded="0">
                        <country-flag :country="getCountryCode(item.title)" size="normal" />
                    </v-avatar>

                </template>
                <v-list-item-title v-if="!compact">{{ item.title }} ({{ item.value }})</v-list-item-title>
            </v-list-item>
        </template>

        <template v-slot:item="{ item, index }">
            <v-list-item @click="selectCountry(item.title)">
                <template #prepend>
                    <v-avatar size="32" rounded="0">
                        <country-flag :country="getCountryCode(item.title)" size="normal" />
                    </v-avatar>
                </template>
                <v-list-item-title >{{ item.title }} ({{ item.value }})</v-list-item-title>
            </v-list-item>
        </template>
    </v-select>
</template>
  
<script>
import { countries } from "@/data/countries";
import CountryFlag from "vue-country-flag-next";

export default {
    name: "CountrySelect",
    components: {
        CountryFlag,
    },
    props: {
        defaultCountry: {
            type: String,
            default: "mt",
        },
        compact: {
            type: Boolean,
            default: false
        }
    },
    emits: ["update:modelValue"],
    data() {
        return {
            countries: countries,
            country: null
        };
    },
    mounted() {
        this.country = this.countries.find(
            (c) => c.isoCode === this.defaultCountry.toLowerCase()
        );
        this.$emit("update:modelValue", this.country);
    },
    methods: {
        selectCountry(name) {
            this.country = this.countries.find(c => c.name === name) || "";
            this.$emit("update:modelValue", this.country);
        },
        getCountryCode(name) {
            return this.countries.find(c => c.name === name)?.isoCode || "";
        }
    },
    watch: {
        default(value) {
            this.country = value;
        },
    },
};
</script>
  
  