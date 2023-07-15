import _ from 'lodash'
//env转换格式工具
const env: ImportMetaEnv = _.cloneDeep(import.meta.env)
Object.entries(env).forEach(([key, value]) => {
  if (value == 'true' || value == 'false') env[key] = value == 'true' ? true : false
  else if (/^\d+$/.test(value as string)) env[key] = Number(value)
  else if (value == 'null') env[key] = null
  else if (value == 'undefined') env[key] = undefined
  return env
})

export default env
