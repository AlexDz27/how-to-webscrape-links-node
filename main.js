import fetch from 'node-fetch'
import { parse } from 'node-html-parser'
import fs from 'fs'
import { objectsAreSame } from './objectsAreSame.js'

const ukAndIeAndOtherMarketsPrefixes = [
  'at',
  'au',
  'cz',
  'dech',
  'dk',
  'hk01',
  'hk02',
  'hu',
  'ie',
  'kr',
  'my',
  'no',
  'nz',
  'ph',
  'pl',
  'se',
  'sg',
  'th',
  'tw01',
  'tw02',
  'uk',
  'za',
]
const franceMarketPrefix = 'f1'
const germanyMarketPrefix = 'de'
const italyMarketPrefix = 'it'
const nlAndBelgiumMarketPrefixes = ['nl', 'be01', 'be02']
const spainAndPortugalMarketPrefixes = ['es', 'pt']

const getUkAndIeAndOtherMarketsPrefixesLinksMap = (marketPrefix) => {
  let linksMap = {
    twitter: 'https://twitter.com/WeAreRSGroup',
    linkedin: 'https://www.linkedin.com/company/wearersgroup',
    youtube: 'https://www.youtube.com/c/WeAreRSGroup',
    facebook: 'https://www.facebook.com/WeAreRSGroupPLC/',
    instagram: 'https://www.instagram.com/rs_components/',
    tiktok: 'https://www.tiktok.com/@wearersgroup',
  }

  if (marketPrefix === 'uk' || marketPrefix === 'ie') {
    linksMap = {
      ...linksMap,
      linkedin: 'https://www.linkedin.com/company/rs-uk-ireland/',
      youtube: 'https://www.youtube.com/channel/UCad2C5AV8SYqke58Y5wCuCg/',
    }
  }

  return linksMap
}
const getFranceMarketPrefixLinksMap = () => {
  let linksMap = {
    twitter: 'https://twitter.com/RSOnlineFR',
    linkedin: 'https://www.linkedin.com/company/rs-france',
    youtube: 'https://www.youtube.com/channel/UCtY4JJCpUjaFZ4BssYXIS6A',
    facebook: 'https://www.facebook.com/RSOnlineFR',
    instagram: 'https://www.instagram.com/rs_components/',
    tiktok: 'https://www.tiktok.com/@wearersgroup',
  }

  return linksMap
}
const getGermanyMarketPrefixLinksMap = () => {
  let linksMap = {
    twitter: 'https://twitter.com/RSOnlineDACH',
    linkedin: 'https://www.linkedin.com/company/rs-dach',
    youtube: 'https://www.youtube.com/channel/UCRrrDwYac5OolLs-ku4FXkg',
    facebook: 'https://www.facebook.com/RSOnlineDACH',
    instagram: 'https://www.instagram.com/rs_components_dach/',
    tiktok: 'https://www.tiktok.com/@wearersgroup',
  }

  return linksMap
}
const getItalyMarketPrefixLinksMap = () => {
  let linksMap = {
    linkedin: 'https://www.linkedin.com/company/rs-italia/',
  }

  return linksMap
}
const getNlAndBelgiumMarketPrefixesLinksMap = () => {
  let linksMap = {
    twitter: 'https://twitter.com/WeAreRSGroup',
    linkedin: 'https://www.linkedin.com/showcase/rs-nl',
    youtube: 'https://www.youtube.com/c/WeAreRSGroup',
    facebook: 'https://www.facebook.com/WeAreRSGroupPLC/',
    instagram: 'https://www.instagram.com/rs_components/',
    tiktok: 'https://www.tiktok.com/@wearersgroup',
  }

  return linksMap
}
const getSpainAndPortugalMarketPrefixesLinksMap = () => {
  let linksMap = {
    linkedin: 'https://www.linkedin.com/company/rs-iberia/',
    youtube: 'https://www.youtube.com/channel/UCb8UzWMG_UaTjSjDM2IQqsQ',
  }

  return linksMap
}


