<template>
  <div id="search">
    <p v-if="$route.path != '/'">{{ $tc('SEARCH') }}</p>
    <b-list-group horizontal class="need-location-group">
      <!-- <b-list-group-item> -->
        <!-- <h6>{{ $t('sidebar.what') }}</h6> -->
        <b-form-select :value="need" :options="needOptions" @change="(opt) => $emit('need-selected', opt)" />
      <!-- </b-list-group-item> -->
      <!-- <b-list-group-item> -->
        <!-- <h6>{{ $t('sidebar.where') }}</h6> -->
        <b-form-select :value="nearLocation" :options="locationOptions" @change="(opt) => $emit('near-location-selected', opt)" />
      <!-- </b-list-group-item> -->
    </b-list-group>
<!--     <b-list-group class="need-location-group">
      <b-list-group-item variant="sideNav">
        <h6>{{ $t('searchbar.what-do-you-need') }}</h6>
        <b-form-select :value="need" :options="needOptions" @change="(opt) => $emit('need-selected', opt)" />
      </b-list-group-item>
      <b-list-group-item variant="sideNav">
        <h6>{{ $t('searchbar.where') }}</h6>
        <b-form-select :value="day" :options="dayOptions" @change="(opt) => $emit('day-selected', opt)" />
      </b-list-group-item>
    </b-list-group> -->
  </div>
</template>

<script>


export default {
  name: 'search',
  data() {
    return {
      location: null
    }
  },
  props: {
    need: String,
    nearLocation: String,
    userLocation: { lat: Number, lon: Number }
  },
  computed: {
    needOptions() {
      return [
        { value: null, text: this.$tc('sidebar.what', 1), disabled: true },
        { value: 'meal', text: this.$tc('category.meal', 2) },
        { value: 'free_grocery', text: this.$tc('category.free_grocery', 2) },
        { value: 'snap_wic_retailer', text: this.$tc('category.snap_wic_retailer', 2) }
      ]
    },
    locationOptions() {
      let locations =  [
        { value: null, text: this.$tc('sidebar.where', 1), disabled: true },
        { value: 'anywhere' , text: this.$tc('county.anywhere', 1) },
        { value: 'alameda' , text: this.$tc('county.alameda') },
        { value: 'san-francisco' , text: this.$tc('county.san-francisco') }
      ]
      // uncomment to enable user current location
      // if (this.userLocation && this.userLocation.lat && this.userLocation.lon) {
      //   locations.splice(1, 0, { value: 'current-location', text: this.$tc('sidebar.current_location', 1) })
      // }

      return locations
    }
  }
}
</script>

<style lang="css" scoped>
.custom-select {
  font-size: 0.8rem;
  min-width: 100px;
  max-width: 300px;
  width: 48%;
  margin: 0 auto;
  border-radius: 0px;
}

@media (min-width: 768px) {
  .custom-select {
    font-size: 0.95rem;
  }
}

#search {
  margin: 3px auto;
  width: 100%;
  font-size: 0.75rem;
  display: flex;
  flex-direction: column;
  /*padding: 2px 0px;*/
}

#search > p {
  /*padding-left: 3px !important;*/
  margin: 0 auto !important;
  /*text-decoration: underline;*/
}

.list-group-item {
  /*border: none !important;*/
  /*padding: 0 1.25rem;*/
  /*border-bottom: none;*/
  /*min-width: 100px;*/
  /*width: 50%;*/
  /*justify-content: center;*/
  /*display: flex;*/
  /*margin: auto;*/
}

.need-location-group {
  /* padding: 1rem 0 0 0 !important; */
  /*align-items: center;*/
  /*justify-content: center;*/
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  /* border-bottom: solid 1px rgba(0, 0, 0, 0.125); */
  padding: 0;
}




</style>