<template>
  <body>
    <b-container>
      <b-button block variant="primary" @click="clear">Remove text</b-button>
      <b-row class="mt-2 text-center">
        <b-col>
          <input
            size="lg"
            type="checkbox"
            v-b-toggle.collapse-1
            @change="check_stage_p"
          />
          Стадия П
          <b-collapse id="collapse-1" class="mt-2">
            <b-card class="text-center w-100 p-3 bg-secondary text-light">
              <h2>Разделы стадии П</h2>
              <!-- <b-alert show variant="success">Разделы стадии П</b-alert> -->
              <b-row class="mt-2 text-center"> </b-row>
              <b-row>
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
              <!-- <FccButton v-b-toggle.collapse-p-ar>АР</FccButton> -->
              <!-- <b-form-checkbox-group
                v-model="p_stage_value"
                :options="options"
                @click="check_stage_p"
              /> -->
              <b-collapse visible id="collapse-p-ar" class="mt-2">
                <b-card class="text-center w-100 p-3 bg-secondary text-light">
                  <h5>Архитектурные решения</h5>
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
                    :items="items"
                    :fields="fields"
                    :head-variant="headVariant"
                    :table-variant="secondary"
                  ></b-table>
                  {{ Stage_P }}
                </b-card>
              </b-collapse>
              <b-collapse visible id="collapse-p-kr" class="mt-2">
                <b-card class="text-center w-100 p-3 bg-secondary text-light">
                  <h5>Конструктивные решения</h5>
                  {{ Stage_P }}
                </b-card>
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
import stage_p from "../documents/stage_p.js";
import stage_rd from "../documents/stage_rd";
import FccButton from "../components/project_section";

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
  },
  data() {
    return {
      fields: ["Элементы раздела АР", "LOD", "LOI"],
      items: [
        {
          "Элементы раздела АР": "Стена",
          LOD:
            "Точные габариты, Точное расположение, Внешний образ/вид, Материалы",
          LOI:
            "Площадь, Объем, Длина, Ширина, ADSK_Описание, ADSK_Корпус / ADSK_Секция, ADSK_Этаж, ADSK_Огнестойкость",
        },
        { "Элементы раздела АР": "Перекрытие", LOD: "Larsen", LOI: "Shaw" },
        { "Элементы раздела АР": "Пол", LOD: "Geneva", LOI: "Wilson" },
      ],
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
  // props: {
  // 	Stage_P: {
  // 		required: false,
  // 		default: 'vTerminal'
  // 	},
  // 	Stage_RD: {
  // 		required: false,
  // 		default: 'vTerminal'
  // 	},
  //   },

  methods: {
    check_stage_p() {
      if (!this.Stage_P) {
        this.Stage_P = stage_p.text;
      } else {
        this.Stage_P = null;
      }
    },
    // check_visible_stage_p() {
    //   if (this.p_stage_value.includes("АР")) {
    //     this.visible_ar = true;
    //   } else {
    //     this.visible_ar = false;
    //   }
    // },
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
    // roll(){
    // 	const data_form = [this.input_atacs,this.v_slct_hit,this.v_slct_wound,this.v_slct_arm,this.v_slct_fnp]
    // 	// const data_to_funct = []
    // 	// data_to_funct.push(data_form[0])
    // 	const result_and_answer = poll_funct(data_form)
    // 	this.answer_data = result_and_answer[1]
    // 	this.items = result_and_answer[0]
    // 	console.log(result_and_answer)
    // },
    // roll_d(){
    // 	this.answer_data = rand_dice2(this.input_dice_value)
    // }
  },
  computed: {
    state() {
      return this.value.length === 2;
    },
  },
};

//#region comands functions
function poll_funct(data_form) {
  let text_answer = "";
  let string_list = [];
  let dice_to_hit = {
    "1+": 1,
    "2+": ((100 / 6) * 5) / 100,
    "3+": ((100 / 6) * 4) / 100,
    "4+": ((100 / 6) * 3) / 100,
    "5+": ((100 / 6) * 2) / 100,
    "6+": ((100 / 6) * 1) / 100,
  };
  let dice_to_wund = { "1+": 6, "2+": 5, "3+": 4, "4+": 3, "5+": 2, "6+": 1 };
  let dice_armor_save = {
    No: null,
    "2+": 1,
    "3+": 2,
    "4+": 3,
    "5+": 4,
    "6+": 5,
  };
  let dice_fnp = { No: null, "2+": 1, "3+": 2, "4+": 3, "5+": 4, "6+": 5 };
  const i_atk = to_int(data_form[0]);
  if (i_atk <= 100) {
    const i_hit = data_form[1];
    const i_wnd = data_form[2];
    const i_arm = data_form[3];
    const i_fnp = data_form[4];
    const atk = i_atk;
    const hit = dice_to_hit[i_hit];
    const wnd = dice_to_wund[i_wnd];
    const arm = dice_armor_save[i_arm];
    const fnp = dice_fnp[i_fnp];
    const brn_p = dice_drop(hit, wnd, arm, fnp);
    // test_text += "\n brn_p = " + brn_p; // TEST TEXT
    let ok_nums_list = [[0], [0]];
    let brnpsum = [];
    const n = atk;
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    for (const k of Array(atk).keys()) {
      const brn_f = 100 * brn(brn_p, k, n);
      // console.log(brn_f)
      brnpsum.push(brn_f);
      const brn_reduce = brnpsum.reduce(reducer);
      const itogo_int = to_int(Math.round(brn_reduce));
      // let itogo_int = Math.floor(brn_reduce)
      const itogo_float = to_float_two(brn_reduce);
      ok_nums_list.push([itogo_int, itogo_float]);
    }
    ok_nums_list.shift();
    let zero_to = 0;
    let zero_wound = 0;
    let hundred_from = 0;
    let hundred_wound = 0;
    let count = 0;
    // console.log(ok_nums_list.length)
    // console.log(ok_nums_list)
    let result_list_test = [];
    let list_of_object = [];
    for (const [i, num] of ok_nums_list.entries()) {
      let num_minus_one = 0;
      let current_num = num[0];
      // let i_or_range = i
      // Переделать логику для проверки соответвия двух значений и создания 0-10 групп вундов
      // bootstrap@4.4.1 requires a peer of jquery@1.9.1
      if (i != 0) {
        num_minus_one = ok_nums_list[i - 1][0];
        count += 1;
      }
      let f_boll = false;
      let t_boll = false;
      for (const obj of list_of_object) {
        if (current_num == obj["from"]) {
          obj["atk"].push(i);
          f_boll = true;
        }
      }
      if (f_boll == false) {
        if (num_minus_one != current_num) {
          list_of_object.push(create_object(i, num_minus_one + 1, current_num));
        } else {
          list_of_object.push(create_object(i, num_minus_one, current_num));
        }
      }
    }
    // console.log(list_of_object)
    for (const [i, obj] of list_of_object.entries()) {
      const atks = obj["atk"];
      if (atks.length > 1) {
        const start_atk = atks[0];
        const end_atk = atks[atks.length - 1];
        string_list.push(
          result_pack(
            start_atk + " - " + end_atk + " roll D" + (end_atk - start_atk + 1),
            obj["from"],
            obj["to"]
          )
        );
      } else if (
        i < list_of_object.length - 1 &&
        list_of_object[i + 1]["from"] == obj["to"]
      ) {
        string_list.push(result_pack(atks[0], obj["from"], obj["to"] - 1));
      } else {
        string_list.push(result_pack(atks[0], obj["from"], obj["to"]));
      }
    }
  } else {
    text_answer +=
      "\n Слишком большое значение атак, максимальное количество атак 100 \n";
  }

  return [string_list, text_answer];
}
// pakc value to dict
function result_pack(wound_value, from_value, to_value) {
  return { from: from_value, to: to_value, wound: wound_value };
}
function create_object(i, from_value, to_value) {
  return { from: from_value, to: to_value, atk: [i] };
}
function roll_funct2(b_text, list_of_str, text_answer, sprt) {
  list_of_str = b_text.split(sprt);
  if ((list_of_str.length == 2) & (b_text.split(sprt)[1] <= 100)) {
    let dic_string_list = rand_dice2(b_text.split(sprt)[1]);
    text_answer += dict_to_string(dic_string_list);
  } else if (
    (list_of_str.length > 2) &
    (b_text.split(sprt)[1] <= 100) &
    (b_text.split(sprt)[2] <= 100)
  ) {
    let dic_string_list = rand_dice2(
      b_text.split(sprt)[1],
      b_text.split(sprt)[2]
    );
    text_answer += dict_to_string(dic_string_list);
  } else {
    text_answer +=
      "Слишком большие значения, максимальное количество граней кубика 100, максимальное количество бросков 100.";
  }
  // test_text += "list_of_str.length: " + list_of_str.length + "\n"; // TEST TEXT
  return text_answer; // return { list_of_str, text_answer };
}
//#endregion comands functions
//#region core func
function fc(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * fc(n - 1);
}
function brn(p, k, n) {
  return (fc(n) / (fc(k) * fc(n - k))) * (p ** k * (1 - p) ** (n - k));
}
function dice_drop(dice_to_hit, dice_to_wund, dice_armor_save, dice_fnp) {
  let value_p = "";
  if ((dice_armor_save == null) & (dice_fnp == null)) {
    value_p = (dice_to_hit / 6) * dice_to_wund;
  } else if ((dice_armor_save != null) & (dice_fnp == null)) {
    value_p = (((dice_to_hit / 6) * dice_to_wund) / 6) * dice_armor_save;
  } else if ((dice_armor_save == null) & (dice_fnp != null)) {
    value_p = (((dice_to_hit / 6) * dice_to_wund) / 6) * dice_fnp;
  } else if ((dice_armor_save != null) & (dice_fnp != null)) {
    value_p =
      (((((dice_to_hit / 6) * dice_to_wund) / 6) * dice_armor_save) / 6) *
      dice_fnp;
  } else {
    value_p = "how do you get whis? post me a later";
  }
  return value_p;
}
function to_int(string) {
  return parseInt(string, 10);
}
function to_float_two(string) {
  return string.toFixed(2);
}
function rand_dice2(max, count = "1") {
  let dice_list_result = [];
  let dice_dic_results = {};
  let count_int = to_int(count);
  for (const k of Array(count_int).keys()) {
    dice_list_result.push(Math.floor(Math.random() * max) + 1);
  }
  for (const dice of dice_list_result) {
    dice_dic_results[dice] = [];
  }
  for (const dice of dice_list_result) {
    dice_dic_results[dice].push(dice);
  }
  return dice_list_result[0]; //dice_dic_results;
}
function dict_to_string(dic_string_list) {
  let string_list = [];
  for (const keys_and_items of Object.entries(dic_string_list)) {
    string_list.push(
      "```" +
        "_[" +
        keys_and_items.join("]=[") +
        "]_" +
        "```" +
        "*" +
        "общее количество: " +
        keys_and_items[1].length +
        "*"
    );
  }
  let one_string = string_list.join("\n");
  return one_string;
}
//#endregion  core func
</script>

<style>
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
