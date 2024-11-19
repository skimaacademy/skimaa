'use client'

import LoadingSpinner from "@/components/loader/loading-spinner"
import SkimaaFullLogo from "@/components/logo/skimaa-full-logo"
import SkimaaLogo from "@/components/logo/skimaa-logo"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from 'next/image';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { zodResolver } from "@hookform/resolvers/zod"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { z } from "zod";
import googleLogo from 'images/pages/signin/google-logo.png';
import {
  PhoneIcon,
} from '@heroicons/react/20/solid';
import { AuthType } from "@/enums/auth-type.enum"
import { VerificationForm, VerificationSchemaType } from "./verification-form"
import { useState } from "react"

export type SignUpByEmailFormProps = {
  title: string;
  themeBgClass: string;
  signInUrl: string;
  loading: boolean;
  authenticated: boolean;
  onSubmitSignUpByEmailFormData: (formData: SignUpByEmailSchemaType) => void;
  onChangeSignUpType: (authType: AuthType) => void;
  onSubmitVerificationFormData: (formData: VerificationSchemaType) => void;
};

export const SignUpByEmailSchema = z
  .object({
    firstName: z
      .string()
      .min(3, { message: "First name must be at least 3 characters." })
      .nonempty({ message: "First name is required." }),
    lastName: z
      .string()
      .min(3, { message: "Last name must be at least 3 characters." })
      .nonempty({ message: "Last name is required." }),
    email: z
      .string()
      .email({ message: "Invalid email format." })
      .nonempty({ message: "Email is required." }),
    password: z
      .string()
      .min(5, { message: "Password must be at least 5 characters." })
      .nonempty({ message: "Password is required." }),
    confirmPassword: z
      .string()
      .nonempty({ message: "Confirm password is required." }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords doesn't match.",
  });

export type SignUpByEmailSchemaType = z.infer<typeof SignUpByEmailSchema>;

export function SignUpByEmailForm({ 
  title = "Sign up", 
  themeBgClass = 'bg-white', 
  signInUrl = '', 
  loading = false, 
  authenticated = false, 
  onSubmitSignUpByEmailFormData: onSubmitFormData,
  onChangeSignUpType: onChangeSignInType,
  onSubmitVerificationFormData: onSubmitVerificationFormData }: SignUpByEmailFormProps) {

  let isVerified: boolean = false;

  const signupForm = useForm<SignUpByEmailSchemaType>({
    resolver: zodResolver(SignUpByEmailSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  })

  function onSubmit(data: z.infer<typeof SignUpByEmailSchema>) {
    onSubmitFormData(data);
  }

  if (!isVerified) {
    return (
    <Form {...signupForm}>
      <form className="w-full flex justify-center max-w-xl" onSubmit={signupForm.handleSubmit(onSubmit)}>
        <Card className="w-full">
          <CardHeader>
            <div className="flex mx-auto mb-5">
              <SkimaaFullLogo height={32} />
            </div>
            <CardTitle className="text-2xl">{title}</CardTitle>
            <CardDescription className="">
              Enter your email below to sign up for an account.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <FormField
                disabled={loading || authenticated}
                control={signupForm.control}
                name="firstName"
                render={({ field }: any) => (
                  <FormItem>
                    <FormLabel>First Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter first name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="grid gap-2">
              <FormField
                disabled={loading || authenticated}
                control={signupForm.control}
                name="lastName"
                render={({ field }: any) => (
                  <FormItem>
                    <FormLabel>Last Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter last name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="grid gap-2">
              <FormField
                disabled={loading || authenticated}
                control={signupForm.control}
                name="email"
                render={({ field }: any) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="Enter email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="grid gap-2">
              <FormField
                disabled={loading || authenticated}
                control={signupForm.control}
                name="password"
                render={({ field }: any) => (
                  <FormItem>
                    <FormLabel className="flex justify-between">Password</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter password" {...field} type="password" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="grid gap-2">
              <FormField
                disabled={loading || authenticated}
                control={signupForm.control}
                name="confirmPassword"
                render={({ field }: any) => (
                  <FormItem>
                    <FormLabel className="flex justify-between">Confirm Password</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter confirm password" {...field} type="password" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

          </CardContent>
          <CardFooter className="mt-2">
            <div className="flex flex-col w-full gap-4">
              {
                <Button disabled={loading || authenticated} type="submit" className="w-full">
                  {authenticated
                    ? <><LoadingSpinner /> Redirecting...</>
                    : loading
                      ? <><LoadingSpinner /> Creating Account...</>
                      : 'Create Account'}
                </Button>
              }

              <div className="flex items-center my-3">
                <div className="flex-grow border-t border-secondary-foreground/30 mt-1" />
                <span className="mx-4 text-primary-foreground">Or continue with</span>
                <div className="flex-grow border-t border-secondary-foreground/30 mt-1" />
              </div>

              {/* <Button variant="secondary" className="w-full">
              <Image src={googleLogo} alt={"Google Logo"} /> Google
            </Button> */}
              <Button
                onClick={(event: any) => {
                  event.preventDefault();
                  onChangeSignInType(AuthType.Phone)
                }}
                variant="secondary"
                className="w-full">

                <PhoneIcon className="w-6 h-6" /> Phone
              </Button>

              <div className="text-center">
                <span>Already have an account?</span> <Link className="hover:underline" href={'signin'}>Sign in</Link>
              </div>
            </div>
          </CardFooter>
        </Card>
      </form>
    </Form>
    )
  } else {
    return (
      <VerificationForm 
        title={""} 
        themeBgClass={""}
        loading={false} 
        authenticated={false} 
        onSubmitVerificationFormData={onSubmitVerificationFormData} />
    )
  }
}
