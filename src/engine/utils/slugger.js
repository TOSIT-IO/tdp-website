import { slug } from "github-slugger"
import deburr from "lodash.deburr"

const mkname = (raw) => {
  return deburr(slug(raw))
};

const mkpath = (...slug) => {
  slug = slug.flat(Infinity).filter( (item) => item !== undefined)
  return "/"+slug.join("/")+"/"
};

export { mkname, mkpath }
