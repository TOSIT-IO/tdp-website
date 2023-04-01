import { clone } from "mixme";

const unflatten = (pages) => {
  let tree = [];
  const pagesClone = clone(pages);
  const sorted = pagesClone.sort(function (a, b) {
    return a.slug.length - b.slug.length;
  });
  sorted.map((page) => {
    let slug = page.slug.filter((el) => el.length);
    let localtree = tree;
    slug.map((name, i) => {
      if (i === slug.length - 1) {
        // Insert the page
        localtree.push({
          ...page,
          children: [],
        });
      } else {
        // Navigate the hierarchy
        let parent = localtree.find((p) => {
          return p.slug.at(-1) === name;
        });
        if (parent) {
          if (!parent.children) {
            parent.children = [];
            parent.children.push({
              ...page,
              children: [],
            });
          }
        } else {
          parent = {
            ...page,
            children: [],
          };
          localtree.push(parent);
        }
        localtree = parent.children;
      }
    });
  });
  return tree;
};
export default unflatten;
