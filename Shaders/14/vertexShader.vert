#version 100
attribute vec4 a_Position;
uniform float u_sinB;
uniform float u_cosB;
void main() {
    gl_Position.x = a_Position.x * u_cosB - a_Position.y * u_sinB;
    gl_Position.y = a_Position.y * u_cosB + a_Position.x * u_sinB;
    gl_Position.z = a_Position.z;
    gl_Position.w = a_Position.w;
}