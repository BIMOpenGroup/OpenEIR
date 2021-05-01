<template>
  <b-card class="text-center w-100 p-3 bg-secondary text-light">
    <h5>{{ title }}</h5>
    <b-table
      :striped="true"
      :bordered="true"
      :borderless="false"
      :outlined="false"
      :small="true"
      :hover="true"
      :dark="false"
      :fixed="true"
      :foot-clone="false"
      :no-border-collapse="false"
      :fields="filds"
      :items="items_list"
      :head-variant="null"
    >
      <template v-slot:cell(ElementName)="row">
        <b-form-input v-model="row.item.ElementName" />
      </template>
      <template v-slot:cell(LOD)="row">
        <b-form-input v-model="row.item.LOD" />
      </template>
      <template v-slot:cell(LOI)="row">
        <b-form-input v-model="row.item.LOI" />
      </template>
    </b-table>
    {{ description }}
  </b-card>
</template>

<script>
export default {
  name: "TableMaun", // vue component name
  props: {
    section: {
      required: false,
      default: "AR",
    },
    title: {
      required: false,
      default: "title",
    },
    description: {
      required: false,
      default: "",
    },
    fields_list: {
      required: false,
      default: () => {
        return {};
      },
    },
    items_list: {
      required: false,
      default: () => {
        return {};
      },
    },
  },
  data() {
    return {
      filds: [`ElementName`, "LOD", "LOI"],
      items_list_fixed: [],
    };
  },
  methods: {},
};

function renamekey(obj, key, newKey) {
  const cloneObj = clone(obj);
  const value = cloneObj[key];
  delete cloneObj[key];
  cloneObj[newKey] = value;
  return cloneObj;
}

const clone = (obj) => Object.assign({}, obj);
</script>

<style></style>
