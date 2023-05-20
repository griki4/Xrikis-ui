import {series, parallel, dest, src} from "gulp"
import less from "gulp-less"
import autoprefixer from "gulp-autoprefixer"
import run from "../utils/run"
import {pkgPath, componentPath} from "../utils/paths"
import delPath from "../utils/delpath"

//删除打包文件
export const removeDist = () => {
    return delPath(`${pkgPath}/Xrikis`)
}

export const buildStyle = () => {
    return src(`${componentPath}/src/**/style/**.less`)
        .pipe(less())
        .pipe(autoprefixer())
        .pipe(dest(`${pkgPath}/Xrikis/lib/src`))
        .pipe(dest(`${pkgPath}/Xrikis/es/src`))
}

//打包组件
export const buildComponent = async () => {
    run("pnpm run build", componentPath)
}

//先删除打包文件，然后并行执行样式和组件的打包
export default series(
    async () => removeDist(),
    parallel(
        async () => buildStyle(),
        async () => buildComponent()
    )
)
