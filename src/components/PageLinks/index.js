import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function PageLinks() {
  return (
    <>
      <Card>
        <CardHeader className="inline-flex">
          <Badge variant="secondary">SSR</Badge>
        </CardHeader>
        <CardContent className="flex flex-wrap items-center gap-4">
          <Button asChild className="bg-green-500">
            <Link href="/ssr/ssr-page-1">Page 1</Link>
          </Button>
          <Button asChild className="bg-green-500">
            <Link href="/ssr/ssr-page-2">Page 2</Link>
          </Button>
          <Button asChild className="bg-green-500">
            <Link href="/ssr/ssr-page-3" shallow>
              Page 3 (Shallow)
            </Link>
          </Button>
        </CardContent>
        <CardHeader className="inline-flex">
          <Badge variant="secondary">SSR (Cache)</Badge>
        </CardHeader>
        <CardContent className="flex flex-wrap items-center gap-4">
          <Button asChild className="bg-green-500">
            <Link href="/ssr/cache/ssr-page-1">Page 1</Link>
          </Button>
          <Button asChild className="bg-green-500">
            <Link href="/ssr/cache/ssr-page-2">Page 2</Link>
          </Button>
          <Button asChild className="bg-green-500">
            <Link href="/ssr/cache/ssr-page-3" shallow>
              Page 3 (Shallow)
            </Link>
          </Button>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="inline-flex">
          <Badge variant="secondary">SSG</Badge>
        </CardHeader>
        <CardContent className="flex flex-wrap items-center gap-4">
          <Button asChild className="bg-yellow-500">
            <Link href="/ssg/ssg-page-1">Page 1</Link>
          </Button>
          <Button asChild className="bg-yellow-500">
            <Link href="/ssg/ssg-page-2">Page 2</Link>
          </Button>
          <Button asChild className="bg-yellow-500">
            <Link href="/ssg/ssg-page-3">Page 3 (Dynamic)</Link>
          </Button>
          <Button asChild className="bg-yellow-500">
            <Link href="/ssg/ssg-page-4" prefetch={false}>
              Page 4 (Dynamic, no prefetch)
            </Link>
          </Button>
          <Button asChild className="bg-yellow-500">
            <Link href="/ssg/ssg-page-5" shallow>
              Page 5 (Dynamic, Shallow)
            </Link>
          </Button>
        </CardContent>
        <CardHeader className="inline-flex">
          <Badge variant="secondary">SSG (ISR)</Badge>
        </CardHeader>
        <CardContent className="flex flex-wrap items-center gap-4">
          <Button asChild className="bg-yellow-500">
            <Link href="/ssg/isr/ssg-page-1">Page 1</Link>
          </Button>
          <Button asChild className="bg-yellow-500">
            <Link href="/ssg/isr/ssg-page-2">Page 2</Link>
          </Button>
          <Button asChild className="bg-yellow-500">
            <Link href="/ssg/isr/ssg-page-3">Page 3 (Dynamic)</Link>
          </Button>
          <Button asChild className="bg-yellow-500">
            <Link href="/ssg/isr/ssg-page-4" prefetch={false}>
              Page 4 (Dynamic, no prefetch)
            </Link>
          </Button>
          <Button asChild className="bg-yellow-500">
            <Link href="/ssg/isr/ssg-page-5" shallow>
              Page 5 (Dynamic, Shallow)
            </Link>
          </Button>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="inline-flex">
          <Badge variant="secondary">SSR (Old)</Badge>
        </CardHeader>
        <CardContent className="flex flex-wrap items-center gap-4">
          <Button asChild className="bg-red-500">
            <Link href="/gip/gip-page-1">Page 1</Link>
          </Button>
          <Button asChild className="bg-red-500">
            <Link href="/gip/gip-page-2">Page 2</Link>
          </Button>
          <Button asChild className="bg-red-500">
            <Link href="/gip/gip-page-3" shallow>
              Page 3 (Shallow)
            </Link>
          </Button>
        </CardContent>
        <CardHeader className="inline-flex">
          <Badge variant="secondary">SSR (Old, Cache)</Badge>
        </CardHeader>
        <CardContent className="flex flex-wrap items-center gap-4">
          <Button asChild className="bg-red-500">
            <Link href="/gip/cache/gip-page-1">Page 1</Link>
          </Button>
          <Button asChild className="bg-red-500">
            <Link href="/gip/cache/gip-page-2">Page 2</Link>
          </Button>
          <Button asChild className="bg-red-500">
            <Link href="/gip/cache/gip-page-3" shallow>
              Page 3 (Shallow)
            </Link>
          </Button>
        </CardContent>
      </Card>
    </>
  );
}
