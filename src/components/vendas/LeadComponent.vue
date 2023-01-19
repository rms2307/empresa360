<template>
  <div>
    <h5>{{ dados.id }} - {{ dados.nome }}</h5>
    <div class="mb-3 row">
      <label class="col-sm-2 col-form-label">Id</label>
      <div class="col-sm-10">
        <input
          type="text"
          readonly
          class="form-control-plaintext"
          :value="dados.id"
        />
      </div>
    </div>
    <div class="mb-3 row">
      <label class="col-sm-2 col-form-label">Nome</label>
      <div class="col-sm-10">
        <input type="text" class="form-control-plaintext" :value="dados.nome" />
      </div>
    </div>
    <div class="mb-3 row">
      <label class="col-sm-2 col-form-label">Telefone</label>
      <div class="col-sm-10">
        <input
          type="text"
          class="form-control-plaintext"
          :value="dados.telefone"
        />
      </div>
    </div>

    <div class="col-auto">
      <button class="btn btn-primary">Atualizar</button>
    </div>
  </div>
</template>

<script>
import ApiMixin from "@/mixins/ApiMixin";
export default {
  name: "LeadComponent",
  mixins: [ApiMixin],
  created() {
    let id = this.$route.params.id;
    this.obterDados(`http://localhost:3000/leads/${id}`);
  },
};
</script>