import { Field, Form, Formik } from 'formik';
import React, { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Button from '../../components/button/index';
import Label from '../../components/form/components/Label';
import Input from '../../components/form/inputs/Input';
import { sendNameAndHeight } from '../../redux/actions';

const FormContainer = styled.section`
  display: flex;
  justify-content: center;
  margin-top: 50px;
  section {
    padding: 50px 60px 50px 30px;
    display: flex;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.2);
  }
`;

interface IForm {
  name: string;
  height: number;
  file: any;
}

const DataForm = (): React.ReactElement => {
  const { isLoading, error } = useSelector((state: any) => state.AppReducer);
  const formData = useSelector((state: any) => state.FormReducer);
  const [uploadData, setUploadData] = useState<string>('example.jpg');
  const initialValues = { name: '', height: 0, file: '' };
  const dispatch = useDispatch();
  const onSubmit = (values: IForm) => {
    // eslint-disable-next-line no-param-reassign
    values.file = uploadData;
    dispatch(sendNameAndHeight(values));
  };

  return (
    <FormContainer>
      <section>
        <Formik initialValues={initialValues} onSubmit={onSubmit} setFieldValue={true}>
          <Form>
            <Container>
              <Row>
                <Label htmlFor="name">Name</Label>
                <Field type="text" as={Input} id="name" name="name" placeholder="name" />
              </Row>
              <Row>
                <Label htmlFor="height">Height</Label>
                <Field type="number" as={Input} id="height" name="height" placeholder={0} />
              </Row>
              <Row>
                <Label htmlFor="file">File</Label>
                <Field type="file" as={Input} id="file" name="file" onChange={(e: any) => setUploadData(e.currentTarget.files[0].name)} />
              </Row>
              <Row text-align="center">
                <Button type="submit" loading={isLoading}>
                  Send data
                </Button>
              </Row>
            </Container>
          </Form>
        </Formik>
      </section>
    </FormContainer>
  );
};

export default DataForm;
