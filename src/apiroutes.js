export const INIT = 'http://localhost:4000'
export const ENDPOINT = `${INIT}/akura`
export const PUBLIC_ENDPOINT = `${INIT}/public/akura`


export const CREATE_USER = `${ENDPOINT}/user`


//auth
export const LOGIN = `${PUBLIC_ENDPOINT}/login`



// admin
export const CREATE_CLASS = `${ENDPOINT}/class`
export const GET_INSTRUCTORS_FOR_ADMIN = `${ENDPOINT}/instructor`
export const GET_PARENTS_FOR_ADMIN = `${ENDPOINT}/parent`
export const GET_STUDENTS_FOR_ADMIN = `${ENDPOINT}/student`

// stm


// ins
export const GET_CLASSE_FOR_INSTRUCTOR = `${ENDPOINT}/getInstructorClasses`


// stu


// pa


// cls
export const CLASS_PAYMENT = `${ENDPOINT}/payment`
export const STUDENT_MY_CLASSES = `${ENDPOINT}/allAddmissions`

// announcement + notification
export const CREATE_NOTIFICATION = `${ENDPOINT}/instructor/notification/create/`