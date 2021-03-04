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
      :fields="fields_list"
      :head-variant="null"
    ></b-table>
    {{ description }}
  </b-card>
</template>

<script>
export default {
  name: "TableRequi", // vue component name
  props: {
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
    return {};
  },
  methods: {},
};
</script>

<style></style>
