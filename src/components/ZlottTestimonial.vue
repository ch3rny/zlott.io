<template>
  <div class="testimonial">
    <h4>{{title}}</h4>
    <p v-html="text"></p>
    <div class="testimonial-by">
      <img :src="author.avatar" :alt="author.name" class="avatar">
      <p>
        {{author.name}}
        <br>
        <span>{{author.company}}</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ZlottTestimonial",
  props: {
    title: String,
    text: String,
    author: Object
  }
};
</script>
<style lang="scss" scoped>
.testimonial {
  margin: 0 15px;
  border: 1px solid $border-color;
  padding: 20px;
  border-radius: 5px;
  margin-bottom: 30px;
  border-top-width: 4px;
  p {
    font-size: 16px;
    line-height: 30px;
    border-bottom: 1px solid #e4e4e4;
    padding-bottom: 15px;
    margin-bottom: 20px;
  }
}
h4 {
  font-size: 21px;
  line-height: 36px;
  margin: 0 0 15px;
  text-align: center;
  padding-bottom: 10px;
  border-bottom: 1px solid #e4e4e4;
}

.testimonial-by {
  padding-left: 65px;
  position: relative;
  p {
    font-size: 16px;
    line-height: 24px;
    margin: 0;
  }
  span {
    color: #88898b;
  }
}
img {
  width: 50px;
  height: 50px;
  position: absolute;
  top: 0;
  left: 0;
}
.avatar {
  border-radius: 50%;
  border: 1px solid #dadada;
}
</style>
