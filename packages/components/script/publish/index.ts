import run from "../utils/run"
import {pkgPath} from "../utils/paths"
import {series} from "gulp"
//发布组件库的命令
export const publishComponent = async () => {
    run("release-it", `${pkgPath}/Xrikis`)
};
export default series(async () => publishComponent())
