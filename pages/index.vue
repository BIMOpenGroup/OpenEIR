<template>
  <body>
    <b-container>
      <b-sidebar id="my-sidebar" title="" shadow>
        <div class="px-3 py-2">
          Здесь можно скачать бесплатные версии EIR - Требований к
          информационным моделям, или поделиться своим вариантом данных
          тревбований
        </div>
      </b-sidebar>
      <b-form-file
        v-model="file"
        ref="file-input"
        class="mb-2"
        placeholder="Загрузить таблицу LOD в CSV"
      ></b-form-file>
      <b-button block variant="primary" v-b-toggle.my-sidebar
        >Описание
      </b-button>
      <b-button block variant="primary" @click="base_eir_create">
        {{ Base_Eir_Load_Text }}</b-button
      >
      <b-button block variant="primary" @click="load_from_csv">
        Загрузить EIR из CSV файла</b-button
      >
      <b-button block variant="primary">
        <vue-blob-json-csv
          title="Download JSON EIR"
          file-type="json"
          file-name="EIR-LOD-LOI"
          :data="[items]"
        />
      </b-button>
      <b-row class="mt-2 text-center">
        <b-col>
          <input
            checked
            size="lg"
            type="checkbox"
            v-b-toggle.collapse-p
            @change="check_stage_p"
          />
          Стадия П
          <b-collapse id="collapse-p" visible class="mt-2">
            <b-card class="text-center w-100 p-3 bg-secondary text-light">
              <b-row class="mt-2 text-center"> </b-row>
              <b-row id="chekboxes">
                <b-col
                  class="mt-2"
                  v-for="info in sections_info"
                  :key="info.c_id"
                >
                  <input
                    checked
                    size="lg"
                    type="checkbox"
                    v-b-toggle="info.c_id"
                  />
                  {{ info.section }}
                </b-col>
              </b-row>
              <div id="stage-cards">
                <b-collapse
                  visible
                  class="mt-2"
                  v-for="info in sections_info"
                  :key="info.c_id"
                  v-bind:id="info.c_id"
                >
                  <TableMaun
                    :section="info.section"
                    :title="info.title"
                    :description="Stage_P"
                    :items_list="items[info.key]"
                  ></TableMaun>
                </b-collapse>
              </div>
            </b-card>
          </b-collapse>
        </b-col>
      </b-row>
      <b-row class="mt-2 text-center">
        <b-col>
          <input
            type="checkbox"
            v-b-toggle.collapse-rd
            @change="check_stage_rd"
          />
          Стадия РД
          <b-collapse id="collapse-rd" class="mt-2">
            <b-card class="text-center w-100 p-3 bg-secondary text-light">
              {{ Stage_RD }}
            </b-card>
          </b-collapse>
        </b-col>
      </b-row>
    </b-container>
  </body>
</template>

<script>
import stage_p from "./documents/stage_p";
// import stage_rd from "../documents/stage_rd";
import TableMaun from "../components/table_maun";
import lod from "./documents/lod";
// import VueJsonPretty from "vue-json-pretty";
import VueBlobJsonCsv from "vue-blob-json-csv";
import Vue from "vue";
Vue.use(VueBlobJsonCsv);

