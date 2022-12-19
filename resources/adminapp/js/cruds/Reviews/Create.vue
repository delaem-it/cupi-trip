<template>
  <div class="container-fluid">
    <form @submit.prevent="submitForm">
      <div class="row">
        <div class="col-md-12">
          <div class="card">
            <div class="card-header card-header-primary card-header-icon">
              <div class="card-icon">
                <i class="material-icons">add</i>
              </div>
              <h4 class="card-title">
                {{ $t('global.create') }}
                <strong>{{ $t('cruds.review.title_singular') }}</strong>
              </h4>
            </div>
            <div class="card-body">
              <back-button></back-button>
            </div>
            <div class="card-body">
              <bootstrap-alert />
              <div class="row">
                <div class="col-md-12">
                  <div class="form-group">
                    <label>{{ $t('cruds.review.fields.name') }}</label>
                    <div
                      class="form-group bmd-form-group"
                      :class="{
                        'has-items': entry.name,
                        'is-focused': activeField == 'name'
                      }"
                    >
                      <label class="bmd-label-floating">{{
                        $t('cruds.review.fields.name_helper')
                      }}</label>
                      <input
                        class="form-control"
                        type="text"
                        :value="entry.name"
                        @input="updateName"
                        @focus="focusField('name')"
                        @blur="clearFocus"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <label>{{ $t('cruds.review.fields.email') }}</label>
                    <div
                      class="form-group bmd-form-group"
                      :class="{
                        'has-items': entry.email,
                        'is-focused': activeField == 'email'
                      }"
                    >
                      <label class="bmd-label-floating">{{
                        $t('cruds.review.fields.email_helper')
                      }}</label>
                      <input
                        class="form-control"
                        type="text"
                        :value="entry.email"
                        @input="updateEmail"
                        @focus="focusField('email')"
                        @blur="clearFocus"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <label>{{ $t('cruds.review.fields.text') }}</label>
                    <div
                      class="form-group bmd-form-group"
                      :class="{
                        'has-items': entry.text,
                        'is-focused': activeField == 'text'
                      }"
                    >
                      <label class="bmd-label-floating">{{
                        $t('cruds.review.fields.text_helper')
                      }}</label>
                      <input
                        class="form-control"
                        type="text"
                        :value="entry.text"
                        @input="updateText"
                        @focus="focusField('text')"
                        @blur="clearFocus"
                      />
                    </div>
                  </div>
                  <div class="form-group bmd-form-group form-check has-items">
                    <label class="bmd-label-floating">{{
                      $t('cruds.review.fields.moderate_helper')
                    }}</label>
                    <label class="form-check-label"
                      ><input
                        class="form-check-input"
                        type="checkbox"
                        :value="entry.moderate"
                        :checked="entry.moderate"
                        @change="updateModerate"
                      /><span class="form-check-sign"
                        ><span class="check"></span></span
                      >{{ $t('cruds.review.fields.moderate') }}</label
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="card-footer">
              <vue-button-spinner
                class="btn-primary"
                :status="status"
                :isLoading="loading"
                :disabled="loading"
              >
                {{ $t('global.save') }}
              </vue-button-spinner>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data() {
    return {
      status: '',
      activeField: ''
    }
  },
  computed: {
    ...mapGetters('ReviewsSingle', ['entry', 'loading'])
  },
  beforeDestroy() {
    this.resetState()
  },
  methods: {
    ...mapActions('ReviewsSingle', [
      'storeData',
      'resetState',
      'setName',
      'setEmail',
      'setText',
      'setModerate'
    ]),
    updateName(e) {
      this.setName(e.target.value)
    },
    updateEmail(e) {
      this.setEmail(e.target.value)
    },
    updateText(e) {
      this.setText(e.target.value)
    },
    updateModerate(e) {
      this.setModerate(e.target.checked)
    },
    submitForm() {
      this.storeData()
        .then(() => {
          this.$router.push({ name: 'reviews.index' })
          this.$eventHub.$emit('create-success')
        })
        .catch(error => {
          this.status = 'failed'
          _.delay(() => {
            this.status = ''
          }, 3000)
        })
    },
    focusField(name) {
      this.activeField = name
    },
    clearFocus() {
      this.activeField = ''
    }
  }
}
</script>
