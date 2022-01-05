<template>
  <div class="main-form">
    <div class="text-center">
      <TheLogo />
    </div>
    <div class="container">
      <h1>Welcome!</h1>
      <p style="margin: 0">We need your feedback for our codebrew.</p>
      <div class="spacer"></div>
      <van-form @submit="writeToFirestore">
        <van-field
          v-model="email"
          name="Email"
          label="E-mail"
          placeholder="your_email@example.com"
          :rules="[{ required: true }]"
        />

        <van-field name="rate" label="Rate">
          <template #input>
            <van-rate v-model="rating" />
          </template>
        </van-field>

        <van-field
          v-model="comment"
          rows="2"
          autosize
          label="Comment"
          type="textarea"
          maxlength="250"
          placeholder="Comment here ..."
          show-word-limit
          :rules="[{ required: true }]"
        />
        <div class="spacer">
          <van-button round block color="#473b2f" native-type="submit">
            Submit
          </van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',

  data() {
    return {
      email: '',
      rating: 4,
      comment: '',
    }
  },
  methods: {
    onSubmit(values) {
      console.log(this.$supabase)
    },
    async writeToFirestore() {
      const { data, error } = await this.$supabase
        .from('feedback')
        .insert([
          { email: this.email, rating: this.rating, comment: this.comment },
        ])

      console.log(data)
      console.log(error)
    },
  },
}
</script>

<style>
.main-form {
  min-height: 100%;
}

.text-center {
  text-align: center;
}

.van-form {
  border: 1px;
  border-radius: 50%;
}

.container {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.spacer {
  margin-top: 2rem;
}
</style>
