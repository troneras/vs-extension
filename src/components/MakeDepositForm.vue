<template>
  <v-card-item>
    <v-form @submit.prevent="makeDeposit" validate-on="submit">
      <v-text-field v-model="amount" label="Amount" outlined required type="number" min="0" step="0.01"
        :rules="amountRules"></v-text-field>
      <v-card-actions>
        <v-btn type="submit" variant="flat">Make Deposit</v-btn>
      </v-card-actions>

      <v-snackbar v-model="snackbar" :timeout="5000">{{ snackbarMessage }}</v-snackbar>
    </v-form>
  </v-card-item>
</template>
  
<script>
export default {
  name: 'MakeDepositForm',
  data() {
    return {
      amount: '',
      snackbar: false,
      snackbarMessage: '',
    };
  },
  computed: {
    amountRules() {
      return [
        (v) => !!v || 'Amount is required',
        (v) => /^\d+(\.\d{1,2})?$/.test(v) || 'Amount must be a number with 2 decimals',
      ];
    },
  },
  methods: {
    async makeDeposit(event) {
      const validation = await event;
      if (validation.valid !== true) {
        this.snackbarMessage = validation.errors[0].errorMessages[0];
        this.snackbar = true;
        return;
      }
      // Perform the make deposit action with the given amount
      // Then show the success message in the snackbar
      this.snackbarMessage = `Deposit of ${this.amount} made successfully`;
      this.snackbar = true;
      this.amount = '';
    },
  },
};
</script>
  