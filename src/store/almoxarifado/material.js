import { HttpClient } from "../../utils/HttpClient";

const ROTA_ALMOXARIFADO = "/almoxarifado/material";

const MATERIAL = {
    nome: "",
    descricao: "",
    categoria: {},
    codigoUfrn: "",
    codigoInterno: "",
    estoque: undefined,
    estoqueMinimo: undefined,
    unidadeMedida: "",
}

const state = {
    material: {...MATERIAL},
    materiais: []
}

const actions = {
    getMateriais: ({commit}) => {
        HttpClient.GET(ROTA_ALMOXARIFADO).then((resposta) => {
            commit("setMateriais", resposta.data)
        })
    },
    criarMaterial: ({commit, state}) => {
        HttpClient.POST(ROTA_ALMOXARIFADO, state.material).then((resposta) => {
            commit("addMaterial", resposta.data);
        }).catch(error => {console.log(error.response.data.errors)})
    }
}

const mutations = {
    setMateriais: (state, materiais) => {
        state.materiais = materiais;
    },
    addMaterial: (state, material) => {
        state.materiais.push(material);
    }
}

export default {
    state,
    actions,
    mutations
}