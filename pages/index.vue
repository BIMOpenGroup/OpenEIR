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
      <b-button block variant="primary" v-b-toggle.my-sidebar
        >Открытый EIR
      </b-button>
      <b-button block variant="primary" @click="clear">
        {{ Remove_text }}</b-button
      >
      <b-row class="mt-2 text-center">
        <b-col>
          <input
            checked
            size="lg"
            type="checkbox"
            v-b-toggle.collapse-1
            @change="check_stage_p"
          />
          Стадия П
          <b-collapse id="collapse-1" visible class="mt-2">
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
                    :items_list="items.AR"
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
            v-b-toggle.collapse-2
            @change="check_stage_rd"
          />
          Стадия РД
          <b-collapse id="collapse-2" class="mt-2">
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
import stage_p from "../documents/stage_p";
import stage_rd from "../documents/stage_rd";
import FccButton from "../components/project_section";
import TableMaun from "../components/table_maun";

export default {
  components: {
    FccButton,
    TableMaun,
  },
  data() {
    return {
      visible: {},
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
      },
      items: stage_p.items,
      Stage_P: "vTerminal",
      Stage_RD: "vTerminal",
      Remove_text: "Remove text",
    };
  },
  created() {
    this.Stage_P = null;
    this.Stage_RD = null;
    let info_list = [];
    for (const [key, value] of Object.entries(this.titles)) {
      const id = `collapse-p-${key.toLowerCase()}`;
      this.visible[id] = true;
      info_list.push({
        c_id: id,
        section: value[0],
        title: value[1],
      });
    }
    this.sections_info = info_list;
    console.log(this.visible);
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
    change_visible(id) {
      // @click="visible[info.c_id] = !visible[info.c_id]"
      this.visible[id] = !this.visible[id];
      console.log(this.visible);
    },
  },
  computed: {
    state() {
      return this.value.length === 2;
    },
  },
};
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
