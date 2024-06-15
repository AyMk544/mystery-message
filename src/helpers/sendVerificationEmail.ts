import { resend } from "@/lib/resend";
import VerificationEmail from "../../emails/Verification";
import { ApiResponse } from "@/types/apiResponse";

export async function sendVerificationEmail ({
    email,
    username,
    verifyCode
}: {email: string,
    username: string,
    verifyCode: string}
): Promise<ApiResponse>{
    try {
        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: email,
            subject: 'Verification code',
            react: VerificationEmail({username, otp: verifyCode}),
          });
        return {success:true, message: "verification email sent successfully"}
    } catch (error) {
        console.error("Error sending verification email ", error);
        return {success: false, message: "failed to send verification email"}
    }
} 