<template>
  <div class="filters" v-if="filterList[0] != null">
    <b-form-checkbox
      v-for="(item, index) in filterList"
      v-model="selected"
      v-bind:key="index"
      :value="item.var"
      @change="$emit('box-selected', item.var)"
    >
      {{ $tc(item.label, 2) }}
    </b-form-checkbox>
  </div>
</template>

<script>
import FiltersEnum from '../lib/enums/FiltersEnum'
export default {
  name: 'Filters',
  props: {
    need: String,
    activeFilters: Array
  },
  data() {
    return {
      selected: []
    }
  },
  methods: {
    boxSelected: function (content) {
      this.$emit('box-selected', content)
    }
  },
  watch: {
    activeFilters: function (val) {
      if (val.length == 0) {
        this.selected = []
      }
    }
  },
  computed: {
    // Displayed filters
    filterList() {
      /**
       * TODO(ISSUE #84)
       * Labels Should all have new 'i18n' prefix
       */
      switch (this.need) {
        case FiltersEnum.SNAP_WIC_RETAILER:
          return [
            { var: 'wic', label: 'label.wic' },
            { var: 'special_hours', label: 'label.special_hours' },
            { var: 'safe_pick_up', label: 'label.safe_pick_up' },
            { var: 'farmers_market', label: 'label.farmers_market' }
          ]
        case FiltersEnum.SCHOOL_MEAL:
          return [
            { var: 'open_today', label: 'label.open_today' },
            { var: 'all_children', label: 'label.all_children' },
            { var: 'enrolled_children', label: 'label.enrolled_children' }
          ]
        case FiltersEnum.FREE_FOOD:
          return [{ var: 'open_today', label: 'label.open_today' }]
        case FiltersEnum.MENTAL_HEALTH:
          return [
            { var: 'in_person', label: 'label.in_person' },
            { var: 'telehealth', label: 'label.telehealth' }
          ]
        case FiltersEnum.LEGAL_ASSISTANCE:
          return [
            { var: 'legal_criminal', label: 'legal.legal_criminal' },
            { var: 'legal_domviolence', label: 'legal.legal_domviolence' },
            { var: 'legal_worker_protection', label: 'legal.legal_worker_protection' },
            { var: 'legal_healthcare', label: 'legal.legal_healthcare' },
            { var: 'legal_housing', label: 'legal.legal_housing' },
            { var: 'legal_immigration', label: 'legal.legal_immigration' }
          ]
        case FiltersEnum.HEALTH:
          return [
            { var: 'in_person', label: 'label.in_person' },
            { var: 'telehealth', label: 'label.telehealth' },
            { var: 'med_testing', label: 'health.med_testing' },
            { var: 'med_primary_care', label: 'health.med_primary_care' },
            { var: 'med_pediatrics', label: 'health.med_pediatrics' },
            { var: 'med_senior', label: 'health.med_senior' },
            { var: 'med_women', label: 'health.med_women' },
            { var: 'med_urgent_care', label: 'health.med_urgent_care' },
            { var: 'med_dental', label: 'health.med_dental' },
            { var: 'med_vision', label: 'health.med_vision' },
            { var: 'med_pharmacy', label: 'health.med_pharmacy' },
            { var: 'med_mental_health', label: 'health.med_mental_health' },
            { var: 'med_hotline', label: 'health.med_hotline' },
            { var: 'med_addiction', label: 'health.med_addiction' },
            { var: 'med_domestic_violence', label: 'health.med_domestic_violence' }
          ]
        case FiltersEnum.DV_RESOURCES:
          return [
            { var: 'dv_medical', label: 'label.dv_medical' },
            { var: 'dv_mental_health', label: 'label.dv_mental_health' },
            { var: 'dv_housing', label: 'label.dv_housing' },
            { var: 'dv_legal', label: 'label.dv_legal' },
            { var: 'dv_crisis', label: 'label.dv_crisis' }
          ]
        case FiltersEnum.CASH_ASSISTANCE:
          return [
            { var: 'fin_grocery', label: 'label.fin_grocery' },
            { var: 'fin_housing', label: 'label.fin_housing' },
            { var: 'fin_legal', label: 'label.fin_legal' },
            { var: 'fin_medical', label: 'label.fin_medical' },
            { var: 'fin_utilities', label: 'label.fin_utilities' }
          ]
        default:
          return [null]
      }
    }
  }
}
</script>

<style lang="scss">
.filters {
  position: relative;
  justify-content: space-evenly;
  z-index: 3000;
  width: 100%;
  font-size: 0.8em;
  padding: 8px 16px;
  background-color: white;
  border-top: 1px solid rgba(0, 0, 0, 0.125);
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.125);
}

.custom-checkbox {
  color: #495057;
  background: white;
  margin-bottom: 4px;
  width: 50%;
  display: inline-block !important;
  line-height: 1;
}

.custom-control-label {
  padding-top: 5px;
}

.custom-checkbox .custom-control-input:checked ~ .custom-control-label::before {
  background-color: theme-color(primary);
  border-color: rgba(0, 0, 0, 0.3);
}
</style>
