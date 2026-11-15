// When the site is published in a sub-folder (e.g. GitHub Pages project pages
// at https://<user>.github.io/<repo>/), files from /public are served under
// that prefix. next/image does not add the prefix when optimization is
// disabled, so build image URLs through this helper.
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export function asset(path: string) {
  return `${basePath}${path}`;
}
