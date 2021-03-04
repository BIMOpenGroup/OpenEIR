import TableRequi from "./table_requirements";

export default TableRequi

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component('eir-table-req', TableRequi)
}