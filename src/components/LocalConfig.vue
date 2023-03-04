<template>
    <v-card>
        <v-card-title>Configuration</v-card-title>
        <v-card-text>
            <v-form>
                <v-text-field v-model="localhost" label="Localhost (ex. john.videoslots.com)" required></v-text-field>
                <v-text-field v-model="sshKeyPath" label="SSH Key Path" required></v-text-field>
                <v-snackbar v-model="snackbar" :timeout="5000">{{ snackbarMessage }}</v-snackbar>
            </v-form>
        </v-card-text>
        <v-card-actions>
            <v-btn @click="saveConfig" variant="flat" color="secondary">Save</v-btn>
            <v-btn @click="resetConfig" variant="flat">Reset</v-btn>
        </v-card-actions>
    </v-card>
</template>
  
<script>
const fs = require('fs');
const readline = require('readline');


export default {
    name: 'LocalConfig',
    data() {
        return {
            localhost: localStorage.getItem('localhost') || '',
            sshKeyPath: '',
            //        sshKeyPath: localStorage.getItem('sshKeyPath') || '',
            snackbar: false,
            snackbarMessage: '',
            file: []
        }
    },
    methods: {
        saveConfig() {
            localStorage.setItem('localhost', this.localhost)
            this.validateFilepath(this.sshKeyPath)
            //localStorage.setItem('sshKeyPath', this.sshKeyPath)
            this.snackbarMessage = 'Configuration saved successfully'
            this.snackbar = true
        },
        resetConfig() {
            this.localhost = ''
            this.sshKeyPath = ''
            localStorage.removeItem('localhost')
            localStorage.removeItem('sshKeyPath')
            this.snackbarMessage = 'Configuration reset successfully'
            this.snackbar = true
        },
        validateFilepath(filepath) {
            try {
                const fileStream = fs.createReadStream(filepath, { encoding: 'utf-8' });
                const rl = readline.createInterface({ input: fileStream });
                let firstLine = '';
                rl.on('line', (line) => {
                    firstLine = line;
                    rl.close();
                });
                rl.on('close', () => {
                    if (firstLine.trim() !== 'BEGIN OPENSSH PRIVATE KEY') {
                        this.$log('Invalid file format. The file must contain a valid private key in OpenSSH format.');
                        return false;
                    } else {
                        this.$log('Valid file format.');
                        return true;
                    }
                });
            } catch (error) {
                this.$log('Error validating file path:', error);
                return false;
            }
        }
    },
}
</script>
  