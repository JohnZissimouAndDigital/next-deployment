import { signIn, getSession } from "next-auth/client";
// import { useSession, signIn, signOut } from "next-auth/client";

export default function Home() {
  return (
    <button onClick={() => signIn("okta")}>Click Me</button>
  )
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  const { res } = context;

  if (session) {
    //redirect to content page when user is already logged in
    res.setHeader("location", "/home");
    res.statusCode = 302;
    res.end();
  }

  return { props: {} };
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