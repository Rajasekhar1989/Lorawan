<template>
  <div :id="id" class="spin-control" v-bind="$attrs">
    <label :for="id">{{ label }}</label>
    <div class="control-container">
      <ion-button @click="decrement"><span v-html="$store.state.squareminus"></span></ion-button>
      <input
        v-model="localValue"
        :id="id"
        type="number"
        :min="min"
        :max="max"
        :step="step"
        :aria-labelledby="id"
        @blur="handleBlur"
      />
      <ion-button @click="increment"><span v-html="$store.state.squareplus"></span></ion-button>
    </div>
  </div>
</template>

<script>
import eventBus from "../assets/scripts/eventbusnav";

export default {
  name: "SpinControl",
  inheritAttrs: false,
  props: {
    id: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    value: {
      type: Number,
      default: 0,
    },
    min: {
      type: Number,
      default: 0,
    },
    max: {
      type: Number,
      default: 31.5,
    },
    step: {
      type: Number,
      default: 0.5,
    },
  },
  data() {
    return {
      localValue: this.value,
    };
  },
  watch: {
    localValue(newValue) {
        let evtName = "evtspinchg" + this.$route.path.split("/")[2] ;
        console.log("Spin Change Event : ", evtName);
        
      eventBus().emitter.emit(evtName, { id: this.id, value: newValue });
    },
  },
  mounted() {
    eventBus().emitter.on("updatevalue", (updates) => {
        const update = updates.find((item) => item.id === this.id);
        if (update) {
            this.localValue = Math.max(this.min, Math.min(update.value, this.max));
            this.updateValue();
        }
    });

  },
  unmounted() {
    eventBus().emitter.off("updatevalue");
  },
  methods: {
    increment() {
        if (this.localValue < this.min) {
            this.localValue = this.min;
        } else if (this.localValue > this.max) {
            this.localValue = this.max;
        } else {
            this.localValue = Math.min(this.localValue + this.step, this.max);
        }
        this.updateValue();
    },
    decrement() {
        if (this.localValue < this.min) {
            this.localValue = this.min;
        } else if (this.localValue > this.max) {
            this.localValue = this.max;
        } else {
            this.localValue = Math.max(this.localValue - this.step, this.min);
        }
        this.updateValue();
    },

    handleBlur() {
      this.updateValue();
    },
    updateValue() {
      let roundedValue = Math.round(this.localValue * 2) / 2;
      if (this.localValue % 1 >= 0.1 && this.localValue % 1 <= 0.4) {
        roundedValue = Math.floor(this.localValue);
      }
      this.localValue = roundedValue;
    },
  },
};
</script>

<style scoped>
.spin-control {
  display: flex;
  flex-direction: column;
  margin: 10px;
}

.control-container {
  display: flex;
  align-items: center;
}

button {
  padding: 5px 10px;
  font-size: 16px;
  cursor: pointer;
}

input {
  width: 60px;
  padding: 5px;
  text-align: center;
  font-size: 16px;
}
</style>
