'use client'

import LoadingSpinner from "@/components/loader/loading-spinner"
import SkimaaFullLogo from "@/components/logo/skimaa-full-logo"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod";

export type VerificationFormProps = {
  title: string;
  themeBgClass: string;
  loading: boolean;
  authenticated: boolean;
  onSubmitVerificationFormData: (formData: VerificationSchemaType) => void;
};

export const VerificationSchema = z
  .object({
    verificationCode: z
      .string()
      .nonempty({ message: "Verification code is required." }),
  });

export type VerificationSchemaType = z.infer<typeof VerificationSchema>;

export function VerificationForm({ 
  title = "Sign in", 
  themeBgClass = 'bg-white', 
  loading = false, 
  authenticated = false, 
  onSubmitVerificationFormData: onSubmitFormData }: VerificationFormProps) {

  const form = useForm<VerificationSchemaType>({
    resolver: zodResolver(VerificationSchema),
    defaultValues: {
      verificationCode: "",
    },
  })

  function onSubmit(data: z.infer<typeof VerificationSchema>) {
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
            Enter verification code to verify your account.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <FormField
              disabled={loading || authenticated}
              control={form.control}
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
                  ? <><LoadingSpinner /> Redirecting</> 
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
  )
}
