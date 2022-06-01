import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/router";

import { ADMIN_DRIVER_AUTH_TOKEN, Path } from "@/constants";
import { LocalStorage } from "@/services/localStorage";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const RouteGuard = ({ children }: { children: any }) => {
  const router = useRouter();
  const [, setAuthorized] = useState(true);
  const user = LocalStorage.get(ADMIN_DRIVER_AUTH_TOKEN);

  const authCheck = useCallback(
    (url: string) => {
      // redirect to login page if accessing a private page and not logged in
      const publicPaths = [Path.LOGIN];

      const path = url.split("?")[0];

      if (publicPaths.includes(path as Path)) {
        setAuthorized(true);

        return;
      }

      if (!user) {
        setAuthorized(false);

        router.push("/login");
      } else {
        setAuthorized(true);
      }
    },
    [router, user]
  );

  useEffect(() => {
    // on initial load - run auth check
    authCheck(router.asPath);

    // on route change start - hide page content by setting authorized to false
    const hideContent = () => setAuthorized(false);
    router.events.on("routeChangeStart", hideContent);

    // on route change complete - run auth check
    router.events.on("routeChangeComplete", authCheck);

    // unsubscribe from events in useEffect return function
    return () => {
      router.events.off("routeChangeStart", hideContent);
      router.events.off("routeChangeComplete", authCheck);
    };
  }, [authCheck, router]);

  // if (!authorized) {
  //   return <div>404</div>;
  // }

  return children;
};
