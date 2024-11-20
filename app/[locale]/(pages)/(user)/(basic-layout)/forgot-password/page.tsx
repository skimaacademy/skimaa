'use client'

import { RecoverAccountByEmailForm } from "./form/recover-account-by-email-form";
import { useState } from "react";
import { AuthType } from "@/enums/auth-type.enum";
import { RecoverAccountByPhoneForm } from "./form/recover-account-by-phone-form copy";

function ForgotPasswordPage() {
  
  const [loading, setLoading] = useState<boolean>(false);
  const [authenticated, setAuthenticated] = useState<boolean>(false);
  const [authType, setAuthType] = useState<AuthType>(AuthType.Phone);

  // async function onSignInByEmail(formData: RecoverAccountByEmailSchemaType) {
  //   const toastId = toast.loading('Authenticating...');
  //   setLoading(true);
  
  //   try {
  //     const result: ResponseModel<TokenResponseModel> = await signIn(formData.email, formData.password);
  //     CookieStorageService.setAccessToken(result.data.accessToken);
  //     setAuthenticated(true);
  //     toast.success('Authentication successful!', {
  //       id: toastId,
  //       duration: 3000,
  //     });
  
  //     await redirectAfterSuccessSignIn(ClientRoutes.Admin.Overview);
  //   } catch (error: any) {
  //     console.log('error: ', error);
  
  //     const errorMessage = error?.response?.data?.message || 'Failed to authenticate';
  //     toast.error(errorMessage, {
  //       id: toastId,  // Reuse the same toast ID for error
  //       duration: 3000,  // Auto-close after 3 seconds
  //     });
  //   } finally {
  //     setLoading(false);
  //   }
  // }

  // async function onSignInByPhone(formData: SignInByPhoneSchemaType) {
  //   const toastId = toast.loading('Authenticating...');
  //   setLoading(true);
  
  //   try {
  //     const result: ResponseModel<TokenResponseModel> = await signIn(formData.phone, formData.password);
  //     CookieStorageService.setAccessToken(result.data.accessToken);
  //     setAuthenticated(true);
  //     toast.success('Authentication successful!', {
  //       id: toastId,
  //       duration: 3000,
  //     });
  
  //     await redirectAfterSuccessSignIn(ClientRoutes.Admin.Overview);
  //   } catch (error: any) {
  //     console.log('error: ', error);
  
  //     const errorMessage = error?.response?.data?.message || 'Failed to authenticate';
  //     toast.error(errorMessage, {
  //       id: toastId,  // Reuse the same toast ID for error
  //       duration: 3000,  // Auto-close after 3 seconds
  //     });
  //   } finally {
  //     setLoading(false);
  //   }
  // }
  
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
          authType === AuthType.Email &&
          <RecoverAccountByEmailForm
            title="Account Recovery"
            themeBgClass='data-[state=checked]:bg-admin'
            signInUrl="/admin"
            loading={loading}
            authenticated={authenticated}
            onChangeRecoverAccount={setAuthType}>
          </RecoverAccountByEmailForm>
        }
        {
          authType === AuthType.Phone &&
          <RecoverAccountByPhoneForm
            title="Sign in"
            themeBgClass='data-[state=checked]:bg-admin'
            signInUrl="/admin"
            loading={loading}
            authenticated={authenticated}
            onChangeRecoverAccount={setAuthType}>
          </RecoverAccountByPhoneForm>
        }
      </div>
    </div>
  )
}

export default ForgotPasswordPage;
