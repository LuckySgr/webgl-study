#version 100
precision mediump float;
void main() {
    float dis = distance(gl_PointCoord, vec2(0.5, 0.5));
    if(dis < 0.5) {
        gl_FragColor = vec4(0.0, 0.1, 0.4, 0.5);
    } else {
        discard;
    }


}