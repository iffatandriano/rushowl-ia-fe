import { getServerSession } from "next-auth";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import LogoutButton from "./components/LogoutButton";

export default async function Home() {
  const session = await getServerSession();
  return (
    <div className="p-10">
      <h1>Hello, welcome to IA.</h1>
      {session ? (
        <div>
          <h1>you are logged in </h1>
          <LogoutButton />
        </div>
      ) : (
        <div>
          <h1>Pleae log in to see something special</h1>
          <Button asChild>
            <Link href="/login">Login</Link>
          </Button>
        </div>
      )}
    </div>
  );
}
