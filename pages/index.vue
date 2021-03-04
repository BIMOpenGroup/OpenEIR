<template>
  <body>
    <b-container>
      <b-button block variant="primary" @click="clear">Remove text</b-button>
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
                <b-collapse visible id="collapse-p-ar" class="mt-2">
                  <TableRequi
                    :title="titles.AR"
                    :description="Stage_P"
                    :fields_list="fields.AR"
                    :items_list="items.AR"
                  ></TableRequi>
                </b-collapse>
                <b-collapse visible id="collapse-p-kr" class="mt-2">
                  <!-- <b-card class="text-center w-100 p-3 bg-secondary text-light"> -->
                  <TableRequi
                    :title="titles.KR"
                    :description="Stage_P"
                    :fields_list="fields.KR"
                    :items_list="items.KR"
                  ></TableRequi>
                  <!-- </b-card> -->
                </b-collapse>
                <b-collapse visible id="collapse-p-ov1" class="mt-2">
                  <b-card class="text-center w-100 p-3 bg-secondary text-light">
                    <h5>Отопление</h5>
                    {{ Stage_P }}
                  </b-card>
                </b-collapse>
                <b-collapse visible id="collapse-p-ov2" class="mt-2">
                  <b-card class="text-center w-100 p-3 bg-secondary text-light">
                    <h5>Вентиляция и кондиционирование воздуха</h5>
                    {{ Stage_P }}
                  </b-card>
                </b-collapse>
                <b-collapse visible id="collapse-p-itp" class="mt-2">
                  <b-card class="text-center w-100 p-3 bg-secondary text-light">
                    <h5>Индивидуальный тепловой пункт</h5>
                    {{ Stage_P }}
                  </b-card>
                </b-collapse>
                <b-collapse visible id="collapse-p-vk" class="mt-2">
                  <b-card class="text-center w-100 p-3 bg-secondary text-light">
                    <h5>Внутренние водопровод и канализация</h5>
                    {{ Stage_P }}
                  </b-card>
                </b-collapse>
                <b-collapse visible id="collapse-p-apt" class="mt-2">
                  <b-card class="text-center w-100 p-3 bg-secondary text-light">
                    <h5>
                      Автоматизация системы дымоудаления или автоматизация
                      пожаротушения
                    </h5>
                    {{ Stage_P }}
                  </b-card>
                </b-collapse>
                <b-collapse visible id="collapse-p-eom" class="mt-2">
                  <b-card class="text-center w-100 p-3 bg-secondary text-light">
                    <h5>Электрооборудование и освещение</h5>
                    {{ Stage_P }}
                  </b-card>
                </b-collapse>
                <b-collapse visible id="collapse-p-ss" class="mt-2">
                  <b-card class="text-center w-100 p-3 bg-secondary text-light">
                    <h5>Системы связи</h5>
                    {{ Stage_P }}
                  </b-card>
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
import TableRequi from "../components/table_requirements";

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
    TableRequi,
  },
  data() {
    return {
      titles: { AR: "Архитектурные решения", KR: "Конструктивные решения" },
      fields: stage_p.fields,
      items: stage_p.items,
      Stage_P: "vTerminal",
      Stage_RD: "vTerminal",
      // p_stage_value: [
      //   "АР",
      //   "КР",
      //   "ОВ1",
      //   "ОВ2",
      //   "ИТП",
      //   "ВК",
      //   "АПТ",
      //   "ЭОМ",
      //   "СС",
      // ],
      // visible_ar: true,
      // visible_kr: true,
      // visible_ov1: true,
      // visible_ov2: true,
      // visible_itp: true,
      // visible_vk: true,
      // visible_apt: true,
      // visible_eom: true,
      // visible_ss: true,
      // visible_ar: true,
      // options: [
      //   { text: "АР", value: "АР" },
      //   { text: "КР", value: "КР" },
      //   { text: "ОВ1", value: "ОВ1" },
      //   { text: "ОВ2", value: "ОВ2" },
      //   { text: "ИТП", value: "ИТП" },
      //   { text: "ВК", value: "ВК" },
      //   { text: "АПТ", value: "АПТ" },
      //   { text: "ЭОМ", value: "ЭОМ" },
      //   { text: "СС", value: "СС" },
      // ],
      // input_dice_value: "100",
      // input_atacs: "55",
      // v_slct_hit: '2+',
      // v_slct_wound: '2+',
      // v_slct_arm: 'No',
      // v_slct_fnp: 'No',
      // answer_data: "",
      // items: [{from:'', to:"", wound:""}],
      // myStyle:{
      // backgroundColor:"#16a085"
      // }
    };
  },
  async created() {
    this.Stage_P = null;
    this.Stage_RD = null;
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
        this.Stage_P = null;
      } else {
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
