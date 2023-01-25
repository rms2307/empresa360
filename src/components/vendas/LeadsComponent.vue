<template>
  <div>
    <h5>Leads</h5>
    <table class="table table-hover">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Nome</th>
          <th scope="col">Telefone</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="lead in dados" :key="lead.id">
          <td>{{ lead.id }}</td>
          <td>{{ lead.nome }}</td>
          <td>{{ lead.telefone }}</td>
          <td>
            <!-- <router-link
              :to="`/home/vendas/leads/${lead.id}`"
              class="btn btn-sm btn-primary"
            > -->
            <router-link
              :to="{ name: 'lead', params: { id: lead.id } }"
              class="btn btn-sm btn-primary"
            >
              <i class="bi bi-pencil-square" style="cursor: pointer"></i>
            </router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import ApiMixin from "@/mixins/ApiMixin";

export default {
  name: "LeadsComponent",
  mixins: [ApiMixin],
  created() {
    this.obterDados("http://localhost:3000/leads");
  },
};
</script>