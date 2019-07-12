<template>
  <v-container>
    <div>
      <v-btn>Criar Material</v-btn>
    </div>
    <!--  -->
    <v-dialog v-model="dialog" width="75%" scrollable>
      <v-card>
        <v-toolbar>
          <v-toolbar-title>Material</v-toolbar-title>
          <v-spacer />
          <v-btn clean @click="fecharDialog">Fechar</v-btn>
        </v-toolbar>

        <v-card-text>
          <v-form>
            <v-layout row wrap>
              <v-flex xs3>
                <v-text-field v-model="material.nome" label="Nome" required />
              </v-flex>

              <v-flex xs3>
                <v-text-field v-model="material.descricao" label="Descrição" required />
              </v-flex>

              <v-flex xs3>
                <v-select
                  v-model="material.categoria"
                  label="Categoria"
                  :items="materialTipos"
                  item-text="tipo"
                  return-object
                />
              </v-flex>

              <v-flex xs3>
                <v-text-field v-model="material.codigoUfrn" label="Codigo UFRN" required />
              </v-flex>

              <v-flex xs3>
                <v-text-field v-model="material.codigoInterno" label="Codigo interno" required />
              </v-flex>

              <v-flex xs3>
                <v-text-field v-model="material.estoque" label="Estoque" required />
              </v-flex>

              <v-flex xs3>
                <v-text-field v-model="material.estoqueMinimo" label="Estoque mínimo" required />
              </v-flex>
            </v-layout>
            <v-layout>
              <v-flex xs6>
                <v-btn @click="limpar">Limpar</v-btn>
              </v-flex>

              <v-flex xs6>
                <v-btn @click="salvar">Salvar</v-btn>
              </v-flex>
            </v-layout>
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>

    <v-data-table :headers="headers" :items="listaDeMateriais" class="elevation-1">
      <template v-slot:items="material">
        <td>{{ material.item.nome }}</td>
        <td class="text-xs-right">{{ material.item.descricao }}</td>
        <td class="text-xs-right">{{ material.item.estoque }}</td>
        <td class="text-xs-right">{{ material.item.estoqueMinimo }}</td>
        <td class="text-xs-right">{{ material.item.codigoUfrn }}</td>
        <td class="text-xs-right">{{ material.item.categoria.tipo }}</td>
        <td class="text-xs-right">{{ material.item.unidadeMedida }}</td>
        <td class="text-xs-right" @click="deletar"><i class="fa fa-times" aria-hidden="true"></i></td>
      </template>
    </v-data-table>
    <!-- {{listaDeMateriais}} -->
  </v-container>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Material",
  data() {
    return {
      dialog: true,
      headers: [
        {
          text: "Materiais",
          align: "left",
          sortable: true,
          value: "nome"
        },
        { text: "Descricao", value: "descricao" },
        { text: "Estoque (un)", value: "estoque" },
        { text: "Estoque Mínimo (un)", value: "estoqueMinimo" },
        { text: "Código UFRN", value: "codigoUfrn" },
        { text: "Código Interno", value: "codigoInterno" },
        { text: "Unidade de Medida", value: "unidadeMedida" }
      ]
    };
  },

  computed: mapState({
    material: state => state.almoxarifado.material.material,
    materialTipos: state => state.almoxarifado.materialTipo.materialTipos,
    listaDeMateriais: state => state.almoxarifado.material.materiais
  }),
  methods: {
    fecharDialog() {
      this.dialog = false;
    },
    salvar() {
      console.log(this.material);
      this.$store.dispatch("criarMaterial");
    },
    deletar() {
      this.$store.dispatch("deletarMaterial");
    },
    limpar() {}
  },
  created() {
    this.$store.dispatch("getMaterialTipo");
    this.$store.dispatch("getMateriais");
  }
};
</script>

<style scoped>
</style>