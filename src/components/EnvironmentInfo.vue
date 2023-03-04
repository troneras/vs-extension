<template>
    <v-card-item>
        <v-card-item title="Environment Info">
            <template v-slot:prepend v-if="connectionAlert">
                <v-icon icon="mdi-alert" size="x-large" color="error" class="me-1 pb-1"></v-icon>
            </template>
            <template v-slot:subtitle v-if="connectionAlert">
                <span>Connectivity problems with the backend</span>
            </template>
            <template v-slot:append>
                <country-select v-model="country" compact/>
            </template>
        </v-card-item>
        <v-card-subtitle class="mb-2">{{ currentEnvironment }}</v-card-subtitle>
        <v-divider></v-divider>
        <v-card-text>
            <v-card v-for="(repo, index) in repositories" :key="index" class="mb-4" variant="outlined" :loading="loading"
                density="compact">
                <v-card-item density="compact">
                    <v-card-text>
                        <v-text-field v-model="repo.currentBranch" :readonly="!repo.editingBranch" :label="repo.path"
                            @click="changeBranch(repo)" />
                    </v-card-text>
                    <v-card-actions>
                        <v-btn @click="pullChanges(repo)" variant="flat">Pull Latest Changes</v-btn>
                    </v-card-actions>
                </v-card-item>
            </v-card>
        </v-card-text>
        <v-dialog v-model="modal" max-width="500px">
            <v-card>
                <v-card-item>
                    <v-card-text>
                        <v-text-field v-model="newBranch" :rules="branchNameRules" label="New Branch Name" />
                    </v-card-text>
                    <v-card-actions>
                        <v-btn text @click="modal = false" color="error">Cancel</v-btn>
                        <v-btn variant="flat" @click="saveNewBranch">Save</v-btn>
                    </v-card-actions>
                </v-card-item>

            </v-card>
        </v-dialog>
        <v-snackbar v-model="snackbar" :timeout="5000">{{ snackbarMessage }}</v-snackbar>
    </v-card-item>
</template>
  
<script>

import CountrySelect from '@/components/CountrySelect.vue'

export default {
    name: "EnvironmentInfo",
    components: {
        CountrySelect,
    },
    data() {
        return {
            currentEnvironment: "Development",
            repositories: [
                {
                    name: "Frontend",
                    path: "~/projects/my-project/frontend",
                    currentBranch: "main",
                    editingBranch: false
                },
                {
                    name: "Backend",
                    path: "~/projects/my-project/backend",
                    currentBranch: "develop",
                    editingBranch: false
                }
            ],
            modal: false,
            newBranch: "",
            snackbar: false,
            snackbarMessage: "",
            branchNameRules: [
                v => !!v || "Branch name is required",
                v => /^[a-zA-Z0-9._-]+$/.test(v) || "Invalid branch name"
            ],
            loading: false,
            connectionAlert: false,
            country: null,
        };
    },
    methods: {
        changeBranch(repo) {
            repo.editingBranch = true;
            this.modal = true;
        },
        saveNewBranch() {
            const repo = this.repositories.find(repo => repo.editingBranch);
            this.loading = true
            setTimeout(() => {
                this.loading = false
                if (repo) {
                    // TODO: Implement logic to change branch
                    repo.currentBranch = this.newBranch;
                    repo.editingBranch = false;
                    this.newBranch = "";
                    this.snackbarMessage = `Changed branch for ${repo.name} to ${repo.currentBranch}`;
                    this.snackbar = true;

                }
                this.modal = false;
            }, 2000)

        },
        pullChanges(repo) {
            // TODO: Implement logic to pull latest changes
            this.snackbarMessage = `Pulling latest changes`;
        },
    }
}
</script>        