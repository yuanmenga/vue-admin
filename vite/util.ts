import _ from 'lodash'

export default function parseEnv(env: Record<string, any>): ViteEnv {
  //使用loadsh包的深拷贝
  const envs: any = _.cloneDeep(env)
  Object.entries(env).forEach(([key, value]) => {
    if (value == 'true' || value == 'false') envs[key] = value == 'true' ? true : false
    else if (/^\d+$/.test(value)) envs[key] = Number(value)
    else if (value == 'null') envs[key] = null
    else if (value == 'undefined') envs[key] = undefined
  })
  return envs
}
