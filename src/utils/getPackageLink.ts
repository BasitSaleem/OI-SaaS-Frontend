import { PACKAGE_LINKS, PackageKey } from "./package-links.config";

export class PackageNotFoundError extends Error {
  constructor(key: string) {
    super(
      `Package key "${key}" not found. Valid keys: ${PACKAGE_LINKS.map((p) => p.key).join(", ")}`
    );
    this.name = "PackageNotFoundError";
  }
}

function isProduction(): boolean {
  const appEnv = process.env.NEXT_PUBLIC_APP_ENV;
  if (appEnv) return appEnv === "production";
  return process.env.NODE_ENV === "production";
}

export function getPackageLink(packageKey: PackageKey | string): string {
  const pkg = PACKAGE_LINKS.find((p) => p.key === packageKey);
  if (!pkg) throw new PackageNotFoundError(packageKey);
  return isProduction() ? pkg.production : pkg.staging;
}
