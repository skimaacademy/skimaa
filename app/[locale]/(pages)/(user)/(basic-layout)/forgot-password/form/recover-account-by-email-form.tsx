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
  Step1_SetupEmail,
  Step2_VerifyEmail,
  Step3_ChangePassword,
  Step4_Success,
  Step4_Failed,
}

export type AccountRecoverByEmailFormProps = {
  title: string;
  themeBgClass: string;
  signInUrl: string;
  loading: boolean;
  authenticated: boolean;
  onChangeRecoverAccount: (authType: AuthType) => void;
};

export const SetupEmailByEmailSchema = z.object({
  email: z.string().email({
    message: "Invalid email format.",
  }),
});

export const VerifyEmailByEmailSchema = z.object({
  verificationCode: z
    .string()
    .nonempty({ message: "Verification code is required." }),
});

export const ChangePasswordByEmailSchema = z.object({
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

export type SetupEmailByEmailSchemaType = z.infer<typeof SetupEmailByEmailSchema>;
export type VerifyEmailByEmailSchemaType = z.infer<typeof VerifyEmailByEmailSchema>;
export type ChangePasswordByEmailSchemaType = z.infer<typeof ChangePasswordByEmailSchema>;

export function RecoverAccountByEmailForm({
  title = "",
  themeBgClass = 'bg-white',
  signInUrl = '',
  loading = false,
  authenticated = false,
  onChangeRecoverAccount: onChangeRecoverAccount }: AccountRecoverByEmailFormProps) {

  const [accountRecoverState, setAccountRecoverState] = useState<AccountRecoverState>(AccountRecoverState.Step4_Success);

  const setupEmailForm = useForm<SetupEmailByEmailSchemaType>({
    resolver: zodResolver(SetupEmailByEmailSchema),
    defaultValues: {
      email: "",
    },
  });

  const verifyEmailForm = useForm<VerifyEmailByEmailSchemaType>({
    resolver: zodResolver(VerifyEmailByEmailSchema),
    defaultValues: {
      verificationCode: "",
    },
  });

  const changePasswordForm = useForm<ChangePasswordByEmailSchemaType>({
    resolver: zodResolver(ChangePasswordByEmailSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  function onSubmitSetupEmailForm(data: z.infer<typeof SetupEmailByEmailSchema>) {
    // onSubmitFormData(data);
  }

  function onSubmitVerifyEmailForm(data: z.infer<typeof VerifyEmailByEmailSchema>) {
    // onSubmitFormData(data);
  }

  function onSubmitChangePasswordForm(data: z.infer<typeof ChangePasswordByEmailSchema>) {
    // onSubmitFormData(data);
  }

  if (accountRecoverState === AccountRecoverState.Step1_SetupEmail) {
    return (<Form {...setupEmailForm}>
      <form className="w-full flex justify-center max-w-xl" onSubmit={setupEmailForm.handleSubmit(onSubmitSetupEmailForm)}>
        <Card className="w-full">
          <CardHeader>
            <div className="flex mx-auto mb-5">
              <SkimaaFullLogo height={32} />
            </div>
            <CardTitle className="text-2xl">{title}</CardTitle>
            <CardDescription className="">
              Enter your email below to recover your account.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <FormField
                disabled={loading || authenticated}
                control={setupEmailForm.control}
                name="email"
                render={({ field }: any) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter email" {...field} />
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

  if (accountRecoverState === AccountRecoverState.Step2_VerifyEmail) {
    return (<Form {...verifyEmailForm}>
      <form className="w-full flex justify-center max-w-xl" onSubmit={verifyEmailForm.handleSubmit(onSubmitVerifyEmailForm)}>
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
                control={verifyEmailForm.control}
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
