<template>
    <v-app>
        <v-navigation-drawer v-model="drawer" app :width="width" style="background-color: #263238; color: white" temporary>
            <v-list>
                <v-list-item v-for="item in items" :key="item.id" @click="select(item)">
                    <template #prepend>
                        <v-icon>{{ item.icon }}</v-icon>
                    </template>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
        <v-app-bar color="primary" dark>
            <v-toolbar-title>
                <v-avatar size="32" @click="drawer = !drawer">
                    <v-img src="../assets/logo.png" alt="Videoslots Logo"></v-img>
                </v-avatar>
                <span class="ml-2 mt-2 text-xl" v-text="selectedTitle"></span>
            </v-toolbar-title>
        </v-app-bar>
        <v-main>
            <v-container fluid>
                <v-card>
                    <template v-if="selectedItem">
                        <component :is="selectedItem.component"></component>
                    </template>
                    <template v-else>
                        <p class="text-center mt-8">Please select an action from the menu.</p>
                    </template>
                </v-card>
            </v-container>
        </v-main>
    </v-app>
</template>
  
<script>
import ChangePasswordForm from "@/components/ChangePasswordForm.vue";
import MakeDepositForm from "@/components/MakeDepositForm.vue";
import RemoveBlocksForm from "@/components/RemoveBlocksForm.vue";
import ChangeCountryForm from "@/components/ChangeCountryForm.vue";
import DebuggingTools from "@/components/DebuggingTools.vue";
import CreateTestUserForm from "@/components/CreateTestUserForm.vue";
import AutofillForm from "@/components/AutoFillForm.vue";
import EnvironmentInfo from "@/components/EnvironmentInfo.vue";
import LocalConfig from "@/components/LocalConfig.vue";
import { markRaw } from 'vue';

export default {
    name: "PopupLayout",
    components: {
        ChangePasswordForm,
        MakeDepositForm,
        RemoveBlocksForm,
    },
    data() {
        return {
            drawer: null,
            width: 250,
            items: [
                {
                    icon: "mdi-lock",
                    title: "Change Password",
                    component: markRaw(ChangePasswordForm),
                },
                {
                    icon: "mdi-cash",
                    title: "Make a Deposit",
                    component: markRaw(MakeDepositForm),
                },
                {
                    icon: "mdi-block-helper",
                    title: "Remove Blocks",
                    component: markRaw(RemoveBlocksForm),
                },
                {
                    icon: "mdi-earth",
                    title: "Change Country",
                    component: markRaw(ChangeCountryForm),
                },
                {
                    icon: "mdi-bug",
                    title: "Debugging Tools",
                    component: markRaw(DebuggingTools),
                },
                {
                    icon: "mdi-account-plus",
                    title: "Create Test User",
                    component: markRaw(CreateTestUserForm),
                },
                {
                    icon: 'mdi-auto-fix',
                    title: 'Autofill Form',
                    component: markRaw(AutofillForm),
                },
                {
                    icon: 'mdi-information-outline',
                    title: 'Environment Info',
                    component: markRaw(EnvironmentInfo)
                },
                {
                    icon: 'mdi-settings',
                    title: 'Configuration',
                    component: markRaw(LocalConfig)
                }

            ],
            selectedItem: null,
        };
    },
    mounted() {
        // set the first item as the default selected item
        this.selectedItem = this.items[8];
    },
    methods: {
        select(item) {
            this.selectedItem = item;
            this.drawer = false;
        },
    },
    computed: {
        selectedTitle() {
            return this.selectedItem?.title || 'Videoslots Developer Tools';
        },
    }
};
</script>
  