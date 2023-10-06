import React from 'react'
import { useForm } from 'react-hook-form'
export default function FormValidation() {
const cats = [['100', 'ไอที'], ['200', 'เครื่องจักรกล'], ['300', 'เคมีภัณฑ์']]
const opts = ['Option 1', 'Option 2', 'Option 3']
const inputFile = React.createRef()
const {register, handleSubmit, formState: {errors}} = 
const onSubmitForm = (event) => {
let maxNumFiles = 3
let maxSize = 300

}