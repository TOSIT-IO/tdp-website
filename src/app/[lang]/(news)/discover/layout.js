import Layout from '../../(pages)/[...slug]/layout.js'

export default async function newLayout(props) {
  const params = await props.params;

  const {
    children
  } = props;

  return Layout({
    children,
    params: {
      ...params,
      slug: ['discover', 'news']
    }
  })
}
