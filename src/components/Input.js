import React from "react";
import { Input, FormFeedback } from "reactstrap";
import { Field as FormikField } from "formik";

const BootInput = ({ field, form: { touched, errors }, ...props }) => (
  <div>
    <Input
      invalid={!!(touched[field.name] && errors[field.name])}
      {...field}
      {...props}
    />
    {touched[field.name] && errors[field.name] && (
      <FormFeedback>{errors[field.name]}</FormFeedback>
    )}
  </div>
);

const BootInputComponent = (props) => (
  <FormikField {...props} component={BootInput} />
);

export default BootInputComponent;
