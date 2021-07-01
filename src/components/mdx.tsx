import { MDXProvider } from '@mdx-js/preact'

import { H1, H2, H3, H4, H5, H6, Link, Text } from '@/elements'

type Props = {
  children: Children
}

const components = {
  a: Link,
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
  p: Text,
}

export const MDX = ({ children }: Props): JSX.Element => {
  return <MDXProvider components={components}>{children}</MDXProvider>
}