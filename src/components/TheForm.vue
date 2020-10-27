<template>
<div>
 <form v-on:submit.prevent="submitMe" novalidate>
   <h1 class="is-size-1 has-text-centered mt-5">Registration</h1>
  
   <div class="field is-horizontal">
  <div class="field-label is-normal">
    <label class="label">Your name</label>
  </div>
  <div class="field-body">
    <div class="field">
      <p class="control is-expanded has-icons-left">
        <input v-model.trim="name" :class="{'is-danger': $v.name.$error}" class="input"  type="text" placeholder="Name">
        <span class="icon is-small is-left">
          <i class="fas fa-user"></i>
        </span>
      </p>
       <p  v-if="$v.name.$dirty && !$v.name.required" class="help is-danger">
        This field is required
      </p>
     
    </div>

  </div>
</div>



<div class="field is-horizontal">
  <div class="field-label is-normal">
    <label class="label">Your email</label>
  </div>
  <div class="field-body">
       <div class="field">
      <p class="control is-expanded has-icons-left has-icons-right">
        <input class="input is-success1" v-model="email"  :class="{'is-danger': $v.email.$error}" type="email" placeholder="name@comp.cc" value="alex@smith.com">
        <span class="icon is-small is-left">
          <i class="fas fa-envelope"></i>
        </span>
        <span class="icon is-small is-right">
          <i class="fas fa-check"></i>
        </span>
        <p  v-if="$v.email.$dirty && !$v.email.required" class="help is-danger">
        This field is required
        </p>
         <p  v-if="$v.email.$dirty && !$v.email.email" class="help is-danger">
          This field is incorect
        </p>
      </p>
    </div>
  </div>
</div>

<div class="field is-horizontal">
  <div class="field-label is-normal">
    <label class="label">Country</label>
  </div>
  <div class="field-body">
    <div class="field is-narrow">
      <div class="control">
        <div class="select is-fullwidth" :class="{'is-danger': $v.country.$error}">
          <select v-model="country" > 
            <option value=''>--- select country---</option>
            <option value="1">RO</option>
            <option value="2">UK</option>
            <option value="3">USA</option>
          </select>
        </div>
        <p  v-if="$v.country.$dirty && !$v.country.required" class="help is-danger">
        This field is incorect.
      </p>
      </div>
    </div>
  </div>
</div>




<div class="field is-horizontal">
  <div class="field-label is-normal">
    <label class="label">Password</label>
  </div>
  <div class="field-body">
    <div class="field">
      <div class="control">
        <input v-model="pass" :class="{'is-danger': $v.pass.$error}"  class="input" type="password" placeholder="Password">
      </div>
        <p  v-if="$v.pass.$dirty && !$v.pass.required" class="help is-danger">
        This field is required.
      </p>
    </div>
  </div>
</div>

<div class="field is-horizontal">
  <div class="field-label is-normal">
    <label class="label">Password confirmation</label>
  </div>
  <div class="field-body">
    <div class="field">
      <div class="control">
        <input v-model="passConfirm"  :class="{'is-danger': $v.passConfirm.$error}"  class="input" type="password" placeholder="Password">
      </div>
        <p  v-if="$v.passConfirm.$dirty && !$v.passConfirm.required" class="help is-danger">
        This field is required.
      </p>     
        <p  v-if="$v.passConfirm.$dirty && !$v.passConfirm.sameAsPass" class="help is-danger">
        This field is not the same as password.
      </p>     
      
    </div>
  </div>
</div>

<div class="field is-horizontal">
   <div class="field-label is-normal">
    <label class="label"></label>
  </div>
  <div class="field-body">
    <div class="field is-narrow">
      <div class="control">
        <label class="radio">
          <input type="checkbox" v-model="consent" :class="{'is-danger': $v.consent.$error}" >
          I agree with terms and conditions.
        </label>  
        <p  v-if="$v.consent.$dirty && !$v.consent.mustBeTrue" class="help is-danger">
        You must consent with terms and condition.
      </p>      
      </div>
    </div>
  </div>
</div>


<div class="field is-horizontal">
  <div class="field-label">
    <!-- Left empty for spacing -->
  </div>
  <div class="field-body">
    <div class="field">
      <div class="control">
        <button class="button is-primary">
          Register
        </button>
      </div>
    </div>
  </div>
</div>
 </form>
 </div>
</template>

<script>
import { required, email, sameAs } from "vuelidate/lib/validators";

//agree with terms and conditions
const mustBeTrue = (value) => {
  return value === true;
};

export default {
  name: "TheForm",

  data() {
    return {
      name: "",
      email: "",
      country: "",
      pass: "",
      passConfirm: "",
      consent: false,
    };
  },
  validations: {
    name: { required },
    email: { required, email },
    country: { required },
    consent: { mustBeTrue },
    pass: { required },
    passConfirm: { required, sameAsPass: sameAs("pass") },
  },
  methods: {
    submitMe() {
      // force touch to verify all fields
      console.warn(this.$v.$touch());
      if (!this.$v.$invalid) console.log("submiting ...." + this.name);
    },
  },
};
</script>

