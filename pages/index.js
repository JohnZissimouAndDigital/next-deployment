import { signIn } from "next-auth/client";
// import { useSession, signIn, signOut } from "next-auth/client";

export default function Home() {
  return (
    <button onClick={() => signIn("okta")}>Click Me</button>
  )
}

// export default function Component() {
//   const { data: session } = useSession()
//   if(session) {
//     return <>
//       Signed in as {session.user.email} <br/>
//       <button onClick={() => signOut()}>Sign out</button>
//     </>
//   }
//   return <>
//     Not signed in <br/>
//     <button onClick={() => signIn()}>Sign in</button>
//   </>
// }