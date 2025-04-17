"use client";
import React from "react";
import FormInput from "@/components/FormInput";
import Button from "@/components/Button";
import { useForm } from "react-hook-form";
const page = () => {
  const {
    register,
    reset,
    watch,
    formState: { errors },
    getValues,
    handleSubmit,
  } = useForm({ mode: "onChange" });
  return (
    <section>
      <h2 className="mb-10 text-h2">تحديث كلمة المرور</h2>
      <form className="flex max-w-[400px] flex-col gap-5">
        {/* new password */}
        <FormInput
          label={"كلمة المرور الجديدة"}
          type={"password"}
          value={getValues("newPassword")}
          error={errors.newPassword}
          placeholder="New password"
          register={{
            ...register("newPassword", {
              required: { value: true, message: "كلمة المرور مطلوبة." },
              minLength: {
                value: 8,
                message: "يجب الا تقل كلمة المرور عن 8 حروف.",
              },
              maxLength: {
                value: 30,
                message: "يجب الا تزيد كلمة المرور عن 30 حرف.",
              },
              pattern: {
                value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
                message: "يجب ان تتضمن كلمة المرور رمز '! @ $ % ^ & *'.",
              },
            }),
          }}
        />
        {/* confirm password */}
        <FormInput
          type={"password"}
          label="تأكيد كلمة المرور"
          value={getValues("confirmPassword")}
          error={errors.confirmPassword}
          placeholder="Confirm password"
          register={{
            ...register("confirmPassword", {
              required: { value: true, message: "كلمة المرور مطلوبة." },
              minLength: {
                value: 8,
                message: "يجب الا تقل كلمة المرور عن 8 حروف ",
              },
              maxLength: {
                value: 30,
                message: "يجب الا تزيد كلمة المرور عن 30 حرف.",
              },
              pattern: {
                value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
                message: "يجب ان تتضمن كلمة المرور رمز '! @ $ % ^ & *'.",
              },
              validate: (value) =>
                value === getValues("newPassword") ||
                "يجب ان تتطابق كلمتا المرور",
            }),
          }}
        />
        <div className="flex justify-end">
          <Button
            type={"submit"}
            additionalStyle={`mt-5`}
            disabled={
              Object.keys(errors).length ||
              !watch("newPassword") ||
              !watch("confirmPassword")
            }
          >
            تحديث
          </Button>
        </div>
      </form>
    </section>
  );
};

export default page;
