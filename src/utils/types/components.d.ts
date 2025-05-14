import { ReactNode } from "react";

/* 
    Random type
*/


export interface ContainerProps { 
    children?: ReactNode;
    className?: string;
}

export interface ButtonProps { 
    children?: ReactNode;
    onClick?: () => void;
}

/* 
    ZOD & React Hook Form type
*/

import { FieldError, UseFormRegister } from "react-hook-form";

export type FormData = {
    email: string;
    companyName: string;
    userName: string;
    companyCategories: string;
    yearsOfExperience: string;
    password: string;
    confirmPassword: string;
}

export type FormFieldProps = { 
    type?: string;
    name: ValidFieldNames;
    register: UseFormRegister<FormData>;
    inputId?: string;
    labelText?: string;
    error: FieldError | undefined;
    valueAsNumber?: boolean;
}

export type ValidFieldNames = 
    | "email"
    | "companyName"
    | "userName"
    | "companyCategories"
    | "yearsOfExperience"
    | "password"
    | "confirmPassword"

/* 
    Lazy Load Images Type
*/

export type LazyLoadImageType = {
    src?: string | undefined;
    alt?: string | undefined;
    className?: string | undefined;
}