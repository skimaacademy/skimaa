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

export type SignInByEmailFormProps = {
  title: string;
  themeBgClass: string;
  signInUrl: string;
  loading: boolean;
  authenticated: boolean;
  onSubmitSignInByEmailFormData: (formData: SignInByEmailSchemaType) => void;
  onChangeSignInType: (signInType: AuthType) => void;
};

export const SignInByEmailSchema = z.object({
  email: z.string().email({
    message: "Invalid email format.",
  }),
  password: z.string().min(5, {
    message: "Password must be at least 5 characters.",
  })
})

export type SignInByEmailSchemaType = z.infer<typeof SignInByEmailSchema>;

export function SignInByEmailForm({ 
  title = "Sign in", 
  themeBgClass = 'bg-white', 
  signInUrl = '', 
  loading = false, 
  authenticated = false, 
  onSubmitSignInByEmailFormData: onSubmitFormData,
  onChangeSignInType: onChangeSignInType }: SignInByEmailFormProps) {

  const form = useForm<SignInByEmailSchemaType>({
    resolver: zodResolver(SignInByEmailSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  function onSubmit(data: z.infer<typeof SignInByEmailSchema>) {
    onSubmitFormData(data);
  }

  return (<Form {...form}>
    <form className="w-full flex justify-center max-w-xl" onSubmit={form.handleSubmit(onSubmit)}>
      <Card className="w-full">
        <CardHeader>
          <div className="flex mx-auto mb-5">
            <SkimaaFullLogo height={32}/>
          </div>
          <CardTitle className="text-2xl">{title}</CardTitle>
          <CardDescription className="">
            Enter your email below to sign in to your account.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <FormField
              disabled={loading || authenticated}
              control={form.control}
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
          <div className="grid gap-2">
            <FormField
              disabled={loading || authenticated}
              control={form.control}
              name="password"
              render={({ field }: any) => (
                <FormItem>
                  <FormLabel className="flex justify-between">Password <Link href={'/forgot-password'} className="hover:underline">Forget your password?</Link></FormLabel>
                  <FormControl>
                    <Input placeholder="Enter password" {...field} type="password" />
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
                  ? <><LoadingSpinner /> Redirecting</> 
                  : loading 
                    ? <><LoadingSpinner /> Signing in</> 
                    : 'Sign in'}
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
              <span>Don&apos;t have an account?</span> <Link className="hover:underline" href={'signup'}>Sign up</Link>
            </div>
          </div>
        </CardFooter>
      </Card>
    </form>
  </Form>
  )
}
