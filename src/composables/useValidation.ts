import { ref, reactive, watch, computed } from "vue";

export const useValidation = (formValues: any, rules: any) => {
  const errors = reactive<{ [key: string]: string }>({});
  const isError = ref(true);

  const formFields = computed(() => Object.keys(formValues));

  watch([formValues, rules], () => {
    console.log("fields", formFields.value);
    for (const field of formFields.value) {
      const rule = rules[field];
      if (rule.required) {
        if (!formValues[field]) {
          errors[field] = "Field is required";
        } else {
          delete errors[field];
        }
      }
      if (rule.minLength) {
        if (formValues[field].length < rule.minLength) {
          errors[field] = `Min length is ${rule.minLength}`;
        } else {
          delete errors[field];
        }
      }

      if (rule.maxLength) {
        if (formValues[field].length > rule.maxLength) {
          errors[field] = `Max length is ${rule.maxLength}`;
        } else {
          delete errors[field];
        }
      }
    }
    isError.value = Object.keys(errors).length > 0;
  });

  return {
    isError,
    errors,
  };
};
