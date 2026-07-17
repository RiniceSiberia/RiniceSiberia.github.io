const baseUrl = import.meta.env.BASE_URL.endsWith("/")
  ? import.meta.env.BASE_URL.slice(0, -1)
  : import.meta.env.BASE_URL;

/** 为 GitHub Pages 项目子路径补齐 base，外部链接保持原样。 */
export function withBase(path: string): string {
  if (!path.startsWith("/") || path.startsWith("//")) return path;
  if (baseUrl && (path === baseUrl || path.startsWith(`${baseUrl}/`))) return path;
  return `${baseUrl}${path}` || "/";
}

/** 生成用于 canonical、Open Graph 和 JSON-LD 的绝对地址。 */
export function absoluteUrl(path: string, siteUrl: string): string {
  return new URL(withBase(path), `${siteUrl.replace(/\/$/, "")}/`).toString();
}
