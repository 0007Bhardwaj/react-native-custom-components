import {StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import React from 'react';
import Input from '../custom/Input';
import {Formik, Form, Field} from 'formik';
import * as Yup from 'yup';

const FormikInput = () => {
  const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(20, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    lastName: Yup.string()
      .min(20, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
  });
  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={values => {
        // same shape as initial values
        console.log(values);
      }}>
      {({errors, touched, handleBlur, handleChange, values, handleSubmit}) => (
        <>
          <View
            style={{backgroundColor: 'white', flex: 1, paddingHorizontal: 20}}>
            <Input
              label="fistName"
              placeholder="enter your name"
              value={values.firstName}
              onBlur={handleBlur('firstName')}
              onChangeText={handleChange('firstName')}
              error={errors.firstName && touched.firstName ? true : false}
            />
            {errors.firstName && touched.firstName && (
              <Text style={{color: 'black', fontSize: 15}}>
                {errors.firstName}
              </Text>
            )}
            <Input
              label="lastName"
              value={values.lastName}
              onBlur={handleBlur('lastName')}
              onChangeText={handleChange('lastName')}
              error={errors.lastName && touched.lastName ? true : false}
            />
            {errors.lastName && touched.lastName && (
              <Text style={{color: 'black', fontSize: 15}}>
                {errors.lastName}
              </Text>
            )}
            <Input
              label="email"
              value={values.email}
              onBlur={ handleBlur('email')}
              onChangeText={handleChange('email')}
              error={errors.email && touched.email ? true : false}
            />
            {errors.email && touched.email && (
              <Text style={{color: 'black', fontSize: 15}}>{errors.email}</Text>
            )}
             <TouchableOpacity 
             onPress={handleSubmit}
             
             style={{height:50, borderColor:'blue', borderWidth:2, justifyContent:'center', alignItems:'center'}}>
            <Text style={{fontSize:20}}>submit</Text>
          </TouchableOpacity>
          </View>
         
        </>
      )}
    </Formik>
  );
};

export default FormikInput;

const styles = StyleSheet.create({});
