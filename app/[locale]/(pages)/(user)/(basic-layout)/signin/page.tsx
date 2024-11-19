'use client'

import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import { SignInByEmailSchemaType, SignInByEmailForm } from "./form/signin-by-email-form";
import Image from 'next/image';
import { toast } from "sonner";
import { ResponseModel } from "@/models/result";
import { TokenResponseModel } from "@/models/auth/token-response.model";
import { useState } from "react";
import { signIn } from "@/services/utility/api/auth.service";
import { CookieStorageService } from "@/services/utility/storage.service";
import Link from "next/link";
import { ClientRoutes } from "@/services/utility/router.service";
import SkimaaLogo from "@/components/logo/skimaa-logo";
import Footer from "@/components/footer/footer";
import { AuthType } from "@/enums/auth-type.enum";
import { SignInByPhoneForm, SignInByPhoneSchemaType } from "./form/signin-by-phone-form";

function SignInPage() {
  
  const [loading, setLoading] = useState<boolean>(false);
  const [authenticated, setAuthenticated] = useState<boolean>(false);
  const [signInType, setSignInType] = useState<AuthType>(AuthType.Email);

  async function onSignInByEmail(formData: SignInByEmailSchemaType) {
    const toastId = toast.loading('Authenticating...');
    setLoading(true);
  
    try {
      const result: ResponseModel<TokenResponseModel> = await signIn(formData.email, formData.password);
      CookieStorageService.setAccessToken(result.data.accessToken);
      setAuthenticated(true);
      toast.success('Authentication successful!', {
        id: toastId,
        duration: 3000,
      });
  
      await redirectAfterSuccessSignIn(ClientRoutes.Admin.Overview);
    } catch (error: any) {
      console.log('error: ', error);
  
      const errorMessage = error?.response?.data?.message || 'Failed to authenticate';
      toast.error(errorMessage, {
        id: toastId,  // Reuse the same toast ID for error
        duration: 3000,  // Auto-close after 3 seconds
      });
    } finally {
      setLoading(false);
    }
  }

  async function onSignInByPhone(formData: SignInByPhoneSchemaType) {
    const toastId = toast.loading('Authenticating...');
    setLoading(true);
  
    try {
      const result: ResponseModel<TokenResponseModel> = await signIn(formData.phone, formData.password);
      CookieStorageService.setAccessToken(result.data.accessToken);
      setAuthenticated(true);
      toast.success('Authentication successful!', {
        id: toastId,
        duration: 3000,
      });
  
      await redirectAfterSuccessSignIn(ClientRoutes.Admin.Overview);
    } catch (error: any) {
      console.log('error: ', error);
  
      const errorMessage = error?.response?.data?.message || 'Failed to authenticate';
      toast.error(errorMessage, {
        id: toastId,  // Reuse the same toast ID for error
        duration: 3000,  // Auto-close after 3 seconds
      });
    } finally {
      setLoading(false);
    }
  }
  
  function redirectAfterSuccessSignIn(route: string): Promise<void> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        try {
          // Using window.location for redirection
          console.log('Redirecting to:', route);
          window.location.href = route;
          resolve();
        } catch (e) {
          console.error('Error during redirection:', e);
          reject('Redirection error occurred.');
        }
      }, 100);
    });
  }

  return (
    <div className="min-h-[calc(100vh_-_205px)] flex justify-center items-center">
      <div className="mt-5 w-full flex justify-center items-center">
        {
          signInType === AuthType.Email &&
          <SignInByEmailForm
            title="Sign in"
            themeBgClass='data-[state=checked]:bg-admin'
            signInUrl="/admin"
            loading={loading}
            authenticated={authenticated}
            onSubmitSignInByEmailFormData={onSignInByEmail}
            onChangeSignInType={setSignInType}>
          </SignInByEmailForm>
        }
        {
          signInType === AuthType.Phone &&
          <SignInByPhoneForm
            title="Sign in"
            themeBgClass='data-[state=checked]:bg-admin'
            signInUrl="/admin"
            loading={loading}
            authenticated={authenticated}
            onSubmitSignInByPhoneFormData={onSignInByPhone}
            onChangeSignInType={setSignInType}>
          </SignInByPhoneForm>
        }
      </div>
    </div>
  )
}

export default SignInPage;
