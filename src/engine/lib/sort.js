
export default function sort (documents) {
  return documents
    .sort( (a, b) => a.slug.length - b.slug.length )
    .sort( (a, b) => {
      if (a.slug.length !== b.slug.length) return 0
      const min = Math.min(a.slug.length, b.slug.length)
      if(min === 0){
        return -1
      }
      const slugA = [...a.slug.slice(0, a.slug.length-1), a.sort]
      const slugB = [...b.slug.slice(0, b.slug.length-1), b.sort]
      // console.log('==', slugA, slugB)
      for (let i = 0; i < min; i++) {
        // Last element, use the sort key
        const itemA = slugA[i]
        const itemB = slugB[i]
        // if (i === min - 1){
        //   return itemA > itemB ? 1 : - 1
        // }
        // Keep going if parent is shared
        if(itemA === itemB){
          continue
        }
        // Diverging parent
        return itemA > itemB ? 1 : - 1
      }
    })
}
