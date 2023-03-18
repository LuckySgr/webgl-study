#version 100
attribute vec4 a_Position;
uniform float u_Scale;
void main() {
    gl_Position = vec4(vec3(a_Position) * u_Scale, a_Position.w);
}