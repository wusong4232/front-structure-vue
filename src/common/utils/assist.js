/**
 * Created by zhouzhigang on 2017/10/14.
 */

const SPECIAL_CHARS_REGEXP = /([\\:\-\\_]+(.))/g
const MOZ_HACK_REGEXP = /^moz([A-Z])/

function camelCase (name) {
  return name.replace(SPECIAL_CHARS_REGEXP, function (_, separator, letter, offset) {
    return offset ? letter.toUpperCase() : letter
  }).replace(MOZ_HACK_REGEXP, 'Moz$1')
}

// getStyle
export function getStyle (element, styleName) {
  if (!element || !styleName) return null
  styleName = camelCase(styleName)
  if (styleName === 'float') {
    styleName = 'cssFloat'
  }
  try {
    const computed = document.defaultView.getComputedStyle(element, '')
    return element.style[styleName] || computed ? computed[styleName] : null
  } catch (e) {
    return element.style[styleName]
  }
}

// Find components upward
function findComponentUpward (context, componentName, componentNames) {
  if (typeof componentName === 'string') {
    componentNames = [componentName]
  } else {
    componentNames = componentName
  }

  let parent = context.$parent
  let name = parent.$options.name
  while (parent && (!name || componentNames.indexOf(name) < 0)) {
    parent = parent.$parent
    if (parent) name = parent.$options.name
  }
  return parent
}
export {findComponentUpward}

// Find component downward
function findComponentDownward (context, componentName) {
  const childrens = context.$children
  let children = null

  if (childrens.length) {
    childrens.forEach(child => {
      const name = child.$options.name
      if (name === componentName) {
        children = child
      }
    })

    for (let i = 0; i < childrens.length; i++) {
      const child = childrens[i]
      const name = child.$options.name
      if (name === componentName) {
        children = child
        break
      } else {
        children = findComponentDownward(child, componentName)
        if (children) break
      }
    }
  }
  return children
}
export {findComponentDownward}