export default {
  components: {
    TableMaun,
  },
  data() {
    return {
      file: null,
      sections_info: null,
      titles: {
        AR: ["АР", "Архитектурные решения"],
        KR: ["КР", "Конструктивные решения"],
        OV1: ["ОВ1", "Отопление"],
        OV2: ["ОВ2", "Вентиляция и кондиционирование воздуха"],
        ITP: ["ИТП", "Индивидуальный тепловой пункт"],
        VK: ["ВК", "Внутренние водопровод и канализация"],
        APT: [
          "АПТ",
          "Автоматизация системы дымоудаления или автоматизация пожаротушения",
        ],
        EOM: ["ЭОМ", "Электрооборудование и освещение"],
        SS: ["СС", "Системы связи"],
        unknown: ["", "Вне классификации"],
      },
      items: stage_p.items,
      Stage_P: null,
      Stage_RD: null,
      Remove_text: "Добавить описание",
      Base_Eir_Load_Text: "Загрузить базовый EIR",
      //   todos: [
      //     {
      //       userId: 1,
      //       id: 1,
      //       title: "delectus aut autem",
      //       completed: false,
      //     },
      //     {
      //       userId: 1,
      //       id: 5,
      //       title:
      //         "laboriosam mollitia et enim quasi adipisci quia provident illum",
      //       completed: false,
      //     },
      //   ],
    };
  },
  created() {
    // this.Stage_P = null;
    // this.Stage_RD = null;
    // let info_list = [];
    // for (const [key, value] of Object.entries(this.titles)) {
    //   const id = `collapse-p-${key.toLowerCase()}`;
    //   info_list.push({
    //     key: key,
    //     c_id: id,
    //     section: value[0],
    //     title: value[1],
    //   });
    // }
    // this.sections_info = info_list;
  },
  methods: {
    check_stage_p() {
      if (!this.Stage_P) {
        this.Stage_P = stage_p.text;
      } else {
        this.Stage_P = null;
      }
    },
    check_stage_rd() {
      if (!this.Stage_RD) {
        this.Stage_RD = stage_rd.text;
      } else {
        this.Stage_RD = null;
      }
    },
    clear() {
      if (this.Stage_P != null) {
        this.Remove_text = "Добавить описание";
        this.Stage_P = null;
      } else {
        this.Remove_text = "Убрать описание";
        this.Stage_P = stage_p.text;
      }
      if (this.Stage_RD != null) {
        this.Stage_RD = null;
      } else {
        this.Stage_RD = stage_p.text;
      }
    },
    base_eir_create() {
      if (this.Stage_P == null) {
        let info_list = [];
        for (const [key, value] of Object.entries(this.titles)) {
          const id = `collapse-p-${key.toLowerCase()}`;
          info_list.push({
            key: key,
            c_id: id,
            section: value[0],
            title: value[1],
          });
        }
        this.sections_info = info_list;
        this.Base_Eir_Load_Text = "Обнулить конструктор EIR";
      } else {
        this.Stage_P = null;
        this.sections_info = null;
        this.Base_Eir_Load_Text = "Загрузить базовый EIR";
      }
    },
    async load_from_csv() {
      const _ = require("lodash");
      var reader = new FileReader();
      if (this.file != null) {
        reader.readAsText(this.file);
        reader.onload = (e) => {
          let category_data = [];
          let items = {};
          let currunet_section = null;
          let text_from_csv = reader.result;
          console.log(text_from_csv);
          let rows_from_csv = text_from_csv.split("\n");
          for (let row of rows_from_csv) {
            const text_data = row.split(",");
            if (text_data[0].length <= 3 && text_data.length == 2) {
              if (currunet_section == null) {
                currunet_section = section_selector(text_data[0]);
              } else {
                items[currunet_section] = category_data;
                console.log(items);
                category_data = [];
                currunet_section = section_selector(text_data[0]);
              }
            } else {
              let cat_obj = {
                ElementName: text_data.shift(),
                LOD: [],
                LOI: [],
              };
              for (let text of text_data) {
                text = _.trim(text);
                text = _.trim(text, '"');
                if (_.includes(lod.LOD_I, text)) {
                  cat_obj.LOI.push(text);
                } else {
                  cat_obj.LOD.push(text);
                }
              }
              category_data.push(cat_obj);
            }
            // test.push(row.split(","));
            // test.length;
          }
          this.items = items;
          console.log(items);
        };
        // console.log(this.file);
      }
    },
    // change_visible(id) {
    //   // @click="visible[info.c_id] = !visible[info.c_id]"
    //   this.visible[id] = !this.visible[id];
    //   console.log(this.visible);
    // },
  },
  computed: {
    // state() {
    //   return this.value.length === 2;
    // },
  },
};

function redFromCSV() {}

function section_selector(section_name) {
  if (section_name == "АР" || section_name == "AR") {
    return "AR";
  } else if (section_name == "КР" || section_name == "KR") {
    return "KR";
  } else if (section_name == "ОВ1" || section_name == "OV1") {
    return "OV1";
  } else if (section_name == "ОВ2" || section_name == "OV2") {
    return "OV2";
  } else if (section_name == "ИТП" || section_name == "ITP") {
    return "ITP";
  } else if (section_name == "ВК" || section_name == "VK") {
    return "VK";
  } else if (section_name == "АПТ" || section_name == "APT") {
    return "APT";
  } else if (section_name == "ЭОМ" || section_name == "EOM") {
    return "EOM";
  } else if (
    section_name == "СС" ||
    section_name == "SS" ||
    section_name == "CC"
  ) {
    return "SS";
  } else {
    return "unknown";
  }
}
</script>

<style>
.sidebar {
  background: #363636;
  font-family: "Calibri";
  color: #ffffff;
}
.checkboxes {
  width: 20px;
  height: 20px;
}
.big-checkbox {
  width: 20px;
  height: 20px;
}
body {
  background: #363636;
  text-align: center;
  /* padding-top: 30px; */
  height: 100%;
  width: 100%;
  position: absolute;
  /* top: 0;
	left: 0;
	right: 0;
	bottom: 0; */
  font-family: "Calibri";
  color: #ffffff;
}
</style>
