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
      :items="items_list"
      :fields="filds"
      :head-variant="null"
    ></b-table>
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
      filds: [`Элементы раздела ${this.section}`, "LOD", "LOI"],
    };
  },
  methods: {},
};
</script>

<style></style>
