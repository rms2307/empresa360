<template>
  <div>
    <h5>Serviços</h5>
    <hr />
    <div class="row">
      <div class="col" v-for="d in dados" :key="d.id">
        <div class="card" style="width: 11rem">
          <img :src="`/img/${d.icone}`" class="card-img-top" />
          <div class="card-body text-center">
            <p class="card-text">{{ d.servico }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ApiMixin from "@/mixins/ApiMixin";

export default {
  name: "ServicosComponent",
  mixins: [ApiMixin],
  created() {
    this.obterDados("http://localhost:3000/servicos");
  },
};
</script>