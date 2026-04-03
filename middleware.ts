import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const COMPANY_URL = "https://strayl.dev";

export function middleware(_request: NextRequest) {
  return NextResponse.redirect(new URL(COMPANY_URL), 307);
}

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"],
};
