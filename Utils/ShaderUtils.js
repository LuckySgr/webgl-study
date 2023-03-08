class ShaderUtils {
    initShaderProgram(gl, vsSource, fsSource) {
        // 1、创建程序对象
        const program = gl.createProgram();
        // 2、建立着色对象
        const vertexShader = this.#loadShader(gl, gl.VERTEX_SHADER, vsSource);
        const fragmentShader = this.#loadShader(gl, gl.FRAGMENT_SHADER, fsSource);
        // 3、把顶点着色对象装进程序对象中
        gl.attachShader(program, vertexShader);
        // 4、把片元着色对象装进程序对象中
        gl.attachShader(program, fragmentShader);
        // 5、连接webgl上下文对象和程序对象
        gl.linkProgram(program);
        // 6、启动程序对象
        gl.useProgram(program);
        // 7、将程序对象挂到上下文对象上
        gl.program = program;
        return true;
    }

    #loadShader(gl, type, source) {
        // 1、根据着色类型，建立着色器对象
        const shader = gl.createShader(type);
        // 2、将着色器源文件传入着色器对象中
        gl.shaderSource(shader, source);
        // 3、编译着色器对象
        gl.compileShader(shader);
        // 4、返回着色器对象
        return shader;
    }

    // 获取Shader代码
    getShaderCode(url) {
        // JavaScript 原生ajax请求
        let httpRequest = new XMLHttpRequest();//第一步：建立所需的对象
        httpRequest.open('GET', url, false);//第二步：打开连接  将请求参数写在url中  eg:"http://localhost:8080/xxx/xxx"
        httpRequest.send();//第三步：发送请求  将请求参数写在URL中
        return httpRequest.responseText;
    }
}

export default new ShaderUtils()