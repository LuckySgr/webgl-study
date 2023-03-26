#version 100
precision mediump float;
varying vec4 v_Color;
void main() {
    float dis = distance(gl_PointCoord, vec2(0.5, 0.5));
    if(dis < 0.5){
        gl_FragColor = v_Color;
    } else {
        discard;
    }
}