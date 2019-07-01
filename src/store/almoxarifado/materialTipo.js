import { HttpClient } from "../../utils/HttpClient";

const ROTA_ALMOXARIFADO = "/almoxarifado/materialTipo";

const MATERIAL_TIPO = {
    tipo: "",
}

const state = {
    materialTipo: {...MATERIAL_TIPO},
    materialTipos: []
}

const actions = {
    getMaterialTipo: ({commit}) => {
        HttpClient.GET(ROTA_ALMOXARIFADO).then((resposta) => {
            commit("setMaterialTipos", resposta.data)
        })
    },
    criarMaterialTipo: ({commit, state}) => {
        HttpClient.POST(ROTA_ALMOXARIFADO, state.materialTipo).then((resposta) => {
            commit("addMaterialTipo", resposta.data);
        })
    }
}

const mutations = {
    setMaterialTipos: (state, materialTipos) => {
        state.materialTipos = materialTipos;
    },
    addMaterialTipo: (state, materialTipo) => {
        state.materialTipos.push(materialTipo);
    }
}

export default {
    state,
    actions,
    mutations
}