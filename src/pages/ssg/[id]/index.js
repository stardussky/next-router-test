import Link from "next/link";
import { useRouter } from "next/router";
import dayjs from "dayjs";
import { useState, useEffect } from "react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { PageLinks } from "@/components/PageLinks";

export const getStaticProps = async ({ res, params }) => {
  // await fetch(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/hello`);

  const date = dayjs().format("YYYY-MM-DD HH:mm:ss");

  console.log(`[Server]: ${params.id} trigger (${date})`);

  return {
    props: {
      date: date,
    },
  };
};

export const getStaticPaths = async () => {
  return {
    paths: [{ params: { id: "ssg-page-1" } }, { params: { id: "ssg-page-2" } }],
    fallback: true,
  };
};

export default function SsgPage(props) {
  const router = useRouter();

  const [clientDate, setClientDate] = useState(props.date);

  useEffect(() => {
    setClientDate(dayjs().format("YYYY-MM-DD HH:mm:ss"));
  }, [router]);

  return (
    <main>
      <span className="fixed top-0 left-0 w-full h-full bg-yellow-500/70 pointer-events-none -z-10"></span>
      <Button asChild variant="secondary">
        <Link href="/">Back</Link>
      </Button>
      <div className="p-6 grid gap-6">
        <Card className="sticky top-0 left-0 z-50 bg-muted">
          <CardHeader>
            <CardTitle>SSG {router.query.id}</CardTitle>
          </CardHeader>
          <CardContent>
            <CardTitle>
              <Badge variant="secondary">Server</Badge>
            </CardTitle>
          </CardContent>
          <CardContent>
            <CardDescription>
              <pre>{JSON.stringify({ date: props.date }, null, 2)}</pre>
            </CardDescription>
          </CardContent>
          <CardContent>
            <CardTitle>
              <Badge variant="secondary">Client</Badge>
            </CardTitle>
          </CardContent>
          <CardContent>
            <CardDescription>
              <pre>{JSON.stringify({ date: clientDate }, null, 2)}</pre>
            </CardDescription>
          </CardContent>
        </Card>
        <PageLinks></PageLinks>
      </div>
    </main>
  );
}
