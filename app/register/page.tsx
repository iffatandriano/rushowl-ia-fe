import React from "react";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import authOptions from "../utils/auth";
import Link from "next/link";
import RegisterForm from "../components/RegisterForm";

export default async function RegisterPage() {
  const session = await getServerSession(authOptions);

  if (session) {
    return redirect("/");
  }

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <Card>
        <CardHeader>
          <CardTitle>Create your account</CardTitle>
          <CardDescription>
            To access the private page you have to be have account first
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col">
            <RegisterForm />
          </div>
        </CardContent>
        <CardFooter>
          <div className="flex-1 items-center">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-blue-500 hover:text-blue-400 text-md"
            >
              login here
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
