<template>
  <v-btn
    :style="{color: color}"
    depressed
    color="white"
    block
    v-show="itemsLength>showItems"
    @click="onClickButton()"
  >{{buttonTitle}}</v-btn>
</template>

<script>
export default {
  name: "MoreLessButton",
  props: {
    color: {
      type: String,
      default: "#419bf9"
    },
    itemsLength: {
      type: Number
    },
    showItems: {
      type: Number,
      default: 4
    }
  },
  data() {
    return {
      isPressed: false
    };
  },
  computed: {
    itemsNumber() {
      return this.itemsLength - this.showItems;
    },
    buttonTitle() {
      if (this.isPressed) {
        return "LESS";
      } else {
        return `+ ${this.itemsNumber} MORE`;
      }
    }
  },
  methods: {
    onClickButton() {
      this.isPressed = !this.isPressed;
      let showIndex;
      this.isPressed
        ? (showIndex = this.itemsLength)
        : (showIndex = this.showItems);
      this.$emit("clicked", showIndex);
    }
  }
};
</script>