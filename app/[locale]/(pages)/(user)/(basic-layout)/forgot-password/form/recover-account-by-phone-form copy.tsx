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
  CheckBadgeIcon
} from '@heroicons/react/20/solid';
import { AuthType } from "@/enums/auth-type.enum"
import { useState } from "react"

export enum AccountRecoverState {
  Step1_SetupPhone,
  Step2_VerifyPhone,
  Step3_ChangePassword,
  Step4_Success,
  Step4_Failed,
}

export type AccountRecoverByPhoneFormProps = {
  title: string;
  themeBgClass: string;
  signInUrl: string;
  loading: boolean;
  authenticated: boolean;
  onChangeRecoverAccount: (authType: AuthType) => void;
};

export const SetupPhoneByPhoneSchema = z.object({
  phone: z
    .string()
    .regex(/^(?:\+880|880|01)\d{9}$/, {
      message: "Invalid Bangladeshi phone number format.",
    })
    .nonempty({
      message: "Phone number is required.",
    }),
});

export const VerifyPhoneByPhoneSchema = z.object({
  verificationCode: z
    .string()
    .nonempty({ message: "Verification code is required." }),
});

export const ChangePasswordByPhoneSchema = z.object({
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

export type SetupPhoneByPhoneSchemaType = z.infer<typeof SetupPhoneByPhoneSchema>;
export type VerifyPhoneByPhoneSchemaType = z.infer<typeof VerifyPhoneByPhoneSchema>;
export type ChangePasswordByPhoneSchemaType = z.infer<typeof ChangePasswordByPhoneSchema>;

export function RecoverAccountByPhoneForm({
  title = "",
  themeBgClass = 'bg-white',
  signInUrl = '',
  loading = false,
  authenticated = false,
  onChangeRecoverAccount: onChangeRecoverAccount }: AccountRecoverByPhoneFormProps) {

  const [accountRecoverState, setAccountRecoverState] = useState<AccountRecoverState>(AccountRecoverState.Step3_ChangePassword);

  const setupPhoneForm = useForm<SetupPhoneByPhoneSchemaType>({
    resolver: zodResolver(SetupPhoneByPhoneSchema),
    defaultValues: {
      phone: "",
    },
  });

  const verifyPhoneForm = useForm<VerifyPhoneByPhoneSchemaType>({
    resolver: zodResolver(VerifyPhoneByPhoneSchema),
    defaultValues: {
      verificationCode: "",
    },
  });

  const changePasswordForm = useForm<ChangePasswordByPhoneSchemaType>({
    resolver: zodResolver(ChangePasswordByPhoneSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  function onSubmitSetupPhoneForm(data: z.infer<typeof SetupPhoneByPhoneSchema>) {
    // onSubmitFormData(data);
  }

  function onSubmitVerifyPhoneForm(data: z.infer<typeof VerifyPhoneByPhoneSchema>) {
    // onSubmitFormData(data);
  }

  function onSubmitChangePasswordForm(data: z.infer<typeof ChangePasswordByPhoneSchema>) {
    // onSubmitFormData(data);
  }

  if (accountRecoverState === AccountRecoverState.Step1_SetupPhone) {
    return (<Form {...setupPhoneForm}>
      <form className="w-full flex justify-center max-w-xl" onSubmit={setupPhoneForm.handleSubmit(onSubmitSetupPhoneForm)}>
        <Card className="w-full">
          <CardHeader>
            <div className="flex mx-auto mb-5">
              <SkimaaFullLogo height={32} />
            </div>
            <CardTitle className="text-2xl">{title}</CardTitle>
            <CardDescription className="">
              Enter your phone below to recover your account.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <FormField
                disabled={loading || authenticated}
                control={setupPhoneForm.control}
                name="phone"
                render={({ field }: any) => (
                  <FormItem>
                    <FormLabel>Phone</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter phone" {...field} />
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
                    ? <><LoadingSpinner /> Done</>
                    : loading
                      ? <><LoadingSpinner /> Sending</>
                      : 'Get Verification Code'}
                </Button>
              }
            </div>
          </CardFooter>
        </Card>
      </form>
    </Form>
    );
  }

  if (accountRecoverState === AccountRecoverState.Step2_VerifyPhone) {
    return (<Form {...verifyPhoneForm}>
      <form className="w-full flex justify-center max-w-xl" onSubmit={verifyPhoneForm.handleSubmit(onSubmitVerifyPhoneForm)}>
        <Card className="w-full">
          <CardHeader>
            <div className="flex mx-auto mb-5">
              <SkimaaFullLogo height={32} />
            </div>
            <CardTitle className="text-2xl">{title}</CardTitle>
            <CardDescription className="">
            Enter verification code below to recover your account.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <FormField
                disabled={loading || authenticated}
                control={verifyPhoneForm.control}
                name="verificationCode"
                render={({ field }: any) => (
                  <FormItem>
                    <FormLabel>Verification Code</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter verification code" {...field} />
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
                    ? <><LoadingSpinner /> Verified</>
                    : loading
                      ? <><LoadingSpinner /> Verifying</>
                      : 'Verify'}
                </Button>
              }
            </div>
          </CardFooter>
        </Card>
      </form>
    </Form>
    );
  }

  if (accountRecoverState === AccountRecoverState.Step3_ChangePassword) {
    return (<Form {...changePasswordForm}>
      <form className="w-full flex justify-center max-w-xl" onSubmit={changePasswordForm.handleSubmit(onSubmitChangePasswordForm)}>
        <Card className="w-full">
          <CardHeader>
            <div className="flex mx-auto mb-5">
              <SkimaaFullLogo height={32} />
            </div>
            <CardTitle className="text-2xl">{title}</CardTitle>
            <CardDescription className="">
              Enter new password to recover your account.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <FormField
                disabled={loading || authenticated}
                control={changePasswordForm.control}
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
                control={changePasswordForm.control}
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
                    ? <><LoadingSpinner /> Done</>
                    : loading
                      ? <><LoadingSpinner /> Changing</>
                      : 'Change Password'}
                </Button>
              }
            </div>
          </CardFooter>
        </Card>
      </form>
    </Form>
    );
  }

  if (accountRecoverState === AccountRecoverState.Step4_Success) {
    return (
      <>
        <Card className="max-w-xl">
          <CardHeader>
            <div className="flex mx-auto mb-5">
              <SkimaaFullLogo height={32} />
            </div>
            {/* <CardTitle className="text-2xl">{title}</CardTitle> */}
            <CardDescription className="">
            </CardDescription>
          </CardHeader>

          <CardContent>
            <div className="flex flex-col justify-center items-center">
              <CheckBadgeIcon className="w-20 h-20 text-green-500" />
              <span className="font-medium mt-1">Password has been reset successfully.</span>
              <span className="mt-4"><Link className="underline" href={"signin"}>Sign in</Link></span>
            </div>
          </CardContent>

          <CardFooter className="flex justify-between">
            {/* <Button variant="outline">Cancel</Button>
            <Button>Deploy</Button> */}
          </CardFooter>
        </Card>
      </>
    );
  }
}
