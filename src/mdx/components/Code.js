

export function Code({ children, ...props }) {
  // let isGrouped = useContext(CodeGroupContext)

  // if (isGrouped) {
  //   return <code {...props} dangerouslySetInnerHTML={{ __html: children }} />
  // }

  return <code {...props}>{children}</code>
}
