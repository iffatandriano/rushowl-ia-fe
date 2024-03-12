import React from "react";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import SigninForm from "../components/SigninForm";
import authOptions from "../utils/auth";

export default async function LoginPage() {
  const session = await getServerSession(authOptions);

  if (session) {
    return redirect("/");
  }

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <Card>
        <CardHeader>
          <CardTitle>Please sign in </CardTitle>
          <CardDescription>
            To access the private page you have to be authenticated
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col">
            <SigninForm />
          </div>
        </CardContent>
        <CardFooter>
          <div className="flex-1 items-center">
            You dont have account?{" "}
            <Link
              href="/register"
              className="text-blue-500 hover:text-blue-400 text-md"
            >
              register here
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
