<template>
  <div class="main-form">
    <div class="text-center">
      <TheLogo />
    </div>
    <div class="container">
      <h1>Welcome!</h1>
      <p v-if="!hasSubmit" style="margin: 0">
        We need your feedback for our CodeBrew.
      </p>
      <p v-else style="margin: 0">Thank you for your feedback! 😎</p>
      <div class="spacer"></div>
      <van-form @submit="onSubmit">
        <van-field
          v-model="email"
          name="Email"
          label="E-mail"
          placeholder="your_email@example.com"
          :rules="[{ required: true }]"
          :readonly="hasSubmit"
        />

        <van-field name="rate" label="Rate">
          <template #input>
            <van-rate v-model="rating" :readonly="hasSubmit" />
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
          :readonly="hasSubmit"
        />
        <div v-if="!hasSubmit" class="spacer">
          <van-button
            v-if="!loading"
            round
            block
            color="#473b2f"
            native-type="submit"
            :disabled="hasSubmit"
          >
            Submit
          </van-button>
          <van-loading v-else />
        </div>
        <div class="spacer"></div>

        <van-button
          v-if="hasSubmit"
          round
          block
          color="#473b2f"
          native-type="button"
          :disabled="!hasSubmit"
          @click="show = true"
        >
          Show Coupon
        </van-button>

        <div class="spacer"></div>
      </van-form>

      <van-popup
        v-model="show"
        round
        closeable
        position="top"
        :style="{ height: '85%' }"
      >
        <div class="container">
          <div class="text-center">
            <TheLogo :width="175" :height="175" />
          </div>
          <div class="container">
            <h3>
              Thank you very much <br />
              for your feedback!
            </h3>
            <p>
              Screenshot this page for additional
              <strong>10% discount</strong> on your next purchase! ☕
            </p>
            <p>
              Redeem here:
              <a
                href="https://wa.me/+628158219931?text=Hello%20CodeBrew%2C%20I%20want%20to%20use%20my%20coupon"
                target="_blank"
                rel="nofollow noreferrer"
                >WA</a
              >
            </p>
            <p style="text-decoration: underline">{{ email }}</p>
            <small>{{ today }}</small>
            <div class="spacer"></div>
            <small style="color: red"
              >*valid until {{ getTwoWeeksAfter() }}</small
            >
          </div>
        </div>
      </van-popup>
      <div class="spacer"></div>
      <p style="margin: 0">
        📷IG:
        <a
          href="https://instagram.com/codebrew.official"
          target="_blank"
          rel="nofollow noreferrer"
          ><u>codebrew.official</u></a
        >
      </p>
      <p>
        📲WA:
        <a
          href="https://wa.me/+628158219931?text=Hello%20CodeBrew"
          target="_blank"
          rel="nofollow noreferrer"
          ><u>Click here</u></a
        >
      </p>
      <div class="spacer"></div>
      <small>
        CODEBREW <span style="font-size: 1.05rem">©️</span>
        {{ today.getFullYear() }}</small
      ><small
        >Powered by
        <a
          href="https://github.com/elanode"
          target="_blank"
          rel="nofollow noreferrer"
          ><u>Elanode</u></a
        >
        🚀</small
      >
      <div class="spacer"></div>
    </div>
  </div>
</template>

<script>
import { Dialog, Notify } from 'vant'
export default {
  name: 'IndexPage',

  data() {
    return {
      email: '',
      rating: 4,
      comment: '',
      loading: false,
      show: false,
      hasSubmit: false,
      today: new Date(),
    }
  },
  methods: {
    async onSubmit(values) {
      try {
        await Dialog.confirm({
          title: 'Confirmation',
          message: `E-mail: ${this.email}<br /> Rating: ${this.rating} <br /> Comment: ${this.comment}`,
          cancelButtonText: 'Cancel',
          confirmButtonText: 'Confirm',
        })
      } catch (e) {
        return
      }

      this.loading = true
      const { error } = await this.$supabase
        .from('feedback')
        .insert(
          { email: this.email, rating: this.rating, comment: this.comment },
          { returning: 'minimal' }
        )

      this.loading = false
      if (error) {
        Notify('You can only submit once')
        return
      }

      this.show = true
      this.hasSubmit = true
    },
    getTwoWeeksAfter() {
      const now = this.today
      now.setDate(now.getDate() + 1 * 7)
      return now
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
  padding-left: 10px;
  padding-right: 10px;
}

.spacer {
  margin-top: 2rem;
}

input[type='text'],
textarea {
  font-size: 16px;
}
</style>
