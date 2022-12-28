import { Formik, Form, Field } from 'formik';

export const MaterialEditor = ({ onSubmit }) => {
  const handleSubmit = async (values, actions) => {
    await onSubmit(values);
    actions.setSubmitting(false);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ title: '', url: 'https://' }}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <label>
            Title
            <Field name="title" type="text" />
          </label>
          <br />
          <label>
            Image
            <Field name="url" type="url" />
          </label>
          <button type="submit" disabled={isSubmitting}>
            Add material
          </button>
        </Form>
      )}
    </Formik>
  );
};
