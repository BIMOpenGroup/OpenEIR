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
              <h2>Разделы стадии П</h2>
              <!-- <b-alert show variant="success">Разделы стадии П</b-alert> -->
              <b-row class="mt-2 text-center"> </b-row>
              <b-row id="chekboxes">
                <b-col>
                  <input
                    checked
                    size="lg"
                    type="checkbox"
                    v-b-toggle.collapse-p-ar
                  />
                  AР
                </b-col>
                <b-col>
                  <input
                    checked
                    size="lg"
                    type="checkbox"
                    v-b-toggle.collapse-p-kr
                  />
                  КР
                </b-col>
                <b-col>
                  <input
                    checked
                    size="lg"
                    type="checkbox"
                    v-b-toggle.collapse-p-ov1
                  />
                  ОВ1
                </b-col>
                <b-col>
                  <input
                    checked
                    size="lg"
                    type="checkbox"
                    v-b-toggle.collapse-p-ov2
                  />
                  ОВ2
                </b-col>
                <b-col>
                  <input
                    checked
                    size="lg"
                    type="checkbox"
                    v-b-toggle.collapse-p-itp
                  />
                  ИТП
                </b-col>
                <b-col>
                  <input
                    checked
                    size="lg"
                    type="checkbox"
                    v-b-toggle.collapse-p-vk
                  />
                  ВК
                </b-col>
                <b-col>
                  <input
                    checked
                    size="lg"
                    type="checkbox"
                    v-b-toggle.collapse-p-apt
                  />
                  АПТ
                </b-col>
                <b-col>
                  <input
                    checked
                    size="lg"
                    type="checkbox"
                    v-b-toggle.collapse-p-eom
                  />
                  ЕОМ
                </b-col>
                <b-col>
                  <input
                    checked
                    size="lg"
                    type="checkbox"
                    v-b-toggle.collapse-p-ss
                  />
                  СС
                </b-col>
              </b-row>
              <div id="stage-cards">
                <b-collapse
                  visible
                  class="mt-2"
                  v-for="c_id in collaps_ids"
                  :key="c_id"
                  v-bind:id="c_id"
                >
                  <TableMaun
                    :section="titles.AR[0]"
                    :title="titles.AR[1]"
                    :description="Stage_P"
                    :items_list="titles.AR"
                  ></TableMaun>
                </b-collapse>
                <b-collapse visible id="collapse-p-ar" class="mt-2">
                  <TableMaun
                    :section="titles.AR[0]"
                    :title="titles.AR[1]"
                    :description="Stage_P"
                    :items_list="items.AR"
                  ></TableMaun>
                </b-collapse>
                <b-collapse visible id="collapse-p-kr" class="mt-2">
                  <!-- <b-card class="text-center w-100 p-3 bg-secondary text-light"> -->
                  <TableMaun
                    :section="titles.KR[0]"
                    :title="titles.KR[1]"
                    :description="Stage_P"
                    :items_list="items.KR"
                  ></TableMaun>
                  <!-- </b-card> -->
                </b-collapse>
                <b-collapse visible id="collapse-p-ov1" class="mt-2">
                </b-collapse>
                <b-collapse visible id="collapse-p-ov2" class="mt-2">
                </b-collapse>
                <b-collapse visible id="collapse-p-itp" class="mt-2">
                </b-collapse>
                <b-collapse visible id="collapse-p-vk" class="mt-2">
                </b-collapse>
                <b-collapse visible id="collapse-p-apt" class="mt-2">
                </b-collapse>
                <b-collapse visible id="collapse-p-eom" class="mt-2">
                </b-collapse>
                <b-collapse visible id="collapse-p-ss" class="mt-2">
                </b-collapse>
              </div>
            </b-card>
          </b-collapse>
        </b-col>
      </b-row>
      <b-row class="mt-2 text-center">
        <b-col>
          {{ null }}
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

// Vue.component("button-counter", {
//   data: function() {
//     return {
//       count: 0,
//     };
//   },
//   template:
//     '<button v-on:click="count++">Счётчик кликов — {{ count }}</button>',
// });

export default {
  components: {
    FccButton,
    TableMaun,
  },
  data() {
    return {
      collaps_ids: null,
      titles: {
        AR: ["АР", "Архитектурные решения"],
        KR: ["КР", "Конструктивные решения"],
        OV1: "Отопление",
        OV2: "Вентиляция и кондиционирование воздуха",
        ITP: "Индивидуальный тепловой пункт",
        VK: "Внутренние водопровод и канализация",
        APT:
          "Автоматизация системы дымоудаления или автоматизация пожаротушения",
        EOM: "Электрооборудование и освещение",
        SS: "Системы связи",
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
    let collaps_id_list = [];
    for (const [key, value] of Object.entries(this.titles)) {
      collaps_id_list.push(`collapse-p-${key.toLowerCase()}`);
    }
    this.collaps_ids = collaps_id_list;
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
  },
  computed: {
    state() {
      return this.value.length === 2;
    },
  },
};
</script>

<style>
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
