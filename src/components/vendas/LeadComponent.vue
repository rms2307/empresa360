<template>
  <div>
    <h5>{{ lead.id }} - {{ lead.nome }}</h5>
    <div class="mb-3 row">
      <label class="col-sm-2 col-form-label">Id</label>
      <div class="col-sm-10">
        <input
          type="text"
          readonly
          class="form-control-plaintext"
          :value="lead.id"
        />
      </div>
    </div>
    <div class="mb-3 row">
      <label class="col-sm-2 col-form-label">Nome</label>
      <div class="col-sm-10">
        <input type="text" class="form-control-plaintext" :value="lead.nome" />
      </div>
    </div>
    <div class="mb-3 row">
      <label class="col-sm-2 col-form-label">Telefone</label>
      <div class="col-sm-10">
        <input
          type="text"
          class="form-control-plaintext"
          :value="lead.telefone"
        />
      </div>
    </div>

    <div class="col-auto">
      <button class="btn btn-primary">Atualizar</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "LeadComponent",
  data: () => ({
    lead: null,
  }),
  methods: {
    obterLeadPorId() {
      let id = this.$route.params.id;
      fetch(`http://localhost:3000/leads/${id}`)
        .then((resp) => resp.json())
        .then((resp) => {
          this.lead = resp;
        });
    },
  },
  created() {
    this.obterLeadPorId();
  },
};
</script>