// Nl and Belg
// for (const marketPrefix of nlAndBelgiumMarketPrefixes) {
//   const url = `https://st1-${marketPrefix}.rs-online.com/web/`
//   const response = await fetch(url)
//   const html = await response.text()
//
//   fs.writeFileSync(`./htmls/${marketPrefix}.html`, html)
//
//   const root = parse(html)
//   const links = root.querySelector('[data-qa="social-media-links"]')
//   const currentLinksMap = {}
//   for (const link of links.querySelectorAll('a')) {
//     currentLinksMap[link.getAttribute('aria-label')] = link.getAttribute('href')
//   }
//   console.log({objectsAreSame: objectsAreSame(currentLinksMap, getNlAndBelgiumMarketPrefixesLinksMap())})
// }

// italy
// const url = `https://st1-${italyMarketPrefix}.rs-online.com/web/`
// const response = await fetch(url)
// const html = await response.text()
//
// fs.writeFileSync(`./htmls/${italyMarketPrefix}.html`, html)
//
// const root = parse(html)
// const links = root.querySelector('[data-qa="social-media-links"]')
// const currentLinksMap = {}
// for (const link of links.querySelectorAll('a')) {
//   currentLinksMap[link.getAttribute('aria-label')] = link.getAttribute('href')
// }
// console.log({objectsAreSame: objectsAreSame(currentLinksMap, getItalyMarketPrefixLinksMap())})

// germany
// const url = `https://st1-${germanyMarketPrefix}.rs-online.com/web/`
// const response = await fetch(url)
// const html = await response.text()
//
// fs.writeFileSync(`./htmls/${germanyMarketPrefix}.html`, html)
//
// const root = parse(html)
// const links = root.querySelector('[data-qa="social-media-links"]')
// const currentLinksMap = {}
// for (const link of links.querySelectorAll('a')) {
//   currentLinksMap[link.getAttribute('aria-label')] = link.getAttribute('href')
// }
// console.log({objectsAreSame: objectsAreSame(currentLinksMap, getGermanyMarketPrefixLinksMap())})

// france
// const url = `https://st1-${franceMarketPrefix}.rs-online.com/web/`
// const response = await fetch(url)
// const html = await response.text()
//
// fs.writeFileSync(`./htmls/${franceMarketPrefix}.html`, html)
//
// const root = parse(html)
// const links = root.querySelector('[data-qa="social-media-links"]')
// const currentLinksMap = {}
// for (const link of links.querySelectorAll('a')) {
//   currentLinksMap[link.getAttribute('aria-label')] = link.getAttribute('href')
// }
// console.log({objectsAreSame: objectsAreSame(currentLinksMap, getFranceMarketPrefixLinksMap())})

// uk, ie, other
// for (const marketPrefix of ukAndIeAndOtherMarketsPrefixes) {
//   const url = `https://st1-${marketPrefix}.rs-online.com/web/`
//   const response = await fetch(url)
//   const html = await response.text()
//
//   fs.writeFileSync(`./htmls/${marketPrefix}.html`, html)
//
//   const root = parse(html)
//   const links = root.querySelector('[data-qa="social-media-links"]')
//   const currentLinksMap = {}
//   for (const link of links.querySelectorAll('a')) {
//     currentLinksMap[link.getAttribute('aria-label')] = link.getAttribute('href')
//   }
//   console.log({objectsAreSame: objectsAreSame(currentLinksMap, getUkAndIeAndOtherMarketsPrefixesLinksMap(marketPrefix))})
// }

// Spain and Portugal
// for (const marketPrefix of spainAndPortugalMarketPrefixes) {
//   const url = `https://st1-${marketPrefix}.rs-online.com/web/`
//   const response = await fetch(url)
//   const html = await response.text()
//
//   fs.writeFileSync(`./htmls/${marketPrefix}.html`, html)
//
//   const root = parse(html)
//   const links = root.querySelector('[data-qa="social-media-links"]')
//   const currentLinksMap = {}
//   for (const link of links.querySelectorAll('a')) {
//     currentLinksMap[link.getAttribute('aria-label')] = link.getAttribute('href')
//   }
//   console.log({objectsAreSame: objectsAreSame(currentLinksMap, getSpainAndPortugalMarketPrefixesLinksMap())})
// }
