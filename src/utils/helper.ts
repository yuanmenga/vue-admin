import _ from "lodash";
class Helper {
  public env: ImportMetaEnv;
  constructor() {
    this.env = this.getEnvs();
  }
  private getEnvs(): ImportMetaEnv {
    const envs: any = _.cloneDeep(import.meta.env);
    Object.entries(envs).forEach(([key, value]) => {
      if (value == "true" || value == "false")
        envs[key] = value == "true" ? true : false;
      else if (/^\d+$/.test(value as string)) envs[key] = Number(value);
      else if (value == "null") envs[key] = null;
      else if (value == "undefined") envs[key] = undefined;
    });
    return envs;
  }
}
export default new Helper();
